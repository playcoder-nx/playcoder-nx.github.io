import{_ as a,c as i,a as p,b as o,d,e,w as r,r as s,o as n}from"./app-2nJfhqZ0.js";const c={};function u(v,t){const l=s("font");return n(),i("div",null,[t[27]||(t[27]=p('<h1 id="js-的语法结构" tabindex="-1"><a class="header-anchor" href="#js-的语法结构"><span><code>js</code> 的语法结构</span></a></h1><h2 id="javascript代码引入方式" tabindex="-1"><a class="header-anchor" href="#javascript代码引入方式"><span><code>JavaScript</code>代码引入方式</span></a></h2><p>在网页中编写<code>JavaScript</code>代码时，需要先引入<code>JavaScript</code> 代码。</p><p><code>JavaScript</code> 代码有 3 种引入方式。</p><ul><li><strong>行内式</strong></li><li><strong>嵌入式</strong></li><li><strong>外链式</strong></li></ul><h3 id="行内式" tabindex="-1"><a class="header-anchor" href="#行内式"><span>行内式：</span></a></h3><p>​ 行内式是将<code>JavaScript</code>代码作为<code>HTML</code>标签的属性值使用。</p><p>​ <code>&lt;a href=&quot;javascript:alert(&#39;Hello&#39;);&quot;&gt;test&lt;/a&gt;</code></p><p>行内式的缺点如下：</p><ul><li><p>可读性较差，尤其是在 <code>HTML</code> 中编写大量 <code>JavaScript</code> 代码时，不方便阅读。</p></li><li><p>在遇到多层引号嵌套的情况时，引号非常容易混淆，导致代码出错。</p></li></ul><h3 id="嵌入式" tabindex="-1"><a class="header-anchor" href="#嵌入式"><span>嵌入式：</span></a></h3><p>​ 也称为内嵌式，使用<code>&lt;script&gt;</code>标签包裹<code>JavaScript</code>代码，直接编写到<code>HTML</code>文件中，通常将其放到<code>&lt;head&gt;</code>标签或<code>&lt;body&gt;</code>标签中。</p><p>​ <code>&lt;script&gt;JavaScript代码&lt;/script&gt;</code></p><p>嵌入式的缺点如下：</p><p><code>&lt;script&gt;</code>标签的<code>type</code>属性用于告知浏览器脚本类型， <code>HTML5</code>中该属性的默认值为 “<code>text/javascript</code>”， 因此在使用<code>HTML5</code>时可以省略 <code>type</code> 属性。</p><h3 id="外链式" tabindex="-1"><a class="header-anchor" href="#外链式"><span>外链式：</span></a></h3><p>​ 或称为外部式，是将<code>JavaScript</code>代码写在一个单独的文件中，一般使用“<code>.js</code>”作为文件的扩展名，在<code>HTML</code>页面中使用<code>&lt;script&gt;</code>标签的<code>src</code>属性引入“<code>.js</code>”文件。 <code>&lt;script src=&quot;test.js&quot;&gt;&lt;/script&gt;</code></p><p>外链式的缺点如下:</p><p>​ 外链式适合<code>JavaScript</code>代码量比较多的情况。</p>',19)),o("blockquote",null,[o("p",null,[t[1]||(t[1]=d("外链式相比嵌入式，具有以下3点 ")),e(l,{color:"red"},{default:r(()=>t[0]||(t[0]=[d("优势")])),_:1}),t[2]||(t[2]=d("："))]),o("ul",null,[o("li",null,[o("p",null,[t[4]||(t[4]=d("外链式存在于独立文件中，有")),e(l,{color:"red"},{default:r(()=>t[3]||(t[3]=[d("利于修改和维护")])),_:1}),t[5]||(t[5]=d("，而嵌入式会导致")),t[6]||(t[6]=o("code",null,"HTML",-1)),t[7]||(t[7]=d("与")),t[8]||(t[8]=o("code",null,"JavaScript",-1)),t[9]||(t[9]=d("代码混合在一起。"))])]),o("li",null,[o("p",null,[t[11]||(t[11]=d("外链式可以")),e(l,{color:"red"},{default:r(()=>t[10]||(t[10]=[d("利用浏览器缓存提高速度")])),_:1}),t[12]||(t[12]=d("。"))])]),o("li",null,[o("p",null,[t[14]||(t[14]=d("外链式有利于")),t[15]||(t[15]=o("code",null,"HTML",-1)),t[16]||(t[16]=d("页面代码结构化，把大段的")),t[17]||(t[17]=o("code",null,"JavaScript",-1)),t[18]||(t[18]=d("代码分离到")),t[19]||(t[19]=o("code",null,"HTML",-1)),t[20]||(t[20]=d("页面之外，既美观，也方便文件级别的")),e(l,{color:"red"},{default:r(()=>t[13]||(t[13]=[d("代码复用")])),_:1}),t[21]||(t[21]=d("。"))])])])]),t[28]||(t[28]=p('<h3 id="输入输出语句" tabindex="-1"><a class="header-anchor" href="#输入输出语句"><span>输入输出语句</span></a></h3><table><thead><tr><th><strong>类型</strong></th><th><strong>语句</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>输入</td><td><code>prompt()</code></td><td>用于在浏览器中弹出输入框，用户可以输入内容</td></tr><tr><td>输出</td><td><code>alert()</code></td><td>用于在浏览器中弹出警告框</td></tr><tr><td>输出</td><td><code>document.write()</code></td><td>用于在网页中输出内容</td></tr><tr><td>输出</td><td><code>console.log()</code></td><td>用于在控制台中输出信息</td></tr></tbody></table><h3 id="javascript注释" tabindex="-1"><a class="header-anchor" href="#javascript注释"><span><code>JavaScript</code>注释</span></a></h3><p>​ <code>JavaScript</code>中注释的分类如下：</p><ul><li><p>单行注释：以“//”开始，到该行结束之前的内容都是注释。</p></li><li><p>多行注释：以“/<em>”开始，以“</em>/”结束。多行注释中可以嵌套单行注释，但不能再嵌套多行注释。</p></li></ul>',5)),o("blockquote",null,[o("p",null,[t[24]||(t[24]=d("在 Visual Studio Code 编辑器中，单行注释使用快捷键 “")),e(l,{color:"red"},{default:r(()=>t[22]||(t[22]=[d("Ctrl+/")])),_:1}),t[25]||(t[25]=d("” ，多行注释使用快捷键 “")),e(l,{color:"red"},{default:r(()=>t[23]||(t[23]=[d("Shift+Alt+A")])),_:1}),t[26]||(t[26]=d("” 。"))])])])}const f=a(c,[["render",u]]),S=JSON.parse('{"path":"/JavaScript/02.html","title":"js 的语法结构","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"JavaScript代码引入方式","slug":"javascript代码引入方式","link":"#javascript代码引入方式","children":[{"level":3,"title":"行内式：","slug":"行内式","link":"#行内式","children":[]},{"level":3,"title":"嵌入式：","slug":"嵌入式","link":"#嵌入式","children":[]},{"level":3,"title":"外链式：","slug":"外链式","link":"#外链式","children":[]},{"level":3,"title":"输入输出语句","slug":"输入输出语句","link":"#输入输出语句","children":[]},{"level":3,"title":"JavaScript注释","slug":"javascript注释","link":"#javascript注释","children":[]}]}],"git":{},"filePathRelative":"JavaScript/02.md"}');export{f as comp,S as data};
