"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4418],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},424:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return x},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return k}});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&c(e,a,t[a]);return e};const d={id:"class-apirequest",title:"APIRequest"},h=void 0,m={unversionedId:"api/class-apirequest",id:"version-stable/api/class-apirequest",title:"APIRequest",description:"Exposes API that can be used for the Web API testing. This class is used for creating APIRequestContext] instance which in turn can be used for sending web requests. An instance of this class can be obtained via [Playwright.request(). For more information see [APIRequestContext].",source:"@site/versioned_docs/version-stable/api/class-apirequest.mdx",sourceDirName:"api",slug:"/api/class-apirequest",permalink:"/java/docs/api/class-apirequest",tags:[],version:"stable",frontMatter:{id:"class-apirequest",title:"APIRequest"},sidebar:"api",previous:{title:"Playwright",permalink:"/java/docs/api/class-playwright"},next:{title:"APIRequestContext",permalink:"/java/docs/api/class-apirequestcontext"}},f={},k=[{value:"APIRequest.newContext(options)",id:"api-request-new-context",level:2}],g={toc:k};function x(e){var t,a=e,{components:r}=a,c=((e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},g),c),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Exposes API that can be used for the Web API testing. This class is used for creating ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," instance which in turn can be used for sending web requests. An instance of this class can be obtained via ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/api/class-playwright#playwright-request"}),"Playwright.request()"),". For more information see ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-apirequest#api-request-new-context"}),"APIRequest.newContext([options])"))),(0,n.kt)("h2",u({},{id:"api-request-new-context"}),"APIRequest.newContext(","[options]",")"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.16"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"ApiRequest.NewContextOptions"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setBaseURL"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-base-url"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Methods like ",(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-apirequestcontext#api-request-context-get"}),"APIRequestContext.get(url[, options])")," take the base URL into consideration by using the ",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/URL"}),(0,n.kt)("inlineCode",{parentName:"a"},"URL()"))," constructor for building the corresponding URL. Examples:",(0,n.kt)("a",{href:"#api-request-new-context-option-base-url",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"baseURL: ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," and sending request to ",(0,n.kt)("inlineCode",{parentName:"li"},"/bar.html")," results in ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/bar.html")),(0,n.kt)("li",{parentName:"ul"},"baseURL: ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/")," and sending request to ",(0,n.kt)("inlineCode",{parentName:"li"},"./bar.html")," results in ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/bar.html")),(0,n.kt)("li",{parentName:"ul"},"baseURL: ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo")," (without trailing slash) and navigating to ",(0,n.kt)("inlineCode",{parentName:"li"},"./bar.html")," results in ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/bar.html")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setExtraHTTPHeaders"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-extra-http-headers"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"}),"Map"),"<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),", ",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",">"," An object containing additional HTTP headers to be sent with every request.",(0,n.kt)("a",{href:"#api-request-new-context-option-extra-http-headers",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setHttpCredentials"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-http-credentials"})," ","<","HttpCredentials",">"," Credentials for ",(0,n.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication"),".",(0,n.kt)("a",{href:"#api-request-new-context-option-http-credentials",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setUsername")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setPassword")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setIgnoreHTTPSErrors"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-ignore-https-errors"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"}),"boolean"),">"," Whether to ignore HTTPS errors when sending network requests. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".",(0,n.kt)("a",{href:"#api-request-new-context-option-ignore-https-errors",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setProxy"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-proxy"})," ","<","Proxy",">"," Network proxy settings.",(0,n.kt)("a",{href:"#api-request-new-context-option-proxy",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setServer")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example ",(0,n.kt)("inlineCode",{parentName:"li"},"http://myproxy.com:3128")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"socks5://myproxy.com:3128"),". Short form ",(0,n.kt)("inlineCode",{parentName:"li"},"myproxy.com:3128")," is considered an HTTP proxy."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setBypass")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Optional comma-separated domains to bypass proxy, for example ",(0,n.kt)("inlineCode",{parentName:"li"},'".com, chromium.org, .domain.com"'),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setUsername")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Optional username to use if HTTP proxy requires authentication."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setPassword")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Optional password to use if HTTP proxy requires authentication."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setStorageState"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-storage-state"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via ",(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browser-context-storage-state"}),"BrowserContext.storageState([options])")," or ",(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-apirequestcontext#api-request-context-storage-state"}),"APIRequestContext.storageState([options])"),". Either a path to the file with saved storage, or the value returned by one of ",(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browser-context-storage-state"}),"BrowserContext.storageState([options])")," or ",(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-apirequestcontext#api-request-context-storage-state"}),"APIRequestContext.storageState([options])")," methods.",(0,n.kt)("a",{href:"#api-request-new-context-option-storage-state",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setStorageStatePath"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-storage-state-path"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"}),"Path"),">"," Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via ",(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browser-context-storage-state"}),"BrowserContext.storageState([options])"),". Path to the file with saved storage state. ",(0,n.kt)("font",{size:"2"},"Added in: v1.18"),(0,n.kt)("a",{href:"#api-request-new-context-option-storage-state-path",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setTimeout"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-timeout"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Maximum time in milliseconds to wait for the response. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout.",(0,n.kt)("a",{href:"#api-request-new-context-option-timeout",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setUserAgent"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-user-agent"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Specific user agent to use in this context.",(0,n.kt)("a",{href:"#api-request-new-context-option-user-agent",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext"),">",(0,n.kt)("a",{href:"#api-request-new-context-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Creates new instances of ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext"),"."))}x.isMDXComponent=!0}}]);