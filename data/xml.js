window.DATA = window.DATA || {};

/* ============================================================
   XML
   ============================================================ */
DATA.xml = {
  intro: "XML (EXtensible Markup Language) 用「自訂標籤」儲存和傳輸資料，把資料和呈現分開。規則比 HTML 嚴格很多：一個 root、標籤全部關閉、正確巢狀、大小寫敏感、屬性值一定加引號。「well-formed」判斷題必考。",
  cheat: [
    {t:"第一個 XML 範例", code:`<?xml version="1.0" encoding="UTF-8" ?>
<student>
  <firstName>John</firstName>
  <lastName>Smith</lastName>
  <email>jsmith@gmail.com</email>
  <mobile>0211223344</mobile>
</student>`, note:"副檔名 .xml。HTML 標籤是預先定義的；XML 標籤由使用者自己定義。XML / JSON 用來儲存與傳輸資料，HTML / XSLT 用來轉換與顯示資料。"},
    {t:"XML 宣告", code:`<?xml version="version_number" encoding="encoding_declaration" standalone="standalone_status" ?>

<?xml version="1.0" ?>
<?xml version="1.0" encoding="UTF-8" ?>
<?xml version="1.0" standalone="yes" ?>       內部 DTD
<?xml version="1.0" standalone="no" ?>        外部 DTD`, note:"宣告是「選用」的，但如果有，必須在整份文件的第 1 行第 1 個位置：前面不能有空行、不能有空白。"},
    {t:"Well-formed 六規則", code:`① 只能有一個 root element (所有元素都要包在它裡面)
② 每個元素都要有結束標籤 (空元素用 <x /> 自我封閉)
③ 元素必須正確巢狀 (先開後關)
④ 標籤大小寫敏感，開始/結束標籤名稱要完全一致
⑤ 屬性值一定要加引號 (單引號或雙引號)
⑥ 特殊字元用實體：
      &lt;  <      &gt;  >      &amp;  &
      &apos;  '    &quot;  "`, note:""},
    {t:"Root element：一個 vs 兩個", code:`✗ 不是 well-formed (兩個 root)
<student>...</student>
<student>...</student>

✓ well-formed (外面包一個 root)
<studentList>
  <student>...</student>
  <student>...</student>
</studentList>`, note:""},
    {t:"Attribute vs Element", code:`<dailyTransaction date="24/02/2015">
  <person staffDbId="103" operation="update">
    <firstName>John</firstName>
    <lastName>Smith</lastName>
    <mobile>0211223344</mobile>
  </person>
  <person staffDbId="-1" operation="add">
    <firstName>Mary</firstName>
    <lastName>Jane</lastName>
    <mobile>0244556677</mobile>
  </person>
</dailyTransaction>

attribute 可以改成子元素 (資訊相同)：
<person>
  <firstName>John</firstName>
  <staffDbId>103</staffDbId>
  <operation>update</operation>
</person>`, note:"原則：metadata (關於資料的資料) 用 attribute；資料本身用 element。所以 gender 放 element、staffDbId 這類 ID / 操作類型放 attribute 比較好。"},
    {t:"空元素 · 註解 · 命名", code:`<emptyElement></emptyElement>
<emptyElement />

<!-- this is a comment -->

<student_list> ... </student_list>
<studentList> ... </studentList>       (underscore 或 camelCase)`, note:"XML 標籤大小寫敏感：<student> ≠ <STUDENT>。"},
    {t:"XML vs JSON", code:`XML：
<student>
  <firstName>John</firstName>
  <lastName>Smith</lastName>
</student>

JSON (JavaScript Object Notation)：
{
  "firstName": "John",
  "lastName": "Smith"
}`, note:"兩者都能用來交換資料。"}
  ],
  cards: [
    {q:"XML 全名？用來做什麼？", a:`EXtensible Markup Language
用來「儲存與傳輸」資料
和軟硬體無關，
把資料與呈現分開`},
    {q:"HTML 和 XML 的標籤差在哪？", a:`HTML：標籤預先定義
XML：標籤由使用者自己定義

XML 規則更嚴格`},
    {q:"XML 宣告可以省略嗎？一定要放在哪？", a:`可以省略 (optional)
有的話必須在整份文件的
第 1 行第 1 個位置
(前面不能有空行)`},
    {q:"一份 XML 最多能有幾個 root element？", a:`剛好一個。
所有其他元素都必須包在裡面。`},
    {q:"XML 沒有內容的標籤怎麼寫？", a:`自我封閉：<emptyElement />
或成對：<emptyElement></emptyElement>

所有元素都必須關閉 (HTML 的 <br> 這種不行)`},
    {q:"XML 標籤有分大小寫嗎？", a:`有。<student> ≠ <STUDENT>
開始/結束標籤名稱要完全一致`},
    {q:"XML 屬性值可以不加引號嗎？", a:`不行，一定要加引號 (單或雙)。
HTML 有時可以省略，XML 不行。`},
    {q:"XML 裡怎麼放 < 這個字元？", a:`用實體參考：
&lt; &gt; &amp; &apos; &quot;`},
    {q:"什麼時候用 attribute？什麼時候用 element？", a:`metadata (關於資料的資料) → attribute
資料本身 → element

例：<person gender="M"> 也可以，
但 ID 或操作類型 (metadata) 更適合 attribute`},
    {q:"XML 元素關係：parent / child / sibling？", a:`parent 有 child；child 有 parent
sibling：同一層的兄弟元素
XML 是一棵樹，從 root 分支出去`},
    {q:"XML 註解怎麼寫？", a:`<!-- this is a comment -->`},
    {q:"XML 和 JSON 的關係？", a:`都是常用的資料交換格式
XML：標籤
JSON：{ "key": "value" }`},
    {q:"XML 宣告的完整語法？", a:`<?xml version="1.0"
      encoding="UTF-8"
      standalone="yes" ?>
version 必填；encoding、standalone 選填`}
  ],
  cloze: [
    {title:"默寫：XML 宣告與根元素", code:`<?{{1}} version="1.0" encoding="UTF-8" ?>
<{{2}}>
  <firstName>John</firstName>
  <lastName>Smith</lastName>
</{{3}}>`, ans:[["xml"],["student"],["student"]]},
    {title:"默寫：用實體顯示保留字元", code:`<formula>a {{1}} b {{2}} c</formula>    a < b & c`, ans:[["&lt;"],["&amp;"]]},
    {title:"默寫：屬性與空元素", code:`<person staffDbId={{1}}103{{2}} operation="update">
  <note{{3}}>
</person>`, ans:[["\""],["\""],[" /"]], note:"第 1、2 格：屬性值的引號；第 3 格：自我封閉的結尾 (填 空白+/)。"}
  ],
  mistakes: [
    {wrong:`<? xml version=”1.0” ?>`, right:`<?xml version="1.0" ?>`, note:"你在 Week 7 練習出現過：<? 和 xml 之間不能有空格；引號要用直的英文 \" \"，不是 Word / Google Docs 自動產生的彎引號 ” ”。"},
    {wrong:`<student>
  <id>123456</id>
  <firstName>John</firstName>
  <lastNmae>Smith</lastName>
  <subject>
    <titler>Java Programming</title>
    <cp>6</cp>
    <code>CS123</code>
  </sbject>
</student>`, right:`<student>
  <id>123456</id>
  <firstName>John</firstName>
  <lastName>Smith</lastName>
  <subject>
    <title>Java Programming</title>
    <cp>6</cp>
    <code>CS123</code>
  </subject>
</student>`, note:"這是你 Week 7 練習實際的錯：三處開始/結束標籤名稱對不起來 (lastNmae vs lastName、titler vs title、sbject vs subject)。XML 一個字母都不能差。寫完務必檢查頭尾。"},
    {wrong:`<student>
  <firstName>John</firstName>
</student>
<student>
  <firstName>Mary</firstName>
</student>`, right:`<studentList>
  <student>
    <firstName>John</firstName>
  </student>
  <student>
    <firstName>Mary</firstName>
  </student>
</studentList>`, note:"兩個平行的 student = 兩個 root，不是 well-formed。外面要再包一個 root。"},
    {wrong:`<condition>x < y & y > z</condition>`, right:`<condition>x &lt; y &amp; y &gt; z</condition>`, note:"元素內容出現 < 或 & 會報錯，要用實體參考。"},
    {wrong:`<person id=103>
  <name>John</name>
</person>`, right:`<person id="103">
  <name>John</name>
</person>`, note:"XML 屬性值一定要加引號。"},
    {wrong:`(檔案第 1 行是空行)

<?xml version="1.0" ?>
<student>...</student>`, right:`<?xml version="1.0" ?>
<student>...</student>`, note:"XML 宣告必須在檔案的第 1 行第 1 個位置，前面不能有空行。"},
    {wrong:`<b><i>text</b></i>`, right:`<b><i>text</i></b>`, note:"XML 元素必須正確巢狀。"}
  ],
  trace: [
    {code:`<a><b>1</b></a>`, q:"well-formed 嗎？", a:"是", why:"一個 root a，b 正確巢狀，標籤都關閉。"},
    {code:`<a><b>1</b>`, q:"well-formed 嗎？", a:"不是", why:"a 沒有結束標籤。"},
    {code:`<a><b>1</b></c>`, q:"well-formed 嗎？", a:"不是", why:"開始標籤 a 和結束標籤 c 對不起來。"},
    {code:`<a>1</a><a>2</a>`, q:"well-formed 嗎？", a:"不是", why:"有兩個 root (兩個平行的 a)。"},
    {code:`<a><b>1</a></b>`, q:"well-formed 嗎？", a:"不是", why:"巢狀順序錯了：b 先開，應先關 b。"},
    {code:`<A>1</a>`, q:"well-formed 嗎？", a:"不是", why:"大小寫敏感，A ≠ a。"},
    {code:`<a x="1" y='2'>text</a>`, q:"well-formed 嗎？", a:"是", why:"屬性值用雙引號或單引號都可以。"},
    {code:`<a x=1>text</a>`, q:"well-formed 嗎？", a:"不是", why:"屬性值沒加引號。"},
    {code:`<a><b /></a>`, q:"well-formed 嗎？", a:"是", why:"b 是自我封閉的空元素。"},
    {code:`<a>3 < 4</a>`, q:"well-formed 嗎？", a:"不是", why:"< 是保留字元，要寫 &lt;。"}
  ],
  quiz: [
    {q:"下面哪一份 XML 是 well-formed 的？", opts:["<a><b>1</b></a>","<a><b>1</b>","<a><b>1</b></c>","<a>1</a><a>2</a>"], correct:0, explain:"只有一個 root，標籤全部正確關閉且名稱一致。"},
    {q:"XML 的屬性值可以不加引號嗎？", opts:["不行，一定要用單引號或雙引號括起來","可以，跟 HTML 一樣可以省略","只有數字可以不加","只有 id 屬性可以不加"], correct:0, explain:"XML 比 HTML 嚴格。"},
    {q:"XML 宣告 <?xml version=\"1.0\" ?> 應該放在？", opts:["整份文件第 1 行的第 1 個位置","任何位置","root element 裡面","文件最後一行"], correct:0, explain:"前面不能有空行。"},
    {q:"一份 XML 可以有幾個 root element？", opts:["剛好 1 個","0 個","任意個","至少 2 個"], correct:0, explain:"exactly one。"},
    {q:"XML 標籤 <student> 與 <STUDENT> 是？", opts:["不同的標籤","相同的標籤","只有一個合法","都不合法"], correct:0, explain:"XML 大小寫敏感。"},
    {q:"要在 XML 元素內容中寫 & 符號，要用？", opts:["&amp;","&&","\\&","&and;"], correct:0, explain:"實體參考 &amp;。"},
    {q:"關於 attribute 和 element，較好的做法是？", opts:["metadata 放 attribute，資料本身放 element","全部都放 attribute","全部都放 element","沒有差別，隨意"], correct:0, explain:"Metadata should be stored as attributes, data itself as elements。"},
    {q:"XML 與 HTML 的主要差別是？", opts:["XML 標籤由使用者自訂，用來存資料；HTML 標籤預先定義，用來顯示","XML 只能用來顯示","HTML 是資料格式","沒有差別"], correct:0, explain:"XML stores and transports data。"},
    {q:"XML 沒有內容的元素應該寫？", opts:["<x />","<x>","</x>","<x/ >>"], correct:0, explain:"自我封閉或 <x></x>。"}
  ]
};

/* ============================================================
   DTD
   ============================================================ */
DATA.dtd = {
  intro: "DTD (Document Type Definition) 定義一份 XML「合法」的結構：有哪些元素、順序、次數，有哪些屬性。可以放在 XML 裡面 (internal) 或另一個 .dtd 檔 (external)。做題套路：每個元素各一行 <!ELEMENT>，有屬性再加 <!ATTLIST>。",
  cheat: [
    {t:"內部 DTD (standalone=\"yes\")", code:`<?xml version="1.0" standalone="yes" ?>
<!DOCTYPE student [
  <!ELEMENT student (firstName,lastName,email,mobile)>
  <!ELEMENT firstName (#PCDATA)>
  <!ELEMENT lastName (#PCDATA)>
  <!ELEMENT email (#PCDATA)>
  <!ELEMENT mobile (#PCDATA)>
]>
<student>
  <firstName>John</firstName>
  <lastName>Smith</lastName>
  <email>jsmith@gmail.com</email>
  <mobile>0211223344</mobile>
</student>`, note:"<!DOCTYPE root名稱 [ ... ]>：DOCTYPE 後面接 root element 的名稱 (大小寫要一致)；DTD 內容放在 [ ] 裡。"},
    {t:"外部 DTD (standalone=\"no\")", code:`<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<!DOCTYPE studentList SYSTEM "studentList.dtd">
<studentList>
  <student>...</student>
</studentList>

studentList.dtd 檔案的內容 (只有宣告，沒有 DOCTYPE 也沒有 [ ]):
<!ELEMENT studentList (student*)>
<!ELEMENT student (firstName,lastName,email)>
<!ELEMENT firstName (#PCDATA)>
<!ELEMENT lastName (#PCDATA)>
<!ELEMENT email (#PCDATA)>`, note:"外部 DTD 時 standalone 必須設為 no：代表宣告包含來自外部的資訊。"},
    {t:"元素宣告 <!ELEMENT>", code:`<!ELEMENT elementName (content)>

<!ELEMENT firstName (#PCDATA)>              純文字 (parsed character data)
<!ELEMENT student (a,b,c)>                  依序包含 a、b、c (順序固定)
<!ELEMENT list (child)>                     剛好 1 次
<!ELEMENT list (child+)>                    1 次或以上
<!ELEMENT list (child*)>                    0 次或以上
<!ELEMENT list (child?)>                    0 次或 1 次
<!ELEMENT list (child1|child2)>             child1 或 child2 擇一`, note:"符號記法：+ 至少一個；* 零個或多個；? 零個或一個；| 二選一；逗號 = 依序。沒符號 = 剛好一個。"},
    {t:"屬性宣告 <!ATTLIST>", code:`<!ATTLIST elementName attributeName attributeType attributeValue>

<!ATTLIST person operation CDATA #REQUIRED>       必填
<!ATTLIST person note CDATA #IMPLIED>             選填 (無預設、無固定值、非必填)
<!ATTLIST person country CDATA "AU">              預設值
<!ATTLIST person version CDATA #FIXED "1.0">      固定值`, note:"CDATA = 屬性值型別 (文字)。"},
    {t:"完整例子：dailyTransaction", code:`<?xml version="1.0" ?>
<dailyTransaction date="24/02/2015">
  <person staffDbId="103" operation="update">
    <firstName>John</firstName>
    <lastName>Smith</lastName>
    <mobile>0211223344</mobile>
  </person>
  <person staffDbId="-1" operation="add">
    <firstName>Mary</firstName>
    <lastName>Jane</lastName>
    <mobile>0244556677</mobile>
  </person>
</dailyTransaction>

<!ELEMENT dailyTransaction (person*)>
<!ATTLIST dailyTransaction date CDATA #REQUIRED>
<!ELEMENT person (firstName,lastName,mobile)>
<!ATTLIST person staffDbId CDATA #REQUIRED>
<!ATTLIST person operation CDATA #REQUIRED>
<!ELEMENT firstName (#PCDATA)>
<!ELEMENT lastName (#PCDATA)>
<!ELEMENT mobile (#PCDATA)>`, note:"每個出現過的元素都要有一行 <!ELEMENT>；有屬性的元素再加 <!ATTLIST>。"},
    {t:"studentList 例子", code:`<studentList>
  <student>
    <firstName>John</firstName>
    <lastName>Smith</lastName>
    <email>jsmith@gmail.com</email>
  </student>
  <student> ... </student>
</studentList>

<!ELEMENT studentList (student*)>
<!ELEMENT student (firstName,lastName,email)>
<!ELEMENT firstName (#PCDATA)>
<!ELEMENT lastName (#PCDATA)>
<!ELEMENT email (#PCDATA)>`, note:""}
  ],
  cards: [
    {q:"DTD 是什麼？有什麼用？", a:`Document Type Definition
定義 XML 文件的合法結構 (元素、屬性)

不同單位可以共用同一份 DTD
約定資料交換格式，
也可以檢查 XML 是否合法`},
    {q:"內部 DTD vs 外部 DTD？", a:`內部：寫在 XML 裡
 <!DOCTYPE student [ ... ]>
 standalone="yes"

外部：另一個 .dtd 檔
 <!DOCTYPE student SYSTEM "student.dtd">
 standalone="no"`},
    {q:"<!DOCTYPE 後面接的名字是什麼？", a:`root element 的名稱
<!DOCTYPE student [ ... ]>
對應 <student> 根元素，
大小寫必須一致`},
    {q:"<!ELEMENT firstName (#PCDATA)> 是什麼意思？", a:`firstName 元素裡面是純文字
(parsed character data)`},
    {q:"<!ELEMENT student (firstName,lastName,email)> 是什麼意思？", a:`student 裡面依序包含
firstName、lastName、email
(順序固定，各 1 次)`},
    {q:"* + ? 分別代表？", a:`*  0 次或多次
+  1 次以上
?  0 次或 1 次
(無符號) 剛好 1 次`},
    {q:"<!ELEMENT list (a|b)> 的 | 是什麼意思？", a:`擇一：
a 或 b 出現其中一個
(不是兩個都出現)`},
    {q:"<!ELEMENT studentList (student*)> 什麼意思？", a:`studentList 裡面有 0 個或多個 student
(0 個也合法)`},
    {q:"ATTLIST 的格式？", a:`<!ATTLIST 元素名 屬性名 屬性型別 屬性值>

例：
<!ATTLIST person operation CDATA #REQUIRED>`},
    {q:"#REQUIRED / #IMPLIED / #FIXED / 預設值 分別是？", a:`#REQUIRED  必填
#IMPLIED   選填 (可有可無)
#FIXED "v" 固定值，只能是 v
"v"        預設值 (沒寫時用 v)`},
    {q:"外部 DTD 檔案裡要寫什麼？", a:`只有宣告 (<!ELEMENT> <!ATTLIST>)，
不需要 <!DOCTYPE>，也沒有 [ ]`},
    {q:"寫 DTD 的步驟？", a:`1) 找出 root，宣告它的子元素 (順序、次數)
2) 每個子元素也各自宣告一行
 (有子元素的往下宣告，純文字用 #PCDATA)
3) 有屬性的元素加 <!ATTLIST>
4) 檢查 XML 用到的每個元素都宣告過`}
  ],
  cloze: [
    {title:"默寫：內部 DTD", code:`<?xml version="1.0" {{1}}="yes" ?>
<!{{2}} student [
  <!{{3}} student (firstName,lastName,email,mobile)>
  <!ELEMENT firstName ({{4}})>
  <!ELEMENT lastName (#PCDATA)>
  <!ELEMENT email (#PCDATA)>
  <!ELEMENT mobile (#PCDATA)>
]>`, ans:[["standalone"],["DOCTYPE"],["ELEMENT"],["#PCDATA"]]},
    {title:"默寫：外部 DTD 的引用", code:`<?xml version="1.0" encoding="UTF-8" standalone="{{1}}" ?>
<!DOCTYPE studentList {{2}} "studentList.dtd">
<studentList> ... </studentList>`, ans:[["no"],["SYSTEM"]]},
    {title:"默寫：出現次數符號", code:`<!ELEMENT list (child{{1}})>      0 次或多次
<!ELEMENT list (child{{2}})>      1 次以上
<!ELEMENT list (child{{3}})>      0 次或 1 次
<!ELEMENT list (a{{4}}b)>          a 或 b 擇一
<!ELEMENT list (a{{5}}b)>          依序 a 然後 b`, ans:[["*"],["+"],["?"],["|"],[","]]},
    {title:"默寫：屬性宣告", code:`<!{{1}} person staffDbId {{2}} {{3}}>        必填
<!ATTLIST person note CDATA {{4}}>            選填
<!ATTLIST person version CDATA {{5}} "1.0">    固定值`, ans:[["ATTLIST"],["CDATA"],["#REQUIRED"],["#IMPLIED"],["#FIXED"]]},
    {title:"默寫：dailyTransaction 的 DTD", code:`<!ELEMENT dailyTransaction (person{{1}})>
<!ATTLIST dailyTransaction date CDATA #REQUIRED>
<!ELEMENT person ({{2}},lastName,mobile)>
<!ATTLIST person staffDbId CDATA {{3}}>
<!ATTLIST person operation CDATA #REQUIRED>`, ans:[["*"],["firstName"],["#REQUIRED"]]}
  ],
  mistakes: [
    {wrong:`<i DOCTYPE Student [
  <!ELEMENT student(firstName, lastName, email, mobile)>
]>`, right:`<!DOCTYPE student [
  <!ELEMENT student (firstName,lastName,email,mobile)>
]>`, note:"你 Week 7 練習出現過：① <!DOCTYPE 寫成 <i DOCTYPE，少了 !，多了 i；② DOCTYPE 名稱 Student 要和根元素 student 一樣 (大小寫敏感)；③ ELEMENT 名稱和括號之間要有空格。"},
    {wrong:`<!DOCTYPE student [
  <!ELEMENT student (firstName,lastName,email,mobile)>
]>
<!-- 但 XML 裡還用到 id / subject / title / cp / code -->`, right:`<!DOCTYPE student [
  <!ELEMENT student (id,firstName,lastName,subject)>
  <!ELEMENT id (#PCDATA)>
  <!ELEMENT firstName (#PCDATA)>
  <!ELEMENT lastName (#PCDATA)>
  <!ELEMENT subject (title,cp,code)>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT cp (#PCDATA)>
  <!ELEMENT code (#PCDATA)>
]>`, note:"XML 裡實際出現的每一個元素都要宣告，包含巢狀的子元素 (subject 底下的 title、cp、code)；DTD 的內容要和 XML 實際結構一致，不能宣告 XML 沒有的元素 (如 email / mobile)。你的 Week 7 練習 DTD 和 XML 對不起來。"},
    {wrong:`<!ELEMENT firstName (PCDATA)>`, right:`<!ELEMENT firstName (#PCDATA)>`, note:"PCDATA 前面要有 #。"},
    {wrong:`<?xml version="1.0" standalone="yes" ?>
<!DOCTYPE student SYSTEM "student.dtd">`, right:`<?xml version="1.0" standalone="no" ?>
<!DOCTYPE student SYSTEM "student.dtd">`, note:"引用外部 DTD 時 standalone 必須是 no。"},
    {wrong:`(student.dtd 檔案內)
<!DOCTYPE student [
  <!ELEMENT student (firstName)>
]>`, right:`(student.dtd 檔案內)
<!ELEMENT student (firstName)>
<!ELEMENT firstName (#PCDATA)>`, note:"外部 .dtd 檔案只放宣告，不能有 <!DOCTYPE> 和 [ ]。"},
    {wrong:`<!ELEMENT studentList (student)>
(XML 有 0 個或很多個 student)`, right:`<!ELEMENT studentList (student*)>`, note:"沒符號 = 剛好 1 個。0 個以上要用 *。"}
  ],
  trace: [
    {code:`DTD：  <!ELEMENT student (firstName,lastName)>
XML：  <student>
         <lastName>Smith</lastName>
         <firstName>John</firstName>
       </student>`, q:"XML 符合 DTD 嗎？", a:"不符合", why:"逗號代表依序：DTD 規定 firstName 要在 lastName 前面。"},
    {code:`DTD：  <!ELEMENT studentList (student*)>
XML：  <studentList></studentList>`, q:"XML 符合 DTD 嗎？", a:"符合", why:"* 允許 0 個。"},
    {code:`DTD：  <!ELEMENT studentList (student+)>
XML：  <studentList></studentList>`, q:"XML 符合 DTD 嗎？", a:"不符合", why:"+ 至少要 1 個。"},
    {code:`DTD：  <!ELEMENT contact (phone|email)>
XML：  <contact>
         <phone>0211223344</phone>
         <email>a@b.com</email>
       </contact>`, q:"XML 符合 DTD 嗎？", a:"不符合", why:"| 是擇一，只能出現 phone 或 email 其中一個。"},
    {code:`DTD：  <!ELEMENT person (firstName)>
       <!ATTLIST person operation CDATA #REQUIRED>
XML：  <person>
         <firstName>John</firstName>
       </person>`, q:"XML 符合 DTD 嗎？", a:"不符合", why:"operation 是 #REQUIRED，person 必須有這個屬性。"},
    {code:`DTD：  <!ELEMENT student (firstName,lastName)>
       <!ELEMENT firstName (#PCDATA)>
       <!ELEMENT lastName (#PCDATA)>
XML：  <student>
         <firstName>John</firstName>
         <lastName>Smith</lastName>
         <email>jsmith@gmail.com</email>
       </student>`, q:"XML 符合 DTD 嗎？", a:"不符合", why:"student 的內容模型沒有 email，多出來的元素是不合法的。"},
    {code:`DTD：  <!ELEMENT person (firstName)>
       <!ELEMENT firstName (#PCDATA)>
       <!ATTLIST person operation CDATA #IMPLIED>
XML：  <person><firstName>John</firstName></person>`, q:"XML 符合 DTD 嗎？", a:"符合", why:"#IMPLIED 是選填，沒寫也合法。"}
  ],
  build: [
    {task:"根據這份 XML 寫出 DTD：\n<student>\n  <id>123456</id>\n  <firstName>John</firstName>\n  <lastName>Smith</lastName>\n  <subject>\n    <title>Java Programming</title>\n    <cp>6</cp>\n    <code>CS123</code>\n  </subject>\n</student>",
     steps:["1. root 是 student，子元素依序：id, firstName, lastName, subject → 宣告 student。","2. subject 也有子元素 title, cp, code → 宣告 subject。","3. 沒有子元素的 (id, firstName, lastName, title, cp, code) 都是純文字 → (#PCDATA)。","4. 逐個檢查：XML 裡出現的 8 個元素每個都有一行 <!ELEMENT>。"],
     code:`<!DOCTYPE student [
  <!ELEMENT student (id,firstName,lastName,subject)>
  <!ELEMENT id (#PCDATA)>
  <!ELEMENT firstName (#PCDATA)>
  <!ELEMENT lastName (#PCDATA)>
  <!ELEMENT subject (title,cp,code)>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT cp (#PCDATA)>
  <!ELEMENT code (#PCDATA)>
]>`},
    {task:"根據這份 XML 寫出 DTD (含屬性)：\n<dailyTransaction date=\"24/02/2015\">\n  <person staffDbId=\"103\" operation=\"update\">\n    <firstName>John</firstName>\n    <lastName>Smith</lastName>\n    <mobile>0211223344</mobile>\n  </person>\n  ... (可以有很多個 person)\n</dailyTransaction>",
     steps:["1. root：dailyTransaction 包含 0 個或多個 person → (person*)。","2. dailyTransaction 有屬性 date → <!ATTLIST dailyTransaction date CDATA #REQUIRED>。","3. person 依序包含 firstName, lastName, mobile → 宣告 person。","4. person 有兩個屬性 staffDbId、operation → 各一行 ATTLIST (或寫在同一行)。","5. firstName, lastName, mobile 是純文字 → (#PCDATA)。"],
     code:`<!ELEMENT dailyTransaction (person*)>
<!ATTLIST dailyTransaction date CDATA #REQUIRED>
<!ELEMENT person (firstName,lastName,mobile)>
<!ATTLIST person staffDbId CDATA #REQUIRED>
<!ATTLIST person operation CDATA #REQUIRED>
<!ELEMENT firstName (#PCDATA)>
<!ELEMENT lastName (#PCDATA)>
<!ELEMENT mobile (#PCDATA)>`}
  ],
  quiz: [
    {q:"<!ELEMENT student (name+)> 代表 name 可以出現幾次？", opts:["1 次以上","0 次以上","只能 0 或 1 次","剛好 1 次"], correct:0, explain:"+ 代表至少 1 次，可以更多次。"},
    {q:"<!ELEMENT list (item*)> 中 * 代表？", opts:["item 出現 0 次或多次","item 至少出現 1 次","item 只能 0 或 1 次","item 剛好 1 次"], correct:0, explain:"* 零個或多個。"},
    {q:"引用外部 DTD 時，XML 宣告的 standalone 應設為？", opts:["no","yes","true","external"], correct:0, explain:"外部 DTD → standalone=\"no\"。"},
    {q:"DTD 中的 #PCDATA 代表？", opts:["純文字 (parsed character data)","子元素","屬性","註解"], correct:0, explain:"元素內容是文字。"},
    {q:"<!ATTLIST person operation CDATA #REQUIRED> 代表？", opts:["person 必須有 operation 屬性","person 可以有 operation 屬性 (選填)","operation 是固定值","operation 有預設值"], correct:0, explain:"#REQUIRED 必填；#IMPLIED 選填。"},
    {q:"<!ELEMENT a (b,c)> 代表？", opts:["a 依序包含 b、c","a 包含 b 或 c","a 包含 b 個 c","b 與 c 的順序不拘"], correct:0, explain:"逗號 = 依序。"},
    {q:"<!ELEMENT a (b|c)> 代表？", opts:["a 包含 b 或 c 其中一個","a 依序包含 b、c","a 包含 b 和 c","a 包含 0 個 b 或 c"], correct:0, explain:"| = 擇一。"},
    {q:"<!DOCTYPE student [ ... ]> 中的 student 是？", opts:["root element 的名稱","任一子元素","屬性名","檔案名稱"], correct:0, explain:"DOCTYPE 後面接 root 名稱。"},
    {q:"DTD 中要宣告哪些元素？", opts:["XML 裡實際用到的每一個元素","只要 root","只要有子元素的","只要有屬性的"], correct:0, explain:"少一個就不合法。"}
  ]
};

/* ============================================================
   XSD
   ============================================================ */
DATA.xsd = {
  intro: "XSD (XML Schema Definition) 是另一種定義 XML 結構的方式 (副檔名 .xsd，本身也是 XML)。判斷 simpleType 或 complexType 只問一件事：這個元素「有沒有」子元素或屬性？有 → complexType；都沒有 → simpleType。",
  cheat: [
    {t:"如何判斷 simpleType / complexType", code:`元素裡有 其他元素   → complexType
元素有 屬性         → complexType    (符合任一項就是)
沒有元素、沒有屬性  → simpleType     (只有文字)

<result><mark>85</mark><grade>A</grade></result>   result 是 complexType (有子元素)
<mark>85</mark>                                     mark 是 simpleType
<price code="A">39.5</price>                         price 是 complexType (有屬性)`, note:"這是 XSD 最重要的判斷。"},
    {t:"骨架 (student 例子)", code:`XML：
<?xml version="1.0" ?>
<student xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="student.xsd">
  <firstName>John</firstName>
  <lastName>Smith</lastName>
  <email>jsmith@gmail.com</email>
  <mobile>0211223344</mobile>
</student>

student.xsd：
<?xml version="1.0" ?>
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <xsd:element name="student">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="firstName" type="xsd:string"/>
        <xsd:element name="lastName" type="xsd:string"/>
        <xsd:element name="email" type="xsd:string"/>
        <xsd:element name="mobile" type="xsd:string"/>
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>
</xsd:schema>`, note:"xmlns:xsd 表示 schema 用到的元素與型別來自 http://www.w3.org/2001/XMLSchema，因此都要加 xsd: 前綴。sequence = 子元素必須依序出現。XML 用 xsi:schemaLocation 指向 xsd 檔。"},
    {t:"complexType ① 包含子元素", code:`<result>
  <mark>85</mark>
  <grade>A</grade>
</result>

<xsd:element name="result">
  <xsd:complexType>
    <xsd:sequence>
      <xsd:element name="mark" type="xsd:integer"/>
      <xsd:element name="grade" type="xsd:string"/>
    </xsd:sequence>
  </xsd:complexType>
</xsd:element>`, note:""},
    {t:"complexType ② 子元素 + 屬性 (屬性最後)", code:`<scan schedule="hourly">
  <start>2018-06-20T13:00:00</start>
  <finish>2018-06-20T13:01:47</finish>
  <virusFound>true</virusFound>
</scan>

<xsd:element name="scan">
  <xsd:complexType>
    <xsd:sequence>
      <xsd:element name="start" type="xsd:dateTime" />
      <xsd:element name="finish" type="xsd:dateTime" />
      <xsd:element name="virusFound" type="xsd:boolean" />
    </xsd:sequence>
    <xsd:attribute name="schedule" type="xsd:string" />
  </xsd:complexType>
</xsd:element>`, note:"attribute 的宣告一定要放在 sequence 之後 (最後)。"},
    {t:"complexType ③ 純文字 + 屬性 (simpleContent)", code:`<price promotionCode="FAMILYDEAL">39.50</price>

<xsd:element name="price">
  <xsd:complexType>
    <xsd:simpleContent>
      <xsd:extension base="xsd:decimal">
        <xsd:attribute name="promotionCode" type="xsd:string" />
      </xsd:extension>
    </xsd:simpleContent>
  </xsd:complexType>
</xsd:element>`, note:"文字內容 + 屬性：complexType > simpleContent > extension(base=文字的型別) > attribute。"},
    {t:"simpleType：沒有子元素也沒有屬性", code:`<website>http://www.uow.edu.au/student</website>
<lastDayToEnrol>2000-03-24</lastDayToEnrol>
<favouriteColor>blue</favouriteColor>

<xsd:element name="website" type="xsd:anyURI" />
<xsd:element name="lastDayToEnrol" type="xsd:date" />
<xsd:element name="favouriteColor" type="xsd:string" />

常見型別：xsd:string  xsd:integer  xsd:decimal  xsd:boolean
          xsd:date  xsd:dateTime  xsd:anyURI`, note:""},
    {t:"simpleType + 限制 (restriction)", code:`<!-- grade 只能是 A, B, C, D -->
<xsd:element name="grade">
  <xsd:simpleType>
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="A"/>
      <xsd:enumeration value="B"/>
      <xsd:enumeration value="C"/>
      <xsd:enumeration value="D"/>
    </xsd:restriction>
  </xsd:simpleType>
</xsd:element>

<!-- mark 只能是 0~100 -->
<xsd:element name="mark">
  <xsd:simpleType>
    <xsd:restriction base="xsd:integer">
      <xsd:minInclusive value="0"/>
      <xsd:maxInclusive value="100"/>
    </xsd:restriction>
  </xsd:simpleType>
</xsd:element>`, note:"enumeration = 列舉可用值；minInclusive / maxInclusive = 範圍 (含頭尾)。"},
    {t:"出現次數 minOccurs / maxOccurs", code:`<xsd:element name="student" minOccurs="0" maxOccurs="unbounded">
   ...
</xsd:element>`, note:"minOccurs=\"0\" maxOccurs=\"unbounded\" = 0 次到不限次數 (等於 DTD 的 *)。預設值都是 1 (剛好出現一次)。"},
    {t:"完整例子：studentList", code:`<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <xsd:element name="studentList">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="student" minOccurs="0" maxOccurs="unbounded">
          <xsd:complexType>
            <xsd:sequence>
              <xsd:element name="firstName" type="xsd:string"/>
              <xsd:element name="lastName" type="xsd:string"/>
              <xsd:element name="email" type="xsd:string"/>
            </xsd:sequence>
          </xsd:complexType>
        </xsd:element>
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>
</xsd:schema>`, note:"studentList (complexType) 有 0 個或多個 student (complexType)，student 裡的 3 個元素都是 simpleType。"},
    {t:"完整例子：dailyTransaction", code:`<xsd:element name="dailyTransaction">
  <xsd:complexType>
    <xsd:sequence>
      <xsd:element name="person" minOccurs="0" maxOccurs="unbounded">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="firstName" type="xsd:string"/>
            <xsd:element name="lastName" type="xsd:string"/>
            <xsd:element name="mobile" type="xsd:string"/>
          </xsd:sequence>
          <xsd:attribute name="staffDbId" type="xsd:integer" />
          <xsd:attribute name="operation" type="xsd:string" />
        </xsd:complexType>
      </xsd:element>
    </xsd:sequence>
    <xsd:attribute name="date" type="xsd:string" />
  </xsd:complexType>
</xsd:element>`, note:"complexType：dailyTransaction、person；simpleType：firstName、lastName、mobile。屬性都在 sequence 後面。"}
  ],
  cards: [
    {q:"什麼時候用 simpleType？什麼時候用 complexType？", a:`沒有子元素、也沒有屬性
→ simpleType

有子元素 或 有屬性
(符合其中一項就算)
→ complexType`},
    {q:"「有文字內容又有屬性」的元素怎麼宣告？\n例：<price code=\"A\">39.5</price>", a:`complexType 包 simpleContent
再用 extension 加屬性：

<xsd:complexType>
 <xsd:simpleContent>
  <xsd:extension base="xsd:decimal">
   <xsd:attribute name="code" .../>
  </xsd:extension>
 </xsd:simpleContent>
</xsd:complexType>`},
    {q:"子元素要「0 次到不限次數」怎麼寫？", a:`minOccurs="0"
maxOccurs="unbounded"

預設都是 1 (剛好出現一次)`},
    {q:"限制 grade 只能是 A/B/C/D？", a:`<xsd:restriction base="xsd:string">
 <xsd:enumeration value="A"/>
 <xsd:enumeration value="B"/>
 ...
</xsd:restriction>`},
    {q:"限制 mark 只能是 0~100？", a:`<xsd:restriction base="xsd:integer">
 <xsd:minInclusive value="0"/>
 <xsd:maxInclusive value="100"/>
</xsd:restriction>`},
    {q:"xsd:sequence 的作用？", a:`規定子元素必須依照列出的順序出現`},
    {q:"attribute 宣告要放在哪？", a:`一定要放在 sequence 之後 (最後)
順序寫反就是不合法的 XSD`},
    {q:"為什麼元素、型別前面有 xsd: ？", a:`schema 用到的元素與型別來自命名空間
http://www.w3.org/2001/XMLSchema
(xmlns:xsd 宣告的前綴)，
所以都要加 xsd: 前綴`},
    {q:"XML 檔怎麼指向它的 xsd？", a:`<student
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="student.xsd">`},
    {q:"XSD 常見的資料型別？", a:`xsd:string  xsd:integer  xsd:decimal
xsd:boolean  xsd:date  xsd:dateTime
xsd:anyURI`},
    {q:"XSD 和 DTD 一樣嗎？", a:`目的相同：定義 XML 的合法結構
XSD 本身也是 XML，可以指定資料型別、
範圍限制 (DTD 只有 #PCDATA / CDATA)`},
    {q:"怎麼從 XML 寫 XSD？", a:`1) 從 root 開始，判斷 simple / complex
2) complex：sequence 列出子元素 (加次數)，
   屬性放最後
3) 子元素再各自判斷 simple / complex
4) simple：給型別，需要時加 restriction`}
  ],
  cloze: [
    {title:"默寫：XSD 骨架", code:`<{{1}}:schema xmlns:{{2}}="http://www.w3.org/2001/XMLSchema">
  <xsd:{{3}} name="student">
    <xsd:complexType>
      <xsd:{{4}}>
        <xsd:element name="firstName" type="xsd:{{5}}"/>
      </xsd:{{6}}>
    </xsd:complexType>
  </xsd:element>
</xsd:schema>`, ans:[["xsd"],["xsd"],["element"],["sequence"],["string"],["sequence"]]},
    {title:"默寫：子元素 + 屬性 (屬性放最後)", code:`<xsd:element name="scan">
  <xsd:complexType>
    <xsd:sequence>
      <xsd:element name="start" type="xsd:dateTime" />
    </xsd:sequence>
    <xsd:{{1}} name="schedule" type="xsd:string" />
  </xsd:complexType>
</xsd:element>`, ans:[["attribute"]]},
    {title:"默寫：文字 + 屬性", code:`<xsd:element name="price">
  <xsd:complexType>
    <xsd:{{1}}>
      <xsd:{{2}} base="xsd:decimal">
        <xsd:attribute name="promotionCode" type="xsd:string" />
      </xsd:{{3}}>
    </xsd:{{4}}>
  </xsd:complexType>
</xsd:element>`, ans:[["simpleContent"],["extension"],["extension"],["simpleContent"]]},
    {title:"默寫：0 個到不限個", code:`<xsd:element name="student" {{1}}="0" {{2}}="unbounded">`, ans:[["minOccurs"],["maxOccurs"]]},
    {title:"默寫：只能是 A / B / C / D", code:`<xsd:element name="grade">
  <xsd:simpleType>
    <xsd:{{1}} base="xsd:string">
      <xsd:{{2}} value="A"/>
      <xsd:enumeration value="B"/>
    </xsd:{{3}}>
  </xsd:simpleType>
</xsd:element>`, ans:[["restriction"],["enumeration"],["restriction"]]},
    {title:"默寫：mark 範圍 0~100", code:`<xsd:restriction base="xsd:{{1}}">
  <xsd:{{2}} value="0"/>
  <xsd:{{3}} value="100"/>
</xsd:restriction>`, ans:[["integer"],["minInclusive"],["maxInclusive"]]}
  ],
  mistakes: [
    {wrong:`<xsd:complexType>
  <xsd:attribute .../>
  <xsd:sequence>...</xsd:sequence>
</xsd:complexType>`, right:`<xsd:complexType>
  <xsd:sequence>...</xsd:sequence>
  <xsd:attribute .../>
</xsd:complexType>`, note:"attribute 的宣告一定要放在 sequence 之後，順序寫反就是不合法的 XSD。"},
    {wrong:`<xsd:element name="price" type="xsd:decimal">
  <xsd:attribute name="promotionCode" type="xsd:string" />
</xsd:element>
(<price promotionCode="A">39.5</price>)`, right:`<xsd:element name="price">
  <xsd:complexType>
    <xsd:simpleContent>
      <xsd:extension base="xsd:decimal">
        <xsd:attribute name="promotionCode" type="xsd:string" />
      </xsd:extension>
    </xsd:simpleContent>
  </xsd:complexType>
</xsd:element>`, note:"有屬性就是 complexType；文字 + 屬性要用 simpleContent + extension。"},
    {wrong:`<schema xmlns="http://www.w3.org/2001/XMLSchema">
  <element name="student" type="string" />
</schema>`, right:`<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <xsd:element name="student" type="xsd:string" />
</xsd:schema>`, note:"講義的寫法：宣告 xmlns:xsd，元素和型別都要加 xsd: 前綴。"},
    {wrong:`<xsd:element name="student" minOccurs="0" maxOccurs="many">`, right:`<xsd:element name="student" minOccurs="0" maxOccurs="unbounded">`, note:"「不限次數」的值是 unbounded。"},
    {wrong:`<xsd:element name="mark">
  <xsd:restriction base="xsd:integer">
    <xsd:minInclusive value="0"/>
    <xsd:maxInclusive value="100"/>
  </xsd:restriction>
</xsd:element>`, right:`<xsd:element name="mark">
  <xsd:simpleType>
    <xsd:restriction base="xsd:integer">
      <xsd:minInclusive value="0"/>
      <xsd:maxInclusive value="100"/>
    </xsd:restriction>
  </xsd:simpleType>
</xsd:element>`, note:"restriction 要包在 simpleType 裡面。"}
  ],
  trace: [
    {code:`<result>
  <mark>85</mark>
  <grade>A</grade>
</result>`, q:"result、mark、grade 各是 simpleType 還是 complexType？", a:"result：complexType (有子元素)\nmark、grade：simpleType", why:"只有文字 → simple；有子元素 → complex。"},
    {code:`<scan schedule="hourly">
  <start>2018-06-20T13:00:00</start>
  <finish>2018-06-20T13:01:47</finish>
  <virusFound>true</virusFound>
</scan>`, q:"scan、start、finish、virusFound 各是什麼？start / virusFound 用什麼型別？", a:"scan：complexType (有子元素 + 屬性 schedule)\nstart、finish、virusFound：simpleType\nstart / finish → xsd:dateTime；virusFound → xsd:boolean", why:"scan 有子元素也有屬性，所以是 complexType。"},
    {code:`<price promotionCode="FAMILYDEAL">39.50</price>`, q:"price 是什麼？怎麼宣告？", a:"complexType (有屬性)，用 simpleContent + extension base=\"xsd:decimal\"。", why:"文字 + 屬性的組合。"},
    {code:`<website>http://www.uow.edu.au/student</website>
<lastDayToEnrol>2000-03-24</lastDayToEnrol>
<favouriteColor>blue</favouriteColor>`, q:"三個元素各用什麼 type？", a:"website → xsd:anyURI\nlastDayToEnrol → xsd:date\nfavouriteColor → xsd:string", why:"都沒有子元素也沒有屬性 → simpleType，只需給 type。"},
    {code:`<dailyTransaction date="24/02/2015">
  <person staffDbId="103" operation="update">
    <firstName>John</firstName>
    <lastName>Smith</lastName>
    <mobile>0211223344</mobile>
  </person>
</dailyTransaction>`, q:"哪些是 complexType？哪些是 simpleType？", a:"complexType：dailyTransaction (有屬性 date + 子元素 person)、person (有屬性 + 子元素)\nsimpleType：firstName、lastName、mobile", why:"date 是 dailyTransaction 的屬性，staffDbId / operation 是 person 的屬性。"},
    {code:`<xsd:element name="student" minOccurs="0" maxOccurs="unbounded">`, q:"student 可以出現幾次？如果去掉這兩個屬性呢？", a:"0 次到不限次數。\n去掉後預設 minOccurs=1、maxOccurs=1，剛好 1 次。", why:"預設值都是 1。"},
    {code:`<grade>E</grade>
(grade 限制為 A / B / C / D)`, q:"XML 合法嗎？", a:"不合法。E 不在 enumeration 列舉的範圍。", why:"enumeration 限制只能是列出的值。"},
    {code:`<mark>105</mark>
(mark 限制 minInclusive 0、maxInclusive 100)`, q:"XML 合法嗎？100 呢？", a:"105 不合法；100 合法 (Inclusive 含邊界)。", why:"maxInclusive = 含 100。"}
  ],
  build: [
    {task:"根據這份 XML 寫出 XSD：\n<student>\n  <firstName>John</firstName>\n  <lastName>Smith</lastName>\n  <email>jsmith@gmail.com</email>\n</student>",
     steps:["1. root student：有子元素 → complexType → sequence。","2. 三個子元素都沒有子元素與屬性 → simpleType，型別都是 xsd:string。","3. 順序要和 XML 一樣：firstName、lastName、email。"],
     code:`<?xml version="1.0" ?>
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <xsd:element name="student">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="firstName" type="xsd:string"/>
        <xsd:element name="lastName" type="xsd:string"/>
        <xsd:element name="email" type="xsd:string"/>
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>
</xsd:schema>`},
    {task:"根據這份 XML 寫出 XSD (person 可以有 0 到很多個)：\n<dailyTransaction date=\"24/02/2015\">\n  <person staffDbId=\"103\" operation=\"update\">\n    <firstName>John</firstName>\n    <lastName>Smith</lastName>\n    <mobile>0211223344</mobile>\n  </person>\n</dailyTransaction>",
     steps:["1. root dailyTransaction：有子元素 person + 屬性 date → complexType：sequence 放 person，attribute date 放最後。","2. person 要 0~不限：minOccurs=\"0\" maxOccurs=\"unbounded\"。","3. person 有子元素 + 屬性 → complexType：sequence 放 firstName、lastName、mobile，之後 attribute staffDbId (xsd:integer)、operation (xsd:string)。","4. firstName、lastName、mobile：simpleType xsd:string。"],
     code:`<xsd:element name="dailyTransaction">
  <xsd:complexType>
    <xsd:sequence>
      <xsd:element name="person" minOccurs="0" maxOccurs="unbounded">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="firstName" type="xsd:string"/>
            <xsd:element name="lastName" type="xsd:string"/>
            <xsd:element name="mobile" type="xsd:string"/>
          </xsd:sequence>
          <xsd:attribute name="staffDbId" type="xsd:integer" />
          <xsd:attribute name="operation" type="xsd:string" />
        </xsd:complexType>
      </xsd:element>
    </xsd:sequence>
    <xsd:attribute name="date" type="xsd:string" />
  </xsd:complexType>
</xsd:element>`}
  ],
  quiz: [
    {q:"一個元素只有屬性、沒有子元素、沒有文字內容，要用？", opts:["complexType","simpleType","兩者都可以","不用宣告"], correct:0, explain:"只要有屬性，就一定是 complexType。"},
    {q:"minOccurs=\"0\" 代表什麼？", opts:["這個元素可以完全不出現","這個元素一定要出現","語法錯誤","最多出現 0 次"], correct:0, explain:"預設值其實是 1 (必須出現一次)。"},
    {q:"xsd:sequence 的作用是？", opts:["規定子元素要按照指定順序出現","規定子元素可以任意順序出現","規定屬性的預設值","跟 HTML 的 <ol> 功能一樣"], correct:0, explain:"sequence 列出的子元素在 XML 裡也要照順序。"},
    {q:"<price code=\"A\">39.5</price> 的 price 應宣告為？", opts:["complexType + simpleContent + extension","simpleType","complexType + sequence","不用宣告"], correct:0, explain:"文字內容加屬性的組合。"},
    {q:"限制 grade 只能是 A、B、C、D，用？", opts:["restriction + enumeration","restriction + minInclusive","extension + enumeration","sequence + choice"], correct:0, explain:"simpleType > restriction > enumeration。"},
    {q:"attribute 宣告在 complexType 中應該放在？", opts:["sequence 之後","sequence 之前","任何位置都可","element 裡面"], correct:0, explain:"The attribute declarations must always come last。"},
    {q:"「不限次數」的 maxOccurs 值是？", opts:["unbounded","infinite","many","-1"], correct:0, explain:"maxOccurs=\"unbounded\"。"},
    {q:"<start>2018-06-20T13:00:00</start> 應該用哪個型別？", opts:["xsd:dateTime","xsd:date","xsd:boolean","xsd:integer"], correct:0, explain:"含日期與時間 → dateTime；只有日期才是 date。"},
    {q:"XSD 的 xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" 有什麼作用？", opts:["宣告 schema 用到的元素與型別的命名空間 (要加 xsd: 前綴)","指定 XML 檔的位置","定義 XML 的根元素","設定編碼"], correct:0, explain:"elements and data types come from that namespace, prefixed with xsd。"}
  ]
};
