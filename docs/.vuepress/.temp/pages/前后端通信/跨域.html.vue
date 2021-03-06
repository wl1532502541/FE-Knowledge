<template><h1 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>从“跨域”这个词开始，去理清跨域这个知识点，途径同源策略，跨过document.domain，window.postMessage，JSONP，CORS等，先放若干个问题，希望看完文章的你可以答上来。</p>
<ol>
<li>能说说跨域吗？</li>
<li>能说说同源策略吗？</li>
<li>为什么要同源策略，它限制了什么？</li>
<li>你知道哪些跨域方案呢？</li>
<li>有关cookie的跨域怎么实现？</li>
<li>能具体说说JSONP吗？返回什么数据呢，前端怎么处理呢？知道什么原理吗？实现过吗？JSONP服务器端实现过吗？</li>
<li>postMessage 了解吗？怎么使用？需要注意什么？（安全方面）</li>
<li>代理了解过吗？用过哪些代理方案呢不？怎么在项目中用呢？</li>
<li>cors可以具体说一个简单请求和非简单请求吗？具体过程说一下？项目中怎么使用？</li>
</ol>
<p>文章可能有些地方写的不当和不全的地方，欢迎评论区给我建议，感谢~~ 🤞🤞🤞
也希望里面的知识点有哪里不清楚的，你可以自己可以花时间去整明白更好，加油呀😊
这次就不放导图啦，右边目录很清楚~~</p>
<h2 id="_1、讲一下跨域是什么" tabindex="-1"><a class="header-anchor" href="#_1、讲一下跨域是什么" aria-hidden="true">#</a> 1、讲一下跨域是什么？</h2>
<p>一个源加载的文档或者脚本和来自另一个源的文档和脚本等资源进行交互（也就是不满足同源策略的两个源之间进行一些交互），就是跨域。
所以你需要清楚的是同源策略是什么？它为什么出现？它又限制了什么？  往下看吧：</p>
<h2 id="_2、同源策略" tabindex="-1"><a class="header-anchor" href="#_2、同源策略" aria-hidden="true">#</a> 2、同源策略</h2>
<h3 id="_2-1、-同源策略是什么" tabindex="-1"><a class="header-anchor" href="#_2-1、-同源策略是什么" aria-hidden="true">#</a> 2.1、 同源策略是什么？</h3>
<p>所谓&quot;同源&quot;指的是&quot;三个相同&quot;。</p>
<ul>
<li>协议相同</li>
<li>域名相同</li>
<li>端口相同</li>
</ul>
<p>举个栗子:
<code>[http://www.jingda.com/dir/page.html](http://www.jingda.com/dir/page.html)</code>这个网址，协议是<code>http://</code>，域名是<code>www.jingda.com</code>，端口是80（默认端口可以省略）。来看看下面改编的哪些是同源哪些是不同源：</p>
<ul>
<li><code>[http://www.jingda.com/dir2/other.html](http://www.jingda.com/dir2/other.html)</code>：同源</li>
<li><code>[http://jingda1.com/dir/other.html](http://jingda1.com/dir/other.html)</code>：不同源（域名不同）</li>
<li><code>[http://v2.www.jingda.com/dir/other.html](http://v2.www.jingda.com/dir/other.html)</code>：不同源（域名不同）</li>
<li><code>[http://www.jingda.com:81/dir/other.html](http://www.jingda.com:81/dir/other.html)</code>：不同源（端口不同）</li>
<li><code>[https://www.jingda.com/dir/page.html](https://www.jingda.com/dir/page.html)</code>：不同源（协议不同）</li>
</ul>
<h3 id="_2-2、-为什么需要同源策略" tabindex="-1"><a class="header-anchor" href="#_2-2、-为什么需要同源策略" aria-hidden="true">#</a> 2.2、 为什么需要同源策略？</h3>
<p>同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。它能帮助阻隔恶意文档，减少可能被攻击的媒介。 假设小明同学在A银行的官网进行了登录，之后他又去浏览了其他网站，如果其他网站可以读取A银行官网的cookie，那么小明在A银行的登录信息和其他存款记录等都会被泄露，将是一件非常危险的情况。
而cookie的访问限制只是同源策略限制的一种情况，下面我们介绍一下其他的。</p>
<h3 id="_2-3、-同源策略带来了什么访问限制" tabindex="-1"><a class="header-anchor" href="#_2-3、-同源策略带来了什么访问限制" aria-hidden="true">#</a> 2.3、 同源策略带来了什么访问限制？</h3>
<ul>
<li>跨源数据存储访问：访问存储在浏览器中的数据，如 localStorage 和 IndexedDB，是以源进行分割；Cookies  使用不同的源定义方式。每个源都拥有自己单独的存储空间，一个源中的 JavaScript 脚本不能对属于其它源的数据进行读写操作。</li>
<li>跨源脚本API访问：JavaScript 的 API 中，如 iframe.contentWindow、 window.parent、window.open 和 window.opener 允许文档间直接相互引用。当两个文档的源不同时，这些引用方式将对 Window 和 Location对象的访问添加限制，</li>
<li>跨源网络访问：同源策略控制不同源之间的交互，例如在使用XMLHttpRequest 或  标签时则会受到同源策略的约束。</li>
</ul>
<h2 id="_3、解决跨域的几种方法" tabindex="-1"><a class="header-anchor" href="#_3、解决跨域的几种方法" aria-hidden="true">#</a> 3、解决跨域的几种方法？</h2>
<p>将上面三种访问限制简化成下面的三种表达：
（1） Cookie、LocalStorage 和 IndexDB 无法读取。
（2） JavaScript 的 API 中的一些引用，无法获得。（详见上）
（3） AJAX  请求不能发送。（也就是无法使用XMLHttpRequest）
（因为在网上有关跨域的解决方案，可能是比较多，但这里我是根据上面三种限制依次介绍一下可能行得通的解决方案）</p>
<h3 id="_3-1、-cookie-document-domain" tabindex="-1"><a class="header-anchor" href="#_3-1、-cookie-document-domain" aria-hidden="true">#</a> 3.1、 cookie -- document.domain</h3>
<p>当我们尝试解决因同源策略下，无法访问cookie这种情况时，我们可以借助：</p>
<ul>
<li>1、<code>浏览器允许通过设置document.domain共享 Cookie。</code>来达成效果。但是，<code>两个网页一级域名相同，只是二级域名不同</code>才可以设置，那什么是一级域名，什么是二级域名呢？</li>
</ul>
<p>举个栗子： A网页：<code>[http://w1.jingda.com/a.html](http://w1.jingda.com/a.html)</code>在这个网页地址中，<code>w1.jingda.com</code>这部分统称为域名，</p>
<ul>
<li>一级域名是由一个合法的字符串+域名后缀组成，所以，jingda.com这种形式的域名才是一级域名，jingda是域名主体，.com、.net也是域名后缀。</li>
<li>二级域名实际就是一级域名下面的主机名，顾名思义，<code>它是在一级域名前面加上一个字符串</code>，比如w1.jingda.com，</li>
</ul>
<p>解释完怎样的情况可以设置document.domain共享 Cookie，让我们看看一个如何操作：
假设有两个网页地址，我们可以看到，他们的一级域名是相同的，二级域名的不同的：
A网页：<code>[http://w1.jingda.com/a.html](http://w1.jingda.com/a.html)</code>
B网页：<code>[http://w2.jingda.com/b.html](http://w2.jingda.com/b.html)</code>
那么只要设置相同的document.domain，两个网页就可以共享Cookie。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>document.domain = 'example.com';
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>A网页通过脚本设置一个 Cookie。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>document.cookie = "test1=hello";
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>B网页就可以读到这个 Cookie。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var allCookie = document.cookie;
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2、服务器也可以在设置Cookie的时候，指定Cookie的所属域名为一级域名，比如.example.com。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Set-Cookie: key=value; domain=.example.com; path=/
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这样的话，二级域名和三级域名不用做任何设置，都可以读取这个Cookie。
这里的话，补充一下设置cookie的时候，一些其他的设置来限定其可访问性：</p>
<ol>
<li>Domain 和 Path 标识定义了Cookie的作用域：即允许 Cookie 应该发送给哪些URL。</li>
<li>Secure：Secure属性是说如果一个cookie被设置了Secure=true，那么这个cookie只能用https协议发送给服务器，用http协议是不发送的。</li>
<li>HttpOnly ：使用 HttpOnly 属性可防止通过 JavaScript 访问 cookie 值</li>
<li>SameSite Cookie 允许服务器要求某个 cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。</li>
</ol>
<p>你应该注意到，这里我们只是单单解决了在有一些限制条件下的<code>访问cookie</code>的限制。但是上面还提到的<code>LocalStorage 和 IndexDB</code>暂时还没有解决。(等下再说)</p>
<h3 id="_3-2、-api访问-window-postmessage" tabindex="-1"><a class="header-anchor" href="#_3-2、-api访问-window-postmessage" aria-hidden="true">#</a> 3.2、 API访问 --  window.postMessage</h3>
<p>postMessage是html5新增的一个解决跨域的一个方法，为了能让不同源中文档进行交流，可以使用 window.postMessage安全地实现跨源通信。（安全是指在正确的使用情况下），这</p>
<h4 id="_3-2-1、window-postmessage的使用场景" tabindex="-1"><a class="header-anchor" href="#_3-2-1、window-postmessage的使用场景" aria-hidden="true">#</a> 3.2.1、window.postMessage的使用场景？</h4>
<p>个我自己也是没有用过的。使用方法大家可以参考这篇<a href="https://link.juejin.cn/?target=https%3A%2F%2Fblog.csdn.net%2Fweixin_40650646%2Farticle%2Fdetails%2F81777398%3Futm_medium%3Ddistribute.pc_relevant.none-task-blog-2%257Edefault%257EBlogCommendFromBaidu%257Edefault-7.control%26dist_request_id%3D1328769.70653.16176908362791735%26depth_1-utm_source%3Ddistribute.pc_relevant.none-task-blog-2%257Edefault%257EBlogCommendFromBaidu%257Edefault-7.control" target="_blank" rel="noopener noreferrer">window.postMessage用法<OutboundLink/></a>一个比较小的案例
因为是两个窗口页面之间的通信，因此我们这边假设我两个页面，A,B，目的是在B窗口中点击postMessage按钮，能够在A页面收到发来的消息。 A页面：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
  function test() {
    let op = window.open('b.html', '_blank'); 
    function receiveMessage(event) {
      console.log('event', event);
    }
    op.addEventListener("message", receiveMessage, false); 
  }
&lt;/script>
&lt;body>
  &lt;div>
    &lt;button onClick="test()">open&lt;/button>
  &lt;/div>
&lt;/body>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>B页面：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
  function post() {
    window.postMessage("hi there!", location.origin);
  }
  function receiveMessage(event) {
    console.log('event', event)
  }
  window.addEventListener("message", receiveMessage, false);
&lt;/script>
&lt;body>
  &lt;div>
    &lt;button onClick="post()">postMessage&lt;/button>
  &lt;/div>
&lt;/body>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>我就直接说一下大概的思路了： 首先看看B页面：</p>
<ol>
<li>在B页面有一个按钮，点击这个按钮会触发一个方法，post()</li>
<li>在post()方法中，window.postMessage(&quot;hi there!&quot;, location.origin)，发送到所有同源的窗口，注意，当前窗口也会收到</li>
<li>之后通过 window.addEventListener(&quot;message&quot;, receiveMessage, false)去监听，如果有数据，就执行receiveMessage(),把数据打印出来</li>
</ol>
<p>再来看A页面：</p>
<ol>
<li>在A页面也有一个按钮，当点击这个按钮时触发test()</li>
<li>打开新窗口，并建立窗口的引用变量op = window.open('B.html', '_blank');</li>
<li>op.addEventListener(&quot;message&quot;, receiveMessage, false); 监听新开窗口发来的消息,通过 receiveMessage() 把数据打印出来</li>
</ol>
<h4 id="_3-2-2、如何正确的使用-以保证安全性" tabindex="-1"><a class="header-anchor" href="#_3-2-2、如何正确的使用-以保证安全性" aria-hidden="true">#</a> 3.2.2、如何正确的使用，以保证安全性？</h4>
<ol>
<li>始终使用origin和source属性验证发件人的身份,没有验证origin和source属性会导致跨站点脚本攻击。</li>
<li>当使用postMessage将数据发送到其他窗口时，指定精确的目标origin，而不是*</li>
</ol>
<h3 id="_3-3、jsonp" tabindex="-1"><a class="header-anchor" href="#_3-3、jsonp" aria-hidden="true">#</a> 3.3、JSONP</h3>
<blockquote>
<p>JSONP(JSON with Padding)是JSON的一种“使用模式”，可用于解决主流浏览器的跨域数据访问的问题。</p>
</blockquote>
<h4 id="_3-3-1、jsonp的介绍" tabindex="-1"><a class="header-anchor" href="#_3-3-1、jsonp的介绍" aria-hidden="true">#</a> 3.3.1、JSONP的介绍</h4>
<p>JSONP 是通过在<code>&lt;script&gt;&lt;/srcipt&gt;</code>标签里，通过src，img，href 属性的跨域方式向一个不同源的网站地址发送http请求，并且使得json数据可以在javascript代码中能够使用。
它规避了javascript代码中的跨源网络访问，也就是无法使用XMLHttpRequest，fetch被同源机制管到了（如果不同源的话）。
提前准备一个接口：<code>[https://photo.sina.cn/aj/index?page=1&amp;cate=recommend](https://photo.sina.cn/aj/index?page=1&amp;cate=recommend)</code>直接网页中打开，我们是可以看到有很多数据的，如下图：
<img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627476525368-cddc3ff7-c4ae-43dd-9454-362c23db8c51.png#align=left&amp;display=inline&amp;height=338&amp;margin=[object Object]&amp;originHeight=338&amp;originWidth=738&amp;size=0&amp;status=done&amp;style=none&amp;width=738" alt="">
让我们尝试在本地请求一下这个地址，看看能不能拿到数据：因为双方地址并不是同源的，因此这样请求会报跨域的错：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;body>
   &lt;script>
        fetch('https://photo.sina.cn/aj/index?page=1&amp;cate=recommend')
            .then(data=>{
                console.log(data);
                
            })
    &lt;/script>
&lt;/body>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>通过 live-server打开浏览器，在控制台可以看到报错了，因为这个是一个跨域的请求：
<img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627476525536-5b038751-0566-4344-8aa9-4a18e20c5b0d.png#align=left&amp;display=inline&amp;height=176&amp;margin=[object Object]&amp;originHeight=176&amp;originWidth=661&amp;size=0&amp;status=done&amp;style=none&amp;width=661" alt="">
接下来我们来看看JSONP如何解决这个问题：</p>
<h4 id="_3-3-2、jsonp-如何使用-原理是什么-返回数据格式-前端怎么处理" tabindex="-1"><a class="header-anchor" href="#_3-3-2、jsonp-如何使用-原理是什么-返回数据格式-前端怎么处理" aria-hidden="true">#</a> 3.3.2、jsonp 如何使用？原理是什么？返回数据格式？前端怎么处理？</h4>
<p>还是请求上面的这个网站地址，我们把代码改成下面这样：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;body>
  &lt;script>
    function callback(data){
        console.log(data);
    }
&lt;/script>
&lt;script src="https://photo.sina.cn/aj/index?page=1&amp;cate=recommend&amp;callback=callback">&lt;/script>  
&lt;/body>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>再来看看页面控制台输出：
<img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627476525347-2c00c41b-f2cb-400b-8f93-943033df2258.png#align=left&amp;display=inline&amp;height=164&amp;margin=[object Object]&amp;originHeight=164&amp;originWidth=435&amp;size=0&amp;status=done&amp;style=none&amp;width=435" alt="">
data成功取到了。但是我们的数据到达之后是json数据，不能直接使用，script标签是一个加载资源的标签，它并不能直接运行这个代码。
事实上我们是在访问的时候，在请求的地址后面加上一个，<code>&amp;callback=callback</code>，通知服务器，本地想进行一个跨资源访问（以JSOP的形式进行跨域）。等号后面的<code>callback</code>是一个你自己定义的函数，名字可自取，这个函数就是，通知我需要请求的地址，这边页面上我有一个函数，它会等待调用，用来执行你发过来的数据（也就是可以去执行把数据请求下来的操作）。
因此在数据到达之后，还包了一层函数 <code>callback({data})</code>，当数据通过script标签请求下来之后，再通过<code>callback</code>实现了一个调用本地资源的能力。
<img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627476525344-33e331c3-8492-4f88-ae69-3b4b0cc40788.png#align=left&amp;display=inline&amp;height=299&amp;margin=[object Object]&amp;originHeight=299&amp;originWidth=918&amp;size=0&amp;status=done&amp;style=none&amp;width=918" alt="">
最后再理一下这部分的内容：</p>
<ul>
<li>JSONP的原理</li>
</ul>
<p>script标签请求数据，在请求的地址后面加上一个，<code>&amp;callback=callback</code>，请求的服务器就在json数据外面包一层callback函数，当这个带有数据的callback函数可以在script得到之后可以运行的函数：
<img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627476525514-3373e359-bea5-4f9e-bd8b-e21fa3f0d033.png#align=left&amp;display=inline&amp;height=214&amp;margin=[object Object]&amp;originHeight=214&amp;originWidth=1204&amp;size=0&amp;status=done&amp;style=none&amp;width=1204" alt=""></p>
<ul>
<li>返回的数据格式</li>
</ul>
<p>JSON</p>
<ul>
<li>以及前端如何处理的</li>
</ul>
<p>JSON with padding --- <code>callback({data})</code></p>
<h4 id="_3-3-3、自己封装一个jsonp" tabindex="-1"><a class="header-anchor" href="#_3-3-3、自己封装一个jsonp" aria-hidden="true">#</a> 3.3.3、自己封装一个jsonp？</h4>
<ol>
<li>准备工作</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
    let jsonp = () => {
    }
    jsonp('https://photo.sina.cn/aj/index', {
      page: 1,
      cate: 'recommend'
    })
    .then(response => {
      console.log(response,'调用成功啦');
    })
  &lt;/script>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="2">
<li>具体实现流程</li>
</ol>
<ul>
<li>确定传递参数： url 、携带的参数 、callback;</li>
<li>处理url上的参数（？后面的）;</li>
<li>准备好url（携带callback函数）;</li>
<li>构建script标签;</li>
<li>把这个标签挂到window上</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
    // 1、确定好参数
    let jsonp = (url,data = {},callback = 'callback') => {
    // 2、处理好url里面的参数
      let dataStr = url.indexOf('?') === -1 ? '?':'&amp;'
    // 3、把参数和&amp;拼接上去
      for (let key in data) {
        dataStr += `${key}=${data[key]}&amp;`;
      }
    // 4、把callback拼接上
      dataStr += 'callback=' + callback;
    // 5、创建一个script标签
      let oScript = document.createElement('script');
      oScript.src = url + dataStr;
      document.body.appendChild(oScript);
     // 6、把script标签挂载到window上去
    //方案一、
      // window[callback] = (data) => {
      //   console.log(data);
      // }
    // 方案二、
      return new Promise((reslove,reject) => {
        window[callback] = (data) => {
          try {
            reslove(data)
          } catch(e) {
            reject(e)
          } finally {
            oScript.parentNode.removeChild(oScript);
            //删除这个script节点
          }
        }
      })
    }
    //调用jsonp方法
    jsonp('https://photo.sina.cn/aj/index?a=1', {
      page: 1,
      cate: 'recommend'
    })
    .then(response => {
      console.log(response,'调用成功啦');
    })
  &lt;/script>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h4 id="_3-3-4、实现一个jsonp服务器端-node版本-express版本" tabindex="-1"><a class="header-anchor" href="#_3-3-4、实现一个jsonp服务器端-node版本-express版本" aria-hidden="true">#</a> 3.3.4、实现一个jsonp服务器端？（node版本，express版本）</h4>
<h4 id="node版本" tabindex="-1"><a class="header-anchor" href="#node版本" aria-hidden="true">#</a> node版本</h4>
<p>创建一个结构如下的服务器端文件夹，我们将在index.js中实现我们的JSONP：<img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627476525593-f5432324-2aea-48c2-88df-e3c05964cd98.png#align=left&amp;display=inline&amp;height=203&amp;margin=[object Object]&amp;originHeight=203&amp;originWidth=373&amp;size=0&amp;status=done&amp;style=none&amp;width=373" alt=""></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var http = require('http');
http.createServer(function(req, res){
// req url  callback=?
console.log(req.url);
let data = {a: 1};
res.writeHead(200, {'Content-type' : 'text/json'})
  const reg = /callback=([\w]+)/
  if (reg.test(req.url)) {
    let padding = RegExp.$1
    res.end(`${padding}(${JSON.stringify(data)})`)
  } else {
    res.end(JSON.stringify(data));
  }
//  res.end('&lt;p>Hello World&lt;/p>');
 res.end(JSON.stringify(data));
}).listen(3000);
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="express-版本" tabindex="-1"><a class="header-anchor" href="#express-版本" aria-hidden="true">#</a> express 版本</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var express = require('express');
var cors = require('cors');//后端cors 中间件
const app = express();
app.use(cors());
app.get('/product',(req,res)=>{
    res.json({
        a:1,
        b:2
    })
})
app.listen(8000,()=>{
    console.log('server is ok')
})
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_3-4-cors" tabindex="-1"><a class="header-anchor" href="#_3-4-cors" aria-hidden="true">#</a> 3.4 cors</h3>
<h4 id="_3-4-1、介绍一下cors" tabindex="-1"><a class="header-anchor" href="#_3-4-1、介绍一下cors" aria-hidden="true">#</a> 3.4.1、介绍一下cors？</h4>
<blockquote>
<p>CORS是一个W3C标准，全称是&quot;跨域资源共享&quot;（Cross-origin resource sharing）。它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。</p>
</blockquote>
<h4 id="_3-4-2、简单请求和非简单请求" tabindex="-1"><a class="header-anchor" href="#_3-4-2、简单请求和非简单请求" aria-hidden="true">#</a> 3.4.2、简单请求和非简单请求？</h4>
<p>浏览器将CORS请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。
除了简单请求其他的都是非简单请求，因此只要记住哪些是简单请求就可以啦：</p>
<h4 id="简单请求-需要同时满足下面两种条件" tabindex="-1"><a class="header-anchor" href="#简单请求-需要同时满足下面两种条件" aria-hidden="true">#</a> 简单请求：（需要同时满足下面两种条件）</h4>
<ol>
<li>请求方法是以下三种方法之一：</li>
</ol>
<ul>
<li>HEAD</li>
<li>GET</li>
<li>POST</li>
</ul>
<ol start="2">
<li>HTTP的头信息不超出以下几种字段：</li>
</ol>
<ul>
<li>Accept：设置接受的内容类型（请求头）</li>
<li>Accept-Language：设置接受的语言（请求头）</li>
<li>Content-Language：为封闭内容设置自然语言或者目标用户语言（响应头）</li>
<li>Content-Type：（设置请求体的MIME类型（适用POST和PUT请求））只限于三个值</li>
</ul>
<p><code>application/x-www-form-urlencoded</code>：
中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）
<code>multipart/form-data</code>：将表单的数据处理为一条消息，以标签为单元，用分隔符分开。既可以上传键值对，也可以上传文件。
<code>text/plain</code>：text/plain ：纯文本格式</p>
<h4 id="_3-4-3、项目中怎么使用" tabindex="-1"><a class="header-anchor" href="#_3-4-3、项目中怎么使用" aria-hidden="true">#</a> 3.4.3、项目中怎么使用？</h4>
<ul>
<li>服务器端：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const express = require('express');
const app= express();
 
app.get('/', (req, res)=>{
  console.log('server is OK');
  res.end('jingjing')
});
// app.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin",'http://localhost:5500');
// 	res.header("Access-Control-Allow-Credentials", true);
// 	res.header("Access-Control-Allow-Headers", 'Content-Type,Content-Length,Authorization, Accept,X-Requested-With');
// 	res.header("Access-Control-Allow-Methods", 'PUT,POST,GET,DELETE,OPTIONS,HEAD');
// 	req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next();
// });
app.listen(8081, ()=>{
    console.log('Server is running at http://localhost:8081')
})
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul>
<li>前端请求：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;body>
    &lt;button onclick="sendAjax()">sendAjax&lt;/button>
  &lt;script type="text/javascript">
    var sendAjax = () => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1:5500', true);
        xhr.send();
        xhr.onreadystatechange = function (e) {
          if (xhr.readyState == 4 &amp;&amp; xhr.status == 200) {
            console.log(xhr.responseText);
            console.log('成功了')
          }
        };
    }
  &lt;/script>
  &lt;/body>
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>跨域报错：
<img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627476525349-c6be7ca9-88e6-4ba1-aae9-ba13030fa655.png#align=left&amp;display=inline&amp;height=324&amp;margin=[object Object]&amp;originHeight=324&amp;originWidth=909&amp;size=0&amp;status=done&amp;style=none&amp;width=909" alt="">
把中间注释的部分放开再执行：没有上面的报错了，也返回了</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>console.log(xhr.responseText);
console.log('成功了')
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627476525520-dd68f889-2e62-4bf8-a0fd-a3c3399aa7bd.png#align=left&amp;display=inline&amp;height=189&amp;margin=[object Object]&amp;originHeight=189&amp;originWidth=295&amp;size=0&amp;status=done&amp;style=none&amp;width=295" alt="">
分析一下：</p>
<ul>
<li>&quot;Access-Control-Allow-Origin&quot;,<code>http://localhost:5500</code>：</li>
</ul>
<p>如果服务端仅允许来自 <code>http://localhost:5500</code>的访问，如果服务端返回的 Access-Control-Allow-Origin: * 表明，该资源可以被任意外域访问。</p>
<ul>
<li>&quot;Access-Control-Allow-Credentials&quot;, true):</li>
</ul>
<p>Access-Control-Allow-Credentials 头指定了当浏览器的credentials设置为true时是否允许浏览器读取response的内容。</p>
<ul>
<li>&quot;Access-Control-Allow-Headers&quot;, 'Content-Type,Content-Length,Authorization, Accept,X-Requested-With'):</li>
</ul>
<p>首部字段 Access-Control-Allow-Headers 表明服务器允许请求中携带字段 X-PINGOTHER 与 Content-Type。</p>
<ul>
<li>&quot;Access-Control-Allow-Methods&quot;, 'PUT,POST,GET,DELETE,OPTIONS,HEAD':</li>
</ul>
<p>首部字段 Access-Control-Allow-Methods 表明服务器允许客户端使用 POST, GET 和 OPTIONS 等方法发起请求</p>
<ul>
<li>req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next():</li>
</ul>
<p>“需预检的请求”要求必须首先使用 OPTIONS   方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求(除简单请求以外的，比如 POST方法就需要用到预检)</p>
<h3 id="_3-5、代理-nginx" tabindex="-1"><a class="header-anchor" href="#_3-5、代理-nginx" aria-hidden="true">#</a> 3.5、代理 （nginx）</h3>
<h4 id="_3-5-1-原理" tabindex="-1"><a class="header-anchor" href="#_3-5-1-原理" aria-hidden="true">#</a> 3.5.1 原理</h4>
<p>A网站向B网站请求1.js文件时，向B网站发送一个获取的请求，nginx根据配置文件接收这个请求，代替A网站向B网站来请求这个资源，nginx拿到这个资源后再返回给a网站，以此来解决了跨域问题。
<img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627476525461-89bfe6bf-2283-4953-afa8-9204dec49275.png#align=left&amp;display=inline&amp;height=501&amp;margin=[object Object]&amp;originHeight=501&amp;originWidth=1153&amp;size=0&amp;status=done&amp;style=none&amp;width=1153" alt=""></p>
<h4 id="_3-5-2-使用" tabindex="-1"><a class="header-anchor" href="#_3-5-2-使用" aria-hidden="true">#</a> 3.5.2 使用</h4>
<p>使用Nginx，有关下载和配置Nginx，我就不再这里说了，感兴趣的小伙伴可以参考一下这篇文章，里面配置相关的讲的比较清楚。<a href="https://link.juejin.cn/?target=https%3A%2F%2Fblog.csdn.net%2Fenvon123%2Farticle%2Fdetails%2F83270277" target="_blank" rel="noopener noreferrer">正确的Nginx跨域配置<OutboundLink/></a>
（自己平时也没怎么用就是，唉，大多知识点也是一边写一边理）
<img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627476525755-e776a318-0a68-4628-add2-96af04a3ff3f.png#align=left&amp;display=inline&amp;height=609&amp;margin=[object Object]&amp;originHeight=609&amp;originWidth=1080&amp;size=0&amp;status=done&amp;style=none&amp;width=1080" alt="">
但是的但是，学习还是要学滴。回到最开始我们提到的一些问题，来看看你能回答多少 👇👇👇</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>最后再来一次拷问：</p>
<ol>
<li>能说说跨域吗？</li>
<li>能说说同源策略吗？</li>
<li>为什么要同源策略，它限制了什么？</li>
<li>你知道哪些跨域方案呢？</li>
<li>有关cookie的跨域怎么实现？</li>
<li>能具体说说JSONP吗？返回什么数据呢，前端怎么处理呢？知道什么原理吗？实现过吗？JSONP服务器端实现过吗？</li>
<li>postMessage 了解吗？怎么使用？需要注意什么？（安全方面）</li>
<li>代理了解过吗？用过哪些代理方案呢不？怎么在项目中用呢？</li>
<li>cors可以具体说一个简单请求和非简单请求吗？具体过程说一下？项目中怎么使用？</li>
</ol>
<p>🙈
好啦，有关跨域的就梳理到这里了
还好菜，继续加油吧
我是婧大，一个大三学崽，目前正在准备实习面试。
这段时间应该主要是理理一些知识点，欢迎一起学习。wx:lj18379991972 💕💕💕
你的点赞是给我最大的支持🤞
<img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627476525502-95e197c4-6eb1-42f0-a791-f551ddcd61eb.png#align=left&amp;display=inline&amp;height=500&amp;margin=[object Object]&amp;originHeight=500&amp;originWidth=500&amp;size=0&amp;status=done&amp;style=none&amp;width=500" alt="">
【参考文献】：
<a href="https://link.juejin.cn/?target=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2016%2F04%2Fcors.html" target="_blank" rel="noopener noreferrer">跨域资源共享 CORS 详解<OutboundLink/></a>
<a href="https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FSecurity%2FSame-origin_policy" target="_blank" rel="noopener noreferrer">浏览器的同源策略<OutboundLink/></a>
<a href="https://link.juejin.cn/?target=https%3A%2F%2Fblog.csdn.net%2Fenvon123%2Farticle%2Fdetails%2F83270277" target="_blank" rel="noopener noreferrer">正确的Nginx跨域配置<OutboundLink/></a>
<a href="https://link.juejin.cn/?target=https%3A%2F%2Fblog.csdn.net%2Fweixin_40650646%2Farticle%2Fdetails%2F81777398%3Futm_medium%3Ddistribute.pc_relevant.none-task-blog-2%257Edefault%257EBlogCommendFromBaidu%257Edefault-7.control%26dist_request_id%3D1328769.70653.16176908362791735%26depth_1-utm_source%3Ddistribute.pc_relevant.none-task-blog-2%257Edefault%257EBlogCommendFromBaidu%257Edefault-7.control" target="_blank" rel="noopener noreferrer">window.postMessage用法<OutboundLink/></a>
<a href="https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FHTTP%2FHeaders" target="_blank" rel="noopener noreferrer">HTTP Headers<OutboundLink/></a></p>
<p>作者：jingda
链接：<a href="https://juejin.cn/post/6947940375008903176" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6947940375008903176<OutboundLink/></a>
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
</template>
