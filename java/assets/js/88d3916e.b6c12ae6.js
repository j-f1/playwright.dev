"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[95931],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=r,f=g["".concat(i,".").concat(d)]||g[d]||u[d]||p;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<p;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},56502:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return k}});var a=n(3905),r=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const g={id:"pages",title:"Pages"},d=void 0,f={unversionedId:"pages",id:"version-1.18/pages",title:"Pages",description:"- Pages",source:"@site/versioned_docs/version-1.18/pages.mdx",sourceDirName:".",slug:"/pages",permalink:"/java/docs/1.18/pages",tags:[],version:"1.18",frontMatter:{id:"pages",title:"Pages"},sidebar:"version-1.18/docs",previous:{title:"Network",permalink:"/java/docs/1.18/network"},next:{title:"Page Object Models",permalink:"/java/docs/1.18/pom"}},m={},k=[{value:"Pages",id:"pages",level:2},{value:"Multiple pages",id:"multiple-pages",level:2},{value:"Handling new pages",id:"handling-new-pages",level:2},{value:"Handling popups",id:"handling-popups",level:2}],v={toc:k};function w(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},v),c),p(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#pages"}),"Pages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#multiple-pages"}),"Multiple pages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#handling-new-pages"}),"Handling new pages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#handling-popups"}),"Handling popups"))),(0,a.kt)("h2",u({},{id:"pages"}),"Pages"),(0,a.kt)("p",null,"Each ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/1.18/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," can have multiple pages. A ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/1.18/api/class-page",title:"Page"}),"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// Create a page.\nPage page = context.newPage();\n\n// Navigate explicitly, similar to entering a URL in the browser.\npage.navigate("http://example.com");\n// Fill an input.\npage.locator("#search").fill("query");\n\n// Navigate implicitly by clicking a link.\npage.locator("#submit").click();\n// Expect a new url.\nSystem.out.println(page.url());\n')),(0,a.kt)("h2",u({},{id:"multiple-pages"}),"Multiple pages"),(0,a.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,a.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),"// Create two pages\nPage pageOne = context.newPage();\nPage pageTwo = context.newPage();\n\n// Get pages of a browser context\nList<Page> allPages = context.pages();\n")),(0,a.kt)("h2",u({},{id:"handling-new-pages"}),"Handling new pages"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,a.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),"// Get page after a specific action (e.g. clicking a link)\nPage newPage = context.waitForPage(() -> {\n  page.click(\"a[target='_blank']\"); // Opens a new tab\n});\nnewPage.waitForLoadState();\nSystem.out.println(newPage.title());\n")),(0,a.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),"// Get all new pages (including popups) in the context\ncontext.onPage(page -> {\n  page.waitForLoadState();\n  System.out.println(page.title());\n});\n")),(0,a.kt)("h2",u({},{id:"handling-popups"}),"Handling popups"),(0,a.kt)("p",null,"If the page opens a pop-up (e.g. pages opened by ",(0,a.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links), you can get a reference to it by listening to the ",(0,a.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,a.kt)("p",null,"This event is emitted in addition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// Get popup after a specific action (e.g., click)\nPage popup = page.waitForPopup(() -> {\n  page.click("#open");\n});\npopup.waitForLoadState();\nSystem.out.println(popup.title());\n')),(0,a.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),"// Get all popups when they open\npage.onPopup(popup -> {\n  popup.waitForLoadState();\n  System.out.println(popup.title());\n});\n")))}w.isMDXComponent=!0}}]);