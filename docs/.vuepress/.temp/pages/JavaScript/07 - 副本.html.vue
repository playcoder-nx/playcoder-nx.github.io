<template><div><h1 id="javascript-算数运算符" tabindex="-1"><a class="header-anchor" href="#javascript-算数运算符"><span>JavaScript 算数运算符</span></a></h1>
<blockquote>
<p>算术运算符以数值（字面量或变量）作为其操作数，并返回一个单个数值。标准算术运算符是加法（+），减法（ - ），乘法（*）和除法（/）。—— MDN</p>
</blockquote>
<p>算数运算符是用来做算数运算的，如 <code v-pre>+</code> 这个符号，就是用来做加法操作。</p>
<h2 id="_1-n元运算" tabindex="-1"><a class="header-anchor" href="#_1-n元运算"><span>1. N元运算</span></a></h2>
<p><code v-pre>N</code> 代表一个数，如一元运算，二元运算。</p>
<p><code v-pre>N元运算</code> 表示由N个值产生一个新的值的规则。</p>
<p>如 <code v-pre>*</code> 就是一个二元运算符，他由两个数相乘产生第三个数。</p>
<p>JavaScript 中有三元运算符、二元运算符、一元运算符。</p>
<blockquote>
<p>注意：网络上可以搜索到 JavaScript 中有更多元的运算，基本上都是使用三目（元）表达式嵌套来完成的，严格上说这不属于更多元的运算。</p>
</blockquote>
<p>与算数相关的只有二元与一元运算符：</p>
<p>二元运算符：</p>
<ul>
<li><code v-pre>+</code> 加法</li>
<li><code v-pre>-</code> 减法</li>
<li><code v-pre>*</code> 乘法</li>
<li><code v-pre>/</code> 除法</li>
<li><code v-pre>%</code> 求余</li>
<li><code v-pre>**</code> 幂 （ES2016 提案）</li>
</ul>
<p>一元运算符：</p>
<ul>
<li><code v-pre>+</code> 一元正号</li>
<li><code v-pre>-</code> 一元负号</li>
<li><code v-pre>++</code> 递增</li>
<li><code v-pre>--</code> 递减</li>
</ul>
<h2 id="_2-二元运算符" tabindex="-1"><a class="header-anchor" href="#_2-二元运算符"><span>2. 二元运算符</span></a></h2>
<h3 id="_2-1-加法" tabindex="-1"><a class="header-anchor" href="#_2-1-加法"><span>2.1 加法（+）</span></a></h3>
<p>加法用来做求和，将 <code v-pre>+</code> 左右两边的数值相加，也可以用来连接字符串。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> total <span class="token operator">=</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：5</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> lastName <span class="token operator">=</span> <span class="token string">'world'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> firstName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出："hello world"</span></span>
<span class="line">代码块<span class="token number">1234567891011</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数字的加法就是和自然数学里的加法一样，做累加操作。</p>
<p><code v-pre>+</code> 碰到字符串就会把两边字符连接到一起，形成一个新的字符串。</p>
<h3 id="_2-2-减法" tabindex="-1"><a class="header-anchor" href="#_2-2-减法"><span>2.2 减法（-）</span></a></h3>
<p>减法操作是将 <code v-pre>-</code> 左边的数减去 <code v-pre>-</code> 右边的数，结果就是差值。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> totalApple <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 一共有10个苹果</span></span>
<span class="line"><span class="token keyword">var</span> take <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// 小明拿走了四个苹果</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> left <span class="token operator">=</span> totalApple <span class="token operator">-</span> take<span class="token punctuation">;</span> <span class="token comment">// 还有 10 - 4 个苹果</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：6</span></span>
<span class="line">代码块<span class="token number">123456</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-乘法" tabindex="-1"><a class="header-anchor" href="#_2-3-乘法"><span>2.3 乘法（*）</span></a></h3>
<p>乘法操作将 <code v-pre>*</code> 左右两边的数相乘，结果就是积。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：30</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-除法" tabindex="-1"><a class="header-anchor" href="#_2-4-除法"><span>2.4 除法（/）</span></a></h3>
<p>除法操作将 <code v-pre>/</code> 左边的数作为被除数，右边的数作为除数，最后求出结果。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">6</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：3</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在许多强类型的语言中，整数相除即便无法除尽，结果必然是整数，但在 JavaScript 中，整数相除如果无法除尽，也会返回小数部分。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：0.4</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个结果在 <code v-pre>Java</code> 中会返回 0，但是在 JavaScript 中会反回 0.4。</p>
<blockquote>
<p>注意：如果拿正负 0 作为除数，则结果会返回 Infinity 与 -Infinity。</p>
</blockquote>
<h3 id="_2-5-求余" tabindex="-1"><a class="header-anchor" href="#_2-5-求余"><span>2.5 求余（%）</span></a></h3>
<p>求余事实上就是取模运算，也就是取余数。如 8 对 3 取模，结果为 2，按小学数学中的说法就是 8 除 3 得 2<code v-pre>余2</code>，余2就是结果。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">8</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：2</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-幂" tabindex="-1"><a class="header-anchor" href="#_2-6-幂"><span>2.6 幂（**）</span></a></h3>
<p>幂是 ES2016 提供的新运算符，用来做乘方运算。</p>
<p><code v-pre>**</code> 左边是底数，右边是指数，如 <code v-pre>2 ** 3</code> 按数学中的表示就是 23，即求 2 的 3 次方。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> total <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 2 的 3次方，结果为 2 * 2 * 2 ，即8</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：8</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 JavaScript 中的幂运算与其他语言有些许区别，规范中指出禁止使用带有歧义的幂运算表达式。</p>
<p>如底数前不能跟随一元运算符。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">8</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在JavaScript会报错</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img.mukewang.com/wiki/5e7a13380a2de70515320432.jpg" alt="图片描述"></p>
<p>以上幂运算是会报错的，因为 JavaScript 无法知道是要在计算完 8 的 2 次方后求反，还是计算 -8 的 2 次方。</p>
<p>使用括号可以提供具体的意义，消除歧义：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -8的2次方</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token punctuation">(</span><span class="token number">8</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算完8的2次方后求反</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-一元运算符" tabindex="-1"><a class="header-anchor" href="#_3-一元运算符"><span>3. 一元运算符</span></a></h2>
<h3 id="_3-1-一元正号" tabindex="-1"><a class="header-anchor" href="#_3-1-一元正号"><span>3.1 一元正号</span></a></h3>
<p>一元正号通常不参与数学运算，而是用作类型转换，一元正号可以很方便的将其他类型转换成数字。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token operator">+</span><span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token operator">+</span><span class="token string">'3'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num3 <span class="token operator">=</span> <span class="token operator">+</span><span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num4 <span class="token operator">=</span> <span class="token operator">+</span><span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num5 <span class="token operator">=</span> <span class="token operator">+</span><span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> timestamp <span class="token operator">=</span> <span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 直接得到时间戳</span></span>
<span class="line">代码块<span class="token number">123456</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-一元负号" tabindex="-1"><a class="header-anchor" href="#_3-2-一元负号"><span>3.2 一元负号</span></a></h3>
<p>一元负号也可以将其他类型的数据转换成数字，但是转换完后会在前面加上负号。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token string">'3'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num3 <span class="token operator">=</span> <span class="token operator">-</span><span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num4 <span class="token operator">=</span> <span class="token operator">-</span><span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num5 <span class="token operator">=</span> <span class="token operator">-</span><span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> timestamp <span class="token operator">=</span> <span class="token operator">-</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123456</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常比较多的使用场景是对数字取反，让数值在正负值切换。</p>
<h3 id="_3-3-递增" tabindex="-1"><a class="header-anchor" href="#_3-3-递增"><span>3.3 递增</span></a></h3>
<p>递增操作会让数值本身增加 1。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">num<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：1</span></span>
<span class="line"></span>
<span class="line">num<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：2</span></span>
<span class="line">代码块<span class="token number">123456789</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样看，递增操作有点像<code v-pre>x = x + 1</code>这种操作，其实只有在后置使用时的效果是和<code v-pre>x = x + 1</code>一样的，也就是<code v-pre>++x</code>。</p>
<p>前置使用的时候，会先做递增操作，再返回数值。</p>
<p>后置使用时候，会先返回数值，再做递增操作。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> total <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：1 1</span></span>
<span class="line">代码块<span class="token number">12345</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个是前置使用的情况，可以看到 num 的值是 1，total 的值也是 1，也就是说 total 再累加的时候为（1 + 0），这个时候 num 的值为 0，再这个值返回后对 num 进行了递增，所以输出 num 结果为 1。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> total <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">++</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：2 1</span></span>
<span class="line">代码块<span class="token number">12345</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个是后置使用的情况，total 输出结果为 2，在求和的时候就是(1 + 2)，num 是在递增后再被使用的。</p>
<h3 id="_3-4-递减" tabindex="-1"><a class="header-anchor" href="#_3-4-递减"><span>3.4 递减</span></a></h3>
<p>递增操作会让数值本身减去 1。</p>
<p>与递增一样，递减也具有前置使用与后置使用的情况。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> total <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span>num<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：2</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> total2 <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">--</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：0</span></span>
<span class="line">代码块<span class="token number">123456789</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-优先级" tabindex="-1"><a class="header-anchor" href="#_4-优先级"><span>4. 优先级</span></a></h2>
<p>算术符的优先级与自然数学中的相似，按照<code v-pre>先乘除后加减</code>的规则来，具体的可以参考下表：</p>
<table>
<thead>
<tr>
<th style="text-align:left">优先级</th>
<th style="text-align:left">运算类型</th>
<th style="text-align:left">符号</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">6</td>
<td style="text-align:left">括号</td>
<td style="text-align:left">( … )</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left">后置递增</td>
<td style="text-align:left">… ++</td>
</tr>
<tr>
<td style="text-align:left">后置递减</td>
<td style="text-align:left">… --</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">一元加法</td>
<td style="text-align:left">+ …</td>
</tr>
<tr>
<td style="text-align:left">一元减法</td>
<td style="text-align:left">- …</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">前置递增</td>
<td style="text-align:left">++ …</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">前置递减</td>
<td style="text-align:left">-- …</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">幂</td>
<td style="text-align:left">… ** …</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">乘法</td>
<td style="text-align:left">… * …</td>
</tr>
<tr>
<td style="text-align:left">除法</td>
<td style="text-align:left">… * …</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">取模</td>
<td style="text-align:left">… % …</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">加法</td>
<td style="text-align:left">… + …</td>
</tr>
<tr>
<td style="text-align:left">减法</td>
<td style="text-align:left">… - …</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">括号` > `后置递增/后置递减` > `一元加法/一元减法/前置递增/前置递减` > `幂` > `乘法/除法/取模` > `加法/减法</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>可以见到，括号的优先级是最高的，所以建议在自己不确定优先级的时候，尽量使用括号决定优先级。</p>
<p>如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">**</span> <span class="token number">7</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个表达式的运算顺序，即便是知道优先级，也不是一眼就能看出来的，所以建议即便是知道优先级，也使用括号将计算顺序做区分。</p>
<p>将想要的计算顺序用括号包裹后：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">**</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_4-小结" tabindex="-1"><a class="header-anchor" href="#_4-小结"><span>4. 小结</span></a></h2>
<p>算数运算符主要参与运算，N 元运算就是用 N 个值产生一个新的值，运算符有自己的特性和优先级，当表达式较长的时候，建议使用括号包裹来控制执行顺序。</p>
</div></template>


