<template><h1 id="link和-import" tabindex="-1"><a class="header-anchor" href="#link和-import" aria-hidden="true">#</a> link和@import</h1>
<h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2>
<p>就结论而言，强烈建议使用link标签，慎用@import方式。</p>
<p>这样可以避免考虑@import的语法规则和注意事项，避免产生资源文件下载顺序混乱和http请求过多的烦恼。</p>
<h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2>
<h3 id="_1-从属关系区别" tabindex="-1"><a class="header-anchor" href="#_1-从属关系区别" aria-hidden="true">#</a> 1.从属关系区别</h3>
<p>@import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。</p>
<h3 id="_2-加载顺序区别" tabindex="-1"><a class="header-anchor" href="#_2-加载顺序区别" aria-hidden="true">#</a> 2.加载顺序区别</h3>
<p>加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。</p>
<h3 id="_3-兼容性区别" tabindex="-1"><a class="header-anchor" href="#_3-兼容性区别" aria-hidden="true">#</a> 3.兼容性区别</h3>
<p>@import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。</p>
<h3 id="_4-dom可控性区别" tabindex="-1"><a class="header-anchor" href="#_4-dom可控性区别" aria-hidden="true">#</a> 4.DOM可控性区别</h3>
<p>可以通过 JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。</p>
</template>
