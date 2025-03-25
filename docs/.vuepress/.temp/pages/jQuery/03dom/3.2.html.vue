<template><div><h1 id="_3-2-访问元素" tabindex="-1"><a class="header-anchor" href="#_3-2-访问元素"><span>3.2 访问元素</span></a></h1>
<p>在访问页面时，需要与页面中的元素进行交互式的操作。在操作中，元素的访问是最频繁、最常用的，主要包括对元素属性、内容、值、CSS的操作。下面通过实例详细介绍这些操作的使用方法和技巧。</p>
<h2 id="_3-2-1-元素属性操作" tabindex="-1"><a class="header-anchor" href="#_3-2-1-元素属性操作"><span>3.2.1 元素属性操作</span></a></h2>
<p>在jQuery 中，可以对元素的属性执行获取、设置、删除的操作，通过 attr() 方法可以对元素属性执行获取和设置操作，而 <code v-pre>removeAttr()</code>方法则可以轻松删除某一指定的属性。</p>
<h3 id="_1-获取元素的属性" tabindex="-1"><a class="header-anchor" href="#_1-获取元素的属性"><span>1.获取元素的属性</span></a></h3>
<p>获取元素属性的语法格式如下:</p>
<p><code v-pre>attr(name)</code></p>
<p>其中，参数 name 表示属性的名称。</p>
<p>示例3-2将介绍如何通过调用attr()方法，以元素属性名称为参数的方式，来获取元素的属性的过程。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-设置元素的属性" tabindex="-1"><a class="header-anchor" href="#_2-设置元素的属性"><span>2.设置元素的属性</span></a></h3>
<p>在页面中，attr() 方法不仅可以获取元素的属性值，还可以设置元素的属性，其设置属性语法格式如下所示:</p>
<p><code v-pre>attr(key,value)</code></p>
<p>其中，参数 key 表示属性的名称，value 表示属性的值。</p>
<p>如果要设置多个属性，也可以通过 attr()方法实现，其语法格式如下所示:</p>
<p><code v-pre>attr({key0:value0,keyl:value1})</code></p>
<p>另外,<code v-pre>attr()</code>方法还可以绑定一个 <code v-pre>function()</code>函数，通过该函数返回的值作为元素的属性值,其语法格式如下所示:</p>
<p><code v-pre>attr(key,function(index))</code></p>
<p>其中，参数 index 为当前元素的索引号，整个函数返回一个字符串作为元素的属性值</p>
<h3 id="_3-删除元素的属性" tabindex="-1"><a class="header-anchor" href="#_3-删除元素的属性"><span>3.删除元素的属性</span></a></h3>
<p><code v-pre>jQuery</code> 中通过 <code v-pre>attr()</code>方法设置元素的属性后，使用 <code v-pre>removeAttr()</code>方法可以将元素的属性删除，其使用的语法格式为:</p>
<p><code v-pre>removeAttr(name)</code></p>
<p>其中，参数 name 为元素属性的名称。</p>
<p>例如，可以通过如下的代码删除标记<code v-pre>&lt;img&gt;</code>中的<code v-pre>src</code> 属性:</p>
<p><code v-pre>$(&quot;img&quot;).removeAttr(&quot;src&quot;);</code></p>
<h2 id="_3-2-2-元素内容操作" tabindex="-1"><a class="header-anchor" href="#_3-2-2-元素内容操作"><span>3.2.2 元素内容操作</span></a></h2>
<p>在<code v-pre>jQuery</code> 中，操作元素内容的方法包括<code v-pre>html()</code>和<code v-pre>text()</code>。前者与<code v-pre>JavaScript</code>中的<code v-pre>innerHTML</code>属性类似，即获取或设置元素的HMTL内容;后者类似于<code v-pre>JavaScript</code>中的<code v-pre>innerText</code>属性，即获取或设置元素的文本内容。</p>
<p>二者的格式与功能的区别如表3-1所示。</p>
<table>
<thead>
<tr>
<th style="text-align:left">语法格式</th>
<th style="text-align:left">参数说明</th>
<th style="text-align:left">功能描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">html()</td>
<td style="text-align:left">无参数</td>
<td style="text-align:left">获取元素的HTML内容</td>
</tr>
<tr>
<td style="text-align:left">html(value)</td>
<td style="text-align:left">参数value为元素HTML的内容</td>
<td style="text-align:left">设置元素的HTML内容</td>
</tr>
<tr>
<td style="text-align:left">text()</td>
<td style="text-align:left">无参数</td>
<td style="text-align:left">获取元素的文本内容</td>
</tr>
<tr>
<td style="text-align:left">text(value)</td>
<td style="text-align:left">参数value为元素文本的内容</td>
<td style="text-align:left">设置元素的文本内容</td>
</tr>
</tbody>
</table>
<h3 id="_3-2-3-获取或设置元素值" tabindex="-1"><a class="header-anchor" href="#_3-2-3-获取或设置元素值"><span>3.2.3 获取或设置元素值</span></a></h3>
<p>在jQuery 中，如果要获取元素的值，是通过 <code v-pre>val()</code>方法实现的，其语法格式如下所示:
<code v-pre>val(val)</code></p>
<p>其中，如果不带参数 <code v-pre>val</code>，则是获取某元素的值;反之，则是将参数 <code v-pre>val</code>的值赋给某元素，即设置元素的值。</p>
<p>该方法常用于表单中获取或设置对象的值。另外，通过 <code v-pre>val()</code>方法还可以获取 select 标记中的多个选项值，其语法格式如下所示
<code v-pre>val().join(&quot;.&quot;)</code></p>
<h3 id="_3-2-4-元素样式操作" tabindex="-1"><a class="header-anchor" href="#_3-2-4-元素样式操作"><span>3.2.4 元素样式操作</span></a></h3>
<p>在页面中，元素样式的操作包含:直接设置样式、增加CSS 类别、类别切换、删除类别几部分。</p>
<p>下面通过示例介绍其使用的语法和方法。</p>
<h4 id="_1-直接设置元素样式值" tabindex="-1"><a class="header-anchor" href="#_1-直接设置元素样式值"><span>1.直接设置元素样式值</span></a></h4>
<p>在jQuery 中，可以通过 css()方法为某个指定的元素设置样式值，其语法格式如下所示:
<code v-pre>css(name,value)</code>
其中name为样式名称，value 为样式的值。</p>
<h4 id="_2-增加-css-类别" tabindex="-1"><a class="header-anchor" href="#_2-增加-css-类别"><span>2.增加 CSS 类别</span></a></h4>
<p>通过 <code v-pre>addClass()</code>方法增加元素类别的名称，其语法格式如下:
<code v-pre>addclass(class)</code>
其中，参数 class 为类别的名称，也可以增加多个类别的名称，只需要用空格将其隔开即可其语法格式为:
<code v-pre>addclass(class0 class1...) </code></p>
<h4 id="_3-类别切换" tabindex="-1"><a class="header-anchor" href="#_3-类别切换"><span>3. 类别切换</span></a></h4>
<p>通过 <code v-pre>toggleClass()</code>方法切换不同的元素类别，其语法格式如下:
<code v-pre>toggleClass(class)</code>
其中参数 class为类别名称，其功能是当元素中含有名称为<code v-pre>class</code>的CSS类别时，删除该类别,否则增加一个该名称的 CSS 类别。</p>
<h4 id="_4-删除类别" tabindex="-1"><a class="header-anchor" href="#_4-删除类别"><span>4.删除类别</span></a></h4>
<p>与增加 CSS 类别的 <code v-pre>addClass()</code>方法相对应，<code v-pre>removeClass()</code>方法则用于删除类别，其语法格式如下:
<code v-pre>removeClass([class])</code>
其中，参数 class为类别名称，该名称是可选项，当选该名称时，则删除名称是class的类别，有多个类别时用空格隔开。如果不选名称，则删除元素中的所有类别。如果要删除p标记是cls0的类别，可以使用如下的代码:
<code v-pre>$(&quot;p&quot;).removeClass(&quot;cls0&quot;);</code></p>
</div></template>


