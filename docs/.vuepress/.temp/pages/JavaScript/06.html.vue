<template><div><h1 id="for-语句" tabindex="-1"><a class="header-anchor" href="#for-语句"><span>for 语句</span></a></h1>
<p>for 语句是循环语句中的一种。</p>
<p>for 语句可以使程序在某一个条件下重复执行一段代码。</p>
<h2 id="_1-基本语法" tabindex="-1"><a class="header-anchor" href="#_1-基本语法"><span>1. 基本语法</span></a></h2>
<p>for 语句相对于 if 语句稍微复杂，通常为以下格式：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span>初始语句<span class="token punctuation">;</span> 条件<span class="token punctuation">;</span> 条件为真值时执行的语句<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 循环体</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>初始语句</code>会在循环开始前进行执行。</p>
<p><code v-pre>条件</code>会在每次循环结束后执行，结果影响循环语句是否要继续执行。</p>
<p><code v-pre>条件为真时执行的语句</code>通常会用来影响下一次计算条件的结果。</p>
<h2 id="_2-为什么需要循环语句" tabindex="-1"><a class="header-anchor" href="#_2-为什么需要循环语句"><span>2. 为什么需要循环语句</span></a></h2>
<p>循环的应用非常广泛，如果有学习过数据结构与算法，会发现大部分的算法都需要循环介入，否则会使程序变得冗余复杂。</p>
<p>如我们需要生成一段 HTML 列表代码：</p>
<p>实例演示</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">var</span> li1 <span class="token operator">=</span> <span class="token string">'&lt;li>'</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'&lt;/li>'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">var</span> li2 <span class="token operator">=</span> <span class="token string">'&lt;li>'</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'&lt;/li>'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">var</span> li3 <span class="token operator">=</span> <span class="token string">'&lt;li>'</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'&lt;/li>'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">var</span> li4 <span class="token operator">=</span> <span class="token string">'&lt;li>'</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'&lt;/li>'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">var</span> li5 <span class="token operator">=</span> <span class="token string">'&lt;li>'</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'&lt;/li>'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">var</span> li6 <span class="token operator">=</span> <span class="token string">'&lt;li>'</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'&lt;/li>'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">var</span> li7 <span class="token operator">=</span> <span class="token string">'&lt;li>'</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'&lt;/li>'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">var</span> li8 <span class="token operator">=</span> <span class="token string">'&lt;li>'</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'&lt;/li>'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">var</span> li9 <span class="token operator">=</span> <span class="token string">'&lt;li>'</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'&lt;/li>'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">var</span> ul <span class="token operator">=</span> <span class="token string">'&lt;ul>'</span><span class="token operator">+</span> li1 <span class="token operator">+</span> li2 <span class="token operator">+</span> li3 <span class="token operator">+</span> li4 <span class="token operator">+</span> li5 <span class="token operator">+</span> li6 <span class="token operator">+</span> li7 <span class="token operator">+</span> li8 <span class="token operator">+</span> li9 <span class="token operator">+</span> <span class="token string">'&lt;/ul>'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> ul<span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.imooc.com/wiki/run/124.html" target="_blank" rel="noopener noreferrer">运行案例</a>点击 &quot;运行案例&quot; 可查看在线运行效果</p>
<p>可以发现这里生成列表的代码很冗余，都是重复的操作，如果使用 for 循环，代码可以改成这样：</p>
<p>实例演示</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">var</span> lis <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 单独拿到数组的长度</span></span>
<span class="line">  <span class="token keyword">var</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 声明变量i用来计数</span></span>
<span class="line">  <span class="token keyword">var</span> i<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    lis <span class="token operator">=</span> lis <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token string">'&lt;li>'</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">'&lt;/li>'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">var</span> ul <span class="token operator">=</span> <span class="token string">'&lt;ul>'</span> <span class="token operator">+</span> lis <span class="token operator">+</span> <span class="token string">'&lt;/ul>'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> ul<span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.imooc.com/wiki/run/125.html" target="_blank" rel="noopener noreferrer">运行案例</a>点击 &quot;运行案例&quot; 可查看在线运行效果</p>
<p>这里使用 for 循环生成了一个列表，效果和上述声明九个变量然后做拼接的方式是一样的。</p>
<p>循环开始前先声明的变量<code v-pre>i</code>用于计数，表示当前循环到第几次。</p>
<p>在循环开始前先将<code v-pre>i</code>设置为0，这只会执行一次，随后比较当前循环的次数是否小于数组长度，如果比数组长度小则执行<code v-pre>i++</code>，<code v-pre>i++</code>会先使用<code v-pre>i</code>的值，再做累加 ( i = i + 1) 操作，随后执行循环体，重复上述操作。</p>
<p>具体的流程如下：</p>
<p>len 的值为 9</p>
<ul>
<li>第一次循环
<ul>
<li>i 的值为 0，i是小于 len 变量的，所以 arr[0] 的值就是 1，这个时候 lis 被累加了<code v-pre>&lt;li&gt;1&lt;/li&gt;</code>。</li>
</ul>
</li>
<li>第二次循环
<ul>
<li>i的值为 1，i 是小于 len 变量的，所以 arr[1] 的值就是 2，这个时候 lis 被累加了<code v-pre>&lt;li&gt;2&lt;/li&gt;</code>。</li>
</ul>
</li>
<li>第三次循环
<ul>
<li>i 的值为 2，i 是小于 len 变量的，所以 arr[2] 的值就是 3，这个时候 lis 被累加了<code v-pre>&lt;li&gt;3&lt;/li&gt;</code>。</li>
</ul>
</li>
<li>第四次循环
<ul>
<li>i 的值为 3，i是小于 len 变量的，所以 arr[3] 的值就是 4，这个时候 lis 被累加了<code v-pre>&lt;li&gt;4&lt;/li&gt;</code>。</li>
</ul>
</li>
<li>第五次循环
<ul>
<li>i的值为 4，i 是小于 len 变量的，所以arr[4]的值就是5，这个时候lis被累加了<code v-pre>&lt;li&gt;5&lt;/li&gt;</code>。</li>
</ul>
</li>
<li>第六次循环
<ul>
<li>i的值为 5，i 是小于 len 变量的，所以 arr[5] 的值就是 6，这个时候 lis 被累加了<code v-pre>&lt;li&gt;6&lt;/li&gt;</code>。</li>
</ul>
</li>
<li>第七次循环
<ul>
<li>i的值为 6，i 是小于 len 变量的，所以 arr[6] 的值就是 7，这个时候 lis 被累加了<code v-pre>&lt;li&gt;7&lt;/li&gt;</code>。</li>
</ul>
</li>
<li>第八次循环
<ul>
<li>i 的值为 7，i 是小于 len 变量的，所以 arr[7] 的值就是 8，这个时候 lis 被累加了<code v-pre>&lt;li&gt;8&lt;/li&gt;</code>。</li>
</ul>
</li>
<li>第九次循环
<ul>
<li>i的值为 8，i 是小于 len 变量的，所以 arr[8] 的值就是 9，这个时候 lis 被累加了<code v-pre>&lt;li&gt;9&lt;/li&gt;</code>。</li>
</ul>
</li>
<li>第十次循环
<ul>
<li>i 的值为 9，i 等于 len 变量，不再小于 len，条件不成立，循环结束。</li>
</ul>
</li>
</ul>
<p>虽然流程看起来复杂，但是代码的可维护性得到了提高，冗余代码也减少了，如果这个时候<code v-pre>li</code>标签需要加一些属性，如<code v-pre>class</code>或者<code v-pre>style</code>，只需要修改循环体中的一行代码即可。</p>
<p>这种形式的 for 循环还有一种语法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span>初始语句<span class="token punctuation">;</span> 条件<span class="token punctuation">;</span> 条件为真值时执行的语句<span class="token punctuation">)</span> 需要循环的语句<span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>和 if 语句很像，这种属于行循环语句，这种用到的比较少，因为代码的可阅读性比较低，而且一般用到循环的场景都不止一行代码。</p>
<h2 id="_3-for-in" tabindex="-1"><a class="header-anchor" href="#_3-for-in"><span>3. for … in</span></a></h2>
<p>for…in 循环可以用来遍历对象的属性名。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小红'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'打篮球'</span><span class="token punctuation">,</span> <span class="token string">'唱歌'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 输出：</span></span>
<span class="line"><span class="token comment">//   "小红"</span></span>
<span class="line"><span class="token comment">//   12</span></span>
<span class="line"><span class="token comment">//   ["打篮球", "唱歌"]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一次遍历拿到的 key 就是对象的某一个属性名，当属性名被遍历完后会自动退出循环。</p>
<p>有部分 key 是无法遍历到的，具体规则可以参阅对象章节。</p>
<h2 id="_4-无限循环" tabindex="-1"><a class="header-anchor" href="#_4-无限循环"><span>4. 无限循环</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'loop...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的循环语句会陷入无限循环。</p>
<p><img src="https://img.mukewang.com/wiki/5e7ae94e0a91c46413760596.jpg" alt="图片描述"></p>
<p><strong>大部分无限循环会让浏览器卡死，需要强制退出浏览器！</strong></p>
<h2 id="_5-循环应用的例子" tabindex="-1"><a class="header-anchor" href="#_5-循环应用的例子"><span>5. 循环应用的例子</span></a></h2>
<h3 id="_5-1-判断一个数是不是质数" tabindex="-1"><a class="header-anchor" href="#_5-1-判断一个数是不是质数"><span>5.1 判断一个数是不是质数</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> len<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> i<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> len <span class="token operator">=</span> <span class="token number">17</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// break可以中断循环</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">'不是质数'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">'是质数'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 输出："17是质数"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先要知道什么是质数，质数就是只能被1和本身整除的数。</p>
<p>所以如果要判断<code v-pre>num</code>是不是质数，只需要去掉头尾，从<code v-pre>2</code>循环到<code v-pre>num - 1</code>，用<code v-pre>num</code>对每一个循环数做取余操作，如果存在余数为 0 的，就说明中间有个数可以被整除，那就不是质数，反之就是质数。</p>
<h3 id="_5-2-计算阶乘" tabindex="-1"><a class="header-anchor" href="#_5-2-计算阶乘"><span>5.2 计算阶乘</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> i<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> num<span class="token punctuation">;</span> i <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  result <span class="token operator">=</span> result <span class="token operator">*</span> i<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：24</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>阶乘是所有小于及等于某一数的正整数的积，如4的阶乘，在数学中表示为<code v-pre>4!</code>，结果为<code v-pre>4 * 3 * 2 * 1</code>。</p>
<p>在代码中，就可以用一个变量来保存每次做乘法的结果，如 4 的阶乘，就可以用变量<code v-pre>result</code>记录结果，初始值为 1，循环可以从 4 循环到 1，每次将循环到的值乘以<code v-pre>result</code>，循环结束后就可以得到结果。</p>
<h2 id="_6-小结" tabindex="-1"><a class="header-anchor" href="#_6-小结"><span>6. 小结</span></a></h2>
<p>循环语句和条件语句一样，是给语言带来处理业务能力的重要特性之一。</p>
<p>通常如果需要连续执行多次的重复操作，都应该考虑使用循环来解决。</p>
</div></template>


