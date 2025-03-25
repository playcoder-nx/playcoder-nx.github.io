<template><div><h2 id="_2-1-vue-实例" tabindex="-1"><a class="header-anchor" href="#_2-1-vue-实例"><span>2.1 <code v-pre>Vue</code> 实例</span></a></h2>
<h3 id="创建-vue-实例" tabindex="-1"><a class="header-anchor" href="#创建-vue-实例"><span>创建 <code v-pre>Vue</code> 实例</span></a></h3>
<p>Vue 实例：通过 <code v-pre>new</code> 关键字实例化<code v-pre>Vue({})</code>构造函数。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line">  <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 选项</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-实例配置对象" tabindex="-1"><a class="header-anchor" href="#vue-实例配置对象"><span>Vue 实例配置对象：</span></a></h3>
<table>
<thead>
<tr>
<th><strong>选项</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>data</code></td>
<td><code v-pre>Vue</code> 实例数据对象</td>
</tr>
<tr>
<td><code v-pre>methods</code></td>
<td>定义 <code v-pre>Vue</code> 实例中的方法</td>
</tr>
<tr>
<td><code v-pre>components</code></td>
<td>定义子组件</td>
</tr>
<tr>
<td><code v-pre>computed</code></td>
<td>计算属性</td>
</tr>
<tr>
<td><code v-pre>filters</code></td>
<td>过滤器</td>
</tr>
<tr>
<td><code v-pre>el</code></td>
<td>唯一根元素</td>
</tr>
<tr>
<td><code v-pre>watch</code></td>
<td>监听数据变化</td>
</tr>
</tbody>
</table>
<h3 id="el-唯一根标签" tabindex="-1"><a class="header-anchor" href="#el-唯一根标签"><span><code v-pre>el</code> 唯一根标签</span></a></h3>
<p><strong><code v-pre>el</code> 唯一根标签</strong>：在创建 <code v-pre>Vue</code> 实例时，<code v-pre>el</code> 表示唯一根标签，<code v-pre>class</code> 或 <code v-pre>id</code> 选择器可用来将页面结构与 <code v-pre>Vue</code> 实例对象 <code v-pre>vm</code> 中的 <code v-pre>el</code> 绑定。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 定义唯一根元素div --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code><span class="line"><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  el<span class="token operator">:</span> <span class="token char">'#app'</span><span class="token punctuation">,</span> <span class="token comment">// 通过el与div元素绑定</span></span>
<span class="line">  data<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> '<span class="token class-name">Vue</span>实例创建成功！'</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="data-初始数据" tabindex="-1"><a class="header-anchor" href="#data-初始数据"><span>data 初始数据</span></a></h3>
<p><strong>data 初始数据</strong><code v-pre>：Vue</code> 实例的数据对象为 <code v-pre>data</code>，<code v-pre>Vue</code> 会将 <code v-pre>data</code> 的属性转换为 <code v-pre>getter</code>、<code v-pre>setter</code>，从而让 <code v-pre>data</code> 的属性能够响应数据变化。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 定义唯一根元素div --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">"#app"</span><span class="token punctuation">,</span> <span class="token comment">// 通过el与div元素绑定</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"定义初始数据"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$data<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$data<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="methods定义方法" tabindex="-1"><a class="header-anchor" href="#methods定义方法"><span><code v-pre>methods</code>定义方法</span></a></h3>
<p><strong><code v-pre>methods</code>基本概念</strong>：<code v-pre>methods</code> 属性用来定义方法，通过 <code v-pre>Vue</code> 实例可以直接访问这些方法在定义的方法中，<code v-pre>this</code> 指向 <code v-pre>Vue</code> 实例本身定义在 <code v-pre>methods</code> 属性中的方法可以作为页面中的事件处理方法使用当事件触发后，执行相应的事件处理方法</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- 为button按钮绑定click事件 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showInfo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>请单击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>   </span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">"#app"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 定义事件处理方法showInfo</span></span>
<span class="line">    <span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">"触发单击事件"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="computed-计算属性" tabindex="-1"><a class="header-anchor" href="#computed-计算属性"><span>computed 计算属性</span></a></h3>
<p>需求： 在 <code v-pre>computed</code> 中定义 <code v-pre>totalPrice</code> 函数返回计算后的总价格。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>总价格：{{totalPrice}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>单价：{{price}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>数量：{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>num == 0 ? 0 : num--<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>减少数量<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>num++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>增加数量<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">"#app"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 总价格totalPrice</span></span>
<span class="line">    <span class="token function">totalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watch-状态监听" tabindex="-1"><a class="header-anchor" href="#watch-状态监听"><span><code v-pre>watch</code> 状态监听</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">cityName</span><span class="token operator">:</span> <span class="token string">'shanghai'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">cityName</span> <span class="token punctuation">(</span><span class="token parameter">newName<span class="token punctuation">,</span> oldName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newName<span class="token punctuation">,</span> oldName<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filters-过滤器" tabindex="-1"><a class="header-anchor" href="#filters-过滤器"><span><code v-pre>filters</code> 过滤器</span></a></h3>
<p>需求： 在 <code v-pre>vm</code> 实例对象中定义 <code v-pre>filters</code>，并在 <code v-pre>filters</code> 中定义 <code v-pre>formatId()</code>方法实现属性的过滤。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataId | formatId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>helloworld<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token literal-property property">dataId</span><span class="token operator">:</span> <span class="token string">'dff1'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token function">formatId</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> value <span class="token operator">?</span> value<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> value<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'d'</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">''</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


