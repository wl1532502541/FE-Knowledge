<template><h1 id="script-标签中的-async-和-defer-属性" tabindex="-1"><a class="header-anchor" href="#script-标签中的-async-和-defer-属性" aria-hidden="true">#</a> script 标签中的 async 和 defer 属性</h1>
<p>在 HTML 中会遇到以下三类 script：</p>
<ul>
<li><code>&lt;script src='xxx'&gt;&lt;/script&gt;</code></li>
<li><code>&lt;script src='xxx' async&gt;&lt;/script&gt;</code></li>
<li><code>&lt;script src='xxx' defer&gt;&lt;/script&gt;</code></li>
</ul>
<p>那么这三类 script 有什么区别呢？</p>
<h2 id="script" tabindex="-1"><a class="header-anchor" href="#script" aria-hidden="true">#</a> script</h2>
<p>浏览器在解析 HTML 的时候，如果遇到一个没有任何属性的 script 标签，就会暂停解析，先发送网络请求获取该 JS 脚本的代码内容，然后让 JS 引擎执行该代码，当代码执行完毕后恢复解析。整个过程如下图所示：
<img src="https://cdn.nlark.com/yuque/0/2021/webp/12821255/1628234078236-8890bd6b-b640-4b4d-b90d-92e1f34bbd37.webp#align=left&amp;display=inline&amp;height=99&amp;margin=[object Object]&amp;originHeight=99&amp;originWidth=652&amp;size=0&amp;status=done&amp;style=none&amp;width=652" alt="">
可以看到，script 阻塞了浏览器对 HTML 的解析，如果获取 JS 脚本的网络请求迟迟得不到响应，或者 JS 脚本执行时间过长，都会导致白屏，用户看不到页面内容。</p>
<h2 id="async-script" tabindex="-1"><a class="header-anchor" href="#async-script" aria-hidden="true">#</a> async script</h2>
<p>async 表示异步，例如七牛的源码中就有大量的 async 出现：
<img src="https://cdn.nlark.com/yuque/0/2021/webp/12821255/1628234078229-2e79e914-858c-4715-b1ba-013846997687.webp#align=left&amp;display=inline&amp;height=134&amp;margin=[object Object]&amp;originHeight=134&amp;originWidth=652&amp;size=0&amp;status=done&amp;style=none&amp;width=652" alt="">当浏览器遇到带有 async 属性的 script 时，请求该脚本的网络请求是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器会暂停解析，先让 JS 引擎执行代码，执行完毕后再进行解析，图示如下：
<img src="https://cdn.nlark.com/yuque/0/2021/webp/12821255/1628234078243-21d537f5-0e76-4182-8dbe-1d054c95aa16.webp#align=left&amp;display=inline&amp;height=99&amp;margin=[object Object]&amp;originHeight=99&amp;originWidth=652&amp;size=0&amp;status=done&amp;style=none&amp;width=652" alt="">
当然，如果在 JS 脚本请求回来之前，HTML 已经解析完毕了，那就啥事没有，立即执行 JS 代码，如下图所示：
<img src="https://cdn.nlark.com/yuque/0/2021/webp/12821255/1628234078373-af12ab27-c731-44b3-bc66-871f16da1a3f.webp#align=left&amp;display=inline&amp;height=99&amp;margin=[object Object]&amp;originHeight=99&amp;originWidth=652&amp;size=0&amp;status=done&amp;style=none&amp;width=652" alt="">
所以 async 是不可控的，因为执行时间不确定，你如果在异步 JS 脚本中获取某个 DOM 元素，有可能获取到也有可能获取不到。而且如果存在多个 async 的时候，它们之间的执行顺序也不确定，完全依赖于网络传输结果，谁先到执行谁。</p>
<h2 id="defer-script" tabindex="-1"><a class="header-anchor" href="#defer-script" aria-hidden="true">#</a> defer script</h2>
<p>defer 表示延迟，例如掘金的源码中就有大量的 defer 出现：
<img src="https://cdn.nlark.com/yuque/0/2021/webp/12821255/1628234078242-0356940b-23d4-45fa-bb87-dd8eaab09473.webp#align=left&amp;display=inline&amp;height=113&amp;margin=[object Object]&amp;originHeight=113&amp;originWidth=652&amp;size=0&amp;status=done&amp;style=none&amp;width=652" alt="">
当浏览器遇到带有 defer 属性的 script 时，获取该脚本的网络请求也是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器不会暂停解析并执行 JS 代码，而是等待 HTML 解析完毕再执行 JS 代码，图示如下：
<img src="https://cdn.nlark.com/yuque/0/2021/webp/12821255/1628234078242-29cb9f2a-5144-468d-b06b-491e067068a9.webp#align=left&amp;display=inline&amp;height=99&amp;margin=[object Object]&amp;originHeight=99&amp;originWidth=652&amp;size=0&amp;status=done&amp;style=none&amp;width=652" alt="">
如果存在多个 defer script 标签，浏览器（IE9及以下除外）会保证它们按照在 HTML 中出现的顺序执行，不会破坏 JS 脚本之间的依赖关系。
最后，根据上面的分析，不同类型 script 的执行顺序及其是否阻塞解析 HTML 总结如下：</p>
<table>
<thead>
<tr>
<th>script 标签</th>
<th>JS 执行顺序</th>
<th>是否阻塞解析 HTML</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>&lt;script&gt;</code></td>
<td>在 HTML 中的顺序</td>
<td>阻塞</td>
</tr>
<tr>
<td><code>&lt;script async&gt;</code></td>
<td>网络请求返回顺序</td>
<td>可能阻塞，也可能不阻塞</td>
</tr>
<tr>
<td><code>&lt;script defer&gt;</code></td>
<td>在 HTML 中的顺序</td>
<td>不阻塞</td>
</tr>
</tbody>
</table>
<p>原文：<a href="https://juejin.cn/post/6894629999215640583" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6894629999215640583<OutboundLink/></a></p>
</template>
