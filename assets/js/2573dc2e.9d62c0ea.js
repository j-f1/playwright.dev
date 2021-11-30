"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[24042],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(79443);var l=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(86010),s="tabItem_1uMI",o="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,c=e.values,m=e.groupId,d=e.className,f=l(),h=f.tabGroupChoices,k=f.setTabGroupChoices,g=(0,n.useState)(r),w=g[0],v=g[1],y=n.Children.toArray(e.children),b=[];if(null!=m){var N=h[m];null!=N&&N!==w&&c.some((function(e){return e.value===N}))&&v(N)}var x=function(e){var t=e.currentTarget,a=b.indexOf(t),n=c[a].value;v(n),null!=m&&(k(m,n),setTimeout((function(){var e,a,n,r,l,i,s,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,s=i.innerHeight,p=i.innerWidth,a>=0&&l<=p&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},T=function(e){var t,a;switch(e.keyCode){case u:var n=b.indexOf(e.target)+1;a=b[n]||b[0];break;case p:var r=b.indexOf(e.target)-1;a=b[r]||b[b.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:T,onFocus:x,onClick:x},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},11405:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i=a(55064),s=a(58215),o={id:"test-parallel",title:"Parallelism and sharding"},p=void 0,u={unversionedId:"test-parallel",id:"version-1.17/test-parallel",isDocsHomePage:!1,title:"Parallelism and sharding",description:"Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time.",source:"@site/versioned_docs/version-1.17/test-parallel.mdx",sourceDirName:".",slug:"/test-parallel",permalink:"/docs/test-parallel",version:"1.17",frontMatter:{id:"test-parallel",title:"Parallelism and sharding"},sidebar:"version-1.17/docs",previous:{title:"Page Object Model",permalink:"/docs/test-pom"},next:{title:"Parameterize tests",permalink:"/docs/test-parameterize"}},c=[{value:"Worker processes",id:"worker-processes",children:[]},{value:"Limit workers",id:"limit-workers",children:[]},{value:"Disable parallelism",id:"disable-parallelism",children:[]},{value:"Parallelize tests in a single file",id:"parallelize-tests-in-a-single-file",children:[]},{value:"Shard tests between multiple machines",id:"shard-tests-between-multiple-machines",children:[]},{value:"Limit failures and fail fast",id:"limit-failures-and-fail-fast",children:[]},{value:"Worker index and parallel index",id:"worker-index-and-parallel-index",children:[]}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"By default, ",(0,l.kt)("strong",{parentName:"li"},"test files")," are run in parallel. Tests in a single file are run in order, in the same worker process."),(0,l.kt)("li",{parentName:"ul"},"Group tests with ",(0,l.kt)("a",{parentName:"li",href:"#parallelize-tests-in-a-single-file"},(0,l.kt)("inlineCode",{parentName:"a"},"test.describe.parallel"))," to run ",(0,l.kt)("strong",{parentName:"li"},"tests in a single file")," in parallel."),(0,l.kt)("li",{parentName:"ul"},"To ",(0,l.kt)("strong",{parentName:"li"},"disable")," parallelism limit the number of ",(0,l.kt)("a",{parentName:"li",href:"#disable-parallelism"},"workers to one"),".")),(0,l.kt)("p",null,"You can control the number of ",(0,l.kt)("a",{parentName:"p",href:"#limit-workers"},"parallel worker processes")," and ",(0,l.kt)("a",{parentName:"p",href:"#limit-failures-and-fail-fast"},"limit the number of failures")," in the whole test suite for efficiency."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#worker-processes"},"Worker processes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#limit-workers"},"Limit workers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disable-parallelism"},"Disable parallelism")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#parallelize-tests-in-a-single-file"},"Parallelize tests in a single file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#shard-tests-between-multiple-machines"},"Shard tests between multiple machines")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#limit-failures-and-fail-fast"},"Limit failures and fail fast")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#worker-index-and-parallel-index"},"Worker index and parallel index"))),(0,l.kt)("h2",{id:"worker-processes"},"Worker processes"),(0,l.kt)("p",null,"All tests run in worker processes. These processes are OS processes, running independently, orchestrated by the test runner. All workers have identical environments and each starts its own browser."),(0,l.kt)("p",null,"You can't communicate between the workers. Playwright Test reuses a single worker as much as it can to make testing faster, so multiple test files are usually run in a single worker one after another."),(0,l.kt)("p",null,"Workers are always shutdown after a ",(0,l.kt)("a",{parentName:"p",href:"/docs/test-retries#failures"},"test failure")," to guarantee pristine environment for following tests."),(0,l.kt)("h2",{id:"limit-workers"},"Limit workers"),(0,l.kt)("p",null,"You can control the maximum number of parallel worker processes via ",(0,l.kt)("a",{parentName:"p",href:"/docs/test-cli"},"command line")," or in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/test-configuration"},"configuration file"),"."),(0,l.kt)("p",null,"From the command line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers 4\n")),(0,l.kt)("p",null,"In the configuration file:"),(0,l.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h2",{id:"disable-parallelism"},"Disable parallelism"),(0,l.kt)("p",null,"You can disable any parallelism by allowing just a single worker at any time. Either set ",(0,l.kt)("inlineCode",{parentName:"p"},"workers: 1")," option in the configuration file or pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--workers=1")," to the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers=1\n")),(0,l.kt)("h2",{id:"parallelize-tests-in-a-single-file"},"Parallelize tests in a single file"),(0,l.kt)("p",null,"By default, tests in a single file are run in order. If you have many independent tests in a single file, you might want to run them in parallel with ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-test#test-describe-parallel"},"test.describe.parallel(title, callback)"),"."),(0,l.kt)("p",null,"Note that parallel tests are executed in separate worker processes and cannot share any state or global variables. Each test executes all relevant hooks just for itself, including ",(0,l.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"afterAll"),"."),(0,l.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest.describe.parallel('suite', () => {\n  test('runs in parallel 1', async ({ page }) => { /* ... */ });\n  test('runs in parallel 2', async ({ page }) => { /* ... */ });\n});\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.describe.parallel('suite', () => {\n  test('runs in parallel 1', async ({ page }) => { /* ... */ });\n  test('runs in parallel 2', async ({ page }) => { /* ... */ });\n});\n")))),(0,l.kt)("h2",{id:"shard-tests-between-multiple-machines"},"Shard tests between multiple machines"),(0,l.kt)("p",null,"Playwright Test can shard a test suite, so that it can be executed on multiple machines. For that,  pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--shard=x/y")," to the command line. For example, to split the suite into three shards, each running one third of the tests:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --shard=1/3\nnpx playwright test --shard=2/3\nnpx playwright test --shard=3/3\n")),(0,l.kt)("p",null,"That way your test suite completes 3 times faster."),(0,l.kt)("h2",{id:"limit-failures-and-fail-fast"},"Limit failures and fail fast"),(0,l.kt)("p",null,"You can limit the number of failed tests in the whole test suite by setting ",(0,l.kt)("inlineCode",{parentName:"p"},"maxFailures")," config option or passing ",(0,l.kt)("inlineCode",{parentName:"p"},"--max-failures")," command line flag."),(0,l.kt)("p",null,'When running with "max failures" set, Playwright Test will stop after reaching this number of failed tests and skip any tests that were not executed yet. This is useful to avoid wasting resources on broken test suites.'),(0,l.kt)("p",null,"Passing command line option:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --max-failures=10\n")),(0,l.kt)("p",null,"Setting in the configuration file:"),(0,l.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Limit the number of failures on CI to save resources\n  maxFailures: process.env.CI ? 10 : undefined,\n};\nexport default config;\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Limit the number of failures on CI to save resources\n  maxFailures: process.env.CI ? 10 : undefined,\n};\n\nmodule.exports = config;\n")))),(0,l.kt)("h2",{id:"worker-index-and-parallel-index"},"Worker index and parallel index"),(0,l.kt)("p",null,"Each worker process is assigned two ids: a unique worker index that starts with 1, and a parallel index that is between ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"workers - 1"),". When a worker is restarted, for example after a failure, the new worker process has the same ",(0,l.kt)("inlineCode",{parentName:"p"},"parallelIndex")," and a new ",(0,l.kt)("inlineCode",{parentName:"p"},"workerIndex"),"."),(0,l.kt)("p",null,"You can read an index from environment variables ",(0,l.kt)("inlineCode",{parentName:"p"},"process.env.TEST_WORKER_INDEX")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"process.env.TEST_PARALLEL_INDEX"),", or access them through ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-testinfo#test-info-worker-index"},"testInfo.workerIndex")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-testinfo#test-info-parallel-index"},"testInfo.parallelIndex"),"."))}d.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);