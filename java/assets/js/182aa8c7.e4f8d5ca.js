"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[86886],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,y=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85223:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return g}});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&s(e,r,t[r]);return e};const f={id:"class-timeouterror",title:"TimeoutError"},m=void 0,y={unversionedId:"api/class-timeouterror",id:"api/class-timeouterror",title:"TimeoutError",description:"* extends: [PlaywrightException]",source:"@site/docs/api/class-timeouterror.mdx",sourceDirName:"api",slug:"/api/class-timeouterror",permalink:"/java/docs/next/api/class-timeouterror",tags:[],version:"current",frontMatter:{id:"class-timeouterror",title:"TimeoutError"},sidebar:"api",previous:{title:"Selectors",permalink:"/java/docs/next/api/class-selectors"},next:{title:"Touchscreen",permalink:"/java/docs/next/api/class-touchscreen"}},d={},g=[],b={toc:g};function v(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"extends: ",(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-playwrightexception",title:"PlaywrightException"}),"PlaywrightException"))),(0,n.kt)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-locator#locator-wait-for"}),"Locator.waitFor([options])")," or ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-browsertype#browser-type-launch"}),"BrowserType.launch([options])"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),'package org.example;\n\nimport com.microsoft.playwright.*;\n\npublic class TimeoutErrorExample {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      Browser browser = playwright.firefox().launch();\n      BrowserContext context = browser.newContext();\n      Page page = context.newPage();\n      try {\n        page.click("text=Example", new Page.ClickOptions().setTimeout(100));\n      } catch (TimeoutError e) {\n        System.out.println("Timeout!");\n      }\n    }\n  }\n}\n')))}v.isMDXComponent=!0}}]);