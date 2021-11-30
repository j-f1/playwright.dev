"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[36185],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),u=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),h=u(r),m=n,f=h["".concat(p,".").concat(m)]||h[m]||s[m]||i;return r?a.createElement(f,l(l({ref:e},c),{},{components:r})):a.createElement(f,l({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},58215:function(t,e,r){var a=r(67294);e.Z=function(t){var e=t.children,r=t.hidden,n=t.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},e)}},55064:function(t,e,r){r.d(e,{Z:function(){return s}});var a=r(67294),n=r(79443);var i=function(){var t=(0,a.useContext)(n.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},l=r(86010),o="tabItem_1uMI",p="tabItemActive_2DSg";var u=37,c=39;var s=function(t){var e=t.lazy,r=t.block,n=t.defaultValue,s=t.values,h=t.groupId,m=t.className,f=i(),d=f.tabGroupChoices,g=f.setTabGroupChoices,v=(0,a.useState)(n),y=v[0],k=v[1],b=a.Children.toArray(t.children),w=[];if(null!=h){var N=d[h];null!=N&&N!==y&&s.some((function(t){return t.value===N}))&&k(N)}var P=function(t){var e=t.currentTarget,r=w.indexOf(e),a=s[r].value;k(a),null!=h&&(g(h,a),setTimeout((function(){var t,r,a,n,i,l,o,u;(t=e.getBoundingClientRect(),r=t.top,a=t.left,n=t.bottom,i=t.right,l=window,o=l.innerHeight,u=l.innerWidth,r>=0&&i<=u&&n<=o&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(p),setTimeout((function(){return e.classList.remove(p)}),2e3))}),150))},j=function(t){var e,r;switch(t.keyCode){case c:var a=w.indexOf(t.target)+1;r=w[a]||w[0];break;case u:var n=w.indexOf(t.target)-1;r=w[n]||w[w.length-1]}null==(e=r)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},m)},s.map((function(t){var e=t.value,r=t.label;return a.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":y===e}),key:e,ref:function(t){return w.push(t)},onKeyDown:j,onFocus:P,onClick:P},r)}))),e?(0,a.cloneElement)(b.filter((function(t){return t.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==y})}))))}},79443:function(t,e,r){var a=(0,r(67294).createContext)(void 0);e.Z=a},6748:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),l=(r(55064),r(58215),{id:"languages",title:"Supported languages"}),o=void 0,p={unversionedId:"languages",id:"version-1.17/languages",isDocsHomePage:!1,title:"Supported languages",description:"The Playwright API is available in multiple languages.",source:"@site/versioned_docs/version-1.17/languages.mdx",sourceDirName:".",slug:"/languages",permalink:"/docs/languages",version:"1.17",frontMatter:{id:"languages",title:"Supported languages"},sidebar:"version-1.17/docs",previous:{title:"Third party runners",permalink:"/docs/test-runners"}},u=[{value:"JavaScript and TypeScript",id:"javascript-and-typescript",children:[]},{value:"Python",id:"python",children:[]},{value:"Java",id:"java",children:[]},{value:".NET",id:"net",children:[]}],c={toc:u};function s(t){var e=t.components,r=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Playwright API is available in multiple languages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#javascript-and-typescript"},"JavaScript and TypeScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#python"},"Python")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#java"},"Java")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#net"},".NET"))),(0,i.kt)("h2",{id:"javascript-and-typescript"},"JavaScript and TypeScript"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro/"},"Playwright for Node.js")," is available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/playwright"},"NPM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/intro/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/api/class-playwright"},"API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright"},"GitHub repo"))),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/python/docs/intro/"},"Playwright for Python")," is available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/intro/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-playwright"},"API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/playwright/"},"Playwright on PyPI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"GitHub repo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-pytest"},"Pytest integration"))),(0,i.kt)("h2",{id:"java"},"Java"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/java/docs/intro/"},"Playwright for Java")," is available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/java/docs/intro/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/java/docs/api/class-playwright"},"API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"GitHub repo"))),(0,i.kt)("h2",{id:"net"},".NET"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/dotnet/docs/intro/"},"Playwright for .NET")," is available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/intro/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/api/class-playwright"},"API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-dotnet"},"GitHub repo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/Microsoft.Playwright"},"Playwright on NuGet"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dotnet add package Microsoft.Playwright\n")))}s.isMDXComponent=!0},86010:function(t,e,r){function a(t){var e,r,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=a(t[e]))&&(n&&(n+=" "),n+=r);else for(e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function n(){for(var t,e,r=0,n="";r<arguments.length;)(t=arguments[r++])&&(e=a(t))&&(n&&(n+=" "),n+=e);return n}r.d(e,{Z:function(){return n}})}}]);