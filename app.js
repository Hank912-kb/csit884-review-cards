(function(){
"use strict";

var GROUPS = [
  {id:"html", name:"HTML"},
  {id:"css",  name:"CSS"},
  {id:"js",   name:"JavaScript"},
  {id:"form", name:"表單"},
  {id:"xml",  name:"XML"},
  {id:"cmp",  name:"易混淆"}
];
var TOPICS = [
  {id:"html",    g:"html", name:"HTML 基礎"},
  {id:"table",   g:"html", name:"表格"},
  {id:"linkimg", g:"html", name:"圖片・連結"},
  {id:"xhtml",   g:"html", name:"XHTML"},
  {id:"css",     g:"css",  name:"CSS 基礎"},
  {id:"csssel",  g:"css",  name:"選擇器"},
  {id:"jsbasic", g:"js",   name:"JS 語法"},
  {id:"jsdom",   g:"js",   name:"改內容邏輯"},
  {id:"jsobj",   g:"js",   name:"字串日期陣列"},
  {id:"jsevent", g:"js",   name:"事件"},
  {id:"anim",    g:"js",   name:"隨機動畫"},
  {id:"form",    g:"form", name:"表單"},
  {id:"formval", g:"form", name:"表單驗證"},
  {id:"xml",     g:"xml",  name:"XML"},
  {id:"dtd",     g:"xml",  name:"DTD"},
  {id:"xsd",     g:"xml",  name:"XSD"},
  {id:"compare", g:"cmp",  name:"易混淆對照"}
];
var DATA = window.DATA || {};

/* ---------- helpers ---------- */
function $(id){ return document.getElementById(id); }
function el(tag, cls, text){
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined && text !== null) e.textContent = text;
  return e;
}
function shuffle(arr){
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
var store = {
  get: function(k, d){ try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch(e){ return d; } },
  set: function(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
};
function topicById(id){
  for (var i = 0; i < TOPICS.length; i++) if (TOPICS[i].id === id) return TOPICS[i];
  return null;
}
function codePre(code, opt){
  var pre = el("pre");
  pre.appendChild(HL.highlight(code, opt));
  return pre;
}
function fillCloze(item){
  return item.code.replace(/\{\{(\d+)\}\}/g, function(m, n){ return item.ans[+n - 1][0]; });
}

/* ---------- navigation ---------- */
var currentTopic = "html";

function renderNav(){
  var cur = topicById(currentTopic);
  var groupsEl = $("groups"), tabsEl = $("tabs");
  groupsEl.innerHTML = "";
  tabsEl.innerHTML = "";
  GROUPS.forEach(function(g){
    var b = el("button", "tab", g.name);
    b.type = "button"; b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", g.id === cur.g ? "true" : "false");
    b.addEventListener("click", function(){
      var first = TOPICS.filter(function(t){ return t.g === g.id; })[0];
      selectTopic(first.id);
    });
    groupsEl.appendChild(b);
  });
  var siblings = TOPICS.filter(function(t){ return t.g === cur.g; });
  tabsEl.hidden = siblings.length < 2;
  siblings.forEach(function(t){
    var b = el("button", "tab", t.name);
    b.type = "button"; b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", t.id === currentTopic ? "true" : "false");
    b.addEventListener("click", function(){ selectTopic(t.id); });
    tabsEl.appendChild(b);
  });
  var sel = tabsEl.querySelector('[aria-selected="true"]');
  if (sel && sel.scrollIntoView) { try { sel.scrollIntoView({inline:"center", block:"nearest"}); } catch(e){} }
}

function selectTopic(id){
  if (!topicById(id)) id = "html";
  currentTopic = id;
  renderNav();
  renderMain(id);
  try { history.replaceState(null, "", "#" + id); } catch(e){}
  window.scrollTo(0, 0);
}

/* ---------- topic page ---------- */
function section(label, count, anchor){
  var s = el("section", "block");
  if (anchor) s.id = "sec-" + anchor;
  var lab = el("div", "block-label", label);
  if (count != null) lab.appendChild(el("span", "count", String(count)));
  s.appendChild(lab);
  return s;
}

function cheatSec(list){
  var s = section("語法速查 · 要背的", list.length, "cheat");
  s.appendChild(el("div", "recall-hint", "默背模式：程式碼已模糊。先在腦中或紙上寫出來，再點一下區塊對答案。"));
  list.forEach(function(c){
    var box = el("div", "cheat");
    box.appendChild(el("div", "ct", c.t));
    var pre = codePre(c.code);
    pre.addEventListener("click", function(){
      if (document.body.classList.contains("recall")) pre.classList.toggle("shown");
    });
    box.appendChild(pre);
    if (c.note) box.appendChild(el("div", "cn", c.note));
    s.appendChild(box);
  });
  return s;
}

function cardsSec(list){
  var s = section("語法卡 · 點一下翻面", list.length, "cards");
  var grid = el("div", "card-grid");
  list.forEach(function(c){
    var fc = el("div", "flip");
    var inner = el("div", "flip-inner");
    var front = el("div", "face front");
    front.appendChild(el("div", "q", c.q));
    front.appendChild(el("div", "hint", "點一下看答案 →"));
    var back = el("div", "face back");
    var a = el("div", "a");
    a.appendChild(HL.highlight(c.a, {note:false}));
    back.appendChild(a);
    inner.appendChild(front); inner.appendChild(back);
    fc.appendChild(inner);
    fc.addEventListener("click", function(){ fc.classList.toggle("flipped"); });
    grid.appendChild(fc);
  });
  s.appendChild(grid);
  return s;
}

function normAns(s){
  return String(s)
    .replace(/[“”]/g, '"').replace(/[‘’]/g, "'")
    .replace(/'/g, '"').replace(/\s+/g, " ").trim();
}

function clozeBox(item){
  var box = el("div", "cloze");
  box.appendChild(el("div", "ct", item.title));
  var pre = el("pre");
  var inputs = [];
  pre.appendChild(HL.highlight(item.code, {blank: function(num){
    var n = num - 1;
    var inp = document.createElement("input");
    inp.type = "text"; inp.className = "blank";
    inp.setAttribute("autocapitalize", "off");
    inp.setAttribute("autocorrect", "off");
    inp.setAttribute("autocomplete", "off");
    inp.setAttribute("spellcheck", "false");
    var longest = 0;
    item.ans[n].forEach(function(a){ if (a.length > longest) longest = a.length; });
    inp.style.width = (Math.max(3, longest) + 2) + "ch";
    inputs[n] = inp;
    return inp;
  }}));
  box.appendChild(pre);
  if (item.note) box.appendChild(el("div", "cn", item.note));

  var bar = el("div", "bar");
  var res = el("span", "res");
  var checkBtn = el("button", "btn primary", "檢查");
  var showBtn = el("button", "btn", "看答案");
  var resetBtn = el("button", "btn", "清除");
  [checkBtn, showBtn, resetBtn].forEach(function(b){ b.type = "button"; });
  checkBtn.addEventListener("click", function(){
    var n = 0;
    inputs.forEach(function(inp, i){
      inp.classList.remove("shown");
      var ok = item.ans[i].some(function(a){ return normAns(a) === normAns(inp.value); });
      inp.classList.toggle("ok", ok);
      inp.classList.toggle("bad", !ok);
      if (ok) n++;
    });
    res.textContent = n + " / " + inputs.length + (n === inputs.length ? " 全對 🎉" : " 對");
    res.className = "res" + (n === inputs.length ? " good" : "");
  });
  showBtn.addEventListener("click", function(){
    inputs.forEach(function(inp, i){
      inp.value = item.ans[i][0];
      inp.classList.remove("ok", "bad");
      inp.classList.add("shown");
    });
    res.textContent = "";
  });
  resetBtn.addEventListener("click", function(){
    inputs.forEach(function(inp){ inp.value = ""; inp.classList.remove("ok", "bad", "shown"); });
    res.textContent = "";
  });
  bar.appendChild(checkBtn); bar.appendChild(showBtn); bar.appendChild(resetBtn); bar.appendChild(res);
  box.appendChild(bar);
  return box;
}

function clozeSec(list){
  var s = section("默寫填空 · 自己打出來再檢查", list.length, "cloze");
  list.forEach(function(it){ s.appendChild(clozeBox(it)); });
  return s;
}

function mistakesSec(list){
  var s = section("常見錯誤 · 抓錯 Wrong → Right", list.length, "mistakes");
  list.forEach(function(m){
    var card = el("div", "mistake");
    var w = el("div", "row wrong"); w.appendChild(el("span", "mark", "✕")); w.appendChild(codePre(m.wrong));
    var r = el("div", "row right"); r.appendChild(el("span", "mark", "✓")); r.appendChild(codePre(m.right));
    card.appendChild(w); card.appendChild(r);
    if (m.note) card.appendChild(el("div", "cn", m.note));
    s.appendChild(card);
  });
  return s;
}

function revealBar(btnLabel, target){
  var bar = el("div", "bar");
  var btn = el("button", "btn primary", btnLabel);
  btn.type = "button";
  btn.addEventListener("click", function(){
    target.hidden = !target.hidden;
    btn.textContent = target.hidden ? btnLabel : "收起答案";
  });
  bar.appendChild(btn);
  return bar;
}

function traceSec(list){
  var s = section("邏輯題 · 預測結果 (先想再看答案)", list.length, "trace");
  list.forEach(function(t){
    var box = el("div", "trace");
    box.appendChild(codePre(t.code));
    box.appendChild(el("div", "tq", "❓ " + t.q));
    var ans = el("div", "ans");
    ans.hidden = true;
    ans.appendChild(el("div", "a", t.a));
    if (t.why) ans.appendChild(el("div", "why", "💡 " + t.why));
    box.appendChild(revealBar("看答案", ans));
    box.appendChild(ans);
    s.appendChild(box);
  });
  return s;
}

function buildSec(list){
  var s = section("邏輯題 · 怎麼想 (拆解成步驟)", list.length, "build");
  list.forEach(function(b){
    var box = el("div", "build");
    box.appendChild(el("div", "task", b.task));
    var ans = el("div", "ans");
    ans.hidden = true;
    var ol = el("ol");
    b.steps.forEach(function(st){ ol.appendChild(el("li", null, st.replace(/^\d+\.\s*/, ""))); });
    ans.appendChild(ol);
    ans.appendChild(codePre(b.code));
    box.appendChild(revealBar("先自己想，再看步驟與程式", ans));
    box.appendChild(ans);
    s.appendChild(box);
  });
  return s;
}

function buildQuizSection(list, topicId){
  var s = section("小考 · 選項每次會重新排列", list.length, "quiz");
  var box = el("div", "quiz");
  var answered = 0, correctCount = 0;
  var scoreRow = el("div", "quiz-score");
  var scoreText = el("span", null, "0 / " + list.length + " 已作答");
  var resetBtn = el("button", "btn", "重來");
  resetBtn.type = "button";
  resetBtn.addEventListener("click", function(){
    var fresh = buildQuizSection(list, topicId);
    s.parentNode.replaceChild(fresh, s);
    fresh.scrollIntoView({block:"start"});
  });
  scoreRow.appendChild(scoreText); scoreRow.appendChild(resetBtn);

  list.forEach(function(q, qi){
    var qBlock = el("div", "quiz-q");
    qBlock.appendChild(el("div", "qtext", (qi + 1) + ". " + q.q));
    var order = shuffle(q.opts.map(function(_, i){ return i; }));
    var done = false;
    var btns = [];
    var ex = el("div", "explain", "💡 " + q.explain);
    order.forEach(function(oi){
      var btn = el("button", "opt", q.opts[oi]);
      btn.type = "button";
      btns.push({b:btn, i:oi});
      btn.addEventListener("click", function(){
        if (done) return;
        done = true; answered++;
        btns.forEach(function(x){
          x.b.disabled = true;
          if (x.i === q.correct) x.b.classList.add("correct");
        });
        if (oi === q.correct) correctCount++; else btn.classList.add("wrong");
        ex.classList.add("show");
        scoreText.textContent = answered + " / " + list.length + " 已作答　正確 " + correctCount;
      });
      qBlock.appendChild(btn);
    });
    qBlock.appendChild(ex);
    box.appendChild(qBlock);
  });
  box.appendChild(scoreRow);
  s.appendChild(box);
  return s;
}

var SEC_LABELS = {cheat:"語法速查", cards:"語法卡", cloze:"默寫", mistakes:"抓錯", trace:"預測結果", build:"怎麼想", quiz:"小考"};

function renderMain(id){
  var d = DATA[id];
  var main = $("main");
  main.innerHTML = "";
  if (!d){ main.appendChild(el("div", "intro", "這個單元還沒有內容。")); return; }

  var intro = el("div", "intro");
  intro.appendChild(el("div", null, d.intro));
  var jump = el("div", "jump");
  main.appendChild(intro);

  var parts = [
    ["cheat",    d.cheat,    cheatSec],
    ["cards",    d.cards,    cardsSec],
    ["cloze",    d.cloze,    clozeSec],
    ["mistakes", d.mistakes, mistakesSec],
    ["trace",    d.trace,    traceSec],
    ["build",    d.build,    buildSec],
    ["quiz",     d.quiz,     function(l){ return buildQuizSection(l, id); }]
  ];
  var nodes = [];
  parts.forEach(function(p){
    if (!p[1] || !p[1].length) return;
    var a = el("a", null, SEC_LABELS[p[0]] + " " + p[1].length);
    a.href = "#sec-" + p[0];
    a.addEventListener("click", function(ev){
      ev.preventDefault();
      var t = $("sec-" + p[0]);
      if (t) t.scrollIntoView({behavior:"smooth", block:"start"});
    });
    jump.appendChild(a);
    nodes.push(p[2](p[1]));
  });
  intro.appendChild(jump);
  var legend = el("div", "legend");
  [["tag","<標籤>"],["attr","屬性"],["str","\"字串\""],["kw","關鍵字"],["fn","函式()／CSS屬性"],["num","數字"],["com","註解"]].forEach(function(x){
    legend.appendChild(el("span", "hl-" + x[0], x[1]));
  });
  main.appendChild(legend);
  nodes.forEach(function(n){ main.appendChild(n); });
}

/* ---------- syntax colours on/off ---------- */
var hlBtn = $("hlBtn");
function setHl(on){
  document.body.classList.toggle("nohl", !on);
  hlBtn.setAttribute("aria-pressed", on ? "true" : "false");
  store.set("csit884-hl", on);
}
hlBtn.addEventListener("click", function(){ setHl(document.body.classList.contains("nohl")); });

/* ---------- recall mode ---------- */
var recallBtn = $("recallBtn");
function setRecall(on){
  document.body.classList.toggle("recall", on);
  recallBtn.setAttribute("aria-pressed", on ? "true" : "false");
  if (!on) {
    Array.prototype.forEach.call(document.querySelectorAll(".cheat pre.shown"), function(p){ p.classList.remove("shown"); });
  }
  store.set("csit884-recall", on);
}
recallBtn.addEventListener("click", function(){ setRecall(!document.body.classList.contains("recall")); });

/* ============================================================
   Shuffle overlay
   ============================================================ */
var overlay = $("overlay");
var deck = [];
var weak = store.get("csit884-weak", {});
var activeFilter = "all";
var order = [];
var pos = 0;
var mode = "cards";

function S(text){ return {s:text}; }
function H(code, opt){ return {s:code, h:true, o:opt || {}}; }
function phBlank(){ return el("span", "ph", "＿＿＿"); }

function buildDeck(){
  deck = [];
  function add(t, key, i, kind, front, back, note, codeFront){
    deck.push({id:t.id + ":" + key + i, topic:t.id, topicName:t.name, kind:kind, front:front, back:back, note:note || "", codeFront:!!codeFront});
  }
  TOPICS.forEach(function(t){
    var d = DATA[t.id];
    if (!d) return;
    (d.cards || []).forEach(function(c, i){
      add(t, "c", i, "語法卡", [S(c.q)], [H(c.a, {note:false})], "", false);
    });
    (d.cloze || []).forEach(function(c, i){
      add(t, "z", i, "默寫", [S(c.title + "\n\n"), H(c.code, {blank: phBlank})], [H(fillCloze(c))], c.note, true);
    });
    (d.mistakes || []).forEach(function(m, i){
      add(t, "m", i, "抓錯", [S("這段哪裡錯？\n\n"), H(m.wrong)], [H(m.right)], m.note, true);
    });
    (d.trace || []).forEach(function(x, i){
      add(t, "t", i, "預測結果", [H(x.code), S("\n\n❓ " + x.q)], [S(x.a)], x.why, true);
    });
    (d.build || []).forEach(function(b, i){
      add(t, "b", i, "怎麼想", [S(b.task)], [S(b.steps.join("\n") + "\n\n"), H(b.code)], "", false);
    });
  });
}

function renderSegs(node, segs){
  node.textContent = "";
  segs.forEach(function(sg){
    node.appendChild(sg.h ? HL.highlight(sg.s, sg.o) : document.createTextNode(sg.s));
  });
}

function weakCount(){ return Object.keys(weak).length; }

function buildOrder(){
  var pool = [];
  deck.forEach(function(c, i){
    if (activeFilter === "all" || (activeFilter === "weak" ? weak[c.id] : c.topic === activeFilter)) pool.push(i);
  });
  order = shuffle(pool);
  pos = 0;
}

var deckFlip = $("deckFlip");

function renderDeckCard(){
  var frontBody = $("deckFrontBody");
  if (!order.length){
    deckFlip.classList.remove("flipped");
    $("deckKindFront").textContent = activeFilter === "weak" ? "沒有標記為「不熟」的卡片" : "沒有卡片";
    frontBody.textContent = activeFilter === "weak" ? "翻卡時按「✗ 不熟」，就會收集在這裡。" : "";
    frontBody.className = "body";
    $("deckKindBack").textContent = "";
    $("deckBackBody").textContent = "";
    $("deckNote").hidden = true;
    $("progress").textContent = "0 / 0";
    $("weakBadge").hidden = true;
    return;
  }
  var card = deck[order[pos]];
  deckFlip.classList.remove("flipped");
  $("deckKindFront").textContent = card.topicName + " · " + card.kind;
  renderSegs(frontBody, card.front);
  frontBody.className = "body" + (card.codeFront ? " code" : "");
  $("deckKindBack").textContent = card.kind === "抓錯" ? "正確寫法" : (card.kind === "默寫" ? "完整答案" : "答案");
  renderSegs($("deckBackBody"), card.back);
  var noteEl = $("deckNote");
  if (card.note){ noteEl.hidden = false; noteEl.textContent = card.note; } else { noteEl.hidden = true; }
  $("progress").textContent = (pos + 1) + " / " + order.length;
  $("weakBadge").hidden = !weak[card.id];
  $("weakBtn").textContent = weak[card.id] ? "✗ 還是不熟" : "✗ 不熟";
  updateChipLabels();
}

function step(delta){
  if (!order.length) return;
  pos = (pos + delta + order.length) % order.length;
  renderDeckCard();
}

function mark(isWeak){
  if (!order.length) return;
  var card = deck[order[pos]];
  if (isWeak) weak[card.id] = 1; else delete weak[card.id];
  store.set("csit884-weak", weak);
  step(1);
}

deckFlip.addEventListener("click", function(){ deckFlip.classList.toggle("flipped"); });
$("prevBtn").addEventListener("click", function(){ step(-1); });
$("nextBtn").addEventListener("click", function(){ step(1); });
$("weakBtn").addEventListener("click", function(){ mark(true); });
$("knowBtn").addEventListener("click", function(){ mark(false); });
$("shuffleBtn").addEventListener("click", function(){ buildOrder(); renderDeckCard(); });

/* chips */
var chipsEl = $("chips");
var chipMap = {};
function makeChip(id, label){
  var c = el("button", "chip", label);
  c.type = "button";
  c.setAttribute("aria-pressed", id === activeFilter ? "true" : "false");
  c.addEventListener("click", function(){ setFilter(id); });
  chipsEl.appendChild(c);
  chipMap[id] = c;
}
function initChips(){
  chipsEl.innerHTML = "";
  makeChip("all", "全部");
  makeChip("weak", "不熟 0");
  TOPICS.forEach(function(t){ makeChip(t.id, t.name); });
}
function updateChipLabels(){
  if (chipMap.weak) chipMap.weak.textContent = "不熟 " + weakCount();
}
function setFilter(id){
  if (mode === "quiz" && id === "weak") return;
  activeFilter = id;
  Object.keys(chipMap).forEach(function(k){ chipMap[k].setAttribute("aria-pressed", k === id ? "true" : "false"); });
  if (mode === "cards"){ buildOrder(); renderDeckCard(); } else { startQuiz(); }
}

/* mode switch */
function setMode(m){
  mode = m;
  $("modeCards").setAttribute("aria-pressed", m === "cards" ? "true" : "false");
  $("modeQuiz").setAttribute("aria-pressed", m === "quiz" ? "true" : "false");
  $("cardView").hidden = m !== "cards";
  $("quizView").hidden = m !== "quiz";
  chipMap.weak.hidden = m === "quiz";
  if (m === "quiz" && activeFilter === "weak") activeFilter = "all";
  Object.keys(chipMap).forEach(function(k){ chipMap[k].setAttribute("aria-pressed", k === activeFilter ? "true" : "false"); });
  if (m === "cards"){ buildOrder(); renderDeckCard(); } else { startQuiz(); }
}
$("modeCards").addEventListener("click", function(){ setMode("cards"); });
$("modeQuiz").addEventListener("click", function(){ setMode("quiz"); });

/* random quiz */
var qList = [], qPos = 0, qScore = 0, qWrong = [];
var QUIZ_SIZE = 10;

function startQuiz(){
  var pool = [];
  TOPICS.forEach(function(t){
    if (activeFilter !== "all" && activeFilter !== t.id) return;
    var d = DATA[t.id];
    (d && d.quiz || []).forEach(function(q){ pool.push({q:q, topicName:t.name}); });
  });
  qList = shuffle(pool).slice(0, QUIZ_SIZE);
  qPos = 0; qScore = 0; qWrong = [];
  renderQuiz();
}

function renderQuiz(){
  var v = $("quizView");
  v.innerHTML = "";
  v.scrollTop = 0;
  if (!qList.length){ v.appendChild(el("div", "qcard", "這個範圍沒有選擇題。")); return; }

  if (qPos >= qList.length){
    var sum = el("div", "qcard");
    sum.appendChild(el("div", "qmeta", "完成"));
    sum.appendChild(el("div", "score-big", qScore + " / " + qList.length));
    if (qWrong.length){
      sum.appendChild(el("div", "qmeta", "答錯的題目 — 記下來再看一次："));
      qWrong.forEach(function(w){
        var it = el("div", "wrong-item");
        it.appendChild(el("b", null, "[" + w.topicName + "] " + w.q.q));
        it.appendChild(document.createTextNode("答案：" + w.q.opts[w.q.correct] + "　💡 " + w.q.explain));
        sum.appendChild(it);
      });
    } else {
      sum.appendChild(el("div", "qmeta", "全部答對 🎉"));
    }
    var again = el("button", "btn primary", "再來 " + QUIZ_SIZE + " 題");
    again.type = "button";
    again.addEventListener("click", startQuiz);
    sum.appendChild(again);
    v.appendChild(sum);
    return;
  }

  var item = qList[qPos], q = item.q;
  var card = el("div", "qcard");
  card.appendChild(el("div", "qmeta", "第 " + (qPos + 1) + " / " + qList.length + " 題 · " + item.topicName + " · 目前答對 " + qScore));
  card.appendChild(el("div", "qtext", q.q));
  var order2 = shuffle(q.opts.map(function(_, i){ return i; }));
  var done = false, btns = [];
  var ex = el("div", "explain", "💡 " + q.explain);
  var next = el("button", "btn primary", qPos === qList.length - 1 ? "看結果" : "下一題 →");
  next.type = "button"; next.hidden = true;
  next.addEventListener("click", function(){ qPos++; renderQuiz(); });
  order2.forEach(function(oi){
    var btn = el("button", "opt", q.opts[oi]);
    btn.type = "button";
    btns.push({b:btn, i:oi});
    btn.addEventListener("click", function(){
      if (done) return;
      done = true;
      btns.forEach(function(x){ x.b.disabled = true; if (x.i === q.correct) x.b.classList.add("correct"); });
      if (oi === q.correct) qScore++; else { btn.classList.add("wrong"); qWrong.push(item); }
      ex.classList.add("show");
      next.hidden = false;
    });
    card.appendChild(btn);
  });
  card.appendChild(ex);
  card.appendChild(next);
  v.appendChild(card);
}

/* open / close */
function openOverlay(){
  buildDeck();
  if (!chipsEl.children.length) initChips();
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  setMode(mode);
  updateChipLabels();
}
function closeOverlay(){
  overlay.hidden = true;
  document.body.style.overflow = "";
}
$("fabShuffle").addEventListener("click", openOverlay);
$("closeOverlay").addEventListener("click", closeOverlay);
document.addEventListener("keydown", function(e){
  if (overlay.hidden) return;
  if (e.key === "Escape") closeOverlay();
  else if (mode === "cards" && e.key === "ArrowRight") step(1);
  else if (mode === "cards" && e.key === "ArrowLeft") step(-1);
});

/* ---------- start ---------- */
if (store.get("csit884-recall", false)) setRecall(true);
if (store.get("csit884-hl", true) === false) setHl(false);
var startId = (location.hash || "").replace("#", "");
selectTopic(topicById(startId) ? startId : "html");

})();
