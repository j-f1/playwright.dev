"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[86546],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(79443);var s=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(86010),i="tabItem_1uMI",o="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,c=e.values,d=e.groupId,m=e.className,f=s(),k=f.tabGroupChoices,g=f.setTabGroupChoices,h=(0,n.useState)(r),y=h[0],v=h[1],N=n.Children.toArray(e.children),b=[];if(null!=d){var w=k[d];null!=w&&w!==y&&c.some((function(e){return e.value===w}))&&v(w)}var T=function(e){var t=e.currentTarget,a=b.indexOf(t),n=c[a].value;v(n),null!=d&&(g(d,n),setTimeout((function(){var e,a,n,r,s,l,i,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,s=e.right,l=window,i=l.innerHeight,p=l.innerWidth,a>=0&&s<=p&&r<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case u:var n=b.indexOf(e.target)+1;a=b[n]||b[0];break;case p:var r=b.indexOf(e.target)-1;a=b[r]||b[b.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:x,onFocus:T,onClick:T},a)}))),t?(0,n.cloneElement)(N.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},24477:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=a(22122),r=a(19756),s=(a(67294),a(3905)),l=a(55064),i=a(58215),o={id:"test-retries",title:"Test retry"},p=void 0,u={unversionedId:"test-retries",id:"version-1.17-rc.1/test-retries",isDocsHomePage:!1,title:"Test retry",description:"- Failures",source:"@site/versioned_docs/version-1.17-rc.1/test-retries.mdx",sourceDirName:".",slug:"/test-retries",permalink:"/docs/test-retries",version:"1.17-rc.1",frontMatter:{id:"test-retries",title:"Test retry"},sidebar:"version-1.17-rc.1/docs",previous:{title:"Reporters",permalink:"/docs/test-reporters"},next:{title:"Visual comparisons",permalink:"/docs/test-snapshots"}},c=[{value:"Failures",id:"failures",children:[]},{value:"Retries",id:"retries",children:[]},{value:"Serial mode",id:"serial-mode",children:[]},{value:"Reuse single page between tests",id:"reuse-single-page-between-tests",children:[]}],d={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#failures"},"Failures")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#retries"},"Retries")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#serial-mode"},"Serial mode")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#reuse-single-page-between-tests"},"Reuse single page between tests"))),(0,s.kt)("h2",{id:"failures"},"Failures"),(0,s.kt)("p",null,"Playwright Test runs tests in worker processes. These processes are OS processes, running independently, orchestrated by the test runner. All workers have identical environments and each starts its own browser."),(0,s.kt)("p",null,"Consider the following snippet:"),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest.describe('suite', () => {\n  test('first good', async ({ page }) => { /* ... */ });\n  test('second flaky', async ({ page }) => { /* ... */ });\n  test('third good', async ({ page }) => { /* ... */ });\n});\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.describe('suite', () => {\n  test('first good', async ({ page }) => { /* ... */ });\n  test('second flaky', async ({ page }) => { /* ... */ });\n  test('third good', async ({ page }) => { /* ... */ });\n});\n")))),(0,s.kt)("p",null,"When ",(0,s.kt)("strong",{parentName:"p"},"all tests pass"),", they will run in order in the same worker process."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Worker process starts",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"second flaky")," passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,s.kt)("p",null,"Should ",(0,s.kt)("strong",{parentName:"p"},"any test fail"),", Playwright Test will discard the entire worker process along with the browser and will start a new one. Testing will continue in the new worker process starting with the next test."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Worker process #1 starts",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"))),(0,s.kt)("li",{parentName:"ul"},"Worker process #2 starts",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,s.kt)("p",null,"If you ",(0,s.kt)("strong",{parentName:"p"},"enable ",(0,s.kt)("a",{parentName:"strong",href:"#retries"},"retries")),", second worker process will start by retrying the failed test and continue from there."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Worker process #1 starts",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"))),(0,s.kt)("li",{parentName:"ul"},"Worker process #2 starts",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"second flaky")," is retried and passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,s.kt)("p",null,"This scheme works perfectly for independent tests and guarantees that failing tests can't affect healthy ones."),(0,s.kt)("h2",{id:"retries"},"Retries"),(0,s.kt)("p",null,"Playwright Test supports ",(0,s.kt)("strong",{parentName:"p"},"test retries"),". When enabled, failing tests will be retried multiple times until they pass, or until the maximum number of retries is reached. By default failing tests are not retried."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Give failing tests 3 retry attempts\nnpx playwright test --retries=3\n")),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Give failing tests 3 retry attempts\n  retries: 3,\n};\nexport default config;\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Give failing tests 3 retry attempts\n  retries: 3,\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("p",null,"Playwright Test will categorize tests as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'"passed" - tests that passed on the first run;'),(0,s.kt)("li",{parentName:"ul"},'"flaky" - tests that failed on the first run, but passed when retried;'),(0,s.kt)("li",{parentName:"ul"},'"failed" - tests that failed on the first run and failed all retries.')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Running 3 tests using 1 worker\n\n  \u2713 example.spec.ts:4:2 \u203a first passes (438ms)\n  x example.spec.ts:5:2 \u203a second flaky (691ms)\n  \u2713 example.spec.ts:5:2 \u203a second flaky (522ms)\n  \u2713 example.spec.ts:6:2 \u203a third passes (932ms)\n\n  1 flaky\n    example.spec.ts:5:2 \u203a second flaky\n  2 passed (4s)\n")),(0,s.kt)("h2",{id:"serial-mode"},"Serial mode"),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-test#test-describe-serial"},"test.describe.serial(title, callback)")," to group dependent tests to ensure they will always run together and in order. If one of the tests fails, all subsequent tests are skipped. All tests in the group are retried together."),(0,s.kt)("p",null,"Consider the following snippet that uses ",(0,s.kt)("inlineCode",{parentName:"p"},"test.describe.serial"),":"),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { test } from '@playwright/test';\n\ntest.describe.serial('suite', () => {\n  test('first good', async ({ page }) => { /* ... */ });\n  test('second flaky', async ({ page }) => { /* ... */ });\n  test('third good', async ({ page }) => { /* ... */ });\n});\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { test } = require('@playwright/test');\n\ntest.describe.serial('suite', () => {\n  test('first good', async ({ page }) => { /* ... */ });\n  test('second flaky', async ({ page }) => { /* ... */ });\n  test('third good', async ({ page }) => { /* ... */ });\n});\n")))),(0,s.kt)("p",null,"When running without ",(0,s.kt)("a",{parentName:"p",href:"#retries"},"retries"),", all tests after the failure are skipped:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Worker process #1:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"third good")," is skipped entirely")))),(0,s.kt)("p",null,"When running with ",(0,s.kt)("a",{parentName:"p",href:"#retries"},"retries"),", all tests are retried together:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Worker process #1:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"third good")," is skipped"))),(0,s.kt)("li",{parentName:"ul"},"Worker process #2:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"first good")," passes again"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"second flaky")," passes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"It is usually better to make your tests isolated, so they can be efficiently run and retried independently."))),(0,s.kt)("h2",{id:"reuse-single-page-between-tests"},"Reuse single page between tests"),(0,s.kt)("p",null,"Playwright Test creates an isolated ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-page",title:"Page"},"Page")," object for each test. However, if you'd like to reuse a single ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-page",title:"Page"},"Page")," object between multiple tests, you can create your own in ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-test#test-before-all"},"test.beforeAll(hookFunction)")," and close it in ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/class-test#test-after-all"},"test.afterAll(hookFunction)"),"."),(0,s.kt)(l.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// example.spec.ts\n\nimport { test, Page } from '@playwright/test';\n\ntest.describe.serial('use the same page', () => {\n  let page: Page;\n\n  test.beforeAll(async ({ browser }) => {\n    page = await browser.newPage();\n  });\n\n  test.afterAll(async () => {\n    await page.close();\n  });\n\n  test('runs first', async () => {\n    await page.goto('https://playwright.dev/');\n  });\n\n  test('runs second', async () => {\n    await page.click('text=Get Started');\n  });\n});\n"))),(0,s.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\n// @ts-check\n\nconst { test } = require('@playwright/test');\n\ntest.describe.serial('use the same page', () => {\n  /** @type {import('@playwright/test').Page} */\n  let page;\n\n  test.beforeAll(async ({ browser }) => {\n    page = await browser.newPage();\n  });\n\n  test.afterAll(async () => {\n    await page.close();\n  });\n\n  test('runs first', async () => {\n    await page.goto('https://playwright.dev/');\n  });\n\n  test('runs second', async () => {\n    await page.click('text=Get Started');\n  });\n});\n")))))}m.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);