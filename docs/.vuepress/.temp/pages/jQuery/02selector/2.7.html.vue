<template><div><h1 id="子元素过滤选择器" tabindex="-1"><a class="header-anchor" href="#子元素过滤选择器"><span>子元素过滤选择器</span></a></h1>
<p>在页面开发过程中，常常遇到突出指定某行的需求。虽然使用基本过滤选择器 <code v-pre>:eq(index)</code> 可实现单个表格的显示，但不能满足大量数据和多个表格的选择需求。为了实现这样的功能,jQuery 中可以通过子元素过滤选择器轻松获取所有父元素中指定的某个元素。其详细的说明如表 2-13 所示。</p>
<p>表 2-13 子元素过滤选择器语法</p>
<table>
<thead>
<tr>
<th style="text-align:left">选择器</th>
<th style="text-align:left">功能</th>
<th style="text-align:left">返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">:nth-child(eq or even or odd or index)</td>
<td style="text-align:left">获取每个父元素下的特定位置元素，索引号从1开始</td>
<td style="text-align:left">元素集合</td>
</tr>
<tr>
<td style="text-align:left">:first-child</td>
<td style="text-align:left">获取每个父元素下的第一个子元素</td>
<td style="text-align:left">元素集合</td>
</tr>
<tr>
<td style="text-align:left">:last-child</td>
<td style="text-align:left">获取每个父元素下的最后一个子元素</td>
<td style="text-align:left">元素集合</td>
</tr>
<tr>
<td style="text-align:left">:only-child</td>
<td style="text-align:left">获取每个父元素下的仅有一个子元素</td>
<td style="text-align:left">元素集合</td>
</tr>
</tbody>
</table>
</div></template>


