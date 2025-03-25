<template><div><h2 id="_5-5-动画效果综述" tabindex="-1"><a class="header-anchor" href="#_5-5-动画效果综述"><span>5.5 动画效果综述</span></a></h2>
<p>在<code v-pre>jQuery</code> 中，虽然有很多动画方法，实现各种各样的动画效果，但综合起来，绝大部分的动画方法仅仅是改变元素的属性或样式，如高度、宽度、透明度和<code v-pre>CSS</code> 样式属性，详细说明如下:</p>
<h3 id="_5-5-1-各种动画方法说明" tabindex="-1"><a class="header-anchor" href="#_5-5-1-各种动画方法说明"><span>5.5.1 各种动画方法说明</span></a></h3>
<p>1)<code v-pre>show()</code>与 <code v-pre>hide()</code>方法，元素以动画效果实现显示与隐藏，可以同时改变元素的多个属性，如宽度、高度、透明度。</p>
<p>2)<code v-pre>fadeln()</code>与<code v-pre>fadeOut()</code>方法，元素以动画的效果淡入与淡出，仅改变元素的透明度。</p>
<p>3)<code v-pre>slideUp()</code>与 <code v-pre>slideDown()</code>方法，元素以“卷窗帘”的动画效果显示与隐藏，仅改变元素的高度，其他属性不发生变化。</p>
<p>4)<code v-pre>fadeTo()</code>方法，元素按指定的透明度进行渐进式调整，从而达到一种动画效果，该方法改变的是元素的透明度，宽度与高度都不发生变化。</p>
<p>5)<code v-pre>toggle()</code>方法，可以代替<code v-pre>show()</code>与<code v-pre>hide()</code>两个方法，因此，其改变的元素属性也与<code v-pre>show()</code>与 <code v-pre>hide()</code>方法一样。</p>
<p>6)<code v-pre>slideToggle()</code>方法，可以代替<code v-pre>slideUp()</code>与<code v-pre>slideDown()</code>两个方法，改变的元素也与<code v-pre>slideUp()</code>和 <code v-pre>slideDown()</code>方法一样。</p>
<p>7)<code v-pre>animate()</code>方法，自定义元素的动画效果，可以实现上述 6 种方法中全部属性改变的功能，同时，还可以用动画的效果，改变其他的元素属性，该方法是上述 6 种方法的核心。</p>
<h3 id="_5-5-2-使用-animate-方法代替其他动画效果" tabindex="-1"><a class="header-anchor" href="#_5-5-2-使用-animate-方法代替其他动画效果"><span>5.5.2 使用 <code v-pre>animate()</code>方法代替其他动画效果</span></a></h3>
<p><code v-pre>animate()</code>方法不仅可以使元素实现各种各样的动画效果，还可以代替其他的动画方法,详细代码如下所示:</p>
<p>1)<code v-pre>animate()</code>方法代替<code v-pre>hide()</code>方法，代码如下:</p>
<p><code v-pre>$(&quot;页面元素&quot;).animate(( height:&quot;hide&quot;,width:&quot;hide&quot;,opacity:&quot;hide&quot;)，600);</code></p>
<p>等价于下列代码:</p>
<p><code v-pre>$(&quot;页面元素&quot;).hide(600);</code></p>
<p>2)<code v-pre>animate()</code>方法代替<code v-pre>fadeOut()</code>方法，代码如下</p>
<p><code v-pre>$(&quot;页面元素&quot;).animate({opacity:&quot;hide”)，600);</code></p>
<p>等价于下列代码:</p>
<p><code v-pre>$(&quot;页面元素&quot;).fadeOut(600);</code></p>
<p>3)animate()方法代替slideUp()方法，代码如下:</p>
<p><code v-pre>$(&quot;页面元素&quot;).animate({height:&quot;hide”}，600);</code></p>
<p>等价于下列代码</p>
<p><code v-pre>$(&quot;页面元素&quot;).slideUp(600);</code></p>
<p>4)animate()方法代替fadeTo()方法，代码如下:</p>
<p><code v-pre>$(&quot;页面元索&quot;).animate({opacity:&quot;0.8”)，600);</code></p>
<p>等价于下列代码:</p>
<p><code v-pre>$(&quot;页面元素&quot;).fadeTo(600，&quot;0.8”);</code></p>
</div></template>


