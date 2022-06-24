import{_ as s,c as n,o as a,a as p}from"./app.ab92e4a2.js";const A='{"title":"\u9879\u76EE\u8BB0\u5F55","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"},{"level":2,"title":"question","slug":"question"},{"level":2,"title":"sundry","slug":"sundry"}],"relativePath":"vue/uniapp-project-record.md","lastUpdated":1656043405548}',l={},e=p(`<h1 id="\u9879\u76EE\u8BB0\u5F55" tabindex="-1">\u9879\u76EE\u8BB0\u5F55 <a class="header-anchor" href="#\u9879\u76EE\u8BB0\u5F55" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>2022.2.11\u5F00\u59CB\uFF0C\u5927\u6982\u6700\u591A\u505A\u534A\u4E2A\u5230\u4E00\u4E2A\u6708\u5427\uFF01\uFF01</p><div class="language-shell line-numbers-mode"><pre><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">- \u670D\u52A1\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    - \u516C\u53F8</span></span>
<span class="line"><span style="color:#A6ACCD;">- \u529F\u80FD\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">    - \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u53EF\u67E5\u770B</span></span>
<span class="line"><span style="color:#A6ACCD;">    - \u6253\u5305\u4E3Aapp</span></span>
<span class="line"><span style="color:#A6ACCD;">- \u6280\u672F\u6808</span></span>
<span class="line"><span style="color:#A6ACCD;">    - uniapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">1. \u4F7F\u7528\u4F7F\u7528Vue3/Vite\u7248\u521B\u5EFAuniapp\u9879\u76EE</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u521B\u5EFA\u4EE5 typescript \u5F00\u53D1\u7684\u5DE5\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">    npx degit dcloudio/uni-preset-vue#vite-ts my-thowderPower-project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">2. \u53EF\u53D1\u5E03\u5230iOS\u3001Android\u3001Web\uFF08\u54CD\u5E94\u5F0F\uFF09\u3001\u4EE5\u53CA\u5404\u79CD\u5C0F\u7A0B\u5E8F\u3001\u5FEB\u5E94\u7528\u7B49\u591A\u4E2A\u5E73\u53F0</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u6682\u65F6\u53EA\u53D1\u5E03\u5230\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">uni -p mp-weixin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    npm run dev\u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;">3. cli\u521B\u5EFA\u7684\u9879\u76EE\u53EF\u4EE5\u5728package.json\u4E2D\u6DFB\u52A0\u53C2\u6570--minimize</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u5728vite/ts\u9879\u76EE\u4E0B\u4F1A\u62A5\u9519\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">4. \u6A21\u4EFF\u672A\u6765\u5C0F\u7A0B\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">5. \u56FE\u7247\u4F7F\u7528\u901A\u8FC7\u56FE\u58F3\u7F51\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7684\u94FE\u63A5</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="question" tabindex="-1">question <a class="header-anchor" href="#question" aria-hidden="true">#</a></h2><h2 id="sundry" tabindex="-1">sundry <a class="header-anchor" href="#sundry" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><pre><code><span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">/</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> \u53D6\u6D88scroll-view\u6EDA\u52A8\u6761\u6837\u5F0F </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">::-webkit-scrollbar </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    display: none</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 0 </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">important</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 0 </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">important</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    -webkit-appearance: none</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    background: transparent</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">HTML 5Plus\u662F\u4EC0\u4E48\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">HTML\u8C03\u7528APP api\u7684\u80FD\u529B</span></span>
<span class="line"><span style="color:#A6ACCD;">https://www.cnblogs.com/gzhjj/p/11903773.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u5B89\u5353\u6A21\u62DF\u5668\uFF0C\u6709\u624B\u673A\u7684\u6A21\u6837</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u6253\u5305\u4E3A\u539F\u751Fapp</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u4E3A\u4EC0\u4E48history route\u7528\u6237\u5728\u6D4F\u89C8\u5668\u4E2D\u76F4\u63A5\u8BBF\u95EE https://example.com/user/id\uFF0C\u5C31\u4F1A\u5F97\u5230\u4E00\u4E2A 404 \u9519\u8BEF\uFF1F\u56E0\u4E3A\u5355\u9875\u5E94\u7528\uFF0C\u53EA\u6709\u4E00\u4E2A\u9875\u9762\uFF0C\u4F60\u60F3\u8DF3\u5230\u54EA\u4E2A\u9875\u9762\u5462\uFF1F</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u4E09\u65B9\u57F9\u8BAD\u673A\u6784\u89C6\u9891</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">uniapp\u793E\u533Ahttps://ask.dcloud.net.cn/explore/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">uniCloud\u7684\u5B66\u4E60\u8D44\u6599</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BE6\u89C1\uFF1Ahttps://uniapp.dcloud.io/uniCloud/learning</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">uni-app \u4F7F\u7528vue\u7684\u8BED\u6CD5+\u5C0F\u7A0B\u5E8F\u7684\u6807\u7B7E\u548CAPI\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u4E3A\u517C\u5BB9\u591A\u7AEF\u8FD0\u884C\uFF0C\u5EFA\u8BAE\u4F7F\u7528flex\u5E03\u5C40\u8FDB\u884C\u5F00\u53D1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">css\u3001less/scss \u7B49\u8D44\u6E90\u4E0D\u8981\u653E\u5728 static \u76EE\u5F55\u4E0B\uFF0C\u5EFA\u8BAE\u8FD9\u4E9B\u516C\u7528\u7684\u8D44\u6E90\u653E\u5728\u81EA\u5EFA\u7684 common \u76EE\u5F55\u4E0B\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">static \u76EE\u5F55\u4E0B\u7684 js \u6587\u4EF6\u4E0D\u4F1A\u88AB\u7F16\u8BD1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">-- \u7EDD\u5BF9\u8DEF\u5F84\uFF0C/static\u6307\u6839\u76EE\u5F55\u4E0B\u7684static\u76EE\u5F55\uFF0C\u5728cli\u9879\u76EE\u4E2D/static\u6307src\u76EE\u5F55\u4E0B\u7684static\u76EE\u5F55 --</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">image class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">logo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> src=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/static/logo.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">&gt;&lt;/image</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">image class=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">logo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> src=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/static/logo.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">&gt;&lt;/image</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u81EAHBuilderX 2.6.6\u8D77template\u5185\u652F\u6301@\u5F00\u5934\u8DEF\u5F84\u5F15\u5165\u9759\u6001\u8D44\u6E90\uFF0C\u65E7\u7248\u672C\u4E0D\u652F\u6301\u6B64\u65B9\u5F0F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">js\u6587\u4EF6\u5F15\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7EDD\u5BF9\u8DEF\u5F84\uFF0C@\u6307\u5411\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u5728cli\u9879\u76EE\u4E2D@\u6307\u5411src\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">import add from </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/common/add.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">js\u6587\u4EF6\u4E0D\u652F\u6301\u4F7F\u7528/\u5F00\u5934\u7684\u65B9\u5F0F\u5F15\u5165</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">css\u5F15\u5165\u9759\u6001\u8D44\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">css\u6587\u4EF6\u6216style\u6807\u7B7E\u5185\u5F15\u5165css\u6587\u4EF6\u65F6\uFF08scss\u3001less\u6587\u4EF6\u540C\u7406\uFF09\uFF0C\u53EF\u4EE5\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF08HBuilderX 2.6.6\uFF09</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">/</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> \u7EDD\u5BF9\u8DEF\u5F84 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">@import url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/common/uni.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">@import url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/common/uni.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">uLink\u7EC4\u4EF6\u662Fnavigator\u7EC4\u4EF6\u7684\u589E\u5F3A\u7248\uFF0C\u6837\u5F0F\u4E0A\u81EA\u5E26\u4E0B\u5212\u7EBF\uFF0C\u529F\u80FD\u4E0A\u652F\u6301\u6253\u5F00\u5728\u7EBF\u7F51\u9875\u3001\u5176\u4ED6App\u7684schema\u3001mailto\u53D1\u90AE\u4EF6\u3001tel\u6253\u7535\u8BDD\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u5982\u4F55\u5F15\u5165\u5B57\u4F53\u56FE\u6807\uFF1F\u770B\u6587\u6863</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">uni-app \u6709\u4E24\u79CD\u9875\u9762\u8DEF\u7531\u8DF3\u8F6C\u65B9\u5F0F\uFF1A\u4F7F\u7528navigator\u7EC4\u4EF6\u8DF3\u8F6C\u3001\u8C03\u7528API\u8DF3\u8F6C\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">uni-app \u53EF\u901A\u8FC7 pprocess.env.NODE_ENV \u5224\u65AD\u5F53\u524D\u73AF\u5883\u662F\u5F00\u53D1\u73AF\u5883\u8FD8\u662F\u751F\u4EA7\u73AF\u5883\u3002\u4E00\u822C\u7528\u4E8E\u8FDE\u63A5\u6D4B\u8BD5\u670D\u52A1\u5668\u6216\u751F\u4EA7\u670D\u52A1\u5668\u7684\u52A8\u6001\u5207\u6362\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u5F00\u53D1\u73AF\u5883\u548C\u751F\u4EA7\u73AF\u5883\u5224\u65AD</span></span>
<span class="line"><span style="color:#A6ACCD;">uni-app \u53EF\u901A\u8FC7 pprocess.env.NODE_ENV \u5224\u65AD\u5F53\u524D\u73AF\u5883\u662F\u5F00\u53D1\u73AF\u5883\u8FD8\u662F\u751F\u4EA7\u73AF\u5883\u3002\u4E00\u822C\u7528\u4E8E\u8FDE\u63A5\u6D4B\u8BD5\u670D\u52A1\u5668\u6216\u751F\u4EA7\u670D\u52A1\u5668\u7684\u52A8\u6001\u5207\u6362\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u5224\u65AD\u5E73\u53F0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5E73\u53F0\u5224\u65AD\u67092\u79CD\u573A\u666F\uFF0C\u4E00\u79CD\u662F\u5728\u7F16\u8BD1\u671F\u5224\u65AD\uFF0C\u4E00\u79CD\u662F\u5728\u8FD0\u884C\u671F\u5224\u65AD\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nvue\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">https://uniapp.dcloud.io/nvue-css</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nvue\u7684uni-app\u7F16\u8BD1\u6A21\u5F0F\u4E0B\uFF0CApp.vue \u4E2D\u7684\u6837\u5F0F\uFF0C\u4F1A\u7F16\u8BD1\u5230\u6BCF\u4E2A nvue\u6587\u4EF6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nvue\u4E2D\uFF0Cuni-app \u6A21\u5F0F\u53EF\u4EE5\u4F7F\u7528 px \u3001rpx\uFF0C\u8868\u73B0\u4E0E vue \u4E2D\u57FA\u672C\u4E00\u81F4\uFF0C\u53E6\u5916\u542F\u7528 dynamicRpx \u540E\u53EF\u4EE5\u9002\u914D\u5C4F\u5E55\u5927\u5C0F\u52A8\u6001\u53D8\u5316\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u9ED8\u8BA4\u8BBE\u8BA1\u7A3F750px</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u8BBE\u8BA1\u7A3F\u4E0D\u662F750px\uFF0CHBuilderX\u63D0\u4F9B\u4E86\u81EA\u52A8\u6362\u7B97\u7684\u5DE5\u5177\uFF0C\u8BE6\u89C1\uFF1Ahttps://ask.dcloud.net.cn/article/35445\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">page \u76F8\u5F53\u4E8E body \u8282\u70B9   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">uni-app \u63D0\u4F9B\u5185\u7F6E CSS \u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7CFB\u7EDF\u72B6\u6001\u680F\u9AD8\u5EA6  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u5C0F\u7A0B\u5E8F\u4E0D\u652F\u6301\u5728css\u4E2D\u4F7F\u7528\u672C\u5730\u6587\u4EF6\uFF0C\u5305\u62EC\u672C\u5730\u7684\u80CC\u666F\u56FE\u548C\u5B57\u4F53\u6587\u4EF6\u3002\u9700\u4EE5base64\u65B9\u5F0F\u65B9\u53EF\u4F7F\u7528\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u672C\u5730\u80CC\u666F\u56FE\u7247\u7684\u5F15\u7528\u8DEF\u5F84\u63A8\u8350\u4F7F\u7528\u4EE5 </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">@ \u5F00\u5934\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"> .test2 </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     background-image: url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">~@/static/logo.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u4E3A\u65B9\u4FBF\u5F00\u53D1\u8005\uFF0C\u5728\u80CC\u666F\u56FE\u7247\u5C0F\u4E8E 40kb \u65F6\uFF0Cuni-app \u7F16\u8BD1\u5230\u4E0D\u652F\u6301\u672C\u5730\u80CC\u666F\u56FE\u7684\u5E73\u53F0\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u5176\u8F6C\u5316\u4E3A base64 \u683C\u5F0F\uFF1B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> \u5B57\u4F53\u6587\u4EF6\u7684\u5F15\u7528\u8DEF\u5F84\u63A8\u8350\u4F7F\u7528\u4EE5 </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">@ \u5F00\u5934\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"> @font-face </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     font-family: test1-icon</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     src: url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">~@/static/iconfont.ttf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> nvue\u4E2D\u4E0D\u53EF\u76F4\u63A5\u4F7F\u7528css\u7684\u65B9\u5F0F\u5F15\u5165\u5B57\u4F53\u6587\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\u5728js\u5185\u5F15\u5165\u3002nvue\u5185\u4E0D\u652F\u6301\u672C\u5730\u8DEF\u5F84\u5F15\u5165\u5B57\u4F53\uFF0C\u8BF7\u4F7F\u7528\u7F51\u7EDC\u94FE\u63A5\u6216\u8005base64\u5F62\u5F0F\u3002src\u5B57\u6BB5\u7684url\u7684\u62EC\u53F7\u5185\u4E00\u5B9A\u8981\u4F7F\u7528\u5355\u5F15\u53F7\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">var domModule = weex.requireModule</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">domModule.addRule</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fontFace</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fontFamily</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fontFamilyName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">url(&#39;https://...&#39;)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    @font-face </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        font-family: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">iconfont</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        src: url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://at.alicdn.com/t/font_865816_17gjspmmrkti.ttf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> format</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">truetype</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> // format</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">truetype</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">\u662F\u5565\u610F\u601D\uFF1F\uFF1F\u4E3A\u4E86\u6D4F\u89C8\u5668\u8BC6\u522B\uFF1F\u8BC6\u522B\u4EC0\u4E48\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    .test </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        font-family: iconfont</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        margin-left: 20rpx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">block/</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u5728\u4E0D\u540C\u7684\u5E73\u53F0\u8868\u73B0\u5B58\u5728\u4E00\u5B9A\u5DEE\u5F02\uFF0C\u63A8\u8350\u7EDF\u4E00\u4F7F\u7528 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">template/</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u770B\u4E86\u770B\u5C0F\u7A0B\u5E8F\u5206\u5305\uFF0C\u53EA\u6709\u5B50\u9875\u9762\u624D\u80FD\u5206\u5305\uFF0Ctabbar\u9875\u4E0D\u652F\u6301\u3002\u5148\u5728\u8FD8\u914D\u7F6E\u4E0D\u4E86\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u76F4\u63A5\u4ECE npm \u4E0B\u8F7D\u5E93\u5F88\u5BB9\u6613\u53EA\u517C\u5BB9H5\u7AEF\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u5173\u4E8Eui\u5E93\u7684\u83B7\u53D6\uFF0C\u8BE6\u89C1\u591A\u7AEFUI\u5E93https://ask.dcloud.net.cn/article/35489</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u5C0F\u7A0B\u5E8F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u652F\u6301</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">vant weapp \u8F7B\u91CF\u3001\u53EF\u9760\u7684\u5C0F\u7A0B\u5E8F UI \u7EC4\u4EF6\u5E93</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">vue-cli \u5EFA\u7ACB\u7684\u5DE5\u7A0B wxcomponents \u6587\u4EF6\u5939\u5728 src \u76EE\u5F55\u4E0B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u5F53\u9700\u8981\u5728 vue \u7EC4\u4EF6\u4E2D\u4F7F\u7528\u5C0F\u7A0B\u5E8F\u7EC4\u4EF6\u65F6\uFF0C\u6CE8\u610F\u5728 pages.json \u7684 globalStyle \u4E2D\u914D\u7F6E usingComponents\uFF0C\u800C\u4E0D\u662F\u9875\u9762\u7EA7\u914D\u7F6E\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">WXS</span></span>
<span class="line"><span style="color:#A6ACCD;">WXS\u662F\u4E00\u5957\u8FD0\u884C\u5728\u89C6\u56FE\u5C42\u7684\u811A\u672C\u8BED\u8A00\uFF0C\u5FAE\u4FE1\u7AEF\u7684\u89C4\u8303\u8BE6\u89C1\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u5B83\u7684\u7279\u70B9\u662F\u8FD0\u884C\u5728\u89C6\u56FE\u5C42\u3002\u5F53\u9700\u8981\u907F\u514D\u903B\u8F91\u5C42\u548C\u6E32\u67D3\u5C42\u4EA4\u4E92\u901A\u4FE1\u6298\u635F\u65F6\uFF0C\u53EF\u91C7\u7528wxs\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u4EE5\u4E0B\u662F\u4E00\u4E9B\u4F7F\u7528 WXS \u7684\u7B80\u5355\u793A\u4F8B\uFF0C\u8981\u5B8C\u6574\u4E86\u89E3 WXS \u8BED\u6CD5\uFF0C\u8BF7\u53C2\u8003WXS \u8BED\u6CD5\u53C2\u8003\u3002\u672C\u793A\u4F8B\u4F7F\u7528wxs\u54CD\u5E94touchmove\u4E8B\u4EF6\uFF0C\u51CF\u5C11\u89C6\u56FE\u5C42\u4E0E\u903B\u8F91\u5C42\u901A\u4FE1\uFF0C\u4F7F\u6ED1\u52A8\u66F4\u52A0\u4E1D\u6ED1\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">renderjs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">nvue\u6559\u7A0B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u9996\u9875\u4F7F\u7528nvue\u9875\u9762\uFF0C\u5B50\u9875\u4F7F\u7528vue\u9875\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">nvue\u7684\u7EC4\u4EF6\u548CAPI\u5199\u6CD5\u4E0Evue\u9875\u9762\u4E00\u81F4\uFF0C\u5176\u5185\u7F6E\u7EC4\u4EF6\u8FD8\u6BD4vue\u9875\u9762\u5185\u7F6E\u7EC4\u4EF6\u589E\u52A0\u4E86\u66F4\u591A\uFF0C\u8BE6\u89C1\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">static \u76EE\u5F55\u7684\u6761\u4EF6\u7F16\u8BD1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u5206\u5305\u4F18\u5316</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br></div></div>`,7),r=[e];function c(o,i,t,b,D,C){return a(),n("div",null,r)}var y=s(l,[["render",c]]);export{A as __pageData,y as default};
