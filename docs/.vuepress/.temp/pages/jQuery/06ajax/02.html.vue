<template><div><h2 id="_6-2-请求服务器数据" tabindex="-1"><a class="header-anchor" href="#_6-2-请求服务器数据"><span>6.2 请求服务器数据</span></a></h2>
<p>前面6.1节介绍的是如何在<code v-pre>HTML</code>页面中加载异步数据的方法，即如何从服务器上取得静态的数据。但页面的应用远不仅局限于此，<code v-pre>Ajax</code>技术最终体现在与服务器的动态数据实现人机交互中，即客户端传递带有参数的请求，服务器接收后，分析所传递来的请求，并做出相应的响应，发送对应数据至客户端，客户端接收请求返回的数据，从而实现了数据的双向传递。</p>
<p>下面就介绍交互式函数的应用。</p>
<h3 id="_6-2-1-get-请求数据" tabindex="-1"><a class="header-anchor" href="#_6-2-1-get-请求数据"><span>6.2.1 <code v-pre>$.get()</code>请求数据</span></a></h3>
<p>在上面的 6.1.5小节中，通过调用全局函数<code v-pre>$.get()</code>，实现了XML文档的加载。
除加载数据外，<code v-pre>$.get()</code>函数还可以实现数据的请求。
下面通过一个示例介绍<code v-pre>$.get()</code>函数带参请求服务器中的数据。</p>
<p>示例 6-6 全局函数 get()向服务器请求数据</p>
<p>(1)功能描述</p>
<p>创建一个服务器页面<code v-pre>UserInfo.aspx</code>，该页面的功能是获取客户端发送的请求，并分析传来的参数值，返回对应的结果。
另外，在客户端<code v-pre>HMTL</code>页面的文本框中，输入传递的参数值，单击“请求数据”按钮后，显示服务器返回的数据结果。</p>
<p>(2)实现代码</p>
<p>新建一个<code v-pre>HTML</code>文件 <code v-pre>6-6.html</code>,加入如代码清单 6-6 所示的代码。</p>
</div></template>


