<template><div><h1 id="javascript-比较运算符" tabindex="-1"><a class="header-anchor" href="#javascript-比较运算符"><span>JavaScript 比较运算符</span></a></h1>
<p>比较运算符用于比较两个表达式的结果。如变量 num 加上变量 offset 是否<code v-pre>大于0</code>，大于就是一个比较运算符。</p>
<p>比较运算符还分为<code v-pre>相等运算符</code>与<code v-pre>关系运算符</code>。</p>
<p>相等运算符：</p>
<ul>
<li><code v-pre>==</code> 相等</li>
<li><code v-pre>!=</code> 不相等</li>
<li><code v-pre>===</code> 严格相等</li>
<li><code v-pre>!==</code> 严格不相等</li>
</ul>
<p>关系运算符：</p>
<ul>
<li><code v-pre>&gt;</code> 大于</li>
<li><code v-pre>&gt;=</code> 大于等于</li>
<li><code v-pre>&lt;</code> 小于</li>
<li><code v-pre>&lt;=</code> 小于等于</li>
</ul>
<p>运算符返回的都是布尔值。</p>
<p>运算符左右的值也被称为操作数。</p>
<h2 id="_1-相等运算符" tabindex="-1"><a class="header-anchor" href="#_1-相等运算符"><span>1. 相等运算符</span></a></h2>
<p>相等运算符用于判断运算符左右两边的值是否一致。</p>
<p>很多资料也会把相等称为等于，严格相等被称作严格等于。</p>
<h3 id="_1-1-相等" tabindex="-1"><a class="header-anchor" href="#_1-1-相等"><span>1.1 相等</span></a></h3>
<p>相等运算符在进行比较的时候，如果两边操作数数据类型不同，则会尝试转换成相同的类型再进行比较，如果转换成相同类型后的值相同，则返回 true，否则返回 false。</p>
<p>如果比较的两个操作数是引用类型，则会比较内部的引用（是否引用同一个内存地址上的值）。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token string">'3'</span> <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token number">3</span> <span class="token operator">==</span> <span class="token string">'3'</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line"><span class="token number">3</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">obj1 <span class="token operator">==</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//false</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> obj2 <span class="token operator">=</span> obj1<span class="token punctuation">;</span></span>
<span class="line">obj1 <span class="token operator">==</span> obj2<span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token number">0</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">代码块<span class="token number">1234567891011121314151617</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为内容比较简单，推荐直接在控制台调试，可以快速看到结果。</p>
<p>具体的转化规则可以查阅<code v-pre>隐式转换</code>章节。</p>
<blockquote>
<p>注意：相等会对不同类型的比较数据进行隐式转换，为了防止误导阅读代码的开发者对转换进行猜测，以及避免一些不可控的问题，大部分开发者会选择不使用相等。</p>
</blockquote>
<h3 id="_1-2-不相等" tabindex="-1"><a class="header-anchor" href="#_1-2-不相等"><span>1.2 不相等</span></a></h3>
<p>不相等的比较机制和相等一致，类型相同直接比较，不相同的会尝试转换成相同类型，碰到引用类型则比较引用地址是否一致。区别就在于最后返回的结果与相等相反，比较结果如果不一致，则返回 true，一致则返回 false。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token number">1</span> <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"><span class="token number">1</span> <span class="token operator">!=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">obj1 <span class="token operator">!=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">代码块<span class="token number">12345</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-严格相等" tabindex="-1"><a class="header-anchor" href="#_1-3-严格相等"><span>1.3 严格相等</span></a></h3>
<p>严格相等在比较的时候，碰到两边的操作数类型不同，则会直接返回 <code v-pre>false</code>，不会进行类型的转换。</p>
<p>当类型一样时，则比较等号两边的值是否相等，相等则返回 <code v-pre>true</code>，否则返回 false。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token number">1</span> <span class="token operator">===</span> <span class="token string">'1'</span><span class="token punctuation">;</span> <span class="token comment">// false;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">0</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>严格相等更加严格，程序中使用严格相等可以避免许多不可控的类型转换，特别是当开发者不熟悉转换规则时候，应尽可能使用严格相等。</p>
<h3 id="_1-4-严格不相等" tabindex="-1"><a class="header-anchor" href="#_1-4-严格不相等"><span>1.4 严格不相等</span></a></h3>
<p>严格不相等在比较的时候，如果两边的操作数不相等则返回 <code v-pre>true</code>，否则返回 <code v-pre>false</code>。其和严格相等一样，不会进行类型转换。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token number">1</span> <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"><span class="token number">1</span> <span class="token operator">!==</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1</span> <span class="token operator">!==</span> <span class="token string">'1'</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token keyword">undefined</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">代码块<span class="token number">12345</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：在做不相等运算的时候，也应该尽可能选择严格不相等，原因与建议使用严格相等一致。</p>
</blockquote>
<h2 id="_2-关系运算符" tabindex="-1"><a class="header-anchor" href="#_2-关系运算符"><span>2. 关系运算符</span></a></h2>
<h3 id="_2-1-大于" tabindex="-1"><a class="header-anchor" href="#_2-1-大于"><span>2.1 大于</span></a></h3>
<p>大于运算符会在左操作数大于右操作数的时候返回 true，否则返回 false。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token number">1</span> <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"><span class="token number">2</span> <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"><span class="token number">2</span> <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-大于等于" tabindex="-1"><a class="header-anchor" href="#_2-2-大于等于"><span>2.2 大于等于</span></a></h3>
<p>大于运算符会在左操作数大于等于右操作数的时候返回 true，否则返回 false。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token number">1</span> <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"><span class="token number">3</span> <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token number">2</span> <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-小于" tabindex="-1"><a class="header-anchor" href="#_2-3-小于"><span>2.3 小于</span></a></h3>
<p>小于运算符会在左操作数小于右操作数的时候返回 true，否则返回 false。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token number">2</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"><span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-小于等于" tabindex="-1"><a class="header-anchor" href="#_2-4-小于等于"><span>2.4 小于等于</span></a></h3>
<p>小于等于运算符会在左操作数小于等于右操作数的时候返回 true，否则返回 false。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token number">1</span> <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token number">2</span> <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"><span class="token number">3</span> <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-注意点" tabindex="-1"><a class="header-anchor" href="#_3-注意点"><span>3. 注意点</span></a></h2>
<h3 id="_3-1-字符串进行比较" tabindex="-1"><a class="header-anchor" href="#_3-1-字符串进行比较"><span>3.1 字符串进行比较</span></a></h3>
<p>假如比较运算符的两侧操作数都为字符串，则碰到中文，会将中文转化成对应的 Unicode 码，碰到英文则转化成对应的 ASCII 码，再对码值进行比较。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token string">'a'</span> <span class="token operator">></span> <span class="token string">'z'</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>a</code> 的 ASCII 码为 97，<code v-pre>z</code> 的 ASCII 码为 122，两者在比较的时候相当于是 <code v-pre>97 &gt; 122</code>，结果就是 false。</p>
<p>如果碰到有多个字符，则会依次进行比较。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token string">'aaaaaz'</span> <span class="token operator">></span> <span class="token string">'aaaaaaaaa'</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>两个操作数前五位都是 <code v-pre>a</code>，所以第六位才能决定出结果。</p>
<h2 id="_4-小结" tabindex="-1"><a class="header-anchor" href="#_4-小结"><span>4. 小结</span></a></h2>
<p>比较运算符主要用于比较两个值的大小关系，特别需要注意的是严格相等与相等的区别。</p>
</div></template>


