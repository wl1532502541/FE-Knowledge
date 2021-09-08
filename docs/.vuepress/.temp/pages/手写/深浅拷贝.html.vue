<template><h1 id="深浅拷贝" tabindex="-1"><a class="header-anchor" href="#深浅拷贝" aria-hidden="true">#</a> 深浅拷贝</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//浅拷贝</span>
<span class="token keyword">function</span> <span class="token function">shallowCopy</span><span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>source<span class="token operator">==</span><span class="token keyword">null</span><span class="token operator">||</span><span class="token keyword">typeof</span> source <span class="token operator">!=</span><span class="token string">'object'</span><span class="token punctuation">)</span><span class="token keyword">return</span> source
    <span class="token keyword">if</span><span class="token punctuation">(</span>source <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//第二种写法 Array.isArray(obj)</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>source<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>source<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//深拷贝</span>
<span class="token comment">//1.简洁版</span>
<span class="token comment">// 缺点     他无法实现对函数 、RegExp等特殊对象的克隆</span>
<span class="token comment">//          会抛弃对象的constructor,所有的构造函数会指向Object</span>
<span class="token comment">//          对象有循环引用,会报错</span>
<span class="token keyword">function</span> <span class="token function">deepCopy0</span><span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">//2.正式版</span>
<span class="token keyword">function</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>source<span class="token operator">==</span><span class="token keyword">null</span><span class="token operator">||</span><span class="token keyword">typeof</span> source <span class="token operator">!=</span><span class="token string">'object'</span><span class="token punctuation">)</span><span class="token keyword">return</span> source
    <span class="token keyword">let</span> target<span class="token operator">=</span>source<span class="token punctuation">.</span>constructor<span class="token operator">==</span>Array<span class="token operator">?</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> source<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>source<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">deepCopy</span><span class="token punctuation">(</span>source<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> target
<span class="token punctuation">}</span>

<span class="token comment">//test</span>

<span class="token comment">// 1.obj</span>
<span class="token comment">// let source={</span>
<span class="token comment">//     a:1,</span>
<span class="token comment">//     b:[2,[3]],</span>
<span class="token comment">//     c:{d:4,e:[5,6]}</span>
<span class="token comment">// }</span>

<span class="token comment">// 2.array</span>
<span class="token keyword">let</span> source<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token punctuation">{</span>c<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token keyword">let</span> target<span class="token operator">=</span><span class="token function">deepCopy</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'target:'</span><span class="token operator">+</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'source:'</span><span class="token operator">+</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'alert target start'</span><span class="token punctuation">)</span>

<span class="token comment">// 1.obj</span>
<span class="token comment">// target.a=2</span>
<span class="token comment">// target.b[1]={f:1}</span>
<span class="token comment">// target.c.d=5</span>

<span class="token comment">// 2.array</span>
target<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">2</span>
target<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">5</span>
target<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span>a<span class="token operator">=</span><span class="token number">2</span>
target<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span>b<span class="token punctuation">.</span>c<span class="token operator">=</span><span class="token number">3</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'alert target end'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'target:'</span><span class="token operator">+</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'source:'</span><span class="token operator">+</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><p>结果：
1.
target:{&quot;a&quot;:1,&quot;b&quot;:[2,[3]],&quot;c&quot;:{&quot;d&quot;:4,&quot;e&quot;:[5,6]}}
source:{&quot;a&quot;:1,&quot;b&quot;:[2,[3]],&quot;c&quot;:{&quot;d&quot;:4,&quot;e&quot;:[5,6]}}
alert target start
alert target end
target:{&quot;a&quot;:2,&quot;b&quot;:[2,{&quot;f&quot;:1}],&quot;c&quot;:{&quot;d&quot;:5,&quot;e&quot;:[5,6]}}
source:{&quot;a&quot;:1,&quot;b&quot;:[2,[3]],&quot;c&quot;:{&quot;d&quot;:4,&quot;e&quot;:[5,6]}}
2.
target:[1,2,[3,[4]],{&quot;a&quot;:1,&quot;b&quot;:{&quot;c&quot;:2}}]
source:[1,2,[3,[4]],{&quot;a&quot;:1,&quot;b&quot;:{&quot;c&quot;:2}}]
alert target start
alert target end
target:[2,2,[3,5],{&quot;a&quot;:2,&quot;b&quot;:{&quot;c&quot;:3}}]
source:[1,2,[3,[4]],{&quot;a&quot;:1,&quot;b&quot;:{&quot;c&quot;:2}}]</p>
</template>
