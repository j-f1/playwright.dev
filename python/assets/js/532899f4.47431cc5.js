"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8984],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60986:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return h}});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e};const d={id:"selenium-grid",title:"Selenium Grid"},m=void 0,f={unversionedId:"selenium-grid",id:"version-1.21/selenium-grid",title:"Selenium Grid",description:"Selenium 4",source:"@site/versioned_docs/version-1.21/selenium-grid.mdx",sourceDirName:".",slug:"/selenium-grid",permalink:"/python/docs/1.21/selenium-grid",tags:[],version:"1.21",frontMatter:{id:"selenium-grid",title:"Selenium Grid"},sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/python/docs/1.21/ci"},next:{title:"Supported languages",permalink:"/python/docs/1.21/languages"}},y={},h=[{value:"Selenium 4",id:"selenium-4",level:2},{value:"Selenium 3",id:"selenium-3",level:2}],b={toc:h};function g(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},b),p),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",c({},{id:"selenium-4"}),"Selenium 4"),(0,r.kt)("p",null,"Playwright can connect to ",(0,r.kt)("a",c({parentName:"p"},{href:"https://www.selenium.dev/documentation/grid/"}),"Selenium Grid Hub")," that runs Selenium 4 to launch ",(0,r.kt)("strong",{parentName:"p"},"Chrome")," or ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Edge")," browser, instead of running browser on the local machine. To enable this mode, set ",(0,r.kt)("inlineCode",{parentName:"p"},"SELENIUM_REMOTE_URL")," environment variable pointing to your Selenium Grid Hub."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# With Pytest\nSELENIUM_REMOTE_URL=http://internal.grid:4444/wd/hub pytest --browser chromium\n\n# Plain Python\nSELENIUM_REMOTE_URL=http://internal.grid:4444/wd/hub python script.py\n")),(0,r.kt)("p",null,"You don't have to change your code, just use ",(0,r.kt)("a",c({parentName:"p"},{href:"/python/docs/1.21/api/class-browsertype#browser-type-launch"}),"browser_type.launch(**kwargs)")," as usual."),(0,r.kt)("p",null,"When using Selenium Grid Hub, you can ",(0,r.kt)("a",c({parentName:"p"},{href:"/python/docs/1.21/browsers#skip-browser-downloads"}),"skip browser downloads"),"."),(0,r.kt)("p",null,"If your grid requires additional capabilities to be set (for example, you use an external service), you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"SELENIUM_REMOTE_CAPABILITIES")," environment variable to provide JSON-serialized capabilities."),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# With Pytest\nSELENIUM_REMOTE_URL=http://internal.grid:4444/wd/hub SELENIUM_REMOTE_CAPABILITIES=\"{'mygrid:options':{os:'windows',username:'John',password:'secure'}}\" pytest --browser chromium\n\n# Plain Python\nSELENIUM_REMOTE_URL=http://internal.grid:4444/wd/hub SELENIUM_REMOTE_CAPABILITIES=\"{'mygrid:options':{os:'windows',username:'John',password:'secure'}}\" python script.py\n")),(0,r.kt)("h2",c({},{id:"selenium-3"}),"Selenium 3"),(0,r.kt)("p",null,"Internally, Playwright connects to the browser using ",(0,r.kt)("a",c({parentName:"p"},{href:"https://chromedevtools.github.io/devtools-protocol/"}),"Chrome DevTools Protocol")," websocket. Selenium 4 hub exposes this capability, while Selenium 3 does not."),(0,r.kt)("p",null,"This means that Selenium 3 is supported in a best-effort manner, where Playwright tries to connect to the grid node directly. Grid nodes must be directly accessible from the machine that runs Playwright."))}g.isMDXComponent=!0}}]);