"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5123],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return w}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),w=i,y=u["".concat(s,".").concat(w)]||u[w]||h[w]||l;return r?a.createElement(y,n(n({ref:t},c),{},{components:r})):a.createElement(y,n({ref:t},c))}));function w(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,n=new Array(l);n[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var p=2;p<l;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1908:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return w},default:function(){return f},frontMatter:function(){return u},metadata:function(){return y},toc:function(){return d}});var a=r(3905),i=Object.defineProperty,l=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&c(e,r,t[r]);return e};const u={id:"class-playwright",title:"Playwright"},w=void 0,y={unversionedId:"api/class-playwright",id:"version-stable/api/class-playwright",title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/versioned_docs/version-stable/api/class-playwright.mdx",sourceDirName:"api",slug:"/api/class-playwright",permalink:"/java/docs/api/class-playwright",tags:[],version:"stable",frontMatter:{id:"class-playwright",title:"Playwright"},sidebar:"api",next:{title:"APIRequest",permalink:"/java/docs/api/class-apirequest"}},g={},d=[{value:"Playwright.close()",id:"playwright-close",level:2},{value:"Playwright.create(options)",id:"playwright-create",level:2},{value:"Playwright.chromium()",id:"playwright-chromium",level:2},{value:"Playwright.firefox()",id:"playwright-firefox",level:2},{value:"Playwright.request()",id:"playwright-request",level:2},{value:"Playwright.selectors()",id:"playwright-selectors",level:2},{value:"Playwright.webkit()",id:"playwright-webkit",level:2}],m={toc:d};function f(e){var t,r=e,{components:i}=r,c=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=h(h({},m),c),l(t,n({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.navigate("http://example.com");\n      // other actions...\n      browser.close();\n    }\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright#playwright-close"}),"Playwright.close()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright#playwright-create"}),"Playwright.create([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright#playwright-chromium"}),"Playwright.chromium()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright#playwright-firefox"}),"Playwright.firefox()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright#playwright-request"}),"Playwright.request()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright#playwright-selectors"}),"Playwright.selectors()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright#playwright-webkit"}),"Playwright.webkit()"))),(0,a.kt)("h2",h({},{id:"playwright-close"}),"Playwright.close()"),(0,a.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-close-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,a.kt)("a",{href:"#playwright-close-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Terminates this instance of Playwright, will also close all created browsers if they are still running."),(0,a.kt)("h2",h({},{id:"playwright-create"}),"Playwright.create(","[options]",")"),(0,a.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.10"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("inlineCode",{parentName:"li"},"Playwright.CreateOptions"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setEnv"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-create-option-env"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"}),"Map"),"<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),", ",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",">"," Additional environment variables that will be passed to the driver process. By default driver process inherits environment variables of the Playwright process. ",(0,a.kt)("font",{size:"2"},"Added in: v1.13"),(0,a.kt)("a",{href:"#playwright-create-option-env",class:"list-anchor"},"#")))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-create-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright",title:"Playwright"}),"Playwright"),">",(0,a.kt)("a",{href:"#playwright-create-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Launches new Playwright driver process and connects to it. ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/api/class-playwright#playwright-close"}),"Playwright.close()")," should be called when the instance is no longer needed."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-java"}),'Playwright playwright = Playwright.create()) {\nBrowser browser = playwright.webkit().launch();\nPage page = browser.newPage();\npage.navigate("https://www.w3.org/");\nplaywright.close();\n')),(0,a.kt)("h2",h({},{id:"playwright-chromium"}),"Playwright.chromium()"),(0,a.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),(0,a.kt)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/api/class-browser",title:"Browser"}),"Browser"),"."),(0,a.kt)("h2",h({},{id:"playwright-firefox"}),"Playwright.firefox()"),(0,a.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),(0,a.kt)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/api/class-browser",title:"Browser"}),"Browser"),"."),(0,a.kt)("h2",h({},{id:"playwright-request"}),"Playwright.request()"),(0,a.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.16"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-apirequest",title:"APIRequest"}),"APIRequest"),">")),(0,a.kt)("p",null,"Exposes API that can be used for the Web API testing."),(0,a.kt)("h2",h({},{id:"playwright-selectors"}),"Playwright.selectors()"),(0,a.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-selectors",title:"Selectors"}),"Selectors"),">")),(0,a.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/selectors"}),"Working with selectors")," for more information."),(0,a.kt)("h2",h({},{id:"playwright-webkit"}),"Playwright.webkit()"),(0,a.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),(0,a.kt)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/api/class-browser",title:"Browser"}),"Browser"),"."))}f.isMDXComponent=!0}}]);