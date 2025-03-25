<template><div><h1 id="属性过滤选择器" tabindex="-1"><a class="header-anchor" href="#属性过滤选择器"><span>属性过滤选择器</span></a></h1>
<p>属性过滤选择器根据元素的某个属性获取元素，如I号或匹配属性值的内容，并以 '[' 号开始、以 ']' 号结束。其详细的说明如表 2-11所示。</p>
<p>表 2-11 属性过滤选择器语法</p>
<table>
<thead>
<tr>
<th>选择器</th>
<th>功能</th>
<th>返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>[attribute]</code></td>
<td>获取给定属性的元素</td>
<td>元素集合</td>
</tr>
<tr>
<td><code v-pre>[attribute=value]</code></td>
<td>获取给定属性是某个特定值的元素</td>
<td>元素集合</td>
</tr>
<tr>
<td><code v-pre>[attribute!=value]</code></td>
<td>获取给定属性不是某个特定值的元素</td>
<td>元素集合</td>
</tr>
<tr>
<td><code v-pre>[attribute^=value]</code></td>
<td>获取给定属性是以某些值开始的元素</td>
<td>元素集合</td>
</tr>
<tr>
<td><code v-pre>[attribute$=value]</code></td>
<td>获取给定属性是以某些值结尾的元素</td>
<td>元素集合</td>
</tr>
<tr>
<td><code v-pre>[attribute*=value]</code></td>
<td>获取给定属性是以包含某些值的元素</td>
<td>元素集合</td>
</tr>
<tr>
<td><code v-pre>[selectorl][selector2][selectorN]</code></td>
<td>获取满足多个条件的复合属性的元素</td>
<td>元素集合</td>
</tr>
</tbody>
</table>
</div></template>


