<template><div><h2 id="_3-8-遍历元素" tabindex="-1"><a class="header-anchor" href="#_3-8-遍历元素"><span>3.8 遍历元素</span></a></h2>
<p>在 DOM 元素操作中，有时需要对同一标记的全部元素进行统一操作。在传统的 <code v-pre>JavaScript</code> 中，先获取元素的总长度，然后，以fr循环语句，递减总长度，访问其中的某个元素，代码相对复杂:而在<code v-pre>jQuery</code>中，可以直接使用 <code v-pre>each()</code> 方法实现元素的遍历。其语法格式如下:
<code v-pre>each(callback)</code></p>
<p>其中，参数 callback 是一个 function函数，该函数还可以接受一个形参index，此形参为遍历元素的序号(从0开始):如果需要访问元素中的属性，可以借助形参index，配合this 关键字来实现元素属性的设置或获取。</p>
<p>示例3-17演示了调用 each() 方法，遍历全部元素，获取每个元素属性的过程。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


