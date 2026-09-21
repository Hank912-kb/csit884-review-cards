window.DATA = window.DATA || {};

/* ============================================================
   JS 語法
   ============================================================ */
DATA.jsbasic = {
  intro: "JavaScript 用 var 宣告變數，型別是動態的 (同一個變數可以先後裝不同型別)，陳述句用分號結尾，識別字區分大小寫。必考：字串與數字相加是「由左到右」、== 與 =、if / else if / for 的寫法、型別轉換。",
  cheat: [
    {t:"放在哪裡 · 怎麼執行", code:`<!-- 放在 head 或 body 結尾 (</body> 前) -->
<script>
  function sayHi(){
    alert("Hi");
    console.log("Hi");
    console.log(2+2);
  }
</script>

<!-- 外部 JS 檔 -->
<script type="text/javascript" src="js/myscript.js"></script>

<button onClick="sayHi();">Click me</button>`, note:"JS 可以寫在 html 的任何地方，常見在 head 或 body 結尾。"},
    {t:"基本語法", code:`alert("Hi");               跳出對話框
console.log(2+2);          印到 console (F12)
陳述句用分號 ; 結尾

// 單行註解
/* 多行
   註解 */`, note:""},
    {t:"變數 · 型別", code:`var studentName = "John";     string   字串 (單或雙引號皆可)
var age = 19;                 number   數字
var pi = 3.14;
var authenticated = false;    boolean  true / false
var x, y;
x = 5;
y = x + 2;
var z;                        沒給值 → undefined`, note:"識別字區分大小寫：studentName ≠ StudentName、x ≠ X。命名慣例：camelCase (studentName) 或 underscore (student_name)。動態型別：同一個變數可以先放數字後放字串。"},
    {t:"運算子", code:`算術：+  -  *  /  %(取餘數)
比較：==  !=  >  <  >=  <=
字串串接：fullName = firstName + " " + lastName;

/* 補充 (講義沒細講但常用) */
&&  and    ||  or    !  not`, note:"= 是「賦值」，== 才是「比較是否相等」。"},
    {t:"型別轉換", code:`var ageString = "19";
var age = Number(ageString);       字串 → 數字  (19)

var age = 19;
var ageString = age.toString();    數字 → 字串  ("19")`, note:""},
    {t:"if / else if / else · for", code:`var mark = 75;
if (mark > 85) {
  alert("Grade A");
} else if (mark > 65) {
  alert("Grade B");
} else if (mark > 50) {
  alert("Grade C");
} else {
  alert("Grade D");
}

for (var i = 0; i < 5; i++) {
  alert(i);                 依序 0 1 2 3 4
}`, note:"for 的三段用「分號」隔開：初始值; 條件; 每次更新。"},
    {t:"運算由左到右 (加號的陷阱)", code:`2016 + "Wollongong"          →  "2016Wollongong"
2016 + 1 + "Wollongong"      →  "2017Wollongong"
"Wollongong" + 2016          →  "Wollongong2016"
"Wollongong" + 2016 + 1      →  "Wollongong20161"`, note:"從左到右算；只要遇到字串，後面整段都變成「字串串接」。"},
    {t:"字串引號", code:`x = "I'm John";               單引號在雙引號裡
x = "My name is 'John'";
x = 'My name is "John"';      雙引號在單引號裡`, note:""}
  ],
  cards: [
    {q:"JavaScript 可以寫在 html 的哪裡？常見位置？", a:`任何地方都行
常見：<head> 裡，或 </body> 前面
外部檔：<script src="js/myscript.js"></script>`},
    {q:"怎麼宣告變數？沒給值時是什麼？", a:`var x;
var studentName = "John";

沒給值 → undefined`},
    {q:"JS 是動態型別，是什麼意思？", a:`同一個變數可以先後放不同型別：
var x = 2016;         // number
var x = "Wollongong"; // string`},
    {q:"studentName 和 StudentName 是同一個變數嗎？", a:`不是。
JS 所有識別字都區分大小寫。
x 與 X 也是不同變數。`},
    {q:"= 和 == 有什麼不同？", a:`=  賦值 (把右邊放進左邊)
== 比較是否相等

if (x == 5) { ... } ✓
if (x = 5)  { ... } ✗ 不會報錯，但永遠成立`},
    {q:"比較運算子有哪些？", a:`==  等於        !=  不等於
>   大於        <   小於
>=  大於等於    <=  小於等於`},
    {q:"字串怎麼串接？", a:`用 + ：
fullName = firstName + " " + lastName;`},
    {q:"字串 ⇄ 數字怎麼轉換？", a:`字串 → 數字：Number("19")  → 19
數字 → 字串：age.toString() → "19"`},
    {q:"2016 + 1 + \"Wollongong\" 的結果？\"Wollongong\" + 2016 + 1 呢？", a:`"2017Wollongong"
"Wollongong20161"

由左到右：前面都是數字就先相加，
遇到字串後就全部變串接`},
    {q:"if / else if / else 的寫法？", a:`if (cond1) {
  ...
} else if (cond2) {
  ...
} else {
  ...
}`},
    {q:"for 迴圈的寫法？各段用什麼隔開？", a:`for (var i = 0; i < 5; i++) {
  alert(i);
}

三段用分號 ; 隔開
(初始值; 條件; 更新)`},
    {q:"JS 的兩種註解？", a:`// 單行
/* 多行 */`},
    {q:"alert 和 console.log 差在哪？", a:`alert("Hi")       跳出對話框
console.log("Hi") 只印在瀏覽器的 console
                   (F12 開發者工具)`},
    {q:"變數命名的兩種慣例？", a:`underscore：student_name
camelCase：studentName`},
    {q:"div 和 span 在 JS 動態內容裡的用途？", a:`div：區塊容器
span：行內容器
給它們一個 id，JS 就能用
getElementById 找到並改內容`}
  ],
  cloze: [
    {title:"默寫：成績判斷", code:`var mark = 75;
{{1}} (mark > 85) {
  alert("Grade A");
} {{2}} {{3}} (mark > 65) {
  alert("Grade B");
} {{4}} {{5}} (mark > 50) {
  alert("Grade C");
} {{6}} {
  alert("Grade D");
}`, ans:[["if"],["else"],["if"],["else"],["if"],["else"]]},
    {title:"默寫：for 迴圈 (印出 0 到 4)", code:`{{1}} ({{2}} i = 0; i {{3}} 5; i{{4}}) {
  alert(i);
}`, ans:[["for"],["var"],["<"],["++"]]},
    {title:"默寫：字串 / 數字轉換", code:`var age = {{1}}("19");          // "19" → 19
var ageString = age.{{2}}();     // 19 → "19"`, ans:[["Number"],["toString"]]},
    {title:"默寫：載入外部 JS 檔", code:`<{{1}} type="text/javascript" {{2}}="js/myscript.js"></{{3}}>`, ans:[["script"],["src"],["script"]]}
  ],
  mistakes: [
    {wrong:`if (x = 5) {
  alert("x is 5");
}`, right:`if (x == 5) {
  alert("x is 5");
}`, note:"= 是賦值，== 才是比較。少一個等號不會報錯，但條件會永遠成立，很難發現。"},
    {wrong:`for (var i = 0, i < 5, i++) {
  alert(i);
}`, right:`for (var i = 0; i < 5; i++) {
  alert(i);
}`, note:"for 的三段用「分號」隔開，不是逗號。"},
    {wrong:`if x > 5 {
  alert("big");
}`, right:`if (x > 5) {
  alert("big");
}`, note:"條件一定要用括號包起來。"},
    {wrong:`if (mark > 85) {
  alert("A");
} elif (mark > 65) {
  alert("B");
}`, right:`if (mark > 85) {
  alert("A");
} else if (mark > 65) {
  alert("B");
}`, note:"JS 是 else if (兩個字)。elif / elseif 都是錯的。"},
    {wrong:`var authenticated = False;
# this is a comment`, right:`var authenticated = false;
// this is a comment`, note:"布林值是小寫 true / false；註解是 // 或 /* */ (沒有 #)。"},
    {wrong:`var studentName = "John";
alert(StudentName);`, right:`var studentName = "John";
alert(studentName);`, note:"大小寫不同就是不同變數；StudentName 沒定義，會出錯。"}
  ],
  trace: [
    {code:`var x = 2016 + "Wollongong";
alert(x);`, q:"alert 顯示什麼？", a:"2016Wollongong", why:"數字 + 字串 → 字串串接。"},
    {code:`var x = 2016 + 1 + "Wollongong";
alert(x);`, q:"alert 顯示什麼？", a:"2017Wollongong", why:"由左到右：先 2016 + 1 = 2017 (數字相加)，再和字串串接。"},
    {code:`var x = "Wollongong" + 2016 + 1;
alert(x);`, q:"alert 顯示什麼？", a:"Wollongong20161", why:"由左到右：先變成 \"Wollongong2016\"，之後 + 1 也是串接 (不是 2017)。"},
    {code:`var x;
alert(x);`, q:"alert 顯示什麼？", a:"undefined", why:"宣告了但沒給值。"},
    {code:`var mark = 65;
if (mark > 85) {
  alert("Grade A");
} else if (mark > 65) {
  alert("Grade B");
} else if (mark > 50) {
  alert("Grade C");
} else {
  alert("Grade D");
}`, q:"mark = 65 時顯示什麼？mark = 85 呢？mark = 50 呢？", a:"65 → Grade C\n85 → Grade B\n50 → Grade D", why:"注意邊界：> 不包含等號。65 > 65 不成立，往下 65 > 50 成立 → C；85 > 85 不成立，85 > 65 成立 → B；50 > 50 不成立 → D。"},
    {code:`for (var i = 0; i < 5; i++) {
  alert(i);
}`, q:"會跳出幾次 alert？分別是什麼？", a:"5 次：0, 1, 2, 3, 4", why:"i 從 0 開始，i < 5 時執行；i = 5 就停止，所以不會出現 5。"},
    {code:`var x = 5;
var y = 6;
if (x == y) {
  alert("x and y are equal");
} else {
  alert("x and y NOT are equal");
}`, q:"顯示什麼？", a:"x and y NOT are equal", why:"5 == 6 為 false，走 else。"},
    {code:`var x = 5;
var X = 10;
alert(x);`, q:"顯示什麼？", a:"5", why:"x 與 X 是兩個不同變數。"},
    {code:`var age = "19";
var n = Number(age);
var s = n.toString();`, q:"n 和 s 各是什麼型別？", a:"n 是 number (19)；s 是 string (\"19\")", why:"Number() 轉數字；toString() 轉字串。"}
  ],
  quiz: [
    {q:"var studentName 和 var StudentName 是同一個變數嗎？", opts:["不是，JS 識別字區分大小寫","是同一個","只有函式名稱才區分大小寫","只看第一個字母"], correct:0, explain:"JS 所有識別字都區分大小寫。"},
    {q:"\"Wollongong\" + 2016 + 1 的結果是？", opts:["\"Wollongong20161\"","\"Wollongong2017\"","2017","語法錯誤"], correct:0, explain:"由左到右，字串在前面，後面全部變成字串串接。"},
    {q:"把字串 \"19\" 轉成數字，課程教的是哪個？", opts:["Number(ageString)","ageString.toInt()","parseNumber(ageString)","int(ageString)"], correct:0, explain:"Number(字串) 轉數字；反過來用 .toString()。"},
    {q:"宣告了變數但沒有給值，它的值是？", opts:["undefined","0","null","\"\""], correct:0, explain:"var x; → undefined。"},
    {q:"下列哪個是 JS 判斷「x 不等於 y」的寫法？", opts:["x != y","x <> y","x =! y","x not y"], correct:0, explain:"!= 是不等於。"},
    {q:"2016 + 1 + \"Wollongong\" 的結果是？", opts:["\"2017Wollongong\"","\"20161Wollongong\"","\"Wollongong2017\"","2017"], correct:0, explain:"先 2016+1=2017，再和字串串接。"},
    {q:"for (var i = 0; i < 5; i++) 迴圈會執行幾次？", opts:["5 次 (i = 0 到 4)","4 次","6 次","無限次"], correct:0, explain:"i = 0,1,2,3,4 各一次。"},
    {q:"JS 的多行註解是？", opts:["/* ... */","<!-- ... -->","// ... //","## ... ##"], correct:0, explain:"// 是單行；/* */ 是多行。"},
    {q:"if 條件 mark > 65 在 mark = 65 時？", opts:["為 false","為 true","出錯","為 undefined"], correct:0, explain:"> 不含等於。"}
  ]
};

/* ============================================================
   JS 改內容 · 狀態 · 邏輯拆解
   ============================================================ */
DATA.jsdom = {
  intro: "這是「邏輯」的核心：按下按鈕 → 函式 → 用 id 找到元素 → 改內容。三步驟永遠一樣：① 加 id ② getElementById ③ 改 innerHTML / value / src。需要「記住狀態」時再用變數 (計數、切換)。",
  cheat: [
    {t:"三步驟 (最重要)", code:`// ① HTML 元素加上 id
<span id="display"></span>

// ② 用 id 找到元素
var e = document.getElementById("display");

// ③ 改內容
e.innerHTML = "新內容";      span、div 等一般元素
e.value = "新的值";           input 文字框 (讀取也用 .value)
e.src = "cat.png";            img 圖片`, note:"innerHTML → 一般元素的內容；value → 輸入框 / 下拉選單的值；src → 圖片檔案。"},
    {t:"模式 A：按鈕改文字 (Cat & Dog 1)", code:`<button onClick="cat()">Cat</button>
<button onClick="dog()">Dog</button>
<span id="display"></span>

function dog(){
  // get the span element
  var displaySpan = document.getElementById("display");
  // show dog message
  displaySpan.innerHTML = "Woof woof woof!";
}`, note:"文字框版：把 span 換成 <input type=\"text\" id=\"display\" />，改用 .value。圖片版：<img id=\"display\" />，改用 .src = \"cat.png\"。"},
    {t:"模式 B：讀輸入 → 組字串 → 顯示 (Say Hi)", code:`First name: <input type="text" id="firstname" />
Last name:  <input type="text" id="lastname" />
<button onClick="sayHi()">Say Hi</button>
<span id="greeting"></span>

function sayHi(){
  // get the first name
  var firstnameInput = document.getElementById("firstname");
  var firstname = firstnameInput.value;
  // get the last name
  var lastnameInput = document.getElementById("lastname");
  var lastname = lastnameInput.value;
  // construct the greeting message
  var greetingMessage = "Hi " + firstname + " " + lastname + "!";
  // display the greeting message
  var greetingSpan = document.getElementById("greeting");
  greetingSpan.innerHTML = greetingMessage;
}`, note:"讀輸入框用 .value；顯示在 span 用 .innerHTML。"},
    {t:"模式 C：清除 (Clear)", code:`function clearPage(){
  // clear the firstname text field
  var firstnameInput = document.getElementById("firstname");
  firstnameInput.value = "";
  // clear the lastname text field
  var lastnameInput = document.getElementById("lastname");
  lastnameInput.value = "";
  // clear the greeting message
  var greetingSpan = document.getElementById("greeting");
  greetingSpan.innerHTML = "";
}`, note:"清成空字串 \"\"。輸入框用 .value，span 用 .innerHTML。"},
    {t:"模式 D：計算機 (下拉選單 + Number)", code:`<input type="text" id="input1" />
<select id="operationSelect">
  <option value="add">+</option>
  <option value="subtract">-</option>
  <option value="multiply">x</option>
</select>
<input type="text" id="input2" />
<button onClick="answer()">=</button>
<input type="text" id="result" />

function answer(){
  // get the 1st number
  var inputField1 = document.getElementById("input1");
  var number1 = Number(inputField1.value);
  // get the 2nd number
  var inputField2 = document.getElementById("input2");
  var number2 = Number(inputField2.value);
  // get the operation
  var operationSelect = document.getElementById("operationSelect");
  var operation = operationSelect.value;
  // calculate the result
  var result;
  if (operation == "add") {
    result = number1 + number2;
  } else if (operation == "subtract") {
    result = number1 - number2;
  } else if (operation == "multiply") {
    result = number1 * number2;
  }
  // display the result
  var resultField = document.getElementById("result");
  resultField.value = result;
}`, note:"輸入框拿到的 .value 是「字串」，要計算一定要先 Number()，否則 3 + 4 會變 \"34\"。"},
    {t:"模式 E：用變數記住狀態 — 計數 (Cat & Dog 4)", code:`<img src="dog.png" onClick="dog()" />
Dog click count: <span id="dogDisplay">0</span>

// variable to save the number of dog clicks
var dogClick = 0;              ← 宣告在函式「外面」

function dog(){
  // increase the number of dog clicks by 1
  dogClick = dogClick + 1;
  // display the number of dog clicks
  var dogSpan = document.getElementById("dogDisplay");
  dogSpan.innerHTML = dogClick;
}`, note:"變數放在函式外面才會「記住」上一次的值；放裡面每次呼叫都會重新歸零。"},
    {t:"模式 F：用變數記住狀態 — 切換 (Cat & Dog 6)", code:`<img id="animal" src="dog.png" onClick="changeImage()" />

// two values: "dog" or "cat"; original value is "dog"
var animal = "dog";

function changeImage(){
  // check what is the current animal, then change it
  if (animal == "dog") {
    // change animal variable
    animal = "cat";
    // change the image
    var image = document.getElementById("animal");
    image.src = "cat.png";
  } else {
    animal = "dog";
    var image = document.getElementById("animal");
    image.src = "dog.png";
  }
}`, note:"toggle 套路：變數記目前狀態 → if 判斷 → ① 改變數 ② 改畫面。"},
    {t:"模式 G：兩張圖交換位置 (Cat & Dog 5)", code:`<img id="left" src="dog.png" />
<button onClick="switchImage()">Switch</button>
<img id="right" src="cat.png" />

// two values: "dog-cat" or "cat-dog"; original is "dog-cat"
var position = "dog-cat";

function switchImage(){
  if (position == "dog-cat") {
    position = "cat-dog";
    var leftImage = document.getElementById("left");
    leftImage.src = "cat.png";
    var rightImage = document.getElementById("right");
    rightImage.src = "dog.png";
  } else {
    position = "dog-cat";
    var leftImage = document.getElementById("left");
    leftImage.src = "dog.png";
    var rightImage = document.getElementById("right");
    rightImage.src = "cat.png";
  }
}`, note:""},
    {t:"傳參數：一個函式取代兩個", code:`<button onClick="showMessage('Meao meao meao!')">Cat</button>
<button onClick="showMessage('Woof woof woof!')">Dog</button>
<span id="display"></span>

function showMessage(message){
  var displaySpan = document.getElementById("display");
  displaySpan.innerHTML = message;
}

<button onClick="showImage('cat.png')">Cat</button>
function showImage(imageFile){
  var image = document.getElementById("display");
  image.src = imageFile;
}`, note:"參數放在呼叫的括號裡；字串參數要加引號 (HTML 屬性用雙引號，參數就用單引號)。"}
  ],
  cards: [
    {q:"用 JS 改畫面內容的三個步驟？", a:`① 給 HTML 元素一個 id
② var e = document.getElementById("id");
③ 改內容：
   e.innerHTML = "新內容"
   e.value = "新值"   (輸入框)
   e.src = "新圖片"    (圖片)`},
    {q:"innerHTML / value / src 分別用在什麼元素？", a:`innerHTML：span、div 等一般元素的內容
value：輸入框 (text)、下拉選單 (select)
src：圖片 (img)`},
    {q:"取得使用者在輸入框輸入的字？", a:`var x = document.getElementById("id").value;

(輸入框用 .value，
 不是 .innerHTML)`},
    {q:"輸入框拿到的是什麼型別？要做加減乘除怎麼辦？", a:`是字串。
要計算先轉數字：
var n = Number(field.value);

否則 "3" + "4" = "34"`},
    {q:"想記住「被點了幾次」，變數該宣告在哪？為什麼？", a:`宣告在函式外面 (全域)。

宣告在函式裡面，每次呼叫函式
都會重新歸零，永遠是 1。`},
    {q:"切換 (toggle) 圖片的套路？", a:`1) 用變數記住目前狀態 (如 "dog")
2) if 判斷目前狀態
3) 改變數 + 改畫面
4) else 分支做相反的事`},
    {q:"怎麼把輸入框清空？把 span 的訊息清掉？", a:`輸入框：e.value = "";
span：e.innerHTML = "";`},
    {q:"怎麼取得下拉選單目前選的值？", a:`var op = document.getElementById("operationSelect").value;

值是 <option value="..."> 的 value，
不是畫面上顯示的文字`},
    {q:"onClick=\"showMessage('Woof!')\" 這種「傳參數」的好處？", a:`不用為每個按鈕各寫一個函式：
一個 showMessage(message)
就能顯示不同訊息。

字串參數要加引號`},
    {q:"onClick 寫的函式名稱後面的 () 是必須的嗎？", a:`是。
onClick="sayHi()"
要呼叫函式，括號不能省略`},
    {q:"getElementById 的參數要加引號嗎？", a:`要，是字串：
document.getElementById("display")

id 必須和 html 裡的 id 完全一樣
(大小寫也要一樣)`},
    {q:"怎麼讓圖片換成另一張？", a:`var image = document.getElementById("display");
image.src = "cat.png";`}
  ],
  cloze: [
    {title:"默寫：三步驟 (改 span 的內容)", code:`var displaySpan = document.{{1}}("display");
displaySpan.{{2}} = "Woof woof woof!";`, ans:[["getElementById"],["innerHTML"]]},
    {title:"默寫：改輸入框 / 改圖片", code:`var displayField = document.getElementById("display");
displayField.{{1}} = "Meao meao meao!";

var image = document.getElementById("display");
image.{{2}} = "cat.png";`, ans:[["value"],["src"]]},
    {title:"默寫：Say Hi", code:`function sayHi(){
  var firstname = document.getElementById("firstname").{{1}};
  var lastname = document.getElementById("lastname").{{2}};
  var greetingMessage = "Hi " {{3}} firstname {{4}} " " + lastname + "!";
  document.getElementById("greeting").{{5}} = greetingMessage;
}`, ans:[["value"],["value"],["+"],["+"],["innerHTML"]]},
    {title:"默寫：點擊計數", code:`var dogClick = {{1}};

function dog(){
  dogClick = dogClick {{2}} 1;
  var dogSpan = document.getElementById("dogDisplay");
  dogSpan.{{3}} = dogClick;
}`, ans:[["0"],["+"],["innerHTML"]]},
    {title:"默寫：切換圖片", code:`var animal = "{{1}}";

function changeImage(){
  if (animal {{2}} "dog") {
    animal = "{{3}}";
    var image = document.getElementById("animal");
    image.{{4}} = "cat.png";
  } else {
    animal = "dog";
    var image = document.getElementById("animal");
    image.src = "dog.png";
  }
}`, ans:[["dog"],["=="],["cat"],["src"]]},
    {title:"默寫：傳參數版本", code:`<button onClick="showMessage({{1}}Woof woof woof!{{2}})">Dog</button>

function showMessage({{3}}){
  var displaySpan = document.getElementById("display");
  displaySpan.innerHTML = {{4}};
}`, ans:[["'"],["'"],["message"],["message"]], note:"第 3、4 格要填同一個參數名 (課堂用 message)。第 1、2 格填單引號。"}
  ],
  mistakes: [
    {wrong:`function dog(){
  var dogClick = 0;
  dogClick = dogClick + 1;
  document.getElementById("dogDisplay").innerHTML = dogClick;
}`, right:`var dogClick = 0;

function dog(){
  dogClick = dogClick + 1;
  document.getElementById("dogDisplay").innerHTML = dogClick;
}`, note:"變數放在函式裡面，每次點擊都會重新變成 0，永遠只會顯示 1。要記住狀態就宣告在函式外面。"},
    {wrong:`var number1 = document.getElementById("input1").value;
var number2 = document.getElementById("input2").value;
var result = number1 + number2;   // 輸入 3 和 4`, right:`var number1 = Number(document.getElementById("input1").value);
var number2 = Number(document.getElementById("input2").value);
var result = number1 + number2;   // 輸入 3 和 4 → 7`, note:"輸入框的 value 是字串，\"3\" + \"4\" = \"34\"。要先 Number() 轉成數字。"},
    {wrong:`var e = document.getElementById("firstname");
var name = e.innerHTML;         // 想讀輸入框`, right:`var e = document.getElementById("firstname");
var name = e.value;`, note:"輸入框 (input) 用 .value；.innerHTML 是給 span / div 等一般元素。"},
    {wrong:`var span = document.getElementById("greeting");
span.value = "Hi John";`, right:`var span = document.getElementById("greeting");
span.innerHTML = "Hi John";`, note:"span 不是輸入框，要用 innerHTML。"},
    {wrong:`var e = document.getElementById(display);`, right:`var e = document.getElementById("display");`, note:"id 是字串，要加引號；不加就是在找一個名叫 display 的變數。"},
    {wrong:`<button onClick="sayHi">Say Hi</button>`, right:`<button onClick="sayHi()">Say Hi</button>`, note:"要呼叫函式必須加括號 ()。"},
    {wrong:`<span id="display"></span>

var e = document.getElementById("Display");`, right:`<span id="display"></span>

var e = document.getElementById("display");`, note:"id 大小寫要完全一致，否則找不到元素 (回傳 null，後面會出錯)。"}
  ],
  trace: [
    {code:`var dogClick = 0;
function dog(){
  dogClick = dogClick + 1;
  document.getElementById("dogDisplay").innerHTML = dogClick;
}
// 使用者連續點 dog 圖片 3 次`, q:"畫面上顯示什麼？", a:"3", why:"dogClick 在函式外面，每次點擊累加：1 → 2 → 3。"},
    {code:`function dog(){
  var dogClick = 0;
  dogClick = dogClick + 1;
  document.getElementById("dogDisplay").innerHTML = dogClick;
}
// 使用者連續點 dog 圖片 3 次`, q:"畫面上顯示什麼？", a:"1 (每次都是 1)", why:"var dogClick = 0 在函式裡面，每次呼叫都重設成 0，再 +1 → 永遠是 1。"},
    {code:`var number1 = document.getElementById("input1").value;   // 使用者輸入 3
var number2 = document.getElementById("input2").value;   // 使用者輸入 4
var result = number1 + number2;
document.getElementById("result").value = result;`, q:"result 欄位顯示什麼？要怎麼修才會是 7？", a:"顯示 34。\n修法：Number(document.getElementById(\"input1\").value)，兩個都要轉。", why:"輸入框的 value 是字串，字串 + 字串 = 串接。"},
    {code:`var animal = "dog";
function changeImage(){
  if (animal == "dog") {
    animal = "cat";
    document.getElementById("animal").src = "cat.png";
  } else {
    animal = "dog";
    document.getElementById("animal").src = "dog.png";
  }
}
// 使用者點圖片 3 次`, q:"3 次點擊後 animal 的值和圖片是什麼？", a:"animal = \"cat\"，圖片是 cat.png。", why:"第 1 次 dog→cat，第 2 次 cat→dog，第 3 次 dog→cat。奇數次是 cat，偶數次是 dog。"},
    {code:`var position = "dog-cat";
function switchImage(){
  if (position == "dog-cat") {
    position = "cat-dog";
    // left = cat.png, right = dog.png
  } else {
    position = "dog-cat";
    // left = dog.png, right = cat.png
  }
}
// 使用者按 Switch 4 次`, q:"4 次之後 position 的值？左邊是哪張圖？", a:"position = \"dog-cat\"，左邊 dog.png、右邊 cat.png。", why:"每按一次來回切換，偶數次會回到原本狀態。"},
    {code:`var dogClick = 0;
var catClick = 0;
function dog(){ dogClick = dogClick + 1; /* 顯示 dogClick */ }
function cat(){ catClick = catClick + 1; /* 顯示 catClick */ }
// 使用者依序：點 dog、cat、cat、dog、cat、dog、dog`, q:"最後 Dog click count 和 Cat click count 各是多少？", a:"Dog = 4，Cat = 3", why:"dog 點了 4 次 (第 1、4、6、7 下)，cat 點了 3 次 (第 2、3、5 下)。兩個計數器各自獨立。"},
    {code:`var x = document.getElementById("input1").value;   // 使用者輸入 "hello"
var y = "Hi " + x + "!";
document.getElementById("greeting").innerHTML = y;`, q:"greeting 顯示什麼？", a:"Hi hello!", why:"字串串接。"}
  ],
  build: [
    {task:"Say Hi：兩個輸入框 (first name / last name) 和一個「Say Hi」按鈕。輸入 John、Smith 後按按鈕，頁面顯示「Hi John Smith!」。",
     steps:["1. 畫面需要什麼？兩個輸入框 (id=firstname、id=lastname)、一個按鈕 (onClick=\"sayHi()\")、一個 span 放結果 (id=greeting)。","2. 按按鈕時函式要做的事：取得 first name → 取得 last name → 組成訊息 → 顯示訊息。","3. 取輸入框的值用 .value，顯示在 span 用 .innerHTML。"],
     code:`function sayHi(){
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var greetingMessage = "Hi " + firstname + " " + lastname + "!";
  document.getElementById("greeting").innerHTML = greetingMessage;
}`},
    {task:"Clear：在 Say Hi 加一個「Clear」按鈕，按下去後兩個輸入框和問候訊息都清空。",
     steps:["1. 多加一個按鈕 onClick=\"clearPage()\"。","2. 三件事：清 firstname 輸入框、清 lastname 輸入框、清 greeting 訊息。","3. 輸入框用 .value = \"\"；span 用 .innerHTML = \"\"。"],
     code:`function clearPage(){
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("greeting").innerHTML = "";
}`},
    {task:"計算機：使用者輸入兩個數字、選擇運算 (+ − ×)，按「=」後在結果框顯示答案。",
     steps:["1. 取第 1 個數字 (Number(...value))。","2. 取第 2 個數字 (Number(...value))。","3. 取運算 (下拉選單的 .value：add / subtract / multiply)。","4. 用 if / else if 依運算算出 result。","5. 把 result 放到結果輸入框的 .value。"],
     code:`function answer(){
  var number1 = Number(document.getElementById("input1").value);
  var number2 = Number(document.getElementById("input2").value);
  var operation = document.getElementById("operationSelect").value;
  var result;
  if (operation == "add") {
    result = number1 + number2;
  } else if (operation == "subtract") {
    result = number1 - number2;
  } else if (operation == "multiply") {
    result = number1 * number2;
  }
  document.getElementById("result").value = result;
}`},
    {task:"點圖片計數：畫面有 Dog、Cat 兩張圖和兩個計數器。點哪張圖，那個計數器 +1。",
     steps:["1. 需要「記住次數」→ 兩個變數 dogClick、catClick，起始 0，宣告在函式外面。","2. 兩張圖各自 onClick 呼叫 dog() / cat()。","3. 函式裡：變數 +1 → 把新值顯示到對應的 span。"],
     code:`var dogClick = 0;
var catClick = 0;

function dog(){
  dogClick = dogClick + 1;
  document.getElementById("dogDisplay").innerHTML = dogClick;
}
function cat(){
  catClick = catClick + 1;
  document.getElementById("catDisplay").innerHTML = catClick;
}`},
    {task:"點圖片切換：畫面有一張 Dog 圖，點它變 Cat，再點又變回 Dog。",
     steps:["1. 需要記住「現在顯示哪一隻」→ 變數 animal，起始 \"dog\"。","2. 點擊時 if (animal == \"dog\")：把 animal 改 \"cat\"，圖片 src 改 cat.png。","3. else：把 animal 改 \"dog\"，圖片 src 改 dog.png。"],
     code:`var animal = "dog";

function changeImage(){
  var image = document.getElementById("animal");
  if (animal == "dog") {
    animal = "cat";
    image.src = "cat.png";
  } else {
    animal = "dog";
    image.src = "dog.png";
  }
}`},
    {task:"兩圖交換位置：左邊 Dog、右邊 Cat，中間一個 Switch 按鈕，按一下兩張圖互換位置。",
     steps:["1. 需要記住位置 → 變數 position，兩個值 \"dog-cat\" / \"cat-dog\"，起始 \"dog-cat\"。","2. if (position == \"dog-cat\")：position 改 \"cat-dog\"，左圖 src = cat.png，右圖 src = dog.png。","3. else：position 改 \"dog-cat\"，左圖 dog.png，右圖 cat.png。"],
     code:`var position = "dog-cat";

function switchImage(){
  var leftImage = document.getElementById("left");
  var rightImage = document.getElementById("right");
  if (position == "dog-cat") {
    position = "cat-dog";
    leftImage.src = "cat.png";
    rightImage.src = "dog.png";
  } else {
    position = "dog-cat";
    leftImage.src = "dog.png";
    rightImage.src = "cat.png";
  }
}`}
  ],
  quiz: [
    {q:"使用者在輸入框輸入 3 和 4，程式直接把兩個 .value 相加，結果是？", opts:["\"34\"","7","NaN","出錯"], correct:0, explain:"輸入框的 value 是字串，字串 + 字串 = 串接。要先 Number()。"},
    {q:"要改變 <img id=\"pic\"> 顯示的圖片，要設定？", opts:["pic.src = \"cat.png\"","pic.innerHTML = \"cat.png\"","pic.value = \"cat.png\"","pic.image = \"cat.png\""], correct:0, explain:"圖片用 src。"},
    {q:"要讀取 <input type=\"text\" id=\"name\"> 使用者輸入的文字？", opts:["document.getElementById(\"name\").value","document.getElementById(\"name\").innerHTML","document.getElementById(\"name\").text","document.getElementById(name).value"], correct:0, explain:"輸入框用 .value；id 要加引號。"},
    {q:"想累計「按鈕被按了幾次」，變數應該宣告在哪？", opts:["函式外面","函式裡面","HTML 標籤的 id 裡","不用宣告"], correct:0, explain:"放函式裡面每次呼叫都會重設。"},
    {q:"<span id=\"greeting\"></span> 要顯示 Hi，該寫？", opts:["document.getElementById(\"greeting\").innerHTML = \"Hi\";","document.getElementById(\"greeting\").value = \"Hi\";","document.getElementById(\"greeting\").src = \"Hi\";","document.write(\"greeting\", \"Hi\");"], correct:0, explain:"span 用 innerHTML。"},
    {q:"取得下拉選單目前選擇的值？", opts:["document.getElementById(\"sel\").value","document.getElementById(\"sel\").innerHTML","document.getElementById(\"sel\").selected","document.getElementById(\"sel\").option"], correct:0, explain:"select 元素的 .value 是被選 option 的 value。"},
    {q:"animal 起始是 \"dog\"，切換函式被呼叫 5 次後 animal 是？", opts:["\"cat\"","\"dog\"","undefined","5"], correct:0, explain:"奇數次是 cat，偶數次是 dog。"},
    {q:"onClick=\"showMessage('Woof!')\" 的 'Woof!' 是？", opts:["傳給函式的參數","函式的名稱","HTML 屬性名稱","註解"], correct:0, explain:"函式定義是 function showMessage(message){...}。"},
    {q:"document.getElementById 找不到符合 id 的元素時會？", opts:["回傳 null，後面存取會出錯","自動建立一個新元素","回傳空字串","什麼事都不會發生"], correct:0, explain:"通常是 id 拼錯或大小寫不一致。"}
  ]
};
