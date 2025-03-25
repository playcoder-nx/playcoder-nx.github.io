import{_ as e,c as n,a,o as l}from"./app-vlpg1qcw.js";const i={};function p(o,s){return l(),n("div",null,s[0]||(s[0]=[a(`<h3 id="认识less" tabindex="-1"><a class="header-anchor" href="#认识less"><span>认识less</span></a></h3><h4 id="特征" tabindex="-1"><a class="header-anchor" href="#特征"><span>特征：</span></a></h4><ul><li><p>更清晰和更可读的代码可以以有组织的方式编写。</p></li><li><p>我们可以定义样式，它可以在整个代码中重复使用。</p></li><li><p>LESS是基于JavaScript的，是超集的CSS。</p></li><li><p>LESS是一个敏捷工具，可以排除代码冗余的问题。</p><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h4></li><li><p>LESS轻松地生成可在浏览器中工作的CSS。</p></li><li><p>LESS使您能够使用嵌套编写更干净，组织良好的代码。</p></li><li><p>通过使用变量可以更快地实现维护。</p></li><li><p>LESS使您能够通过在规则集中引用它们来轻松地重用整个类。</p></li><li><p>LESS提供使用操作，使得编码更快并节省时间。</p><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点：</span></a></h4></li><li><p>学习如果你是新的CSS预处理需要时间。</p></li><li><p>由于模块之间的紧密耦合，应当采取更多的努力来重用和/或测试依赖模块。</p></li><li><p>与旧的预处理器(例如Sass)相比，LESS具有较少的框架，Sass由框架 Compass ， Gravity和 Susy 组成。</p></li></ul><h3 id="less初体验" tabindex="-1"><a class="header-anchor" href="#less初体验"><span>less初体验</span></a></h3><p>style.less:</p><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code><span class="line"><span class="token variable">@primarycoloer<span class="token punctuation">:</span></span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">@color<span class="token punctuation">:</span></span>blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">h1</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@primarycoloer</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">h3</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过命令lessc style.less style.css来将less编译为css样式</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">style.css:</span>
<span class="line"></span>
<span class="line">h1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">h3</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="less变量" tabindex="-1"><a class="header-anchor" href="#less变量"><span>less变量</span></a></h3><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code><span class="line"><span class="token variable">@var<span class="token punctuation">:</span></span> <span class="token variable">@a</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">@a<span class="token punctuation">:</span></span> 15px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.myclass</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token variable">@a<span class="token punctuation">:</span></span>20px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.myclass</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该demo定义了var这个变量指向a，之后定义a为20</p><p>但是实际在下方显示var为15，是因为less类似于css，延迟加载，最终的定义才是结果。（自底向上）</p><h3 id="变量插值" tabindex="-1"><a class="header-anchor" href="#变量插值"><span>变量插值</span></a></h3><h3 id="less选择器" tabindex="-1"><a class="header-anchor" href="#less选择器"><span>less选择器</span></a></h3><p>选择器可以引用任何变量，它是在编译时构建的。变量名称必须放在用@符号前缀的花括号（{}）内。</p><p>@selector: h2;</p><p>@{selector} { background: #2ECCFA; } 注意使用选择器变量的时候需要在@后加入花括号，而作为值的变量并不需要。</p><h3 id="less-url" tabindex="-1"><a class="header-anchor" href="#less-url"><span>less url</span></a></h3><p>@images: &quot;http://www.wxxx.cn&quot;;</p><p>.myclass { background : url(&quot;@{images}/less/images/less_variables/birds.jpg&quot;); width:800px; height:500px; } 同上述的选择器变量，url变量也需要加入花括号（该变量是在字符串里面的值）</p><h3 id="less-import" tabindex="-1"><a class="header-anchor" href="#less-import"><span>less import</span></a></h3><p>@path : &quot;//www.wxx.cn/less&quot;; @import &quot;@{path}/external1.less&quot;; .myclass{ color : #A52A2A; } 类似于上面的url变量，该变量也是在字符串包括当中。</p><h3 id="less属性" tabindex="-1"><a class="header-anchor" href="#less属性"><span>less属性</span></a></h3><p>@my-property: color; .myclass { background-@{my-property}: #81F7D8; } 该属性定义的值为color，之后在使用时同其他插值变量。</p><h3 id="less-变量名称" tabindex="-1"><a class="header-anchor" href="#less-变量名称"><span>Less 变量名称</span></a></h3><p>.myclass{ @col: #ca428b; @color: &quot;col&quot;; background-color: @@color; } 该demo定义了两个变量，其中一个变量的值是另一个变量的变量名称。</p><h3 id="延迟加载" tabindex="-1"><a class="header-anchor" href="#延迟加载"><span>延迟加载</span></a></h3><p>p { font-size: @a; color: #ca428b; } @a: @b; @b: 25px; 在未定义变量的时候也可以使用该变量，有点类似于JavaScript的提升</p><h3 id="less导入" tabindex="-1"><a class="header-anchor" href="#less导入"><span>less导入</span></a></h3><p>在less中可以使用@import来导入外部的文件。</p><p>@import &quot;style&quot;; // imports the style.less</p><p>@import &quot;style.less&quot;; // imports the style.less</p><p>@import &quot;style.php&quot;; // imports the style.php as a less file</p><p>@import &quot;style.css&quot;; // it will kept the statement as it is</p><p>.myclass{ color: #FF8000; }</p><p>.myclass1{ color: #5882FA; }</p><p>@import &quot;//www.w3cschool.cn/less/myfile.less&quot;; .myclass2 { color: #FF0000; } less导入使用@import语句，之后空格后跟字符串，字符串代表的是另一个less文件的路径。</p><h3 id="less的命名空间和访问器" tabindex="-1"><a class="header-anchor" href="#less的命名空间和访问器"><span>less的命名空间和访问器</span></a></h3><p>.class1 { .class2 { .val(@param) { font-size: @param; color:green; } } }</p><p>.myclass { .class1 &gt; .class2 &gt; .val(20px); } 在myclass当中调用.val函数，之后的结果：</p><p>.myclass { font-size: 20px; color: green; }</p><h3 id="less拓展" tabindex="-1"><a class="header-anchor" href="#less拓展"><span>less拓展</span></a></h3><p>初识拓展：</p><p>h2 { &amp;:extend(.style); font-style: italic; } .style { background: green; } 拓展的语句在其中使用&amp;:exteng(.style)，可以将其他样式拓展到当前的匹配当中，最终结果：</p><p>h2 { font-style: italic; } .style, h2 { background: green; } 拓展也可以放在选择器当中：</p><p>.style:extend(.container, .img) { background: #BF70A5; } .container { font-style: italic; } .img{ font-size: 30px; } 该.style拓展了.container和.img的样式到自己，直接写在了选择器当中作为一个伪类的形式</p><p>.style { background: #BF70A5; } .container, .style { font-style: italic; } .img, .style { font-size: 30px; }</p><h3 id="拓展附加到选择器" tabindex="-1"><a class="header-anchor" href="#拓展附加到选择器"><span>拓展附加到选择器</span></a></h3><p>.style, .container:extend(.img){ background: #BF70A5; } .img{ font-size: 45px; font-style: italic; } 该demo在.container选择器后使用了伪类的形式拓展了.img的样式，（不包括style)</p><p>结果：</p><p>.style, .container { background: #BF70A5; } .img, .container { font-size: 45px; font-style: italic; }</p><h3 id="拓展内部规则集" tabindex="-1"><a class="header-anchor" href="#拓展内部规则集"><span>拓展内部规则集</span></a></h3><p>&amp;:extend(selector) 语法可以放在规则集的正文中。 它是放置扩展到规则集的每个选择器的快捷方式。</p><p>.container, .style { &amp;:extend(.img); } .img{ font-style: italic; background-color: #7B68EE; } 结果：</p><p>.img, .container, .style { font-style: italic; background-color: #7B68EE; } 拓展嵌套选择器 .style { h3{ color: #BF70A5; font-size: 30px; } } .img:extend(.style h3){} 该demo使用extend拓展了上述的嵌套选择器给自己</p><p>.style h3, .img { color: #BF70A5; font-size: 30px; }</p><h3 id="less的嵌套规则" tabindex="-1"><a class="header-anchor" href="#less的嵌套规则"><span>less的嵌套规则</span></a></h3><p>.container{ h1{ font-size: 25px; color:#E45456; } p{ font-size: 25px; color:#3C7949; }</p><p>.myclass{ h1{ font-size: 25px; color:#E45456; } p{ font-size: 25px; color:#3C7949; } } }</p><p>结果：</p><p>.container h1 { font-size: 25px; color: #E45456; } .container p { font-size: 25px; color: #3C7949; } .container .myclass h1 { font-size: 25px; color: #E45456; } .container .myclass p { font-size: 25px; color: #3C7949; }</p><h3 id="less混和" tabindex="-1"><a class="header-anchor" href="#less混和"><span>less混和</span></a></h3><p>less当中的混和类似于编程语言的函数。Mixins是一组CSS属性，允许您将一个类的属性用于另一个类，并且包含类名作为其属性。 在LESS中，可以使用类或id选择器以与CSS样式相同的方式声明mixin。 它可以存储多个值，并且可以在必要时在代码中重复使用。</p><p>初识：</p><p>.p1{ color:red; } .p2{ background : #64d9c0; .p1(); } .p3{ background : #DAA520; .p1; } 结果：</p><p>.p1 { color: red; } .p2 { background: #64d9c0; color: red; } .p3 { background: #DAA520; color: red; } 在该demo当中，p2和p3调用了mixins，括号是可以选择的，所以上述后两个结果是一样的。</p><h3 id="less不输出mixins" tabindex="-1"><a class="header-anchor" href="#less不输出mixins"><span>less不输出mixins</span></a></h3><p>在创建一个mixins时给函数（选择器名称）后添加一个括号，可以在调用后消失该规则。</p><p>demo：</p><p>.a(){ background-color: red; }; .test{ .a(); }; 该demo定义了一个a()，在.test当中调用后，其代码并没有对a标签做任何的改变</p><p>结果：</p><p>.test { background-color: red; }</p><h3 id="mixins中的选择器" tabindex="-1"><a class="header-anchor" href="#mixins中的选择器"><span>mixins中的选择器</span></a></h3><p>mixins不仅可以包含属性，还可以包含选择器。</p><p>.mixin() { &amp;:hover { background: #FFC0CB; } } a { .mixin(); } 该demo写了&amp;:hover，在a中调用的时候，会自动变为a:hover</p><p>a:hover { background: #FFC0CB; }</p><h3 id="mixin的命名空间" tabindex="-1"><a class="header-anchor" href="#mixin的命名空间"><span>mixin的命名空间</span></a></h3><p>类似于上述的命名空间和访问器的用法</p><p>#outer() { background:yellow; .inner { color: red; } } p { #outer &gt; .inner; } 结果：</p><p>p { color: red; }</p><h3 id="less保护的命名空间" tabindex="-1"><a class="header-anchor" href="#less保护的命名空间"><span>less保护的命名空间</span></a></h3><p>@import &quot;//www.w3cschool.cn/less/lib.less&quot;; #namespace when (@color = blue) { .mixin() { color: red; } } p{ #namespace .mixin(); } 该demo只有在导入的时候color是蓝的才可以访问mixin函数。（p选择器当中的样式如果color不是蓝无法调用.mixin()）</p><p>p { color: red; }</p><h3 id="less混合参数" tabindex="-1"><a class="header-anchor" href="#less混合参数"><span>less混合参数</span></a></h3><p>.border(@width; @style; @color) { border: @width @style @color; }</p><p>.myheader { .border(2px; dashed; green); } 这里分别定义了三个参数：border的宽度样式和颜色。</p><p>less mixins具有多个参数 .mixin_name(@var_name1; @var_name2:some){ //code here } .mixin(@color; @padding: 2) { color: @color; padding: @padding; }</p><p>.myclass { .mixin(#FE9A2E); } 上述padding有默认值，因此编译后的结果为：</p><p>.myclass { color: #FE9A2E; padding: 2; }</p><h3 id="less-命名参数" tabindex="-1"><a class="header-anchor" href="#less-命名参数"><span>less 命名参数</span></a></h3><p>less的mixins参数并不取决于位置，没有任何的放置顺序，可以通过名称来引用。</p><p>.mixin(@color: black; @fontSize: 10px) { color: @color; font-size: @fontSize; } .class1 { .mixin(@fontSize: 20px; @color: #F5A9D0); } .class2 { .mixin(#F79F81; @fontSize: 20px); } 结果：</p><p>.class1 { color: #F5A9D0; font-size: 20px; } .class2 { color: #F79F81; font-size: 20px; } less @arguments variable 当你不想使用单个参数的时候，该变量可以替代所有的参数。</p><p>demo：</p><p>.box-shadow(@x: 0; @y: 0; @height: 3px; @width: 3px) { -webkit-box-shadow: @arguments; -moz-box-shadow: @arguments; box-shadow: @arguments; } .myclass { .box-shadow(2px; 2px); } .myclass { -webkit-box-shadow: 2px 2px 3px 3px; -moz-box-shadow: 2px 2px 3px 3px; box-shadow: 2px 2px 3px 3px; }</p><h3 id="less模式匹配" tabindex="-1"><a class="header-anchor" href="#less模式匹配"><span>less模式匹配</span></a></h3><p>理解为多态，传入不同的参数控制不同的行为。</p><p>.mixin(dark; @color) { color: darken(@color, 15%); } .mixin(light; @color) { color: lighten(@color, 15%); }</p><p>@color-new: dark;</p><p>.line { .mixin(@color-new; #FF0000); } .line { color: #b30000; }</p><h3 id="less-mixins函数" tabindex="-1"><a class="header-anchor" href="#less-mixins函数"><span>less mixins函数</span></a></h3><p>混合和函数的工作方式非常相似。 类似的函数，mixins可以嵌套，可以接受参数和返回值。</p><p>less mixin范围 在调用者的作用域内，调用者的变量最大，调用mixin后仍会被变量覆盖掉，下面的demo返回了一个变量来给myclass调用</p><p>.mixin() { @bgcolor: #C0C0C0; } .myclass{ .mixin(); background-color: @bgcolor; } .myclass { background-color: #C0C0C0; }</p><h3 id="less-mixin返回值" tabindex="-1"><a class="header-anchor" href="#less-mixin返回值"><span>less mixin返回值</span></a></h3><p>.padding(@x, @y) { @padding: ((@x + @y) / 2); }</p><p>.myclass{ .padding(80px, 120px); // call to the mixin padding-left: @padding; // returns the value } .myclass { padding-left: 100px; } mixin定义在另一个mixin中 当一个mixin定义在另一个mixin中，它也可以作为返回值。</p><p>.outerMixin(@value) { .nestedMixin() { font-size: @value; } } .myclass { .outerMixin(30); .nestedMixin(); } .myclass { font-size: 30; }</p><h3 id="less将规则集传递给mixins" tabindex="-1"><a class="header-anchor" href="#less将规则集传递给mixins"><span>less将规则集传递给mixins</span></a></h3><p>less当中可以使用一个变量，来存储属性，嵌套规则集，变量声明，mixins等，当其他结构调用该规则集的时候，所有的属性都将被复制到该结构。</p><p>@detached-ruleset: { .mixin() { font-family: &quot;Comic Sans MS&quot;; background-color: #AA86EE; } };</p><p>.cont { @detached-ruleset(); .mixin(); } 该demo定义了规则集，在cont中调用，之后调用mixin。</p><p>.cont { font-family: &quot;Comic Sans MS&quot;; background-color: #AA86EE; }</p><h3 id="less定义和规则范围可见性" tabindex="-1"><a class="header-anchor" href="#less定义和规则范围可见性"><span>less定义和规则范围可见性</span></a></h3><p>@detached-ruleset: { background-color: @caller-variable; .caller-mixin(); };</p><p>.cont { @detached-ruleset();</p><p>@caller-variable: #AA86EE; .caller-mixin() { font-style:italic; } } 该demo先定义了规则集，但规则集当中的变量和mixin并没有定义，是在cont调用该规则集后才定义的，这种做法是支持的。</p><p>cont { background-color: #AA86EE; font-style: italic; } 分离的规则集可以通过导入到范围来使用 #id { .style() { @detached: { font-style: @font; }; } }</p><p>.container() { @font: italic; #id &gt; .style(); }</p><p>.cont { .container(); @detached(); } .cont { font-style: italic; } less mixin guards 类似于受保护的命名空间，该方式是作为mixin的条件的。</p><p>demo：</p><p>.mixin (@a) when (@a &gt; 22px){ color:blue; }</p><p>.mixin (@a) when (@a &lt;= 20px){ color:red; }</p><p>.mixin (@a) { font-size: @a; }</p><p>.myclass { .mixin(20px) } 上述demo是一个添加了判断的guard，并且还有别的匹配一块进行调用，因此最后结果为：</p><p>.myclass { color: red; font-size: 20px; }</p><h3 id="less循环" tabindex="-1"><a class="header-anchor" href="#less循环"><span>less循环</span></a></h3><p>一个循环demo：</p><p>.test(@x) when (@x&gt;0){ .test((@x - 1)); height : (@x * 25px); }; .myclass{ .test(8); }; 结果：</p><p>.myclass { height: 25px; height: 50px; height: 75px; height: 100px; height: 125px; height: 150px; height: 175px; height: 200px; } 我们可以很清晰的看出来其实本质是使用了一个递归的方式来实现循环的。</p><p>less合并 less合并逗号 .myfunc() { box-shadow+: 5px 5px 5px grey; } .class { .myfunc(); box-shadow+: 0 0 5px #f78181; } 先定义了一个函数，之后在函数体内的样式名称后面添加了一个+，这就是less合并逗号的用法</p><p>.class { box-shadow: 5px 5px 5px grey, 0 0 5px #f78181; }</p><h3 id="less合并空格" tabindex="-1"><a class="header-anchor" href="#less合并空格"><span>less合并空格</span></a></h3><p>.mixin() { transform+<em>: scale(1); } .class { .mixin(); transform+</em>: rotate(2deg); } 该与合并逗号不同的是加号后面跟了一个下划线+_</p><p>结果：</p><p>.class { transform: scale(1) rotate(2deg); }</p><h3 id="less父选择器" tabindex="-1"><a class="header-anchor" href="#less父选择器"><span>less父选择器</span></a></h3><p>嵌套规则的父选择器由＆运算符表示，并在将修改类或伪类应用于现有选择器时使用。</p><p>a { color: #5882FA; &amp;:hover { background-color: #A9F5F2; } } 该demo使用了&amp;运算符来代表a，之后添加了一个hover伪类的样式。</p><p>结果：</p><p>a { color: #5882FA; } a:hover { background-color: red; } less multiple &amp; 通过使用＆运算符，可以重复引用父选择器，而不使用其名称。 在选择器＆中可以多次使用。</p><p>demo：</p><p>.select { &amp; + &amp; { color: #A9F5F2; }</p><p>&amp; &amp; { color: #D0FA58; }</p><p>&amp;&amp; { color: #81BEF7; }</p><p>&amp;, &amp;_class1 { color: #A4A4A4; } }</p><p>.select + .select { color: #A9F5F2; } .select .select { color: #D0FA58; } .select.select { color: #81BEF7; } .select, .select_class1 { color: #A4A4A4; }</p><h3 id="选择器的继承" tabindex="-1"><a class="header-anchor" href="#选择器的继承"><span>选择器的继承</span></a></h3><p>.header { .menu { border-radius: 5px; border: 1px solid red; &amp; { padding-left: 200px; } } }</p><h3 id="组合爆炸" tabindex="-1"><a class="header-anchor" href="#组合爆炸"><span>组合爆炸</span></a></h3><p>p, div { color : red; font-family:Lucida Console; &amp; + &amp; { color : green; background-color: yellow; font-family: &quot;Comic Sans MS&quot;; } } p, div { color: red; font-family: Lucida Console; } p + p, p + div, div + p, div + div { color: green; background-color: yellow; font-family: &quot;Comic Sans MS&quot;;</p>`,153)]))}const c=e(i,[["render",p]]),r=JSON.parse('{"path":"/responsive/less.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"认识less","slug":"认识less","link":"#认识less","children":[]},{"level":3,"title":"less初体验","slug":"less初体验","link":"#less初体验","children":[]},{"level":3,"title":"less变量","slug":"less变量","link":"#less变量","children":[]},{"level":3,"title":"变量插值","slug":"变量插值","link":"#变量插值","children":[]},{"level":3,"title":"less选择器","slug":"less选择器","link":"#less选择器","children":[]},{"level":3,"title":"less url","slug":"less-url","link":"#less-url","children":[]},{"level":3,"title":"less import","slug":"less-import","link":"#less-import","children":[]},{"level":3,"title":"less属性","slug":"less属性","link":"#less属性","children":[]},{"level":3,"title":"Less 变量名称","slug":"less-变量名称","link":"#less-变量名称","children":[]},{"level":3,"title":"延迟加载","slug":"延迟加载","link":"#延迟加载","children":[]},{"level":3,"title":"less导入","slug":"less导入","link":"#less导入","children":[]},{"level":3,"title":"less的命名空间和访问器","slug":"less的命名空间和访问器","link":"#less的命名空间和访问器","children":[]},{"level":3,"title":"less拓展","slug":"less拓展","link":"#less拓展","children":[]},{"level":3,"title":"拓展附加到选择器","slug":"拓展附加到选择器","link":"#拓展附加到选择器","children":[]},{"level":3,"title":"拓展内部规则集","slug":"拓展内部规则集","link":"#拓展内部规则集","children":[]},{"level":3,"title":"less的嵌套规则","slug":"less的嵌套规则","link":"#less的嵌套规则","children":[]},{"level":3,"title":"less混和","slug":"less混和","link":"#less混和","children":[]},{"level":3,"title":"less不输出mixins","slug":"less不输出mixins","link":"#less不输出mixins","children":[]},{"level":3,"title":"mixins中的选择器","slug":"mixins中的选择器","link":"#mixins中的选择器","children":[]},{"level":3,"title":"mixin的命名空间","slug":"mixin的命名空间","link":"#mixin的命名空间","children":[]},{"level":3,"title":"less保护的命名空间","slug":"less保护的命名空间","link":"#less保护的命名空间","children":[]},{"level":3,"title":"less混合参数","slug":"less混合参数","link":"#less混合参数","children":[]},{"level":3,"title":"less 命名参数","slug":"less-命名参数","link":"#less-命名参数","children":[]},{"level":3,"title":"less模式匹配","slug":"less模式匹配","link":"#less模式匹配","children":[]},{"level":3,"title":"less mixins函数","slug":"less-mixins函数","link":"#less-mixins函数","children":[]},{"level":3,"title":"less mixin返回值","slug":"less-mixin返回值","link":"#less-mixin返回值","children":[]},{"level":3,"title":"less将规则集传递给mixins","slug":"less将规则集传递给mixins","link":"#less将规则集传递给mixins","children":[]},{"level":3,"title":"less定义和规则范围可见性","slug":"less定义和规则范围可见性","link":"#less定义和规则范围可见性","children":[]},{"level":3,"title":"less循环","slug":"less循环","link":"#less循环","children":[]},{"level":3,"title":"less合并空格","slug":"less合并空格","link":"#less合并空格","children":[]},{"level":3,"title":"less父选择器","slug":"less父选择器","link":"#less父选择器","children":[]},{"level":3,"title":"选择器的继承","slug":"选择器的继承","link":"#选择器的继承","children":[]},{"level":3,"title":"组合爆炸","slug":"组合爆炸","link":"#组合爆炸","children":[]}],"git":{},"filePathRelative":"responsive/less.md"}');export{c as comp,r as data};
