
### 认识less

#### 特征：

- 更清晰和更可读的代码可以以有组织的方式编写。

- 我们可以定义样式，它可以在整个代码中重复使用。

- LESS是基于JavaScript的，是超集的CSS。

- LESS是一个敏捷工具，可以排除代码冗余的问题。

  #### 优点

- LESS轻松地生成可在浏览器中工作的CSS。

- LESS使您能够使用嵌套编写更干净，组织良好的代码。

- 通过使用变量可以更快地实现维护。

- LESS使您能够通过在规则集中引用它们来轻松地重用整个类。

- LESS提供使用操作，使得编码更快并节省时间。

  #### 缺点：

- 学习如果你是新的CSS预处理需要时间。

- 由于模块之间的紧密耦合，应当采取更多的努力来重用和/或测试依赖模块。

- 与旧的预处理器(例如Sass)相比，LESS具有较少的框架，Sass由框架 Compass ， Gravity和 Susy 组成。

### less初体验

style.less:

``````less
@primarycoloer: red;
@color:blue;
h1{
    color: @primarycoloer;
}
h3{
    color: @color;
}
``````



通过命令lessc style.less style.css来将less编译为css样式

``````css
style.css:

h1 {
  color: red;
}
h3 {
  color: blue;
}
``````



### less变量

``````less
@var: @a;
@a: 15px;

.myclass {
  font-size: @var;
  @a:20px;
  color: green;
}
``````

效果：

``````css
.myclass {
  font-size: 20px;
  color: green;
} 
``````

该demo定义了var这个变量指向a，之后定义a为20

但是实际在下方显示var为15，是因为less类似于css，延迟加载，最终的定义才是结果。（自底向上）

### 变量插值

### less选择器

选择器可以引用任何变量，它是在编译时构建的。变量名称必须放在用@符号前缀的花括号（{}）内。

@selector: h2;

@{selector} {
  background: #2ECCFA;
}
注意使用选择器变量的时候需要在@后加入花括号，而作为值的变量并不需要。

### less url

@images: "http://www.wxxx.cn";

.myclass {
  background : url("@{images}/less/images/less_variables/birds.jpg");
  width:800px;
  height:500px;
}
同上述的选择器变量，url变量也需要加入花括号（该变量是在字符串里面的值）

### less import

@path : "//www.wxx.cn/less";
@import "@{path}/external1.less";
.myclass{
 color : #A52A2A;
}
类似于上面的url变量，该变量也是在字符串包括当中。

### less属性

@my-property: color;
.myclass {
  background-@{my-property}: #81F7D8;
}
该属性定义的值为color，之后在使用时同其他插值变量。

### Less 变量名称

.myclass{
  @col: #ca428b;
  @color: "col";
  background-color: @@color;
}
该demo定义了两个变量，其中一个变量的值是另一个变量的变量名称。

### 延迟加载

p {
  font-size: @a;
  color: #ca428b;
}
@a: @b;
@b: 25px;
在未定义变量的时候也可以使用该变量，有点类似于JavaScript的提升

### less导入

在less中可以使用@import来导入外部的文件。

@import "style"; // imports the style.less

@import "style.less"; // imports the style.less

@import "style.php"; // imports the style.php as a less file

@import "style.css"; // it will kept the statement as it is

.myclass{
    color: #FF8000;
}

.myclass1{
    color: #5882FA;
}

 

@import "//www.w3cschool.cn/less/myfile.less";
.myclass2
{
color: #FF0000;
}
less导入使用@import语句，之后空格后跟字符串，字符串代表的是另一个less文件的路径。

### less的命名空间和访问器

.class1 {
  .class2 {
    .val(@param) {
      font-size: @param;
      color:green;
    }
  }
}

.myclass {
  .class1 > .class2 > .val(20px);
}
在myclass当中调用.val函数，之后的结果：

.myclass {
  font-size: 20px;
  color: green;
}

### less拓展

初识拓展：

h2 {
  &:extend(.style);
  font-style: italic;
}
.style {
  background: green;
}
拓展的语句在其中使用&:exteng(.style)，可以将其他样式拓展到当前的匹配当中，最终结果：

h2 {
  font-style: italic;
}
.style,
h2 {
  background: green;
}
拓展也可以放在选择器当中：

.style:extend(.container, .img)
{
  background: #BF70A5;
}
.container {
  font-style: italic;
}
.img{
   font-size: 30px;
 }
该.style拓展了.container和.img的样式到自己，直接写在了选择器当中作为一个伪类的形式

.style {
  background: #BF70A5;
}
.container,
.style {
  font-style: italic;
}
.img,
.style {
  font-size: 30px;
}

### 拓展附加到选择器

.style,
.container:extend(.img){
   background: #BF70A5;
}
.img{
   font-size: 45px;
   font-style: italic;
}
该demo在.container选择器后使用了伪类的形式拓展了.img的样式，（不包括style)

结果：

.style,
.container {
  background: #BF70A5;
}
.img,
.container {
  font-size: 45px;
  font-style: italic;
}

### 拓展内部规则集

&:extend(selector) 语法可以放在规则集的正文中。 它是放置扩展到规则集的每个选择器的快捷方式。

.container,
.style {
     &:extend(.img);
}
.img{
    font-style: italic;
    background-color: #7B68EE;
 }
结果：

.img,
.container,
.style {
  font-style: italic;
  background-color: #7B68EE;
}
拓展嵌套选择器
.style {
  h3{
	color: #BF70A5;
	font-size: 30px;
}
}
.img:extend(.style h3){}
该demo使用extend拓展了上述的嵌套选择器给自己

.style h3,
.img {
  	color: #BF70A5;
 	font-size: 30px;
}

### less的嵌套规则

.container{
  h1{
       font-size: 25px;
       color:#E45456;
 }
  p{
       font-size: 25px;
       color:#3C7949;
  }

 .myclass{
  h1{
        font-size: 25px;
        color:#E45456;
  }
  p{
       font-size: 25px;
       color:#3C7949;
  }
 }
}

结果：

.container h1 {
  font-size: 25px;
  color: #E45456;
}
.container p {
  font-size: 25px;
  color: #3C7949;
}
.container .myclass h1 {
  font-size: 25px;
  color: #E45456;
}
.container .myclass p {
  font-size: 25px;
  color: #3C7949;
}

### less混和

less当中的混和类似于编程语言的函数。Mixins是一组CSS属性，允许您将一个类的属性用于另一个类，并且包含类名作为其属性。 在LESS中，可以使用类或id选择器以与CSS样式相同的方式声明mixin。 它可以存储多个值，并且可以在必要时在代码中重复使用。

初识：

.p1{
  color:red;
}
.p2{
  background : #64d9c0;
  .p1();
}
.p3{
   background : #DAA520;
  .p1;
}
结果：

.p1 {
  color: red;
}
.p2 {
  background: #64d9c0;
  color: red;
}
.p3 {
  background: #DAA520;
  color: red;
}
在该demo当中，p2和p3调用了mixins，括号是可以选择的，所以上述后两个结果是一样的。

### less不输出mixins

在创建一个mixins时给函数（选择器名称）后添加一个括号，可以在调用后消失该规则。

demo：

.a(){
   background-color: red;
};
.test{
   .a();
};
该demo定义了一个a()，在.test当中调用后，其代码并没有对a标签做任何的改变

结果：

.test {
  background-color: red;
}

### mixins中的选择器

mixins不仅可以包含属性，还可以包含选择器。

.mixin() {
  &:hover {
    background: #FFC0CB;
  }
}
a {
  .mixin();
}
该demo写了&:hover，在a中调用的时候，会自动变为a:hover

a:hover {
  background: #FFC0CB;
}

### mixin的命名空间

类似于上述的命名空间和访问器的用法

#outer() {
  background:yellow;
  .inner {
    color: red;
  }
}
p {
  #outer > .inner;
}
结果：

p {
  color: red;
}

### less保护的命名空间

@import "//www.w3cschool.cn/less/lib.less";
#namespace when (@color = blue) {
  .mixin() {
   color: red;
  }
}
p{
 #namespace .mixin();
}
该demo只有在导入的时候color是蓝的才可以访问mixin函数。（p选择器当中的样式如果color不是蓝无法调用.mixin()）

p {
  color: red;
}

### less混合参数

.border(@width; @style; @color) {
    border: @width @style @color;
}

.myheader {
    .border(2px; dashed; green);
}
这里分别定义了三个参数：border的宽度样式和颜色。

less mixins具有多个参数
.mixin_name(@var_name1; @var_name2:some){
   //code here
}
.mixin(@color; @padding: 2) {
  color: @color;
  padding: @padding;
}

.myclass {
  .mixin(#FE9A2E);
}
上述padding有默认值，因此编译后的结果为：

.myclass {
  color: #FE9A2E;
  padding: 2;
}

### less 命名参数

less的mixins参数并不取决于位置，没有任何的放置顺序，可以通过名称来引用。

.mixin(@color: black; @fontSize: 10px) {
  color: @color;
  font-size: @fontSize;
}
.class1 {
  .mixin(@fontSize: 20px; @color: #F5A9D0);
}
.class2 {
  .mixin(#F79F81; @fontSize: 20px);
}
结果：

.class1 {
  color: #F5A9D0;
  font-size: 20px;
}
.class2 {
  color: #F79F81;
  font-size: 20px;
}
less @arguments variable
当你不想使用单个参数的时候，该变量可以替代所有的参数。

demo：

.box-shadow(@x: 0; @y: 0; @height: 3px; @width: 3px) {
  -webkit-box-shadow: @arguments;
     -moz-box-shadow: @arguments;
          box-shadow: @arguments;
}
.myclass {
  .box-shadow(2px; 2px);
}
.myclass {
  -webkit-box-shadow: 2px 2px 3px 3px;
  -moz-box-shadow: 2px 2px 3px 3px;
  box-shadow: 2px 2px 3px 3px;
}

### less模式匹配

理解为多态，传入不同的参数控制不同的行为。

.mixin(dark; @color) {
  color: darken(@color, 15%);
}
.mixin(light; @color) {
  color: lighten(@color, 15%);
}

@color-new: dark;

.line {
  .mixin(@color-new; #FF0000);
}
.line {
  color: #b30000;
}

### less mixins函数

混合和函数的工作方式非常相似。 类似的函数，mixins可以嵌套，可以接受参数和返回值。

less mixin范围
在调用者的作用域内，调用者的变量最大，调用mixin后仍会被变量覆盖掉，下面的demo返回了一个变量来给myclass调用

.mixin() {
  @bgcolor: #C0C0C0;
}
.myclass{
  .mixin();
  background-color: @bgcolor;
}
.myclass {
  background-color: #C0C0C0;
}

### less mixin返回值

.padding(@x, @y) {
  @padding: ((@x + @y) / 2);
}

.myclass{
  .padding(80px, 120px);  // call to the mixin
  padding-left: @padding; //  returns the value
}
.myclass {
  padding-left: 100px;
}
mixin定义在另一个mixin中
当一个mixin定义在另一个mixin中，它也可以作为返回值。

.outerMixin(@value) {
  .nestedMixin() {
    font-size: @value;
  }
}
.myclass {
  .outerMixin(30);
  .nestedMixin();
}
.myclass {
  font-size: 30;
}

### less将规则集传递给mixins

less当中可以使用一个变量，来存储属性，嵌套规则集，变量声明，mixins等，当其他结构调用该规则集的时候，所有的属性都将被复制到该结构。

@detached-ruleset: {
    .mixin() {
        font-family: "Comic Sans MS";
        background-color: #AA86EE;
    }
};

.cont {
    @detached-ruleset();
    .mixin();
}
该demo定义了规则集，在cont中调用，之后调用mixin。

.cont {
  font-family: "Comic Sans MS";
  background-color: #AA86EE;
}

### less定义和规则范围可见性

@detached-ruleset: {
  background-color: @caller-variable;
  .caller-mixin();
};

.cont {
  @detached-ruleset();

  @caller-variable: #AA86EE;
  .caller-mixin() {
    font-style:italic;
  }
}
该demo先定义了规则集，但规则集当中的变量和mixin并没有定义，是在cont调用该规则集后才定义的，这种做法是支持的。

cont {
  background-color: #AA86EE;
  font-style: italic;
}
分离的规则集可以通过导入到范围来使用
#id {
  .style() {
    @detached: { font-style: @font; };
  }
}

.container() {
  @font: italic;
  #id > .style();
}

.cont {
  .container();
   @detached();
}
.cont {
  font-style: italic;
}
less mixin guards
类似于受保护的命名空间，该方式是作为mixin的条件的。

demo：

.mixin (@a) when (@a > 22px){
color:blue;
}

.mixin (@a) when (@a <= 20px){
color:red;
}

.mixin (@a) {
  font-size: @a;
}

.myclass { .mixin(20px) }
上述demo是一个添加了判断的guard，并且还有别的匹配一块进行调用，因此最后结果为：

.myclass {
  color: red;
  font-size: 20px;
}

### less循环

一个循环demo：

.test(@x) when (@x>0){
    .test((@x - 1));
    height : (@x * 25px);
};
.myclass{
    .test(8);
};
结果：

.myclass {
  height: 25px;
  height: 50px;
  height: 75px;
  height: 100px;
  height: 125px;
  height: 150px;
  height: 175px;
  height: 200px;
}
我们可以很清晰的看出来其实本质是使用了一个递归的方式来实现循环的。

less合并
less合并逗号
.myfunc() {
  box-shadow+: 5px 5px 5px grey;
}
.class {
  .myfunc();
  box-shadow+: 0 0 5px #f78181;
}
先定义了一个函数，之后在函数体内的样式名称后面添加了一个+，这就是less合并逗号的用法

.class {
  box-shadow: 5px 5px 5px grey, 0 0 5px #f78181;
}

### less合并空格

.mixin() {
  transform+_: scale(1);
}
.class {
  .mixin();
  transform+_: rotate(2deg);
}
该与合并逗号不同的是加号后面跟了一个下划线+_

结果：

.class {
  transform: scale(1) rotate(2deg);
}

### less父选择器

 嵌套规则的父选择器由＆运算符表示，并在将修改类或伪类应用于现有选择器时使用。

a {
  color: #5882FA;
  &:hover {
    background-color: #A9F5F2;
  }
}
该demo使用了&运算符来代表a，之后添加了一个hover伪类的样式。

结果：

a {
  color: #5882FA;
}
a:hover {
  background-color: red;
}
less multiple &
通过使用＆运算符，可以重复引用父选择器，而不使用其名称。 在选择器＆中可以多次使用。

demo：

.select {
  & + & {
    color: #A9F5F2;
  }

  & & {
    color: #D0FA58;
  }

  && {
    color: #81BEF7;
  }

  &, &_class1 {
    color: #A4A4A4;
  }
}

.select + .select {
  color: #A9F5F2;
}
.select .select {
  color: #D0FA58;
}
.select.select {
  color: #81BEF7;
}
.select,
.select_class1 {
  color: #A4A4A4;
}

### 选择器的继承

.header {
  .menu {
    border-radius: 5px;
    border: 1px solid red;
    & {
      padding-left: 200px;
    }
  }
}

### 组合爆炸

p, div {
  color : red;
  font-family:Lucida Console;
  & + & {
    color : green;
    background-color: yellow;
    font-family: "Comic Sans MS";
  }
}
p,
div {
  color: red;
  font-family: Lucida Console;
}
p + p,
p + div,
div + p,
div + div {
  color: green;
  background-color: yellow;
  font-family: "Comic Sans MS";

