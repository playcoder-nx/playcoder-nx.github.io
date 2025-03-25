<template><div><h1 id="javascript-数据类型" tabindex="-1"><a class="header-anchor" href="#javascript-数据类型"><span>JavaScript 数据类型</span></a></h1>
<p>数据类型就是 JavaScript 中可操作的数据的类型。</p>
<p>数据类型分为<code v-pre>值类型</code>与<code v-pre>引用类型</code>。</p>
<p>在 ES6 之前，主要有以下数据类型：</p>
<ul>
<li>值类型
<ul>
<li>字符串</li>
<li>数字</li>
<li>布尔</li>
<li>null</li>
<li>undefined</li>
</ul>
</li>
<li>引用类型
<ul>
<li>对象</li>
<li>数组</li>
<li>函数</li>
</ul>
</li>
</ul>
<h2 id="_1-为什么需要不同的数据类型" tabindex="-1"><a class="header-anchor" href="#_1-为什么需要不同的数据类型"><span>1. 为什么需要不同的数据类型</span></a></h2>
<p>在学习自然数学的时候，所有的加法减法等操作都是针对数字的，数字加上操作符让他们有了意义。</p>
<p>在学习语文课的时候，不同的词语可以组合成句子，主谓宾语法与词语相互结合赋予了句子意义。</p>
<p>在 JavaScript 中也是如此，配合数据类型才能知道怎么对数据进行操作。</p>
<p>上一小节有提到的字符串与数字就是如此。</p>
<p>如 <code v-pre>3 + 4</code>，JavaScript碰到两边都是数字，就会做对应的加法操作。</p>
<p>程序需要不同类型的数据表示不同的内容，分别做对应的处理。</p>
<h2 id="_2-值类型" tabindex="-1"><a class="header-anchor" href="#_2-值类型"><span>2. 值类型</span></a></h2>
<h3 id="_2-1-字符串" tabindex="-1"><a class="header-anchor" href="#_2-1-字符串"><span>2.1 字符串</span></a></h3>
<p>字符串由字符组成，字符串在使用的时候会使用双引号<code v-pre>(&quot;)</code>或者单引号<code v-pre>(')</code>包裹。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">'字符串'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">"字符串"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出："字符串"</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出："字符串"</span></span>
<span class="line">代码块<span class="token number">12345</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述例子中，两个变量都是字符串类型的，可以双引号和单引号包裹的结果是一样的。</p>
<p>但是如果需要在双引号包裹的字符串中使用双引号，或者在单引号包裹的字符串中使用单引号，需要使用<code v-pre>\</code>进行转义，否则会报错，因为 JavaScript 无法知道字符串的结束位置。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">'使\'用\'单\'引\'号'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">"使\"用\"双\"引\"号"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出："使'用'单'引'号"</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出："使"用"双"引"号"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 以下代码会报错</span></span>
<span class="line"><span class="token keyword">var</span> str3 <span class="token operator">=</span> <span class="token string">"哼"</span>！"<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str4 <span class="token operator">=</span> <span class="token string">''</span>哼！'<span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123456789</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大部分开发者会使用单引号包裹字符串。</p>
<p>因为为了网页的动态展示、复杂交互等，需要用 JavaScript 书写 HTML 模版，而 HTML 的属性按照习惯是使用双引号包裹的（XML 标准允许单引号和双引号，在 HTML5 的标准中甚至不需要书写引号）。</p>
<p>这样如果使用 JavaScript 中的字符串表示 HTML 就会变成如下情况：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> html <span class="token operator">=</span> <span class="token string">"&lt;div class=\"title text-red\" style=\"display: inline-block;\">我是一个红色的标题&lt;/div>"</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>为了契合书写 HTML 的习惯，防止代码中充斥的大量的转义，就会使用如下使用单引号的形式。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> html <span class="token operator">=</span> <span class="token string">'&lt;div class="title text-red" style="display: inline-block;">我是一个红色的标题&lt;/div>'</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-数字" tabindex="-1"><a class="header-anchor" href="#_2-2-数字"><span>2.2 数字</span></a></h3>
<p>数字是最好理解的一种类型，因为生活中都会接触到。</p>
<p>数字可以细分为浮点数和整数，浮点数就是带有小数位的数，但事实上在 JavaScript 只有<code v-pre>64位的浮点数</code>，具体的范围是 <code v-pre>[-2^53 ~ 2^53]</code>，整数也使用浮点数表示。</p>
<p>数字类型也存在负数，如果数字的区间为 <code v-pre>(0, 1)</code>，则可以省略小数点前的 <code v-pre>0</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">.1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num3 <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num4 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num5 <span class="token operator">=</span> <span class="token number">884739573</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">12345</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是数字的一些表示方式。</p>
<p>如果数字的大小超过最大值或者最小值，那他的值在 JavaScript 中会表示为 <code v-pre>Infinity</code> 和 <code v-pre>-Infinity</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> base <span class="token operator">=</span> <span class="token number">99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">99999</span> <span class="token operator">*</span> base<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">99999</span> <span class="token operator">*</span> base<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Infinity</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：-Infinity</span></span>
<span class="line">代码块<span class="token number">12345678</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个值分别表示为<code v-pre>无穷大</code>和<code v-pre>无穷小</code>。</p>
<p>JavaScript 中还可以用数字表示<code v-pre>二进制</code>、<code v-pre>八进制</code>与<code v-pre>十六进制</code>。</p>
<p>二进制是以 <code v-pre>0b</code> 开头的数字。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> val10 <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> val8 <span class="token operator">=</span> <span class="token number">0b1000</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val10<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：10</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val8<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：8</span></span>
<span class="line">代码块<span class="token number">12345</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在输出的时候还是会以十进制的结果进行输出。</p>
<p>八进制则可以用 <code v-pre>0</code> 开头的数字表示。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> val56 <span class="token operator">=</span> <span class="token number">070</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val56<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：56</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>十六进制使用 <code v-pre>0x</code> 开头表示。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> val10 <span class="token operator">=</span> <span class="token number">0xA</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val10<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：10</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>十六进制是比较常用的一种方式，二进制和八进制的表示使用相对较少。</p>
<h3 id="_2-3-布尔" tabindex="-1"><a class="header-anchor" href="#_2-3-布尔"><span>2.3 布尔</span></a></h3>
<p>布尔值表示两种状态，如同使用零和一区分状态的开关一样。</p>
<p><img src="https://img.mukewang.com/wiki/5e78ee2c0985b35814400768.jpg" alt="图片描述"></p>
<p>开关</p>
<p>布尔值两种状态对应 <code v-pre>true</code> 和 <code v-pre>false</code> 两个值。</p>
<p>通常 <code v-pre>true</code> 被称为<code v-pre>真值</code>，<code v-pre>false</code> 被称为<code v-pre>假值</code>，两者也被统一称为<code v-pre>布尔值</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> empty <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> isVIP <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常在只有两种状态的情况下会使用布尔值。</p>
<p>以下值在转换成布尔值的时候会转换成 <code v-pre>false</code>。</p>
<ul>
<li>null</li>
<li>undefined</li>
<li>NaN</li>
<li>0 ( 数字 0 )</li>
<li>空字符串</li>
</ul>
<h3 id="_2-4-null" tabindex="-1"><a class="header-anchor" href="#_2-4-null"><span>2.4 null</span></a></h3>
<p><code v-pre>null</code>是一个非常特殊的类型，表示对象的值未设置，也可以简单理解成<code v-pre>空</code>，<code v-pre>什么都没有</code>。</p>
<p>通常<code v-pre>null</code>会在应该获取到一个对象，但是没获取到的时候进行使用，结合对象会更好理解。</p>
<p>在初始化一个变量的时候，有时候类型不确定，或者应该是一个对象，但还有设置值的时候会使用到null。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-undefined" tabindex="-1"><a class="header-anchor" href="#_2-5-undefined"><span>2.5 undefined</span></a></h3>
<p><code v-pre>undefined</code>从中文意思上理解就是不确定或者没有定义。</p>
<p>一个变量在声明后如果没有赋值，他的值就是<code v-pre>undefined</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> age<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：undefined</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个函数在没有指定返回值的时候，默认就会返回<code v-pre>undefined</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我是名字为fn的函数'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> val <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：undefined</span></span>
<span class="line">代码块<span class="token number">1234567</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数<code v-pre>fn</code>没有提供返回值，但<code v-pre>val</code>的值为<code v-pre>undefined</code>。</p>
<p>比较有趣的是，<code v-pre>undefined</code>既是一种数据类型，在浏览器中又是作为全局变量存在的，也就是<code v-pre>window</code>对象下的一个属性。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'undefined'</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：true</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>in</code>关键字可以校验某个对象下是否存在某个属性。这里的意思就是<code v-pre>undefined</code>属性是否在<code v-pre>window对象</code>下存在。</p>
<p>控制台会输出布尔值<code v-pre>true</code>，为一个真值，表示属性是确实存在的。</p>
<h2 id="_3-引用类型" tabindex="-1"><a class="header-anchor" href="#_3-引用类型"><span>3. 引用类型</span></a></h2>
<h3 id="_3-1-函数" tabindex="-1"><a class="header-anchor" href="#_3-1-函数"><span>3.1 函数</span></a></h3>
<p>函数其实是一段 <code v-pre>JavaScript</code> 代码，调用函数就会执行函数中的代码。</p>
<p>使用 <code v-pre>function</code> 关键字就可以定义一个函数，简单的函数语法如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">函数名</span><span class="token punctuation">(</span><span class="token parameter">参数</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  函数体<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> 返回值<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> ret <span class="token operator">=</span> <span class="token function">函数名</span><span class="token punctuation">(</span>参数<span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 调用函数</span></span>
<span class="line">代码块<span class="token number">1234567</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数名就是函数的名字，在调用函数的时候会被使用到。</p>
<p>参数则是传递给函数的数据，函数内部可以访问到传进来的参数。</p>
<p><code v-pre>return</code> 则标志着函数的结束，返回值会被作为结果进行返回。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> sum <span class="token operator">=</span> arg1 <span class="token operator">+</span> arg2<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> sum<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：3</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：6</span></span>
<span class="line">代码块<span class="token number">1234567891011</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个例子就是声明了一个名为 <code v-pre>add</code> 的函数，其功能就是把两个参数求和并返回。</p>
<p>可以看到函数让代码更加有 <code v-pre>意义</code>，调用 <code v-pre>add</code> 函数的地方可以很好的理解这里是在做求和操作，同时提高了代码的复用率。</p>
<h3 id="_3-2-对象" tabindex="-1"><a class="header-anchor" href="#_3-2-对象"><span>3.2 对象</span></a></h3>
<p>对象由属性和方法组成。</p>
<p>其格式如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  属性名<span class="token number">1</span><span class="token operator">:</span> 属性值<span class="token number">1</span>，</span>
<span class="line">  属性名<span class="token number">2</span><span class="token operator">:</span> 属性值<span class="token number">2</span>，</span>
<span class="line">  方法名<span class="token number">1</span><span class="token operator">:</span> 方法<span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  方法名<span class="token number">2</span><span class="token operator">:</span> 方法<span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'属性名3'</span><span class="token operator">:</span> 属性值<span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1234567</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性名和方法名都为字符串，如果其符合变量命名规范，则可以不使用引号包裹。</p>
<p>本质上方法也可以算作一个属性，通常在对象里一个属性的属性值为一个函数，就会称之为方法。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小明'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我叫'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">', 我的年龄是'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token string">'岁'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'father-name'</span><span class="token operator">:</span> <span class="token string">'小蓝'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：小明</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">'father-name'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：小蓝</span></span>
<span class="line"></span>
<span class="line">obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用 say 方法，会输出：我叫小明, 我的年龄是12岁</span></span>
<span class="line">代码块<span class="token number">12345678910111213</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述例子中的 <code v-pre>obj</code> 对象具有三个属性（name、age、father-name）一个方法（say）。</p>
<p>属性可以是任意的数据类型，格式为<code v-pre>属性名: 属性值</code>，多个属性则由<code v-pre>逗号(,)</code>分隔，方法则只能为一个函数，通常会是一个匿名函数（函数相关的详细内容可以查阅函数章节）。</p>
<p>通过<code v-pre>对象.属性</code>就可以访问到对象属性的属性值，如果属性名是一个不符合变量命名规范的值，则可以通过<code v-pre>对象['属性名']</code>进行访问，方法同理，因为本质上方法也是属性。</p>
<p>既然属性可以是任意的数据类型，则也可以是一个对象：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小明'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">hair</span><span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">eye</span><span class="token operator">:</span> <span class="token string">'blue'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">skin</span><span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">12345678</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>理论上在内存允许的情况下，可以进行无限层的对象嵌套。</p>
<p>以上的例子都是采用<code v-pre>字面量</code>的方式创建一个对象，还有许多种方式可以创建对象。</p>
<p>如使用<code v-pre>Object</code>构造一个新对象。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'小明'</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">obj<span class="token punctuation">.</span>colors <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">hair</span><span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">eye</span><span class="token operator">:</span> <span class="token string">'blue'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>hair<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：red</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：小明</span></span>
<span class="line"></span>
<span class="line">obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'小红'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将会在控制台输出 obj 对象</span></span>
<span class="line">代码块<span class="token number">12345678910111213141516</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code v-pre>new Object()</code> 就可以创建一个新的对象。</p>
<p>通过<code v-pre>对象.属性 = 属性值</code>的方式就可以设置一个属性和属性值，这一方式遵循以下规则：</p>
<ul>
<li>如果要赋值的属性不存在，则会创建这个属性并赋值</li>
<li>如果要赋值的属性存在，则会修改这个属性的值</li>
</ul>
<p>另外还可以使用<code v-pre>构造函数</code>、<code v-pre>Object.create</code>等方式创建对象，具体请参考对象章节。</p>
<h3 id="_3-3-数组" tabindex="-1"><a class="header-anchor" href="#_3-3-数组"><span>3.3 数组</span></a></h3>
<p>数组是一组数据构成的列表。</p>
<p>数组由中括号包裹，每一项通过<code v-pre>逗号</code>进行分隔：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：1</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出："2"</span></span>
<span class="line">代码块<span class="token number">1234</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和对象一样的是，数组的每一项也可以是任意类型的数据。</p>
<p>如果需要访问数组中的每一项可以通过<code v-pre>数组[下标]</code>的格式进行访问。</p>
<p>下标就是数组每一项的编号，这个编号从<code v-pre>0</code>开始，第一项为<code v-pre>0</code>，第二项为<code v-pre>1</code>，以此类推。</p>
<p>数组可以理解成一种特殊的对象，他原生具有一些方法，如遍历数组：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "a" 0, "b" 1, "c" 2</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">12345</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code v-pre>数组.forEach</code>的方式就可以遍历数组，<code v-pre>forEach</code>方法接受一个函数，这个函数在遍历到每一项的时候会被调用，并将每一项的值和下标作为参数传递过来。</p>
<p>既然具有一些方法，同样的也具有一些属性，最常用的就是<code v-pre>length</code>属性：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：3</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组的 <code v-pre>length</code> 属性会返回数组的长度。</p>
<h2 id="_4-值类型和引用类型的区分方式" tabindex="-1"><a class="header-anchor" href="#_4-值类型和引用类型的区分方式"><span>4. 值类型和引用类型的区分方式</span></a></h2>
<p>从内存角度出发，值类型放在内存栈中，引用类型则放在内存堆中。</p>
<p>引用类型的数据长度是不固定的，如对象所占用的空间很大一部分由属性值决定，而属性值又可以是任意类型。</p>
<p>另外最大的区别就如分类名一样，引用类型的数据本身是指向内存上的一块地址，操作的时候对地址上的值进行操作。</p>
<p>而值类型直接操作值，不论是复制或是修改都是直接产生一个新的值。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小明'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> obj2 <span class="token operator">=</span> obj1<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">obj2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'小红'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：小红</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> val1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> val2 <span class="token operator">=</span> val1<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">val2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的例子就可以看出引用类型和值类型在 JavaScript 程序中的区别。</p>
<p>引用类型在进行复制的时候，其实就是多了一个引用，操作的值是同一个。</p>
<p>而值类型进行复制后，则是一个新的值。</p>
<h2 id="_5-小结" tabindex="-1"><a class="header-anchor" href="#_5-小结"><span>5. 小结</span></a></h2>
<ol>
<li>数据类型是比较重要的一个概念，在分类上分为引用类型和值类型。</li>
<li>值类型包括：字符串、数字、布尔、null、undefined。</li>
<li>引用类型包括：函数、对象、数组。</li>
<li>引用类型相对复杂，每一种类型也具有很多特性，其内容可以参阅对应的章节。</li>
</ol>
</div></template>


