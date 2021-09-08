"use strict";(self.webpackChunkFE_Knowledge=self.webpackChunkFE_Knowledge||[]).push([[694],{3043:(e,a,t)=>{t.r(a),t.d(a,{data:()=>h});const h={key:"v-05028e6b",path:"/HTTP/HTTP%E7%89%88%E6%9C%AC.html",title:"HTTP 各版本",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"HTTP/1.0 和 HTTP/1.1 有什么区别",slug:"http-1-0-和-http-1-1-有什么区别",children:[{level:3,title:"长连接",slug:"长连接",children:[]},{level:3,title:"缓存处理",slug:"缓存处理",children:[]},{level:3,title:"带宽优化以及网络连接的使用",slug:"带宽优化以及网络连接的使用",children:[]},{level:3,title:"Host 头处理",slug:"host-头处理",children:[]}]},{level:2,title:"HTTP/1.1 和 HTTP/2.0 有什么区别",slug:"http-1-1-和-http-2-0-有什么区别",children:[{level:3,title:"二进制分帧",slug:"二进制分帧",children:[]},{level:3,title:"头部压缩",slug:"头部压缩",children:[]},{level:3,title:"服务端推送",slug:"服务端推送",children:[]},{level:3,title:"多路复用",slug:"多路复用",children:[]}]},{level:2,title:"HTTP/3",slug:"http-3",children:[{level:3,title:"HTTP/2 的缺陷",slug:"http-2-的缺陷",children:[]},{level:3,title:"QUIC 协议",slug:"quic-协议",children:[]}]}],filePathRelative:"HTTP/HTTP版本.md",git:{updatedTime:1627488007e3,contributors:[{name:"wl1532502541",email:"1532502541@qq.com",commits:1}]}}},1313:(e,a,t)=>{t.r(a),t.d(a,{default:()=>T});var h=t(6252);const i=(0,h.uE)('<h1 id="http-各版本" tabindex="-1"><a class="header-anchor" href="#http-各版本" aria-hidden="true">#</a> HTTP 各版本</h1><p>1991年　　HTTP/0.9 仅支持GET请求，不支持请求头</p><p>1996年　　HTTP/1.0 默认短连接（一次请求建议一次TCP连接，请求完就断开），支持GET、POST、 HEAD请求</p><p>1999年　　HTTP/1.1 默认长连接（一次TCP连接可以多次请求）；支持PUT、DELETE、PATCH等六种请求</p><p>增加host头，支持虚拟主机；支持断点续传功能</p><p>2015年　　HTTP/2.0 多路复用，降低开销（一次TCP连接可以处理多个请求）；</p><p>服务器主动推送（相关资源一个请求全部推送）；</p><p>解析基于二进制，解析错误少，更高效（HTTP/1.X解析基于文本）；</p><p>报头压缩，降低开销。</p><h2 id="http-1-0-和-http-1-1-有什么区别" tabindex="-1"><a class="header-anchor" href="#http-1-0-和-http-1-1-有什么区别" aria-hidden="true">#</a> HTTP/1.0 和 HTTP/1.1 有什么区别</h2><h3 id="长连接" tabindex="-1"><a class="header-anchor" href="#长连接" aria-hidden="true">#</a> 长连接</h3><p>HTTP/1.1 支持长连接和管道化连接，在一个 TCP 连接上可以传送多个 HTTP 请求，避免了因为多次建立 TCP 连接的时间消耗和延时</p><h3 id="缓存处理" tabindex="-1"><a class="header-anchor" href="#缓存处理" aria-hidden="true">#</a> 缓存处理</h3><p>HTTP/1.1 新增了 <code>ETag</code>、<code>If-Unmodified-Since</code>、<code>If-Match</code> 、<code>If-None-Match</code> 等新的请求头来控制缓存</p><h3 id="带宽优化以及网络连接的使用" tabindex="-1"><a class="header-anchor" href="#带宽优化以及网络连接的使用" aria-hidden="true">#</a> 带宽优化以及网络连接的使用</h3><p>HTTP/1.1 在请求头中引入了 range，支持断点续传的功能</p><h3 id="host-头处理" tabindex="-1"><a class="header-anchor" href="#host-头处理" aria-hidden="true">#</a> Host 头处理</h3><p>在 HTTP/1.0 中认为每台服务器都有唯一的 IP 地址，但随着虚拟主机技术的发展，多个主机共享一个 IP 地址越发普遍，HTTP/1.1 的请求消息和响应消息都应该支持 Host 头域，且请求消息中如果没有 Host 头域会报 400 错误</p><h2 id="http-1-1-和-http-2-0-有什么区别" tabindex="-1"><a class="header-anchor" href="#http-1-1-和-http-2-0-有什么区别" aria-hidden="true">#</a> HTTP/1.1 和 HTTP/2.0 有什么区别</h2><h3 id="二进制分帧" tabindex="-1"><a class="header-anchor" href="#二进制分帧" aria-hidden="true">#</a> 二进制分帧</h3><ul><li><strong>帧</strong>：HTTP/2 数据通信的最小单位消息，指的是 HTTP/2 中逻辑上的 HTTP 消息，例如请求和响应等，消息由一个或多个帧组成。</li><li><strong>流</strong>：存在于连接中的一个虚拟通道。流可以承载双向消息，每个流都有一个唯一的整数 ID</li></ul><p>HTTP/2 采用二进制格式传输数据，而非 HTTP/1.x 的文本格式，二进制协议解析起来更高效。</p><h3 id="头部压缩" tabindex="-1"><a class="header-anchor" href="#头部压缩" aria-hidden="true">#</a> 头部压缩</h3><p>HTTP/1.x 会在请求和响应中重复地携带不常改变的、冗长的头部数据，给网络带来额外的负担。</p><ul><li>HTTP/2 在客户端和服务端使用 “首部表” 来跟踪和存储之前发送的键值对，对于相同的数据，不再通过每次请求和响应发送；</li><li>首部表在 HTTP/2 的连接存续期内始终存在，有客户端和服务端共同渐进地更新；</li><li>每个新的首部键值对要么被追加到当前表的末尾，要么替换表中的值。</li></ul><p>你可以理解为只发送差异数据，而不是全部数据，从而减少头部的信息量。</p><p><img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627483719063-73b9bd54-3b38-454a-a27b-83043d721e09.png" alt="image"></p><h3 id="服务端推送" tabindex="-1"><a class="header-anchor" href="#服务端推送" aria-hidden="true">#</a> 服务端推送</h3><p>服务端可以在发送 HTML 时主动推送其他资源，而不是等浏览器解析到相应位置，发起请求再响应。例如服务端可以主动把 JS、CSS 文件推送给客户端，而不需要客户端解析 HTML 时在发送这些请求。</p><p>服务端可以主动推送，客户端也有权利选择是否接受。如果服务端推送的资源已经被浏览器缓存过，浏览器可以通过发送 RST_STREAM 帧来拒收。主动推送也遵守同源策略，服务器不会随便推送第三方资源给客户端。</p><h3 id="多路复用" tabindex="-1"><a class="header-anchor" href="#多路复用" aria-hidden="true">#</a> 多路复用</h3><p>HTTP/1.x 中，如果想并发多个请求，必须使用多个 TCP 连接。但浏览器为了控制资源，还会对单个域名有 6-8 个TCP 连接的请求限制，同时当带宽不足时，多个 tcp 还会出现竞争带宽的情况。</p><p>HTTP/2 中：</p><ul><li>同域名下所有通信都在单个连接中完成；</li><li>单个连接可以承载任意数量的双向数据流；</li><li>数据流以消息的形式发送，而消息又由一个或多个帧组成，多个帧之间可以乱序发送，因为根据帧首部的流标识可以重新组装</li></ul><p><img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627483719065-8a3e6613-ea29-4b69-b202-ccf7ff3f9da2.png" alt="image"></p><h2 id="http-3" tabindex="-1"><a class="header-anchor" href="#http-3" aria-hidden="true">#</a> HTTP/3</h2><h3 id="http-2-的缺陷" tabindex="-1"><a class="header-anchor" href="#http-2-的缺陷" aria-hidden="true">#</a> HTTP/2 的缺陷</h3><h4 id="tcp-的队头阻塞" tabindex="-1"><a class="header-anchor" href="#tcp-的队头阻塞" aria-hidden="true">#</a> TCP 的队头阻塞</h4><p>在 TCP 传输过程中，由于单个数据包的丢失而造成的阻塞称为 TCP 上的队头阻塞。HTTP/2 只解决了应用层面的队头阻塞，队头阻塞的问题还存在于 TCP 协议本身。</p><h4 id="tcp-建立连接的延时" tabindex="-1"><a class="header-anchor" href="#tcp-建立连接的延时" aria-hidden="true">#</a> TCP 建立连接的延时</h4><p>TCP 以及 TCP + TLS 建立连接的所产生的延时也是影响传输效率的一个主要因素。</p><h4 id="tcp-协议僵化" tabindex="-1"><a class="header-anchor" href="#tcp-协议僵化" aria-hidden="true">#</a> TCP 协议僵化</h4><h5 id="中间件僵化" tabindex="-1"><a class="header-anchor" href="#中间件僵化" aria-hidden="true">#</a> 中间件僵化</h5><p>我们把互联网各处搭建的设备叫做中间设备（中间件），比如路由器、NAT、防火墙、交换机等，它们通常以来一些很少升级的软件，这些软件大量使用 TCP 特性，设置之后便很少进行更新。这就对我们更新 TCP 的时候造成了困难，新协议的数据包经过这些中间件时，它们不会去理解包的内容从而丢弃了这些数据包。</p><h5 id="操作系统" tabindex="-1"><a class="header-anchor" href="#操作系统" aria-hidden="true">#</a> 操作系统</h5><p>因为 TCP 协议都是通过操作系统来实现的，应用程序只能使用不能修改，通常操作系统的更新都滞后于软件的更新，所以想要更新操作系统内核中的 TCP 协议也是非常困难的。</p><h3 id="quic-协议" tabindex="-1"><a class="header-anchor" href="#quic-协议" aria-hidden="true">#</a> QUIC 协议</h3><p>HTTP/3 选择了一个折中的方法 -- UDP 协议。 <strong>基于 UDP 实现了类似于 TCP 的多路数据流、传输可靠性等功能，我们把这套功能称为 QUIC 协议。</strong></p><ul><li>实现了类似 TCP 的流量控制、传输可靠性功能</li><li>集成了 TLS 加密功能</li><li>实现了 HTTP/2 中的多路复用功能</li><li>实现了快速握手功能</li></ul>',49),r=(0,h.Uk)("原文："),l={href:"https://i-want-offer.github.io/FE-Essay/%E5%89%8D%E5%90%8E%E7%AB%AF%E9%80%9A%E4%BF%A1/HTTP%E7%89%88%E6%9C%AC.html",target:"_blank",rel:"noopener noreferrer"},d=(0,h.Uk)("https://i-want-offer.github.io/FE-Essay/%E5%89%8D%E5%90%8E%E7%AB%AF%E9%80%9A%E4%BF%A1/HTTP%E7%89%88%E6%9C%AC.html"),T={render:function(e,a){const t=(0,h.up)("OutboundLink");return(0,h.wg)(),(0,h.iD)(h.HY,null,[i,(0,h._)("p",null,[r,(0,h._)("a",l,[d,(0,h.Wm)(t)])])],64)}}}}]);