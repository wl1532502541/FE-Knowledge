<template><h1 id="从输入url到显示发生了什么" tabindex="-1"><a class="header-anchor" href="#从输入url到显示发生了什么" aria-hidden="true">#</a> 从输入url到显示发生了什么</h1>
<h2 id="网络篇" tabindex="-1"><a class="header-anchor" href="#网络篇" aria-hidden="true">#</a> 网络篇</h2>
<h3 id="准备动作" tabindex="-1"><a class="header-anchor" href="#准备动作" aria-hidden="true">#</a> 准备动作</h3>
<p>现代浏览器会在你输入的过程中就开始智能匹配 URL，它会从书签、历史记录等地方，找到已经输入的字符串可能匹配到的 URL，然后智能显示出来，让你补全 URL。对于 Google Chrome，它甚至可以从缓存中把页面展示出来，也就是说，此时你还没有按下 Enter 进行搜索，页面就已经显示出来了。</p>
<h3 id="构建请求" tabindex="-1"><a class="header-anchor" href="#构建请求" aria-hidden="true">#</a> 构建请求</h3>
<p>浏览器会构建请求行：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET / HTTP/1.1
// 请求方法是GET，路径为根路径，HTTP协议版本为1.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="使用缓存" tabindex="-1"><a class="header-anchor" href="#使用缓存" aria-hidden="true">#</a> 使用缓存</h3>
<p>在发送请求之前，浏览器会检查请求头设置的强缓存失效时间，如果命中则直接使用，否则进入下一步。</p>
<h3 id="dns-解析" tabindex="-1"><a class="header-anchor" href="#dns-解析" aria-hidden="true">#</a> DNS 解析</h3>
<p>互联网每台机器的唯一 ID 是 IP地址，但是 IP地址不方便记忆，所以开发者发明了域名系统（DNS），将 IP地址和域名进行一一对应。
得到具体 IP地址的过程就叫做 DNS 解析。
具体的 DNS 解析流程包括：</p>
<h4 id="查找浏览器缓存" tabindex="-1"><a class="header-anchor" href="#查找浏览器缓存" aria-hidden="true">#</a> 查找浏览器缓存</h4>
<p>浏览器提供了 DNS 数据缓存功能，如果一个域名已经被解析过，浏览器会把结果缓存下来，在缓存失效之前，下次处理直接走缓存，不需要经过 DNS 解析以提高加载速度。</p>
<h4 id="查找系统-host-文件配置" tabindex="-1"><a class="header-anchor" href="#查找系统-host-文件配置" aria-hidden="true">#</a> 查找系统 Host 文件配置</h4>
<p>浏览器在查找不到缓存之后，会去本地硬盘 Host 文件进行查找，看看里面有没有对应域名和 IP地址的规则，如果有则使用，否则进入下一步。</p>
<h4 id="浏览器发送-dns-请求到本地dns服务器" tabindex="-1"><a class="header-anchor" href="#浏览器发送-dns-请求到本地dns服务器" aria-hidden="true">#</a> 浏览器发送 DNS 请求到本地DNS服务器</h4>
<p>如果本地没有查找到相应的配置之后，浏览器会发送 DNS 请求到本地DNS服务器。
本地DNS服务器在接收到请求之后，会先查找递归查找自己的缓存记录，有缓存则直接返回，否则向根DNS服务器发送请求。</p>
<h4 id="根dns服务器" tabindex="-1"><a class="header-anchor" href="#根dns服务器" aria-hidden="true">#</a> 根DNS服务器</h4>
<p>根DNS服务器在接收到本地DNS服务器之后，并不会直接返回域名和IP地址之间的对应关系，而是告诉本地DNS服务器可以到域服务器上面去查找，并给出域服务器的地址，这个过程是迭代的。</p>
<h4 id="本地dns服务器向域服务器发送请求" tabindex="-1"><a class="header-anchor" href="#本地dns服务器向域服务器发送请求" aria-hidden="true">#</a> 本地DNS服务器向域服务器发送请求</h4>
<p>本地DNS服务器在接收到根DNS服务器的响应之后，会向对应的域服务器发送请求，例如当前例子中的域服务器是 .com域服务器。
域服务器接收到请求后，也不会直接返回域名和IP地址之间的对应关系，而是告诉本地DNS服务器，你请求的域名的解析服务器的地址。</p>
<h4 id="本地dns服务器向解析服务器发送请求" tabindex="-1"><a class="header-anchor" href="#本地dns服务器向解析服务器发送请求" aria-hidden="true">#</a> 本地DNS服务器向解析服务器发送请求</h4>
<p>最后，本地DNS服务器向解析服务器发送请求，获取到了一个域名和IP地址的对应关系，本地DNS服务器把这个对应关系返回给浏览器，并缓存在自己本地。</p>
<h3 id="建立-tcp-连接" tabindex="-1"><a class="header-anchor" href="#建立-tcp-连接" aria-hidden="true">#</a> 建立 TCP 连接</h3>
<p>值得注意的是，Chrome 在同一个域名下要求最多只能有 6 个 TCP 连接，超过 6 个就必须等待。
在不指定端口的情况下，在拿到域名和IP地址的对应关系之后，浏览器会以随机端口（1024～65535）向 Web 服务器程序的 80 端口发起 TCP 请求，这个连接请求进入内核的 TCP / IP 协议栈，还可能经过防火墙过滤，最终到达 Web 服务器程序，最终建立 TCP 连接。
建立 TCP 连接经过下面三个阶段：</p>
<ol>
<li>通过三次握手建立客户端和服务端之间的连接；</li>
<li>进行数据传输。这里有一个重要的机制，就是接收方接收到数据包后必须要向发送方确认，如果发送方没有接收到这个确认的消息，就会判定当前数据包丢失，并重新发送该数据包。当然，发送的过程中还有一个优化的策略，就是把 <strong>大的数据包拆成一个个小的数据包</strong>，一次传输到接收方，接收方按照这个小包的顺序把它们组装成完整的数据包；</li>
<li>断开连接。断开连接需要通过四次挥手进行断开，这会在后续断开的时候讲解。</li>
</ol>
<h3 id="发送-http-请求" tabindex="-1"><a class="header-anchor" href="#发送-http-请求" aria-hidden="true">#</a> 发送 HTTP 请求</h3>
<p>现在 TCP 请求已经建立，浏览器和服务端可以开始通信。浏览器发送 HTTP 请求必须携带三样东西：</p>
<ul>
<li>请求行</li>
<li>请求头</li>
<li>请求体</li>
</ul>
<p>具体参考 <a href="https://github.com/i-want-offer/FE-Interview-questions/blob/master/%E5%89%8D%E5%90%8E%E7%AB%AF%E9%80%9A%E4%BF%A1/HTTP%20%E6%8A%A5%E6%96%87.md" target="_blank" rel="noopener noreferrer">HTTP报文(opens new window)<OutboundLink/></a></p>
<h3 id="服务器处理请求" tabindex="-1"><a class="header-anchor" href="#服务器处理请求" aria-hidden="true">#</a> 服务器处理请求</h3>
<p>服务器从固定端口接收到 TCP 报文开始，它会对 TCP 连接进行处理，对 HTTP 协议进行解析，并按照报文格式进一步封装成 HTTP Request 对象供上层使用。
一般并发量大的网站，都会把同一个应用部署在多个服务中，客户端第一时间请求到的是反向代理服务器，再由代理服务器请求应用服务器。</p>
<h3 id="响应-http-请求" tabindex="-1"><a class="header-anchor" href="#响应-http-请求" aria-hidden="true">#</a> 响应 HTTP 请求</h3>
<p>同请求类似，HTTP 响应也有三个必须携带的东西：</p>
<ul>
<li>响应行</li>
<li>响应头</li>
<li>响应体</li>
</ul>
<p>具体参考 <a href="https://github.com/i-want-offer/FE-Interview-questions/blob/master/%E5%89%8D%E5%90%8E%E7%AB%AF%E9%80%9A%E4%BF%A1/HTTP%20%E6%8A%A5%E6%96%87.md" target="_blank" rel="noopener noreferrer">HTTP报文(opens new window)<OutboundLink/></a>
响应完成之后，这时候需要判断请求头或者响应头中的 <code>Connection</code> 字段是否为 keep-alive，表示建立持久连接。如果是，则 TCP 连接会一直保存，之后请求同一个服务的资源会复用这个连接，否则断开 TCP 连接，下次请求时再重新建立连接。</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>到此为止，是浏览器输入 URL 中网络请求的部分，大致流程如下图：
<img src="https://cdn.nlark.com/yuque/0/2021/jpeg/12821255/1627545018588-f43dd6f8-ff03-4abc-a929-723000d2477b.jpeg#align=left&amp;display=inline&amp;height=645&amp;margin=[object Object]&amp;originHeight=645&amp;originWidth=829&amp;size=0&amp;status=done&amp;style=none&amp;width=829" alt=""></p>
<h2 id="解析算法篇" tabindex="-1"><a class="header-anchor" href="#解析算法篇" aria-hidden="true">#</a> 解析算法篇</h2>
<p>完成网络请求和响应，如果响应头中的 <code>Content-Type</code> 是 <code>text/html</code> ，那么接下来就是浏览器的解析和渲染工作了。
首先介绍解析部分，它分为以下几个步骤：</p>
<ul>
<li>构建 DOM 树</li>
<li>样式计算</li>
<li>生成布局树</li>
</ul>
<h3 id="构建-dom-树" tabindex="-1"><a class="header-anchor" href="#构建-dom-树" aria-hidden="true">#</a> 构建 DOM 树</h3>
<p>由于浏览器无法直接理解 HTML 字符串，因此将这一系列的字节流转换为一种有意义并且方便操作的数据结构，这种数据结构就是 DOM树。DOM树本质上是一个以 document 为根节点的多叉树。
那通过什么方式进行解析呢？</p>
<h4 id="html-文法的本质" tabindex="-1"><a class="header-anchor" href="#html-文法的本质" aria-hidden="true">#</a> HTML 文法的本质</h4>
<p>首先我们应该把握一点：HTML 的文法并不是 <strong>上下文无关文法</strong>。</p>
<blockquote>
<p>上下文无关文法：若一个形式文法G = (N, Σ, P, S) 的产生式规则都取如下的形式：V-&gt;w，则叫上下文无关语法。其中 V∈N ，w∈(N∪Σ)* 。
其中把 G = (N, Σ, P, S) 中各个参量的意义解释一下:</p>
<ol>
<li>N 是<strong>非终结符</strong>(顾名思义，就是说最后一个符号不是它, 下面同理)集合。</li>
<li>Σ 是<strong>终结符</strong>集合。</li>
<li>P 是开始符，它必须属于 N ，也就是非终结符。</li>
<li>S 就是不同的产生式的集合。如 S -&gt; aSb 等等。</li>
</ol>
</blockquote>
<p>用人话来说就是：<strong>上下文无关文法</strong> 就是这个文法中所有产生式的左边都是一个非终结符。
HTML 文法是 <strong>非上下文无关文法</strong>，例如一个 form 标签，如果它的父元素也是一个 form 标签，那么解析器会跳过它。</p>
<h4 id="解析算法" tabindex="-1"><a class="header-anchor" href="#解析算法" aria-hidden="true">#</a> 解析算法</h4>
<p>H5 规范详细地介绍了解析算法，这个算法分为两个阶段：</p>
<ol>
<li>标记化</li>
<li>建树</li>
</ol>
<p>对应的就是 <strong>词法分析</strong> 和 <strong>语法解析</strong>。</p>
<h5 id="标记化算法" tabindex="-1"><a class="header-anchor" href="#标记化算法" aria-hidden="true">#</a> 标记化算法</h5>
<p>这个算法输入为 HTML文本，输出为 HTML标记。
运行逻辑大致为：</p>
<ol>
<li>遇到 <code>&lt;</code> ，状态修改为 <strong>标记打开</strong></li>
<li>接收 <code>[a-zA-Z]</code> 的字符，会进入 <strong>标记名称状态</strong>，这个状态会一直保持，直到遇到 <code>&gt;</code> ，表明标记名称记录完成，这是状态修改为 <strong>数据状态</strong></li>
<li>接下来遇到 body 标签做同样的事情。此时，html 和 body 的标记都已经录好，进入 <strong>数据状态</strong>，之后保持这样的状态接收里面的字符</li>
<li>当再次遇到 <code>&lt;</code> 的时候，回到 <strong>标记打开</strong>，一旦接收到下一个字符 <code>/</code> 时，这时候会创建一个 <code>end tag</code> 的 token，随后进入 <strong>标记名称状态</strong>，遇到 <code>&gt;</code> 回到 <strong>数据状态</strong></li>
</ol>
<h5 id="建树算法" tabindex="-1"><a class="header-anchor" href="#建树算法" aria-hidden="true">#</a> 建树算法</h5>
<p>之前提到过，DOM 树是一棵以 document 为根节点的多叉树。因此解析器首先会创建一个 document 对象，标记生成器会把每个标记的信息发送给 <strong>建树器</strong>，建树器在收到相应的标记时，会创建对应的 DOM 对象。创建这个 DOM 对象会做两件事情：</p>
<ol>
<li>将 DOM 对象加入 DOM 树中</li>
<li>将对应标记压入存放开放元素的栈中</li>
</ol>
<h5 id="容错机制" tabindex="-1"><a class="header-anchor" href="#容错机制" aria-hidden="true">#</a> 容错机制</h5>
<p>HTML5 实现了非常强大的 <strong>宽容策略</strong>，容错能力非常强，在 WebKit 中，有如下经典容错示例：</p>
<ol>
<li>使用 <code>&lt;/br&gt;</code> 而不是 <code>&lt;br&gt;</code></li>
<li>表格离散，会自动转换成同一个表格内</li>
<li>表单元素嵌套，会自动忽略里面的 form 元素</li>
</ol>
<h3 id="样式计算" tabindex="-1"><a class="header-anchor" href="#样式计算" aria-hidden="true">#</a> 样式计算</h3>
<p>关于样式计算，它的来源一般是三种：</p>
<ol>
<li>link 标签引用</li>
<li>style 标签中的样式</li>
<li>元素内联样式</li>
</ol>
<h4 id="格式化样式表" tabindex="-1"><a class="header-anchor" href="#格式化样式表" aria-hidden="true">#</a> 格式化样式表</h4>
<p>首先，浏览器无法直接识别 CSS 样式文本，因此渲染引擎接收到 CSS 文本之后第一件事情就是将其转化为一个结构化的对象，即 styleSheets。
这个格式化的过程非常复杂，并且且不同浏览器会有不同的优化策略，所以不展开讨论。
在浏览器控制台能够通过打印 <code>document.styleSheets</code> 来查看这个最终的结构，这个结构包含了以上三种 CSS 来源，为后面的样式操作提供了基础。</p>
<h4 id="标准化样式属性" tabindex="-1"><a class="header-anchor" href="#标准化样式属性" aria-hidden="true">#</a> 标准化样式属性</h4>
<p>有一些 CSS 样式的数值并不容易被渲染引擎所理解，因此需要在计算样式之前将它们标准化，如 em -&gt; px，red -&gt; #ff0000，bold -&gt; 700等。</p>
<h4 id="计算每个节点的具体样式" tabindex="-1"><a class="header-anchor" href="#计算每个节点的具体样式" aria-hidden="true">#</a> 计算每个节点的具体样式</h4>
<p>央视已经被标准化和格式化，接下来就可以计算每个节点的具体样式信息了。
其实计算的方式也并不复杂，主要就是两个规则：</p>
<ul>
<li>继承</li>
<li>层叠</li>
</ul>
<p>每个子节点都会默认继承父节点的样式属性，如果父节点中没有找到，就会采用浏览器的默认样式，这就是继承规则。
CSS 最大的贴点在于它的层叠行，也就是最终的样式取决于各个属性共同作用的效果，甚至有很多诡异的层叠现象，这里太过复杂，不展开讨论。
所有样式数值计算完毕之后，会被挂载在 <code>window.getComputedStyle</code> 当中，可以通过 js 来获取元素的具体样式。</p>
<h3 id="生成布局树" tabindex="-1"><a class="header-anchor" href="#生成布局树" aria-hidden="true">#</a> 生成布局树</h3>
<p>现在已经生成了 DOM树和 CSSOM树，接下来就是要通过浏览器的布局系统来 <strong>确定元素的位置</strong>，也就是要生成一棵 <strong>布局树（Layout Tree）</strong>。
布局树生成的工作流程大致如下：</p>
<ol>
<li>遍历生成的 DOM树节点，并把它们添加到布局树中；</li>
<li>计算布局树节点的坐标位置。</li>
</ol>
<p>值得注意的是，这棵布局树只包含可见元素，对于 head 标签或者是设置了 <code>display: none</code> 的元素，将不会被放入其中。
有人说会首先生成 <strong>渲染树（Render Tree）</strong>，但这是 16 年以前的事情，目前 Chrome 做了大量的重构，已经没有了生成渲染树的过程，并且布局树的信息非常完善，完全拥有了渲染树的功能。</p>
<h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h3>
<p>这一节就是浏览器对于如何解析 HTML 和 CSS 生成布局树的全过程，大致流程如下图：
<img src="https://cdn.nlark.com/yuque/0/2021/jpeg/12821255/1627545018528-ea835cff-9a99-47ab-a2c9-eb522d300e11.jpeg#align=left&amp;display=inline&amp;height=574&amp;margin=[object Object]&amp;originHeight=574&amp;originWidth=466&amp;size=0&amp;status=done&amp;style=none&amp;width=466" alt=""></p>
<h2 id="渲染过程篇" tabindex="-1"><a class="header-anchor" href="#渲染过程篇" aria-hidden="true">#</a> 渲染过程篇</h2>
<p>上一节介绍了浏览器的解析过程，其中包含构建 DOM、样式计算、构建布局树。
接下来就进入了下一个阶段：<strong>渲染</strong>，分为以下几个步骤：</p>
<ol>
<li>建立 <strong>图层树（Layer Tree）</strong></li>
<li>生成 <strong>绘制列表</strong></li>
<li>生成 <strong>图块</strong> 并 <strong>栅格化</strong></li>
<li>显示器显示内容</li>
</ol>
<h3 id="建立图层树" tabindex="-1"><a class="header-anchor" href="#建立图层树" aria-hidden="true">#</a> 建立图层树</h3>
<p>如果你觉得 DOM节点有了，样式和位置信息也有了，可以开始绘制页面，那你就错了。
因为你少考虑了另外一些复杂的场景，比如 3d 动画如何呈现出变换效果，当元素含有层叠上下文是如何控制现实和隐藏等等。
为了解决上述问题，浏览器会在构建完布局树之后，还会对特定的节点进行分层，构建一棵 <strong>图层树（Layer Tree）</strong>。
那么，这棵图层树是根据什么来构建的呢？
一般情况下，节点的图层会默认属于父亲节点的图层（这些图层也称为 <strong>合成层</strong>），那么什么时候会提升为一个独立的图层呢？
有两种情况需要分别讨论：</p>
<ul>
<li>显式合成</li>
<li>隐式合成</li>
</ul>
<h4 id="显式合成" tabindex="-1"><a class="header-anchor" href="#显式合成" aria-hidden="true">#</a> 显式合成</h4>
<p>下面是显式合成的情况：</p>
<ol>
<li>拥有<strong>层叠上下文</strong>的节点。层叠上下文也基本上是由一些特定的 CSS 属性创建的，一般有以下的情况：
<ol>
<li>HTML 根元素本身就具有层叠上下文属性</li>
<li>普通元素 position 不等于 static，并且设置了 z-index 属性，会产生层叠上下文</li>
<li>元素的 opacity 值不是1</li>
<li>元素的 transform 值不是 none</li>
<li>元素的 filter 值不是 none</li>
<li>元素的 isolation 值不是 isolate</li>
<li><strong>will-change 指定的属性值为上面任意一个。</strong></li>
</ol>
</li>
<li>需要 <strong>裁剪</strong> 的地方
比如一个 div，你只个他设置了 100 * 100 的大小，而你在里面放置了很多内容，那么超出的文字部分就会被裁剪。如果你设置了滚动条，那么滚动条也会被单独提升为一个图层。</li>
</ol>
<h4 id="隐式合成" tabindex="-1"><a class="header-anchor" href="#隐式合成" aria-hidden="true">#</a> 隐式合成</h4>
<p>接下来就是隐式合成，简单来说就是 <strong>层叠等级低</strong> 的节点被提升为单独的图层之后那么 <strong>所有层叠等级比它高</strong> 的节点都会成为一个单独的图层。
这个隐式合成其实隐藏着一个巨大的风险，如果在一个大型应用中，当一个 z-index 比较低的元素被提升为一个单独的图层之后，层叠在它上面的元素统统都会被提升为单独的图层，可能会增加上千个图层，大大增加内存的压力，甚至直接上页面崩溃，这就是 <strong>层爆炸</strong> 的原理。
值得注意的是，当需要 <strong>重绘</strong> 的时候，只需要重绘本身，而不会影响到其他图层。</p>
<h3 id="生成绘制列表" tabindex="-1"><a class="header-anchor" href="#生成绘制列表" aria-hidden="true">#</a> 生成绘制列表</h3>
<p>接下来渲染引擎会将图层的绘制拆分成一个个绘制指令，然后将这些指令按顺序组合成一个待绘制列表，相当于给后面的绘制操作做了一波计划。
在 Chrome浏览器中，开发者工具在设置栏打开 more tools，然后选择 Layers 面板，就能够看到当前页面的绘制列表。
<img src="https://cdn.nlark.com/yuque/0/2021/jpeg/12821255/1627545018743-5e7a299a-60e6-4ae7-b6c5-f20ee35f6c6d.jpeg#align=left&amp;display=inline&amp;height=924&amp;margin=[object Object]&amp;originHeight=924&amp;originWidth=1320&amp;size=0&amp;status=done&amp;style=none&amp;width=1320" alt=""></p>
<h3 id="生成图块和生成位图" tabindex="-1"><a class="header-anchor" href="#生成图块和生成位图" aria-hidden="true">#</a> 生成图块和生成位图</h3>
<p>现在开始绘制操作，实际上渲染进程和绘制操作是由专门的线程来完成的，这个线程叫 <strong>合成线程</strong>。
绘制列表准备好了之后，渲染进程的主线程会给合成线程发送 commit 消息，把绘制列表提交给合成线程，接下来就是合成线程工作的时候。
首先，考虑到视口就这么大，当页面非常大的时候，需要滚动非常长的时间才能滚动到底部，如果一口气全部绘制出来是非常浪费性能的，因此合成线程首先要做的就是将图层分块。这些快的大小一般不会很大，这样可以大大加快页面的首屏展示。
因为后面图块数据要进入 GPU 内存，考虑到浏览器内存上传到 GPU 内存的操作比较慢，即使绘制一部分图块，也可能会浪费大量的时间。针对这一问题，Chrome 采用了一个策略：在首次合成图块是指采用一个 <strong>低分辨率</strong> 的图块，这样首次展示的时候只是展示出低分辨率的图片，这个时候继续进行合成操作，当正常的图块内容合成完毕之后，再将低分辨率的图块进行替换，这也是 Chrome 首屏加载优化的手段之一。
顺便提醒一点，渲染进程中专门维护了一个 <strong>栅格化线程池</strong>，专门负责把 <strong>图块</strong> 转换为 <strong>位图数据</strong>。
然后合成线程会选择适口附近的图块，。把它交给栅格化线程池生成位图。
生成位图的过程实际上都会使用 GPU 进行加速，生成的位图最后发送给合成线程。</p>
<h3 id="显示器显示内容" tabindex="-1"><a class="header-anchor" href="#显示器显示内容" aria-hidden="true">#</a> 显示器显示内容</h3>
<p>栅格化操作完成之后，合成线程会生成一个绘制命令，并发送给浏览器进程。
浏览器进程接收到这个命令后，根据这个命令把页面内容绘制到内存，也就是生成了一个页面，然后把这部分内存发送给显卡。
无论是 PC 显示器还是手机屏幕，都有一个固定的刷新频率，一般是 60HZ，也就是一秒更新 60 张图片，一张图片停留的时间大约是 16.7ms，而每次更新图片都来自显卡的 <strong>前缓冲区</strong>，而显卡在接收到浏览器进程发送过来的页面后，会合成相应的图像，并将图像保存到 <strong>后缓冲区</strong>，然后系统自动将前缓冲区和后缓冲区进行对调，如此循环更新。</p>
<h3 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2" aria-hidden="true">#</a> 总结</h3>
<p>到这里，我们把整个流程全部都走通了一遍，大致流程如下：
<img src="https://cdn.nlark.com/yuque/0/2021/jpeg/12821255/1627545018624-4eeb7d41-c95c-43e5-a1bb-d23ef46220d4.jpeg#align=left&amp;display=inline&amp;height=549&amp;margin=[object Object]&amp;originHeight=549&amp;originWidth=736&amp;size=0&amp;status=done&amp;style=none&amp;width=736" alt="">
参考：
<a href="https://i-want-offer.github.io/FE-Essay/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93/%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5URL%E7%9A%84%E5%85%A8%E8%BF%87%E7%A8%8B.html" target="_blank" rel="noopener noreferrer">https://i-want-offer.github.io/FE-Essay/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93/%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5URL%E7%9A%84%E5%85%A8%E8%BF%87%E7%A8%8B.html<OutboundLink/></a></p>
</template>
