<template><h1 id="浏览器内核的理解" tabindex="-1"><a class="header-anchor" href="#浏览器内核的理解" aria-hidden="true">#</a> 浏览器内核的理解</h1>
<ul>
<li>主要分成两部分：渲染引擎(<code>layout engineer</code>或<code>Rendering Engine</code>)和<code>JS</code>引擎<br /></li>
<li>渲染引擎：负责取得网页的内容（<code>HTML</code>、<code>XML</code>、图像等等）、整理讯息（例如加入<code>CSS</code>等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核<br /></li>
<li><code>JS</code>引擎则：解析和执行<code>javascript</code>来实现网页的动态效果<br /></li>
<li>最开始渲染引擎和<code>JS</code>引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎<br /></li>
</ul>
<p><strong>常见的浏览器内核有哪些</strong></p>
<ul>
<li><code>Trident</code>内核：<code>IE,MaxThon,TT,The World,360</code>,搜狗浏览器等。[又称MSHTML]</li>
<li><code>Gecko</code>内核：<code>Netscape6</code>及以上版本，<code>FF,MozillaSuite/SeaMonkey</code>等</li>
<li><code>Presto</code>内核：<code>Opera7</code>及以上。 [<code>Opera</code>内核原为：Presto，现为：<code>Blink</code>;]</li>
<li><code>Webkit</code>内核：<code>Safari,Chrome</code>等。 [ <code>Chrome</code>的<code>Blink</code>（<code>WebKit</code>的分支）]</li>
</ul>
</template>
