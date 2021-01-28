(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(209)),o=a(212),p=a(213),l={id:"multi-pages",title:"Multi-page scenarios"},i={unversionedId:"multi-pages",id:"version-1.8.0/multi-pages",isDocsHomePage:!1,title:"Multi-page scenarios",description:"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window.",source:"@site/versioned_docs/version-1.8.0/multi-pages.mdx",slug:"/multi-pages",permalink:"/python/docs/multi-pages",version:"1.8.0",sidebar:"version-1.8.0/docs",previous:{title:"Installation",permalink:"/python/docs/installation"},next:{title:"Navigations",permalink:"/python/docs/navigations"}},s=[{value:"Multiple contexts",id:"multiple-contexts",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Multiple pages",id:"multiple-pages",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Handling new pages",id:"handling-new-pages",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Handling popups",id:"handling-popups",children:[{value:"API reference",id:"api-reference-3",children:[]}]}],u={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#multiple-contexts"}),"Multiple contexts")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#multiple-pages"}),"Multiple pages")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#handling-new-pages"}),"Handling new pages")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#handling-popups"}),"Handling popups"))),Object(c.b)("h2",{id:"multiple-contexts"},"Multiple contexts"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/core-concepts#browser-contexts"}),"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),Object(c.b)(o.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(p.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    # create a chromium browser instance\n    chromium = playwright.chromium\n    browser = chromium.launch()\n\n    # create two isolated browser contexts\n    user_context = browser.new_context()\n    admin_context = browser.new_context()\n\n    # load user and admin cookies\n    user_context.add_cookies(user_cookies)\n    admin_context.add_cookies(admin_cookies)\n\nwith sync_playwright() as playwright:\n    run(playwright)\n"))),Object(c.b)(p.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    # create a chromium browser instance\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n\n    # create two isolated browser contexts\n    user_context = await browser.new_context()\n    admin_context = await browser.new_context()\n\n    # load user and admin cookies\n    await user_context.add_cookies(user_cookies)\n    await admin_context.add_cookies(admin_cookies)\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n")))),Object(c.b)("h3",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextadd_cookiescookies"}),"browser_context.add_cookies(cookies)"))),Object(c.b)("h2",{id:"multiple-pages"},"Multiple pages"),Object(c.b)("p",null,"Each browser context can host multiple pages (tabs)."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),Object(c.b)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),Object(c.b)(o.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(p.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# create two pages\npage_one = context.new_page()\npage_two = context.new_page()\n\n# get pages of a brower context\nall_pages = context.pages()\n"))),Object(c.b)(p.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# create two pages\npage_one = await context.new_page()\npage_two = await context.new_page()\n\n# get pages of a brower context\nall_pages = context.pages()\n")))),Object(c.b)("h3",{id:"api-reference-1"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page",title:"Page"}),"Page")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextnew_page"}),"browser_context.new_page()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextpages"}),"browser_context.pages"))),Object(c.b)("h2",{id:"handling-new-pages"},"Handling new pages"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",Object(c.b)("inlineCode",{parentName:"p"},'target="_blank"')," links."),Object(c.b)(o.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(p.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Get page after a specific action (e.g. clicking a link)\nwith context.expect_page() as new_page_info:\n    page.click('a[target=\"_blank\"]') # Opens a new tab\nnew_page = new_page_info.value\n\nnew_page.wait_for_load_state()\nprint(new_page.title())\n"))),Object(c.b)(p.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Get page after a specific action (e.g. clicking a link)\nasync with context.expect_page() as new_page_info:\n    await page.click('a[target=\"_blank\"]') # Opens a new tab\nnew_page = await new_page_info.value\n\nawait new_page.wait_for_load_state()\nprint(await new_page.title())\n")))),Object(c.b)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),Object(c.b)(o.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(p.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Get all new pages (including popups) in the context\ndef handle_page(page):\n    page.wait_for_load_state()\n    print(page.title())\n\ncontext.on("page", handle_page)\n'))),Object(c.b)(p.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Get all new pages (including popups) in the context\nasync def handle_page(page):\n    await page.wait_for_load_state()\n    print(await page.title())\n\ncontext.on("page", handle_page)\n')))),Object(c.b)("h3",{id:"api-reference-2"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-browsercontext#browser_contextonpage"}),'browser_context.on("page")'))),Object(c.b)("h2",{id:"handling-popups"},"Handling popups"),Object(c.b)("p",null,"If the page opens a pop-up, you can get a reference to it by listening to the ",Object(c.b)("inlineCode",{parentName:"p"},"popup")," event on the page."),Object(c.b)("p",null,"This event is emitted in addition to the ",Object(c.b)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),Object(c.b)(o.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(p.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Get popup after a specific action (e.g., click)\nwith page.expect_popup() as popup_info:\n    page.click("#open")\npopup = popup_info.value\n\npopup.wait_for_load_state()\nprint(popup.title())\n'))),Object(c.b)(p.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Get popup after a specific action (e.g., click)\nasync with page.expect_popup() as popup_info:\n    await page.click("#open")\npopup = await popup_info.value\n\nawait popup.wait_for_load_state()\nprint(await popup.title())\n')))),Object(c.b)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),Object(c.b)(o.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(p.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Get all popups when they open\ndef handle_popup(popup):\n    popup.wait_for_load_state()\n    print(popup.title())\n\npage.on("popup", handle_popup)\n'))),Object(c.b)(p.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Get all popups when they open\nasync def handle_popup(popup):\n    await popup.wait_for_load_state()\n    print(await popup.title())\n\npage.on("popup", handle_popup)\n')))),Object(c.b)("h3",{id:"api-reference-3"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/api/class-page#pageonpopup"}),'page.on("popup")'))))}b.isMDXComponent=!0},208:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,g=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return a?r.a.createElement(g,p(p({ref:t},i),{},{components:a})):r.a.createElement(g,p({ref:t},i))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<c;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";var n=a(0),r=a(211);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},211:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},212:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(210),o=a(208),p=a(55),l=a.n(p),i=37,s=39;t.a=function(e){var t=e.lazy,a=e.block,p=e.defaultValue,u=e.values,b=e.groupId,d=e.className,g=Object(c.a)(),m=g.tabGroupChoices,f=g.setTabGroupChoices,y=Object(n.useState)(p),w=y[0],O=y[1],h=n.Children.toArray(e.children);if(null!=b){var j=m[b];null!=j&&j!==w&&u.some((function(e){return e.value===j}))&&O(j)}var v=function(e){O(e),null!=b&&f(b,e)},_=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(_,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(n.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},213:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);