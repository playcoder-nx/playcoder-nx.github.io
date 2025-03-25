<template><div><h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入"><span>引入</span></a></h2>
<p>如何能最大化地优化页面的用户体验度，是每个前端页面开发人员在设计页面时需要考虑的一个重要问题。无可置疑，jQuery中众多的动画与特效方法为提高页面的用户体验度带来了极大的方便，通过少量的几行代码，就可以实现元素的飞动、淡入淡出等动画效果，还可以自定义各种动画效果。</p>
<h3 id="_5-1显示与隐藏" tabindex="-1"><a class="header-anchor" href="#_5-1显示与隐藏"><span>5.1显示与隐藏 </span></a></h3>
<p>    在页面中，元素的显示与隐藏是使用最频繁的操作，在传统的 JavaScript 中，一般通过改变元素显示的方式实现，下列代码将ID号为“p1”的元素显示出来: </p>
<div class="language-markup line-numbers-mode" data-highlighter="prismjs" data-ext="markup"><pre v-pre><code><span class="line">document .getElementById("p1").style.display = "block";</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果想隐藏该元素，则可以通过下列代码: </p>
<div class="language-markup line-numbers-mode" data-highlighter="prismjs" data-ext="markup"><pre v-pre><code><span class="line">document.getElementById("pl").style.display = "none" ; </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>而在jQuery 中，元素的显示与隐藏的方法比传统的 JavaScript 要多，并且实现的效果也很优雅。</p>
<p>下面我们逐步介绍在jQuery 中如何实现元素的显示与隐藏的方法。</p>
<h4 id="_5-1-1-show-与-hide-方法" tabindex="-1"><a class="header-anchor" href="#_5-1-1-show-与-hide-方法"><span>5.1.1 show()与 hide()方法 </span></a></h4>
<p>我们在前面的章节中不止一次地使用过 show() 与hide() 方法，前者是显示页面中的元素,等同于下列 jQuery 代码:</p>
<div class="language-markup line-numbers-mode" data-highlighter="prismjs" data-ext="markup"><pre v-pre><code><span class="line">$("#p1").css("display":"block"); </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>后者是隐藏页面中的元素，与前者show()的方法正好相反，等同于下列jQuery代码:</p>
<div class="language-markup line-numbers-mode" data-highlighter="prismjs" data-ext="markup"><pre v-pre><code><span class="line">$("#p1").css("display":"none");</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>下面通过一个示例介绍这两个jQuery 方法的使用过程。</p>
<h5 id="示例-5-1-show-与-hide-方法简介" tabindex="-1"><a class="header-anchor" href="#示例-5-1-show-与-hide-方法简介"><span>示例 5-1 show()与 hide()方法简介</span></a></h5>
<p> (1)功能描述 在显示大量文本内容时，为了能显示更多的段落内容，有时仅显示一部分的提要，隐藏另一部分的内容，当用户需要查看这些隐藏的内容时，只要单击页面中的“显示”链接就可以，查看完后，再单击“隐藏”链接便将该部分内容再次隐藏起来。</p>
<h4 id="_5-1-2-动画效果的-show-与-hide-方法" tabindex="-1"><a class="header-anchor" href="#_5-1-2-动画效果的-show-与-hide-方法"><span>5.1.2 动画效果的 show()与 hide()方法 </span></a></h4>
<p>jQuery 中的 show()与hide0方法，不仅可以实现“无动画”版的显示与隐藏，还可以完成有动画效果的显示与隐藏，只需在方法的括号中加入相应的参数即可，其调用的语法格式
分别为以下两种。</p>
<p>说明 在显示隐藏部分的内容时，为了获取当前显示状态，先通过语句i($(this)html()==&quot;显示&quot;)进行检测，然后根据检测结果，再执行不同的操作。
动画效果的显示功能如下所示:</p>
<div class="language-markup line-numbers-mode" data-highlighter="prismjs" data-ext="markup"><pre v-pre><code><span class="line">show(speed,[callback])</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>动画效果的隐藏功能如下所示:</p>
<div class="language-markup line-numbers-mode" data-highlighter="prismjs" data-ext="markup"><pre v-pre><code><span class="line">hide(speed,[callback])</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>  方法中的参数 </p>
<ul>
<li>
<p>speed 表示执行动画时的速度，该速度有3个默认字符值“slow”“normal”、“fast”，其对应的速度分别是“0.6秒”、“0.4秒”、“0.2秒”:</p>
</li>
<li>
<p>如果不使用默认的字符值，也可以直接写人数字，如“3000”，表示该动画执行的速度为3000毫秒。</p>
</li>
<li>
<p>可选型参数[callback]为在动画完成时执行的回调函数，该的数每个元素执行一次。</p>
</li>
</ul>
<p>下面通过示例来介绍这两个方法的使用。</p>
<h5 id="示例-5-2-动画效果的-show-与-hide-方法" tabindex="-1"><a class="header-anchor" href="#示例-5-2-动画效果的-show-与-hide-方法"><span>示例 5-2 动画效果的 show()与 hide()方法</span></a></h5>
<p> (1)功能描述 在页面中单击“显示”链接，通过 show()方法，以动画的方式显示一幅图片，同时，在方法中执行一个回调函数，用于改变图片的边框样式;当单击已显示的图片时，通过hide()方法，以动画的方式隐藏该图片。</p>
<h4 id="_5-1-3-toggle-方法" tabindex="-1"><a class="header-anchor" href="#_5-1-3-toggle-方法"><span>5.1.3 toggle()方法 </span></a></h4>
<p>在使用 show()或 hide()方法显示或隐藏页面元素时，为了正确执行切换显示的动作，通常需要检测当前元素的显示状态，然后根据该状态再执行元素是否显示或隐藏。这样一来，代码显得有些冗长，在jQuery中，为了解决这个问题，可以使用toggle0方法，该方法的功能就是切换元素可见状态，即如果是显示状态，则变成隐藏状态:如果是隐藏状态，则变成显示状态。该方法有三种调用的形式，代码如下所示。 </p>
<p>形式一，无参数调用格式:</p>
<div class="language-markup line-numbers-mode" data-highlighter="prismjs" data-ext="markup"><pre v-pre><code><span class="line"> toggle()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>形式二，逻辑参数调用格式:</p>
<div class="language-markup line-numbers-mode" data-highlighter="prismjs" data-ext="markup"><pre v-pre><code><span class="line">toggle(switch)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>参数switch为一个布尔值，即true或false。当该值为true时，显示元素:否则，隐藏元素。
形式三，动画效果调用格式:</p>
<div class="language-markup line-numbers-mode" data-highlighter="prismjs" data-ext="markup"><pre v-pre><code><span class="line">toggle(speed,[callback])</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其中参数 speed 和可选参数[callback]与方法show(speed,[callback])中的参数所表示的意义是一样的，在此不作赘述。 </p>
<p>下面通过示例来介绍 toggle 的使用方法。</p>
<h5 id="示例5-3-toggle-方法的使用" tabindex="-1"><a class="header-anchor" href="#示例5-3-toggle-方法的使用"><span>示例5-3 toggle() 方法的使用 </span></a></h5>
<p>(1)功能描述 为了更直观地区分开 toggle() 方法中的三种形式，在页面中设置了三个按钮分别对应三种调用的形式。</p>
<p>通过单击按钮，触发 toggle() 方法，实现图片的切换显示效果。</p>
</div></template>


