<template><div><h2 id="_3-5-复制节点" tabindex="-1"><a class="header-anchor" href="#_3-5-复制节点"><span>3.5 复制节点</span></a></h2>
<p>在页面中，有时需要将某个元素节点复制到另外一个节点后，如购物网站中购物车的设计。在传统的javaScript中，需要编写较为复杂的代码，而在jQuery中，可以通过方法clone() 轻松实现，该方法的语法格式为:
<code v-pre>clone()</code>
其功能为复制匹配的 DOM 元素并且选中复制成功的元素，该方法仅是复制元素本身，被复制后的新元素不具有任何元素行为。如果需要在复制时将该元素的全部行为也进行复制，可以通过方法clone(true)实现，其格式为:
<code v-pre>clone(true)</code>
其中的参数设置为 true 就可以复制元素的所有事件处理。示例3-14很好地展示了调用clone()方法，将一个元素标记复制成另一外标记的使用方法。</p>
</div></template>


