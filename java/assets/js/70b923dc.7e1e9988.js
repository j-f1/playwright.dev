"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[15962],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return w}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),w=a,d=m["".concat(s,".").concat(w)]||m[w]||u[w]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function w(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23336:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return w},default:function(){return v},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return g}});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e};const m={id:"emulation",title:"Emulation"},w=void 0,d={unversionedId:"emulation",id:"version-1.22/emulation",title:"Emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/versioned_docs/version-1.22/emulation.mdx",sourceDirName:".",slug:"/emulation",permalink:"/java/docs/emulation",tags:[],version:"1.22",frontMatter:{id:"emulation",title:"Emulation"},sidebar:"docs",previous:{title:"Downloads",permalink:"/java/docs/downloads"},next:{title:"Evaluating JavaScript",permalink:"/java/docs/evaluating"}},f={},g=[{value:"User agent",id:"user-agent",level:2},{value:"API reference",id:"api-reference",level:3},{value:"Viewport",id:"viewport",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Locale &amp; timezone",id:"locale--timezone",level:2},{value:"API reference",id:"api-reference-2",level:3},{value:"Permissions",id:"permissions",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"Geolocation",id:"geolocation",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Color scheme and media",id:"color-scheme-and-media",level:2},{value:"API reference",id:"api-reference-5",level:3}],k={toc:g};function v(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},k),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),(0,n.kt)("li",{parentName:"ul"},"locale, timezone"),(0,n.kt)("li",{parentName:"ul"},"color scheme"),(0,n.kt)("li",{parentName:"ul"},"geolocation")),(0,n.kt)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#user-agent"}),"User agent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#viewport"}),"Viewport")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#locale--timezone"}),"Locale & timezone")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#permissions"}),"Permissions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#geolocation"}),"Geolocation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#color-scheme-and-media"}),"Color scheme and media"))),(0,n.kt)("br",null),(0,n.kt)("h2",u({},{id:"user-agent"}),"User agent"),(0,n.kt)("p",null,"All pages created in the context above will share the user agent specified:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setUserAgent("My user agent"));\n')),(0,n.kt)("h3",u({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-browser#browser-new-context"}),"Browser.newContext([options])"))),(0,n.kt)("br",null),(0,n.kt)("h2",u({},{id:"viewport"}),"Viewport"),(0,n.kt)("p",null,"Create a context with custom viewport size:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),"// Create context with given viewport\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setViewportSize(1280, 1024));\n\n// Resize viewport for individual page\npage.setViewportSize(1600, 1200);\n\n// Emulate high-DPI\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setViewportSize(2560, 1440)\n  .setDeviceScaleFactor(2);\n")),(0,n.kt)("h3",u({},{id:"api-reference-1"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-browser#browser-new-context"}),"Browser.newContext([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-page#page-set-viewport-size"}),"Page.setViewportSize(width, height)"))),(0,n.kt)("br",null),(0,n.kt)("h2",u({},{id:"locale--timezone"}),"Locale & timezone"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// Emulate locale and time\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setLocale("de-DE")\n  .setTimezoneId("Europe/Berlin"));\n')),(0,n.kt)("h3",u({},{id:"api-reference-2"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-browser#browser-new-context"}),"Browser.newContext([options])"))),(0,n.kt)("br",null),(0,n.kt)("h2",u({},{id:"permissions"}),"Permissions"),(0,n.kt)("p",null,"Allow all pages in the context to show system notifications:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setPermissions(Arrays.asList("notifications"));\n')),(0,n.kt)("p",null,"Grant all pages in the existing context access to current location:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),'context.grantPermissions(Arrays.asList("geolocation"));\n')),(0,n.kt)("p",null,"Grant notifications access from a specific domain:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),'context.grantPermissions(Arrays.asList("notifications"),\n  new BrowserContext.GrantPermissionsOptions().setOrigin("https://skype.com"));\n')),(0,n.kt)("p",null,"Revoke all permissions:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),"context.clearPermissions();\n")),(0,n.kt)("h3",u({},{id:"api-reference-3"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-browser#browser-new-context"}),"Browser.newContext([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browser-context-grant-permissions"}),"BrowserContext.grantPermissions(permissions[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browser-context-clear-permissions"}),"BrowserContext.clearPermissions()"))),(0,n.kt)("br",null),(0,n.kt)("h2",u({},{id:"geolocation"}),"Geolocation"),(0,n.kt)("p",null,"Create a context with ",(0,n.kt)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setGeolocation(48.858455, 2.294474)\n  .setPermissions(Arrays.asList("geolocation")));\n')),(0,n.kt)("p",null,"Change the location later:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),"context.setGeolocation(new Geolocation(29.979097, 31.134256));\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),(0,n.kt)("h3",u({},{id:"api-reference-4"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-browser#browser-new-context"}),"Browser.newContext([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browser-context-set-geolocation"}),"BrowserContext.setGeolocation(geolocation)"))),(0,n.kt)("br",null),(0,n.kt)("h2",u({},{id:"color-scheme-and-media"}),"Color scheme and media"),(0,n.kt)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// Create context with dark mode\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setColorScheme(ColorScheme.DARK)); // or "light"\n\n// Create page with dark mode\nPage page = browser.newPage(new Browser.NewPageOptions()\n  .setColorScheme(ColorScheme.DARK)); // or "light"\n\n// Change color scheme for the page\npage.emulateMedia(new Page.EmulateMediaOptions().setColorScheme(ColorScheme.DARK));\n\n// Change media for page\npage.emulateMedia(new Page.EmulateMediaOptions().setMedia(Media.PRINT));\n')),(0,n.kt)("h3",u({},{id:"api-reference-5"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-browser#browser-new-context"}),"Browser.newContext([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-page#page-emulate-media"}),"Page.emulateMedia([options])"))))}v.isMDXComponent=!0}}]);