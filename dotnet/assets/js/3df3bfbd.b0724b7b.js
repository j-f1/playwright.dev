"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1343],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),f=l(r),u=n,d=f["".concat(s,".").concat(u)]||f[u]||p[u]||o;return r?a.createElement(d,i(i({ref:t},m),{},{components:r})):a.createElement(d,i({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2893:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return b}});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&m(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&m(e,r,t[r]);return e};const f={id:"frames",title:"Frames"},u=void 0,d={unversionedId:"frames",id:"version-stable/frames",title:"Frames",description:"- Frames",source:"@site/versioned_docs/version-stable/frames.mdx",sourceDirName:".",slug:"/frames",permalink:"/dotnet/docs/frames",tags:[],version:"stable",frontMatter:{id:"frames",title:"Frames"},sidebar:"docs",previous:{title:"Extensibility",permalink:"/dotnet/docs/extensibility"},next:{title:"Handles",permalink:"/dotnet/docs/handles"}},y={},b=[{value:"Frames",id:"frames",level:2},{value:"Frame objects",id:"frame-objects",level:2}],g={toc:b};function v(e){var t,r=e,{components:n}=r,m=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=p(p({},g),m),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#frames"}),"Frames")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#frame-objects"}),"Frame objects"))),(0,a.kt)("h2",p({},{id:"frames"}),"Frames"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-page",title:"Page"}),"Page")," can have one or more ",(0,a.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-frame",title:"Frame"}),"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,a.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,a.kt)("p",null,"A page can have additional frames attached with the ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'// Locate element inside frame\nvar username = await page.FrameLocator(".frame-class").Locator("#username-input");\nawait username.FillAsync("John");\n')),(0,a.kt)("h2",p({},{id:"frame-objects"}),"Frame objects"),(0,a.kt)("p",null,"One can access frame objects using the ",(0,a.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-frame"}),"Page.Frame(name)")," API:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'// Create a page.\nvar page = await context.NewPageAsync();\n\n// Get frame using the frame\'s name attribute\nvar frame = page.Frame("frame-login");\n\n// Get frame using frame\'s URL\nvar frame = page.FrameByUrl("*domain.");\n\n// Get frame using any other selector\nvar frameElementHandle = await page.EvaluateAsync("window.frames[1]");\nvar frame = await frameElementHandle.ContentFrameAsync();\n\n// Interact with the frame\nawait frame.FillAsync("#username-input", "John");\n')))}v.isMDXComponent=!0}}]);