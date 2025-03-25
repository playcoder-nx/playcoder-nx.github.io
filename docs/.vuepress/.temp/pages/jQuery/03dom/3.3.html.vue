<template><div><h1 id="_3-3-创建节点元素" tabindex="-1"><a class="header-anchor" href="#_3-3-创建节点元素"><span>3.3 创建节点元素</span></a></h1>
<p>在本章开始时，我们讲过整个页面是一个 DOM 模型，I页面中的各元素通过模型的节点相互关联形成树状，因此，如果要在页面中增加某个元素，只需要找到元素的上级节点，通过函数 $(html)完成元素的创建后，增加到该节点中。函数$()用于动态创建页面元素，其语法格式如下:
<code v-pre>$(html)</code>
其中，参数 btml表示用于动态创建 DOM 元素的 HTML标记字符串，即如果要在页面中动态创建一个 div 标记，并设置其内容和属性，可以加入如下代码:</p>
<div class="language-javaScript line-numbers-mode" data-highlighter="prismjs" data-ext="javaScript"><pre v-pre><code><span class="line">var $div =$(&quot;&lt;div title='jQuery理念'&gt;Write Less Do More&lt;/div&gt;&quot;);</span>
<span class="line">$(&quot;body&quot;).append($div);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上述代码后，将在页面文档body中创建一个div标记，其内容为 <strong>“Write Less DoMore”</strong>，属性 title 的值为 <strong>“jQuery 理念”</strong>。</p>
</div></template>


