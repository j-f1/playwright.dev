"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6612],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),f=o,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||r;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),o=Object.defineProperty,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))i.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7294),o=a(4939),r=a(9670),l=a(6010),i="tabItem_LplD",s=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&d(e,a,t[a]);if(c)for(var a of c(t))f.call(t,a)&&d(e,a,t[a]);return e};function k(e){var t,a,o;const{lazy:s,block:c,defaultValue:m,values:f,groupId:d,className:k}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:b.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,r.lx)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:null!=(o=null!=m?m:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?o:null==(a=b[0])?void 0:a.props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:x}=(0,r.UB)(),[w,N]=(0,n.useState)(v),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,r.o5)();if(null!=d){const e=T[d];null!=e&&e!==w&&h.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,a=j.indexOf(t),n=h[a].value;n!==w&&(O(t),N(n),null!=d&&x(d,n))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]||j[j.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(o=g({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>j.push(e),onKeyDown:I,onFocus:S,onClick:S},a),r={className:(0,l.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":w===e})},u(o,p(r))),null!=t?t:e);var o,r}))),s?(0,n.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function b(e){const t=(0,o.Z)();return n.createElement(k,g({key:String(t)},e))}},2346:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return h}});var n=a(3905),o=a(3824),r=a(3811),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))c.call(t,a)&&m(e,a,t[a]);return e};const d={id:"test-timeouts",title:"Timeouts"},g=void 0,k={unversionedId:"test-timeouts",id:"test-timeouts",title:"Timeouts",description:"- Overview",source:"@site/docs/test-timeouts.mdx",sourceDirName:".",slug:"/test-timeouts",permalink:"/docs/next/test-timeouts",tags:[],version:"current",frontMatter:{id:"test-timeouts",title:"Timeouts"},sidebar:"docs",previous:{title:"Test retry",permalink:"/docs/next/test-retries"},next:{title:"Visual comparisons",permalink:"/docs/next/test-snapshots"}},b={},h=[{value:"Overview",id:"overview",level:2},{value:"Test timeout",id:"test-timeout",level:2},{value:"Set test timeout in the config",id:"set-test-timeout-in-the-config",level:3},{value:"Set timeout for a single test",id:"set-timeout-for-a-single-test",level:3},{value:"Change timeout from a slow hook",id:"change-timeout-from-a-slow-hook",level:3},{value:"Change timeout for <code>beforeAll</code>/<code>afterAll</code> hook",id:"change-timeout-for-beforeallafterall-hook",level:3},{value:"Expect timeout",id:"expect-timeout",level:2},{value:"Set expect timeout in the config",id:"set-expect-timeout-in-the-config",level:3},{value:"Set timeout for a single assertion",id:"set-timeout-for-a-single-assertion",level:3},{value:"Action and navigation timeouts",id:"action-and-navigation-timeouts",level:2},{value:"Set action and navigation timeouts in the config",id:"set-action-and-navigation-timeouts-in-the-config",level:3},{value:"Set timeout for a single action",id:"set-timeout-for-a-single-action",level:3},{value:"Global timeout",id:"global-timeout",level:2},{value:"Fixture timeout",id:"fixture-timeout",level:2}],y={toc:h};function v(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=f(f({},y),m),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"#overview"}),"Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"#test-timeout"}),"Test timeout")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"#expect-timeout"}),"Expect timeout")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"#action-and-navigation-timeouts"}),"Action and navigation timeouts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"#global-timeout"}),"Global timeout")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"#fixture-timeout"}),"Fixture timeout"))),(0,n.kt)("h2",f({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Playwright Test has multiple configurable timeouts for various tasks."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Timeout"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Default"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Test timeout"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"30000 ms"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Timeout for each test, includes test, hooks and fixtures:",(0,n.kt)("br",null),(0,n.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,n.kt)("br",null),(0,n.kt)("code",null,"config = { timeout: 60000 }"),(0,n.kt)("br",null),(0,n.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Override"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"test.setTimeout(120000)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Expect timeout"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"5000 ms"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Timeout for each assertion:",(0,n.kt)("br",null),(0,n.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,n.kt)("br",null),(0,n.kt)("code",null,"config = { expect: { timeout: 10000 } }"),(0,n.kt)("br",null),(0,n.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Override"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"expect(locator).toBeVisible({ timeout: 10000 })"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Action timeout"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"no timeout"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Timeout for each action:",(0,n.kt)("br",null),(0,n.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,n.kt)("br",null),(0,n.kt)("code",null,"config = { use: { actionTimeout: 10000 } }"),(0,n.kt)("br",null),(0,n.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Override"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"locator.click({ timeout: 10000 })"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Navigation timeout"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"no timeout"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Timeout for each navigation action:",(0,n.kt)("br",null),(0,n.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,n.kt)("br",null),(0,n.kt)("code",null,"config = { use: { navigationTimeout: 30000 } }"),(0,n.kt)("br",null),(0,n.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Override"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"page.goto('/', { timeout: 30000 })"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Global timeout"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"no timeout"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Global timeout for the whole test run:",(0,n.kt)("br",null),(0,n.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set in config"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"config = { globalTimeout: 60*60*1000 }"),(0,n.kt)("br",null))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"beforeAll"),"/",(0,n.kt)("inlineCode",{parentName:"td"},"afterAll")," timeout"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"30000 ms"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Timeout for the hook:",(0,n.kt)("br",null),(0,n.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set in hook"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"test.setTimeout(60000)"),(0,n.kt)("br",null))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Fixture timeout"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"no timeout"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Timeout for an individual fixture:",(0,n.kt)("br",null),(0,n.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set in fixture"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"{ scope: 'test', timeout: 30000 }"),(0,n.kt)("br",null))))),(0,n.kt)("h2",f({},{id:"test-timeout"}),"Test timeout"),(0,n.kt)("p",null,"Playwright Test enforces a timeout for each test, 30 seconds by default. Time spent by the test function, fixtures, ",(0,n.kt)("inlineCode",{parentName:"p"},"beforeEach")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"afterEach")," hooks is included in the test timeout."),(0,n.kt)("p",null,"Timed out test produces the following error:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"example.spec.ts:3:1 \u203a basic test ===========================\n\nTimeout of 30000ms exceeded.\n")),(0,n.kt)("p",null,"The same timeout value also applies to ",(0,n.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"afterAll")," hooks, but they do not share time with any test."),(0,n.kt)("h3",f({},{id:"set-test-timeout-in-the-config"}),"Set test timeout in the config"),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  timeout: 5 * 60 * 1000,\n};\nexport default config;\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  timeout: 5 * 60 * 1000,\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("p",null,"API reference: ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-timeout"}),"testConfig.timeout"),"."),(0,n.kt)("h3",f({},{id:"set-timeout-for-a-single-test"}),"Set timeout for a single test"),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/test';\n\ntest('slow test', async ({ page }) => {\n  test.slow(); // Easy way to triple the default timeout\n  // ...\n});\n\ntest('very slow test', async ({ page }) => {\n  test.setTimeout(120000);\n  // ...\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('slow test', async ({ page }) => {\n  test.slow(); // Easy way to triple the default timeout\n  // ...\n});\n\ntest('very slow test', async ({ page }) => {\n  test.setTimeout(120000);\n  // ...\n});\n")))),(0,n.kt)("p",null,"API reference: ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-test#test-set-timeout"}),"test.setTimeout(timeout)")," and ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-test#test-slow-1"}),"test.slow()"),"."),(0,n.kt)("h3",f({},{id:"change-timeout-from-a-slow-hook"}),"Change timeout from a slow hook"),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/test';\n\ntest.beforeEach(async ({ page }, testInfo) => {\n  // Extend timeout for all tests running this hook by 30 seconds.\n  testInfo.setTimeout(testInfo.timeout + 30000);\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest.beforeEach(async ({ page }, testInfo) => {\n  // Extend timeout for all tests running this hook by 30 seconds.\n  testInfo.setTimeout(testInfo.timeout + 30000);\n});\n")))),(0,n.kt)("p",null,"API reference: ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testinfo#test-info-set-timeout"}),"testInfo.setTimeout(timeout)"),"."),(0,n.kt)("h3",f({},{id:"change-timeout-for-beforeallafterall-hook"}),"Change timeout for ",(0,n.kt)("inlineCode",{parentName:"h3"},"beforeAll"),"/",(0,n.kt)("inlineCode",{parentName:"h3"},"afterAll")," hook"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"afterAll")," hooks have a separate timeout, by default equal to test timeout. You can change it separately for each hook by calling ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testinfo#test-info-set-timeout"}),"testInfo.setTimeout(timeout)")," inside the hook."),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/test';\n\ntest.beforeAll(async () => {\n  // Set timeout for this hook.\n  test.setTimeout(60000);\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest.beforeAll(async () => {\n  // Set timeout for this hook.\n  test.setTimeout(60000);\n});\n")))),(0,n.kt)("p",null,"API reference: ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testinfo#test-info-set-timeout"}),"testInfo.setTimeout(timeout)"),"."),(0,n.kt)("h2",f({},{id:"expect-timeout"}),"Expect timeout"),(0,n.kt)("p",null,"Web-first assertions like ",(0,n.kt)("inlineCode",{parentName:"p"},"expect(locator).toHaveText()")," have a separate timeout, 5 seconds by default. Assertion timeout is unrelated to the test timeout. It produces the following error:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),'example.spec.ts:3:1 \u203a basic test ===========================\n\nError: expect(received).toHaveText(expected)\n\nExpected string: "my text"\nReceived string: ""\nCall log:\n  - expect.toHaveText with timeout 5000ms\n  - waiting for selector "button"\n')),(0,n.kt)("h3",f({},{id:"set-expect-timeout-in-the-config"}),"Set expect timeout in the config"),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  expect: {\n    timeout: 10 * 1000,\n  },\n};\nexport default config;\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  expect: {\n    timeout: 10 * 1000,\n  },\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("p",null,"API reference: ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-expect"}),"testConfig.expect"),"."),(0,n.kt)("h3",f({},{id:"set-timeout-for-a-single-assertion"}),"Set timeout for a single assertion"),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await expect(page.locator('button')).toHaveText('Sign in', { timeout: 10000 });\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await expect(page.locator('button')).toHaveText('Sign in', { timeout: 10000 });\n});\n")))),(0,n.kt)("h2",f({},{id:"action-and-navigation-timeouts"}),"Action and navigation timeouts"),(0,n.kt)("p",null,"Test usually performs some actions by calling Playwright APIs, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"locator.click()"),". These actions do not have a timeout by default, but you can set one. Action that timed out produces the following error:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),'example.spec.ts:3:1 \u203a basic test ===========================\n\nlocator.click: Timeout 1000ms exceeded.\n=========================== logs ===========================\nwaiting for selector "button"\n============================================================\n')),(0,n.kt)("p",null,"Playwright also allows to set a separate timeout for navigation actions like ",(0,n.kt)("inlineCode",{parentName:"p"},"page.goto()")," because loading a page is usually slower."),(0,n.kt)("h3",f({},{id:"set-action-and-navigation-timeouts-in-the-config"}),"Set action and navigation timeouts in the config"),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  use: {\n    actionTimeout: 10 * 1000,\n    navigationTimeout: 30 * 1000,\n  },\n};\nexport default config;\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    actionTimeout: 10 * 1000,\n    navigationTimeout: 30 * 1000,\n  },\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("p",null,"API reference: ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testoptions#test-options-action-timeout"}),"testOptions.actionTimeout")," and ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testoptions#test-options-navigation-timeout"}),"testOptions.navigationTimeout"),"."),(0,n.kt)("h3",f({},{id:"set-timeout-for-a-single-action"}),"Set timeout for a single action"),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev', { timeout: 30000 });\n  await page.locator('text=Get Started').click({ timeout: 10000 });\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev', { timeout: 30000 });\n  await page.locator('text=Get Started').click({ timeout: 10000 });\n});\n")))),(0,n.kt)("h2",f({},{id:"global-timeout"}),"Global timeout"),(0,n.kt)("p",null,"Playwright Test supports a timeout for the whole test run. This prevents excess resource usage when everything went wrong. There is no default global timeout, but you can set a reasonable one in the config, for example one hour. Global timeout produces the following error:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"Running 1000 tests using 10 workers\n\n  514 skipped\n  486 passed\n  Timed out waiting 3600s for the entire test run\n")),(0,n.kt)("p",null,"You can set global timeout in the config."),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  globalTimeout: 60 * 60 * 1000,\n};\nexport default config;\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  globalTimeout: 60 * 60 * 1000,\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("p",null,"API reference: ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-global-timeout"}),"testConfig.globalTimeout"),"."),(0,n.kt)("h2",f({},{id:"fixture-timeout"}),"Fixture timeout"),(0,n.kt)("p",null,"By default, ",(0,n.kt)("a",f({parentName:"p"},{href:"./test-fixtures"}),"fixture")," shares timeout with the test. However, for slow fixtures, especially ",(0,n.kt)("a",f({parentName:"p"},{href:"./test-fixtures#worker-scoped-fixtures"}),"worker-scoped")," ones, it is convenient to have a separate timeout. This way you can keep the overall test timeout small, and give the slow fixture more time."),(0,n.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"import { test as base, expect } from '@playwright/test';\n\nconst test = base.extend<{ slowFixture: string }>({\n  slowFixture: [async ({}, use) => {\n    // ... perform a slow operation ...\n    await use('hello');\n  }, { timeout: 60000 }]\n});\n\ntest('example test', async ({ slowFixture }) => {\n  // ...\n});\n"))),(0,n.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test: base, expect } = require('@playwright/test');\n\nconst test = base.extend({\n  slowFixture: [async ({}, use) => {\n    // ... perform a slow operation ...\n    await use('hello');\n  }, { timeout: 60000 }]\n});\n\ntest('example test', async ({ slowFixture }) => {\n  // ...\n});\n")))),(0,n.kt)("p",null,"API reference: ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/next/api/class-test#test-extend"}),"test.extend(fixtures)"),"."))}v.isMDXComponent=!0}}]);