/* Tiny syntax highlighter for the mixed HTML / CSS / JS / XML / DTD / XSD snippets on this site.
   highlight(code, opt) -> DocumentFragment whose textContent is exactly `code`.
   opt.blank(n) : return a node for a {{n}} placeholder (used by the fill-in drills)
   opt.note === false : do not dim Chinese explanations (used for prose-heavy card answers) */
(function(){
"use strict";

var KW = /^(?:var|function|if|else|for|while|return|new|null|true|false|undefined|this|typeof)$/;
var BUILTIN = /^(?:document|window|Math|Date|Number|String|Array|console)$/;
var FILE_EXT = /^(?:html|css|js|png|jpg|gif|xml|dtd|xsd)$/;
var DECL_KW = /^(?:SYSTEM|PUBLIC|EMPTY|ANY|CDATA|ID|IDREF|NMTOKEN)$/;

var R = {
  blank:    /\{\{(\d+)\}\}/y,
  hcom:     /<!--[\s\S]*?(?:-->|$)/y,
  bcom:     /\/\*[\s\S]*?(?:\*\/|$)/y,
  lcom:     /\/\/[^\n]*/y,
  url:      /https?:\/\/[^\s"'<>)]*/y,
  str:      /"[^"\n]*"|'[^'\n]*'|"[^"<]{1,160}"/y,
  ws:       /\s+/y,
  tagOpen:  /<\/?(?=[A-Za-z]|\{\{)/y,
  decl:     /<(?:\?xml|!DOCTYPE|!ELEMENT|!ATTLIST)(?![A-Za-z])/y,
  ent:      /&(?:[A-Za-z]+|#\d+);/y,
  wordTag:  /[A-Za-z_][\w:.-]*/y,
  wordJs:   /[A-Za-z_$][\w$]*/y,
  num:      /\d+(?:\.\d+)?/y,
  op:       /[=+\-*\/<>!&|%?]+/y,
  note:     /[←-⇿①-⑳✓✗　-鿿＀-￯][^\n<"'{]*/y,
  selector: /[.#*A-Za-z][\w.#*:>+~, \t-]*?(?=[ \t]*\{)/y,
  cssProp:  /[A-Za-z-]+(?=[ \t]*:)/y,
  cssNum:   /#[0-9A-Fa-f]{3,8}\b|-?\d+(?:\.\d+)?(?:px|%|em|rem|pt)?/y,
  hashKw:   /#[A-Za-z]+/y
};

function highlight(code, opt){
  opt = opt || {};
  var frag = document.createDocumentFragment();
  var buf = "";
  var i = 0, n = code.length, m, w, cls;
  var mode = "text";                 // text | tag | decl
  var declKind = "", declIdx = 0;
  var expectName = false, lastAttr = "";
  var cssDepth = 0, cssNext = false;

  function flush(){ if (buf){ frag.appendChild(document.createTextNode(buf)); buf = ""; } }
  function emit(c, t){
    if (!t) return;
    flush();
    var s = document.createElement("span");
    s.className = "hl-" + c;
    s.textContent = t;
    frag.appendChild(s);
  }
  function at(re){ re.lastIndex = i; return re.exec(code); }
  function lineHasCodeBefore(pos){
    for (var j = pos - 1; j >= 0; j--){
      var c = code.charAt(j);
      if (c === "\n") return false;
      if (c !== " " && c !== "\t") return true;
    }
    return false;
  }
  function emitCssString(s){
    var q = s.charAt(0), inner = s.slice(1, -1);
    var re = /([A-Za-z-]+)(?=\s*:)|(#[0-9A-Fa-f]{3,8}\b|-?\d+(?:\.\d+)?(?:px|%|em|rem|pt)?)/g;
    var last = 0, mm;
    emit("str", q);
    while ((mm = re.exec(inner))){
      if (mm.index > last) emit("str", inner.slice(last, mm.index));
      emit(mm[1] ? "prop" : "num", mm[0]);
      last = re.lastIndex;
    }
    if (last < inner.length) emit("str", inner.slice(last));
    emit("str", q);
  }
  function emitSelector(s){
    var re = /\.[\w-]+|#[\w-]+|:[\w-]+|[A-Za-z][\w-]*|[>+~,*]|\s+|[\s\S]/g, mm;
    while ((mm = re.exec(s))){
      var t = mm[0], c = t.charAt(0);
      if (c === "." || c === "#") emit("attr", t);
      else if (c === ":") emit("kw", t);
      else if (/[A-Za-z]/.test(c)) emit("tag", t);
      else if (/[>+~,*]/.test(c)) emit("op", t);
      else buf += t;
    }
  }

  while (i < n){
    var ch = code.charAt(i);

    /* {{n}} placeholders (fill-in drills) */
    if (ch === "{" && code.charAt(i + 1) === "{" && (m = at(R.blank))){
      flush();
      if (opt.blank) frag.appendChild(opt.blank(parseInt(m[1], 10)));
      else buf += m[0];
      i += m[0].length; expectName = false; continue;
    }

    /* inside <tag ...> */
    if (mode === "tag"){
      if ((m = at(R.ws))){ buf += m[0]; i += m[0].length; continue; }
      if (ch === "/" && code.charAt(i + 1) === ">"){ emit("tag", "/>"); i += 2; mode = "text"; continue; }
      if (ch === ">"){ emit("tag", ">"); i++; mode = "text"; continue; }
      if (ch === "="){ emit("op", "="); i++; continue; }
      if ((m = at(R.str))){
        if (lastAttr === "style") emitCssString(m[0]); else emit("str", m[0]);
        lastAttr = ""; i += m[0].length; continue;
      }
      if ((m = at(R.wordTag))){
        if (expectName){ emit("tag", m[0]); expectName = false; }
        else { emit("attr", m[0]); lastAttr = m[0]; }
        i += m[0].length; continue;
      }
      if (ch === "<" || ch === ";" || ch === "(" || ch === ")" || ch === "{" || ch === "}"){ mode = "text"; continue; }
      buf += ch; i++; continue;
    }

    /* inside <!ELEMENT ...> <!ATTLIST ...> <!DOCTYPE ...> <?xml ...?> */
    if (mode === "decl"){
      if ((m = at(R.ws))){ buf += m[0]; i += m[0].length; continue; }
      if (ch === "?" && code.charAt(i + 1) === ">"){ emit("decl", "?>"); i += 2; mode = "text"; continue; }
      if (ch === ">"){ emit("decl", ">"); i++; mode = "text"; continue; }
      if (ch === "["){ emit("op", "["); i++; mode = "text"; continue; }
      if (ch === "<"){ mode = "text"; continue; }
      if ((m = at(R.str))){ emit("str", m[0]); i += m[0].length; continue; }
      if (ch === "#" && (m = at(R.hashKw))){ emit("kw", m[0]); i += m[0].length; continue; }
      if ("()*+?|,=".indexOf(ch) >= 0){ emit("op", ch); i++; continue; }
      if ((m = at(R.wordTag))){
        w = m[0];
        if (declKind === "xml") cls = "attr";
        else if (DECL_KW.test(w)) cls = "kw";
        else if (declKind === "ATTLIST" && declIdx === 1) cls = "attr";
        else cls = "tag";
        emit(cls, w); declIdx++; i += w.length; continue;
      }
      buf += ch; i++; continue;
    }

    /* ---------- text mode ---------- */
    if ((m = at(R.ws))){
      buf += m[0];
      if (m[0].indexOf("\n") >= 0) cssNext = false;
      i += m[0].length; continue;
    }

    if (ch === "<"){
      if (code.substr(i, 4) === "<!--" && (m = at(R.hcom))){ emit("com", m[0]); i += m[0].length; continue; }
      if ((m = at(R.decl))){
        emit("decl", m[0]); mode = "decl"; declKind = m[0].slice(2); declIdx = 0; i += m[0].length; continue;
      }
      if ((m = at(R.tagOpen))){
        emit("tag", m[0]); mode = "tag"; expectName = true; lastAttr = ""; i += m[0].length; continue;
      }
    }
    if (ch === "/"){
      var nx = code.charAt(i + 1);
      if (nx === "*" && (m = at(R.bcom))){ emit("com", m[0]); i += m[0].length; continue; }
      if (nx === "/" && code.charAt(i - 1) !== ":" && (m = at(R.lcom))){ emit("com", m[0]); i += m[0].length; continue; }
    }
    if (ch === "h" && (m = at(R.url))){ emit("url", m[0]); i += m[0].length; continue; }
    if (ch === "]" && code.charAt(i + 1) === ">"){ emit("decl", "]>"); i += 2; continue; }
    if (ch === "&" && (m = at(R.ent))){ emit("ent", m[0]); i += m[0].length; continue; }
    if ((ch === '"' || ch === "'") && (m = at(R.str))){ emit("str", m[0]); i += m[0].length; continue; }

    /* Chinese explanation: dimmed when it trails code, left alone when the line is prose */
    if (ch.charCodeAt(0) >= 0x2190 && (m = at(R.note))){
      emit(opt.note !== false && lineHasCodeBefore(i) ? "note" : "prose", m[0]);
      i += m[0].length; continue;
    }

    /* CSS: selector line, then declarations inside { } */
    if (ch === "{"){
      if (cssNext){ cssDepth++; cssNext = false; emit("op", "{"); } else buf += "{";
      i++; continue;
    }
    if (cssDepth === 0 && /[.#*A-Za-z]/.test(ch) && !lineHasCodeBefore(i) && (m = at(R.selector)) &&
        !/^(?:else|do|try|finally)\b/.test(m[0])){
      emitSelector(m[0]); cssNext = true; i += m[0].length; continue;
    }
    if (cssDepth > 0){
      if (ch === "}"){ cssDepth--; emit("op", "}"); i++; continue; }
      if ((m = at(R.cssProp))){ emit("prop", m[0]); i += m[0].length; continue; }
      if ((m = at(R.cssNum))){ emit("num", m[0]); i += m[0].length; continue; }
      if (ch === ":" || ch === ";"){ emit("op", ch); i++; continue; }
    }

    /* JavaScript words */
    if ((m = at(R.wordJs))){
      w = m[0];
      var prev = i > 0 ? code.charAt(i - 1) : "";
      var next = code.charAt(i + w.length);
      if (KW.test(w)) cls = "kw";
      else if (next === "(") cls = "fn";
      else if (prev === "." && /[\w)\]]/.test(code.charAt(i - 2)) && !FILE_EXT.test(w)) cls = "prop";
      else if (BUILTIN.test(w)) cls = "bi";
      else cls = "";
      if (cls) emit(cls, w); else buf += w;
      i += w.length; continue;
    }
    if (ch >= "0" && ch <= "9" && (m = at(R.num))){ emit("num", m[0]); i += m[0].length; continue; }
    if ((m = at(R.op))){ emit("op", m[0]); i += m[0].length; continue; }

    buf += ch; i++;
  }
  flush();
  return frag;
}

window.HL = { highlight: highlight };
})();
