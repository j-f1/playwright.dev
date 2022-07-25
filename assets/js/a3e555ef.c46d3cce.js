"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7316],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return a?r.createElement(f,s(s({ref:t},u),{},{components:a})):r.createElement(f,s({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),n=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&o(e,a,t[a]);if(l)for(var a of l(t))i.call(t,a)&&o(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(7294),n=a(4939),l=a(9670),s=a(6010),i="tabItem_LplD",o=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&f(e,a,t[a]);if(c)for(var a of c(t))m.call(t,a)&&f(e,a,t[a]);return e};function g(e){var t,a,n;const{lazy:o,block:c,defaultValue:d,values:m,groupId:f,className:g}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=m?m:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,l.lx)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:null!=(n=null!=d?d:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(a=y[0])?void 0:a.props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,l.UB)(),[T,j]=(0,r.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,l.o5)();if(null!=f){const e=N[f];null!=e&&e!==T&&h.some((t=>t.value===e))&&j(e)}const C=e=>{const t=e.currentTarget,a=O.indexOf(t),r=h[a].value;r!==T&&(x(t),j(r),null!=f&&w(f,r))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},g)},h.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(n=k({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>O.push(e),onKeyDown:P,onFocus:C,onClick:C},a),l={className:(0,s.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":T===e})},p(n,u(l))),null!=t?t:e);var n,l}))),o?(0,r.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function y(e){const t=(0,n.Z)();return r.createElement(g,k({key:String(t)},e))}},3856:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return h}});var r=a(3905),n=a(3824),l=a(3811),s=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&d(e,a,t[a]);return e};const f={id:"test-retries",title:"Test retry"},k=void 0,g={unversionedId:"test-retries",id:"version-stable/test-retries",title:"Test retry",description:"- Failures",source:"@site/versioned_docs/version-stable/test-retries.mdx",sourceDirName:".",slug:"/test-retries",permalink:"/docs/test-retries",tags:[],version:"stable",frontMatter:{id:"test-retries",title:"Test retry"},sidebar:"docs",previous:{title:"Reporters",permalink:"/docs/test-reporters"},next:{title:"Timeouts",permalink:"/docs/test-timeouts"}},y={},h=[{value:"Failures",id:"failures",level:2},{value:"Retries",id:"retries",level:2},{value:"Serial mode",id:"serial-mode",level:2},{value:"Reuse single page between tests",id:"reuse-single-page-between-tests",level:2}],b={toc:h};function v(e){var t,a=e,{components:s}=a,d=((e,t)=>{var a={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),d),i(t,o({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#failures"}),"Failures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#retries"}),"Retries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#serial-mode"}),"Serial mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#reuse-single-page-between-tests"}),"Reuse single page between tests"))),(0,r.kt)("h2",m({},{id:"failures"}),"Failures"),(0,r.kt)("p",null,"Playwright Test runs tests in worker processes. These processes are OS processes, running independently, orchestrated by the test runner. All workers have identical environments and each starts its own browser."),(0,r.kt)("p",null,"Consider the following snippet:"),(0,r.kt)(n.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"import { test } from '@playwright/test';\n\ntest.describe('suite', () => {\n  test.beforeAll(async () => { /* ... */ });\n  test('first good', async ({ page }) => { /* ... */ });\n  test('second flaky', async ({ page }) => { /* ... */ });\n  test('third good', async ({ page }) => { /* ... */ });\n});\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"const { test } = require('@playwright/test');\n\ntest.describe('suite', () => {\n  test.beforeAll(async () => { /* ... */ });\n  test('first good', async ({ page }) => { /* ... */ });\n  test('second flaky', async ({ page }) => { /* ... */ });\n  test('third good', async ({ page }) => { /* ... */ });\n});\n")))),(0,r.kt)("p",null,"When ",(0,r.kt)("strong",{parentName:"p"},"all tests pass"),", they will run in order in the same worker process."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Worker process starts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second flaky")," passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,r.kt)("p",null,"Should ",(0,r.kt)("strong",{parentName:"p"},"any test fail"),", Playwright Test will discard the entire worker process along with the browser and will start a new one. Testing will continue in the new worker process starting with the next test."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Worker process #1 starts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"))),(0,r.kt)("li",{parentName:"ul"},"Worker process #2 starts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs again"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,r.kt)("p",null,"If you ",(0,r.kt)("strong",{parentName:"p"},"enable ",(0,r.kt)("a",m({parentName:"strong"},{href:"#retries"}),"retries")),", second worker process will start by retrying the failed test and continue from there."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Worker process #1 starts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"))),(0,r.kt)("li",{parentName:"ul"},"Worker process #2 starts",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs again"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second flaky")," is retried and passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,r.kt)("p",null,"This scheme works perfectly for independent tests and guarantees that failing tests can't affect healthy ones."),(0,r.kt)("h2",m({},{id:"retries"}),"Retries"),(0,r.kt)("p",null,"Playwright Test supports ",(0,r.kt)("strong",{parentName:"p"},"test retries"),". When enabled, failing tests will be retried multiple times until they pass, or until the maximum number of retries is reached. By default failing tests are not retried."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# Give failing tests 3 retry attempts\nnpx playwright test --retries=3\n")),(0,r.kt)(n.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Give failing tests 3 retry attempts\n  retries: 3,\n};\nexport default config;\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Give failing tests 3 retry attempts\n  retries: 3,\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"Playwright Test will categorize tests as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"passed" - tests that passed on the first run;'),(0,r.kt)("li",{parentName:"ul"},'"flaky" - tests that failed on the first run, but passed when retried;'),(0,r.kt)("li",{parentName:"ul"},'"failed" - tests that failed on the first run and failed all retries.')),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"Running 3 tests using 1 worker\n\n  \u2713 example.spec.ts:4:2 \u203a first passes (438ms)\n  x example.spec.ts:5:2 \u203a second flaky (691ms)\n  \u2713 example.spec.ts:5:2 \u203a second flaky (522ms)\n  \u2713 example.spec.ts:6:2 \u203a third passes (932ms)\n\n  1 flaky\n    example.spec.ts:5:2 \u203a second flaky\n  2 passed (4s)\n")),(0,r.kt)("p",null,"You can detect retries at runtime with ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/api/class-testinfo#test-info-retry"}),"testInfo.retry"),", which is accessible to any test, hook or fixture. Here is an example that clears some server-side state before a retry."),(0,r.kt)(n.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/test';\n\ntest('my test', async ({ page }, testInfo) => {\n  if (testInfo.retry)\n    await cleanSomeCachesOnTheServer();\n  // ...\n});\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('my test', async ({ page }, testInfo) => {\n  if (testInfo.retry)\n    await cleanSomeCachesOnTheServer();\n  // ...\n});\n")))),(0,r.kt)("h2",m({},{id:"serial-mode"}),"Serial mode"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/api/class-test#test-describe-serial"}),"test.describe.serial(title, callback)")," to group dependent tests to ensure they will always run together and in order. If one of the tests fails, all subsequent tests are skipped. All tests in the group are retried together."),(0,r.kt)("p",null,"Consider the following snippet that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"test.describe.serial"),":"),(0,r.kt)(n.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"import { test } from '@playwright/test';\n\ntest.describe.configure({ mode: 'serial' });\n\ntest.beforeAll(async () => { /* ... */ });\ntest('first good', async ({ page }) => { /* ... */ });\ntest('second flaky', async ({ page }) => { /* ... */ });\ntest('third good', async ({ page }) => { /* ... */ });\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"const { test } = require('@playwright/test');\n\ntest.describe.configure({ mode: 'serial' });\n\ntest.beforeAll(async () => { /* ... */ });\ntest('first good', async ({ page }) => { /* ... */ });\ntest('second flaky', async ({ page }) => { /* ... */ });\ntest('third good', async ({ page }) => { /* ... */ });\n")))),(0,r.kt)("p",null,"When running without ",(0,r.kt)("a",m({parentName:"p"},{href:"#retries"}),"retries"),", all tests after the failure are skipped:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Worker process #1:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"third good")," is skipped entirely")))),(0,r.kt)("p",null,"When running with ",(0,r.kt)("a",m({parentName:"p"},{href:"#retries"}),"retries"),", all tests are retried together:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Worker process #1:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"first good")," passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second flaky")," fails"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"third good")," is skipped"))),(0,r.kt)("li",{parentName:"ul"},"Worker process #2:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll")," hook runs again"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"first good")," passes again"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second flaky")," passes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"third good")," passes")))),(0,r.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"It is usually better to make your tests isolated, so they can be efficiently run and retried independently."))),(0,r.kt)("h2",m({},{id:"reuse-single-page-between-tests"}),"Reuse single page between tests"),(0,r.kt)("p",null,"Playwright Test creates an isolated ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/api/class-page",title:"Page"}),"Page")," object for each test. However, if you'd like to reuse a single ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/api/class-page",title:"Page"}),"Page")," object between multiple tests, you can create your own in ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/api/class-test#test-before-all"}),"test.beforeAll(hookFunction)")," and close it in ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/api/class-test#test-after-all"}),"test.afterAll(hookFunction)"),"."),(0,r.kt)(n.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// example.spec.ts\n\nimport { test, Page } from '@playwright/test';\n\ntest.describe.configure({ mode: 'serial' });\n\nlet page: Page;\n\ntest.beforeAll(async ({ browser }) => {\n  page = await browser.newPage();\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('runs first', async () => {\n  await page.goto('https://playwright.dev/');\n});\n\ntest('runs second', async () => {\n  await page.locator('text=Get Started').click();\n});\n"))),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// example.spec.js\n// @ts-check\n\nconst { test } = require('@playwright/test');\n\ntest.describe.configure({ mode: 'serial' });\n\n/** @type {import('@playwright/test').Page} */\nlet page;\n\ntest.beforeAll(async ({ browser }) => {\n  page = await browser.newPage();\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('runs first', async () => {\n  await page.goto('https://playwright.dev/');\n});\n\ntest('runs second', async () => {\n  await page.locator('text=Get Started').click();\n});\n")))))}v.isMDXComponent=!0}}]);