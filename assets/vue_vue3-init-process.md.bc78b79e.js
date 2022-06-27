import{_ as e,o as n,c as s,a as r}from"./app.1facd491.js";const _='{"title":"Vue3 Init Process","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521D\u59CB\u5DE5\u4F5C\uFF1F","slug":"\u521D\u59CB\u5DE5\u4F5C\uFF1F"},{"level":2,"title":"renderer.ts\u91CC\u7684patch\u51FD\u6570\u7684\u4F5C\u7528\uFF1F","slug":"renderer-ts\u91CC\u7684patch\u51FD\u6570\u7684\u4F5C\u7528\uFF1F"},{"level":2,"title":"renderer.ts\u91CC\u7684baseCreateRenderer\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F","slug":"renderer-ts\u91CC\u7684basecreaterenderer\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F"}],"relativePath":"vue/vue3-init-process.md","lastUpdated":1656087808275}',a={},t=r(`<h1 id="vue3-init-process" tabindex="-1">Vue3 Init Process <a class="header-anchor" href="#vue3-init-process" aria-hidden="true">#</a></h1><h2 id="\u521D\u59CB\u5DE5\u4F5C\uFF1F" tabindex="-1">\u521D\u59CB\u5DE5\u4F5C\uFF1F <a class="header-anchor" href="#\u521D\u59CB\u5DE5\u4F5C\uFF1F" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><pre><code><span class="line"><span style="color:#A6ACCD;">- \u9996\u5148\u5220\u9664popteer\u4F9D\u8D56\uFF0C\u592A\u5927\u4E86</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">- pnpm i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">- \u914D\u811A\u672C dev\uFF1A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node script/dev.js --sourcemap</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">- pnpm dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="renderer-ts\u91CC\u7684patch\u51FD\u6570\u7684\u4F5C\u7528\uFF1F" tabindex="-1">renderer.ts\u91CC\u7684patch\u51FD\u6570\u7684\u4F5C\u7528\uFF1F <a class="header-anchor" href="#renderer-ts\u91CC\u7684patch\u51FD\u6570\u7684\u4F5C\u7528\uFF1F" aria-hidden="true">#</a></h2><pre><code>\u6BD4\u8F83n1\uFF0Cn2\u7684\u865A\u62DF\u8282\u70B9\uFF0Cdiff\u66F4\u65B0\u3002
\u5982\u679Cn1\uFF0Cn2\u8282\u70B9\u76F8\u540C\uFF0C\u76F4\u63A5\u8FD4\u56DE\u3002
\u5982\u679Cn2\u8282\u70B9\u662F\u6587\u672C\u7C7B\u578B\uFF0C\u6267\u884CprocessText\u65B9\u6CD5
\u5982\u679Cn2\u8282\u70B9\u662F\u6CE8\u91CA\u7C7B\u578B\uFF0C\u6267\u884CprocessCommentNode\u65B9\u6CD5
\u5982\u679Cn2\u8282\u70B9\u662F\u5143\u7D20\u7C7B\u578B\uFF0C\u6267\u884CprocessElement\u65B9\u6CD5\uFF0C

\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u91CC\u8FD8\u5B9A\u4E49\u4E86patchElement\uFF0CmountChildren\uFF0CpatchProps\uFF0CmountComponent\uFF0CsetupRenderEffect\u7B49\u65B9\u6CD5
</code></pre><h2 id="renderer-ts\u91CC\u7684basecreaterenderer\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F" tabindex="-1">renderer.ts\u91CC\u7684baseCreateRenderer\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#renderer-ts\u91CC\u7684basecreaterenderer\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h2><pre><code>\u8BE5\u51FD\u6570\u63A5\u6536options\u5BF9\u8C61\uFF08insert\u3001remove\uFF09\uFF0C
\u51FD\u6570\u5185\u90E8\u5B9A\u4E49patch\u65B9\u6CD5\uFF0C
render\u65B9\u6CD5\uFF08\u91CC\u9762\u6267\u884Cpatch\u65B9\u6CD5\uFF09
\u8FD4\u56DE\u6E32\u67D3\u65B9\u6CD5render\uFF0C
    \u548C\u771F\u6B63\u7684createApp\u51FD\u6570\uFF08\u63A5\u6536rootComponent\uFF09\uFF0C\u8FD4\u56DEmount\u5C5E\u6027\u65B9\u6CD5\uFF0C\u4F5C\u7528\u662F\u6839\u636ErootComponent\u751F\u6210vnode\uFF0C
    \u7136\u540E\u6267\u884Crender(vnode)
</code></pre>`,7),p=[t];function c(o,l,d,i,h,u){return n(),s("div",null,p)}var b=e(a,[["render",c]]);export{_ as __pageData,b as default};
