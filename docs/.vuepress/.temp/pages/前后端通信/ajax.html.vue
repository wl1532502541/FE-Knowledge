<template><h1 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> ajax</h1>
<h2 id="什么是ajax" tabindex="-1"><a class="header-anchor" href="#什么是ajax" aria-hidden="true">#</a> 什么是ajax？</h2>
<p>Asynchronous JavaScript + XML <strong>ajax 是一种用于创建快速动态网页的技术</strong>。 通过在后台与服务器进行少量数据交换,AJAX 可以使网页实现异步更新.
优势：</p>
<ol>
<li>通过异步模式，提升了用户体验</li>
<li>优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用</li>
<li>Ajax引擎在客户端运行，承担了一部分本来由服务器承担的工作，从而减少了大用户量下的服务器负载。
4.AJAX最大的特点是什么。
Ajax可以实现动态不刷新（局部刷新）
就是能在不更新整个页面的前提下维护数据。这使得Web应用程序更为迅捷地回应用户动作，并避免了在网络上发送那些没有改变过的信息。</li>
</ol>
<h2 id="技术组成部分" tabindex="-1"><a class="header-anchor" href="#技术组成部分" aria-hidden="true">#</a> 技术组成部分</h2>
<p>HTML，css，dom，xml，xmlHttpRequest，javascript</p>
<h3 id="xmlhttprequest对象" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest对象" aria-hidden="true">#</a> XmlHttpRequest对象</h3>
<p>Ajax的核心是JavaScript对象XmlHttpRequest。该对象在Internet Explorer 5中首次引入，它是一种支持异步请求的技术。简而言之，XmlHttpRequest使您可以使用JavaScript向服务器提出请求并处理响应，而不阻塞用户。通过XMLHttpRequest对象，Web开发人员可以在页面加载以后进行页面的局部更新。</p>
<h4 id="常用方法和属性" tabindex="-1"><a class="header-anchor" href="#常用方法和属性" aria-hidden="true">#</a> 常用方法和属性</h4>
<p>open(“method”,”URL”) 建立对服务器的调用，第一个参数是HTTP请求 方式可以为GET，POST或任何服务器所支持的您想调用的方式。第二个参数是请求页面的URL。
send()方法，发送具体请求
abort()方法，停止当前请求
readyState属性 请求的状态 有5个可取值0=未初始化 ，1=正在加载2=以加载，3=交互中，4=完成
<img src="https://cdn.nlark.com/yuque/0/2021/png/12821255/1628864457176-6bb4b709-73cd-46aa-bd35-24e6271baa61.png#align=left&amp;display=inline&amp;height=320&amp;margin=[object Object]&amp;name=image.png&amp;originHeight=320&amp;originWidth=1002&amp;size=26151&amp;status=done&amp;style=none&amp;width=1002" alt="image.png">
responseText 属性 服务器的响应，表示为一个串
reponseXML 属性 服务器的响应，表示为XML
status 服务器的HTTP状态码，200对应ok 400对应not found</p>
<h2 id="手写axios" tabindex="-1"><a class="header-anchor" href="#手写axios" aria-hidden="true">#</a> 手写axios</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 发送任意类型请求的函数 */</span>
<span class="token keyword">function</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token punctuation">,</span>
  method<span class="token operator">=</span><span class="token string">'GET'</span><span class="token punctuation">,</span>
  params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  data<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 返回一个promise对象</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理method(转大写)</span>
    method <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 处理query参数(拼接到url上)   id=1&amp;xxx=abc</span>
    <span class="token comment">/* { id: 1, xxx: 'abc'} */</span>
    <span class="token keyword">let</span> queryString <span class="token operator">=</span> <span class="token string">''</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      queryString <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>queryString<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// id=1&amp;xxx=abc&amp;</span>
      <span class="token comment">// 去除最后的&amp;</span>
      queryString <span class="token operator">=</span> queryString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> queryString<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token comment">// 接到url</span>
      url <span class="token operator">+=</span> <span class="token string">'?'</span> <span class="token operator">+</span> queryString
    <span class="token punctuation">}</span>
    <span class="token comment">// 1. 执行异步ajax请求</span>
    <span class="token comment">// 创建xhr对象</span>
    <span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 打开连接(初始化请求, 没有请求)</span>
    request<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 发送请求</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>method<span class="token operator">===</span><span class="token string">'GET'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>method<span class="token operator">===</span><span class="token string">'POST'</span> <span class="token operator">||</span> method<span class="token operator">===</span><span class="token string">'PUT'</span> <span class="token operator">||</span> method<span class="token operator">===</span><span class="token string">'DELETE'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 告诉服务器请求体的格式是json</span>
      request<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/json;charset=utf-8'</span><span class="token punctuation">)</span> 
       <span class="token comment">// 发送json格式请求体参数</span>
      request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 绑定状态改变的监听</span>
    request<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果请求没有完成, 直接结束</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>readyState<span class="token operator">!==</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 如果响应状态码在[200, 300)之间代表成功, 否则失败</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>status<span class="token punctuation">,</span> statusText<span class="token punctuation">}</span> <span class="token operator">=</span> request
      <span class="token comment">// 2.1. 如果请求成功了, 调用resolve()</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>status<span class="token operator">>=</span><span class="token number">200</span> <span class="token operator">&amp;&amp;</span> status<span class="token operator">&lt;=</span><span class="token number">299</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 准备结果数据对象response</span>
        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token punctuation">{</span>
          data<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">,</span>
          status<span class="token punctuation">,</span>
          statusText
        <span class="token punctuation">}</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 2.2. 如果请求失败了, 调用reject()</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'request error status is '</span> <span class="token operator">+</span> status<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 发送特定请求的静态方法 */</span>
axios<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token punctuation">{</span>url<span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
axios<span class="token punctuation">.</span><span class="token function-variable function">delete</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token punctuation">{</span>url<span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token string">'DELETE'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
axios<span class="token punctuation">.</span><span class="token function-variable function">post</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token punctuation">{</span>url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
axios<span class="token punctuation">.</span><span class="token function-variable function">put</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token punctuation">{</span>url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token string">'PUT'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> axios
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div></template>
