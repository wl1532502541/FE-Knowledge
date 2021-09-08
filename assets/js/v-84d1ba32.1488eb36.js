"use strict";(self.webpackChunkFE_Knowledge=self.webpackChunkFE_Knowledge||[]).push([[711],{7544:(e,a,i)=>{i.r(a),i.d(a,{data:()=>t});const t={key:"v-84d1ba32",path:"/TCP/TCP%E9%87%8D%E4%BC%A0%E3%80%81%E6%B5%81%E9%87%8F%E6%8E%A7%E5%88%B6%E4%B8%8E%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6.html",title:"TCP重传、流量控制与拥塞控制",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"1.TCP重传",slug:"_1-tcp重传",children:[]},{level:2,title:"2.流量控制",slug:"_2-流量控制",children:[{level:3,title:"为什么要提供流量控制",slug:"为什么要提供流量控制",children:[]},{level:3,title:"如何实现流量控制",slug:"如何实现流量控制",children:[]}]},{level:2,title:"3.拥塞控制",slug:"_3-拥塞控制",children:[{level:3,title:"为什么提供拥塞控制",slug:"为什么提供拥塞控制",children:[]},{level:3,title:"拥塞的标志",slug:"拥塞的标志",children:[]},{level:3,title:"TCP的四种拥塞控制算法",slug:"tcp的四种拥塞控制算法",children:[]}]}],filePathRelative:"TCP/TCP重传、流量控制与拥塞控制.md",git:{updatedTime:1627488007e3,contributors:[{name:"wl1532502541",email:"1532502541@qq.com",commits:1}]}}},4270:(e,a,i)=>{i.r(a),i.d(a,{default:()=>g});var t=i(6252);const n=(0,t.uE)('<h1 id="tcp重传、流量控制与拥塞控制" tabindex="-1"><a class="header-anchor" href="#tcp重传、流量控制与拥塞控制" aria-hidden="true">#</a> TCP重传、流量控制与拥塞控制</h1><h2 id="_1-tcp重传" tabindex="-1"><a class="header-anchor" href="#_1-tcp重传" aria-hidden="true">#</a> 1.TCP重传</h2><p>报文重传是TCP最基本的错误恢复功能，它的目的是防止报文丢失。  报文丢失的可能因素有很多种，包括应用故障，路由设备过载，或暂时的服务宕机。报文级别速度是很高的，而通常报文丢失是暂时的，因此TCP能够发现和恢复报文丢失显得尤为重要。</p><p>重传机制在实现数据可靠传输功能的同时，也引起了相应的性能问题：何时进行数据重传？如何保证较高的传输效率？  重传时间过短：在网络因为拥塞引起丢包时，频繁的重传会进一步加剧网络拥塞，引起丢包，恶化网络传输性能。  重传时间过长：接收方长时间无法完成数据接收，引起长时间占用连接线路造成资源损耗、传输效率较低等问题。  针对上述问题，TCP中设计了超时重传机制。该机制规定当发送方A向B发送数据包P1时，开启时长为RTO（Retransmission Timeout）的重传定时器，如果A在RTO内未收到B对P1的确认报文，则认为P1在网络中丢失，此时重新发送P1。由此，引出RTO大小的设定问题。</p><p>决定报文是否有必要重传的主要机制是重传计时器（retransmission timer），它的主要功能是维护重传超时（RTO）值。当报文使用TCP传输时，重传计时器启动，收到ACK时计时器停止。报文发送至接收到ACK的时间称为往返时间（RTT）。对若干次时间取平均值，该值用于确定最终RTO值。在最终RTO值确定之前，确定每一次报文传输是否有丢包发生使用重传计时器，下图说明了TCP重传过程。  <img src="https://cdn.nlark.com/yuque/0/2021/jpeg/12821255/1627486467985-5beacdec-7220-46f9-995a-e2b8b9046377.jpeg#align=left&amp;display=inline&amp;height=250&amp;margin=[object Object]&amp;originHeight=250&amp;originWidth=549&amp;size=0&amp;status=done&amp;style=none&amp;width=549" alt=""></p><p>当报文发送之后，但接收方尚未发送TCP ACK报文，发送方假设源报文丢失并将其重传。重传之后，RTO值加倍；如果在2倍RTO值到达之前还是没有收到ACK报文，就再次重传。如果仍然没有收到ACK，那么RTO值再次加倍。如此持续下去，每次重传RTO都翻倍，直到收到ACK报文或发送方达到配置的最大重传次数。  最大重传次数取决于发送操作系统的配置值。默认情况下，Windows主机默认重传5次。大多数Linux系统默认最大15次。两种操作系统都可配置。</p><p>1）超时重传  超时重传机制用来保证TCP传输的可靠性。每次发送数据包时，发送的数据报都有seq号，接收端收到数据后，会回复ack进行确认，表示某一seq号数据已经收到。发送方在发送了某个seq包后，等待一段时间，如果没有收到对应的ack回复，就会认为报文丢失，会重传这个数据包。 2）快速重传  接受数据一方发现有数据包丢掉了（并不是所期望的值。这意味着报文在传送中丢失。接收端注意到报文乱序，并且在第三个报文中发送重复ACK）。就会发送重复ACK报文告诉发送端重传丢失的报文。  当重传主机从发送端接收到3个重复ACK时，它会假设此报文确实在传送中丢失，并且立即发送一个快速重传。一旦触发了快速重传，所有正在传输的其他报文都被放入队列中，直到快速重传报文发送为止。过程如下图所示： <img src="https://cdn.nlark.com/yuque/0/2021/jpeg/12821255/1627486364329-ad2ea483-dd99-499b-b1ce-1b78980164da.jpeg#align=left&amp;display=inline&amp;height=238&amp;margin=[object Object]&amp;originHeight=238&amp;originWidth=549&amp;size=0&amp;status=done&amp;style=none&amp;width=549" alt=""></p><p>比较超时重传和快速重传，可以发现超时重传是发送端在傻等超时，然后触发重传；而快速重传则是接收端主动告诉发送端数据没收到，然后触发发送端重传。  由此可看出，快速重传机制在一定程度上弥补了超时重传机制，使得重传更加及时。</p><h2 id="_2-流量控制" tabindex="-1"><a class="header-anchor" href="#_2-流量控制" aria-hidden="true">#</a> 2.流量控制</h2><h3 id="为什么要提供流量控制" tabindex="-1"><a class="header-anchor" href="#为什么要提供流量控制" aria-hidden="true">#</a> 为什么要提供流量控制</h3><p>简单地说，提供流控就是为了避免接收方缓存溢出问题。 接收方接收到数据后，会将其放入接收缓存中，待上层应用程序读取数据。但是上层应用可能忙于其他事务或者读取数据的速度比较慢，而发送方发送数据的太多，速率太快，此时就会导致接收方的缓存溢出。 流量控制也是一个速率匹配服务。</p><h3 id="如何实现流量控制" tabindex="-1"><a class="header-anchor" href="#如何实现流量控制" aria-hidden="true">#</a> 如何实现流量控制</h3><p><strong>通过滑动窗口实现。 滑动窗口分为发送端窗口和接收端窗口(字节大小)。（实际发送窗口=min（拥塞控制窗口，接收窗口））</strong><strong>TCP接收方利用自己的接收窗口的大小来限制发送方发送窗口的大小。</strong><strong>TCP发送方收到接收方的零窗口通知后，应启动持续计时器。持续计时器超时后，向接收方发送零窗口探测报文。</strong> 窗口的大小在TCP协议头里，大小为16位。然而在TCP协议的可选项里，还可以定义窗口的比例因子，因此实际的窗口大小可以超过64KB。窗口的含义实际上就是接收缓冲区的大小。 发送窗口维护了发送端发送的已被接收端ACK的序号，以及已经发送的最大序号，这样就可以知道还能发送多少的新数据。 接收窗口维护了已经ACK的序号，以及所有接收到的包序号。 窗口大小在特定的一次连接通信过程中，大小是不变的。而滑动窗口是一种机制，滑动窗口的大小在发送端代表的是可发送的数据大小，在接收端代表的是可接收的数据大小，它们是动态变化的。</p><h2 id="_3-拥塞控制" tabindex="-1"><a class="header-anchor" href="#_3-拥塞控制" aria-hidden="true">#</a> 3.拥塞控制</h2><h3 id="为什么提供拥塞控制" tabindex="-1"><a class="header-anchor" href="#为什么提供拥塞控制" aria-hidden="true">#</a> 为什么提供拥塞控制</h3><p>在某段时间，若对网络中某一资源的需求超过了该资源所能提供的可用部分，网络性能就要变坏，这种情况就叫做网络拥塞。 在计算机网络中数位链路容量（即带宽）、交换结点中的缓存和处理机等，都是网络的资源。 若出现拥塞而不进行控制，整个网络的吞吐量将随输入负荷的增大而下降。 <img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627487199929-aa0f3c03-f9bb-46c4-b77f-c52082b44f96.png#align=left&amp;display=inline&amp;height=315&amp;margin=[object Object]&amp;originHeight=315&amp;originWidth=634&amp;size=0&amp;status=done&amp;style=none&amp;width=634" alt=""> 当输入的负载到达一定程度 吞吐量不会增加，即一部分网络资源会丢失掉，网络的吞吐量维持在其所能控制的最大值，转发节点的缓存不够大这造成分组的丢失是拥塞的征兆。</p><h3 id="拥塞的标志" tabindex="-1"><a class="header-anchor" href="#拥塞的标志" aria-hidden="true">#</a> 拥塞的标志</h3><p>重传计时器超时或接收到三个重复确认。</p><h3 id="tcp的四种拥塞控制算法" tabindex="-1"><a class="header-anchor" href="#tcp的四种拥塞控制算法" aria-hidden="true">#</a> TCP的四种拥塞控制算法</h3><p>1.慢开始 2.拥塞避免 3.快重传 4.快恢复 假定： 1.数据是单方向传送，而另一个方向只传送确认 2.接收方总是有足够大的缓存空间，因而发送发发送窗口的大小由网络的拥塞程度来决定 3.以TCP报文段的个数为讨论问题的单位，而不是以字节为单位 <img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627487205926-dd53a3ed-efac-4afd-8925-ed501972d8ad.png#align=left&amp;display=inline&amp;height=513&amp;margin=[object Object]&amp;originHeight=513&amp;originWidth=915&amp;size=0&amp;status=done&amp;style=none&amp;width=915" alt=""> 示例如下： 传输轮次：发送方给接收方发送数据报文段后，接收方给发送方发回相应的确认报文段，一个传输轮次所经历的时间就是往返时间RTT(RTT并非是恒定的数值），使用传输轮次是为了强调，把拥塞窗口cwnd所允许发送的报文段都连续发送出去，并收到了对已发送的最后一个报文段的确认，拥塞窗口cwnd会随着网络拥塞程度以及所使用的拥塞控制算法动态变化。 在tcp双方建立逻辑链接关系时， 拥塞窗口cwnd的值被设置为1，还需设置慢开始门限ssthresh,在执行慢开始算法时，发送方每收到一个对新报文段的确认时，就把拥塞窗口cwnd的值加一，然后开始下一轮的传输，当拥塞窗口cwnd增长到慢开始门限值时，就使用拥塞避免算法。</p><h4 id="慢开始" tabindex="-1"><a class="header-anchor" href="#慢开始" aria-hidden="true">#</a> 慢开始</h4><p>假设当前发送方拥塞窗口cwnd的值为1，而发送窗口swnd等于拥塞窗口cwnd，因此发送方当前只能发送一个数据报文段（拥塞窗口cwnd的值是几，就能发送几个数据报文段），接收方收到该数据报文段后，给发送方回复一个确认报文段，发送方收到该确认报文后，将拥塞窗口的值变为2，</p><p>发送方此时可以连续发送两个数据报文段，接收方收到该数据报文段后，给发送方一次发回2个确认报文段，发送方收到这两个确认报文后，将拥塞窗口的值加2变为4，发送方此时可连续发送4个报文段，接收方收到4个报文段后，给发送方依次回复4个确认报文，发送方收到确认报文后，将拥塞窗口加4，置为8，发送方此时可以连续发送8个数据报文段，接收方收到该8个数据报文段后，给发送方一次发回8个确认报文段，发送方收到这8个确认报文后，将拥塞窗口的值加8变为16，</p><p>当前的拥塞窗口cwnd的值已经等于慢开始门限值，之后改用拥塞避免算法。</p><h4 id="拥塞避免" tabindex="-1"><a class="header-anchor" href="#拥塞避免" aria-hidden="true">#</a> 拥塞避免</h4><p>也就是每个传输轮次，拥塞窗口cwnd只能线性加一，而不是像慢开始算法时，每个传输轮次，拥塞窗口cwnd按指数增长。同理，16+1……直至到达24，假设24个报文段在传输过程中丢失4个，接收方只收到20个报文段，给发送方依次回复20个确认报文段，一段时间后，丢失的4个报文段的重传计时器超时了，发送发判断可能出现拥塞，更改cwnd和ssthresh.并重新开始慢开始算法，如图所示： <img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627487220424-a84502f4-6249-43bf-9319-8aa569f06139.png#align=left&amp;display=inline&amp;height=539&amp;margin=[object Object]&amp;originHeight=539&amp;originWidth=941&amp;size=0&amp;status=done&amp;style=none&amp;width=941" alt=""><img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627487231907-da9222cc-1e70-4f72-ba37-a4a00f126bb5.png#align=left&amp;display=inline&amp;height=458&amp;margin=[object Object]&amp;originHeight=458&amp;originWidth=919&amp;size=0&amp;status=done&amp;style=none&amp;width=919" alt=""></p><h4 id="快速重传" tabindex="-1"><a class="header-anchor" href="#快速重传" aria-hidden="true">#</a> 快速重传</h4><p>发送方发送1号数据报文段，接收方收到1号报文段后给发送方发回对1号报文段的确认，在1号报文段到达发送方之前，发送方还可以将发送窗口内的2号数据报文段发送出去，接收方收到2号报文段后给发送方发回对2号报文段的确认，在2号报文段到达发送方之前，发送方还可以将发送窗口内的3号数据报文段发送出去，</p><p>假设该报文丢失，发送方便不会发送针对该报文的确认报文给发送方，发送方还可以将发送窗口内的4号数据报文段发送出去，接收方收到后，发现这不是按序到达的报文段，因此给发送方发送针对2号报文段的重复确认，表明我现在希望收到的是3号报文段，但是我没有收到3号报文段，而收到了未按序到达的报文段，发送方还可以将发送窗口中的5号报文段发送出去,接收方收到后，发现这不是按序到达的报文段，因此给发送方发送针对2号报文段的重复确认，表明我现在希望收到的是3号报文段，但是我没有收到3号报文段，而收到了未按序到达的报文段,，发送方还可以将发送窗口内的最后一个数据段即6号数据报文段发送出去，接收方收到后，发现这不是按序到达的报文段，因此给发送方发送针对2号报文段的重复确认，表明我现在希望收到的是3号报文段，但是我没有收到3号报文段，而收到了未按序到达的报文段，</p><p>此时，发送方收到了累计3个连续的针对2号报文段的重复确认，立即重传3号报文段，接收方收到后，给发送方发回针对6号报文的确认，表明，序号到6为至的报文都收到了，这样就不会造成发送方对3号报文的超时重传，而是提早收到了重传。 <img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627487242440-1cd218d1-f103-4460-8f82-c3f614e3e870.png#align=left&amp;display=inline&amp;height=483&amp;margin=[object Object]&amp;originHeight=483&amp;originWidth=892&amp;size=0&amp;status=done&amp;style=none&amp;width=892" alt=""><img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1627487249380-3f16e12d-ef0d-45c8-a921-8767a19938cb.png#align=left&amp;display=inline&amp;height=384&amp;margin=[object Object]&amp;originHeight=384&amp;originWidth=905&amp;size=0&amp;status=done&amp;style=none&amp;width=905" alt=""></p><h4 id="快恢复-与快重传配合使用" tabindex="-1"><a class="header-anchor" href="#快恢复-与快重传配合使用" aria-hidden="true">#</a> 快恢复（与快重传配合使用）</h4><ol><li>采用快恢复算法时，慢启动只在TCP连接建立时和网络出现超时时才使用。</li><li>当发送方连续收到三个重复确认时，就执行“乘法减小”算法，把ssthresh门限减半。但是接下去并不执行慢启动算法。</li><li>考虑到如果网络出现拥塞的话就不会收到好几个重复的确认，所以发送方现在认为网络可能没有出现拥塞。所以此时不执行慢启动算法，而是将cwnd设置为ssthresh的大小，然后执行拥塞避免算法。</li></ol>',32),r=(0,t.Uk)("参考： "),p={href:"https://blog.csdn.net/kzq_qmi/article/details/46940463",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("https://blog.csdn.net/kzq_qmi/article/details/46940463"),h={href:"https://www.bilibili.com/video/BV1c4411d7jb?p=60",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("https://www.bilibili.com/video/BV1c4411d7jb?p=60"),s={href:"https://blog.csdn.net/qq_41431406/article/details/97926927",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("https://blog.csdn.net/qq_41431406/article/details/97926927"),m={href:"https://i-want-offer.github.io/FE-Essay/%E5%89%8D%E5%90%8E%E7%AB%AF%E9%80%9A%E4%BF%A1/%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE.html",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("https://i-want-offer.github.io/FE-Essay/%E5%89%8D%E5%90%8E%E7%AB%AF%E9%80%9A%E4%BF%A1/%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE.html"),g={render:function(e,a){const i=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[n,(0,t._)("p",null,[r,(0,t._)("a",p,[d,(0,t.Wm)(i)]),(0,t._)("a",h,[l,(0,t.Wm)(i)]),(0,t._)("a",s,[c,(0,t.Wm)(i)]),(0,t._)("a",m,[o,(0,t.Wm)(i)])])],64)}}}}]);