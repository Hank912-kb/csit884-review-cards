window.DATA = window.DATA || {};

/* ============================================================
   易混淆對照 (跨單元)
   ============================================================ */
DATA.compare = {
  intro: "考試最容易失分的，就是「長得很像」的東西。這一頁把跨單元最容易搞混的概念並排放在一起。看到題目先問自己：這兩個差在哪？",
  cheat: [
    {t:"JS：改內容用哪個屬性", code:`innerHTML   span、div 等一般元素的內容
value       input 文字框、select 下拉選單 (讀取和設定都用)
src         img 圖片檔案

x.innerHTML = "文字";   ← span
x.value = "文字";        ← input
x.src = "cat.png";       ← img`, note:""},
    {t:"JS：比較 / 賦值 / 串接", code:`=     賦值            x = 5
==    比較是否相等    if (x == 5)
!=    不相等          if (x != 5)
+     數字相加，或字串串接 (遇到字串就串接，由左到右)`, note:""},
    {t:"JS：三種對話框", code:`alert("m")          只有 OK             無回傳
confirm("m")        OK / Cancel         true / false
prompt("m","預設")   OK / Cancel + 輸入   文字 / null`, note:""},
    {t:"JS：焦點與變更事件", code:`onFocus    進入欄位
onBlur     離開欄位 (不管有沒有改)
onChange   離開欄位且內容有改變`, note:""},
    {t:"CSS：選擇器符號", code:`p           所有 p
.userInfo   class="userInfo" 的所有元素
#userInfo   id="userInfo" 的元素 (只有一個)
p.userInfo  同時是 p 且 class 為 userInfo   (中間沒空白)
p .userInfo p 裡面的 .userInfo (子孫)       (中間有空白)
p > i       p 的直接子元素 i
p i         p 裡所有的 i (子孫)`, note:""},
    {t:"XML：DTD 與 XSD 對照", code:`DTD                                    XSD
<!ELEMENT a (b,c)>                     <xsd:sequence> b, c </xsd:sequence>
<!ELEMENT a (b*)>                      minOccurs="0" maxOccurs="unbounded"
<!ELEMENT b (#PCDATA)>                 <xsd:element name="b" type="xsd:string"/>
<!ATTLIST a x CDATA #REQUIRED>         <xsd:attribute name="x" type="xsd:string"/>
內部 [ ] 或 SYSTEM "x.dtd"              XML 用 xsi:schemaLocation="x.xsd"
不是 XML 語法                           本身就是 XML，可指定資料型別、範圍`, note:""},
    {t:"HTML vs XHTML vs XML", code:`HTML    標籤預先定義；寬鬆 (<br>、<P> 也行)；用來「顯示」
XHTML   用 XML 規則寫 HTML；小寫、全關閉、有引號、需 DOCTYPE + xmlns
XML     標籤自訂；最嚴格；用來「儲存與傳輸資料」`, note:""}
  ],
  cards: [
    {q:"id 和 class 的差別 (HTML / CSS)？", a:`class：可重複，CSS 用 .name 選
id：全頁唯一，CSS 用 #name 選，
   JS 用 getElementById 找`},
    {q:"= 和 == 的差別？", a:`=  賦值
== 比較

if (x = 5) 永遠成立 (bug)
if (x == 5) 正確`},
    {q:"innerHTML / value / src 分別何時用？", a:`innerHTML：span、div (一般元素)
value：input、select
src：img`},
    {q:"onFocus / onBlur / onChange？", a:`onFocus：進入
onBlur：離開
onChange：離開且內容有變`},
    {q:"alert / confirm / prompt 回傳值？", a:`alert：無
confirm：true / false
prompt：文字 / null (按 Cancel)`},
    {q:"GET 和 POST？", a:`GET：網址可見、限 2048 字元、只 ASCII，
 不能傳密碼、可加書籤
POST：不可見、無限制、重新整理會重送`},
    {q:"checkbox 和 radio？", a:`checkbox 可複選；radio 單選 (同 name)
預設選取都用 checked="checked"`},
    {q:"th 和 td？", a:`th 表頭 (粗體置中)
td 資料儲存格`},
    {q:"colspan 和 rowspan？", a:`colspan 橫向跨欄
rowspan 縱向跨列 (下一列要少寫 td)`},
    {q:"align 和 valign？", a:`align 水平：left / center / right
valign 垂直：top / middle / bottom`},
    {q:"src 和 href？", a:`src：嵌入資源 (img)
href：連結目的地 (a)`},
    {q:"E F 和 E > F？", a:`E F：所有子孫
E > F：只有直接子元素`},
    {q:"inline / document / external CSS 優先權？", a:`inline > document > external`},
    {q:"attribute 和 element (XML)？", a:`metadata → attribute
資料本身 → element`},
    {q:"XML 和 HTML？", a:`HTML：預定義標籤，顯示用，寬鬆
XML：自訂標籤，存資料，嚴格`},
    {q:"DTD 和 XSD？", a:`都定義 XML 結構
DTD：<!ELEMENT> <!ATTLIST>，非 XML 語法
XSD：本身是 XML，可指定型別與範圍`},
    {q:"simpleType 和 complexType？", a:`simple：沒子元素、沒屬性
complex：有子元素或有屬性`},
    {q:"DTD 的 * + ? | ,？", a:`* 0 次以上   + 1 次以上
? 0 或 1 次  | 擇一
, 依序     (無符號) 剛好 1 次`},
    {q:"#REQUIRED 和 #IMPLIED？", a:`#REQUIRED 必填
#IMPLIED  選填`},
    {q:"slice 和 splice？", a:`slice(start, end)：取子字串
splice(index, howmany)：刪陣列項目`},
    {q:"push 和 splice？", a:`push：在陣列最後加一項
splice：從指定位置刪除`},
    {q:"getDay() 和 getDate()？", a:`getDay：星期 (0-6，Sunday = 0)
getDate：幾號 (1-31)`},
    {q:"Date 的月份 vs 日？", a:`月：0-11 (一月 = 0)
日：1-31`},
    {q:"setInterval 和 clearInterval？", a:`setInterval(f, ms)：每 ms 毫秒執行 f
clearInterval(schedule)：停止
f 不加括號；schedule 要存起來`},
    {q:"Number() 和 toString()？", a:`Number("19") → 19 (字串轉數字)
(19).toString() → "19" (數字轉字串)`},
    {q:"null、undefined、空字串 \"\"？", a:`undefined：宣告但沒給值
null：prompt 按 Cancel；表示沒有值
"" ：空字串 (有值，只是長度 0)`},
    {q:"onClick=\"f()\" 和 onSubmit=\"return f()\"？", a:`onClick：呼叫函式即可
onSubmit：要 return，才能用 false 阻止送出`},
    {q:"XML 的 root 和 HTML 的 html？", a:`XML 只能有一個 root，名稱自訂
HTML 的最外層是 html，底下 head + body`},
    {q:"獨立 .css 檔和 <style> 標籤？", a:`external：.css 檔案只放規則，用 <link> 引入
document：<style> 標籤寫在 html 的 head 裡`}
  ],
  quiz: [
    {q:"想在 <span> 裡顯示文字，和想改 <input> 的內容，分別用？", opts:["innerHTML 和 value","value 和 innerHTML","都用 innerHTML","都用 value"], correct:0, explain:"span 用 innerHTML，input 用 value。"},
    {q:"下列哪一個 selector 選的是「id 為 header 的元素」？", opts:["#header",".header","header","> header"], correct:0, explain:"# = id；. = class。"},
    {q:"confirm() 與 prompt() 按下 Cancel 的回傳值分別是？", opts:["false 與 null","null 與 false","都是 false","都是 null"], correct:0, explain:"confirm → false；prompt → null。"},
    {q:"表單的哪個屬性決定後端收到的參數名稱？", opts:["name","value","id","action"], correct:0, explain:"name。"},
    {q:"XML 與 HTML 誰的標籤是自訂的？", opts:["XML","HTML","兩者都是","兩者都不是"], correct:0, explain:"XML tags are defined by user。"},
    {q:"DTD 中「0 次或 1 次」的符號是？", opts:["?","*","+","|"], correct:0, explain:"? = 0 或 1；* = 0 以上；+ = 1 以上；| = 擇一。"},
    {q:"想選「div 的直接子元素 p」？", opts:["div > p","div p","div.p","div, p"], correct:0, explain:"> 是直接子元素。"},
    {q:"Date 物件中，一月的 getMonth() 是？", opts:["0","1","12","11"], correct:0, explain:"January = 0。"},
    {q:"想讓表單驗證失敗時不送出，onSubmit 要？", opts:["return validateForm()，且函式回傳 false","validateForm()","onClick=validateForm()","return true"], correct:0, explain:"onSubmit 要 return。"},
    {q:"XSD 的元素有屬性時，該元素是？", opts:["complexType","simpleType","不需要宣告","字串"], correct:0, explain:"有屬性 → complexType。"},
    {q:"JS 中 \"5\" + 3 的結果是？", opts:["\"53\"","8","NaN","出錯"], correct:0, explain:"遇到字串就串接。"},
    {q:"setInterval(f, 100) 中的 100 是？", opts:["毫秒","秒","次數","像素"], correct:0, explain:"milliseconds。"}
  ]
};
