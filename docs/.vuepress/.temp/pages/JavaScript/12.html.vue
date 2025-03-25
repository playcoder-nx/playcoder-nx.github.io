<template><div><h1 id="javascript-对象" tabindex="-1"><a class="header-anchor" href="#javascript-对象"><span>JavaScript 对象</span></a></h1>
<blockquote>
<p>对象 指包含数据和用于处理数据的指令的数据结构. 对象有时也指现实世界中的一些事, 例如在赛车游戏当中一辆车或者一幅地图都可以是一个对象。—— MDN</p>
</blockquote>
<p>JavaScript 中的对象由<code v-pre>属性</code>和<code v-pre>方法</code>组成。</p>
<p>属性可以是任意 JavaScript 中的数据类型，方法则是一个函数。</p>
<h2 id="_1-创建对象" tabindex="-1"><a class="header-anchor" href="#_1-创建对象"><span>1. 创建对象</span></a></h2>
<p>对象的格式如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">prop1</span><span class="token operator">:</span> <span class="token string">'value1'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">prop2</span><span class="token operator">:</span> <span class="token number">666</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">prop3</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">method1</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">代码块<span class="token number">1234567</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code v-pre>prop1</code>、<code v-pre>prop2</code>、<code v-pre>prop3</code> 都是属性，<code v-pre>method1</code> 是方法，属性是任意的数据类型，方法则是一个函数。</p>
<p>可以看到一个属性或者方法，在其名字与值中间采用冒号 <code v-pre>:</code> 分隔，属性和方法之间采用逗号 <code v-pre>,</code> 分隔。</p>
<p>通常属性和方法的名字会被称为<code v-pre>属性名</code>与<code v-pre>方法名</code>，属性的值称为<code v-pre>属性值</code>，方法的值则直接叫做 <code v-pre>方法</code>。</p>
<p>对象符合 <code v-pre>key/value</code> 的结构，一个 <code v-pre>key</code> 对应一个 <code v-pre>value</code>，这种结构也被称为键值对，属性名和方法名都是 <code v-pre>key</code>，他们的值都是 <code v-pre>value</code>。</p>
<blockquote>
<p>注意：在 JavaScript 的对象中，方法和属性的表示其实是一样的。</p>
<p>一个属性的值如果是一个函数，则就把这个属性称之为方法，只是称呼上的不同。</p>
</blockquote>
<p>对象最简单的创建方式就是使用<code v-pre>对象字面量</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上创建了一个最简单的空对象。</p>
<p>对象在 JavaScript 中的应用范围非常广。</p>
<p>可以试想一下，如果需要用变量描述一个人的信息，包括名字、性别、年龄、双亲信息，同时就要表示这个人的一些行为，如说话。</p>
<p>显然数值、字符串、布尔类型这些数据类型是不太适合描述这样一个人的。</p>
<p>这个时候就可以考虑使用对象，也就是说当需要描述的事物变得复合（无法使用单一的数据类型描述的时候），就可以考虑使用对象存储数据。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'name'</span><span class="token operator">:</span> <span class="token string">'小明'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'age'</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">isAdult</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'man'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'eat'</span><span class="token punctuation">,</span> <span class="token string">'sleep'</span><span class="token punctuation">,</span> <span class="token string">'play doudou'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">parents</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">mather</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'大红'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">father</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'大明'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我叫'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">'，我今年'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token string">'岁了。'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在控制台可以观察 person 对象</span></span>
<span class="line">代码块<span class="token number">1234567891011121314151617181920</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个 <code v-pre>person</code> 变量就是一个对象，用于描述一个人，这个人具有 <code v-pre>name</code>、<code v-pre>age</code> 等属性与方法。</p>
<p>在控制台输出对象后，可以对其展开，观察他的内容。</p>
<p>其中部分属性在声明的时候，属性名上加上了引号，这在 JavaScript 中是被允许的，但一般情况下不会加上引号，原因之一是没有必要加，不应该与字符串混淆，另外一点就是可以消除初学者对 JSON 和 JavaScript 对象在理解上的歧义。</p>
<h2 id="_2-操作对象" tabindex="-1"><a class="header-anchor" href="#_2-操作对象"><span>2. 操作对象</span></a></h2>
<p>创建对象主要是为了设置、访问对象的属性值，调用对象的方法等。</p>
<h3 id="_2-1-访问对象的属性值" tabindex="-1"><a class="header-anchor" href="#_2-1-访问对象的属性值"><span>2.1 访问对象的属性值</span></a></h3>
<p>访问属性有 2 种方式：</p>
<ol>
<li><code v-pre>对象.属性名</code></li>
<li><code v-pre>对象['属性名']</code></li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'value'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'never 996'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出："value"</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">'key'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出："value"</span></span>
<span class="line"></span>
<span class="line">obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出："never 996"</span></span>
<span class="line">obj<span class="token punctuation">[</span><span class="token string">'say'</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出："never 996"</span></span>
<span class="line">代码块<span class="token number">123456789101112</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两种方式都很常用。第二种通常会应用在需要用变量确定属性名的时候去使用。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'鸽手'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">12345678</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是使用第二种方式的场景之一，使用 <code v-pre>Object.keys()</code> 获取到 person 的所有属性名组成的数组，对数组做遍历拿到每一个属性名并放在一个变量中，再通过变量访问到对应的属性值。</p>
<p>当试图访问一个不存在的属性的时候，则会返回 <code v-pre>undefined</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：undefined</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-设置对象的属性值" tabindex="-1"><a class="header-anchor" href="#_2-2-设置对象的属性值"><span>2.2 设置对象的属性值</span></a></h3>
<p>设置属性值也有 2 种方式：</p>
<ol>
<li><code v-pre>对象.属性名 = 属性值</code></li>
<li><code v-pre>对象['属性名'] = 属性值</code></li>
</ol>
<p>设置属性值的方式与访问值很相似，只是多了一个赋值操作。</p>
<p>设置属性值按照如下规则进行：</p>
<ul>
<li>如果对象中不存在这个属性，则创建这个属性并赋值</li>
<li>如果对象中存在这个属性，则直接赋值</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'阿花'</span><span class="token punctuation">;</span></span>
<span class="line">person<span class="token punctuation">[</span><span class="token string">'hobby'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'eat'</span><span class="token punctuation">,</span> <span class="token string">'play doudou'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123456789101112</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-使用特殊的属性名" tabindex="-1"><a class="header-anchor" href="#_3-使用特殊的属性名"><span>3. 使用特殊的属性名</span></a></h2>
<p>对象的属性名是可以用任意字符串表示的。</p>
<p>上面有提到，声明属性的时候可以带上引号。</p>
<p>如果不带引号，那属性名必须要符合变量命名的规则，使用引号包裹属性名，则可以使用任意字符串作为属性名。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">--</span><span class="token operator">^</span>$@@@age<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这样写是会报错的，如果非要使用这样的属性名，就可以加上一对引号，可以双引号，也可以是单引号，使用引号的规则和字符串一致。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'--^$@@@age'</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种特殊的属性名无法通过 <code v-pre>对象.属性名</code> 的形式访问。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'--^$@@@age'</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> val <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token operator">--</span><span class="token operator">^</span>$@@@age<span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">12345</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JavaScript 无法解析这种特殊的语法，所以要使用 <code v-pre>对象['属性名']</code> 的形式访问。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'--^$@@@age'</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> val <span class="token operator">=</span> obj<span class="token punctuation">[</span><span class="token string">'--^$@@@age'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：16</span></span>
<span class="line">代码块<span class="token number">1234567</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特殊的属性名场景比较少，如统计字符串的场景。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> counter <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> strs <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token string">'#@T%TGFDSgfdsgsf'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'#@T%TGFDSgfdsgsf'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'123fdafeafewa'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'123fdafeafewa'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">'#@T%TGFDSgfdsgsf'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">strs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token keyword">in</span> counter<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    counter<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    counter<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">12345678910111213141516171819</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>strs 是由字符串组成的数组，即需要统计的一组数据。</p>
<p>利用对象的特性来对字符串分类计数。</p>
<h2 id="_4-其他创建对象的方法" tabindex="-1"><a class="header-anchor" href="#_4-其他创建对象的方法"><span>4. 其他创建对象的方法</span></a></h2>
<p>除了字面量的方式，还有许多创建对象的方式。</p>
<h3 id="_4-1-使用-object-对象" tabindex="-1"><a class="header-anchor" href="#_4-1-使用-object-对象"><span>4.1 使用 Object 对象</span></a></h3>
<p>使用 <code v-pre>new Object()</code> 或者 <code v-pre>Object()</code> 的方式也可以创建一个对象</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">;</span> <span class="token comment">// 如果没有参数 可以不带括号</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> obj3 <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1234</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的方式都可以创建一个空对象。</p>
<p>比较有趣的是可以给 <code v-pre>Object</code> 传递一个对象字面量作为参数，返回的对象的属性与传入的对象字面量的属性一致。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'长睫毛'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小酒窝'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1234567891011</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-构造函数" tabindex="-1"><a class="header-anchor" href="#_4-2-构造函数"><span>4.2 构造函数</span></a></h3>
<p>使用构造函数，也可以创建对象。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token parameter">color<span class="token punctuation">,</span> maxSpeed</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>maxSpeed <span class="token operator">=</span> maxSpeed<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Car</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bibi</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'哔哔！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">,</span> <span class="token number">9999999</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123456789101112</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上例子使用构造函数创建了一个<code v-pre>速度超级快的车</code>对象。</p>
<h3 id="_4-3-object-create" tabindex="-1"><a class="header-anchor" href="#_4-3-object-create"><span>4.3 Object.create</span></a></h3>
<p>使用 <code v-pre>Object.create</code> 也可以创建一个新对象，但是必须传递一个对象作为参数。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> parent <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">walk</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'走路'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> son <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parent <span class="token operator">===</span> son<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">son<span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Object.create</code> 会根据传递过去的对象生成一个新的对象，作为参数传递的对象会作为新对象的原型。</p>
<h2 id="_5-遍历对象" tabindex="-1"><a class="header-anchor" href="#_5-遍历对象"><span>5. 遍历对象</span></a></h2>
<h3 id="_5-1-for-in" tabindex="-1"><a class="header-anchor" href="#_5-1-for-in"><span>5.1 for … in</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> me <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> i<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> me<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>me<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>for ... in</code> 可以遍历对象的所有 key 值，也就是属性名，取到所有的属性就可以访问到所有的属性值。</p>
<p>需要注意的是 <code v-pre>for ... in</code> 循环只遍历可枚举属性，同时对象原型上的也会被访问到。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> me <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> you <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">you<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> i<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> you<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个例子就把 <code v-pre>me</code> 和 <code v-pre>you</code> 中的所有属性都遍历出来了。</p>
<p>可以使用 <code v-pre>Object.prototype.hasOwnProperty</code> 来判断一个属性是否只处于其本身而不在原型上。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> me <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> you <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">you<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> i<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> you<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>you<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就只会输出 <code v-pre>age</code> 了。</p>
<h3 id="_5-2-object-keys" tabindex="-1"><a class="header-anchor" href="#_5-2-object-keys"><span>5.2 Object.keys</span></a></h3>
<p><code v-pre>Object.keys</code> 会返回对象上的所有可枚举属性组成的数组。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> gugugu <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'?王'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">'放鸽子'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>gugugu<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>keys<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gugugu<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过遍历属性组成的数组来遍历对象。</p>
<h3 id="_5-3-object-getownpropertynames" tabindex="-1"><a class="header-anchor" href="#_5-3-object-getownpropertynames"><span>5.3 Object.getOwnPropertyNames</span></a></h3>
<p>使用 <code v-pre>Object.getOwnPropertyNames</code> 也可以获取到由属性组成的数组，但数组会包括不可枚举的属性。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> gugugu <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'?王'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">'放鸽子'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> desc <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">desc<span class="token punctuation">.</span>enumerable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 是否可枚举 默认就是false</span></span>
<span class="line">desc<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'最强鸽手'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>gugugu<span class="token punctuation">,</span> <span class="token string">'nickname'</span><span class="token punctuation">,</span> desc<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>gugugu<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>gugugu<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">12345678910111213</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>getOwnPropertyNames</code> 比使用 <code v-pre>keys</code> 多出一个不可枚举的 <code v-pre>nickname</code> 属性。</p>
<blockquote>
<p>注意：ES6 还提供了<code v-pre>Object.values</code>、<code v-pre>Object.entries</code>、<code v-pre>for ... of</code>、<code v-pre>Reflect.ownKeys</code>等特性，结合这些特性也能遍历一个对象。</p>
</blockquote>
<h2 id="_6-创建绝对纯净的对象" tabindex="-1"><a class="header-anchor" href="#_6-创建绝对纯净的对象"><span>6. 创建绝对纯净的对象</span></a></h2>
<blockquote>
<p>纯净对象仅为本篇中的称呼方式，这种特殊的对象没有特定的称呼。</p>
</blockquote>
<p>纯净对象即原型为 null 的对象。</p>
<p>使用 <code v-pre>Object.create(null)</code> 来创建纯净对象。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj1 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以尝试在控制台中对比这两个对象，纯净对象是没有原型的，无法调用 <code v-pre>toString</code>、<code v-pre>hasOwnProperty</code>、<code v-pre>valueOf</code> 这些原型上的方法。</p>
<p>大部分使用纯净对象的场景是使用 <code v-pre>Object.defineProperty</code> 为对象创建属性的时候，属性的描述需要一个绝对干净的对象，防止特殊的属性对描述造成影响。</p>
<p>另外的使用场景就是当作一个字典使用，防止原型上的内容对字典产生干扰。</p>
<h2 id="_7-小结" tabindex="-1"><a class="header-anchor" href="#_7-小结"><span>7. 小结</span></a></h2>
<p>对象最常用的两种创建方式，就是使用字面量和构造函数。</p>
<p>创建对象的时候应合理规划属性名和方法名，根据业务来确定如何使用对象。</p>
</div></template>


