"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7304],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3811:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7294),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function c({children:e,hidden:n,className:t}){return r.createElement("div",((e,n)=>{for(var t in n||(n={}))i.call(n,t)&&l(e,t,n[t]);if(o)for(var t of o(n))s.call(n,t)&&l(e,t,n[t]);return e})({role:"tabpanel"},{hidden:n,className:t}),e)}},3824:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(7294),a=t(4939),o=t(9670),i=t(6010),s="tabItem_LplD",l=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,h=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&f(e,t,n[t]);if(u)for(var t of u(n))m.call(n,t)&&f(e,t,n[t]);return e};function y(e){var n,t,a;const{lazy:l,block:u,defaultValue:d,values:m,groupId:f,className:y}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=m?m:g.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),v=(0,o.lx)(b,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===d?d:null!=(a=null!=d?d:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?a:null==(t=g[0])?void 0:t.props.value;if(null!==x&&!b.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:_}=(0,o.UB)(),[k,O]=(0,r.useState)(x),N=[],{blockElementScrollPositionUntilNextRender:j}=(0,o.o5)();if(null!=f){const e=w[f];null!=e&&e!==k&&b.some((n=>n.value===e))&&O(e)}const P=e=>{const n=e.currentTarget,t=N.indexOf(n),r=b[t].value;r!==k&&(j(n),O(r),null!=f&&_(f,r))},E=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==n||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},y)},b.map((({value:e,label:n,attributes:t})=>{return r.createElement("li",(a=h({role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,key:e,ref:e=>N.push(e),onKeyDown:E,onFocus:P,onClick:P},t),o={className:(0,i.Z)("tabs__item",s,null==t?void 0:t.className,{"tabs__item--active":k===e})},c(a,p(o))),null!=n?n:e);var a,o}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function g(e){const n=(0,a.Z)();return r.createElement(y,h({key:String(n)},e))}},5262:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return h},default:function(){return x},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return b}});var r=t(3905),a=t(3824),o=t(3811),i=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&d(e,t,n[t]);if(c)for(var t of c(n))u.call(n,t)&&d(e,t,n[t]);return e};const f={id:"chrome-extensions",title:"Chrome Extensions"},h=void 0,y={unversionedId:"chrome-extensions",id:"version-stable/chrome-extensions",title:"Chrome Extensions",description:"Extensions only work in Chrome / Chromium in non-headless mode, launched with a persistent context.",source:"@site/versioned_docs/version-stable/chrome-extensions.mdx",sourceDirName:".",slug:"/chrome-extensions",permalink:"/python/docs/chrome-extensions",tags:[],version:"stable",frontMatter:{id:"chrome-extensions",title:"Chrome Extensions"},sidebar:"docs",previous:{title:"Browser Contexts",permalink:"/python/docs/browser-contexts"},next:{title:"Command line tools",permalink:"/python/docs/cli"}},g={},b=[{value:"Testing",id:"testing",level:2}],v={toc:b};function x(e){var n,t=e,{components:i}=t,d=((e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=m(m({},v),d),s(n,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("div",m({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",m({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",m({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",m({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",m({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Extensions only work in Chrome / Chromium in non-headless mode, launched with a persistent context."))),(0,r.kt)("p",null,"The following is code for getting a handle to the ",(0,r.kt)("a",m({parentName:"p"},{href:"https://developer.chrome.com/extensions/background_pages"}),"background page")," of a ",(0,r.kt)("a",m({parentName:"p"},{href:"https://developer.chrome.com/docs/extensions/mv2/"}),"Manifest v2")," extension whose source is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"./my-extension"),":"),(0,r.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\npath_to_extension = "./my-extension"\nuser_data_dir = "/tmp/test-user-data-dir"\n\n\ndef run(playwright):\n    context = playwright.chromium.launch_persistent_context(\n        user_data_dir,\n        headless=False,\n        args=[\n            f"--disable-extensions-except={path_to_extension}",\n            f"--load-extension={path_to_extension}",\n        ],\n    )\n    if len(context.background_pages) == 0:\n        background_page = context.wait_for_event(\'backgroundpage\')\n    else:\n        background_page = context.background_pages[0]\n\n    # Test the background page as you would any other page.\n    context.close()\n\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),(0,r.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright\n\npath_to_extension = "./my-extension"\nuser_data_dir = "/tmp/test-user-data-dir"\n\n\nasync def run(playwright):\n    context = await playwright.chromium.launch_persistent_context(\n        user_data_dir,\n        headless=False,\n        args=[\n            f"--disable-extensions-except={path_to_extension}",\n            f"--load-extension={path_to_extension}",\n        ],\n    )\n\n    if len(context.background_pages) == 0:\n        background_page = await context.wait_for_event(\'backgroundpage\')\n    else:\n        background_page = context.background_pages[0]\n\n    # Test the background page as you would any other page.\n    await context.close()\n\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\n\n\nasyncio.run(main())\n')))),(0,r.kt)("h2",m({},{id:"testing"}),"Testing"),(0,r.kt)("p",null,"To have the extension loaded when running tests you can use a test fixture to set the context. You can also dynamically retrieve the extension id and use it that to load and test the popup page for example."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# conftest.py\nfrom typing import Generator\nfrom pathlib import Path\nfrom playwright.sync_api import Playwright, BrowserContext\nimport pytest\n\n\n@pytest.fixture()\ndef context(playwright: Playwright) -> Generator[BrowserContext, None, None]:\n    path_to_extension = Path(__file__).parent.joinpath("my-extension")\n    context = playwright.chromium.launch_persistent_context(\n        "",\n        headless=False,\n        args=[\n            f"--disable-extensions-except={path_to_extension}",\n            f"--load-extension={path_to_extension}",\n        ],\n    )\n    yield context\n    context.close()\n\n\n@pytest.fixture()\ndef extension_id(context) -> Generator[str, None, None]:\n    # for manifest v2:\n    # background = context.background_pages[0]\n    # if not background:\n    #     background = context.wait_for_event("backgroundpage")\n\n    # for manifest v3:\n    background = context.service_workers[0]\n    if not background:\n        background = context.wait_for_event("serviceworker")\n\n    extension_id = background.url.split("/")[2]\n    yield extension_id\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# test_foo.py\nfrom playwright.sync_api import expect, Page\n\n\ndef test_example_test(page: Page) -> None:\n    page.goto("https://example.com")\n    expect(page.locator("body")).to_contain_text("Changed by my-extension")\n\n\ndef test_popup_page(page: Page, extension_id: str) -> None:\n    page.goto(f"chrome-extension://{extension_id}/popup.html")\n    expect(page.locator("body")).to_have_text("my-extension popup")\n')))}x.isMDXComponent=!0}}]);