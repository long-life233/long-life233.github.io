import{_ as n,c as e,o as a,a as s}from"./app.96f6dfca.js";const _='{"title":"\u628A\u7B80\u5355\u7684\u4E8B\u505A\u590D\u6742","description":"","frontmatter":{},"headers":[],"relativePath":"other/article/2022.2.3-make-easy-to-complex.md","lastUpdated":1643818362067}',r={},p=s(`<h1 id="\u628A\u7B80\u5355\u7684\u4E8B\u505A\u590D\u6742" tabindex="-1">\u628A\u7B80\u5355\u7684\u4E8B\u505A\u590D\u6742 <a class="header-anchor" href="#\u628A\u7B80\u5355\u7684\u4E8B\u505A\u590D\u6742" aria-hidden="true">#</a></h1><p>\u770B\u4F55\u540C\u5B66\u89C6\u9891\u6709\u611F</p><p>\u539F\u89C6\u9891\u5730\u5740\uFF1A</p><p><a href="https://www.bilibili.com/video/BV1244y1p7kt" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1244y1p7kt</a></p><p>\u91CC\u9762\u6709\u4E2A\u8BC4\u8BBA\u8BA9\u6211\u611F\u89E6\u9887\u6DF1\u3002</p><div class="language-shell line-numbers-mode"><pre><code>\u5C0F\u4F55\u660E\u660E\u53EF\u4EE5\u8D70\u8FC7\u53BB\u6253\u5F00\u7535\u706F\u5F00\u5173\uFF0C\u4F46\u504F\u504F\u8981\u642C\u7F51\u7403\u7838\u81EA\u5DF1\u7684\u811A\u3002\u5176\u5B9E\uFF0C\u50CF\u8FD9\u6837\u8FDE\u9501\u53CD\u5E94\u7684\u88C5\u7F6E\u6709\u4E2A\u7279\u5B9A\u7684\u540D\u79F0\uFF0C\u53EB\u505A\u9C81\u5E03\xB7\u6208\u5FB7\u5821\u673A\u68B0\uFF08Rube Goldberg machine\uFF09\u3002
\u8FD9\u4E2A\u8BCD\u6700\u5148\u8BB0\u8F7D\u4E8E\u300A\u97E6\u4F2F\u65AF\u7279\u7B2C\u4E09\u7248\u56FD\u9645\u8BCD\u5178\u300B\uFF0C\u610F\u601D\u662F\u201C\u4EE5\u6781\u4E3A\u7E41\u590D\u800C\u8FC2\u56DE\u7684\u65B9\u6CD5\u53BB\u5B8C\u6210\u5B9E\u9645\u4E0A\u6216\u770B\u8D77\u6765\u53EF\u4EE5\u5BB9\u6613\u505A\u5230\u4E8B\u60C5\u201D\u3002
\u57281930\u5E74\u4EE3\u7684\u7F8E\u56FD\uFF0C\u9C81\u5E03\xB7\u6208\u5FB7\u5821\u673A\u68B0\u88AB\u5F62\u5BB9\u4E3A\u201C\u8352\u8C2C\u5730\u7EC4\u5408\u5728\u4E00\u8D77\u7684\u673A\u68B0\u201D\uFF0C\u540E\u6765\u4EA6\u5F62\u5BB9\u201C\u6781\u4E3A\u6DF7\u4E71\u6216\u590D\u6742\u7684\u7CFB\u7EDF\u201D\u3002\u6709\u8DA3\u7684\u662F\uFF0C\u4E00\u4E9B\u6B27\u7F8E\u56FD\u5BB6\u8FD8\u4F1A\u7528\u8FD9\u4E2A\u8BCD\u6765\u5F62\u5BB9\u4ED6\u4EEC\u7684\u9000\u4F11\u4FDD\u9669\u5F88\u7E41\u590D\u3002
\u9C81\u5E03\xB7\u6208\u5FB7\u5821\u673A\u68B0\u6E90\u4E8E\u6F2B\u753B\u4F5C\u54C1\uFF0C\u5B83\u7684\u53D1\u660E\u8005\u662F\u7F8E\u56FD\u6F2B\u753B\u5BB6\u9C81\u5E03\xB7\u6208\u5FB7\u5821\uFF08Rube Goldberg\uFF09\uFF0C\u4ED6\u5728\u6F2B\u753B\u754C\u6709\u5F88\u9AD8\u7684\u5730\u4F4D\u3002\u9C81\u5E03\xB7\u6208\u5FB7\u5821\u8BBE\u8BA1\u7684\u8FD9\u4E9B\u88C5\u7F6E\u51E0\u4E4E\u90FD\u662F\u975E\u5E38\u4E0D\u5B9E\u7528\u7684\uFF0C\u56E0\u4E3A\u76EE\u7684\u884C\u4E3A\u672C\u8EAB\u8FDC\u6BD4\u88C5\u7F6E\u7684\u4E00\u756A\u9A9A\u64CD\u4F5C\u8FD0\u884C\u8D77\u6765\u7B80\u5355\u5F97\u591A\uFF0C\u8C01\u4F1A\u771F\u7684\u53D1\u660E\u8FD9\u4E9B\u88C5\u7F6E\u8FD0\u7528\u5728\u65E5\u5E38\u751F\u6D3B\u5462\uFF1F
\u4F46\u662F\uFF0C\u4ED4\u7EC6\u54C1\u54C1\uFF0C\u8FBE\u5230\u8FD9\u79CD\u6ED1\u7A3D\u5E7D\u9ED8\u7684\u6548\u679C\uFF0C\u6B63\u662F\u8FD9\u4E9B\u9C81\u5E03\xB7\u6208\u5FB7\u5821\u673A\u68B0\u6F2B\u753B\u7684\u76EE\u7684\u6240\u5728\u3002\u8BE5\u914D\u5408\u4F60\u6F14\u51FA\u7684\u6211\u5C3D\u529B\u5728\u8868\u6F14\uFF0C\u4EBA\u5BB6\u90FD\u8FD9\u4E48\u5356\u529B\u4E86\uFF0C\u8FD8\u4E0D\u662F\u4E3A\u4E86\u535A\u541B\u4E00\u7B11\u3002
\u6F2B\u753B\u9017\u4EBA\u5F00\u5FC3\uFF0C\u90A3\u662F\u6700\u6B63\u5E38\u4E0D\u8FC7\u4E86\u3002\u8BBE\u8BA1\u8005\u7684\u65E0\u654C\u8111\u6D1E\uFF0C\u624D\u662F\u6700\u6709\u542B\u91D1\u91CF\u7684\u5730\u65B9\u3002
<span class="token number">1987</span>\u5E74\uFF0C\u666E\u6E21\u5927\u5B66\u5C31\u4EE5\u8FD9\u4E9B\u673A\u68B0\u827A\u672F\u4E3A\u7075\u611F\uFF0C\u9996\u5148\u4E3E\u529E\u4E86\u5168\u56FD\u9C81\u5E03\xB7\u6208\u5FB7\u5821\u673A\u68B0\u7ADE\u8D5B\u3002\u8FD9\u4E2A\u8D5B\u4E8B\u8981\u6C42\u53C2\u8D5B\u5B66\u751F\u52A8\u624B\u8BBE\u8BA1\u51FA\u5B9E\u4F53\u7684\u8FDE\u9501\u53CD\u5E94\u88C5\u7F6E\uFF0C\u4EE5\u6FC0\u53D1\u5B66\u751F\u4EEC\u7684\u53D1\u660E\u521B\u65B0\u80FD\u529B\u3002
\u9C81\u5E03\xB7\u6208\u5FB7\u5821\u673A\u68B0\u7684\u6700\u5927\u7279\u70B9\uFF0C\u5C31\u662F\u4EE5\u590D\u6742\u8FC2\u56DE\u7684\u65B9\u5F0F\u53BB\u5B8C\u6210\u4E00\u4E9B\u5B9E\u9645\u4E0A\u5F88\u7B80\u5355\u7684\u4E8B\u60C5\u3002\u53EF\u80FD\u6709\u4EBA\u8BF4\uFF1A\u201C\u8FD9\u4E0D\u662F\u2018\u65E0\u7528\u53D1\u660E\u2019\u5417\uFF1F\u73A9\u7269\u4E27\u5FD7\u3002\u201D
\u201C\u73A9\u9C81\u5E03\xB7\u6208\u5FB7\u5821\u673A\u68B0\u5C31\u662F\u6545\u610F\u6D6A\u8D39\u65F6\u95F4\u548C\u7CBE\u529B\uFF0C\u4F46\u662F\u6211\u5F88\u4EAB\u53D7\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u5373\u4F7F\u9014\u4E2D\u4F1A\u5931\u8D25\u5F88\u591A\u6B21\u3002\u201D\u53C2\u8D5B\u56E2\u961F\u6210\u5458\u5982\u662F\u8BF4\u3002
\u5C0F\u4F55\u4F30\u8BA1\u4E5F\u662F\u8FD9\u6837\u7684\u5FC3\u6001\u53BB\u505A\u8FD9\u4E48\u4E2A\u201C\u6CA1\u6709\u7528\u201D\u7684\u9879\u76EE\u5427\uFF0C\u4F46\u662F\u6DF7\u6C8C\u7406\u8BBA\u544A\u8BC9\u6211\u4EEC\uFF1A\u4E00\u53EA\u5357\u7F8E\u6D32\u7684\u8774\u8776\u6247\u52A8\u51E0\u4E0B\u7FC5\u8180\uFF0C\u4E5F\u53EF\u4EE5\u5F15\u8D77\u7F8E\u56FD\u7684\u4E00\u573A\u9F99\u5377\u98CE\u3002\u6240\u4EE5\uFF0C\u522B\u5C0F\u770B\u4EFB\u4F55\u4E00\u4E2A\u521B\u9020\u53D1\u660E\uFF0C\u4E5F\u8BB8\u672A\u6765\u6539\u53D8\u4E16\u754C\u7684\u673A\u5668\uFF0C\u5C31\u662F\u4ECE\u5C0F\u4F55\u7684\u9C81\u5E03\xB7\u6208\u5FB7\u5821\u673A\u68B0\u8FD9\u6837\u8352\u8BDE\u800C\u53C8\u7CBE\u5BC6\u7684\u88C5\u7F6E\u6240\u8BDE\u751F
\u53C2\u8003\u6587\u732E\uFF1A
\u300ARube Goldberg machine\u300B\u6587/Wikipedia
\u300A\u56FE\u8BF4\u6E38\u620F\uFF1A\u4F60\u77E5\u9053\u4EC0\u4E48\u662F \u9C81\u5E03.\u54E5\u5FB7\u5821\u673A\u68B0 \u5417\uFF1F\u300B\u6587/\u77E5\u4E4E@BBKinG
\u300A\u6A2A\u7248\u8FC7\u5173\u6E38\u620F\u81EA\u5DF1\u52A8\u624B\u505A\uFF0C\u521B\u610F\u5927\u795E\u5C31\u7231\u8FD9\u6837\u73A9\u300B\u6587/\u77E5\u4E4E@\u72C2\u4E38\u79D1\u5B66 
\u300A\u9C81\u5E03\xB7\u6208\u5FB7\u5821\u673A\u68B0\uFF1A\u4E0D\u4EC5\u662F\u6700\u7CBE\u5DE7\u7684\u8FDE\u9501\u53CD\u5E94\u88C5\u7F6E\uFF0C\u8FD8\u662F\u61D2\u4EBA\u7684\u798F\u97F3\u300B \u6587/\u77E5\u4E4E@\u624B\u671BSowarm 
\u300A\u666E\u6E21\u5927\u5B66\u4E13\u4E1A\u5DE5\u7A0B\u5E08\u5B66\u4F1A-2018\u5E74\u9C81\u5E03\xB7\u6208\u5FB7\u5821\u673A\u68B0\u7ADE\u8D5B\u51A0\u519B\u300B\u89C6\u9891/YouTube
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u662F\u554A\uFF0C\u60F3\u60F3\u5E73\u65F6\u5728\u5DE5\u4F5C\u3001\u5B66\u4E60\u4E2D\uFF0C\u603B\u662F\u5BB3\u6015\u9EBB\u70E6\uFF0C\u4E0D\u6562\u52A8\u7528\u8111\u5B50\u53BB\u60F3\u4E00\u4E9B\u81EA\u5DF1\u4ECE\u672A\u505A\u8FC7\u7684\u4E8B\uFF0C\u5BB3\u6015\u505A\u65E0\u7528\u529F\u3002\u628A\u7B80\u5355\u7684\u4E8B\u60C5\u641E\u590D\u6742\uFF0C\u4E5F\u662F\u4E00\u79CD\u5B66\u4E60\u63D0\u5347\u7684\u65B9\u5F0F\uFF0C\u800C\u4E14\u4E5F\u7279\u522B\u6709\u610F\u601D\u3002</p>`,7),l=[p];function i(b,c,t,o,m,d){return a(),e("div",null,l)}var h=n(r,[["render",i]]);export{_ as __pageData,h as default};
