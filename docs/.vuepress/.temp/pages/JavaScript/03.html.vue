<template><div><h1 id="javascript-变量" tabindex="-1"><a class="header-anchor" href="#javascript-变量"><span>JavaScript 变量</span></a></h1>
<blockquote>
<p>变量来源于数学，是计算机语言中能储存计算结果或能表示值抽象概念。</p>
</blockquote>
<p>变量就是<code v-pre>存放一些内容</code>的<code v-pre>容器</code>。</p>
<p>对于初学者，理解变量是重要的一环。</p>
<p>从分析<code v-pre>变量</code>这个名词，可以知道他是一个<code v-pre>可以改变的量</code>，这里的量就是代表某一种<code v-pre>值</code>。</p>
<p>在 JavaScript 中，变量就是一个用来存放值的容器，并且可以对容器中的值做修改。</p>
<p>每个变量都有唯一的变量名，使用变量名来区分变量。</p>
<p><img src="https://img.mukewang.com/wiki/5e7ae7af09c9e23014400452.jpg" alt="图片描述"></p>
<h2 id="_1-声明变量" tabindex="-1"><a class="header-anchor" href="#_1-声明变量"><span>1. 声明变量</span></a></h2>
<p>在 JavaScript 中使用<code v-pre>var</code>关键字来声明变量。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> 存放数字用的变量 <span class="token operator">=</span> <span class="token number">996</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>存放数字用的变量<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：996</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述这段代码就是<code v-pre>申明</code>了一个名为<code v-pre>存放数字用的变量</code>的变量，并且将它的值设为<code v-pre>996</code>。</p>
<p>使用 <code v-pre>console.log</code>，括号内放置<code v-pre>变量名</code>，即可将变量的值输出在控制台。</p>
<p>其中 <code v-pre>//</code> 后面的内容为<code v-pre>注释</code>，代码执行过程中会被忽略。</p>
<p>虽然使用中文作为变量名在 <code v-pre>chrome</code> 浏览器下没有报错，但是还是不建议使用。</p>
<p>常规场景中<strong>不会有使用中文名作为变量的情况</strong>。</p>
<p>所以上述例子中的变量名不可取。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token number">996</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：996</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将<code v-pre>存放数字用的变量</code>修改成 <code v-pre>number</code> ，执行结果是一样的。</p>
<h2 id="_2-赋值" tabindex="-1"><a class="header-anchor" href="#_2-赋值"><span>2. 赋值</span></a></h2>
<p>给变量设置值的操作称为<code v-pre>赋值</code>操作。</p>
<h3 id="_2-1-最简单的赋值操作" tabindex="-1"><a class="header-anchor" href="#_2-1-最简单的赋值操作"><span>2.1 最简单的赋值操作</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：0</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个最简单的赋值操作，直接将值赋给变量。</p>
<p>通常只有<code v-pre>一个等号</code>出现的情况下就存在赋值操作。</p>
<h3 id="_2-2-将计算结果赋值给变量" tabindex="-1"><a class="header-anchor" href="#_2-2-将计算结果赋值给变量"><span>2.2 将计算结果赋值给变量</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：5</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这也是一个赋值操作，只不过等号右边的 <code v-pre>2 + 3</code> 会被计算出结果（计算的方式和小学开始学习的自然数学一样），再赋给变量 <code v-pre>result</code>。</p>
<p>将上面这个例子做一个简单的改写：</p>
<h3 id="_2-3-让变量也参与计算" tabindex="-1"><a class="header-anchor" href="#_2-3-让变量也参与计算"><span>2.3 让变量也参与计算</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> number1 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> number2 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> result <span class="token operator">=</span> number1 <span class="token operator">+</span> number2<span class="token punctuation">;</span> <span class="token comment">// 2 + 3</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：5</span></span>
<span class="line">代码块<span class="token number">123456</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原本 <code v-pre>2 + 3</code> 这部分也可以被变量所代替，参与计算的就是变量中的值。</p>
<h3 id="_2-4-改变变量的值" tabindex="-1"><a class="header-anchor" href="#_2-4-改变变量的值"><span>2.4 改变变量的值</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> string <span class="token operator">=</span> <span class="token string">'今天加班？'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：今天加班？</span></span>
<span class="line"></span>
<span class="line">string <span class="token operator">=</span> <span class="token string">'福报！'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：福报！</span></span>
<span class="line">代码块<span class="token number">1234567</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：</p>
<p>这里赋给变量的值和之前有点不一样，是中文文字。</p>
<p>当需要用变量存放一些“字”的时候，就需要用单引号<code v-pre>'</code>或者双引号<code v-pre>&quot;</code>将需要存放的字包裹。</p>
<p>通常单个字会称之为<code v-pre>字符</code>，多个字的时候称为<code v-pre>字符串</code>。</p>
<p>这里做个了解，具体的会在后续<code v-pre>数据类型</code>章节详细展开讨论。</p>
</blockquote>
<p>这段代码运行后可以在控制台观察到有两个输出，分别对应变量的值。</p>
<p>代码很简单，先声明了一个叫 <code v-pre>string</code> 的变量，并赋值字符串<code v-pre>今天加班？</code>并输出，随后修改了他的值，重新赋值了字符串<code v-pre>福报！</code>。</p>
<p>这是变量最重要的一个特性：<code v-pre>可变</code>。</p>
<h2 id="_3-变量的命名规范" tabindex="-1"><a class="header-anchor" href="#_3-变量的命名规范"><span>3. 变量的命名规范</span></a></h2>
<p>在 JavaScript 中变量名存在一定规范，所有变量名必须符合这些规范，否则程序无法执行。</p>
<h3 id="_3-1-变量名必须使用字母、下划线-、美元符号-开头" tabindex="-1"><a class="header-anchor" href="#_3-1-变量名必须使用字母、下划线-、美元符号-开头"><span>3.1 变量名必须使用<code v-pre>字母</code>、<code v-pre>下划线(_)</code>、<code v-pre>美元符号($)</code>开头</span></a></h3>
<p>尽管之前的例子有用到中文作为变量名，但是是不推荐的。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 不会报错但是不推荐</span></span>
<span class="line"><span class="token keyword">var</span> 数字 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 错误</span></span>
<span class="line"><span class="token keyword">var</span> 1number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 错误</span></span>
<span class="line"><span class="token keyword">var</span> number@a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 错误</span></span>
<span class="line"><span class="token keyword">var</span> num<span class="token operator">+</span>aa <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//下面是正确的方式</span></span>
<span class="line"><span class="token keyword">var</span> number1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> _number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> $number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">12345678910111213</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是一些简单的示例，可以根据规则自己在控制台尝试寻找规则。</p>
<p><img src="https://img.mukewang.com/wiki/5e7a42720a59717f10810372.jpg" alt="图片描述"></p>
<h3 id="_3-2-变量对大小写敏感" tabindex="-1"><a class="header-anchor" href="#_3-2-变量对大小写敏感"><span>3.2 变量对大小写敏感</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 这是两个不同的变量</span></span>
<span class="line"><span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token string">'Hello'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> firstname <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是两个不同的变量，在 <code v-pre>JavaScript</code> 中变量是对大小写敏感的。</p>
<p>两个变量名即便字母是相同的，但是大小写不同，就不能算做一个变量。</p>
<h3 id="_3-3-无法使用关键字作为变量名" tabindex="-1"><a class="header-anchor" href="#_3-3-无法使用关键字作为变量名"><span>3.3 无法使用关键字作为变量名</span></a></h3>
<p><code v-pre>关键字</code>就是指一些已经被 <code v-pre>JavaScript</code> 预定义或者保留下来的内容，如声明变量用的关键字 <code v-pre>var</code> 就不能作为变量名。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> <span class="token keyword">var</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught SyntaxError: Unexpected token 'var'</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码尝试着将 var 作为变量，到控制台运行是会报错的。</p>
<h2 id="_4-合理规范的变量名" tabindex="-1"><a class="header-anchor" href="#_4-合理规范的变量名"><span>4. 合理规范的变量名</span></a></h2>
<blockquote>
<p>刚开始学习的读者，现在去深究如何命名一个变量还有些尚早，因为结合了具体的需求场景才能体会到一个好的变量名的重要性。可以先在此做个了解。</p>
</blockquote>
<p>对于变量名，除了上面提到的变量命名的规范，最需要注意的就是给变量起一个<code v-pre>有意义</code>的名字。</p>
<p>如求和：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num3 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num4 <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> count <span class="token operator">=</span> num1 <span class="token operator">+</span> num2 <span class="token operator">+</span> num3 <span class="token operator">+</span> num4<span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123456</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code v-pre>num</code>是<code v-pre>number</code>的缩写，是很常用的一种缩写。</p>
<p><code v-pre>count</code>则是总数，表示求和的结果。</p>
<p>如果将上述例子做如下修改：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> e <span class="token operator">=</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c <span class="token operator">+</span> d<span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123456</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺少了有意义的变量名就比较难看出代码具体在做什么。当然这段代码本身意义就不大，场景太过简单。</p>
<p>刚才提到的缩写，其实也是要注意的一点，缩写上一定要使用通用的缩写，如含有<code v-pre>fn</code>表示一个功能或者函数，<code v-pre>avg</code> 表示平均值，<code v-pre>pwd</code> 表示密码，<code v-pre>i18n</code> 为国际化。</p>
<p>这些缩写比较通用，大部分开发者都可以看得懂。随着编码经验的增加，会在他人代码里见到大量的缩写，从而累积到自己的大脑的缩写库中。</p>
<p>最后需要注意的一点是业务中尽量不要含有中文拼音或中文拼音的缩写，排开鄙视链的原因，最大的问题是会让变量名变得冗长难懂。</p>
<p>以上内容在写 demo 或者测试功能的时候可以不需要考虑，写 demo 等大部分情况是为了验证自己的猜想。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 不合理的变量名</span></span>
<span class="line"><span class="token keyword">var</span> ln <span class="token operator">=</span> <span class="token string">'World'</span><span class="token punctuation">;</span> <span class="token comment">// last name</span></span>
<span class="line"><span class="token keyword">var</span> zs <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 总数</span></span>
<span class="line"><span class="token keyword">var</span> jinNianDeNianShouRu <span class="token operator">=</span> <span class="token number">1999999999</span><span class="token punctuation">;</span> <span class="token comment">// 今年的年收入</span></span>
<span class="line">代码块<span class="token number">1234</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是针对<code v-pre>变量名的意义</code>展开的讨论。</p>
<p>还有需要注意的是变量命名的格式，大部分前端程序员会使用<code v-pre>驼峰命名法</code>，也就是第一个字母小写，后续如果有新的单词来进行构成，单词的第一个字符都大写。</p>
<p>如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token string">'Hello'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> lastName <span class="token operator">=</span> <span class="token string">'world'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> createAt <span class="token operator">=</span> <span class="token number">1577895179196</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> userInfo <span class="token operator">=</span> <span class="token string">'用户信息'</span><span class="token punctuation">;</span> <span class="token comment">// Info => Information</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> isPaidUser <span class="token operator">=</span> <span class="token string">'是否付费用户'</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123456789</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以见到上面的变量，从构成变量名的第二个单词开始，首字母都是大写，这就是驼峰命名的格式，本 Wiki 所有变量名使用的就是这种格式。</p>
<p>当然还有大驼峰，就是第一个字母也大写。</p>
<p>除此之外最常用的还有使用下划线分隔变量，如 <code v-pre>user_info</code>，还有按功能来划分的变量名，如使用<code v-pre>匈牙利命名</code>法，这里不再做展开。</p>
<h2 id="_5-有关变量的其他知识" tabindex="-1"><a class="header-anchor" href="#_5-有关变量的其他知识"><span>5. 有关变量的其他知识</span></a></h2>
<h3 id="_5-1-变量的默认值" tabindex="-1"><a class="header-anchor" href="#_5-1-变量的默认值"><span>5.1 变量的默认值</span></a></h3>
<p>变量在声明的时候，如果没有赋值，则变量就会有一个默认值 <code v-pre>undefined</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> total<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：undefined</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>undefined</code> 是一种是数据类型，具体内容可以参考<code v-pre>数据类型</code>章节。</p>
<h3 id="_5-2-同时声明多个变量" tabindex="-1"><a class="header-anchor" href="#_5-2-同时声明多个变量"><span>5.2 同时声明多个变量</span></a></h3>
<p>使用一个 <code v-pre>var</code> 关键字就可以直接声明多个变量。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> num2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 通常会换行，方便阅读代码</span></span>
<span class="line"><span class="token keyword">var</span> num3 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    num4 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    num5 <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    num6<span class="token punctuation">,</span></span>
<span class="line">    num7 <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">12345678</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在一个变量声明后，使用逗号分隔，紧接着声明下一个变量即可。</p>
<p>通常使用一个 <code v-pre>var</code> 声明多个变量的时候也会换行，方便后续阅读，并保持代码格式上的整洁清晰，防止一行过长。</p>
<h3 id="_5-3-变量在-window-上" tabindex="-1"><a class="header-anchor" href="#_5-3-变量在-window-上"><span>5.3 变量在 window 上</span></a></h3>
<p>在最外层声明的变量（不包括 ES6 模块的情况），实际上是变成了 window 对象的一个属性。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token number">996</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：996</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：996</span></span>
<span class="line">代码块<span class="token number">1234</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码执行后输出的两个内容是一样的，都为 996。有关 window 对象的内容可以参考 <code v-pre>BOM</code> 章节。</p>
<p>细心的读者应该会注意到<code v-pre>最外层</code>这个条件，因为变量还有可能声明在函数之中，函数有自己独立的作用域，通常在函数中使用 <code v-pre>var</code> 关键字声明的变量，只在函数中有效。</p>
<p>至于为什么可以省略 <code v-pre>window</code> 直接访问到变量，可以参考<code v-pre>作用域链</code>章节。</p>
<h3 id="_5-4-不使用-var-关键字声明的变量" tabindex="-1"><a class="header-anchor" href="#_5-4-不使用-var-关键字声明的变量"><span>5.4 不使用 var 关键字声明的变量</span></a></h3>
<p>假如不使用 <code v-pre>var</code> 关键字，直接创建变量并赋值：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">total <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：10</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在控制台运行后会发现其实并没有报错，输出的结果也正常。</p>
<p>在非<code v-pre>ES6模块</code>中，这样创建的变量和使用 <code v-pre>var</code> 创建的变量除了不能提前使用之外，没有其他大的区别，会被直接作为 window 对象的属性，成为全局变量。</p>
<p>即便是在函数或者其他存在块级作用域的环境中，这样声明的变量也会作为全局变量。</p>
<h3 id="_5-5-连续赋值" tabindex="-1"><a class="header-anchor" href="#_5-5-连续赋值"><span>5.5 连续赋值</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>假如把上面这行代码拆开来可以理解成是这样的：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> b<span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">12</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看似没什么问题，许多开发者也会用这种方式同时声明多个变量，但如果在函数或者独立的作用域中，<code v-pre>b</code> 就会成为全局变量，造成全局命名空间的污染。</p>
<h3 id="_5-6-重复声明变量" tabindex="-1"><a class="header-anchor" href="#_5-6-重复声明变量"><span>5.6 重复声明变量</span></a></h3>
<p>按照之前说的，变量在声明的时候如果没有赋值，则会是 <code v-pre>undefined</code>，这个规则在重复声明的情况下不适用。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：1</span></span>
<span class="line">代码块<span class="token number">1234</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>观察上面这个例子输出的结果，可以发现变量 <code v-pre>num</code> 的值并没有改变。</p>
<p>但是如果重新声明的同时做赋值操作，值就会改变。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：3</span></span>
<span class="line">代码块<span class="token number">1234</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子输出的结果，就是再次声明并赋值后的值。</p>
<h3 id="_5-7-提前使用变量" tabindex="-1"><a class="header-anchor" href="#_5-7-提前使用变量"><span>5.7 提前使用变量</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：undefined</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子先输出了 <code v-pre>number</code> 的值，再声明并对其进行赋值。</p>
<p>代码并没有报错，但如果没有第二行声明，只输出 <code v-pre>number</code>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: number is not defined</span></span>
<span class="line">代码块<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样子会爆出<code v-pre>变量未定义</code>的错误，说明变量是可以被提前使用，只是没有值，或者说是 <code v-pre>undefined</code> 默认值。</p>
<p>具体原因可以参考<code v-pre>执行上下文</code>章节。</p>
<p>这里简单的解释可以理解成，在浏览器执行的时候，会把代码调整成如下样子：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> number<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这个时候 number 还没有被赋值，所以输出 undefined</span></span>
<span class="line"></span>
<span class="line">number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">12345</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-8-常量" tabindex="-1"><a class="header-anchor" href="#_5-8-常量"><span>5.8 常量</span></a></h3>
<p>常量就是定义并赋值后再也不能修改的量，通常一些不会改变的量，如配置、物理值等会声明为常量，在 ES6 之前是没有提供常量这一特性的。</p>
<p>但是根据常量自身的特性，<code v-pre>定义赋值后不能被修改</code>，就可以通过一些方式来模拟常量。</p>
<p>第一种就是采用约定的形式，通常常量都是大写，不同单词之间用下划线分隔。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.1415926535</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> <span class="token constant">DB_ACCOUNT</span> <span class="token operator">=</span> <span class="token string">'root'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token constant">DB_PASSWORD</span> <span class="token operator">=</span> <span class="token string">'root'</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">1234</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式定义的<code v-pre>常量</code>本质上还是变量，值还是可以修改的，但因为命名格式采用<code v-pre>国际惯例</code>，一眼就能看出是常量，不会对其修改。</p>
<p>这种方式是最简单的方式，但不安全。</p>
<p>第二种方式就是利用对象下属性的描述来控制可写性，将对象的属性设置为只读。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> <span class="token constant">CONFIG</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token constant">CONFIG</span><span class="token punctuation">,</span> <span class="token string">'DB_ACCOUNT'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">CONFIG</span><span class="token punctuation">.</span><span class="token constant">DB_ACCOUNT</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：root</span></span>
<span class="line"></span>
<span class="line"><span class="token constant">CONFIG</span><span class="token punctuation">.</span><span class="token constant">DB_ACCOUNT</span> <span class="token operator">=</span> <span class="token string">'guest'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">CONFIG</span><span class="token punctuation">.</span><span class="token constant">DB_ACCOUNT</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 因为不可被改写，所以输出：root</span></span>
<span class="line">代码块<span class="token number">123456789101112</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式将常量都放在一个对象下，通过<code v-pre>Object.defineProperty</code>定义属性，设定其<code v-pre>writable</code>为<code v-pre>false</code>，就可以防止被改写。</p>
<p>但有一个问题，<code v-pre>CONFIG</code>自身这个对象可能被修改。</p>
<p>换一个思路，既然在最外层声明的变量是放在<code v-pre>window</code>上的，那可以用这个方式往 window上挂不可改写的属性。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">'DB_ACCOUNT'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">DB_ACCOUNT</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：root</span></span>
<span class="line"></span>
<span class="line"><span class="token constant">DB_ACCOUNT</span> <span class="token operator">=</span> <span class="token string">'guest'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">DB_ACCOUNT</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 因为不可被改写，所以输出：root</span></span>
<span class="line">代码块<span class="token number">12345678910</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常情况下 window 对象是不可被修改的，这样常量的安全系数就变得非常高，但缺点是可能性较差，通过一点修改可以提升可读性。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> <span class="token function-variable function">define</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">value</span><span class="token operator">:</span> value<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'DB_ACCOUNT'</span><span class="token punctuation">,</span> <span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'DB_PASSWORD'</span><span class="token punctuation">,</span> <span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">代码块<span class="token number">123456789</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要约定好使用 <code v-pre>define</code> 函数定义的都为常量即可。</p>
<p>还有两种方式，就是结合<code v-pre>Object.seal</code>与<code v-pre>Object.freeze</code>的特性来声明常量。</p>
<p>前者可以使对象不能再被扩充，但是所有属性还需要再手动设置不可写，后者可以让对象不能扩充，属性也不能修改。</p>
<p>这里对这两个原生方法不再做过多描述，有兴趣可以查阅相关 API 资料。</p>
<h2 id="_6-小结" tabindex="-1"><a class="header-anchor" href="#_6-小结"><span>6. 小结</span></a></h2>
<p>变量就是存放值的容器。</p>
<p>变量名存在一些命名规则：</p>
<ul>
<li>变量名必须使用<code v-pre>字母</code>、<code v-pre>下划线(_)</code>、<code v-pre>美元符号($)</code>开头；</li>
<li>变量对大小写敏感；</li>
<li>无法使用关键字作为变量名。</li>
</ul>
<p>同时起变量名的时候需要有意义，靠近上下文场景。</p>
</div></template>


