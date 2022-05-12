"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[78406],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),c=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),h=c(a),d=n,g=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return a?r.createElement(g,o(o({ref:e},p),{},{components:a})):r.createElement(g,o({ref:e},p))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},56512:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return m}});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))l.call(e,a)&&p(t,a,e[a]);if(s)for(var a of s(e))c.call(e,a)&&p(t,a,e[a]);return t};const h={id:"class-tracing",title:"Tracing"},d=void 0,g={unversionedId:"api/class-tracing",id:"version-1.21/api/class-tracing",title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened in Trace Viewer after Playwright script runs.",source:"@site/versioned_docs/version-1.21/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/docs/1.21/api/class-tracing",tags:[],version:"1.21",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"api",previous:{title:"Touchscreen",permalink:"/docs/1.21/api/class-touchscreen"},next:{title:"Video",permalink:"/docs/1.21/api/class-video"}},k={},m=[{value:"tracing.start(options)",id:"tracing-start",level:2},{value:"tracing.startChunk(options)",id:"tracing-start-chunk",level:2},{value:"tracing.stop(options)",id:"tracing-stop",level:2},{value:"tracing.stopChunk(options)",id:"tracing-stop-chunk",level:2}],f={toc:m};function b(t){var e,a=t,{components:n}=a,p=((t,e)=>{var a={};for(var r in t)l.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&s)for(var r of s(t))e.indexOf(r)<0&&c.call(t,r)&&(a[r]=t[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(e=u(u({},f),p),i(e,o({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened in ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/1.21/trace-viewer"}),"Trace Viewer")," after Playwright script runs."),(0,r.kt)("p",null,"Start recording a trace before performing actions. At the end, stop tracing and save it to a file."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const browser = await chromium.launch();\nconst context = await browser.newContext();\nawait context.tracing.start({ screenshots: true, snapshots: true });\nconst page = await context.newPage();\nawait page.goto('https://playwright.dev');\nawait context.tracing.stop({ path: 'trace.zip' });\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.21/api/class-tracing#tracing-start"}),"tracing.start([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.21/api/class-tracing#tracing-start-chunk"}),"tracing.startChunk([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.21/api/class-tracing#tracing-stop"}),"tracing.stop([options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.21/api/class-tracing#tracing-stop-chunk"}),"tracing.stopChunk([options])"))),(0,r.kt)("h2",u({},{id:"tracing-start"}),"tracing.start(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options?")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name?"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"tracesDir")," folder specified in ",(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.21/api/class-browsertype#browser-type-launch"}),"browserType.launch([options])"),".",(0,r.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"screenshots?"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,r.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snapshots?"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">"," If this option is true tracing will",(0,r.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"capture DOM snapshot on every action"),(0,r.kt)("li",{parentName:"ul"},"record network activity"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sources?"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-sources"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">"," Whether to include source files for trace actions.",(0,r.kt)("a",{href:"#tracing-start-option-sources",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title?"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-title"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Trace name to be shown in the Trace Viewer.",(0,r.kt)("a",{href:"#tracing-start-option-title",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,r.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Start tracing."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"await context.tracing.start({ screenshots: true, snapshots: true });\nconst page = await context.newPage();\nawait page.goto('https://playwright.dev');\nawait context.tracing.stop({ path: 'trace.zip' });\n")),(0,r.kt)("h2",u({},{id:"tracing-start-chunk"}),"tracing.startChunk(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options?")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title?"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-option-title"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Trace name to be shown in the Trace Viewer.",(0,r.kt)("a",{href:"#tracing-start-chunk-option-title",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-return"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,r.kt)("a",{href:"#tracing-start-chunk-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Start a new trace chunk. If you'd like to record multiple traces on the same ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/1.21/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),", use ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/1.21/api/class-tracing#tracing-start"}),"tracing.start([options])")," once, and then create multiple trace chunks with ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/1.21/api/class-tracing#tracing-start-chunk"}),"tracing.startChunk([options])")," and ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/1.21/api/class-tracing#tracing-stop-chunk"}),"tracing.stopChunk([options])"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"await context.tracing.start({ screenshots: true, snapshots: true });\nconst page = await context.newPage();\nawait page.goto('https://playwright.dev');\n\nawait context.tracing.startChunk();\nawait page.click('text=Get Started');\n// Everything between startChunk and stopChunk will be recorded in the trace.\nawait context.tracing.stopChunk({ path: 'trace1.zip' });\n\nawait context.tracing.startChunk();\nawait page.goto('http://example.com');\n// Save a second trace file with different actions.\nawait context.tracing.stopChunk({ path: 'trace2.zip' });\n")),(0,r.kt)("h2",u({},{id:"tracing-stop"}),"tracing.stop(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options?")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path?"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Export trace into the file with the given path.",(0,r.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,r.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Stop tracing."),(0,r.kt)("h2",u({},{id:"tracing-stop-chunk"}),"tracing.stopChunk(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options?")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path?"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-option-path"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Export trace collected since the last ",(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.21/api/class-tracing#tracing-start-chunk"}),"tracing.startChunk([options])")," call into the file with the given path.",(0,r.kt)("a",{href:"#tracing-stop-chunk-option-path",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-return"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,r.kt)("a",{href:"#tracing-stop-chunk-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Stop the trace chunk. See ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/1.21/api/class-tracing#tracing-start-chunk"}),"tracing.startChunk([options])")," for more details about multiple trace chunks."))}b.isMDXComponent=!0}}]);