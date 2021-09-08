"use strict";(self.webpackChunkFE_Knowledge=self.webpackChunkFE_Knowledge||[]).push([[120],{540:(e,a,t)=>{t.r(a),t.d(a,{data:()=>i});const i={key:"v-defdb5b8",path:"/TCP/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.html",title:"TCP三次握手四次挥手",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"TCP的三次握手（Three-Way Handshake）",slug:"tcp的三次握手-three-way-handshake",children:[{level:3,title:"1.”三次握手”的详解",slug:"_1-三次握手-的详解",children:[]},{level:3,title:"2.“三次握手”的动态过程",slug:"_2-三次握手-的动态过程",children:[]},{level:3,title:"3.“三次握手”的通俗理解",slug:"_3-三次握手-的通俗理解",children:[]},{level:3,title:"4.为什么要进行第三次握手？",slug:"_4-为什么要进行第三次握手",children:[]},{level:3,title:"5.抓包验证",slug:"_5-抓包验证",children:[]}]},{level:2,title:"TCP的四次挥手（Four-Way Wavehand）",slug:"tcp的四次挥手-four-way-wavehand",children:[{level:3,title:"1、前言",slug:"_1、前言",children:[]},{level:3,title:"2、“四次挥手”的详解",slug:"_2、-四次挥手-的详解",children:[]},{level:3,title:"3、“四次挥手”的通俗理解",slug:"_3、-四次挥手-的通俗理解",children:[]},{level:3,title:"4.为什么“握手”是三次，“挥手”却要四次？",slug:"_4-为什么-握手-是三次-挥手-却要四次",children:[]},{level:3,title:"5.为什么客户端在TIME-WAIT阶段要等2MSL?",slug:"_5-为什么客户端在time-wait阶段要等2msl",children:[]},{level:3,title:"6.抓包验证",slug:"_6-抓包验证",children:[]}]}],filePathRelative:"TCP/TCP三次握手四次挥手.md",git:{updatedTime:162740698e4,contributors:[{name:"wl1532502541",email:"1532502541@qq.com",commits:2}]}}},5284:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var i=t(6252);const n=(0,i.uE)('<h1 id="tcp三次握手四次挥手" tabindex="-1"><a class="header-anchor" href="#tcp三次握手四次挥手" aria-hidden="true">#</a> TCP三次握手四次挥手</h1><h2 id="tcp的三次握手-three-way-handshake" tabindex="-1"><a class="header-anchor" href="#tcp的三次握手-three-way-handshake" aria-hidden="true">#</a> TCP的三次握手（Three-Way Handshake）</h2><h3 id="_1-三次握手-的详解" tabindex="-1"><a class="header-anchor" href="#_1-三次握手-的详解" aria-hidden="true">#</a> 1.”三次握手”的详解</h3><p>所谓的三次握手即TCP连接的建立。这个连接必须是一方主动打开，另一方被动打开的。以下为客户端主动发起连接的图解： <img src="https://cdn.nlark.com/yuque/0/2021/jpeg/12821255/1617083212327-6b20bc37-9b62-42c4-af2b-13d45633ab58.jpeg#align=left&amp;display=inline&amp;height=337&amp;id=JzGrb&amp;margin=[object Object]&amp;originHeight=337&amp;originWidth=522&amp;size=0&amp;status=done&amp;style=none&amp;width=522" alt=""> 握手之前主动打开连接的客户端结束CLOSED阶段，被动打开的服务器端也结束CLOSED阶段，并进入LISTEN阶段。随后开始“三次握手”： （1）首先客户端向服务器端发送一段TCP报文，其中： 标记位为SYN，表示“请求建立新连接”;序号为Seq=X（X一般为1）；随后客户端进入SYN-SENT阶段。（2）服务器端接收到来自客户端的TCP报文之后，结束LISTEN阶段。并返回一段TCP报文，其中： 标志位为SYN和ACK，表示“确认客户端的报文Seq序号有效，服务器能正常接收客户端发送的数据，并同意创建新连接”（即告诉客户端，服务器收到了你的数据）；序号为Seq=y；确认号为Ack=x+1，表示收到客户端的序号Seq并将其值加1作为自己确认号Ack的值；随后服务器端进入SYN-RCVD阶段。（3）客户端接收到来自服务器端的确认收到数据的TCP报文之后，明确了从客户端到服务器的数据传输是正常的，结束SYN-SENT阶段。并返回最后一段TCP报文。其中： 标志位为ACK，表示“确认收到服务器端同意连接的信号”（即告诉服务器，我知道你收到我发的数据了）；序号为Seq=x+1，表示收到服务器端的确认号Ack，并将其值作为自己的序号值；确认号为Ack=y+1，表示收到服务器端序号Seq，并将其值加1作为自己的确认号Ack的值；随后客户端进入ESTABLISHED阶段。服务器收到来自客户端的“确认收到服务器数据”的TCP报文之后，明确了从服务器到客户端的数据传输是正常的。结束SYN-SENT阶段，进入ESTABLISHED阶段。 在客户端与服务器端传输的TCP报文中，双方的确认号Ack和序号Seq的值，都是在彼此Ack和Seq值的基础上进行计算的，这样做保证了TCP报文传输的连贯性。一旦出现某一方发出的TCP报文丢失，便无法继续&quot;握手&quot;，以此确保了&quot;三次握手&quot;的顺利完成。 此后客户端和服务器端进行正常的数据传输。这就是“三次握手”的过程。</p><h3 id="_2-三次握手-的动态过程" tabindex="-1"><a class="header-anchor" href="#_2-三次握手-的动态过程" aria-hidden="true">#</a> 2.“三次握手”的动态过程</h3><p><img src="https://cdn.nlark.com/yuque/0/2021/gif/12821255/1617083212271-f01a7510-b0c5-4545-a588-fa0ed02f7afb.gif#align=left&amp;display=inline&amp;height=354&amp;id=X58Mx&amp;margin=[object Object]&amp;originHeight=378&amp;originWidth=639&amp;size=0&amp;status=done&amp;style=none&amp;width=599" alt=""></p><h3 id="_3-三次握手-的通俗理解" tabindex="-1"><a class="header-anchor" href="#_3-三次握手-的通俗理解" aria-hidden="true">#</a> 3.“三次握手”的通俗理解</h3><p><img src="https://cdn.nlark.com/yuque/0/2021/jpeg/12821255/1617083212261-e8f31b28-be51-464d-8a87-cb8faeede481.jpeg#align=left&amp;display=inline&amp;height=378&amp;id=DEG0l&amp;margin=[object Object]&amp;originHeight=378&amp;originWidth=460&amp;size=0&amp;status=done&amp;style=none&amp;width=460" alt=""> 举个栗子：把客户端比作男孩，服务器比作女孩。用他们的交往来说明“三次握手”过程： （1）男孩喜欢女孩，于是写了一封信告诉女孩：我爱你，请和我交往吧！;写完信之后，男孩焦急地等待，因为不知道信能否顺利传达给女孩。 （2）女孩收到男孩的情书后，心花怒放，原来我们是两情相悦呀！于是给男孩写了一封回信：我收到你的情书了，也明白了你的心意，其实，我也喜欢你！我愿意和你交往！; 写完信之后，女孩也焦急地等待，因为不知道回信能否能顺利传达给男孩。 （3）男孩收到回信之后很开心，因为发出的情书女孩收到了，并且从回信中知道了女孩喜欢自己，并且愿意和自己交往。然后男孩又写了一封信告诉女孩：你的心意和信我都收到了，谢谢你，还有我爱你！ 女孩收到男孩的回信之后，也很开心，因为发出的情书男孩收到了。由此男孩女孩双方都知道了彼此的心意，之后就快乐地交流起来了~~ 这就是通俗版的“三次握手”，期间一共往来了三封信也就是“三次握手”，以此确认两个方向上的数据传输通道是否正常。</p><h3 id="_4-为什么要进行第三次握手" tabindex="-1"><a class="header-anchor" href="#_4-为什么要进行第三次握手" aria-hidden="true">#</a> 4.为什么要进行第三次握手？</h3><p>为了防止服务器端开启一些无用的连接增加服务器开销以及防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误。 由于网络传输是有延时的(要通过网络光纤和各种中间代理服务器)，在传输的过程中，比如客户端发起了SYN=1创建连接的请求(第一次握手)。 如果服务器端就直接创建了这个连接并返回包含SYN、ACK和Seq等内容的数据包给客户端，这个数据包因为网络传输的原因丢失了，丢失之后客户端就一直没有接收到服务器返回的数据包。 客户端可能设置了一个超时时间，时间到了就关闭了连接创建的请求。再重新发出创建连接的请求，而服务器端是不知道的，如果没有第三次握手告诉服务器端客户端收的到服务器端传输的数据的话， 服务器端是不知道客户端有没有接收到服务器端返回的信息的。 这个过程可理解为： <img src="https://cdn.nlark.com/yuque/0/2021/jpeg/12821255/1617083212262-14a3389a-c431-4c51-ba31-7efb2f22bf91.jpeg#align=left&amp;display=inline&amp;height=338&amp;id=LTNUm&amp;margin=[object Object]&amp;originHeight=313&amp;originWidth=554&amp;size=0&amp;status=done&amp;style=none&amp;width=599" alt=""> 这样没有给服务器端一个创建还是关闭连接端口的请求，服务器端的端口就一直开着，等到客户端因超时重新发出请求时，服务器就会重新开启一个端口连接。那么服务器端上没有接收到请求数据的上一个端口就一直开着，长此以往，这样的端口多了，就会造成服务器端开销的严重浪费。 还有一种情况是已经失效的客户端发出的请求信息，由于某种原因传输到了服务器端，服务器端以为是客户端发出的有效请求，接收后产生错误。 所以我们需要“第三次握手”来确认这个过程，让客户端和服务器端能够及时地察觉到因为网络等一些问题导致的连接创建失败，这样服务器端的端口就可以关闭了不用一直等待。 也可以这样理解：“第三次握手”是客户端向服务器端发送数据，这个数据就是要告诉服务器，客户端有没有收到服务器“第二次握手”时传过去的数据。若发送的这个数据是“收到了”的信息，接收后服务器就正常建立TCP连接，否则建立TCP连接失败，服务器关闭连接端口。由此减少服务器开销和接收到失效请求发生的错误。</p><h3 id="_5-抓包验证" tabindex="-1"><a class="header-anchor" href="#_5-抓包验证" aria-hidden="true">#</a> 5.抓包验证</h3><p>下面是用抓包工具抓到的一些数据包，可用来分析TCP的三次握手： <img src="https://cdn.nlark.com/yuque/0/2021/jpeg/12821255/1617083212270-2c351e37-b02b-4ea7-a569-9eb2a1265bae.jpeg#align=left&amp;display=inline&amp;height=88&amp;id=HfvZH&amp;margin=[object Object]&amp;originHeight=86&amp;originWidth=588&amp;size=0&amp;status=done&amp;style=none&amp;width=599" alt=""> 图中显示的就是完整的TCP连接的”三次握手”过程。在52528 -&gt; 80中，52528是本地(客户端)端口，80是服务器的端口。80端口和52528端口之间的三次来回就是&quot;三次握手&quot;过程。 注意到”第一次握手”客户端发送的TCP报文中以[SYN]作为标志位，并且客户端序号Seq=0； 接下来”第二次握手”服务器返回的TCP报文中以[SYN，ACK]作为标志位；并且服务器端序号Seq=0；确认号Ack=1(“第一次握手”中客户端序号Seq的值+1); 最后”第三次握手”客户端再向服务器端发送的TCP报文中以[ACK]作为标志位； 其中客户端序号Seq=1（“第二次握手”中服务器端确认号Ack的值）；确认号Ack=1(“第二次握手”中服务器端序号Seq的值+1)。 这就完成了”三次握手”的过程，符合前面分析的结果。</p><h2 id="tcp的四次挥手-four-way-wavehand" tabindex="-1"><a class="header-anchor" href="#tcp的四次挥手-four-way-wavehand" aria-hidden="true">#</a> TCP的四次挥手（Four-Way Wavehand）</h2><h3 id="_1、前言" tabindex="-1"><a class="header-anchor" href="#_1、前言" aria-hidden="true">#</a> 1、前言</h3><p>对于&quot;三次握手&quot;我们耳熟能详，因为其相对的简单。但是，我们却不常听见“四次挥手”，就算听过也未必能详细地说明白它的具体过程。下面就为大家详尽，直观，完整地介绍“四次挥手”的过程。</p><h3 id="_2、-四次挥手-的详解" tabindex="-1"><a class="header-anchor" href="#_2、-四次挥手-的详解" aria-hidden="true">#</a> 2、“四次挥手”的详解</h3><p>所谓的四次挥手即TCP连接的释放(解除)。连接的释放必须是一方主动释放，另一方被动释放。以下为客户端主动发起释放连接的图解： <img src="https://cdn.nlark.com/yuque/0/2021/jpeg/12821255/1617083212294-41790c7c-5fb1-4414-8e81-5a083a541d3d.jpeg#align=left&amp;display=inline&amp;height=492&amp;id=vIb0z&amp;margin=[object Object]&amp;originHeight=454&amp;originWidth=553&amp;size=0&amp;status=done&amp;style=none&amp;width=599" alt=""> 挥手之前主动释放连接的客户端结束ESTABLISHED阶段。随后开始“四次挥手”： （1）首先客户端想要释放连接，向服务器端发送一段TCP报文，其中： 标记位为FIN，表示“请求释放连接“；序号为Seq=U；随后客户端进入FIN-WAIT-1阶段，即半关闭阶段。并且停止在客户端到服务器端方向上发送数据，但是客户端仍然能接收从服务器端传输过来的数据。注意：这里不发送的是正常连接时传输的数据(非确认报文)，而不是一切数据，所以客户端仍然能发送ACK确认报文。 （2）服务器端接收到从客户端发出的TCP报文之后，确认了客户端想要释放连接，随后服务器端结束ESTABLISHED阶段，进入CLOSE-WAIT阶段（半关闭状态）并返回一段TCP报文，其中： 标记位为ACK，表示“接收到客户端发送的释放连接的请求”；序号为Seq=V；确认号为Ack=U+1，表示是在收到客户端报文的基础上，将其序号Seq值加1作为本段报文确认号Ack的值；随后服务器端开始准备释放服务器端到客户端方向上的连接。客户端收到从服务器端发出的TCP报文之后，确认了服务器收到了客户端发出的释放连接请求，随后客户端结束FIN-WAIT-1阶段，进入FIN-WAIT-2阶段 前&quot;两次挥手&quot;既让服务器端知道了客户端想要释放连接，也让客户端知道了服务器端了解了自己想要释放连接的请求。于是，可以确认关闭客户端到服务器端方向上的连接了 （3）服务器端自从发出ACK确认报文之后，经过CLOSED-WAIT阶段，做好了释放服务器端到客户端方向上的连接准备，再次向客户端发出一段TCP报文，其中： 标记位为FIN，ACK，表示“已经准备好释放连接了”。注意：这里的ACK并不是确认收到服务器端报文的确认报文。序号为Seq=W；确认号为Ack=U+1；表示是在收到客户端报文的基础上，将其序号Seq值加1作为本段报文确认号Ack的值。随后服务器端结束CLOSE-WAIT阶段，进入LAST-ACK阶段。并且停止在服务器端到客户端的方向上发送数据，但是服务器端仍然能够接收从客户端传输过来的数据。 （4）客户端收到从服务器端发出的TCP报文，确认了服务器端已做好释放连接的准备，结束FIN-WAIT-2阶段，进入TIME-WAIT阶段，并向服务器端发送一段报文，其中： 标记位为ACK，表示“接收到服务器准备好释放连接的信号”。序号为Seq=U+1；表示是在收到了服务器端报文的基础上，将其确认号Ack值作为本段报文序号的值。确认号为Ack=W+1；表示是在收到了服务器端报文的基础上，将其序号Seq值作为本段报文确认号的值。随后客户端开始在TIME-WAIT阶段等待2MSL 为什么要客户端要等待2MSL呢？见后文。 服务器端收到从客户端发出的TCP报文之后结束LAST-ACK阶段，进入CLOSED阶段。由此正式确认关闭服务器端到客户端方向上的连接。 客户端等待完2MSL之后，结束TIME-WAIT阶段，进入CLOSED阶段，由此完成“四次挥手”。 后“两次挥手”既让客户端知道了服务器端准备好释放连接了，也让服务器端知道了客户端了解了自己准备好释放连接了。于是，可以确认关闭服务器端到客户端方向上的连接了，由此完成“四次挥手”。 与“三次挥手”一样，在客户端与服务器端传输的TCP报文中，双方的确认号Ack和序号Seq的值，都是在彼此Ack和Seq值的基础上进行计算的，这样做保证了TCP报文传输的连贯性，一旦出现某一方发出的TCP报文丢失，便无法继续&quot;挥手&quot;，以此确保了&quot;四次挥手&quot;的顺利完成。</p><h3 id="_3、-四次挥手-的通俗理解" tabindex="-1"><a class="header-anchor" href="#_3、-四次挥手-的通俗理解" aria-hidden="true">#</a> 3、“四次挥手”的通俗理解</h3><p><img src="https://cdn.nlark.com/yuque/0/2021/jpeg/12821255/1617083212257-69ea529f-ce85-48f5-a17b-8b0b275dfe68.jpeg#align=left&amp;display=inline&amp;height=513&amp;id=KlVjk&amp;margin=[object Object]&amp;originHeight=474&amp;originWidth=554&amp;size=0&amp;status=done&amp;style=none&amp;width=599" alt=""> 举个栗子：把客户端比作男孩，服务器比作女孩。通过他们的分手来说明“四次挥手”过程。 &quot;第一次挥手&quot;：日久见人心，男孩发现女孩变成了自己讨厌的样子，忍无可忍，于是决定分手，随即写了一封信告诉女孩。“第二次挥手”：女孩收到信之后，知道了男孩要和自己分手，怒火中烧，心中暗骂：你算什么东西，当初你可不是这个样子的！于是立马给男孩写了一封回信：分手就分手，给我点时间，我要把你的东西整理好，全部还给你！男孩收到女孩的第一封信之后，明白了女孩知道自己要和她分手。随后等待女孩把自己的东西收拾好。“第三次挥手”：过了几天，女孩把男孩送的东西都整理好了，于是再次写信给男孩：你的东西我整理好了，快把它们拿走，从此你我恩断义绝！“第四次挥手”：男孩收到女孩第二封信之后，知道了女孩收拾好东西了，可以正式分手了，于是再次写信告诉女孩：我知道了，这就去拿回来！这里双方都有各自的坚持。女孩自发出第二封信开始，限定一天内收不到男孩回信，就会再发一封信催促男孩来取东西！男孩自发出第二封信开始，限定两天内没有再次收到女孩的信就认为，女孩收到了自己的第二封信；若两天内再次收到女孩的来信，就认为自己的第二封信女孩没收到，需要再写一封信，再等两天….. 倘若双方信都能正常收到，最少只用四封信就能彻底分手！这就是“四次挥手”。</p><h3 id="_4-为什么-握手-是三次-挥手-却要四次" tabindex="-1"><a class="header-anchor" href="#_4-为什么-握手-是三次-挥手-却要四次" aria-hidden="true">#</a> 4.为什么“握手”是三次，“挥手”却要四次？</h3><p>TCP建立连接时之所以只需要&quot;三次握手&quot;，是因为在第二次&quot;握手&quot;过程中，服务器端发送给客户端的TCP报文是以SYN与ACK作为标志位的。SYN是请求连接标志，表示服务器端同意建立连接；ACK是确认报文，表示告诉客户端，服务器端收到了它的请求报文。 即SYN建立连接报文与ACK确认接收报文是在同一次&quot;握手&quot;当中传输的，所以&quot;三次握手&quot;不多也不少，正好让双方明确彼此信息互通。 TCP释放连接时之所以需要“四次挥手”,是因为FIN释放连接报文与ACK确认接收报文是分别由第二次和第三次&quot;握手&quot;传输的。为何建立连接时一起传输，释放连接时却要分开传输？ 建立连接时，被动方服务器端结束CLOSED阶段进入“握手”阶段并不需要任何准备，可以直接返回SYN和ACK报文，开始建立连接。释放连接时，被动方服务器，突然收到主动方客户端释放连接的请求时并不能立即释放连接，因为还有必要的数据需要处理，所以服务器先返回ACK确认收到报文，经过CLOSE-WAIT阶段准备好释放连接之后，才能返回FIN释放连接报文。 所以是“三次握手”，“四次挥手”。</p><h3 id="_5-为什么客户端在time-wait阶段要等2msl" tabindex="-1"><a class="header-anchor" href="#_5-为什么客户端在time-wait阶段要等2msl" aria-hidden="true">#</a> 5.为什么客户端在TIME-WAIT阶段要等2MSL?</h3><p>为的是确认服务器端是否收到客户端发出的ACK确认报文 当客户端发出最后的ACK确认报文时，并不能确定服务器端能够收到该段报文。所以客户端在发送完ACK确认报文之后，会设置一个时长为2MSL的计时器。MSL指的是Maximum Segment Lifetime：一段TCP报文在传输过程中的最大生命周期。2MSL即是服务器端发出为FIN报文和客户端发出的ACK确认报文所能保持有效的最大时长。 服务器端在1MSL内没有收到客户端发出的ACK确认报文，就会再次向客户端发出FIN报文； 如果客户端在2MSL内，再次收到了来自服务器端的FIN报文，说明服务器端由于各种原因没有接收到客户端发出的ACK确认报文。客户端再次向服务器端发出ACK确认报文，计时器重置，重新开始2MSL的计时；否则客户端在2MSL内没有再次收到来自服务器端的FIN报文，说明服务器端正常接收了ACK确认报文，客户端可以进入CLOSED阶段，完成“四次挥手”。 所以，客户端要经历时长为2SML的TIME-WAIT阶段；这也是为什么客户端比服务器端晚进入CLOSED阶段的原因</p><h3 id="_6-抓包验证" tabindex="-1"><a class="header-anchor" href="#_6-抓包验证" aria-hidden="true">#</a> 6.抓包验证</h3>',24),h=(0,i.Uk)('图中显示的就是完整的TCP连接释放的”四次挥手”过程。在 80 -> 55389 中，假设80是本地(客户端)端口，55389是服务器端口。80端口与55389之间的四次来回就是"四次挥手"过程。 ”第一次挥手”客户端发送的FIN请求释放连接报文以[FIN，ACK]作为标志位，其中报文序号Seq=2445；确认号Ack=558；注意：这里与“第三次握手”的ACK并不是表示确认的ACK报文。”第二次挥手”服务器端返回的ACK确认报文以[ACK]作为标志位；其中报文序号Seq=558；确认号Ack=2246；”第三次挥手”服务器端继续返回的FIN同意释放连接报文以[FIN，ACK]作为标志位；其中报文序号Seq=558；确认号Ack=2246；”第四次挥手”客户端发出的ACK确认接收报文以[ACK]作为标志位；其中报文序号Seq=2446；确认号Ack=559。后一次“挥手”传输报文中的序号Seq值等于前一次"握手"传输报文中的确认号Ack值；后一次“挥手”传输报文中的确认号Ack值等于前一次"握手"传输报文中的序号Seq值； 故这是连续的“四次挥手”过程，与前面的分析相符。 原文：'),l={href:"https://www.cnblogs.com/AhuntSun-blog/p/12028636.html",target:"_blank",rel:"noopener noreferrer"},d=(0,i.Uk)("https://www.cnblogs.com/AhuntSun-blog/p/12028636.html"),r=(0,i.Uk)(" 声明：本文为作者投稿，版权归作者个人所有。"),p={render:function(e,a){const t=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i._)("p",null,[h,(0,i._)("a",l,[d,(0,i.Wm)(t)]),r])],64)}}}}]);