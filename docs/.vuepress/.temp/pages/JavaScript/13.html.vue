<template><div><h1 id="javascript-字符串" tabindex="-1"><a class="header-anchor" href="#javascript-字符串"><span>JavaScript 字符串</span></a></h1>
<p>字符串是一种数据类型，由字符组成，用于表示文本数据。</p>
<h2 id="_1-创建字符串" tabindex="-1"><a class="header-anchor" href="#_1-创建字符串"><span>1. 创建字符串</span></a></h2>
<p>使用字符串字面量就可以创建字符串。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上例子创建了两个空字符串。字符串可以用单引号包裹，也可以用双引号包裹，效果是一样的。</p>
<p>大部分前端程序员都会选择单引号，这么做的原因是为了契合 <code v-pre>HTML</code> 的书写习惯，拼接 HTML 的时候，HTML 元素的属性可以直接使用双引号包裹。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> html <span class="token operator">=</span> <span class="token string">'&lt;p class="tip">更多请&lt;a href="/detail" target="_blank">了解详情&lt;/a>&lt;/p>'</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果换成双引号则需要转义：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> html <span class="token operator">=</span> <span class="token string">"&lt;p class=\"tip\">更多请&lt;a href=\"/detail\" target=\"_blank\">了解详情&lt;/a>&lt;/p>"</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-字符串转义" tabindex="-1"><a class="header-anchor" href="#_2-字符串转义"><span>2. 字符串转义</span></a></h2>
<p>转义可以理解成字面意思，即转换字符的含义。</p>
<p>比如想在字符串里描述换行符，就会使用 <code v-pre>\n</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'第一行\n第二行\n第三行'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将会输出换行的字符串</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常转义字符都是通过 <code v-pre>\</code> 开头的。</p>
<p>同理，如果需要在双引号包裹的字符串中使用双引号，或者单引号包裹的字符串中使用单引号，就需要对引号进行转义。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'我'</span>要<span class="token string">'显'</span>示<span class="token string">'一'</span>堆<span class="token string">'单'</span>引<span class="token string">'号'</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就会报错，JavaScript 无法知道这些引号的含义。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'我\'要\'显\'示\'一\'堆\'单\'引\'号'</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code v-pre>\n</code> 表示一个单引号，就可以让 JavaScript 理解，需要在字符串里描述一个单引号。</p>
<h3 id="_2-1-转义表" tabindex="-1"><a class="header-anchor" href="#_2-1-转义表"><span>2.1 转义表</span></a></h3>
<p>JavaScript 支持以下字符的转义：</p>
<table>
<thead>
<tr>
<th>'</th>
<th>单引号</th>
</tr>
</thead>
<tbody>
<tr>
<td>&quot;</td>
<td>双引号</td>
</tr>
<tr>
<td>&amp;</td>
<td>和号</td>
</tr>
<tr>
<td>\</td>
<td>反斜杠</td>
</tr>
<tr>
<td>\n</td>
<td>换行符</td>
</tr>
<tr>
<td>\r</td>
<td>回车符</td>
</tr>
<tr>
<td>\t</td>
<td>制表符</td>
</tr>
<tr>
<td>\b</td>
<td>退格符</td>
</tr>
<tr>
<td>\f</td>
<td>换页符</td>
</tr>
</tbody>
</table>
<h2 id="_3-使用场景" tabindex="-1"><a class="header-anchor" href="#_3-使用场景"><span>3. 使用场景</span></a></h2>
<h3 id="_3-1-用于描述文案" tabindex="-1"><a class="header-anchor" href="#_3-1-用于描述文案"><span>3.1 用于描述文案</span></a></h3>
<p>文案描述是最常见的情景之一，文案本身就是字符串，使用字符串是最契合场景的。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">gameover</span><span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 判断是否游戏结束</span></span>
<span class="line">  <span class="token keyword">return</span> age <span class="token operator">></span> <span class="token number">300</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> isGameover <span class="token operator">=</span> <span class="token function">gameover</span><span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>isGameover<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'游戏结束'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">代码块<span class="token number">12345678910</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>游戏结束</code>就是一个确确实实的文案，用于展现。</p>
<p>通过输出日志简单调试的也是，也会用到字符串作为文案进行观察。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">something</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'循环开始之前'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">var</span> i</span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'循环中，第 '</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">' 次循环'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'循环结束'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">something</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123456789101112</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上模拟一个程序卡死的状态，通过调试输出很容易发现是由死循环导致的，原因是将循环条件判断后执行的表达式写错了。</p>
<h3 id="_3-2-拼接html" tabindex="-1"><a class="header-anchor" href="#_3-2-拼接html"><span>3.2 拼接HTML</span></a></h3>
<p>拼接 <code v-pre>HTML</code> 是前几年大部分前端程序员做的最多的事情之一。</p>
<p>现在有了许多前端框架，解放了很多 <code v-pre>HTML</code> 拼接的工作。</p>
<p>早期想渲染一个列表，需要前端程序员在 JavaScript 中拼接 HTML 后再使用。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">'&lt;li class="list-item">'</span> <span class="token operator">+</span> content <span class="token operator">+</span> <span class="token string">'&lt;/li>'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> i<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token string">'我是第'</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">'条'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token string">'&lt;ul class="list">'</span><span class="token punctuation">,</span></span>
<span class="line">  arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'&lt;/ul>'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">12345678910111213141516</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img.mukewang.com/wiki/5e7ae5740a0cb1d920121314.jpg" alt="图片描述"></p>
<blockquote>
<p>数组的 <code v-pre>join</code> 方法会将参数作为分隔符，将数组成员连接成一个字符串，默认的分隔符是逗号。</p>
</blockquote>
<p>不论是制作插件，还是业务需求的页面元素、文案调整，都需要拼接 HTML。</p>
<h3 id="_3-3-其他任意场景" tabindex="-1"><a class="header-anchor" href="#_3-3-其他任意场景"><span>3.3 其他任意场景</span></a></h3>
<p>通常字符串可以用在<code v-pre>任意场景</code>，因为可以人为的赋予他任何含义。</p>
<p>如使用字符串的 <code v-pre>'true'</code>、<code v-pre>'false'</code> 来表示布尔值。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> isMan <span class="token operator">=</span> <span class="token string">'false'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>isMan <span class="token operator">===</span> <span class="token string">'false'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'不是男的'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">代码块<span class="token number">12345</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者可以使用字符串描述一个对象：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token string">'小明,男,24岁,吃饭、睡觉、打游戏'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">name <span class="token operator">=</span> person<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">12345</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过一定的规则来确定字符串的含义，如上面就是用逗号分隔，含义依次为<code v-pre>姓名，性别，年龄，爱好</code>。</p>
<p>取值的时候通过 <code v-pre>split</code> 方法，将字符串按指定的字符分隔成数组。</p>
<p>这种情况通常会用在后台需要存储简单的数据结构，前端拿到的数据也许就是这样的，需要自己切分。</p>
<p><strong>正常情况下前端开发者在开发过程中不建议这样做，因为有更好的数据类型来描述这些内容，JavaScript 提供了布尔值、对象来更好的、灵活的应对这些场景。</strong></p>
<h2 id="_4-访问字符串" tabindex="-1"><a class="header-anchor" href="#_4-访问字符串"><span>4. 访问字符串</span></a></h2>
<p><strong>字符串是无法修改的</strong>，只能进行访问。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'我是字符串'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出："我是字符串"</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是直接访问整个字符串，还可以访问中间某一个字符。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'一二三四五六七，7654321'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取第一个字符</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出："一"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取最后一个字符</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>str<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出："1"</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出："1"</span></span>
<span class="line">代码块<span class="token number">12345678</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code v-pre>字符串[下标]</code>的形式可以访问到某一个字符，这种访问通常会用在字符串遍历上。</p>
<h2 id="_5-获取字符串长度" tabindex="-1"><a class="header-anchor" href="#_5-获取字符串长度"><span>5. 获取字符串长度</span></a></h2>
<p>字符串可以直接通过 <code v-pre>length</code> 属性获取长度。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> string <span class="token operator">=</span> <span class="token string">'1234567'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> len <span class="token operator">=</span> string<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：7</span></span>
<span class="line">代码块<span class="token number">12345</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-常用的字符串拼接" tabindex="-1"><a class="header-anchor" href="#_6-常用的字符串拼接"><span>6. 常用的字符串拼接</span></a></h2>
<h3 id="_6-1-使用-连接字符串" tabindex="-1"><a class="header-anchor" href="#_6-1-使用-连接字符串"><span>6.1 使用 + 连接字符串</span></a></h3>
<p>最常见的字符串拼接就是使用 <code v-pre>+</code> 符号：</p>
<p>实例演示</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">'我是'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">'小明'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str1 <span class="token operator">+</span> str2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token number">1234</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.imooc.com/wiki/run/224.html" target="_blank" rel="noopener noreferrer">运行案例</a>点击 &quot;运行案例&quot; 可查看在线运行效果</p>
<h3 id="_6-2-数组的-join-方法" tabindex="-1"><a class="header-anchor" href="#_6-2-数组的-join-方法"><span>6.2 数组的 join 方法</span></a></h3>
<p>还有一种是使用数组来拼接字符串：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">'我是'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">'一只鱼'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span>str1<span class="token punctuation">,</span> str2<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：我是一只鱼</span></span>
<span class="line">代码块<span class="token number">1234</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式也很常见。</p>
<blockquote>
<p>注意：许多文献中会提到这样拼接字符串的性能更好，效率更高。大部分浏览器确实如此，其引擎针对性的做了特殊优化，当然只有在非常大量的字符串拼接时才能感知到性能上的区别。</p>
</blockquote>
<h3 id="_6-3-字符串的-concat-方法" tabindex="-1"><a class="header-anchor" href="#_6-3-字符串的-concat-方法"><span>6.3 字符串的 concat 方法</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">'教练'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">'我想'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> str3 <span class="token operator">=</span> <span class="token string">'写代码'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> str4 <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>str2<span class="token punctuation">,</span> str3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1234567</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>concat</code> 可以接受任意个字符串作为参数，最后会拼接成一个字符串。</p>
<blockquote>
<p>ES6提供了模版字符串，在模版字符串中拼接更加灵活。</p>
</blockquote>
<h2 id="_7-使用-string-对象创建字符串" tabindex="-1"><a class="header-anchor" href="#_7-使用-string-对象创建字符串"><span>7. 使用 String 对象创建字符串</span></a></h2>
<p><code v-pre>String</code> 对象也可以创建字符串，但不常用。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">'do sth.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：object</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">'gugu'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：do sth.gugu</span></span>
<span class="line">代码块<span class="token number">1234</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以观察到，使用 <code v-pre>String</code> 对象生成的字符串，实际上是一个<code v-pre>对象</code>，</p>
<p>但使用 <code v-pre>String</code> 对象生成的字符串对象使用的时候基本和字符串无异。这部分会涉及到部分装箱拆箱的知识，具体可以查阅相关章节。</p>
<h2 id="_8-与字符串相关的常用方法" tabindex="-1"><a class="header-anchor" href="#_8-与字符串相关的常用方法"><span>8. 与字符串相关的常用方法</span></a></h2>
<p>以下是一些常用方法，使用频率较高：</p>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank" rel="noopener noreferrer">replace</a></td>
<td style="text-align:left">replace 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match" target="_blank" rel="noopener noreferrer">match</a></td>
<td style="text-align:left">match 方法检索返回一个字符串匹配正则表达式的的结果。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank" rel="noopener noreferrer">split</a></td>
<td style="text-align:left">split 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring" target="_blank" rel="noopener noreferrer">substring</a></td>
<td style="text-align:left">substring 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase" target="_blank" rel="noopener noreferrer">toLocaleLowerCase</a></td>
<td style="text-align:left">toLocaleLowerCase 方法根据任何指定区域语言环境设置的大小写映射，返回调用字符串被转换为小写的格式。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase" target="_blank" rel="noopener noreferrer">toLocaleUpperCase</a></td>
<td style="text-align:left">toLocaleUpperCase 使用本地化（locale-specific）的大小写映射规则将输入的字符串转化成大写形式并返回结果字符串。</td>
</tr>
</tbody>
</table>
<h2 id="_8-小结" tabindex="-1"><a class="header-anchor" href="#_8-小结"><span>8. 小结</span></a></h2>
<p>字符串常常用于拼接 HTML ，且前端开发者习惯使用单引号来包裹字符串。</p>
<p>大量的字符串拼接，利用数组的 <code v-pre>join</code> 比使用 <code v-pre>+</code> 连接字符串性能更好，前提是非常大量。
使用 <code v-pre>join</code> 更大的好处是多行的时候换行方便。</p>
<p>字符串基本可以胜任任何数据场景，但一般不会这么做，因为 JavaScript 提供了多种数据类型来应对各种业务场景。</p>
</div></template>


