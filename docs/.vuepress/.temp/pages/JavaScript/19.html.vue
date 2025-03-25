<template><div><h1 id="document-cookie" tabindex="-1"><a class="header-anchor" href="#document-cookie"><span>document.cookie</span></a></h1>
<blockquote>
<p>Cookie 是一个请求首部，其中含有先前由服务器通过 Set-Cookie 首部投放并存储到客户端的 HTTP cookies。</p>
</blockquote>
<p>cookie 可以作为单独知识了解，这里其实介绍的是 <code v-pre>document.cookie</code> 。</p>
<h2 id="_1-document-cookie" tabindex="-1"><a class="header-anchor" href="#_1-document-cookie"><span>1. document.cookie</span></a></h2>
<p>通过 document.cookie 可以获取与设置 cookie 。</p>
<p><img src="https://img.mukewang.com/wiki/5e7a48070aa0746917041128.jpg" alt="图片描述"></p>
<h2 id="_2-获取-cookie" tabindex="-1"><a class="header-anchor" href="#_2-获取-cookie"><span>2. 获取 cookie</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">document<span class="token punctuation">.</span>cookie<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>通过 <code v-pre>document.cookie</code> 获取到的 cookie 由 cookie 的名称和值组成，由等号<code v-pre>=</code>分隔，并且可以有多条，每条 cookie 之间用分号 ‘;’ 分隔。</p>
<h2 id="_3-设置cookie" tabindex="-1"><a class="header-anchor" href="#_3-设置cookie"><span>3. 设置cookie</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> cookie <span class="token operator">=</span> <span class="token string">'cookie名称=cookie值'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> cookie<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置 cookie 采用<code v-pre>键值对</code>的形式。</p>
<p>对应的就是 <code v-pre>cookie的名称</code> 和 <code v-pre>cookie值</code> 。</p>
<p><strong>每次只能设置一条 cookie</strong> ，但可以同时设置这条 <code v-pre>cookie的属性</code> 。</p>
<p>如果需要设置多条 cookie ，则再次给 <code v-pre>document.cookie</code> 赋一个新值即可，但如果是相同名称的 cookie ，值就会被覆盖。</p>
<h2 id="_4-设置-cookie-属性" tabindex="-1"><a class="header-anchor" href="#_4-设置-cookie-属性"><span>4. 设置 cookie 属性</span></a></h2>
<p>设置 cookie 的同时可以设置这条 cookie 的属性。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">'名称=值; 属性1=属性值1; 属性2=属性值2'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>看起来是可以设置多条 cookie 一样，其实只有第一对值才是 cookie 的值，后面跟的都是这条 cookie 的属性。</p>
<p>可以跟随的属性有：</p>
<ul>
<li><code v-pre>path</code> cookie 生效的路径</li>
<li><code v-pre>domain</code> cookie 生效的域名</li>
<li><code v-pre>max-age</code> 过期时间，单位是秒</li>
<li><code v-pre>expires</code> 过期时间，为一个 UTC 时间</li>
<li><code v-pre>secure</code> 是否只能通过 https 来传递这条 cookie</li>
</ul>
<p>这些属性具体作用可以参考 cookie 相关的内容。</p>
<p>设置完属性可以通过开发者工具查看。</p>
<p>在开发者工具的 <code v-pre>Application</code> 面板，<code v-pre>cookie</code> 分类下，每一条 cookie 都可以看到对应的属性。</p>
<p><img src="https://img.mukewang.com/wiki/5e7a368209f2c94932702054.jpg" alt="图片描述"></p>
<h2 id="_5-注意点" tabindex="-1"><a class="header-anchor" href="#_5-注意点"><span>5. 注意点</span></a></h2>
<p>由于设置 cookie 是具有一定格式的，所以不能有字符来干扰这个格式。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> cookie <span class="token operator">=</span> <span class="token string">'code=var a = 1; var b = 2;'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> cookie<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种情况下，cookie 就不符合预期了，被切断。</p>
<p>cookie 中不应该含有空格、分号、逗号这些符号。</p>
<p>借助 <code v-pre>encodeURIComponent</code> 方法，对 cookie 的值进行编码就可以避免这类问题。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> cookie <span class="token operator">=</span> <span class="token string">'code='</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">'var a = 1; var b = 2;'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> cookie<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后续需要使用到这一条 cookie 的地方，再做一次解码操作即可。</p>
<blockquote>
<p>注意：对字符串编码还可以使用 escape 方法，但已经从标准中移除，目前浏览器虽然还支持这个方法，但无法保证永远会保留这个方法，最好避免使用 escape 方法。</p>
</blockquote>
<h2 id="_6-小结" tabindex="-1"><a class="header-anchor" href="#_6-小结"><span>6. 小结</span></a></h2>
<p>随着前端存储方案的增加，前端程序员访问 <code v-pre>document.cookie</code> 相对曾经减少了很多。</p>
<p>给 <code v-pre>document.cookie</code> 赋值可以增加一条 cookie，同时通过 <code v-pre>;</code> 相隔，来设置这条 cookie 的属性。</p>
<p>当设置的 cookie 带有特殊字符的时候，如 <code v-pre>;</code> 或者 <code v-pre>=</code>，应采用 <code v-pre>encodeURIComponent</code> 对内容编码，建议所有的 cookie 都进行编码。</p>
</div></template>


