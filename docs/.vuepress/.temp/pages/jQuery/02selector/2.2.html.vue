<template><div><h1 id="层级选择器" tabindex="-1"><a class="header-anchor" href="#层级选择器"><span>层级选择器</span></a></h1>
<p>层次选择器通过 DOM 元素间的层次关系获取元素，其主要的层次关系包括后代、父子、相邻、兄弟关系，通过其中某类关系可以方便快捷地定位元素，其详细说明如表 2-3所示。</p>
<p>表2-3 层次选择器语法</p>
<table>
<thead>
<tr>
<th>语法</th>
<th>功能</th>
<th>返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td>ancestor descendant</td>
<td>根据祖先元素匹配所有的后代元素</td>
<td>元素集合</td>
</tr>
<tr>
<td>parent &gt; child</td>
<td>根据父元素匹配所有的子元素</td>
<td>元素集合</td>
</tr>
<tr>
<td>prev + next</td>
<td>匹配所有紧接在 prev 元素后的相邻元素</td>
<td>元素集合</td>
</tr>
<tr>
<td>prev ~ siblings</td>
<td>匹配 prev 元素之后的所有兄弟元素</td>
<td>元素集合</td>
</tr>
</tbody>
</table>
</div></template>


