"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[61952],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),u=c(r),h=i,d=u["".concat(s,".").concat(h)]||u[h]||f[h]||l;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=u;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n.mdxType="string"==typeof e?e:i,o[1]=n;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84778:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return b}});var a=r(3905),i=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(n)for(var r of n(t))c.call(t,r)&&p(e,r,t[r]);return e};const u={id:"class-filechooser",title:"FileChooser"},h=void 0,d={unversionedId:"api/class-filechooser",id:"version-1.21/api/class-filechooser",title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [page.on('filechooser') event.",source:"@site/versioned_docs/version-1.21/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/docs/1.21/api/class-filechooser",tags:[],version:"1.21",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"api",previous:{title:"ElementHandle",permalink:"/docs/1.21/api/class-elementhandle"},next:{title:"Frame",permalink:"/docs/1.21/api/class-frame"}},m={},b=[{value:"fileChooser.element()",id:"file-chooser-element",level:2},{value:"fileChooser.isMultiple()",id:"file-chooser-is-multiple",level:2},{value:"fileChooser.page()",id:"file-chooser-page",level:2},{value:"fileChooser.setFiles(files, options)",id:"file-chooser-set-files",level:2}],k={toc:b};function g(e){var t,r=e,{components:i}=r,p=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&n)for(var a of n(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=f(f({},k),p),l(t,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("a",f({parentName:"p"},{href:"/docs/1.21/api/class-filechooser",title:"FileChooser"}),"FileChooser")," objects are dispatched by the page in the ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/1.21/api/class-page#page-event-file-chooser"}),"page.on('filechooser')")," event."),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// Note that Promise.all prevents a race condition\n// between clicking and waiting for the file chooser.\nconst [fileChooser] = await Promise.all([\n  // It is important to call waitForEvent before click to set up waiting.\n  page.waitForEvent('filechooser'),\n  // Opens the file chooser.\n  page.locator('text=Upload').click(),\n]);\nawait fileChooser.setFiles('myfile.pdf');\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"/docs/1.21/api/class-filechooser#file-chooser-element"}),"fileChooser.element()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"/docs/1.21/api/class-filechooser#file-chooser-is-multiple"}),"fileChooser.isMultiple()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"/docs/1.21/api/class-filechooser#file-chooser-page"}),"fileChooser.page()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"/docs/1.21/api/class-filechooser#file-chooser-set-files"}),"fileChooser.setFiles(files[, options])"))),(0,a.kt)("h2",f({},{id:"file-chooser-element"}),"fileChooser.element()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-element-return"})," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"/docs/1.21/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">",(0,a.kt)("a",{href:"#file-chooser-element-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns input element associated with this file chooser."),(0,a.kt)("h2",f({},{id:"file-chooser-is-multiple"}),"fileChooser.isMultiple()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-is-multiple-return"})," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">",(0,a.kt)("a",{href:"#file-chooser-is-multiple-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,a.kt)("h2",f({},{id:"file-chooser-page"}),"fileChooser.page()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-page-return"})," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"/docs/1.21/api/class-page",title:"Page"}),"Page"),">",(0,a.kt)("a",{href:"#file-chooser-page-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns page this file chooser belongs to."),(0,a.kt)("h2",f({},{id:"file-chooser-set-files"}),"fileChooser.setFiles(files","[, options]",")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"files"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-files"})," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,a.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,a.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">|",(0,a.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"|",(0,a.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,a.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",">",(0,a.kt)("a",{href:"#file-chooser-set-files-option-files",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," File name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mimeType")," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," File type"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"buffer")," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),">"," File content"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options?")," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"noWaitAfter?"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-no-wait-after"})," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">"," Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".",(0,a.kt)("a",{href:"#file-chooser-set-files-option-no-wait-after",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout?"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-option-timeout"})," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,a.kt)("a",f({parentName:"li"},{href:"/docs/1.21/api/class-browsercontext#browser-context-set-default-timeout"}),"browserContext.setDefaultTimeout(timeout)")," or ",(0,a.kt)("a",f({parentName:"li"},{href:"/docs/1.21/api/class-page#page-set-default-timeout"}),"page.setDefaultTimeout(timeout)")," methods.",(0,a.kt)("a",{href:"#file-chooser-set-files-option-timeout",class:"list-anchor"},"#")))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"file-chooser-set-files-return"})," ","<",(0,a.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,a.kt)("a",f({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,a.kt)("a",{href:"#file-chooser-set-files-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,a.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}g.isMDXComponent=!0}}]);