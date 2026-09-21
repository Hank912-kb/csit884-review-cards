window.DATA = window.DATA || {};

/* ============================================================
   表單
   ============================================================ */
DATA.form = {
  intro: "表單負責收集使用者輸入並送到伺服器。最重要的一句話：前端表單元素的 name 必須對應後端程式的「參數名稱」，value 是「實際送出去的值」(不一定等於畫面顯示的文字)。",
  cheat: [
    {t:"form 基本結構", code:`<form action="handle_login" method="post">
  Username:<br />
  <input type="text" name="username" size="30" /><br />
  Password:<br />
  <input type="password" name="password" size="30" /><br /><br />

  <input type="submit" value="Login" />
  <input type="reset" value="Reset form" />
</form>`, note:"action：處理表單的後端程式；method：get / post；submit 送出；reset 清除所有輸入。"},
    {t:"文字類 · textarea", code:`First name:<br />
<input type="text" name="firstname" size="30" /><br />

Password:<br />
<input type="password" name="password" size="30" /><br />

Enter your comment:<br />
<textarea name="comment" rows="5" cols="30"></textarea>`, note:"text：一般文字；password：輸入內容顯示成圓點；textarea：多行文字，rows 列數、cols 欄數。"},
    {t:"checkbox (複選)", code:`Choose journals to subscribe:<br />
<input type="checkbox" name="journal" value="AMM" />American Mathematical Monthly<br />
<input type="checkbox" name="journal" value="CMJ" />College Mathematics Journal<br />
<input type="checkbox" name="journal" value="MM" />Mathematics Magazine<br />
         ↑ name：後端參數名稱     ↑ value：送出去的值    ↑ 後面的文字：顯示給使用者看

<!-- 預設勾選 -->
<input type="checkbox" name="subscription" value="e" checked="checked" />eJournal`, note:"同名 (name) 的 checkbox 可以複選，送出時會有多個同名參數。預設勾選：checked=\"checked\"。"},
    {t:"radio (單選)", code:`Select student type:<br />
<input type="radio" name="studentType" value="u" />Undergraduate
<input type="radio" name="studentType" value="p" />Postgraduate
<input type="radio" name="studentType" value="other" checked="checked" />Other`, note:"同一組 radio 的 name 必須相同，才會互斥 (只能選一個)。"},
    {t:"select 下拉選單", code:`Select day:<br />
<select name="day">
  <option value="mon">Monday</option>
  <option value="tue">Tuesday</option>
  <option value="fri" selected="selected">Friday</option>
</select>

<select name="day" multiple>       可以複選
  ...
</select>`, note:"option 的 value 是送出去的值，標籤之間的文字是顯示給使用者的。預設選取：selected=\"selected\"。"},
    {t:"GET vs POST", code:`                     method="get"                    method="post"
資料可見？           顯示在網址 (?author=...)          不顯示在網址
瀏覽紀錄            參數會留在紀錄                    不會保存
加書籤              可以                              不行
安全性              較差，絕不用來傳密碼              較好
上一頁 / 重新整理   無害                              資料會被重送，瀏覽器會警告
資料長度            有限制 (URL 最長約 2048 字元)     沒有限制
資料型態            只能 ASCII                        沒有限制，可傳二進位`, note:""},
    {t:"表單 → 網址 (GET) 的對應", code:`<form action="http://library.whosville/bsearch" method="get">
  <input type="text" name="author"/>
  <input type="text" name="year"/>
  <input type="checkbox" name="sub" value="mth"/>
  <input type="checkbox" name="sub" value="cs"/>
  <input type="checkbox" name="sub" value="bio"/>
  <input type="checkbox" name="sub" value="phy"/>
  <input type="checkbox" name="sub" value="chem"/>
</form>

使用者填 author=tonien、year=2000，勾 cs 與 phy，送出後網址：
http://library.whosville/bsearch?author=tonien&year=2000&sub=cs&sub=phy`, note:"格式：網址?name=value&name=value；沒勾選的 checkbox 不會出現在網址裡；多選就重複同名參數。"}
  ],
  cards: [
    {q:"form 的 action 和 method 各是什麼？", a:`action：處理這份表單的後端程式網址
method：送出方式 get / post`},
    {q:"表單元素的 name 屬性有什麼用？", a:`決定送到後端的「參數名稱」
(前端 name 要對應後端參數)

name="author" → ?author=...`},
    {q:"value 屬性有什麼用？和畫面顯示的文字一樣嗎？", a:`value 是實際「送到後端的值」
畫面顯示的文字是標籤之間的文字，
兩者可以不一樣：

<option value="mon">Monday</option>
 → 送出 mon，顯示 Monday`},
    {q:"GET 和 POST 最大差別？", a:`GET：資料顯示在網址上、
 長度限制約 2048 字元、絕不能送密碼
POST：資料不顯示在網址、
 無長度限制，適合機密資料`},
    {q:"checkbox 和 radio 差在哪？", a:`checkbox：可複選，可同名
radio：單選，同一組 name 必須相同

預設勾選：checked="checked"`},
    {q:"預設選取的屬性怎麼寫？", a:`checkbox / radio：checked="checked"
select 的 option：selected="selected"`},
    {q:"下拉選單怎麼讓使用者可複選？", a:`<select name="day" multiple>`},
    {q:"textarea 要設定大小怎麼寫？", a:`rows="5" cols="30"
(列數與欄數)

<textarea name="comment" rows="5" cols="30">
</textarea>`},
    {q:"submit 和 reset 按鈕差在哪？", a:`submit：送出表單到伺服器
reset：清除表單裡所有輸入

<input type="submit" value="Login" />
<input type="reset" value="Reset form" />`},
    {q:"password 欄位和 text 欄位的差別？密碼可以用 GET 送嗎？", a:`password：輸入內容以圓點遮住
絕對不能用 GET：
資料會出現在網址、瀏覽紀錄`},
    {q:"表單送出後網址會長怎樣？(GET)", a:`網址?name1=value1&name2=value2

多個參數用 & 相連，
checkbox 多選就重複同名參數：
?sub=cs&sub=phy`},
    {q:"input 的 size 是什麼？", a:`文字框的顯示寬度 (字元數)
<input type="text" size="30" />`}
  ],
  cloze: [
    {title:"默寫：登入表單", code:`<{{1}} {{2}}="handle_login" {{3}}="post">
  Username:<br />
  <input {{4}}="text" name="username" size="30" /><br />
  Password:<br />
  <input type="{{5}}" name="password" size="30" /><br /><br />
  <input type="{{6}}" value="Login" />
  <input type="{{7}}" value="Reset form" />
</{{8}}>`, ans:[["form"],["action"],["method"],["type"],["password"],["submit"],["reset"],["form"]]},
    {title:"默寫：radio 與預設選取", code:`<input type="{{1}}" name="studentType" value="u" />Undergraduate
<input type="radio" name="{{2}}" value="p" />Postgraduate
<input type="radio" name="studentType" value="other" {{3}}="{{4}}" />Other`, ans:[["radio"],["studentType"],["checked"],["checked"]]},
    {title:"默寫：下拉選單", code:`<{{1}} name="day">
  <{{2}} value="mon">Monday</{{3}}>
  <option value="fri" {{4}}="selected">Friday</option>
</{{5}}>`, ans:[["select"],["option"],["option"],["selected"],["select"]]},
    {title:"默寫：textarea", code:`<{{1}} name="comment" {{2}}="5" {{3}}="30"></{{4}}>`, ans:[["textarea"],["rows"],["cols"],["textarea"]]},
    {title:"默寫：圖書館搜尋表單 (後端參數 author、year、sub)", code:`<form action="http://library.whosville/bsearch" method="{{1}}">
  <input type="text" {{2}}="author"/>
  <input type="text" name="{{3}}"/>
  <input type="checkbox" name="{{4}}" {{5}}="cs"/>
</form>`, ans:[["get"],["name"],["year"],["sub"],["value"]]}
  ],
  mistakes: [
    {wrong:`<input type="radio" name="type1" value="u" />Undergraduate
<input type="radio" name="type2" value="p" />Postgraduate`, right:`<input type="radio" name="studentType" value="u" />Undergraduate
<input type="radio" name="studentType" value="p" />Postgraduate`, note:"radio 的 name 不同就變成兩組獨立的單選，使用者可以兩個都選。同一組一定要同名。"},
    {wrong:`<input type="text" id="author" />`, right:`<input type="text" name="author" />`, note:"後端看的是 name；只有 id 沒有 name，資料不會被送出去。(id 是給 JS / CSS 用的)"},
    {wrong:`<form action="login" method="get">
  Password: <input type="password" name="password" />`, right:`<form action="login" method="post">
  Password: <input type="password" name="password" />`, note:"密碼絕不可用 get：會出現在網址與瀏覽紀錄。"},
    {wrong:`<input type="checkbox" name="sub" value="cs" checked />`, right:`<input type="checkbox" name="sub" value="cs" checked="checked" />`, note:"XHTML 規則：屬性不可縮寫。"},
    {wrong:`<select name="day">
  <option>Monday</option>
</select>
(想送出 mon)`, right:`<select name="day">
  <option value="mon">Monday</option>
</select>`, note:"要送出和顯示不同的值，就用 value 指定；沒有 value 時會送出標籤裡的文字 (Monday)。"}
  ],
  trace: [
    {code:`<form action="http://library.whosville/bsearch" method="get">
  <input type="text" name="author"/>
  <input type="text" name="year"/>
  <input type="checkbox" name="sub" value="mth"/>
  <input type="checkbox" name="sub" value="cs"/>
  <input type="checkbox" name="sub" value="bio"/>
  <input type="checkbox" name="sub" value="phy"/>
  <input type="checkbox" name="sub" value="chem"/>
</form>
// 使用者：author 填 tonien、year 填 2000，勾選 cs 和 phy，按送出`, q:"網址列會變成什麼？", a:"http://library.whosville/bsearch?author=tonien&year=2000&sub=cs&sub=phy", why:"name=value 用 & 相連；勾選兩個同名 checkbox → 兩個 sub 參數。"},
    {code:`(同上表單)
// 使用者：author 填 smith，year 留空，什麼 checkbox 都沒勾，按送出`, q:"網址列會變成什麼？", a:"http://library.whosville/bsearch?author=smith&year=", why:"空白文字框仍會送出 (值是空的)；沒勾選的 checkbox 完全不會出現。"},
    {code:`<form action="handle_login" method="post">
  <input type="text" name="username" />
  <input type="password" name="password" />
  <input type="submit" value="Login" />
</form>
// 使用者送出`, q:"網址列會出現 username 和 password 嗎？", a:"不會。", why:"POST 的資料不顯示在網址。"},
    {code:`<input type="radio" name="studentType" value="u" />Undergraduate
<input type="radio" name="studentType" value="p" />Postgraduate
<input type="radio" name="studentType" value="other" checked="checked" />Other
// 使用者沒有改，直接送出 (method=get)`, q:"網址會帶什麼參數？", a:"?studentType=other", why:"預設選取的 radio 就是被選的；送出 name=value。"},
    {code:`<select name="day">
  <option value="mon">Monday</option>
  <option value="tue">Tuesday</option>
  <option value="fri" selected="selected">Friday</option>
</select>
// 使用者沒有改，直接送出 (method=get)`, q:"網址會帶什麼參數？畫面顯示什麼？", a:"?day=fri；畫面顯示 Friday。", why:"送的是 value，顯示的是標籤文字。"}
  ],
  build: [
    {task:"圖書館搜尋：後端 http://library.whosville/bsearch 接受參數 author (文字)、year (文字)、sub (多值：mth、cs、bio、phy、chem)。請寫出表單。",
     steps:["1. form：action 填後端網址，資料是查詢用途 → method=get。","2. author、year：text 輸入框，name 分別是 author、year。","3. sub：可以多個值 → checkbox，5 個都用 name=\"sub\"，value 分別 mth cs bio phy chem。","4. 別忘了 submit 按鈕。"],
     code:`<form action="http://library.whosville/bsearch" method="get">
  Author: <input type="text" name="author" />
  Year: <input type="text" name="year" />
  <input type="checkbox" name="sub" value="mth" />Mathematics
  <input type="checkbox" name="sub" value="cs" />Computer Science
  <input type="checkbox" name="sub" value="bio" />Biology
  <input type="checkbox" name="sub" value="phy" />Physics
  <input type="checkbox" name="sub" value="chem" />Chemistry
  <input type="submit" value="Search" />
</form>`}
  ],
  quiz: [
    {q:"表單送到伺服器，決定「參數名稱」的是哪個屬性？", opts:["name","value","id","type"], correct:0, explain:"name 對應後端要接收的參數 key，value 才是實際送過去的內容。"},
    {q:"密碼欄位絕對不能用哪個 method 送出？", opts:["get","post","submit","secure"], correct:0, explain:"get 會把資料放在網址上，還會留在瀏覽紀錄。"},
    {q:"多個 checkbox 使用者可以複選，它們的 name 應該？", opts:["全部相同","各不相同","不需要 name","必須是 sub1, sub2, ..."], correct:0, explain:"同名多值 → 網址會有多個同名參數 (?sub=cs&sub=phy)。"},
    {q:"讓一組 radio 只能選一個，需要？", opts:["name 相同","id 相同","value 相同","type 不同"], correct:0, explain:"同 name 才是同一組。"},
    {q:"下拉選單預設選取某一項，屬性是？", opts:["selected=\"selected\"","checked=\"checked\"","default=\"true\"","active"], correct:0, explain:"checkbox/radio 用 checked，option 用 selected。"},
    {q:"POST 相比 GET 的特性？", opts:["資料不顯示在網址，長度不受限","資料顯示在網址","只能傳 ASCII","可以加書籤"], correct:0, explain:"GET 才會顯示在網址、可加書籤、限制長度與 ASCII。"},
    {q:"<option value=\"mon\">Monday</option> 送出的值和顯示的字？", opts:["送 mon，顯示 Monday","送 Monday，顯示 mon","兩個都是 mon","兩個都是 Monday"], correct:0, explain:"value 是送出的值。"},
    {q:"清除表單所有輸入的按鈕是？", opts:["<input type=\"reset\">","<input type=\"clear\">","<input type=\"submit\">","<input type=\"cancel\">"], correct:0, explain:"reset 按鈕。"},
    {q:"GET 送出的網址長度限制大約是？", opts:["2048 字元","255 字元","沒有限制","10 個參數"], correct:0, explain:"URL 最長約 2048 字元。"}
  ]
};

/* ============================================================
   表單驗證
   ============================================================ */
DATA.formval = {
  intro: "驗證 (validation) 是在資料送到伺服器前先檢查。兩種做法：① HTML5 內建驗證 (屬性 required / min / max / pattern，簡單但不夠彈性) ② JavaScript 驗證 (onSubmit + validateForm 回傳 true / false)。",
  cheat: [
    {t:"HTML5 內建驗證：屬性", code:`<input type="radio" required name="chColour" value="black">
<input type="number" min="10" max="99" step="1">
<input type="email" required name="email">
<textarea name="msg" maxlength="50" rows="3"></textarea>

屬性：required   minlength / maxlength   min / max   type   pattern`, note:"優點：幾乎不用 JS、效能好；缺點：客製化程度低。"},
    {t:"HTML5 內建驗證：CSS 偽類", code:`<style>
  input:invalid       { box-shadow: 0 0 5px 1px red; }
  input:valid         { box-shadow: 0 0 2px 1px green; }
  input:focus:invalid { box-shadow: none; }
</style>

偽類：:disabled  :invalid  :optional  :required  :valid`, note:"HTML5 驗證三大來源：HTML 屬性、CSS 偽類、DOM 屬性與方法 (constraint validation API)。"},
    {t:"JS 驗證骨架", code:`<form action="myService" method="get" onSubmit="return validateForm()">
  ...
</form>

<script>
function validateForm() {
  if (... something wrong ...) {
    return false;     // 不合法 → 不送出
  }
  return true;        // 合法 → 送出
}
</script>`, note:"Basic validation：必填欄位都填了嗎？ Data format validation：格式和值對不對？"},
    {t:"必填檢查 (完整版：trim + 錯誤訊息 + 清除舊訊息)", code:`<p>
  <label>Enter your e-mail address</label>
  <input type="text" id="email" name="email">
  <span id="emailError" style="color:red"></span>
</p>

function validateForm() {
  var email = document.getElementById("email").value;
  if (email == null || email.trim() == "") {
    document.getElementById("emailError").innerHTML = "Email must be filled out";
    return false;
  } else {
    document.getElementById("emailError").innerHTML = "";        // 清掉舊錯誤
    document.getElementById("email").value = email.trim();       // 去掉前後空白
  }
  return true;
}`, note:"email == null || email.trim() == \"\"：同時擋掉 null 和「只打空白」。trim() 去掉前後空白。"},
    {t:"兩欄位必須一樣 (Confirm email)", code:`var email = document.getElementById("email").value;
if (email == null || email.trim() == "") {
  document.getElementById("emailError").innerHTML = "Email must be filled out";
  return false;
} else {
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("email").value = email.trim();
}

var email2 = document.getElementById("email2").value;
if (email2 == null || email2.trim() == "") {
  document.getElementById("emailError2").innerHTML = "Email must be filled out";
  return false;
} else {
  document.getElementById("emailError2").innerHTML = "";
  document.getElementById("email2").value = email2.trim();
}

if (email.trim() != email2.trim()) {
  document.getElementById("emailError2").innerHTML = "Email does not match";
  return false;
} else {
  document.getElementById("emailError2").innerHTML = "";
}
return true;`, note:"每一個 if 都要有 else 把舊的錯誤訊息清掉，否則使用者修好後舊錯誤還留在畫面上。"},
    {t:"錯誤訊息的樣式 (span + CSS)", code:`<span id="emailError" class="errorMessage"></span>
<span id="emailError2" class="errorMessage"></span>

<style>
  .errorMessage { color: red; }
</style>

(或用 id：#emailError { color: red; } #emailError2 { color: red; })`, note:""},
    {t:"人機驗證：隨機數學題", code:`function validateForm() {
  ...
  var x = Math.floor(Math.random() * 10) + 1;
  var y = Math.floor(Math.random() * 10) + 1;
  var correctAnswer = x + y;
  var answer = prompt("What is " + x + " + " + y + " ?");
  if (answer == null || answer != correctAnswer) {
    return false;
  }
  ...
}`, note:"prompt 按 Cancel 回傳 null；答錯就 return false 阻止送出。"}
  ],
  cards: [
    {q:"什麼是表單驗證？為什麼要在前端做？", a:`資料送到伺服器前先檢查，
提早提醒使用者，減少不必要的請求。

server-side：在伺服器檢查
client-side：在使用者瀏覽器檢查
 (內建驗證 / JavaScript)`},
    {q:"HTML5 內建驗證常用的屬性？", a:`required
minlength / maxlength
min / max
type="email" / "number"
pattern`},
    {q:"HTML5 內建驗證 vs JS 驗證？", a:`內建：不太需要 JS，效能好，
 但客製化程度低
JS：彈性高，可自訂訊息與邏輯`},
    {q:"驗證用到的 CSS 偽類？", a:`:valid :invalid
:required :optional :disabled

input:invalid { box-shadow: 0 0 5px 1px red; }`},
    {q:"JS 驗證的基本結構？", a:`<form onSubmit="return validateForm()">

function validateForm(){
  if (有錯) return false;
  return true;
}`},
    {q:"為什麼檢查空白要用 trim()？", a:`使用者可能只輸入空白，
看起來像有填，但其實是空的。

email.trim() == "" 才擋得住`},
    {q:"檢查「沒填」要寫哪兩個條件？", a:`if (email == null || email.trim() == "")

null：欄位不存在或沒有值
"" ：空字串 (或全部是空白)`},
    {q:"錯誤訊息要顯示在哪？怎麼準備？", a:`先放一個空的 span 當「錯誤訊息的位置」：
<span id="emailError" style="color:red"></span>

出錯時：
document.getElementById("emailError")
  .innerHTML = "Email must be filled out";`},
    {q:"為什麼通過檢查時要把舊錯誤訊息清成 \"\"？", a:`使用者修正後再送出，
舊的紅字如果沒清掉還會留著，
畫面會顯示已修正的欄位仍有錯。

else {
  errorSpan.innerHTML = "";
}`},
    {q:"怎麼檢查兩個 email 欄位一樣？", a:`if (email.trim() != email2.trim()) {
  ...innerHTML = "Email does not match";
  return false;
}`},
    {q:"提交前把欄位值去掉前後空白怎麼寫？", a:`document.getElementById("email").value = email.trim();`},
    {q:"怎麼做「答對數學題才能送出」？", a:`產生兩個 1~10 亂數 x、y，
prompt("What is x + y ?")
答案為 null 或 != x + y → return false`}
  ],
  cloze: [
    {title:"默寫：必填欄位驗證 (完整版)", code:`function validateForm() {
  var email = document.{{1}}("email").value;
  if (email == {{2}} {{3}} email.{{4}}() == "") {
    document.getElementById("emailError").{{5}} = "Email must be filled out";
    return {{6}};
  } else {
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("email").value = email.trim();
  }
  return {{7}};
}`, ans:[["getElementById"],["null"],["||"],["trim"],["innerHTML"],["false"],["true"]]},
    {title:"默寫：兩個 email 要相同", code:`if (email.trim() {{1}} email2.trim()) {
  document.getElementById("emailError2").innerHTML = "Email does not match";
  return {{2}};
} {{3}} {
  document.getElementById("emailError2").innerHTML = "";
}`, ans:[["!="],["false"],["else"]]},
    {title:"默寫：HTML5 內建驗證", code:`<input type="{{1}}" {{2}} name="email">
<input type="number" {{3}}="10" {{4}}="99" step="1">
<textarea name="msg" {{5}}="50" rows="3"></textarea>`, ans:[["email"],["required"],["min"],["max"],["maxlength"]]},
    {title:"默寫：驗證用 CSS 偽類", code:`input:{{1}} {
  box-shadow: 0 0 5px 1px red;
}
input:{{2}} {
  box-shadow: 0 0 2px 1px green;
}
input:focus:{{3}} {
  box-shadow: none;
}`, ans:[["invalid"],["valid"],["invalid"]]},
    {title:"默寫：人機驗證", code:`var x = Math.{{1}}(Math.random() * 10) + 1;
var y = Math.floor(Math.random() * 10) + 1;
var correctAnswer = x {{2}} y;
var answer = {{3}}("What is " + x + " + " + y + " ?");
if (answer == {{4}} || answer != correctAnswer) {
  return false;
}`, ans:[["floor"],["+"],["prompt"],["null"]]}
  ],
  mistakes: [
    {wrong:`function validateForm(){
  var email = ...value;
  if (email == "") {
    return false;
  }
}`, right:`function validateForm(){
  var email = ...value;
  if (email == null || email.trim() == "") {
    return false;
  }
  return true;
}`, note:"① 只檢查 \"\" 會漏掉「全是空白」的輸入 (要 trim)，也沒檢查 null；② 講義的寫法最後一定明確 return true，考試照這個格式寫。"},
    {wrong:`<form onSubmit="validateForm()">`, right:`<form onSubmit="return validateForm()">`, note:"少了 return，函式的 false 不會阻止送出。"},
    {wrong:`if (email == null || email.trim() == "") {
  document.getElementById("emailError").innerHTML = "Email must be filled out";
  return false;
}
// 沒有 else：通過時沒清掉舊訊息`, right:`if (email == null || email.trim() == "") {
  document.getElementById("emailError").innerHTML = "Email must be filled out";
  return false;
} else {
  document.getElementById("emailError").innerHTML = "";
}`, note:"使用者把第一個欄位修好、第二個還沒改時，第一個欄位旁邊舊的紅字會還留著。"},
    {wrong:`if (email.trim() = email2.trim()) {
  ...
}`, right:`if (email.trim() != email2.trim()) {
  ...
}`, note:"比較要用 ==、!=，不能用 = (賦值)。「不相同」要用 !=。"},
    {wrong:`if (email == "" && email == null) {`, right:`if (email == null || email.trim() == "") {`, note:"兩個條件要用 || (or)：任何一個成立就算沒填。用 && 幾乎不可能同時成立。"}
  ],
  trace: [
    {code:`function validateForm() {
  var email = document.getElementById("email").value;
  if (email == null || email.trim() == "") {
    document.getElementById("emailError").innerHTML = "Email must be filled out";
    return false;
  }
  return true;
}
// 使用者在 email 欄位打了 3 個空白，按 Submit`, q:"會送出嗎？畫面出現什麼？", a:"不會送出，出現紅字 Email must be filled out。", why:"\"   \".trim() 是 \"\"，符合條件。"},
    {code:`(同上，但 if 條件改成 if (email == ""))
// 使用者在 email 欄位打了 3 個空白，按 Submit`, q:"會送出嗎？", a:"會送出 (驗證失效)。", why:"\"   \" 不等於 \"\"，少了 trim() 就漏掉了。"},
    {code:`email = "a@b.com"
email2 = "a@b.com "     // 最後有一個空白
if (email.trim() != email2.trim()) { ... "Email does not match" ... }`, q:"會顯示不相符嗎？", a:"不會，視為相同。", why:"兩邊都先 trim()，前後空白不影響。"},
    {code:`// 第一次送出：email 空白 → 出現 "Email must be filled out"
// 使用者填好 email，但 email2 還是空白，再按 Submit
// 程式的 email 分支沒有 else 清除訊息`, q:"email 欄位旁的紅字會怎樣？", a:"還在，舊的錯誤訊息沒被清掉。", why:"要在 else 裡把 emailError 設成 \"\"。"},
    {code:`var x = 3;
var y = 8;
var correctAnswer = x + y;
var answer = prompt("What is " + x + " + " + y + " ?");
if (answer == null || answer != correctAnswer) { return false; }
// 使用者輸入 11，按 OK`, q:"表單會送出嗎？輸入 12 呢？按 Cancel 呢？", a:"輸入 11：通過 (會送出)\n輸入 12：不送出\nCancel：不送出", why:"prompt 回傳字串 \"11\"，和數字 11 用 != 比較時會自動轉型，所以相等；Cancel 回傳 null。"}
  ],
  build: [
    {task:"寫一個 validateForm：欄位 id=\"username\" 必填 (不能空白)，沒填就在 id=\"usernameError\" 顯示 \"Username must be filled out\" 並阻止送出。",
     steps:["1. form 加上 onSubmit=\"return validateForm()\"。","2. 欄位旁邊放空 span id=\"usernameError\"。","3. 函式：取值 → 判斷 (null 或 trim 後是 \"\")。","4. 有錯：顯示訊息、return false。","5. 沒錯：else 清掉訊息 (可順便把值 trim)。","6. 最後 return true。"],
     code:`function validateForm() {
  var username = document.getElementById("username").value;
  if (username == null || username.trim() == "") {
    document.getElementById("usernameError").innerHTML = "Username must be filled out";
    return false;
  } else {
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("username").value = username.trim();
  }
  return true;
}`}
  ],
  quiz: [
    {q:"表單驗證函式要阻止表單送出，應該？", opts:["return false","return true","alert()","clearInterval()"], correct:0, explain:"onSubmit=\"return validateForm()\"，函式回傳 false 就不送出。"},
    {q:"trim() 字串方法的作用是？", opts:["去掉字串前後的空白","把字串轉大寫","計算字串長度","把字串反過來排列"], correct:0, explain:"trim() 只去頭尾空白，中間的空白不動。"},
    {q:"哪個屬性可以讓 HTML5 欄位「必填」？", opts:["required","mandatory","notnull","must"], correct:0, explain:"HTML5 內建驗證：required。"},
    {q:"input:invalid 是什麼？", opts:["CSS 偽類，選取目前不合法的輸入框","JS 函式","HTML 屬性","XML 標籤"], correct:0, explain:"還有 :valid、:required、:optional、:disabled。"},
    {q:"為什麼要在 else 把錯誤訊息 span 設成 \"\"？", opts:["清除先前顯示過的錯誤訊息","停止動畫","加速網頁","避免變數重複宣告"], correct:0, explain:"修正後舊訊息不會自動消失。"},
    {q:"HTML5 內建驗證相比 JS 驗證的特性？", opts:["效能較好但客製化較低","客製化較高但效能較差","一定要寫 JS","只能驗證文字"], correct:0, explain:"has better performance, but not as customizable。"},
    {q:"檢查欄位「沒填」的正確條件？", opts:["email == null || email.trim() == \"\"","email == \"\" && email == null","email = \"\"","email.length > 0"], correct:0, explain:"用 || 並且 trim。"},
    {q:"prompt 回答數學題，使用者按 Cancel，驗證應該？", opts:["return false (answer 為 null)","return true","繼續往下執行","alert 後 return true"], correct:0, explain:"answer == null → 不送出。"}
  ]
};
