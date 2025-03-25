import{_ as s,c as a,a as t,o as p}from"./app-2nJfhqZ0.js";const e={};function l(c,n){return p(),a("div",null,n[0]||(n[0]=[t(`<h2 id="_2-2-vue-数据绑定" tabindex="-1"><a class="header-anchor" href="#_2-2-vue-数据绑定"><span>2.2 <code>Vue</code> 数据绑定</span></a></h2><h3 id="绑定样式" tabindex="-1"><a class="header-anchor" href="#绑定样式"><span>绑定样式</span></a></h3><p><u><strong>绑定样式</strong></u>：Vue 提供了样式绑定功能，可以通过绑定内联样式和绑定样式类这两种方式来实现。</p><p>通过 <code>v-bind</code> 绑定 <code>data</code> 中定义的 <code>myDiv</code> 对象。</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token comment">&lt;!-- 绑定样式属性值 --&gt;</span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{backgroundColor:pink,width:width,height:height}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 绑定样式对象 --&gt;</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>“myDiv”<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">myDiv</span><span class="token operator">:</span>  <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100px&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100px&#39;</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line">     <span class="token literal-property property">pink</span><span class="token operator">:</span><span class="token string">&#39;pink&#39;</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span></span>
<span class="line">     <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;200px&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>v-bind</code> 绑定类名，并设置类名的值为<code>{box}</code>和<code>{inner}</code>。</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{box}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是box</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{inner}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是inner1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{inner}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是inner2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">box</span><span class="token operator">:</span> <span class="token string">&quot;box&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">inner</span><span class="token operator">:</span> <span class="token string">&quot;inner&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.inner</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid white<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内置指令" tabindex="-1"><a class="header-anchor" href="#内置指令"><span>内置指令</span></a></h3><p>常用内置指令：</p><table><thead><tr><th><strong>路径</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><code>v-model</code></td><td>双向数据绑定</td></tr><tr><td><code>v-on</code></td><td>监听事件</td></tr><tr><td><code>v-bind </code></td><td>单向数据绑定</td></tr><tr><td><code>v-text</code></td><td>插入文本内容</td></tr><tr><td><code>v-html </code></td><td>插入包含 <code>HTML</code> 的内容</td></tr></tbody></table><p>常用内置指令：</p><table><thead><tr><th><strong>路径</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td><code>v-for </code></td><td>列表渲染</td></tr><tr><td><code>v-if </code></td><td>条件渲染</td></tr><tr><td><code>v-show </code></td><td>显示隐藏</td></tr></tbody></table><p><code>v-model</code> 指令：<code>v-model</code> 主要实现数据双向绑定，通常用在表单元素上，例如 <code>input</code>、<code>textarea</code>、<code>select</code> 等。</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;v-model指令&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例学生列表" tabindex="-1"><a class="header-anchor" href="#案例学生列表"><span>案例学生列表</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>添加学生<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>del<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>删除学生<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50%<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>班级<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>姓名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>性别<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>年龄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in students<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{item.grade}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{item.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{item.gender}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{item.age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">students</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 添加学生信息</span></span>
<span class="line">    <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">var</span> student <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">grade</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>students<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 删除学生信息</span></span>
<span class="line">    <span class="token function">del</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>students<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)]))}const i=s(e,[["render",l]]),u=JSON.parse('{"path":"/vue/02Vue%E5%BC%80%E5%8F%91%E5%9F%BA%E7%A1%80/2.2Vue%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"2.2 Vue 数据绑定","slug":"_2-2-vue-数据绑定","link":"#_2-2-vue-数据绑定","children":[{"level":3,"title":"绑定样式","slug":"绑定样式","link":"#绑定样式","children":[]},{"level":3,"title":"内置指令","slug":"内置指令","link":"#内置指令","children":[]},{"level":3,"title":"案例学生列表","slug":"案例学生列表","link":"#案例学生列表","children":[]}]}],"git":{},"filePathRelative":"vue/02Vue开发基础/2.2Vue数据绑定.md"}');export{i as comp,u as data};
