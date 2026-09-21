window.DATA = window.DATA || {};

/* ============================================================
   CSS 基礎
   ============================================================ */
DATA.css = {
  intro: "CSS (Cascading Style Sheets) 把「內容 (HTML)」和「外觀 (style)」分開。三種加入方式：inline、document、external，優先權 inline > document > external。",
  cheat: [
    {t:"三種加入 CSS 的方式", code:`1) Inline：寫在標籤的 style 屬性
<body style="background-color:lightgrey;">
<h1 style="color:blue;">This is a Blue Heading</h1>

2) Document：寫在 <head> 裡的 <style>
<head>
  <title>W3</title>
  <style>
    body {background-color:lightgrey;}
    h1 {color:blue;}
    p {border:1px solid black; padding:10px;}
  </style>
</head>

3) External：獨立的 .css 檔，用 <link> 引入
<head>
  <title>W3</title>
  <link rel="stylesheet" href="path/to/mystyle.css">
</head>

mystyle.css 的內容 (只有規則，不能寫 <style> 標籤)：
body {background-color:lightgrey;}
h1 {color:blue;}`, note:"inline = 行內；document = 內部 (文件內)；external = 外部檔案。"},
    {t:"宣告格式 property:value", code:`<p style="border:1px solid black; padding:10px; color:blue;
          font-family:courier; font-size:150%;">
  This is a paragraph with a lot of styling
</p>

property:value              ← 冒號分隔屬性與值
多個屬性之間用 分號 ;         ← 不是逗號
一個屬性可以有多個值 (用空白隔開)：border:1px solid black`, note:""},
    {t:"顏色", code:`color:lightgrey;         140 個標準顏色名稱
color:#D3D3D3;           16 進位色碼
background-color:lightgrey;`, note:""},
    {t:"慣例寫法 · 註解", code:`body {
  background-color:lightgrey;     每個屬性各佔一行
}
h1 {
  color:blue;
}

/* 這是單行註解 */
/* 這是
   多行註解 */`, note:"CSS 註解是 /* */ (不是 // 也不是 <!-- -->)。"},
    {t:"優先權 (誰蓋過誰)", code:`inline  >  document (<style>)  >  external (.css)
高 ─────────────────────────────────────→ 低

例：external 設 h1 是藍色，document 設 h1 是綠色，
    inline 設 style="color:red"
    → 最後是 紅色`, note:"只有「同一個屬性」衝突時才比較優先權；不衝突的屬性會全部套用。"}
  ],
  cards: [
    {q:"三種加入 CSS 的方式？", a:`1) inline：標籤的 style 屬性
2) document：<head> 的 <style>
3) external：<link rel="stylesheet" href="x.css">`},
    {q:"三種方式的優先權順序？", a:`inline > document > external
(離元素越近，優先權越高)`},
    {q:"外部 CSS 怎麼引入？", a:`<link rel="stylesheet"
      href="path/to/mystyle.css">

寫在 <head> 裡`},
    {q:"CSS 宣告的格式？多個屬性怎麼分隔？", a:`property:value;
用分號 ; 隔開多個屬性
一個屬性的多個值用空白隔開：
border:1px solid black`},
    {q:"CSS 註解怎麼寫？", a:`/* 單行或多行註解 */`},
    {q:"顏色有哪兩種指定方式？", a:`顏色名稱：lightgrey (共 140 個)
16 進位色碼：#D3D3D3`},
    {q:"external CSS 的 .css 檔案裡可以寫 <style> 嗎？", a:`不可以。
.css 檔案只放規則：
h1 {color:blue;}
不需要也不能有 <style> 標籤`},
    {q:"為什麼要用 CSS (分離內容與樣式)？", a:`HTML 負責「內容」，
CSS 負責「外觀」，
兩者分開就能只改一個 CSS 檔，
整個網站的樣式一起更新。`},
    {q:"external CSS 和 document CSS 對同一屬性設了不同值，誰贏？", a:`document 贏
(external 會被 document 蓋過，
 document 又會被 inline 蓋過)`}
  ],
  cloze: [
    {title:"默寫：引入外部 CSS", code:`<{{1}} {{2}}="stylesheet" {{3}}="path/to/mystyle.css">`, ans:[["link"],["rel"],["href"]]},
    {title:"默寫：inline CSS", code:`<p {{1}}="border:1px solid black{{2}} padding:10px;">
  This is a paragraph with border
</p>`, ans:[["style"],[";"]]},
    {title:"默寫：document CSS", code:`<head>
  <{{1}}>
    body { background-color{{2}}lightgrey{{3}} }
    h1 { color:blue; }
  </{{4}}>
</head>`, ans:[["style"],[":"],[";"],["style"]]},
    {title:"默寫：CSS 註解", code:`{{1}} This is a comment {{2}}`, ans:[["/*"],["*/"]]}
  ],
  mistakes: [
    {wrong:`p {
  border:1px solid black,
  padding:10px
}`, right:`p {
  border:1px solid black;
  padding:10px;
}`, note:"宣告之間用分號 ; 隔開，不是逗號。漏了分號後面的屬性常常直接失效。"},
    {wrong:`h1 {
  color=blue;
}`, right:`h1 {
  color:blue;
}`, note:"CSS 屬性與值用冒號 : 分隔，不是等號。"},
    {wrong:`// this is a comment
p { color:red; }`, right:`/* this is a comment */
p { color:red; }`, note:"CSS 沒有 // 註解，要用 /* */。"},
    {wrong:`(mystyle.css)
<style>
  body {background-color:lightgrey;}
</style>`, right:`(mystyle.css)
body {background-color:lightgrey;}`, note:"外部 .css 檔案裡只放規則，不能有 <style> 標籤 (那是 HTML)。"},
    {wrong:`<p style="color:blue; border 1px solid black">`, right:`<p style="color:blue; border:1px solid black">`, note:"border 後面少了冒號。"}
  ],
  trace: [
    {code:`external (mystyle.css)：  h1 { color:blue; }
document (<style>)：      h1 { color:green; }
html：                   <h1 style="color:red;">Hi</h1>`, q:"h1 最後是什麼顏色？", a:"紅色 (red)", why:"inline > document > external。"},
    {code:`external (mystyle.css)：  h1 { color:blue; }
document (<style>)：      h1 { color:green; }
html：                   <h1>Hi</h1>`, q:"h1 最後是什麼顏色？", a:"綠色 (green)", why:"document 優先於 external。"},
    {code:`external：  p { border:1px solid black; padding:10px; }
document：  p { color:blue; }
html：      <p>Hello</p>`, q:"p 會有什麼樣子？", a:"有黑色細邊框、內距 10px，而且文字是藍色。", why:"兩個規則設定的是「不同屬性」，沒有衝突，全部都會套用。"},
    {code:`h1, h2 {
  border:1px solid black;
  color:lightgrey;
}`, q:"這條規則套用在哪些元素？", a:"所有 h1 和所有 h2", why:"用逗號分隔的多個選擇器，共用同一組宣告。"}
  ],
  quiz: [
    {q:"三種 CSS 優先順序由高到低？", opts:["inline > document > external","external > document > inline","document > inline > external","三者一樣高"], correct:0, explain:"離元素越近優先權越高。"},
    {q:"宣告多個 CSS 屬性時，要用什麼分隔？", opts:["分號 ;","逗號 ,","句點 .","冒號 :"], correct:0, explain:"property:value; property:value;"},
    {q:"下列哪個是 CSS 的註解？", opts:["/* comment */","// comment","<!-- comment -->","# comment"], correct:0, explain:"// 是 JS，<!-- --> 是 HTML。"},
    {q:"引入外部 CSS 檔案的標籤是？", opts:["<link rel=\"stylesheet\" href=\"...\">","<style src=\"...\">","<css href=\"...\">","<script src=\"...\">"], correct:0, explain:"link 放在 head 裡。"},
    {q:"document CSS 是寫在哪個標籤裡？", opts:["<style>...</style>","<css>...</css>","<script>...</script>","<link>...</link>"], correct:0, explain:"<style> 放在 <head>。"},
    {q:"CSS 屬性與值之間用什麼分隔？", opts:["冒號 :","等號 =","空白","箭頭 ->"], correct:0, explain:"color:blue"},
    {q:"external 設 p 為藍色，inline 設同一個 p 為紅色，結果？", opts:["紅色","藍色","一半紅一半藍","出錯"], correct:0, explain:"inline 優先權最高。"}
  ]
};

/* ============================================================
   CSS 選擇器
   ============================================================ */
DATA.csssel = {
  intro: "選擇器 (selector) 決定「這條規則套用在誰身上」。重點：simple / class (.) / id (#)、子孫 (空白) vs 直接子元素 (>)、偽類 :link :visited :hover，以及 list 樣式。",
  cheat: [
    {t:"Simple · Class · Id", code:`/* simple selector：標籤名稱 */
p { border:1px solid black; padding:10px; }
h1, h2 { color:lightgrey; }              逗號 = 多個元素共用

/* class selector：以 . 開頭 */
<h1 class="userInfo">…</h1>   <p class="userInfo">…</p>
.eticket { color:green; }                所有 class="eticket" 的元素
p.userInfo { border:1px solid black; }   只有 class 是 userInfo 的 p
h1.userInfo, h2.userInfo { color:blue; }

/* id selector：以 # 開頭 (每個 id 在頁面上必須唯一) */
<h1 id="userHeading">…</h1>
#userHeading { color:blue; }`, note:"class 可重複使用；id 全頁唯一。p.userInfo (沒空白) = 同時是 p 且 class 為 userInfo。"},
    {t:"子孫 vs 直接子元素", code:`E F { ... }       E 裡面所有的 F (子孫，不管隔幾層)   → 空白
E > F { ... }     E 的「直接」子元素 F                 → >

div i { color:red; }              div 裡所有的 i
div > i { color:red; }            div 的直接子元素 i
div.userInfo i { color:red; }     class 為 userInfo 的 div 裡所有的 i
div.userInfo > i { color:red; }    … 的直接子元素 i
div.bankInfo i { color:red; }`, note:"descendant / ancestor (子孫 / 祖先)；child / parent (子 / 父)。F 是 E 的 child，則 F 一定也是 E 的 descendant。"},
    {t:"偽類 pseudo-class", code:`a:link    { color:red; }      還沒點過的連結
a:visited { color:green; }    已經點過的連結
h1:hover  { color:blue; }     滑鼠移到元素上時`, note:""},
    {t:"清單樣式", code:`ol { list-style-type:decimal; }        1. 2. 3.
ol ol { list-style-type:upper-roman; } 巢狀在 ol 裡的 ol：I. II. III.
ol { list-style-image:url(path/to/imagefile); }

其他值：decimal-leading-zero  lower-alpha  lower-latin
        lower-greek  disc  square  circle`, note:""},
    {t:"span 與 div", code:`<div>  = 區塊容器 (block)，用來分區段套不同樣式
<span> = 行內容器 (inline)，讓一行文字裡某幾個字套不同樣式

span.specialText { color:red; font-size:150%; }
This is some <span class="specialText">special text</span>.

div.userInfo { border:1px solid black; padding:10px; }
div.bankInfo { background-color:lightgrey; }
<div class="userInfo"><p>This section displays user information.</p></div>
<div class="bankInfo"><p>This section display bank information.</p></div>`, note:""}
  ],
  cards: [
    {q:".eticket 和 #eticket 差在哪？", a:`.eticket → class selector
 選 class="eticket" 的所有元素
#eticket → id selector
 選 id="eticket" 的那一個元素
 (id 在頁面上必須唯一)`},
    {q:"h1, h2 { } 是什麼意思？", a:`逗號 = 「或」
所有 h1 和所有 h2 都套用這組樣式`},
    {q:"p.userInfo 是什麼意思？和 p .userInfo 一樣嗎？", a:`p.userInfo (中間沒空白)
= 同時是 p 且 class="userInfo"

p .userInfo (中間有空白)
= p 裡面 (子孫) class 為 userInfo 的元素

不一樣！`},
    {q:"E F 和 E > F 差在哪？", a:`E F   → E 的所有子孫 F (任意層)
E > F → E 的直接子元素 F (只有第一層)`},
    {q:"什麼是 child 和 descendant？", a:`child：直接寫在 E 裡面的下一層
descendant：E 裡面任何層級的元素

child 一定是 descendant，
descendant 不一定是 child`},
    {q:"三個常用偽類？", a:`a:link    未點過的連結
a:visited 點過的連結
h1:hover  滑鼠移上去時`},
    {q:"ol 巢狀清單，第二層想用羅馬數字？", a:`ol { list-style-type:decimal; }
ol ol { list-style-type:upper-roman; }`},
    {q:"list-style-type 常用值？", a:`decimal · decimal-leading-zero
lower-alpha · lower-latin
lower-greek · upper-roman
disc · square · circle`},
    {q:"span 和 div 的差別與用途？", a:`div = 區塊，切出頁面不同區段
span = 行內，改一行文字中的幾個字

都常搭配 class 使用`},
    {q:"list 用圖片當項目符號？", a:`ol { list-style-image:url(path/to/imagefile); }`}
  ],
  cloze: [
    {title:"默寫：class / id selector", code:`{{1}}eticket { color:green; }              class 為 eticket 的元素
{{2}}userHeading { color:blue; }           id 為 userHeading 的元素
p{{3}}userInfo { border:1px solid black; } p 且 class 為 userInfo`, ans:[["."],["#"],["."]]},
    {title:"默寫：子孫 vs 直接子元素", code:`div {{1}} i { color:red; }               div 的直接子元素 i
div.userInfo {{2}} i { color:red; }      userInfo 這個 div 的直接子元素 i
div.bankInfo{{3}}i { color:red; }        bankInfo 這個 div 的直接子元素 i`, ans:[[">"],[">"],[">"]], note:"子孫用「空白」，直接子元素用 >。第 3 格請自己想：兩邊沒空白，只填 > 符號。"},
    {title:"默寫：連結的偽類", code:`a:{{1}} { color:red; }
a:{{2}} { color:green; }
h1:{{3}} { color:blue; }`, ans:[["link"],["visited"],["hover"]]},
    {title:"默寫：巢狀清單", code:`ol { list-style-type:{{1}}; }
ol {{2}} { list-style-type:upper-roman; }`, ans:[["decimal"],["ol ol"]]}
  ],
  mistakes: [
    {wrong:`<p id="userDetails">…</p>

.userDetails { color:blue; }`, right:`<p id="userDetails">…</p>

#userDetails { color:blue; }`, note:"id 用 # 選；class 才用 . 選。"},
    {wrong:`<h1 class="userInfo">…</h1>

#userInfo { color:blue; }`, right:`<h1 class="userInfo">…</h1>

.userInfo { color:blue; }`, note:"class 用 . 選。"},
    {wrong:`div.userInfo i { … }   /* 想選「直接子元素 i」 */`, right:`div.userInfo > i { … }`, note:"空白 = 所有子孫；要只選直接子元素一定要用 >。"},
    {wrong:`h1: hover { color:blue; }`, right:`h1:hover { color:blue; }`, note:"偽類 (pseudo-class) 的冒號前後不能有空白。"}
  ],
  trace: [
    {code:`<div>
  Some text <i>italic 1</i> here.
  <p> Hi there <i>italic 2</i> </p>
  <div> This is the final <i>italic 3</i>. </div>
</div>`, q:"最外層 div 的「子元素 (children)」有哪些？「子孫 (descendants)」有哪些？", a:"子元素：italic 1 的 i、p、裡面那個 div (共 3 個)。\n子孫：i (italic 1)、p、p 裡的 i (italic 2)、裡面的 div、div 裡的 i (italic 3)。", why:"italic 2 在 p 裡、italic 3 在內層 div 裡，所以只是外層 div 的子孫，不是直接子元素。"},
    {code:`<div>
  Some text <i>italic 1</i> here.
  <p> Hi there <i>italic 2</i> </p>
  <div> This is the final <i>italic 3</i>. </div>
</div>

div i { color:red; }`, q:"哪些 i 會變紅色？", a:"italic 1、italic 2、italic 3 全部", why:"空白 = 子孫。三個 i 都是某個 div 的子孫。"},
    {code:`<div>
  Some text <i>italic 1</i> here.
  <p> Hi there <i>italic 2</i> </p>
  <div> This is the final <i>italic 3</i>. </div>
</div>

div > i { color:red; }`, q:"哪些 i 會變紅色？", a:"italic 1 與 italic 3", why:"italic 1 是外層 div 的直接子元素；italic 3 是內層 div 的直接子元素；italic 2 的父元素是 p，不是 div。"},
    {code:`<div class="userInfo">
  Some text <i>italic 1</i> here.
  <p> Hi there <i>italic 2</i> </p>
  <div class="bankInfo"> This is the final <i>italic 3</i>. </div>
</div>

div.userInfo i { color:red; }`, q:"哪些 i 會變紅色？", a:"italic 1、2、3 全部", why:"三個 i 都在 class=\"userInfo\" 的 div 裡面 (子孫)。"},
    {code:`(HTML 同上)

div.userInfo > i { color:red; }`, q:"哪些 i 會變紅色？", a:"只有 italic 1", why:"只有 italic 1 是 div.userInfo 的直接子元素。"},
    {code:`(HTML 同上)

div.bankInfo i { color:red; }
div.bankInfo > i { color:red; }`, q:"兩條規則各選到哪些 i？", a:"兩條都只選到 italic 3", why:"italic 3 是 div.bankInfo 的直接子元素 (也是子孫)；italic 1、2 不在 bankInfo 裡面。"},
    {code:`<h1 class="userInfo">This is a heading 1</h1>
<p class="userInfo">This is a paragraph 1</p>
<h2 class="eticket">This is a heading</h2>
<p class="eticket">This is a paragraph</p>

p.userInfo { border:1px solid black; }
.eticket { color:green; }`, q:"哪些元素有框線？哪些是綠色？", a:"有框線：p (class=userInfo) 那一段。\n綠色：h2 與 p (class=eticket)。", why:"p.userInfo 只選 class 為 userInfo 的 p，不包含 h1；.eticket 選所有 class=eticket 的元素。"}
  ],
  quiz: [
    {q:".eticket 這個 selector 選到的是？", opts:["class=\"eticket\" 的所有元素","id=\"eticket\" 的元素","標籤名稱叫 eticket 的元素","無效語法"], correct:0, explain:". 開頭代表 class selector。"},
    {q:"#userHeading 這個 selector 選到的是？", opts:["id=\"userHeading\" 的元素","class=\"userHeading\" 的元素","標籤名稱叫 userHeading 的元素","所有標題"], correct:0, explain:"# 開頭代表 id selector。"},
    {q:"div i { color:red; } 會選到什麼？", opts:["div 裡面所有的 i (子孫)","只有 div 直接底下的 i","頁面上所有 i","class 叫 div 的 i"], correct:0, explain:"空白表示子孫，不限層數。"},
    {q:"div > i 選到什麼？", opts:["div 的直接子元素 i","div 所有子孫的 i","與 div 同層的 i","整頁所有 i"], correct:0, explain:"> 表示直接子元素。"},
    {q:"a:visited 用來設定？", opts:["已經點過的連結","滑鼠移上去的連結","還沒點過的連結","所有圖片連結"], correct:0, explain:"a:link 未點過；a:visited 點過；:hover 滑鼠移上去。"},
    {q:"h1, h2 { color:blue; } 的意思？", opts:["所有 h1 和所有 h2 都是藍色","只有 h1 裡面的 h2 是藍色","h1 之後的 h2 才是藍色","語法錯誤"], correct:0, explain:"逗號 = 各自套用同一組樣式。"},
    {q:"想讓第二層的 ol 使用羅馬數字，selector 要寫？", opts:["ol ol","ol > > ol","ol.ol","#ol"], correct:0, explain:"ol ol = ol 裡面的 ol。"},
    {q:"p.userInfo 選到的是？", opts:["class 為 userInfo 的 p","p 裡面 class 為 userInfo 的子孫","id 為 userInfo 的 p","所有 p 和所有 userInfo"], correct:0, explain:"中間沒有空白，是「同時符合」。"},
    {q:"一行文字裡想只讓某幾個字變紅色，該用？", opts:["<span>","<div>","<p>","<table>"], correct:0, explain:"span 是行內容器；div 是區塊容器。"}
  ]
};
