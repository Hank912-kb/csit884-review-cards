window.DATA = window.DATA || {};

/* ============================================================
   HTML 基礎
   ============================================================ */
DATA.html = {
  intro: "HTML (Hyper Text Markup Language) 是「標記語言」：用 tag 描述網頁內容，瀏覽器負責顯示。必考重點：文件骨架、成對標籤 vs 空元素、屬性寫法、三種清單、文字格式、字元實體。",
  cheat: [
    {t:"文件骨架", code:`<html>
  <head>
    <title>Hi</title>
  </head>
  <body>
    Hello World!
  </body>
</html>`, note:"html 包住全部；head 放 title 等文件資訊；body 才是看得到的內容。標籤不分大小寫，大多數成對出現 <tag>內容</tag>。"},
    {t:"標籤 · 屬性 · 空元素", code:`<tagname attr1="value1" attr2="value2">內容</tagname>

<br />                        換行
<hr />                        水平線
<img src="a.png" alt="貓" />   圖片`, note:"屬性一定寫在開始標籤，格式 name=\"value\"。沒有內容的元素 (empty element) 用自我封閉標籤 <tag />。"},
    {t:"標題 · 段落 · 換行 · 分隔線", code:`<h1>Heading 1 (最重要)</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h6>Heading 6 (最不重要)</h6>

<p>This is a paragraph</p>
<br />     換行
<hr />     水平線`, note:"<p> 裡多餘的空白和換行不會顯示；要空格用 &nbsp;，要換行用 <br />。"},
    {t:"三種清單", code:`<ul>                          無序清單 (圓點)
  <li>MATH222</li>
  <li>CSCI204</li>
</ul>

<ol>                          有序清單 (1. 2. 3.)
  <li>MATH222</li>
  <li>CSCI204</li>
</ol>

<dl>                          描述清單
  <dt>MATH222</dt>            term 術語
  <dd>Mon 8:30-10:30</dd>     definition 說明
</dl>`, note:"ul / ol 的每一項都要用 <li>；dl 用 <dt> + <dd> 成對。"},
    {t:"文字格式", code:`<i>italic</i>     <b>bold</b>     <mark>highlighted</mark>
<del>deleted</del>   <ins>inserted</ins>   <small>small</small>

x<sub>1</sub>     下標         x<sup>n</sup>     上標

<font size="6" color="red">舊式：size 1~7，預設 3</font>`, note:"i 斜體 · b 粗體 · mark 螢光標示 · del 刪除線 · ins 插入(底線) · sub 下標 · sup 上標。"},
    {t:"字元實體 (保留字元)", code:`&nbsp;   不斷行空格        &lt;    <
&gt;     >                  &amp;   &
&quot;   "                  &apos;  '
&deg;    °                  &copy;  ©`, note:"< > & 等保留字元會被瀏覽器當成標籤語法，要顯示它們本身就必須用字元實體取代。"},
    {t:"引用 · 預先格式 · 程式碼", code:`<blockquote>
  <p>引文會縮排</p>
</blockquote>

<pre>
Mary had a
   little
lamb                 保留空白與換行 (等寬字)
</pre>

<pre>
<code>
#include &lt;iostream&gt;    pre 裡的 < > 也要用實體
</code>
</pre>`, note:"只用 <code> 不加 <pre>：只有等寬字，換行縮排仍會被瀏覽器壓掉。"},
    {t:"註解", code:`<!-- 這是註解，
     可以多行，
     不會顯示在網頁上 -->`, note:""}
  ],
  cards: [
    {q:"HTML 文件的基本結構？head 和 body 各放什麼？", a:`<html> ... </html> 包住全部
head：title 等文件資訊
body：使用者看得到的內容`},
    {q:"什麼是 HTML element (元素)？", a:`從開始標籤到結束標籤的「整段」(含內容)

<title>Hi</title> 就是一個 title element
html element 底下有 head、body 兩個 element`},
    {q:"HTML 標籤有分大小寫嗎？", a:`HTML：不分大小寫
XHTML：規定一律小寫

考試/作業一律寫小寫最安全`},
    {q:"什麼是空元素 (empty element)？怎麼寫？", a:`沒有內容的元素
開始+結束標籤合併成自我封閉：

<br />  <hr />
<img src="..." alt="..." />`},
    {q:"屬性 (attribute) 寫在哪？格式？", a:`永遠寫在「開始標籤」裡
name/value 成對：name="value"

<img src="a.png" alt="貓" />`},
    {q:"h1 ~ h6 哪個最重要？", a:`h1 最重要 (最大)
h6 最不重要 (最小)`},
    {q:"ul / ol / dl 分別是什麼？子項目用什麼？", a:`ul = unordered list 無序 (圓點)
ol = ordered list 有序 (數字)
dl = description list 描述清單

ul、ol 的項目：<li>
dl：<dt>術語 + <dd>說明`},
    {q:"<p> 裡打很多空白或換行，畫面會怎樣？", a:`多餘的空白、換行都不會顯示

要空格 → &nbsp;
要換行 → <br />
要分隔線 → <hr />`},
    {q:"要在畫面上顯示 <html> 這幾個字怎麼寫？", a:`&lt;html&gt;

< → &lt;    > → &gt;    & → &amp;
保留字元一定要用字元實體`},
    {q:"<pre> 的作用？只用 <code> 不加 <pre> 會怎樣？", a:`pre：保留空白與換行，等寬字顯示

只用 code：只有等寬字，
換行縮排被吃掉，
程式碼會擠成一行`},
    {q:"i / b / mark / del / ins 各是什麼效果？", a:`i     斜體
b     粗體
mark  螢光筆標示
del   刪除線
ins   插入 (底線)`},
    {q:"上標、下標怎麼寫？", a:`x<sub>1</sub>  → x 下標 1
x<sup>n</sup>  → x 上標 n`},
    {q:"HTML 註解怎麼寫？會顯示嗎？", a:`<!-- 註解內容 -->
可以跨多行，不會顯示在網頁上`},
    {q:"blockquote 是什麼？", a:`區塊引文，內容會縮排：
<blockquote>
  <p>...</p>
</blockquote>`}
  ],
  cloze: [
    {title:"默寫：文件骨架", code:`<{{1}}>
  <{{2}}>
    <{{3}}>Hi</{{4}}>
  </{{5}}>
  <{{6}}>
    Hello World!
  </{{7}}>
</{{8}}>`, ans:[["html"],["head"],["title"],["title"],["head"],["body"],["body"],["html"]]},
    {title:"默寫：圖片 (自我封閉 + 兩個必寫屬性)", code:`<img {{1}}="cat.png" {{2}}="一隻貓" />`, ans:[["src"],["alt"]], note:"src = 圖片位置；alt = 找不到圖片/關閉圖片/螢幕閱讀器時顯示的替代文字。"},
    {title:"默寫：有序清單", code:`<{{1}}>
  <{{2}}>MATH222: Mon 8:30-10:30 lecture</{{3}}>
  <{{4}}>CSCI204: Tue 9:30-11:30 lab</{{5}}>
</{{6}}>`, ans:[["ol"],["li"],["li"],["li"],["li"],["ol"]]},
    {title:"默寫：描述清單", code:`<{{1}}>
  <{{2}}>MATH222</{{3}}>
  <{{4}}>Mon 8:30-10:30 lecture</{{5}}>
</{{6}}>`, ans:[["dl"],["dt"],["dt"],["dd"],["dd"],["dl"]]},
    {title:"默寫：顯示保留字元", code:`A HTML document starts with {{1}}html{{2}} and ends with {{3}}/html{{4}}`, ans:[["&lt;"],["&gt;"],["&lt;"],["&gt;"]], note:"這一行寫在 <body> 裡，畫面才會顯示 <html> 與 </html>。"}
  ],
  mistakes: [
    {wrong:`<P>a paragraph
<br>
<img src="logo.png">`, right:`<p>a paragraph</p>
<br />
<img src="logo.png" alt="logo" />`, note:"標籤小寫、成對的一定要關閉、空元素用 />，img 要有 alt。這是 XHTML 的嚴格規則，考試常考。"},
    {wrong:`<h1>Welcome</h2>`, right:`<h1>Welcome</h1>`, note:"開始標籤與結束標籤名稱必須配對 (h1 對 h1)。"},
    {wrong:`<body>
A HTML document starts with <html>
</body>`, right:`<body>
A HTML document starts with &lt;html&gt;
</body>`, note:"< 會被瀏覽器當成標籤開頭，畫面上看不到 html 這幾個字。要顯示就用 &lt; &gt;。"},
    {wrong:`<b><i>bold and italic</b></i>`, right:`<b><i>bold and italic</i></b>`, note:"標籤要正確巢狀：先開的後關 (像括號一樣)。"},
    {wrong:`<ul>
  MATH222
  CSCI204
</ul>`, right:`<ul>
  <li>MATH222</li>
  <li>CSCI204</li>
</ul>`, note:"清單裡的每一個項目都要包在 <li> 裡。"}
  ],
  trace: [
    {code:`<p>Hello      World</p>`, q:"畫面會顯示幾個空格？", a:"1 個，顯示成 Hello World", why:"瀏覽器會把連續的空白壓成一個。要保留多個空格要用 &nbsp;。"},
    {code:`<p>This&nbsp;&nbsp;is a paragraph</p>`, q:"畫面顯示什麼？", a:"This  is a paragraph (This 與 is 之間保留 2 個空格)", why:"&nbsp; 是不斷行空格，不會被壓縮。"},
    {code:`<p>Another
paragraph</p>`, q:"原始碼分成兩行，畫面上也會分兩行嗎？", a:"不會，畫面是同一行：Another paragraph", why:"換行要用 <br />，原始碼的換行只會被當成一個空白。"},
    {code:`<body>
A HTML document starts with &lt;html&gt;
</body>`, q:"畫面顯示什麼？", a:"A HTML document starts with <html>", why:"&lt; 顯示成 <，&gt; 顯示成 >。"},
    {code:`<ol>
  <li>MATH222</li>
  <li>CSCI204</li>
  <li>ISIT206</li>
</ol>`, q:"畫面上每一項前面是什麼？換成 <ul> 呢？", a:"ol：1. 2. 3.\nul：●（圓點）", why:"ol = ordered (有序)、ul = unordered (無序)。"},
    {code:`<html>
  <head>
    <title>Hi</title>
  </head>
  <body>
    Hello World!
  </body>
</html>`, q:"瀏覽器分頁標題顯示什麼？網頁內容顯示什麼？", a:"分頁標題：Hi\n網頁內容：Hello World!", why:"title 在 head，顯示在分頁標題；只有 body 的內容會顯示在頁面上。"}
  ],
  quiz: [
    {q:"沒有內容的元素，最標準的自我封閉寫法是？", opts:[`<img src="a.png" alt="a" />`,`<img src="a.png" alt="a">`,`</img src="a.png">`,`<img src="a.png" alt="a"><img>`], correct:0, explain:"空元素用 <tag ... /> 一個標籤同時開始並結束。"},
    {q:"<ol> 和 <ul> 的差別是？", opts:["ol 是有序清單，ul 是無序清單","ol 是無序清單，ul 是有序清單","兩者完全一樣","ol 只能放在表格裡"], correct:0, explain:"ol = ordered list (有編號)，ul = unordered list (項目符號)。"},
    {q:"要讓畫面顯示 < 這個字元，要寫？", opts:["&lt;","&amp;","\"<\"","&nbsp;"], correct:0, explain:"< 是保留字元，必須用字元實體 &lt;。"},
    {q:"哪個元素同時包含 head 與 body？", opts:["html","title","div","form"], correct:0, explain:"html 元素從 <html> 開始到 </html> 結束，底下有 head 和 body。"},
    {q:"<dl> 描述清單裡，術語和說明分別用？", opts:["dt 和 dd","li 和 dd","dd 和 dt (順序相反)","th 和 td"], correct:0, explain:"dt = description term，dd = description definition。"},
    {q:"想在段落裡連續顯示 3 個空格，要用？", opts:["&nbsp;&nbsp;&nbsp;","直接打 3 個空白","<space>","<br />"], correct:0, explain:"多個連續空白會被壓成一個，要用 &nbsp;。"},
    {q:"<pre> 標籤的效果是？", opts:["保留原始碼的空白與換行，並用等寬字顯示","把文字變成粗體","把文字縮排成引文","隱藏內容"], correct:0, explain:"pre = preformatted text。"},
    {q:"下列哪個是正確的 HTML 註解？", opts:["<!-- comment -->","// comment","/* comment */","<# comment #>"], correct:0, explain:"// 和 /* */ 是 JavaScript / CSS 的註解寫法。"},
    {q:"h1 ~ h6 中，最不重要 (最小) 的是？", opts:["h6","h1","h3","h0"], correct:0, explain:"數字越大越不重要。"}
  ]
};

/* ============================================================
   表格
   ============================================================ */
DATA.table = {
  intro: "表格由「列 (tr)」組成，每一列裡放「儲存格」：表頭 th 或資料 td。重點是寬度、對齊、以及合併儲存格 (colspan / rowspan) 的邏輯。",
  cheat: [
    {t:"基本表格", code:`<table border="1">
  <caption>User information</caption>
  <tr>
    <th>Username</th>
    <th>First name</th>
    <th>Last name</th>
  </tr>
  <tr>
    <td>jsmith</td>
    <td>John</td>
    <td>Smith</td>
  </tr>
</table>`, note:"table 表格 · tr 一列 (table row) · th 表頭 (粗體置中) · td 資料 (table data) · caption 標題。border=\"1\" 顯示框線，border=\"0\" 關閉。不需要表頭就全部用 td。"},
    {t:"寬度", code:`<table border="1" width="50%">          表格寬：佔整個頁面的 50%
  <tr>
    <th width="20%">Username</th>       欄寬：佔「表格」的 20%
    <th width="40%">First name</th>
    <th width="40%">Last name</th>
  </tr>
</table>

<th width="150px">Username</th>         欄寬也可以用像素 px`, note:"表格 width 相對於頁面；欄位 width 相對於表格。"},
    {t:"對齊", code:`<td align="center">jsmith</td>     水平：left / center / right
<td align="right">John</td>

<td valign="top">jsmith</td>       垂直：top / middle / bottom
<td valign="middle">jsmith</td>
<td valign="bottom">jsmith</td>`, note:"align = 水平方向；valign = vertical align 垂直方向。"},
    {t:"合併儲存格", code:`<!-- colspan：橫向合併 (跨欄) -->
<tr>
  <td colspan="2">STUDENT DETAILS</td>
</tr>
<tr>
  <td>STUDENT NAME</td>
  <td>John Lee</td>
</tr>

<!-- rowspan：縱向合併 (跨列) -->
<tr>
  <td>8:30-9:30</td>
  <td rowspan="2">MATH 321 lecture</td>
  <td>INFO 104 lecture</td>
</tr>
<tr>
  <td>9:30-10:30</td>
  <td>CS 222 Lab</td>        ← Monday 那格已被上面跨下來，這列就不寫
</tr>`, note:"rowspan 佔掉的位置，下面那一列就要少寫一個 td。"}
  ],
  cards: [
    {q:"tr / th / td / caption 各代表什麼？", a:`tr = table row 一列
th = table header 表頭 (粗體置中)
td = table data 資料儲存格
caption = 表格標題`},
    {q:"th 和 td 的差別？不需要表頭時怎麼辦？", a:`th：表頭，預設粗體置中
td：一般資料

不需要表頭 → 每個儲存格都用 td`},
    {q:"表格框線怎麼開/關？", a:`border="1" → 顯示框線
border="0" → 不顯示框線`},
    {q:"表格寬度和欄位寬度怎麼設？", a:`表格：<table width="50%">
 (相對於整個頁面)

欄位：<th width="20%">  相對於表格
  或 <th width="150px"> 像素`},
    {q:"align 和 valign 的差別與可用值？", a:`align：水平對齊
 left / center / right

valign：垂直對齊
 top / middle / bottom`},
    {q:"colspan 和 rowspan 差別？", a:`colspan = 橫向合併，跨「欄」
 <td colspan="2">

rowspan = 縱向合併，跨「列」
 <td rowspan="2">`},
    {q:"用了 rowspan 之後，下一列要怎麼寫？", a:`被上面跨下來的位置，
這一列不用再寫那格的 td。

整張表每一列「實際佔用的欄數」
必須一致，所以要少寫。`},
    {q:"caption 要放在哪裡？", a:`放在 <table> 裡面，
通常在第一個 <tr> 之前：

<table>
  <caption>User information</caption>
  <tr>...</tr>`}
  ],
  cloze: [
    {title:"默寫：基本表格", code:`<{{1}} border="1">
  <{{2}}>User information</{{3}}>
  <{{4}}>
    <{{5}}>Username</{{6}}>
  </{{7}}>
  <tr>
    <{{8}}>jsmith</{{9}}>
  </tr>
</{{10}}>`, ans:[["table"],["caption"],["caption"],["tr"],["th"],["th"],["tr"],["td"],["td"],["table"]]},
    {title:"默寫：合併儲存格", code:`<td {{1}}="2">STUDENT DETAILS</td>          橫向跨 2 欄
<td {{2}}="2">MATH 321 lecture</td>         縱向跨 2 列`, ans:[["colspan"],["rowspan"]]},
    {title:"默寫：對齊與寬度", code:`<table border="1" {{1}}="50%">
  <tr>
    <th {{2}}="20%">Username</th>
  </tr>
  <tr>
    <td {{3}}="center" {{4}}="top">jsmith</td>
  </tr>
</table>`, ans:[["width"],["width"],["align"],["valign"]]}
  ],
  mistakes: [
    {wrong:`<table border="1">
  <tr>
    <td>a</td>
  </tr>
  <td>b</td>
</table>`, right:`<table border="1">
  <tr>
    <td>a</td>
  </tr>
  <tr>
    <td>b</td>
  </tr>
</table>`, note:"td / th 一定要在 tr 裡面，不能直接放在 table 底下。"},
    {wrong:`<tr>
  <td>8:30</td>
  <td rowspan="2">MATH</td>
</tr>
<tr>
  <td>9:30</td>
  <td></td>
</tr>`, right:`<tr>
  <td>8:30</td>
  <td rowspan="2">MATH</td>
</tr>
<tr>
  <td>9:30</td>
</tr>`, note:"MATH 那格已經往下跨到第 2 列，第 2 列不能再多寫一個 td，否則整列會多出一欄、表格歪掉。"},
    {wrong:`<td align="middle">jsmith</td>`, right:`<td valign="middle">jsmith</td>`, note:"垂直置中是 valign；align 只有 left / center / right (水平)。"},
    {wrong:`<td colspan=2>STUDENT DETAILS</td>`, right:`<td colspan="2">STUDENT DETAILS</td>`, note:"屬性值要加引號 (XHTML 規則)。"}
  ],
  trace: [
    {code:`<table border="1" width="40%">
  <tr> <td colspan="2">STUDENT DETAILS</td> </tr>
  <tr> <td width="30%">STUDENT NAME</td> <td>John Lee</td> </tr>
  <tr> <td>STUDENT NUMBER</td> <td>1234567</td> </tr>
  <tr> <td>UOW EMAIL</td> <td>jlee@uowmail.edu.au</td> </tr>
</table>`, q:"這張表格有幾欄？第一列的 STUDENT DETAILS 佔幾欄？", a:"表格共 2 欄。\nSTUDENT DETAILS 跨 2 欄，佔滿整列。", why:"其他列都有 2 個 td；第一列只寫 1 個 td，但 colspan=\"2\" 讓它佔 2 欄。"},
    {code:`<tr> <td></td> <td>Monday</td> <td>Tuesday</td> <td>Wednesday</td> </tr>
<tr> <td>8:30-9:30</td>  <td rowspan="2">MATH 321 lecture</td> <td>INFO 104 lecture</td> <td>CS 222 lecture</td> </tr>
<tr> <td>9:30-10:30</td> <td>CS 222 Lab</td> <td rowspan="2">MATH 321 tutorial</td> </tr>
<tr> <td>10:30-11:30</td> <td>CS 222 lecture</td> <td>INFO 104 tutorial</td> </tr>`, q:"第 3 列 (9:30-10:30) 為什麼只寫 3 個 td？第 4 列的 Monday / Tuesday / Wednesday 各是哪一格？", a:"第 3 列：Monday 欄被第 2 列的 rowspan 佔走，所以只寫 時間、Tuesday、Wednesday 3 個 td。\n第 4 列：Monday = CS 222 lecture，Tuesday = INFO 104 tutorial，Wednesday = 被第 3 列的 MATH 321 tutorial 跨下來。", why:"每列實際佔用 4 欄：自己寫的 td 數 + 上面跨下來的格子數 = 4。"},
    {code:`<table border="0">
  <tr><td>a</td><td>b</td></tr>
</table>`, q:"畫面上有框線嗎？", a:"沒有框線", why:"border=\"0\" 關閉框線。"},
    {code:`<td valign="bottom">jsmith</td>
<td>John Smith<br />DOB: 23/01/2000<br />Course code: 875</td>`, q:"jsmith 顯示在儲存格的哪個位置？", a:"貼在儲存格底部 (因為旁邊的儲存格有 3 行，jsmith 對齊最下面那行)", why:"valign 控制垂直位置：top 上、middle 中、bottom 下。"}
  ],
  quiz: [
    {q:"想讓一個儲存格橫向佔 2 欄，要用？", opts:["colspan=\"2\"","rowspan=\"2\"","width=\"2\"","span=\"2\""], correct:0, explain:"colspan = 跨欄 (橫向)；rowspan = 跨列 (縱向)。"},
    {q:"td 元素必須放在哪個元素裡？", opts:["tr","table 直接底下","caption","th"], correct:0, explain:"table > tr > td / th。"},
    {q:"<table width=\"50%\"> 的 50% 是相對於什麼？", opts:["整個頁面 (視窗) 的寬度","表格本身","螢幕解析度","字體大小"], correct:0, explain:"表格的 width 相對於頁面；欄位的 width 才是相對於表格。"},
    {q:"垂直對齊 (上/中/下) 要用哪個屬性？", opts:["valign","align","vertical","position"], correct:0, explain:"align 是水平；valign 是垂直。"},
    {q:"表頭儲存格預設的樣子是？", opts:["粗體並置中","斜體靠左","有底線","隱藏"], correct:0, explain:"th = table header，預設粗體置中。"},
    {q:"用了 <td rowspan=\"2\"> 之後，下一列應該？", opts:["少寫一個 td (那個位置已被佔用)","多寫一個空的 td","什麼都不用改，多寫少寫都一樣","必須改成 th"], correct:0, explain:"每列實際佔用的欄數要一致，被跨下來的格子不用再寫。"},
    {q:"關閉表格框線要？", opts:["border=\"0\"","border=\"none\"","border=\"off\"","noborder"], correct:0, explain:"border=\"1\" 顯示、border=\"0\" 關閉。"}
  ]
};

/* ============================================================
   圖片 · 連結
   ============================================================ */
DATA.linkimg = {
  intro: "img 用 src (位置) + alt (替代文字)；a 用 href (連結目的地)。重點是「絕對 vs 相對路徑」怎麼寫，以及頁面內錨點 (#id) 的配對。",
  cheat: [
    {t:"圖片 img", code:`<img src="uow-logo.png" height="300" width="200" alt="logo of UOW" />`, note:"src：圖片位置 · alt：替代文字 (圖片載入失敗 / 使用者關閉圖片 / 螢幕閱讀器) · height、width：選填，可用 px 或 %。"},
    {t:"路徑：絕對 vs 相對", code:`絕對 URL (別的網站)：
src="http://www.mycom.au/staff.png"

相對 URL (本站內)：
src="uow-logo.png"              與目前 html 同一資料夾
src="images/uow-logo.png"       往下一層 images 資料夾
src="images/logo/uow-logo.png"  往下兩層
src="../f1/bird.png"            ../ = 回上一層，再進 f1 資料夾`, note:"href 的路徑規則跟 src 一模一樣。"},
    {t:"連結 a", code:`<a href="http://www.uow.edu.au" target="_blank">Visit UOW</a>
<a href="contact.html">Contact us</a>
<a href="../handout/note5.html">Note 5</a>

<a href="http://www.uow.edu.au" target="_blank">
  <img src="uow-logo.png" alt="visit UOW" />       圖片也可以當連結
</a>`, note:"target=\"_blank\"：新視窗/分頁開啟；target=\"_self\"：同一個視窗 (預設)。a 裡面可以放文字或圖片。"},
    {t:"頁面內錨點 (#id)", code:`<a href="#Proofs">1 Proofs</a>           點了跳到本頁 id="Proofs" 的位置

<h3 id="Proofs">Proofs</h3>              目標位置：加上 id (不用 #)

<a href="https://en.wikipedia.org/wiki/Euler%27s_theorem#Proofs">
  連到「別的頁面」的某個段落
</a>`, note:"id 值必須唯一、至少 1 個字元、不能有空白。連結用 #Proofs，id 屬性只寫 Proofs。"},
    {t:"index.html", code:`http://the-web-address/abc
   → 自動顯示 abc/index.html`, note:"index.html 是資料夾的預設頁面。為了安全，每個資料夾都放一個 index.html，避免別人看到資料夾的內容和結構。"}
  ],
  cards: [
    {q:"img 的 alt 有什麼用？", a:`圖片的替代文字，用在：
1) 瀏覽器找不到圖片時
2) 使用者為了省流量關閉圖片時
3) 螢幕閱讀器 (視障者) 朗讀`},
    {q:"絕對 URL 和相對 URL 差在哪？", a:`絕對：完整網址 (含 http://)，可指向別的網站
 src="http://www.mycom.au/staff.png"

相對：相對於「目前這個 html 檔」的位置
 src="images/uow-logo.png"`},
    {q:"src=\"../f1/bird.png\" 的 ../ 是什麼意思？", a:`回到上一層資料夾，
再進入 f1 資料夾找 bird.png`},
    {q:"target 的兩個常用值？", a:`_blank → 新視窗 / 新分頁
_self  → 同一個視窗 (預設)`},
    {q:"怎麼把圖片變成連結？", a:`把 img 放進 a 裡面：
<a href="http://www.uow.edu.au">
  <img src="uow-logo.png" alt="visit UOW" />
</a>`},
    {q:"頁面內跳轉 (錨點) 怎麼做？", a:`目標：<h3 id="Proofs">Proofs</h3>
連結：<a href="#Proofs">1 Proofs</a>

id 要唯一、不可有空白`},
    {q:"連到別頁的某一段怎麼寫？", a:`網址後面加 #id：
<a href=".../Euler%27s_theorem#Proofs">`},
    {q:"為什麼每個資料夾要放 index.html？", a:`它是資料夾的預設頁面。
沒有的話，別人輸入資料夾網址
可能看到整個資料夾的檔案清單，
洩漏網站的內容與結構 (安全)`},
    {q:"src 和 href 分別用在哪？", a:`src → 要「嵌入」的資源 (img 圖片)
href → 要「前往」的目的地 (a 連結)`}
  ],
  cloze: [
    {title:"默寫：新分頁開啟的外部連結", code:`<{{1}} {{2}}="http://www.uow.edu.au" {{3}}="_blank">Visit UOW</{{4}}>`, ans:[["a"],["href"],["target"],["a"]]},
    {title:"默寫：頁面內錨點", code:`<a href="{{1}}Proofs">1 Proofs</a>

<h3 {{2}}="Proofs">Proofs</h3>`, ans:[["#"],["id"]]},
    {title:"默寫：圖片當連結", code:`<a href="http://www.uow.edu.au" target="_blank">
  <{{1}} {{2}}="uow-logo.png" {{3}}="visit UOW" />
</a>`, ans:[["img"],["src"],["alt"]]},
    {title:"默寫：相對路徑 (回上一層)", code:`<img src="{{1}}f1/bird.png" alt="bird" />`, ans:[["../"]]}
  ],
  mistakes: [
    {wrong:`<a href="www.uow.edu.au">Visit UOW</a>`, right:`<a href="http://www.uow.edu.au">Visit UOW</a>`, note:"少了 http:// 會被當成「相對路徑」，瀏覽器會去找自己網站底下叫 www.uow.edu.au 的檔案。"},
    {wrong:`<img src="logo.png">`, right:`<img src="logo.png" alt="logo of UOW" />`, note:"img 要有 alt，而且要自我封閉 />。"},
    {wrong:`<a href="#Proofs">Proofs</a>
<h3 id="#Proofs">Proofs</h3>`, right:`<a href="#Proofs">Proofs</a>
<h3 id="Proofs">Proofs</h3>`, note:"# 只用在連結的 href；id 的值本身不含 #。"},
    {wrong:`<a href="contact.html" target="blank">Contact</a>`, right:`<a href="contact.html" target="_blank">Contact</a>`, note:"值是 _blank，前面有底線。"},
    {wrong:`<h3 id="See also">See also</h3>`, right:`<h3 id="See_also">See also</h3>`, note:"id 值不能包含空白。"}
  ],
  trace: [
    {code:`網站資料夾結構：
site/
 ├─ index.html
 ├─ pages/
 │    └─ a.html
 └─ images/
      └─ cat.png`, q:"在 index.html 和 pages/a.html 裡，顯示 cat.png 的 src 分別怎麼寫？", a:"index.html：src=\"images/cat.png\"\npages/a.html：src=\"../images/cat.png\"", why:"index.html 與 images 同層 → 直接往下；a.html 在 pages 裡，要先 ../ 回上一層再進 images。"},
    {code:`網站資料夾結構：
site/
 ├─ index.html
 └─ pages/
      ├─ a.html
      └─ b.html`, q:"在 a.html 裡連到 b.html、連到 index.html，href 各怎麼寫？", a:"連 b.html：href=\"b.html\" (同一資料夾)\n連 index.html：href=\"../index.html\"", why:"同資料夾直接寫檔名；往上層用 ../。"},
    {code:`<a href="http://www.uow.edu.au" target="_blank">Visit UOW</a>`, q:"點下去會發生什麼事？", a:"在新的分頁/視窗開啟 http://www.uow.edu.au，原本的頁面還在。", why:"_blank = 新視窗。預設 _self 會在同一個視窗打開並取代目前頁面。"}
  ],
  quiz: [
    {q:"img 的 alt 屬性主要用途是？", opts:["圖片無法顯示或視障者使用螢幕閱讀器時提供替代文字","設定圖片的高度","設定圖片的連結","設定圖片的位置"], correct:0, explain:"alt = alternate text。"},
    {q:"src=\"images/uow-logo.png\" 是？", opts:["相對 URL，圖片在目前 html 所在資料夾的 images 子資料夾","絕對 URL","網路上的圖片","錯誤寫法"], correct:0, explain:"沒有 http:// 開頭就是相對路徑。"},
    {q:"想讓連結在新分頁開啟，要用？", opts:["target=\"_blank\"","target=\"_self\"","href=\"_blank\"","open=\"new\""], correct:0, explain:"_self 是預設 (同視窗)。"},
    {q:"連結 <a href=\"#Notes\"> 會跳到？", opts:["本頁 id=\"Notes\" 的元素","名叫 Notes 的檔案","Notes 網站","頁面最上方"], correct:0, explain:"#id 是頁面內錨點。"},
    {q:"src=\"../f1/bird.png\" 中的 ../ 代表？", opts:["回到上一層資料夾","進入名叫 .. 的資料夾","絕對路徑的開頭","網站首頁"], correct:0, explain:"../ = parent directory。"},
    {q:"index.html 的特性是？", opts:["資料夾的預設頁面","必須放在最深層","只能有一個網站使用","只有伺服器管理員能看"], correct:0, explain:"輸入資料夾網址時會自動顯示該資料夾的 index.html。"},
    {q:"下列哪個屬性用在 <a>，而不是 <img>？", opts:["href","src","alt","width"], correct:0, explain:"a 用 href；img 用 src。"}
  ]
};

/* ============================================================
   XHTML / HTML5
   ============================================================ */
DATA.xhtml = {
  intro: "XHTML = EXtensible HyperText Markup Language，是「更嚴格的 HTML」(用 XML 的規則寫 HTML)。考試常給一段 HTML 要你挑出違反 XHTML 規則的地方，並改正。",
  cheat: [
    {t:"XHTML 骨架 (DOCTYPE 和 xmlns 必寫)", code:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title></title>
  </head>
  <body>
  </body>
</html>`, note:"DOCTYPE 與 xmlns 是 XHTML 的必要項目。"},
    {t:"XHTML 六條規則 (對照 ✗ / ✓)", code:`① 正確巢狀
   ✗ <b><i>text</b></i>          ✓ <b><i>text</i></b>
② 元素一定要關閉
   ✗ <p>text   <br>   <hr>   <img src="a.png">
   ✓ <p>text</p>   <br />   <hr />   <img src="a.png" alt="A" />
③ 元素名稱一律小寫
   ✗ <HEAD><TITLE>..</TITLE></HEAD>   ✓ <head><title>..</title></head>
④ 屬性名稱一律小寫
   ✗ <img SRC="a.png" ALT="A" />      ✓ <img src="a.png" alt="A" />
⑤ 屬性值一定要加引號
   ✗ <img src=logo.png alt=UOW logo /> ✓ <img src="logo.png" alt="UOW logo" />
⑥ 不可屬性縮寫 (attribute minimization)
   ✗ <input type="checkbox" checked />
   ✓ <input type="checkbox" checked="checked" />`, note:""},
    {t:"HTML5", code:`新標籤：<header> <footer> <article> <section> <svg> <canvas> <audio> <video> ...
新 API：Drag and Drop · Local Storage · Geolocation ...`, note:"HTML5 是 HTML 標準的第 5 版。"}
  ],
  cards: [
    {q:"XHTML 全名？跟 HTML 的關係？", a:`EXtensible HyperText Markup Language
比 HTML 更嚴格，
遵守 XML 的規則`},
    {q:"XHTML 有哪兩個必要項目？", a:`1) <!DOCTYPE ...> 文件類型宣告
2) <html xmlns="http://www.w3.org/1999/xhtml">`},
    {q:"XHTML 規則①：巢狀", a:`元素必須正確巢狀 (先開後關)
✗ <b><i>x</b></i>
✓ <b><i>x</i></b>`},
    {q:"XHTML 規則②：關閉", a:`每個元素一定要關閉
<p>...</p>
<br />  <hr />
<img src="a.png" alt="A" />`},
    {q:"XHTML 規則③④：大小寫", a:`元素名稱、屬性名稱一律小寫
✗ <IMG SRC="a.png">
✓ <img src="a.png" />`},
    {q:"XHTML 規則⑤：屬性值", a:`一定要加引號
✗ <img src=logo.png />
✓ <img src="logo.png" />`},
    {q:"XHTML 規則⑥：屬性縮寫", a:`不允許 attribute minimization
✗ <input type="checkbox" checked />
✓ <input type="checkbox" checked="checked" />`},
    {q:"HTML5 新增了哪些東西？", a:`新標籤：header footer article
 section svg canvas audio video
新 API：Drag and Drop、
 Local Storage、Geolocation`}
  ],
  cloze: [
    {title:"默寫：XHTML 最外層 html 標籤", code:`<html {{1}}="http://www.w3.org/1999/xhtml">`, ans:[["xmlns"]]},
    {title:"默寫：checkbox 預設勾選 (XHTML)", code:`<input type="checkbox" name="subscribe" value="eletter" {{1}}="{{2}}" />`, ans:[["checked"],["checked"]]},
    {title:"默寫：把下面改成 XHTML 合法寫法", code:`<{{1}}>paragraph not closed</{{2}}>
break not closed <br {{3}}>
<img {{4}}="logo.png" alt="UOW logo" {{5}}>`, ans:[["p"],["p"],["/"],["src"],["/"]], note:"提示：p 要關閉、br 和 img 要自我封閉。第 3、5 格只填 /。"}
  ],
  mistakes: [
    {wrong:`<p>paragraph not closed
break not closed <br>
horizontal line <hr>
image <img src="logo.png" alt="UOW logo">`, right:`<p>paragraph closed</p>
break closed <br />
horizontal line <hr />
image <img src="logo.png" alt="UOW logo" />`, note:"規則②：所有元素都要關閉。"},
    {wrong:`<HEAD>
  <TITLE>Web Technologies</TITLE>
</HEAD>`, right:`<head>
  <title>Web Technologies</title>
</head>`, note:"規則③：元素名稱小寫。"},
    {wrong:`<img SRC="logo.png" ALT="UOW logo" />`, right:`<img src="logo.png" alt="UOW logo" />`, note:"規則④：屬性名稱小寫。"},
    {wrong:`<img src=logo.png alt=UOW logo />`, right:`<img src="logo.png" alt="UOW logo" />`, note:"規則⑤：屬性值加引號 (alt 有空白時更需要)。"},
    {wrong:`<input type="checkbox" name="subscribe" value="eletter" checked />`, right:`<input type="checkbox" name="subscribe" value="eletter" checked="checked" />`, note:"規則⑥：不能屬性縮寫。"}
  ],
  trace: [
    {code:`<HTML>
<body>
<p>Hello<br>
<img src=logo.png alt=UOW>
<input type="checkbox" checked>
</body>`, q:"依 XHTML 規則，找出所有錯誤。", a:"1) HTML 大寫 → html\n2) 缺少 DOCTYPE 與 xmlns\n3) <p> 沒有關閉\n4) <br> 沒有自我封閉\n5) img 屬性值沒有引號、沒有自我封閉\n6) checked 屬性縮寫，要 checked=\"checked\"，且 input 沒有自我封閉\n7) <html> 沒有 </html> 結束標籤", why:"逐條套用六規則 + DOCTYPE/xmlns，一條一條檢查。"}
  ],
  quiz: [
    {q:"下列哪一個符合 XHTML 規則？", opts:[`<br />`,`<BR>`,`<br>`,`<br/ >x`], correct:0, explain:"小寫且自我封閉。"},
    {q:"XHTML 中 checkbox 預設勾選要寫？", opts:[`checked="checked"`,`checked`,`checked=true`,`check`], correct:0, explain:"不允許屬性縮寫。"},
    {q:"哪一項不是 XHTML 的規則？", opts:["標籤一定要放在 <body> 裡","元素必須正確巢狀","屬性值必須加引號","元素名稱必須小寫"], correct:0, explain:"html 元素本身就不在 body 裡；其他三項都是 XHTML 規則。"},
    {q:"XHTML 的哪兩樣是必要的？", opts:["DOCTYPE 和 xmlns","CSS 和 JavaScript","head 和 footer","title 和 meta"], correct:0, explain:"DOCTYPE and xmlns are mandatory。"},
    {q:"下列哪個是 HTML5 新增的標籤？", opts:["canvas","font","center","frameset"], correct:0, explain:"HTML5 新增 header footer article section svg canvas audio video。"},
    {q:"<b><i>text</b></i> 違反哪一條 XHTML 規則？", opts:["正確巢狀","一定要關閉","小寫","屬性加引號"], correct:0, explain:"i 先開，就要先關 i，再關 b。"}
  ]
};
