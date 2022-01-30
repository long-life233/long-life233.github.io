import{_ as n,c as s,o as a,a as p}from"./app.152e7dbc.js";const d='{"title":"uniapp\u4EFF\u7CD7\u4E8B\u767E\u79D1\u9879\u76EE\u603B\u7ED3","description":"","frontmatter":{},"headers":[],"relativePath":"uniapp/article/2022.1.11-community-project-summary.md","lastUpdated":1643360186591}',t={},e=p(`<h1 id="uniapp\u4EFF\u7CD7\u4E8B\u767E\u79D1\u9879\u76EE\u603B\u7ED3" tabindex="-1">uniapp\u4EFF\u7CD7\u4E8B\u767E\u79D1\u9879\u76EE\u603B\u7ED3 <a class="header-anchor" href="#uniapp\u4EFF\u7CD7\u4E8B\u767E\u79D1\u9879\u76EE\u603B\u7ED3" aria-hidden="true">#</a></h1><ul><li><p>\u4F7F\u7528flex\u5E03\u5C40\u5F00\u53D1</p></li><li><p>static\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u4F1A\u88AB\u5B8C\u6574\u6253\u5305\uFF0C\u4E0D\u4F1A\u88AB\u7F16\u8BD1\u3002\u975Estatic\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u53EA\u6709\u88AB\u5F15\u7528\u5230\u624D\u4F1A\u88AB\u6253\u5305\u7F16\u8BD1\u8FDB\u53BB\u3002\u6240\u4EE5\u8BF4\u5982\u679Cstatic\u4E0B\u6709js\u6587\u4EF6\uFF0C\u91CC\u9762\u5199\u4E86es6\u7684\u4EE3\u7801\uFF0C\u662F\u4E0D\u4F1A\u8FDB\u884C\u8F6C\u6362\u7684\uFF0C\u5728\u624B\u673A\u8BBE\u5907\u4E0A\u4F1A\u62A5\u9519\u3002</p></li><li><p><code>css</code>\u3001<code>less/scss</code> \u7B49\u8D44\u6E90\u4E0D\u8981\u653E\u5728 <code>static</code> \u76EE\u5F55\u4E0B\uFF0C\u5EFA\u8BAE\u8FD9\u4E9B\u516C\u7528\u7684\u8D44\u6E90\u653E\u5728\u81EA\u5EFA\u7684 <code>common</code> \u76EE\u5F55\u4E0B\u3002</p></li><li><p>\u5E94\u7528\u751F\u547D\u5468\u671F</p></li><li><p>\u9875\u9762\u751F\u547D\u5468\u671F</p></li><li><p>\u8DEF\u7531</p></li><li><p>\u8DEF\u7531\u8DF3\u8F6C</p></li><li><p>\u9875\u9762\u6808</p></li><li><p>\u9875\u9762\u6837\u5F0F\u4E0E\u5E03\u5C40</p><p>vue\u9875\u9762\u65F6webview\u6E32\u67D3\u7684\uFF0Capp\u7AEF\u7684nvue\u9875\u9762\u65F6\u539F\u751F\u6E32\u67D3\u7684\u3002nvue\u6837\u5F0F\u4E13\u9879\u6587\u6863\u2019<a href="https://uniapp.dcloud.io/nvue-css%E2%80%98" target="_blank" rel="noopener noreferrer">https://uniapp.dcloud.io/nvue-css\u2018</a></p></li><li><p>\u4F7F\u7528<code>@import</code>\u5F15\u5165css\u6837\u5F0F\u6587\u4EF6\uFF0C\u5206\u53F7\u7ED3\u675F</p><div class="language-css line-numbers-mode"><pre><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;../a.css&quot;</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div></li><li><p>css\u53D8\u91CF</p><p>\u975Envue</p><div class="language-css line-numbers-mode"><pre><code>    <span class="token selector">.status_bar</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--status-bar-height<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>nvue</p><div class="language-js line-numbers-mode"><pre><code>        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">iStatusBarHeight</span><span class="token operator">:</span><span class="token number">0</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>iStatusBarHeight <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">getSystemInfoSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>statusBarHeight
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p>\u56FA\u5B9A\u503C</p><p>\u5BFC\u822A\u9AD8\u5EA644px</p></li><li><p>\u80CC\u666F\u56FE\u7247</p><p>\u672C\u5730\u80CC\u666F\u56FE\u7247\u7684\u5F15\u7528\u8DEF\u5F84\u63A8\u8350\u4F7F\u7528\u4EE5 ~@ \u5F00\u5934\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002</p><div class="language-css line-numbers-mode"><pre><code> <span class="token selector">.test2</span> <span class="token punctuation">{</span>
     <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;~@/static/logo.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6CE8\u610F</p><p>\u200B \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0D\u652F\u6301\u76F8\u5BF9\u8DEF\u5F84\uFF08\u771F\u673A\u4E0D\u652F\u6301\uFF0C\u5F00\u53D1\u5DE5\u5177\u652F\u6301\uFF09</p></li><li><p>\u5B57\u4F53\u56FE\u6807</p><div class="language-css line-numbers-mode"><pre><code>\u5C0F\u7A0B\u5E8F\u4E0D\u652F\u6301\u5728css\u4E2D\u4F7F\u7528\u672C\u5730\u6587\u4EF6\uFF0C\u5305\u62EC\u672C\u5730\u7684\u80CC\u666F\u56FE\u548C\u5B57\u4F53\u6587\u4EF6\u3002\u9700\u4EE5base64\u65B9\u5F0F\u65B9\u53EF\u4F7F\u7528\u3002

\u7F51\u7EDC\u8DEF\u5F84\u5FC5\u987B\u52A0\u534F\u8BAE\u5934 https\u3002

\u5B57\u4F53\u6587\u4EF6\u7684\u5F15\u7528\u8DEF\u5F84\u63A8\u8350\u4F7F\u7528\u4EE5 ~@ \u5F00\u5934\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002
    
    <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
        <span class="token property">font-family</span><span class="token punctuation">:</span> test1-icon<span class="token punctuation">;</span>
        <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;~@/static/iconfont.ttf&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

nvue\u4E2D\u4E0D\u53EF\u76F4\u63A5\u4F7F\u7528css\u7684\u65B9\u5F0F\u5F15\u5165\u5B57\u4F53\u6587\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\u5728js\u5185\u5F15\u5165\u3002nvue\u5185\u4E0D\u652F\u6301\u672C\u5730\u8DEF\u5F84\u5F15\u5165\u5B57\u4F53\uFF0C\u8BF7\u4F7F\u7528\u7F51\u7EDC\u94FE\u63A5\u6216\u8005base64\u5F62\u5F0F\u3002src\u5B57\u6BB5\u7684url\u7684\u62EC\u53F7\u5185\u4E00\u5B9A\u8981\u4F7F\u7528\u5355\u5F15\u53F7\u3002

var domModule = weex.<span class="token function">requireModule</span><span class="token punctuation">(</span><span class="token string">&#39;dom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token selector">domModule.addRule(&#39;fontFace&#39;,</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;fontFamily&#39;</span><span class="token punctuation">:</span> <span class="token string">&quot;fontFamilyName&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;src&#39;</span><span class="token punctuation">:</span> <span class="token string">&quot;url(&#39;https://...&#39;)&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-html line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token entity" title="\uE600">&amp;#xe600;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token entity" title="\uE687">&amp;#xe687;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token entity" title="\uE60B">&amp;#xe60b;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
        <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;iconfont&#39;</span><span class="token punctuation">;</span>
        <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;https://at.alicdn.com/t/font_865816_17gjspmmrkti.ttf&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;truetype&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.test</span> <span class="token punctuation">{</span>
        <span class="token property">font-family</span><span class="token punctuation">:</span> iconfont<span class="token punctuation">;</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li><li><p>npm\u652F\u6301</p><p>uni-app\u652F\u6301\u4F7F\u7528npm\u5B89\u88C5\u7B2C\u4E09\u65B9\u5305</p></li></ul>`,2),c=[e];function l(o,u,i,r,k,b){return a(),s("div",null,c)}var g=n(t,[["render",l]]);export{d as __pageData,g as default};
