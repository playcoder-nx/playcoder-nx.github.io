<template><div><h1 id="javascript-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#javascript-逻辑运算符"><span>JavaScript 逻辑运算符</span></a></h1>
<blockquote>
<p>逻辑运算符通常用于布尔型（逻辑）值。这种情况下，它们返回一个布尔值。然而，&amp;&amp; 和 || 运算符会返回一个指定操作数的值，因此，这些运算符也用于非布尔值。这时，它们也就会返回一个非布尔型值。—— MDN</p>
</blockquote>
<p>逻辑运算符用于逻辑运算。如变量 <code v-pre>num</code> 要大于2<code v-pre>同时</code>也要小于 7，这里的同时就是一种逻辑运算。</p>
<p>JavaScript 中的逻辑运算有三种：</p>
<ul>
<li><code v-pre>&amp;&amp;</code> 与 (并且)</li>
<li><code v-pre>||</code> 或 (或者)</li>
<li><code v-pre>!</code> 非 (取反)</li>
</ul>
<h2 id="_1-与" tabindex="-1"><a class="header-anchor" href="#_1-与"><span>1. 与</span></a></h2>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">表达式<span class="token number">1</span> <span class="token operator">&amp;&amp;</span> 表达式<span class="token number">2</span></span>
<span class="line"></span>
<span class="line">如果表达式<span class="token number">1</span>的结果成立则返回表达式<span class="token number">2</span>的结果，否则返回表达式<span class="token number">1</span>的结果</span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与可以理解为且、并且、同时。与在 JavaScript 使用 <code v-pre>&amp;&amp;</code> 表示。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"><span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"><span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">代码块<span class="token number">1234</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与操作在左侧的表达式结果为 <code v-pre>true</code> 或者可以<code v-pre>隐式转换为true</code>的时候，会返回右侧表达式结果，否则返回左侧表达式结果。</p>
<p>如：判断成绩是否处于 80 到 100 之间。</p>
<p>80 到 100 之间换一种表述方式就是，成绩大于等于 80 并且成绩小于等于100，这种表述形式更像程序语言，所以条件就是<code v-pre>分数 &gt;= 80 并且 分数 &lt;= 100</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> score<span class="token operator">=</span> <span class="token number">67</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">>=</span> <span class="token number">80</span> <span class="token operator">&amp;&amp;</span> score <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>score <span class="token operator">+</span> <span class="token string">'分在80到100之间'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>score <span class="token operator">+</span> <span class="token string">'分不在80到100之间'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">代码块<span class="token number">1234567</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if 语句中的条件左右都不满足，所以返回了表达式 <code v-pre>score &gt;= 80</code> 的结果false。</p>
<p>如果 <code v-pre>score</code> 为 90，则满足两个条件，返回右侧表达式的结果。</p>
<h2 id="_2-或" tabindex="-1"><a class="header-anchor" href="#_2-或"><span>2. 或</span></a></h2>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">表达式<span class="token number">1</span> <span class="token operator">||</span> 表达式<span class="token number">2</span></span>
<span class="line"></span>
<span class="line">如果表达式<span class="token number">1</span>结果成立，则返回表达式 <span class="token number">1</span> 的结果，否则返回表达式 <span class="token number">2</span> 的结果</span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或就是或者。在 JavaScript 中使用 <code v-pre>||</code> 表示。</p>
<p>或操作符在当有表达式的结果为 true 或者可以隐式转换为 true 的时候，就返回这个表达式的结果，如果没有则返回右侧表达式的结果。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token boolean">false</span> <span class="token operator">||</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token boolean">false</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">代码块<span class="token number">1234</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如：判断一个数能被 3 整除或者能被 5 整除。</p>
<p>能被 3 或者 5 整除的数，表述成类似于计算机语言的样子就是<code v-pre>某个数 % 3 === 0 或者 某个数 % 5 === 0</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> number <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number <span class="token operator">+</span> <span class="token string">'可以被3或5整除'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number <span class="token operator">+</span> <span class="token string">'不可以被3或5整除'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 输出：15可以被3或5整除</span></span>
<span class="line">代码块<span class="token number">123456789</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-非" tabindex="-1"><a class="header-anchor" href="#_3-非"><span>3. 非</span></a></h2>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token operator">!</span>表达式</span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>非就是取反。表达式结果如果是布尔值，则会直接取反，结果如果不是布尔值，则会转换成布尔值再取反。</p>
<p>取反即将 <code v-pre>true</code> 变成 <code v-pre>false</code>，或者将 <code v-pre>false</code> 变成 <code v-pre>true</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"><span class="token operator">!</span><span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token operator">!</span><span class="token string">''</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">!</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">代码块<span class="token number">1234567</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不仅在日常编码中很常用到非，在许多代码压缩工作中也会用到非，如将 true 压缩成 !0，false 压缩成 !1，从 4 个字符和 5 个字符压缩到 2 个字符。</p>
<h2 id="_4-双重非" tabindex="-1"><a class="header-anchor" href="#_4-双重非"><span>4. 双重非</span></a></h2>
<p>双重非就是使用两个非，通常用于将一种数据类型转换成布尔值。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token operator">!</span><span class="token operator">!</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>首先 <code v-pre>!1</code> 会得到结果 <code v-pre>false</code>，再通过 <code v-pre>!false</code> 就会得到结果 <code v-pre>true</code>。</p>
<h2 id="_5-短路逻辑" tabindex="-1"><a class="header-anchor" href="#_5-短路逻辑"><span>5. 短路逻辑</span></a></h2>
<p>短路逻辑是一种逻辑运算符的求值策略，还可以称作<strong>短路求值</strong>、<strong>最小化求值</strong>。</p>
<p>JavaScript 在进行与或计算的时候就会用到短路逻辑。</p>
<p>如：判断一个数是 2 的倍数同时又是 5 的倍数。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">number <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> number <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>number 不满足任意一个条件，<code v-pre>&amp;&amp;</code> 操作符碰到不成立的表达式就会直接返回这个表达式。</p>
<p>显然 <code v-pre>number % 2 === 0</code> 就不成立，所以直接返回这个表达式的结果，这样一个逻辑运算就已经得出结果了，JavaScript 不会再计算右侧的表达式。</p>
<p>这就是短路逻辑，<strong>只要得出了结果，就不会再继续计算</strong>。</p>
<h2 id="_6-小结" tabindex="-1"><a class="header-anchor" href="#_6-小结"><span>6. 小结</span></a></h2>
<p>JavaScript 中有与<code v-pre>&amp;&amp;</code>、或<code v-pre>||</code>、非<code v-pre>!</code>三种逻辑运算符，用于处理值之间的逻辑关系，当需要多个条件的相互关系来决定结果的时候，就会用到逻辑运算符。</p>
</div></template>


