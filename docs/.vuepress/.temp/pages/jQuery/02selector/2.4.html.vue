<template><div><h1 id="内容过滤选择器" tabindex="-1"><a class="header-anchor" href="#内容过滤选择器"><span>内容过滤选择器</span></a></h1>
<p>内容过滤选择器根据元素中的文字内容或所包含的子元素特征获取元素，其文字内容可以模糊或绝对匹配进行元素定位，其详细说明如表 2-7所示。</p>
<p>表 2-7 内容过滤选择器语法</p>
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
<td>:contains(text)</td>
<td>获取包含给定文本的元素</td>
<td>元素集合</td>
</tr>
<tr>
<td>:empty</td>
<td>获取所有不包含子元素或者文本的空元素</td>
<td>元素集合</td>
</tr>
<tr>
<td>:has(selector)</td>
<td>获取含有选择器所匹配的元素的元素</td>
<td>元素集合</td>
</tr>
<tr>
<td>:parent</td>
<td>获取含有子元素或者文本的元素</td>
<td>元素集合</td>
</tr>
</tbody>
</table>
</div></template>


