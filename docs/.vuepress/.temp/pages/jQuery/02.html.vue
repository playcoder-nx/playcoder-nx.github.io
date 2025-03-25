<template><div><h1 id="js-的语法结构" tabindex="-1"><a class="header-anchor" href="#js-的语法结构"><span><code v-pre>js</code> 的语法结构</span></a></h1>
<h2 id="javascript代码引入方式" tabindex="-1"><a class="header-anchor" href="#javascript代码引入方式"><span><code v-pre>JavaScript</code>代码引入方式</span></a></h2>
<p>在网页中编写<code v-pre>JavaScript</code>代码时，需要先引入<code v-pre>JavaScript</code> 代码。</p>
<p><code v-pre>JavaScript</code> 代码有  3 种引入方式。</p>
<ul>
<li><strong>行内式</strong></li>
<li><strong>嵌入式</strong></li>
<li><strong>外链式</strong></li>
</ul>
<h3 id="行内式" tabindex="-1"><a class="header-anchor" href="#行内式"><span>行内式：</span></a></h3>
<p>​	行内式是将<code v-pre>JavaScript</code>代码作为<code v-pre>HTML</code>标签的属性值使用。</p>
<p>​	<font color="red" style="font-weight:bold;"><code v-pre>&lt;a href=&quot;javascript:alert('Hello');&quot;&gt;test&lt;/a&gt;</code></font></p>
<h4 id="行内式的缺点如下" tabindex="-1"><a class="header-anchor" href="#行内式的缺点如下"><span>行内式的缺点如下：</span></a></h4>
<p>​	可读性较差，尤其是在 <code v-pre>HTML</code> 中编写大量 <code v-pre>JavaScript</code> 代码时，不方便阅读。</p>
<p>​	在遇到多层引号嵌套的情况时，引号非常容易混淆，导致代码出错。</p>
<h3 id="嵌入式" tabindex="-1"><a class="header-anchor" href="#嵌入式"><span>嵌入式：</span></a></h3>
<p>​	也称为内嵌式，使用<code v-pre>&lt;script&gt;</code>标签包裹<code v-pre>JavaScript</code>代码，直接编写到<code v-pre>HTML</code>文件中，通常将其放到<code v-pre>&lt;head&gt;</code>标签或<code v-pre>&lt;body&gt;</code>标签中。</p>
<p>​	<font color="red" style="font-weight:bold;"><code v-pre>&lt;script&gt;JavaScript代码&lt;/script&gt;</code></font></p>
<h4 id="嵌入式的缺点如下" tabindex="-1"><a class="header-anchor" href="#嵌入式的缺点如下"><span>嵌入式的缺点如下：</span></a></h4>
<p>​	<code v-pre>&lt;script&gt;</code>标签的<code v-pre>type</code>属性用于告知浏览器脚本类型， <code v-pre>HTML5</code>中该属性的默认值为 “<code v-pre>text/javascript</code>”， 因此在使用<code v-pre>HTML5</code>时可以省略 <code v-pre>type</code> 属性。</p>
<h3 id="外链式" tabindex="-1"><a class="header-anchor" href="#外链式"><span>外链式：</span></a></h3>
<p>​	或称为外部式，是将<code v-pre>JavaScript</code>代码写在一个单独的文件中，一般使用“<code v-pre>.js</code>”作为文件的扩展名，在<code v-pre>HTML</code>页面中使用<code v-pre>&lt;script&gt;</code>标签的<code v-pre>src</code>属性引入“<code v-pre>.js</code>”文件。</p>
<font color="red" style="font-weight:bold;">`<script src="test.js"></script>`</font><h4 id="外链式的缺点如下" tabindex="-1"><a class="header-anchor" href="#外链式的缺点如下"><span>外链式的缺点如下:</span></a></h4>
<p>​	外链式适合<code v-pre>JavaScript</code>代码量比较多的情况。</p>
<blockquote>
<p>外链式相比嵌入式，具有以下3点 <font color="red">优势</font>：</p>
<ul>
<li>
<p>外链式存在于独立文件中，有<font color="red">利于修改和维护</font>，而嵌入式会导致<code v-pre>HTML</code>与<code v-pre>JavaScript</code>代码混合在一起。</p>
</li>
<li>
<p>外链式可以<font color="red">利用浏览器缓存提高速度</font>。</p>
</li>
<li>
<p>外链式有利于<code v-pre>HTML</code>页面代码结构化，把大段的<code v-pre>JavaScript</code>代码分离到<code v-pre>HTML</code>页面之外，既美观，也方便文件级别的<font color="red">代码复用</font>。</p>
</li>
</ul>
</blockquote>
<h3 id="输入输出语句" tabindex="-1"><a class="header-anchor" href="#输入输出语句"><span>输入输出语句</span></a></h3>
<table>
<thead>
<tr>
<th><strong>类型</strong></th>
<th><strong>语句</strong></th>
<th><strong>描述</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>输入</td>
<td><code v-pre>prompt()</code></td>
<td>用于在浏览器中弹出输入框，用户可以输入内容</td>
</tr>
<tr>
<td>输出</td>
<td><code v-pre>alert()</code></td>
<td>用于在浏览器中弹出警告框</td>
</tr>
<tr>
<td>输出</td>
<td><code v-pre>document.write()</code></td>
<td>用于在网页中输出内容</td>
</tr>
<tr>
<td>输出</td>
<td><code v-pre>console.log()</code></td>
<td>用于在控制台中输出信息</td>
</tr>
</tbody>
</table>
<h3 id="javascript注释" tabindex="-1"><a class="header-anchor" href="#javascript注释"><span><code v-pre>JavaScript</code>注释</span></a></h3>
<p>​	<code v-pre>JavaScript</code>中注释的分类如下：</p>
<ul>
<li>
<p>单行注释：以“//”开始，到该行结束之前的内容都是注释。</p>
</li>
<li>
<p>多行注释：以“/<em>”开始，以“</em>/”结束。多行注释中可以嵌套单行注释，但不能再嵌套多行注释。</p>
</li>
</ul>
<blockquote>
<p>在 Visual Studio Code 编辑器中，单行注释使用快捷键 “<font color="red">Ctrl+/</font>” ，多行注释使用快捷键 “<font color="red">Shift+Alt+A</font>” 。</p>
</blockquote>
</div></template>


