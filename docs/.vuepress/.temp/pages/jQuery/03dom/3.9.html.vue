<template><div><h2 id="_3-9-删除元素" tabindex="-1"><a class="header-anchor" href="#_3-9-删除元素"><span>3.9 删除元素</span></a></h2>
<p>在 DOM 操作页面时，删除多余或指定的页面元素是非常必要的，jQuery提供了两种可以删除元素的方法，即remove()和empty()。严格来说，empty()方法并非真正意义上的删除，使用该方法，仅仅可以清空全部的节点或节点所包括的所有后代元素，并非删除节点和元素。
remove()方法的语法格式如下:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">[</span>expr<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其中参数 expr 为可选项，如果接受参数，则该参数为筛选元素的jQuery表达式，通过该表述式获取指定的元素，并进行删除。
<code v-pre>empty()</code>方法的语法格式如下</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其功能为清空所选择的页面元素或所有的后代元素。</p>
<p>示例 3-18说明了调用remove()方法，删除某个页面元素的的过程</p>
</div></template>


