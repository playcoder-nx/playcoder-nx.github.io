import{_ as s,c as a,a as p,o as t}from"./app-2nJfhqZ0.js";const e={};function c(l,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="综合案例应用" tabindex="-1"><a class="header-anchor" href="#综合案例应用"><span>综合案例应用</span></a></h1><h2 id="清空下拉框的值" tabindex="-1"><a class="header-anchor" href="#清空下拉框的值"><span>清空下拉框的值</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">/* 清空下拉框的值 */</span></span>
<span class="line"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#ah option&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 删除 selected 属性 */</span></span>
<span class="line">    <span class="token function">$</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttr</span><span class="token punctuation">(</span><span class="token string">&#39;selected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置下拉框的值" tabindex="-1"><a class="header-anchor" href="#设置下拉框的值"><span>设置下拉框的值</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">/* 设置下拉框的值 */</span></span>
<span class="line"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#ah option&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 设置 selected 属性 */</span></span>
<span class="line">    <span class="token function">$</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttr</span><span class="token punctuation">(</span><span class="token string">&#39;selected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 判断 value属性为某值时，设置selected 属性为true */</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;玩游戏&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">$</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;selected&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清空单选框的值" tabindex="-1"><a class="header-anchor" href="#清空单选框的值"><span>清空单选框的值</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">/* 清空单选框的值 */</span></span>
<span class="line"><span class="token comment">/* jQuery的遍历：each()*/</span></span>
<span class="line"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;input[type=&quot;radio&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// console.log(i,v);</span></span>
<span class="line">    <span class="token comment">/* 删除 checked 属性 */</span></span>
<span class="line">    <span class="token function">$</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttr</span><span class="token punctuation">(</span><span class="token string">&#39;checked&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置单选框的值" tabindex="-1"><a class="header-anchor" href="#设置单选框的值"><span>设置单选框的值</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token comment">/* 设置下拉框的值 */</span></span>
<span class="line"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;input[type=&quot;radio&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 设置 checked 属性 */</span></span>
<span class="line">    <span class="token function">$</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttr</span><span class="token punctuation">(</span><span class="token string">&#39;checked&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 判断 value属性为某值时，设置checked 属性为true */</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">$</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;checked&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const i=s(e,[["render",c]]),u=JSON.parse('{"path":"/jQuery/02selector/2.10.html","title":"综合案例应用","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"清空下拉框的值","slug":"清空下拉框的值","link":"#清空下拉框的值","children":[]},{"level":2,"title":"设置下拉框的值","slug":"设置下拉框的值","link":"#设置下拉框的值","children":[]},{"level":2,"title":"清空单选框的值","slug":"清空单选框的值","link":"#清空单选框的值","children":[]},{"level":2,"title":"设置单选框的值","slug":"设置单选框的值","link":"#设置单选框的值","children":[]}],"git":{},"filePathRelative":"jQuery/02selector/2.10.md"}');export{i as comp,u as data};
