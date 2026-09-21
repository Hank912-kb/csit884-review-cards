window.DATA = window.DATA || {};

/* ============================================================
   字串 · 日期 · 陣列
   ============================================================ */
DATA.jsobj = {
  intro: "講義 Week 4 的三個內建物件：String (字串方法)、Date (日期，月份從 0 開始！)、Array (陣列：push / indexOf / splice)。考試常出「這行執行完結果是什麼」。",
  cheat: [
    {t:"String 字串方法", code:`var text = "One Fish, Two Fish, Red Fish, Blue Fish";

text.length              → 39
text.toUpperCase()       → "ONE FISH, TWO FISH, RED FISH, BLUE FISH"
text.toLowerCase()       → "one fish, two fish, red fish, blue fish"
text.indexOf("Fish")     → 4        第一次出現的位置 (從 0 算)
text.indexOf("cat")      → -1       找不到
text.includes("Red")     → true
text.includes("Green")   → false

text.slice(10, 12)       → "Tw"       從 10 到 12 (不含 12)
text.slice(10)           → "Two Fish, Red Fish, Blue Fish"    從 10 到結尾
text.slice(-9, -6)       → "Blu"      負數 = 從結尾往回數
text.slice(-9)           → "Blue Fish"

"  hi  ".trim()          → "hi"     去掉前後空白 (表單驗證會用)`, note:"位置 (index) 從 0 開始。slice(start, end) 包含 start、不含 end。"},
    {t:"Date 建立", code:`var d = new Date();                      現在的日期時間
var d = new Date(millisec);              距離 1970-01-01 00:00:00 UTC 的毫秒數
var d = new Date("2000-01-30");          YYYY-MM-DD
var d = new Date("2000-01-30T10:00:00"); YYYY-MM-DDTHH:MI:SS
var d = new Date(2000, 0, 1);            (年, 月, 日, 時, 分, 秒, 毫秒) 後 4 個可省略

new Date(86400000)   → 02 Jan 1970 00:00:00 UTC     一天 = 86,400,000 毫秒`, note:"⚠ 月份 0-11：一月 = 0，十二月 = 11。所以 new Date(2000, 0, 1) 是 2000 年 1 月 1 日。"},
    {t:"Date 取值 (get) / 設值 (set)", code:`getDate()          日 (1-31)
getDay()           星期幾 (0-6)   Sunday = 0，Saturday = 6
getFullYear()      四位數年份
getMonth()         月 (0-11)      January = 0，December = 11
getHours()         時 (0-23)
getMinutes()       分 (0-59)
getSeconds()       秒 (0-59)
getMilliseconds()  毫秒 (0-999)
getTime()          距離 1970/01/01 的毫秒數

setDate()  setFullYear()  setMonth()  setHours()
setMinutes()  setSeconds()  setMilliseconds()  setTime()

var now = new Date();
var tomorrow = new Date();
tomorrow.setDate(now.getDate() + 1);          明天
var hundredDayAgo = new Date();
hundredDayAgo.setDate(now.getDate() - 100);   一百天前`, note:"getDay() 是「星期」(0-6)，getDate() 才是「幾號」(1-31)，不要搞混。"},
    {t:"Array 陣列", code:`var subjects = ["ISIT206", "MATH121", "CSCI301"];

subjects[0]                 → "ISIT206"      index 從 0 開始
subjects[1] = "LOGIC101";   修改第 1 項
subjects[3] = "LAW201";     新增第 3 項
subjects.length             → 4

// 走訪整個陣列
for (var i = 0; i < subjects.length; i++) {
  alert(subjects[i]);
}

var square = [];                    空陣列
for (var i = 0; i < 10; i++) {
  square.push(i*i);                 push：加到陣列「最後面」
}                                   → [0,1,4,9,16,25,36,49,64,81]

var subjects = ["ISIT206", "MATH121", "CSCI301", "PHY211"];
subjects.indexOf("MATH121")         → 1     回傳位置
subjects.splice(1, 2)               從位置 1 開始，刪掉 2 個
                                    → 回傳 ["MATH121","CSCI301"]
                                    subjects 變成 ["ISIT206","PHY211"]`, note:"push 加到最後；indexOf 找位置；splice(index, howmany) 在某位置刪除。"}
  ],
  cards: [
    {q:"字串的長度、大小寫轉換、找位置怎麼寫？", a:`text.length
text.toUpperCase()
text.toLowerCase()
text.indexOf("Fish")   → 位置，找不到 -1`},
    {q:"indexOf 找不到時回傳什麼？", a:`-1

例：text.indexOf("cat") → -1`},
    {q:"includes 和 indexOf 的差別？", a:`includes → 回傳 true / false
indexOf  → 回傳位置 (找不到 -1)`},
    {q:"slice(start, end) 包含 end 嗎？負數怎麼算？", a:`包含 start，不含 end
負數從結尾往回數：
slice(-9) → 最後 9 個字元
slice(10) → 從 10 到結尾`},
    {q:"new Date 的四種建立方式？", a:`new Date()                現在
new Date(millisec)        毫秒
new Date("2000-01-30")    字串
new Date(2000, 0, 1)      年,月,日,...`},
    {q:"Date 的月份怎麼算？", a:`0 到 11
January = 0
December = 11

new Date(2000, 0, 1) → 1 Jan 2000`},
    {q:"getDay() 和 getDate() 差在哪？", a:`getDay()  → 星期 (0-6)，Sunday = 0
getDate() → 幾號 (1-31)`},
    {q:"Date 的時間基準是什麼？一天多少毫秒？", a:`1970/01/01 00:00:00 UTC
一天 = 86,400,000 毫秒`},
    {q:"怎麼算「明天」？", a:`var tomorrow = new Date();
tomorrow.setDate(now.getDate() + 1);`},
    {q:"陣列 index 從幾開始？怎麼新增/修改項目？", a:`從 0 開始
修改：arr[1] = "X";
新增：arr[3] = "Y";  或  arr.push("Y");`},
    {q:"push / indexOf / splice 各做什麼？", a:`push(item)         加到最後
indexOf(item)      回傳位置
splice(index, n)   從 index 起刪 n 個`},
    {q:"怎麼走訪整個陣列？", a:`for (var i = 0; i < arr.length; i++) {
  alert(arr[i]);
}`},
    {q:"slice 和 splice 別搞混", a:`slice(start, end)：取出「子字串」，不改原字串
splice(index, howmany)：從「陣列」刪除項目`}
  ],
  cloze: [
    {title:"默寫：走訪陣列", code:`var subjects = ["ISIT206", "MATH121", "CSCI301"];
{{1}} (var i = 0; i < subjects.{{2}}; i++) {
  alert(subjects[{{3}}]);
}`, ans:[["for"],["length"],["i"]]},
    {title:"默寫：用 push 建立平方陣列", code:`var square = {{1}};
for (var i = 0; i < 10; i++) {
  square.{{2}}(i*i);
}`, ans:[["[]"],["push"]]},
    {title:"默寫：明天的日期", code:`var now = new {{1}}();
var tomorrow = new Date();
tomorrow.{{2}}(now.{{3}}() + 1);`, ans:[["Date"],["setDate"],["getDate"]]},
    {title:"默寫：刪除陣列項目", code:`var subjects = ["ISIT206", "MATH121", "CSCI301", "PHY211"];
var index = subjects.{{1}}("MATH121");
var removedSubjects = subjects.{{2}}(1, 2);`, ans:[["indexOf"],["splice"]]}
  ],
  mistakes: [
    {wrong:`var d = new Date(2000, 1, 1);
// 想要 2000 年 1 月 1 日`, right:`var d = new Date(2000, 0, 1);
// 月份 0 = 一月`, note:"Date 的月份從 0 開始。傳 1 會變成 2 月。"},
    {wrong:`var text = "One Fish";
alert(text.length());`, right:`var text = "One Fish";
alert(text.length);`, note:"length 是屬性，不加括號；toUpperCase() 才是方法要加括號。"},
    {wrong:`var subjects = ["ISIT206", "MATH121"];
alert(subjects[1]);   // 想拿第一個`, right:`var subjects = ["ISIT206", "MATH121"];
alert(subjects[0]);   // 第一個是 index 0`, note:"陣列從 0 開始數。subjects[1] 是第二個。"},
    {wrong:`var weekday = now.getDay();   // 想拿「幾號」`, right:`var day = now.getDate();      // 幾號 (1-31)`, note:"getDay 是星期 (0-6)，getDate 才是幾號。"}
  ],
  trace: [
    {code:`var text = "One Fish, Two Fish, Red Fish, Blue Fish";
var a = text.length;
var b = text.indexOf("Fish");
var c = text.indexOf("cat");
var d = text.includes("Red");`, q:"a, b, c, d 各是？", a:"a = 39\nb = 4\nc = -1\nd = true", why:"O(0)n(1)e(2)空白(3)F(4)…，第一個 Fish 從 index 4 開始；\"cat\" 不存在 → -1。"},
    {code:`var text = "One Fish, Two Fish, Red Fish, Blue Fish";
var s1 = text.slice(10, 12);
var s2 = text.slice(10);
var s3 = text.slice(-9, -6);
var s4 = text.slice(-9);`, q:"s1 ~ s4 各是？", a:"s1 = \"Tw\"\ns2 = \"Two Fish, Red Fish, Blue Fish\"\ns3 = \"Blu\"\ns4 = \"Blue Fish\"", why:"index 10 是 T、11 是 w，slice(10,12) 不含 12。負數：-9 是倒數第 9 個字元 (B)，-6 不含，所以 \"Blu\"。"},
    {code:`var subjects = ["ISIT206", "MATH121", "CSCI301"];
subjects[1] = "LOGIC101";
subjects[3] = "LAW201";
alert(subjects.length);
alert(subjects[1]);`, q:"兩個 alert 各顯示什麼？subjects 現在的內容？", a:"4 和 LOGIC101\nsubjects = [\"ISIT206\", \"LOGIC101\", \"CSCI301\", \"LAW201\"]", why:"subjects[3] 新增了第 4 項，所以長度 4。"},
    {code:`var square = [];
for (var i = 0; i < 10; i++) {
  square.push(i*i);
}
alert(square.length);
alert(square[3]);`, q:"兩個 alert 各顯示什麼？", a:"10 和 9", why:"i 從 0 到 9，共 10 項：0,1,4,9,16,...81。square[3] = 3*3 = 9。"},
    {code:`var subjects = ["ISIT206", "MATH121", "CSCI301", "PHY211"];
var index = subjects.indexOf("MATH121");
var removed = subjects.splice(1, 2);`, q:"index、removed、subjects 各是？", a:"index = 1\nremoved = [\"MATH121\", \"CSCI301\"]\nsubjects = [\"ISIT206\", \"PHY211\"]", why:"splice(1, 2) 從位置 1 起刪 2 個，回傳被刪除的項目，原陣列剩下沒被刪的。"},
    {code:`var d = new Date(2000, 0, 1);
alert(d.getFullYear());
alert(d.getMonth());
alert(d.getDate());`, q:"三個 alert 顯示？", a:"2000、0、1", why:"getMonth() 回傳 0 (一月)。"},
    {code:`var d = new Date(86400000);`, q:"d 是哪一天？", a:"02 Jan 1970 00:00:00 UTC", why:"一天 = 86,400,000 毫秒，從 1970/01/01 加一天。"}
  ],
  quiz: [
    {q:"var text = \"One Fish\"; text.indexOf(\"cat\") 回傳？", opts:["-1","0","undefined","false"], correct:0, explain:"找不到 → -1。"},
    {q:"new Date(2000, 0, 1) 是哪一天？", opts:["2000 年 1 月 1 日","2000 年 2 月 1 日","1999 年 12 月 1 日","無效日期"], correct:0, explain:"月份 0 = 一月。"},
    {q:"getDay() 回傳 0 代表？", opts:["星期日 (Sunday)","星期一","每月 0 號","一月"], correct:0, explain:"Sunday = 0，Saturday = 6。"},
    {q:"想在陣列最後面加一個新元素，用？", opts:["push()","pop()","splice()","indexOf()"], correct:0, explain:"push 加到最後。"},
    {q:"subjects.splice(1, 2) 的意思？", opts:["從位置 1 開始刪除 2 個元素","把位置 1 到 2 取出但不刪除","在位置 1 插入 2","刪除值為 1 和 2 的元素"], correct:0, explain:"splice(index, howmany)。"},
    {q:"\"One Fish, Two Fish\".slice(4, 8) 的結果？", opts:["\"Fish\"","\"Fish,\"","\"ish,\"","\"One F\""], correct:0, explain:"index 4~7：F i s h，不含 8。"},
    {q:"陣列 [\"a\",\"b\",\"c\"] 的 length 是？最後一個元素的 index 是？", opts:["3；2","3；3","2；2","4；3"], correct:0, explain:"index 從 0 開始，最後一個是 length - 1。"},
    {q:"Date 的 getMonth() 回傳的範圍是？", opts:["0 ~ 11","1 ~ 12","0 ~ 12","1 ~ 11"], correct:0, explain:"January = 0，December = 11。"},
    {q:"Date 毫秒計算的基準時間是？", opts:["1970/01/01 00:00:00 UTC","2000/01/01","1900/01/01","建立網頁的當天"], correct:0, explain:"getTime() 回傳距離這個時間的毫秒數。"}
  ]
};

/* ============================================================
   事件
   ============================================================ */
DATA.jsevent = {
  intro: "事件 (event) 讓使用者能和網頁互動：在 HTML 標籤加上 onClick 之類的屬性，指向要執行的函式。要分清楚 onFocus / onBlur / onChange，以及 alert / confirm / prompt 的回傳值。",
  cheat: [
    {t:"事件一覽表", code:`onClick       使用者點擊元素 (按鈕、圖片、checkbox、radio…)
onLoad        元素資源載入完成
              <body>：整頁 (含圖片/JS/CSS) 載入完後；<img>：圖片載入後
onFocus       元素取得焦點 (點進文字框、textarea、下拉選單)
onBlur        元素失去焦點 (離開文字框、textarea、下拉選單)
onChange      失去焦點「且內容有改變」 (或下拉選單選了新的選項)
onSelect      使用者選取(反白) 文字框 / textarea 裡的文字
onMouseDown   在元素上按下滑鼠鍵
onMouseUp     在元素上放開滑鼠鍵
onMouseOver   滑鼠移到元素上
onMouseOut    滑鼠移出元素
onSubmit      使用者送出表單`, note:"onChange：進入欄位但沒有改內容就離開 → 不會觸發；下拉選單選同一個選項 → 也不會。"},
    {t:"事件寫法", code:`<button onClick="handlerFunction1()">Click me</button>
<span onMouseOver="handlerFunction2()">some text</span>
<body onLoad="greeting()">
<input type="text" onFocus="..." />
<textarea onBlur="..."></textarea>
<select onChange="..."> <option value="...">..</option> </select>`, note:"事件處理器通常是元素上的屬性 (onXxx)，值是要執行的函式呼叫。"},
    {t:"onChange 範例：折扣碼轉大寫", code:`Enter discount code: <input type="text" id="discountCode" onChange="uppercase()">

function uppercase(){
  var discountField = document.getElementById("discountCode");
  discountField.value = discountField.value.toUpperCase();
}`, note:""},
    {t:"滑鼠事件範例", code:`<span id="demo" onMouseDown="mouseDown()" onMouseUp="mouseUp()">Mouse Events</span>

function mouseDown() {
  var demoSpan = document.getElementById("demo");
  demoSpan.innerHTML = "Release Me";
}
function mouseUp() {
  var demoSpan = document.getElementById("demo");
  demoSpan.innerHTML = "Thank You";
}

onMouseOver="mouseOver()"  onMouseOut="mouseOut()"   同樣寫法`, note:""},
    {t:"onSubmit：return false 阻止送出", code:`<form onSubmit="return validateForm()" action="..." method="...">
  ...
</form>

<script>
function validateForm(){
  if (... something wrong ...) {
    return false;      // 不合法 → 阻止送出
  }
  return true;         // 全部合法 → 送出到伺服器
}
</script>`, note:"onSubmit 屬性一定要寫 return validateForm()，少了 return，函式回傳的 false 就沒被使用。"},
    {t:"三種對話框", code:`alert("message");                 只有 OK

var ok = confirm("Do you want to proceed?");
if (ok) {                         OK → true / Cancel → false
  alert("User clicked OK");
} else {
  alert("User clicked Cancel.");
}

var name = prompt("Please enter your name", "cat in the hat");
if (name != null) {               OK → 輸入的文字 / Cancel → null
  alert("Hello " + name);
} else {
  alert("You clicked Cancel");
}`, note:"prompt(\"提示文字\", \"預設文字\")，第二個參數是輸入框的預設值。"},
    {t:"onClick 範例：點 cat / dog 圖片", code:`<script>
function cat(){ alert("Don't click me, click the dog!"); }
function dog(){ alert("I don't mind being clicked!"); }
</script>

<img onClick="cat()" src="cat.png" />
<img onClick="dog()" src="dog.png" />

<script>
function greeting(){ alert("Welcome to my website!"); }
</script>
<body onLoad="greeting()">`, note:""}
  ],
  cards: [
    {q:"onClick 在什麼時候觸發？", a:`使用者點擊元素時：
按鈕、圖片、checkbox、radio 等

<button onClick="sayHi()">`},
    {q:"onLoad 在什麼時候觸發？", a:`元素的資源完全載入之後
<body onLoad>：整個頁面載入完 (含圖片、JS、CSS)
<img onLoad>：圖片載入完`},
    {q:"onFocus 和 onBlur 的差別？", a:`onFocus：進入 (取得焦點)
onBlur：離開 (失去焦點)

適用：文字框、密碼框、textarea、下拉選單`},
    {q:"onChange 什麼時候「不會」觸發？", a:`進入欄位但沒有改變內容就離開
下拉選單重新選同一個選項

onChange = 失去焦點 且 值有改變`},
    {q:"onChange 和 onBlur 差在哪？", a:`onBlur：只要離開就觸發
onChange：離開時「內容有改變」才觸發`},
    {q:"onSelect 什麼時候觸發？", a:`使用者選取 (反白) 文字框或
textarea 裡的一段文字時`},
    {q:"四個滑鼠事件？", a:`onMouseDown 按下滑鼠鍵
onMouseUp   放開滑鼠鍵
onMouseOver 滑鼠移入元素
onMouseOut  滑鼠移出元素`},
    {q:"onSubmit 怎麼用來阻止表單送出？", a:`<form onSubmit="return validateForm()">

函式回傳 false → 不送出
函式回傳 true  → 送出`},
    {q:"confirm() 回傳什麼？", a:`true / false
按 OK → true
按 Cancel → false`},
    {q:"prompt() 回傳什麼？", a:`按 OK → 輸入的文字 (字串)
按 Cancel → null

prompt("提示", "預設文字")`},
    {q:"alert / confirm / prompt 各有幾個按鈕、回傳什麼？", a:`alert：OK，無回傳值
confirm：OK/Cancel → true/false
prompt：OK/Cancel + 輸入框 → 文字/null`},
    {q:"想在使用者離開折扣碼輸入框時自動轉成大寫？", a:`<input type="text" id="discountCode"
       onChange="uppercase()">

function uppercase(){
 var f = document.getElementById("discountCode");
 f.value = f.value.toUpperCase();
}`}
  ],
  cloze: [
    {title:"默寫：表單送出前驗證", code:`<form {{1}}="{{2}} validateForm()" action="myService" method="get">
  ...
</form>

<script>
function validateForm() {
  if (... something wrong ...) {
    return {{3}};
  }
  return {{4}};
}
</script>`, ans:[["onSubmit"],["return"],["false"],["true"]]},
    {title:"默寫：prompt 判斷 Cancel", code:`var name = {{1}}("Please enter your name", "cat in the hat");
if (name {{2}} {{3}}) {
  alert("Hello " + name);
} else {
  alert("You clicked Cancel");
}`, ans:[["prompt"],["!="],["null"]]},
    {title:"默寫：confirm", code:`var ok = {{1}}("Do you want to proceed?");
if ({{2}}) {
  alert("User clicked OK");
} else {
  alert("User clicked Cancel.");
}`, ans:[["confirm"],["ok"]]},
    {title:"默寫：滑鼠移入 / 移出", code:`<span id="demo" {{1}}="mouseOver()" {{2}}="mouseOut()">Mouse Events</span>`, ans:[["onMouseOver"],["onMouseOut"]], note:"大小寫：onMouseOver。HTML 屬性其實不分大小寫，但講義寫成 onMouseOver。"}
  ],
  mistakes: [
    {wrong:`<form onSubmit="validateForm()">`, right:`<form onSubmit="return validateForm()">`, note:"少了 return，就算 validateForm() 回傳 false，表單還是會照常送出。"},
    {wrong:`var name = prompt("Your name?");
if (name == "") {
  alert("You clicked Cancel");
}`, right:`var name = prompt("Your name?");
if (name == null) {
  alert("You clicked Cancel");
}`, note:"按 Cancel 回傳的是 null，不是空字串。"},
    {wrong:`var ok = confirm("Proceed?");
if (ok == "OK") { ... }`, right:`var ok = confirm("Proceed?");
if (ok) { ... }        // ok 是 true / false`, note:"confirm 回傳布林值 true / false，不是字串。"},
    {wrong:`<button onClick="sayHi">Click me</button>`, right:`<button onClick="sayHi()">Click me</button>`, note:"呼叫函式要加括號。"}
  ],
  trace: [
    {code:`<input type="text" id="discountCode" onChange="uppercase()">
// 使用者輸入 abc123，然後點別的地方離開`, q:"會發生什麼？", a:"觸發 onChange，輸入框變成 ABC123。", why:"離開欄位 (失去焦點) 且內容有改變。"},
    {code:`<input type="text" id="discountCode" value="XYZ" onChange="uppercase()">
// 使用者點進輸入框，什麼都沒改就離開`, q:"onChange 會觸發嗎？", a:"不會。", why:"內容沒有改變，就不會觸發 onChange (onBlur 才會)。"},
    {code:`var name = prompt("Please enter your name", "cat in the hat");
if (name != null) {
  alert("Hello " + name);
} else {
  alert("You clicked Cancel");
}
// 使用者直接按 OK (沒改輸入框)`, q:"顯示什麼？如果按 Cancel 呢？", a:"按 OK：Hello cat in the hat\n按 Cancel：You clicked Cancel", why:"第二個參數是預設文字；按 Cancel 回傳 null。"},
    {code:`function validateForm(){
  return false;
}
<form onSubmit="return validateForm()" action="x">...</form>
// 使用者按 Submit`, q:"表單會送出嗎？如果 onSubmit=\"validateForm()\" (沒寫 return) 呢？", a:"有 return：不送出。\n沒有 return：仍然送出。", why:"onSubmit 的值要是 false 才會阻止送出；沒寫 return 時，函式的 false 沒有被交給事件。"},
    {code:`<span id="demo" onMouseDown="mouseDown()" onMouseUp="mouseUp()">Mouse Events</span>
// mouseDown → "Release Me"；mouseUp → "Thank You"`, q:"使用者按住滑鼠不放，畫面顯示什麼？放開後呢？", a:"按住：Release Me\n放開：Thank You", why:"onMouseDown = 按下；onMouseUp = 放開。"},
    {code:`<body onLoad="greeting()">
function greeting(){ alert("Welcome to my website!"); }`, q:"alert 什麼時候跳出？", a:"整個網頁 (含圖片、JS、CSS) 都載入完成之後。", why:"body 的 onLoad。"}
  ],
  quiz: [
    {q:"onMouseOver 跟 onFocus 差在哪？", opts:["onMouseOver 是滑鼠移到元素上；onFocus 是元素被選取聚焦","兩者都是滑鼠事件","兩者都是鍵盤事件","完全一樣"], correct:0, explain:"onFocus 常用在輸入框被點進去、下拉選單被選取。"},
    {q:"prompt(\"請輸入姓名\") 使用者按 Cancel，回傳值是？", opts:["null","空字串 \"\"","undefined","false"], correct:0, explain:"按 Cancel 回傳 null；按 OK 回傳輸入的文字。"},
    {q:"想在使用者點按鈕時跳出「是否確定？」並知道使用者按了哪個，用？", opts:["confirm()","prompt()","alert()","onChange()"], correct:0, explain:"confirm 有 OK / Cancel，回傳 true / false。"},
    {q:"onChange 什麼情況下不會觸發？", opts:["進入欄位但沒有改變內容就離開","改了內容再離開","下拉選單選了不同選項","輸入新文字後離開"], correct:0, explain:"onChange 需要值有改變。"},
    {q:"表單送出前要驗證，onSubmit 應寫？", opts:["onSubmit=\"return validateForm()\"","onSubmit=\"validateForm()\"","onClick=\"return validateForm()\"","onSubmit=validateForm"], correct:0, explain:"必須有 return，false 才會阻止送出。"},
    {q:"<body onLoad=\"greeting()\"> 的 greeting 何時執行？", opts:["頁面完全載入後","使用者點擊頁面時","頁面開始載入時","使用者離開頁面時"], correct:0, explain:"onLoad = 資源載入完成。"},
    {q:"confirm() 按 Cancel 回傳？", opts:["false","null","0","undefined"], correct:0, explain:"confirm 回傳 true / false；prompt 才是 null。"},
    {q:"onBlur 在什麼時候觸發？", opts:["元素失去焦點時","元素取得焦點時","滑鼠移出元素時","內容被選取時"], correct:0, explain:"blur = 模糊/失焦。"},
    {q:"onSelect 在什麼時候觸發？", opts:["使用者選取(反白)文字框中的文字","使用者選下拉選單","使用者選 radio","使用者點按鈕"], correct:0, explain:"onSelect 對應文字選取。"}
  ]
};

/* ============================================================
   隨機 · 動畫
   ============================================================ */
DATA.anim = {
  intro: "動畫的核心只有兩個問題：「每次要做什麼」(寫一個函式) 和「多久做一次」(毫秒)。setInterval 啟動、clearInterval 停止，需要「做幾次」就用計數器變數判斷何時停。",
  cheat: [
    {t:"隨機數字公式", code:`Math.random()                       0(含) ~ 1(不含) 的小數
Math.random() * 10                  0 ~ 10 的小數
Math.floor(Math.random() * 10)      0~9 的整數 (0,1,2,...,9)
Math.floor(Math.random() * 10) + 1  1~10 的整數
Math.floor(Math.random() * 6) + 1   1~6 的整數 (骰子)`, note:"floor 無條件捨去。公式：Math.floor(Math.random() * n) + 1 → 1 到 n。"},
    {t:"啟動 / 停止動畫", code:`var animationSchedule = setInterval(animationFunction, milisecs);
                       └ 做什麼 (函式名，不加括號)  └ 多久一次 (毫秒)

clearInterval(animationSchedule);      停止 (要用同一個變數)`, note:"setInterval(rollDice, 100)：傳「函式本身」，不是 rollDice()。1000 毫秒 = 1 秒。"},
    {t:"計數器動畫 (Counter)", code:`<button onClick="startCounterAnimation()">Start counter</button>
<button onClick="stopCounterAnimation()">Stop counter</button>
<span id="counter"></span>

var counter = 0;
var counterSchedule;

function startCounterAnimation(){
  // start the counter animation
  counterSchedule = setInterval(showCounter, 1000);
}
function showCounter(){
  // increase the counter by 1
  counter = counter + 1;
  // show the counter
  var counterSpan = document.getElementById("counter");
  counterSpan.innerHTML = counter;
}
function stopCounterAnimation(){
  clearInterval(counterSchedule);
}`, note:"每 1 秒呼叫一次 showCounter，直到 clearInterval。"},
    {t:"骰子 (單次)", code:`<button onClick="rollDice()">Roll the dice</button>
<img id="dice" />

function rollDice(){
  // generate a random dice value from 1 to 6
  var diceValue = Math.floor(Math.random() * 6) + 1;
  // get image file name for this dice value
  var imageFile = "dice" + diceValue + ".png";
  // show the image
  var diceImage = document.getElementById("dice");
  diceImage.src = imageFile;
}`, note:"圖片檔名用字串串接：\"dice\" + diceValue + \".png\"。"},
    {t:"骰子動畫 (閃 10 次後停止)", code:`<button onClick="rollDiceAnimation()">Roll the dice</button>
<img id="dice" />

var rollDiceSchedule;
var rollDiceCounter;

function rollDiceAnimation(){
  // set the roll dice counter to 0
  rollDiceCounter = 0;
  // start the roll dice animation
  rollDiceSchedule = setInterval(rollDice, 100);
}

function rollDice(){
  var diceValue = Math.floor(Math.random() * 6) + 1;
  var imageFile = "dice" + diceValue + ".png";
  var diceImage = document.getElementById("dice");
  diceImage.src = imageFile;
  // increase the roll dice counter
  rollDiceCounter = rollDiceCounter + 1;
  // if the roll dice counter reaches 10 then stop the animation
  if (rollDiceCounter == 10) {
    clearInterval(rollDiceSchedule);
  }
}`, note:"100 毫秒 × 10 次 = 1 秒內閃 10 個隨機骰子然後停止。用計數器變數判斷何時 clearInterval。"}
  ],
  cards: [
    {q:"啟動一個每 1 秒執行一次的動畫？", a:`var schedule =
  setInterval(myFunction, 1000);`},
    {q:"怎麼停止動畫？", a:`clearInterval(schedule);

schedule 要是 setInterval 回傳的那個變數
(要先用變數存起來)`},
    {q:"setInterval 的兩個參數？", a:`1) 要執行的函式 (不加括號)
2) 間隔的毫秒數

1000 毫秒 = 1 秒`},
    {q:"setInterval(rollDice(), 100) 有什麼問題？", a:`加了括號 = 立刻執行一次，
再把回傳值 (undefined) 交給 setInterval。
動畫不會照預期跑。

正確：setInterval(rollDice, 100)`},
    {q:"Math.random() 產生的範圍？", a:`0 (含) ~ 1 (不含) 的小數
永遠不會等於 1`},
    {q:"產生 1~6 的隨機整數 (骰子)？", a:`Math.floor(Math.random() * 6) + 1

random()*6 → 0 ≤ x < 6
floor → 0~5
+1 → 1~6`},
    {q:"產生 0~9 的隨機整數？", a:`Math.floor(Math.random() * 10)`},
    {q:"產生 1~10 的隨機整數？", a:`Math.floor(Math.random() * 10) + 1`},
    {q:"動畫想「做 10 次就停」，怎麼做？", a:`用計數器變數：
開始前 counter = 0
每次執行 counter = counter + 1
if (counter == 10) clearInterval(schedule);`},
    {q:"設計動畫要想的兩件事？", a:`1) 做什麼：寫一個函式
2) 多久做一次：毫秒數`},
    {q:"骰子圖片檔名怎麼組出來？", a:`"dice" + diceValue + ".png"

diceValue = 5 → "dice5.png"`},
    {q:"為什麼 schedule 變數要宣告在函式外面？", a:`因為啟動動畫和停止動畫是不同函式，
兩邊都要用到同一個 schedule，
所以宣告成函式外面的全域變數`}
  ],
  cloze: [
    {title:"默寫：隨機骰子", code:`var diceValue = Math.{{1}}(Math.{{2}}() * {{3}}) + {{4}};
var imageFile = "dice" + diceValue + ".png";`, ans:[["floor"],["random"],["6"],["1"]]},
    {title:"默寫：啟動 / 停止計數器動畫", code:`var counter = 0;
var counterSchedule;

function startCounterAnimation(){
  counterSchedule = {{1}}(showCounter, {{2}});
}
function stopCounterAnimation(){
  {{3}}(counterSchedule);
}`, ans:[["setInterval"],["1000"],["clearInterval"]]},
    {title:"默寫：骰子動畫 (閃 10 次後停止)", code:`var rollDiceSchedule;
var rollDiceCounter;

function rollDiceAnimation(){
  rollDiceCounter = {{1}};
  rollDiceSchedule = setInterval({{2}}, 100);
}
function rollDice(){
  ...
  rollDiceCounter = rollDiceCounter {{3}} 1;
  if (rollDiceCounter {{4}} 10) {
    clearInterval({{5}});
  }
}`, ans:[["0"],["rollDice"],["+"],["=="],["rollDiceSchedule"]]},
    {title:"默寫：showCounter", code:`function showCounter(){
  counter = counter {{1}} 1;
  var counterSpan = document.{{2}}("counter");
  counterSpan.{{3}} = counter;
}`, ans:[["+"],["getElementById"],["innerHTML"]]}
  ],
  mistakes: [
    {wrong:`setInterval(rollDice(), 100);`, right:`setInterval(rollDice, 100);`, note:"setInterval 要傳「函式本身」，不能加括號。加了括號會立刻執行一次，且把回傳值 (undefined) 傳給 setInterval。"},
    {wrong:`var counter = 0;
function showCounter(){
  var counter = 0;
  counter = counter + 1;
  ...
}`, right:`var counter = 0;
function showCounter(){
  counter = counter + 1;
  ...
}`, note:"函式裡又用 var 宣告一次，會變成函式內的另一個區域變數，每次都是 0 → 1，永遠顯示 1。"},
    {wrong:`var num = Math.floor(Math.random() * 6);   // 想要骰子 1~6`, right:`var num = Math.floor(Math.random() * 6) + 1;`, note:"沒有 +1 只會得到 0~5。"},
    {wrong:`function startAnimation(){
  var schedule = setInterval(f, 1000);
}
function stopAnimation(){
  clearInterval(schedule);   // schedule 不存在
}`, right:`var schedule;
function startAnimation(){
  schedule = setInterval(f, 1000);
}
function stopAnimation(){
  clearInterval(schedule);
}`, note:"停止的函式需要拿到同一個 schedule 變數，所以要宣告在函式外面。"}
  ],
  trace: [
    {code:`var counter = 0;
counterSchedule = setInterval(showCounter, 1000);
// showCounter：counter = counter + 1; 顯示 counter
// 5.5 秒後按 Stop`, q:"畫面最後顯示多少？", a:"5", why:"每秒一次：1 秒→1，2 秒→2，…5 秒→5；5.5 秒時已經執行 5 次，Stop 後不再增加。"},
    {code:`rollDiceCounter = 0;
rollDiceSchedule = setInterval(rollDice, 100);
// rollDice 每次：計數器 +1，if (rollDiceCounter == 10) clearInterval(rollDiceSchedule);`, q:"總共執行 rollDice 幾次？動畫持續多久？", a:"10 次；約 1 秒 (100ms × 10)。", why:"第 10 次執行時計數器變成 10，就停止。"},
    {code:`Math.floor(Math.random() * 6) + 1`, q:"可能的結果有哪些？", a:"1, 2, 3, 4, 5, 6", why:"random()*6 介於 0 到 6 (不含 6)；floor 得 0~5；+1 得 1~6。"},
    {code:`Math.floor(Math.random() * 10)`, q:"可能的結果有哪些？", a:"0, 1, 2, ..., 9", why:"floor 之後是 0~9。"},
    {code:`var diceValue = 4;
var imageFile = "dice" + diceValue + ".png";`, q:"imageFile 是什麼？", a:"\"dice4.png\"", why:"字串 + 數字 + 字串 → 串接。"},
    {code:`<button onClick="showMessage('Woof woof woof!')">Dog</button>

function showMessage(message){
  document.getElementById("display").innerHTML = message;
}`, q:"按下按鈕後 display 顯示什麼？", a:"Woof woof woof!", why:"參數 message 收到字串 'Woof woof woof!'。"}
  ],
  build: [
    {task:"計數器動畫：按「Start」後每 1 秒數字 +1 顯示在畫面，按「Stop」停止。",
     steps:["1. 「做什麼」：一個函式 showCounter，每次把 counter +1 並顯示。","2. 「多久一次」：1000 毫秒。","3. 需要記住目前數字 → 變數 counter，起始 0。","4. 需要之後能停 → 把 setInterval 的回傳值存到變數 counterSchedule (函式外面宣告)。","5. Stop 按鈕呼叫 clearInterval(counterSchedule)。"],
     code:`var counter = 0;
var counterSchedule;

function startCounterAnimation(){
  counterSchedule = setInterval(showCounter, 1000);
}
function showCounter(){
  counter = counter + 1;
  document.getElementById("counter").innerHTML = counter;
}
function stopCounterAnimation(){
  clearInterval(counterSchedule);
}`},
    {task:"骰子動畫：按下按鈕後，1 秒內連續閃 10 張隨機骰子圖，然後停在最後一張。",
     steps:["1. 單次擲骰：random 1~6 → 組圖片檔名 → 設 src。","2. 動畫：每 100 毫秒擲一次 → setInterval(rollDice, 100)。","3. 「只做 10 次」→ 計數器 rollDiceCounter：開始前設 0，每次擲骰 +1。","4. 計數器等於 10 時 clearInterval(rollDiceSchedule)。","5. 兩個變數 (schedule、counter) 都要在函式外面宣告。"],
     code:`var rollDiceSchedule;
var rollDiceCounter;

function rollDiceAnimation(){
  rollDiceCounter = 0;
  rollDiceSchedule = setInterval(rollDice, 100);
}

function rollDice(){
  var diceValue = Math.floor(Math.random() * 6) + 1;
  var imageFile = "dice" + diceValue + ".png";
  document.getElementById("dice").src = imageFile;
  rollDiceCounter = rollDiceCounter + 1;
  if (rollDiceCounter == 10) {
    clearInterval(rollDiceSchedule);
  }
}`}
  ],
  quiz: [
    {q:"Math.random() 產生的數字範圍是？", opts:["0(含)~1(不含)的小數","0~1 的整數","1~10 的整數","-1~1 的小數"], correct:0, explain:"要變整數要配合 Math.floor()。"},
    {q:"要停止動畫，一定要先記住什麼？", opts:["setInterval 回傳的排程 (schedule) 變數","動畫的名字","函式的參數","什麼都不用記"], correct:0, explain:"clearInterval 需要那個排程變數。"},
    {q:"setInterval(rollDice, 100) 裡的 100 代表？", opts:["每隔 100 毫秒執行一次","總共執行 100 次","執行 100 毫秒後停止","延遲 100 毫秒才開始且只執行一次"], correct:0, explain:"第二個參數是間隔毫秒數。"},
    {q:"產生 1 到 6 的隨機整數，正確寫法？", opts:["Math.floor(Math.random() * 6) + 1","Math.floor(Math.random() * 7)","Math.random() * 6 + 1","Math.round(Math.random() * 6)"], correct:0, explain:"floor(random*6) 是 0~5，+1 變 1~6。"},
    {q:"setInterval 的第一個參數應該是？", opts:["函式名稱，不加括號","函式呼叫，例如 rollDice()","毫秒數","動畫的名字"], correct:0, explain:"setInterval(f, ms)：第一個是函式本身，第二個才是毫秒數。"},
    {q:"骰子動畫想「閃 10 次就停」，用什麼方式？", opts:["計數器變數，等於 10 時 clearInterval","setInterval 的第三個參數指定次數","等 10 秒後刷新頁面","不能做到"], correct:0, explain:"每次執行 +1，到 10 就 clearInterval。"},
    {q:"Math.floor(Math.random() * 10) 可能得到的最大值是？", opts:["9","10","11","1"], correct:0, explain:"random() 永遠 < 1，所以 * 10 < 10，floor 後最大 9。"},
    {q:"1000 毫秒等於？", opts:["1 秒","10 秒","0.1 秒","1 分鐘"], correct:0, explain:"1 秒 = 1000 毫秒。"}
  ]
};
