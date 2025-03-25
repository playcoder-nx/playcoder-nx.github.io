import{_ as s,c as n,a,o as l}from"./app-vlpg1qcw.js";const i={};function t(c,e){return l(),n("div",null,e[0]||(e[0]=[a(`<h1 id="flex-布局-语法篇" tabindex="-1"><a class="header-anchor" href="#flex-布局-语法篇"><span>Flex 布局：语法篇</span></a></h1><p>网页布局（layout）是 CSS 的一个重点应用。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071001.gif" alt="img"></p><p>布局的传统解决方案，基于<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box_model" target="_blank" rel="noopener noreferrer">盒状模型</a>，依赖 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display" target="_blank" rel="noopener noreferrer"><code>display</code></a> 属性 + <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position" target="_blank" rel="noopener noreferrer"><code>position</code></a>属性 + <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float" target="_blank" rel="noopener noreferrer"><code>float</code></a>属性。它对于那些特殊布局非常不方便，比如，<a href="https://css-tricks.com/centering-css-complete-guide/" target="_blank" rel="noopener noreferrer">垂直居中</a>就不容易实现。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071002.png" alt="img"></p><p>2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071003.jpg" alt="img"></p><p>Flex 布局将成为未来布局的首选方案。本文介绍它的语法，<a href="https://www.ruanyifeng.com/blog/2015/07/flex-examples.html" target="_blank" rel="noopener noreferrer">下一篇文章</a>给出常见布局的 Flex 写法。网友 <a href="http://vgee.cn/" target="_blank" rel="noopener noreferrer">JailBreak</a> 为本文的所有示例制作了 <a href="http://static.vgee.cn/static/index.html" target="_blank" rel="noopener noreferrer">Demo</a>，也可以参考。</p><p>以下内容主要参考了下面两篇文章：<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">A Complete Guide to Flexbox</a> 和 <a href="https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties" target="_blank" rel="noopener noreferrer">A Visual Guide to CSS3 Flexbox Properties</a>。</p><h2 id="一、flex-布局是什么" tabindex="-1"><a class="header-anchor" href="#一、flex-布局是什么"><span>一、Flex 布局是什么？</span></a></h2><p>Flex 是 Flexible Box 的缩写，意为&quot;弹性布局&quot;，用来为盒状模型提供最大的灵活性。</p><p>任何一个容器都可以指定为 Flex 布局。</p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.box</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>行内元素也可以使用 Flex 布局。</p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.box</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Webkit 内核的浏览器，必须加上<code>-webkit</code>前缀。</p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.box</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span> <span class="token comment">/* Safari */</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>注意，设为 Flex 布局以后，子元素的<code>float</code>、<code>clear</code>和<code>vertical-align</code>属性将失效。</p><h2 id="二、基本概念" tabindex="-1"><a class="header-anchor" href="#二、基本概念"><span>二、基本概念</span></a></h2><p>采用 Flex 布局的元素，称为 Flex 容器（flex container），简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称&quot;项目&quot;。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png" alt="img"></p><p>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做<code>main start</code>，结束位置叫做<code>main end</code>；交叉轴的开始位置叫做<code>cross start</code>，结束位置叫做<code>cross end</code>。</p><p>项目默认沿主轴排列。单个项目占据的主轴空间叫做<code>main size</code>，占据的交叉轴空间叫做<code>cross size</code>。</p><h2 id="三、容器的属性" tabindex="-1"><a class="header-anchor" href="#三、容器的属性"><span>三、容器的属性</span></a></h2><p>以下6个属性设置在容器上。</p><blockquote><ul><li>flex-direction</li><li>flex-wrap</li><li>flex-flow</li><li>justify-content</li><li>align-items</li><li>align-content</li></ul></blockquote><h3 id="_3-1-flex-direction属性" tabindex="-1"><a class="header-anchor" href="#_3-1-flex-direction属性"><span>3.1 flex-direction属性</span></a></h3><p><code>flex-direction</code>属性决定主轴的方向（即项目的排列方向）。</p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png" alt="img"></p><p>它可能有4个值。</p><blockquote><ul><li><code>row</code>（默认值）：主轴为水平方向，起点在左端。</li><li><code>row-reverse</code>：主轴为水平方向，起点在右端。</li><li><code>column</code>：主轴为垂直方向，起点在上沿。</li><li><code>column-reverse</code>：主轴为垂直方向，起点在下沿。</li></ul></blockquote><h3 id="_3-2-flex-wrap属性" tabindex="-1"><a class="header-anchor" href="#_3-2-flex-wrap属性"><span>3.2 flex-wrap属性</span></a></h3><p>默认情况下，项目都排在一条线（又称&quot;轴线&quot;）上。<code>flex-wrap</code>属性定义，如果一条轴线排不下，如何换行。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png" alt="img"></p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.box</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap | wrap | wrap-reverse<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>它可能取三个值。</p><p>（1）<code>nowrap</code>（默认）：不换行。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png" alt="img"></p><p>（2）<code>wrap</code>：换行，第一行在上方。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg" alt="img"></p><p>（3）<code>wrap-reverse</code>：换行，第一行在下方。</p><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg" alt="img"></p><h3 id="_3-3-flex-flow" tabindex="-1"><a class="header-anchor" href="#_3-3-flex-flow"><span>3.3 flex-flow</span></a></h3><p><code>flex-flow</code>属性是<code>flex-direction</code>属性和<code>flex-wrap</code>属性的简写形式，默认值为<code>row nowrap</code>。</p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex-flow</span><span class="token punctuation">:</span> &lt;flex-direction&gt; || &lt;flex-wrap&gt;<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_3-4-justify-content属性" tabindex="-1"><a class="header-anchor" href="#_3-4-justify-content属性"><span>3.4 justify-content属性</span></a></h3><p><code>justify-content</code>属性定义了项目在主轴上的对齐方式。</p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png" alt="img"></p><p>它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。</p><blockquote><ul><li><code>flex-start</code>（默认值）：左对齐</li><li><code>flex-end</code>：右对齐</li><li><code>center</code>： 居中</li><li><code>space-between</code>：两端对齐，项目之间的间隔都相等。</li><li><code>space-around</code>：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li></ul></blockquote><h3 id="_3-5-align-items属性" tabindex="-1"><a class="header-anchor" href="#_3-5-align-items属性"><span>3.5 align-items属性</span></a></h3><p><code>align-items</code>属性定义项目在交叉轴上如何对齐。</p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png" alt="img"></p><p>它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。</p><blockquote><ul><li><code>flex-start</code>：交叉轴的起点对齐。</li><li><code>flex-end</code>：交叉轴的终点对齐。</li><li><code>center</code>：交叉轴的中点对齐。</li><li><code>baseline</code>: 项目的第一行文字的基线对齐。</li><li><code>stretch</code>（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</li></ul></blockquote><h3 id="_3-6-align-content属性" tabindex="-1"><a class="header-anchor" href="#_3-6-align-content属性"><span>3.6 align-content属性</span></a></h3><p><code>align-content</code>属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around | stretch<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png" alt="img"></p><p>该属性可能取6个值。</p><blockquote><ul><li><code>flex-start</code>：与交叉轴的起点对齐。</li><li><code>flex-end</code>：与交叉轴的终点对齐。</li><li><code>center</code>：与交叉轴的中点对齐。</li><li><code>space-between</code>：与交叉轴两端对齐，轴线之间的间隔平均分布。</li><li><code>space-around</code>：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li><li><code>stretch</code>（默认值）：轴线占满整个交叉轴。</li></ul></blockquote><h3 id="四、项目的属性" tabindex="-1"><a class="header-anchor" href="#四、项目的属性"><span>四、项目的属性</span></a></h3><p>以下6个属性设置在项目上。</p><blockquote><ul><li><code>order</code></li><li><code>flex-grow</code></li><li><code>flex-shrink</code></li><li><code>flex-basis</code></li><li><code>flex</code></li><li><code>align-self</code></li></ul></blockquote><h3 id="_4-1-order属性" tabindex="-1"><a class="header-anchor" href="#_4-1-order属性"><span>4.1 order属性</span></a></h3><p><code>order</code>属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.item</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">order</span><span class="token punctuation">:</span> &lt;integer&gt;<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png" alt="img"></p><h3 id="_4-2-flex-grow属性" tabindex="-1"><a class="header-anchor" href="#_4-2-flex-grow属性"><span>4.2 flex-grow属性</span></a></h3><p><code>flex-grow</code>属性定义项目的放大比例，默认为<code>0</code>，即如果存在剩余空间，也不放大。</p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.item</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex-grow</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* default 0 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png" alt="img"></p><p>如果所有项目的<code>flex-grow</code>属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的<code>flex-grow</code>属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</p><h3 id="_4-3-flex-shrink属性" tabindex="-1"><a class="header-anchor" href="#_4-3-flex-shrink属性"><span>4.3 flex-shrink属性</span></a></h3><p><code>flex-shrink</code>属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.item</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* default 1 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg" alt="img"></p><p>如果所有项目的<code>flex-shrink</code>属性都为1，当空间不足时，都将等比例缩小。如果一个项目的<code>flex-shrink</code>属性为0，其他项目都为1，则空间不足时，前者不缩小。</p><p>负值对该属性无效。</p><h3 id="_4-4-flex-basis属性" tabindex="-1"><a class="header-anchor" href="#_4-4-flex-basis属性"><span>4.4 flex-basis属性</span></a></h3><p><code>flex-basis</code>属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为<code>auto</code>，即项目的本来大小。</p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.item</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex-basis</span><span class="token punctuation">:</span> &lt;length&gt; | auto<span class="token punctuation">;</span> <span class="token comment">/* default auto */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>它可以设为跟<code>width</code>或<code>height</code>属性一样的值（比如350px），则项目将占据固定空间。</p><h3 id="_4-5-flex属性" tabindex="-1"><a class="header-anchor" href="#_4-5-flex属性"><span>4.5 flex属性</span></a></h3><p><code>flex</code>属性是<code>flex-grow</code>, <code>flex-shrink</code> 和 <code>flex-basis</code>的简写，默认值为<code>0 1 auto</code>。后两个属性可选。</p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.item</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">flex</span><span class="token punctuation">:</span> none | [ &lt;<span class="token string">&#39;flex-grow&#39;</span>&gt; &lt;<span class="token string">&#39;flex-shrink&#39;</span>&gt;? || &lt;<span class="token string">&#39;flex-basis&#39;</span>&gt; ]</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>该属性有两个快捷值：<code>auto</code> (<code>1 1 auto</code>) 和 none (<code>0 0 auto</code>)。</p><p>建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。</p><h3 id="_4-6-align-self属性" tabindex="-1"><a class="header-anchor" href="#_4-6-align-self属性"><span>4.6 align-self属性</span></a></h3><p><code>align-self</code>属性允许单个项目有与其他项目不一样的对齐方式，可覆盖<code>align-items</code>属性。默认值为<code>auto</code>，表示继承父元素的<code>align-items</code>属性，如果没有父元素，则等同于<code>stretch</code>。</p><blockquote><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.item</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">align-self</span><span class="token punctuation">:</span> auto | flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png" alt="img"></p><p>该属性可能取6个值，除了auto，其他都与align-items属性完全一致。</p><p>（完）</p>`,97)]))}const p=s(i,[["render",t]]),r=JSON.parse('{"path":"/responsive/01flex.html","title":"Flex 布局：语法篇","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"一、Flex 布局是什么？","slug":"一、flex-布局是什么","link":"#一、flex-布局是什么","children":[]},{"level":2,"title":"二、基本概念","slug":"二、基本概念","link":"#二、基本概念","children":[]},{"level":2,"title":"三、容器的属性","slug":"三、容器的属性","link":"#三、容器的属性","children":[{"level":3,"title":"3.1 flex-direction属性","slug":"_3-1-flex-direction属性","link":"#_3-1-flex-direction属性","children":[]},{"level":3,"title":"3.2 flex-wrap属性","slug":"_3-2-flex-wrap属性","link":"#_3-2-flex-wrap属性","children":[]},{"level":3,"title":"3.3 flex-flow","slug":"_3-3-flex-flow","link":"#_3-3-flex-flow","children":[]},{"level":3,"title":"3.4 justify-content属性","slug":"_3-4-justify-content属性","link":"#_3-4-justify-content属性","children":[]},{"level":3,"title":"3.5 align-items属性","slug":"_3-5-align-items属性","link":"#_3-5-align-items属性","children":[]},{"level":3,"title":"3.6 align-content属性","slug":"_3-6-align-content属性","link":"#_3-6-align-content属性","children":[]},{"level":3,"title":"四、项目的属性","slug":"四、项目的属性","link":"#四、项目的属性","children":[]},{"level":3,"title":"4.1 order属性","slug":"_4-1-order属性","link":"#_4-1-order属性","children":[]},{"level":3,"title":"4.2 flex-grow属性","slug":"_4-2-flex-grow属性","link":"#_4-2-flex-grow属性","children":[]},{"level":3,"title":"4.3 flex-shrink属性","slug":"_4-3-flex-shrink属性","link":"#_4-3-flex-shrink属性","children":[]},{"level":3,"title":"4.4 flex-basis属性","slug":"_4-4-flex-basis属性","link":"#_4-4-flex-basis属性","children":[]},{"level":3,"title":"4.5 flex属性","slug":"_4-5-flex属性","link":"#_4-5-flex属性","children":[]},{"level":3,"title":"4.6 align-self属性","slug":"_4-6-align-self属性","link":"#_4-6-align-self属性","children":[]}]}],"git":{},"filePathRelative":"responsive/01flex.md"}');export{p as comp,r as data};
