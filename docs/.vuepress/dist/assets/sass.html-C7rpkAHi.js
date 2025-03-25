import{_ as s,c as a,a as p,o as e}from"./app-vlpg1qcw.js";const l={};function t(i,n){return e(),a("div",null,n[0]||(n[0]=[p(`<p>背景 以往写媒体查询可能是这样的：</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.header</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>width &gt;= 320px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>width &lt;= 480px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">.header</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>width &gt; 480px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>width &lt;= 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">.header</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>width &gt; 768px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>width &lt;= 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">.header</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>width &gt; 1024px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>width &lt;= 1200<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">.header</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>width &gt; 1200<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">.header</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上写法可以看到写起来非常不方便，可读性也很差。因此希望用 sass 优化一下写法。</p><p>目标 希望可以这样写媒体查询：</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.header</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">手机:</span> <span class="token punctuation">{</span></span>
<span class="line"> 	<span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line"><span class="token selector">平板:</span> <span class="token punctuation">{</span></span>
<span class="line">  	<span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sass-混合功能" tabindex="-1"><a class="header-anchor" href="#sass-混合功能"><span>sass 混合功能</span></a></h3><p>sass/scss 快速入门</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code><span class="line"><span class="token comment">/* 定义混合函数 */</span></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token function">flexCenter</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$jus_c</span></span><span class="token punctuation">:</span> center<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$ali_i</span></span><span class="token punctuation">:</span> center<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">justify-content</span><span class="token punctuation">:</span> <span class="token variable">$jus_c</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">align-items</span><span class="token punctuation">:</span> <span class="token variable">$ali_i</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 使用混合函数 */</span></span>
<span class="line"><span class="token selector">.header </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">@include</span> <span class="token function">flexCenter</span><span class="token punctuation">(</span>space-between<span class="token punctuation">,</span> flex-end<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sass-if-判断和插槽" tabindex="-1"><a class="header-anchor" href="#sass-if-判断和插槽"><span>sass if 判断和插槽</span></a></h3><p>混合函数中使用 @if判断区分不同设备，@content类似于 vue 插槽接收使用者在方法体中插入的内容。</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code><span class="line"><span class="token keyword">@mixin</span> <span class="token function">respond-to</span><span class="token punctuation">(</span><span class="token variable">$breakpoint</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$breakpoint</span> == mobile </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span>width <span class="token operator">&lt;=</span> 767px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">@content</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$breakpoint</span> == tablet </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span>width <span class="token operator">&gt;=</span> 768px<span class="token punctuation">)</span> <span class="token operator">and</span> <span class="token punctuation">(</span>width <span class="token operator">&lt;=</span> 1023px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">@content</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$breakpoint</span> == desktop </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span>width <span class="token operator">&gt;=</span> 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">@content</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$breakpoint</span> == wide </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span>width <span class="token operator">&gt;=</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">@content</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code><span class="line"><span class="token selector">.header </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">@include</span> <span class="token function">respond-to</span><span class="token punctuation">(</span>mobile<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">@include</span> <span class="token function">respond-to</span><span class="token punctuation">(</span>tablet<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    ...</span>
<span class="line"></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>139 133 133<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码已经基本达到书写媒体查询的目标。但是 if else 太多了，不好看。还可以用策略模式优化一下。</p><p>进阶：sass 定义对象优化代码结构 用 hash 映射优化 if，也就是定义一个对象。sass 中可以定义对象。 注意：sass 中()括号就代表 js 的花括号{}和方括号[]。</p><p>以下就是一个对象，这 5 个属性设置 5 个断点，除最后一个大屏外，其他断点属性值为数组。 之前的代码设置了 4 个断点，区别不大。</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code><span class="line"><span class="token comment">/* 定义断点对象 */</span></span>
<span class="line"><span class="token property"><span class="token variable">$breakpoints</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token property">phone</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>320px<span class="token punctuation">,</span>480px<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">pad</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>481px<span class="token punctuation">,</span>768px<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">notebook</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>769px<span class="token punctuation">,</span>1024px<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">desktop</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1025px<span class="token punctuation">,</span>1280px<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">tv</span><span class="token punctuation">:</span> 1281px</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sass 读取对象中的值：</p><p>map-get(obj, prop)：获取对象的属性值 sass 判断数据类型：</p><ul><li><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code><span class="line"><span class="token function">type-of</span><span class="token punctuation">(</span><span class="token variable">$var</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>数组类型：list</li><li>数值类型：number</li></ul></li></ul><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code><span class="line"><span class="token keyword">@mixin</span> <span class="token function">respond-to</span><span class="token punctuation">(</span><span class="token variable">$breakname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 读取断点对象属性值 */</span></span>
<span class="line">    <span class="token property"><span class="token variable">$bp</span></span><span class="token punctuation">:</span> <span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$breakpoints</span><span class="token punctuation">,</span> <span class="token variable">$breakname</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* 2. 类型判断是否为数组 */</span></span>
<span class="line">    <span class="token keyword">@if</span> <span class="token function">type-of</span><span class="token punctuation">(</span><span class="token variable">$bp</span><span class="token punctuation">)</span> <span class="token selector">== &quot;list&quot; </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/* 3. 取出数组中的数据 */</span></span>
<span class="line">        <span class="token property"><span class="token variable">$min</span></span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$bp</span><span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property"><span class="token variable">$max</span></span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$bp</span><span class="token punctuation">,</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> <span class="token variable">$min</span><span class="token punctuation">)</span> <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token variable">$max</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">@content</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">/* 4. tv 大屏 */</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token function">type-of</span><span class="token punctuation">(</span><span class="token variable">$bp</span><span class="token punctuation">)</span> <span class="token selector">== &quot;number&quot; </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> <span class="token variable">$bp</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">@content</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">@warn</span> <span class="token string">&quot;\`$breakname\` is not a valid breakpoint name.&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vite 配置全局使用 直接在组件中 @include 使用混合函数，可能会报错：</p><p>[vite] Internal server error: [sass] Undefined mixin.</p><p>这是因为 minix 需要预编译，在 vite 中配置： Vite</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;@/styles/minix.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中使用：</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code><span class="line"><span class="token selector">.header </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">@include</span> <span class="token function">respond-to</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">@include</span> <span class="token function">respond-to</span><span class="token punctuation">(</span>tv<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>139 133 133<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码</p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre><code><span class="line"><span class="token property"><span class="token variable">$breakpoints</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token property">phone</span><span class="token punctuation">:</span> <span class="token punctuation">(</span></span>
<span class="line">        320px<span class="token punctuation">,</span></span>
<span class="line">        480px</span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">pad</span><span class="token punctuation">:</span> <span class="token punctuation">(</span></span>
<span class="line">        481px<span class="token punctuation">,</span></span>
<span class="line">        768px</span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">notebook</span><span class="token punctuation">:</span> <span class="token punctuation">(</span></span>
<span class="line">        769px<span class="token punctuation">,</span></span>
<span class="line">        1024px</span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">desktop</span><span class="token punctuation">:</span> <span class="token punctuation">(</span></span>
<span class="line">        1025px<span class="token punctuation">,</span></span>
<span class="line">        1280px</span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">tv</span><span class="token punctuation">:</span> 1281px</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token function">respond-to</span><span class="token punctuation">(</span><span class="token variable">$breakname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 读取断点对象属性值 */</span></span>
<span class="line">    <span class="token property"><span class="token variable">$bp</span></span><span class="token punctuation">:</span> <span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$breakpoints</span><span class="token punctuation">,</span> <span class="token variable">$breakname</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* 2. 类型判断是否为数组 */</span></span>
<span class="line">    <span class="token keyword">@if</span> <span class="token function">type-of</span><span class="token punctuation">(</span><span class="token variable">$bp</span><span class="token punctuation">)</span> <span class="token selector">== &quot;list&quot; </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/* 3. 取出数组中的数据 */</span></span>
<span class="line">        <span class="token property"><span class="token variable">$min</span></span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$bp</span><span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property"><span class="token variable">$max</span></span><span class="token punctuation">:</span> <span class="token function">nth</span><span class="token punctuation">(</span><span class="token variable">$bp</span><span class="token punctuation">,</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> <span class="token variable">$min</span><span class="token punctuation">)</span> <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token variable">$max</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">@content</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">/* 4. tv 大屏 */</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token function">type-of</span><span class="token punctuation">(</span><span class="token variable">$bp</span><span class="token punctuation">)</span> <span class="token selector">== &quot;number&quot; </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token atrule"><span class="token rule">@media</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> <span class="token variable">$bp</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">@content</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">@warn</span> <span class="token string">&quot;\`$breakname\` is not a valid breakpoint name.&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)]))}const o=s(l,[["render",t]]),u=JSON.parse('{"path":"/responsive/sass.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"sass 混合功能","slug":"sass-混合功能","link":"#sass-混合功能","children":[]},{"level":3,"title":"sass if 判断和插槽","slug":"sass-if-判断和插槽","link":"#sass-if-判断和插槽","children":[]}],"git":{},"filePathRelative":"responsive/sass.md"}');export{o as comp,u as data};
