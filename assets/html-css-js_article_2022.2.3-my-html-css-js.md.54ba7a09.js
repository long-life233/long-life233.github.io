import{_ as n,c as s,o as a,a as p}from"./app.efa20a37.js";const d='{"title":"\u6211\u7684html\uFF0Ccss\uFF0C\u548Cjs","description":"","frontmatter":{},"headers":[{"level":2,"title":"css","slug":"css"},{"level":3,"title":"pointer-events","slug":"pointer-events"},{"level":3,"title":"object-fit","slug":"object-fit"}],"relativePath":"html-css-js/article/2022.2.3-my-html-css-js.md","lastUpdated":1643902123145}',t={},e=p(`<h1 id="\u6211\u7684html\uFF0Ccss\uFF0C\u548Cjs" tabindex="-1">\u6211\u7684html\uFF0Ccss\uFF0C\u548Cjs <a class="header-anchor" href="#\u6211\u7684html\uFF0Ccss\uFF0C\u548Cjs" aria-hidden="true">#</a></h1><h2 id="css" tabindex="-1">css <a class="header-anchor" href="#css" aria-hidden="true">#</a></h2><h3 id="pointer-events" tabindex="-1">pointer-events <a class="header-anchor" href="#pointer-events" aria-hidden="true">#</a></h3><p>\u7ED3\u6784</p><div class="language-html line-numbers-mode"><pre><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>css\u6837\u5F0F(\u5E76\u9644\u5E26\u7ED3\u8BBA)</p><div class="language-css line-numbers-mode"><pre><code>    &lt;style&gt;
        <span class="token comment">/* pointer-events */</span>
        <span class="token comment">/* 
            none\uFF0C\u5F53\u8BBE\u7F6Enone\u5C5E\u6027\u65F6\uFF0C\u4E3Abox1\u6DFB\u52A0\u7684\u9F20\u6807\u4E8B\u4EF6\u4F1A\u5931\u6548\u3002
                    \u5E76\u4E14\u5176\u5B50\u5143\u7D20\u7684\u9F20\u6807\u4E8B\u4EF6\u4E5F\u4F1A\u5931\u6548\u3002
            auto\uFF0C\uFF08\u9ED8\u8BA4\u503C\uFF09
            inherit  \uFF08\u7EE7\u627F\u7236\u5143\u7D20\u7684\u5C5E\u6027\u503C\uFF09
        */</span>
        <span class="token selector">div</span><span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">/* \u6700\u5916\u9762\u7684\u76D2\u5B50 */</span>
        <span class="token selector">#box1</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
            <span class="token comment">/* 
            \u5F53\u8BBE\u7F6Enone\u5C5E\u6027\u65F6\uFF0C\u4E3Abox1\u6DFB\u52A0\u7684\u9F20\u6807\u4E8B\u4EF6\u4F1A\u5931\u6548\u3002
            \u5E76\u4E14\u5176\u5B50\u5143\u7D20\u7684\u9F20\u6807\u4E8B\u4EF6\u4E5F\u4F1A\u5931\u6548\u3002
            */</span>
            <span class="token comment">/* pointer-events: none; */</span>
        <span class="token punctuation">}</span>
        <span class="token selector">#box2</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">#box3</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
            <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    &lt;/style&gt;
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>js\u4E8B\u4EF6</p><div class="language-js line-numbers-mode"><pre><code>    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
        box1<span class="token punctuation">.</span><span class="token function-variable function">onclick</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;box1\u89E6\u53D1alert\u4E8B\u4EF6&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        box2<span class="token punctuation">.</span><span class="token function-variable function">onclick</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;box2\u89E6\u53D1alert\u4E8B\u4EF6&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        box3<span class="token punctuation">.</span><span class="token function-variable function">onclick</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;box3\u89E6\u53D1alert\u4E8B\u4EF6&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="object-fit" tabindex="-1">object-fit <a class="header-anchor" href="#object-fit" aria-hidden="true">#</a></h3><p>\u6837\u5F0F</p><div class="language-css line-numbers-mode"><pre><code>    <span class="token selector">&lt;style&gt;
        div</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">img</span><span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
            <span class="token comment">/* 
            object-fit\uFF0Cobject-position \u5C5E\u6027
                mdn\u89E3\u91CA\uFF1A
                    object-fit CSS \u5C5E\u6027\u6307\u5B9A\u53EF\u66FF\u6362\u5143\u7D20\uFF08img\uFF0Cvideo\u7B49\u5143\u7D20\uFF09\u7684\u5185\u5BB9\u5E94\u8BE5\u5982\u4F55\u9002\u5E94\u5230\u5176\u4F7F\u7528\u7684\u9AD8\u5EA6\u548C\u5BBD\u5EA6\u786E\u5B9A\u7684\u6846\u3002
                    \u60A8\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 object-position \u5C5E\u6027\u6765\u5207\u6362\u88AB\u66FF\u6362\u5143\u7D20\u7684\u5185\u5BB9\u5BF9\u8C61\u5728\u5143\u7D20\u6846\u5185\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002
                
                \u6309\u6211\u7684\u8BDD\u6765\u8BF4\uFF0C\u5C31\u662Fimg\uFF0Cvideo\u7B49\u8FD9\u7C7B\u5143\u7D20\uFF0C\u5176\u5B9E\u672C\u8EAB\u5C31\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u4E00\u90E8\u5206\u662F\u5916\u9762\u7684\u8FB9\u6846\uFF0C\u4E00\u90E8\u5206\u662F\u91CC\u9762\u7684\u5185\u5BB9\u3002
                
                    object-fit\u53EF\u4EE5\u8BBE\u7F6E\u91CC\u9762\u5185\u5BB9\u7684\u957F\u5BBD\u662Fcontain\uFF0Ccover\uFF0Cfill\uFF0Cnone\uFF0C\u8FD8\u662Fscale-down\u3002
                    object-position\u53EF\u4EE5\u8BBE\u7F6E\u91CC\u9762\u5185\u5BB9\u7684\u76F8\u5BF9\u5916\u9762\u8FB9\u6846\u7684\u4F4D\u7F6E\u3002
            */</span>
            <span class="token property">object-fit</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>
            <span class="token property">object-position</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    &lt;/style&gt;
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>html</p><div class="language-html line-numbers-mode"><pre><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,14),c=[e];function o(l,u,r,i,b,k){return a(),s("div",null,c)}var g=n(t,[["render",o]]);export{d as __pageData,g as default};
