<template><div><h2 id="nodejs-在-vscode-报错处理办法" tabindex="-1"><a class="header-anchor" href="#nodejs-在-vscode-报错处理办法"><span>nodejs 在 vscode 报错处理办法</span></a></h2>
<ol>
<li>
<p>管理员权限运行<code v-pre>powerShell</code></p>
</li>
<li>
<p>执行：</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">get-executionpolicy </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>会得到：“Restricted”</p>
<ol start="3">
<li>执行：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">set-executionpolicy <span class="token parameter variable">-executionpolicy</span> unrestricted</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>
<p>输入a，表示全部同意all</p>
</li>
<li>
<p>再次执行：</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">get-executionpolicy</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>得到：Unrestricted</p>
<ol start="6">
<li>重启<code v-pre>vscode</code>，打开终端重新执行之前无法运行的<code v-pre>node</code>命令</li>
</ol>
<h2 id="nodejs-快速下载" tabindex="-1"><a class="header-anchor" href="#nodejs-快速下载"><span>nodejs 快速下载</span></a></h2>
<p>由于<code v-pre>npm</code>的源在国外，所以国内用户使用起来各种不方便，可能会出现无法访问，发生异常，或者下载缓慢等问题。为此，淘宝搭建了 <code v-pre>cnpm</code>（中国 npm 镜像的客户端），它是一个完整的 <code v-pre>npmjs.org</code> 镜像，你可以用此代替官方版本
下面就介绍国内常用的npm镜像资源 —淘宝镜像的各种使用方法（永久/单次）
注：<code v-pre>http://npm.taobao.org</code>和 <code v-pre>http://registry.npm.taobao.org</code> 已在 2022.06.30 号正式下线和停止 DNS 解析。
新域名为 npmmirror.com
域名切换规则：</p>
<p>http://npm.taobao.org =&gt; http://npmmirror.com
http://registry.npm.taobao.org =&gt; http://registry.npmmirror.com</p>
<h2 id="下面介绍的都是最新版本的使用方法-请各位放心食用" tabindex="-1"><a class="header-anchor" href="#下面介绍的都是最新版本的使用方法-请各位放心食用"><span>下面介绍的都是最新版本的使用方法，请各位放心食用！！</span></a></h2>
<p>淘宝镜像的使用方法举例</p>
<p>前提：电脑上安装了 node,以下命令在 cmd 中输入</p>
<ol>
<li>单次临时使用</li>
</ol>
<p>比如我当前项目使用npm install安装所有module依赖太慢了，但又不想安装整一个cnpm下来，这时就可以把源换成淘宝镜像，会快很多</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--registry</span><span class="token operator">=</span>http://registry.npmmirror.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>同理，只是想用镜像安装一个模块<code v-pre>module</code>，可以使用下面的命令</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span>  <span class="token function">install</span> 模块名 <span class="token parameter variable">--registry</span><span class="token operator">=</span>http://registry.npmmirror.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>比如我想用淘宝镜像安装<code v-pre>express</code></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span>  <span class="token function">install</span> express <span class="token parameter variable">--registry</span><span class="token operator">=</span>http://registry.npmmirror.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>--registry</code> <code v-pre>https://registry.npm.taobao.org</code>放在<code v-pre>install</code>前面后面都可以</p>
<ol start="2">
<li>使用cnpm
使用阿里定制的 cnpm 命令行工具代替默认的 npm，输入以下代码</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>http://registry.npmmirror.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>检查是否安装成功：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">cnpm <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>安装成功之后，以后安装依赖包的方式和<code v-pre>npm</code>的是一样的，只是<code v-pre>npm</code>的命令换成是<code v-pre>cnpm</code>就可以了，比如：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">cnpm <span class="token function">install</span> express</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>后续你想用<code v-pre>npm</code>安装还是使用<code v-pre>cnpm</code>安装都可以</p>
<ol start="3">
<li>将<code v-pre>npm</code>源永久替换为<code v-pre>cnpm</code>
在开发 <code v-pre>react-native</code> 的时候，不要使用 <code v-pre>cnpm</code>，<code v-pre>cnpm</code> 安装的模块路径比较奇怪，<code v-pre>package</code> 不能正常识别。
所以，为了方便开发，我们最好是直接永久使用淘宝的镜像源
直接命令行的设置</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://registry.npmmirror.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>手动修改设置
打开.npmrc文件（C:\Program Files\nodejs\node_modules\npm\npmrc，没有的话可以使用git命令行建一个( touch .npmrc)，用cmd命令建会报错）
增加 registry=http://registry.npmmirror.com 即可。
如果需要恢复成原来的官方地址只需要执行如下命令:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>检测是否安装成功：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> config get registry</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>会返回http://registry.npmmirror.com</p>
</div></template>


