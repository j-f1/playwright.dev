"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2666],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||n;return a?i.createElement(m,l(l({ref:t},d),{},{components:a})):i.createElement(m,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3259:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return v}});var i=a(3905),r=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&d(e,a,t[a]);return e};const u={id:"class-dialog",title:"Dialog"},g=void 0,m={unversionedId:"api/class-dialog",id:"api/class-dialog",title:"Dialog",description:"Dialog] objects are dispatched by page via the [page.on('dialog') event.",source:"@site/docs/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/docs/next/api/class-dialog",tags:[],version:"current",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"api",previous:{title:"Coverage",permalink:"/docs/next/api/class-coverage"},next:{title:"Download",permalink:"/docs/next/api/class-download"}},f={},v=[{value:"dialog.accept(promptText)",id:"dialog-accept",level:2},{value:"dialog.defaultValue()",id:"dialog-default-value",level:2},{value:"dialog.dismiss()",id:"dialog-dismiss",level:2},{value:"dialog.message()",id:"dialog-message",level:2},{value:"dialog.type()",id:"dialog-type",level:2}],h={toc:v};function k(e){var t,a=e,{components:r}=a,d=((e,t)=>{var a={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&p.call(e,i)&&(a[i]=e[i]);return a})(a,["components"]);return(0,i.kt)("wrapper",(t=c(c({},h),d),n(t,l({components:r,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,(0,i.kt)("a",c({parentName:"p"},{href:"/docs/next/api/class-dialog",title:"Dialog"}),"Dialog")," objects are dispatched by page via the ",(0,i.kt)("a",c({parentName:"p"},{href:"/docs/next/api/class-page#page-event-dialog"}),"page.on('dialog')")," event."),(0,i.kt)("p",null,"An example of using ",(0,i.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",c({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n  });\n  await page.evaluate(() => alert('1'));\n  await browser.close();\n})();\n")),(0,i.kt)("div",c({},{className:"admonition admonition-note alert alert--secondary"}),(0,i.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,i.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,i.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,i.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,i.kt)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",(0,i.kt)("a",c({parentName:"p"},{href:"/docs/next/api/class-page#page-event-dialog"}),"page.on('dialog')")," listener. When listener is present, it ",(0,i.kt)("strong",{parentName:"p"},"must")," either ",(0,i.kt)("a",c({parentName:"p"},{href:"/docs/next/api/class-dialog#dialog-accept"}),"dialog.accept([promptText])")," or ",(0,i.kt)("a",c({parentName:"p"},{href:"/docs/next/api/class-dialog#dialog-dismiss"}),"dialog.dismiss()")," the dialog - otherwise the page will ",(0,i.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"}),"freeze")," waiting for the dialog, and actions like click will never finish."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-dialog#dialog-accept"}),"dialog.accept([promptText])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-dialog#dialog-default-value"}),"dialog.defaultValue()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-dialog#dialog-dismiss"}),"dialog.dismiss()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-dialog#dialog-message"}),"dialog.message()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",c({parentName:"li"},{href:"/docs/next/api/class-dialog#dialog-type"}),"dialog.type()"))),(0,i.kt)("h2",c({},{id:"dialog-accept"}),"dialog.accept(","[promptText]",")"),(0,i.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"promptText?"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-option-prompt-text"})," ","<",(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," A text to enter in prompt. Does not cause any effects if the dialog's ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional.",(0,i.kt)("a",{href:"#dialog-accept-option-prompt-text",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-return"})," ","<",(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,i.kt)("a",{href:"#dialog-accept-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns when the dialog has been accepted."),(0,i.kt)("h2",c({},{id:"dialog-default-value"}),"dialog.defaultValue()"),(0,i.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-default-value-return"})," ","<",(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,i.kt)("a",{href:"#dialog-default-value-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),(0,i.kt)("h2",c({},{id:"dialog-dismiss"}),"dialog.dismiss()"),(0,i.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-dismiss-return"})," ","<",(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,i.kt)("a",{href:"#dialog-dismiss-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns when the dialog has been dismissed."),(0,i.kt)("h2",c({},{id:"dialog-message"}),"dialog.message()"),(0,i.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-message-return"})," ","<",(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,i.kt)("a",{href:"#dialog-message-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"A message displayed in the dialog."),(0,i.kt)("h2",c({},{id:"dialog-type"}),"dialog.type()"),(0,i.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-type-return"})," ","<",(0,i.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,i.kt)("a",{href:"#dialog-type-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Returns dialog's type, can be one of ",(0,i.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeunload"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"prompt"),"."))}k.isMDXComponent=!0}}]);