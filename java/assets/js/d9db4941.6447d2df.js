"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[67035],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(k,s(s({ref:t},u),{},{components:a})):r.createElement(k,s({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},24098:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return h}});var r=a(3905),n=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&u(e,a,t[a]);return e};const d={id:"network",title:"Network"},m=void 0,k={unversionedId:"network",id:"version-1.20/network",title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/versioned_docs/version-1.20/network.mdx",sourceDirName:".",slug:"/network",permalink:"/java/docs/1.20/network",tags:[],version:"1.20",frontMatter:{id:"network",title:"Network"},sidebar:"docs",previous:{title:"Navigations",permalink:"/java/docs/1.20/navigations"},next:{title:"Pages",permalink:"/java/docs/1.20/pages"}},f={},h=[{value:"HTTP Authentication",id:"http-authentication",level:2},{value:"API reference",id:"api-reference",level:3},{value:"HTTP Proxy",id:"http-proxy",level:2},{value:"Network events",id:"network-events",level:2},{value:"Variations",id:"variations",level:4},{value:"API reference",id:"api-reference-1",level:3},{value:"Handle requests",id:"handle-requests",level:2},{value:"Variations",id:"variations-1",level:4},{value:"API reference",id:"api-reference-2",level:3},{value:"Modify requests",id:"modify-requests",level:2},{value:"Abort requests",id:"abort-requests",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"WebSockets",id:"websockets",level:2},{value:"API reference",id:"api-reference-4",level:3}],g={toc:h};function v(e){var t,a=e,{components:n}=a,u=((e,t)=>{var a={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=c(c({},g),u),o(t,s({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright provides APIs to ",(0,r.kt)("strong",{parentName:"p"},"monitor")," and ",(0,r.kt)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",(0,r.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XHRs")," and ",(0,r.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch")," requests, can be tracked, modified and handled."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#http-authentication"}),"HTTP Authentication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#http-proxy"}),"HTTP Proxy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#network-events"}),"Network events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#handle-requests"}),"Handle requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#modify-requests"}),"Modify requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#abort-requests"}),"Abort requests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"#websockets"}),"WebSockets"))),(0,r.kt)("br",null),(0,r.kt)("h2",c({},{id:"http-authentication"}),"HTTP Authentication"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-java"}),'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setHttpCredentials("bill", "pa55w0rd"));\nPage page = context.newPage();\npage.navigate("https://example.com");\n')),(0,r.kt)("h3",c({},{id:"api-reference"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-browser#browser-new-context"}),"Browser.newContext([options])"))),(0,r.kt)("h2",c({},{id:"http-proxy"}),"HTTP Proxy"),(0,r.kt)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),(0,r.kt)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),(0,r.kt)("p",null,"Here is an example of a global proxy:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-java"}),"Browser browser = chromium.launch(new BrowserType.LaunchOptions()\n  .setProxy(new Proxy(\"http://myproxy.com:3128\")\n  .setUsername('usr')\n  .setPassword('pwd'));\n")),(0,r.kt)("p",null,"When specifying proxy for each context individually, ",(0,r.kt)("strong",{parentName:"p"},"Chromium on Windows")," needs a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-java"}),'Browser browser = chromium.launch(new BrowserType.LaunchOptions()\n  // Browser proxy option is required for Chromium on Windows.\n  .setProxy(new Proxy("per-context"));\nBrowserContext context = chromium.launch(new Browser.NewContextOptions()\n  .setProxy(new Proxy("http://myproxy.com:3128"));\n')),(0,r.kt)("h2",c({},{id:"network-events"}),"Network events"),(0,r.kt)("p",null,"You can monitor all the requests and responses:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.onRequest(request -> System.out.println(">> " + request.method() + " " + request.url()));\n      page.onResponse(response -> System.out.println("<<" + response.status() + " " + response.url()));\n      page.navigate("https://example.com");\n      browser.close();\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Or wait for a network response after the button click:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-java"}),'// Use a glob URL pattern\nResponse response = page.waitForResponse("**/api/fetch_data", () -> {\n  page.click("button#update");\n});\n')),(0,r.kt)("h4",c({},{id:"variations"}),"Variations"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-java"}),'// Use a RegExp\nResponse response = page.waitForResponse(Pattern.compile("\\\\.jpeg$"), () -> {\n  page.click("button#update");\n});\n\n// Use a predicate taking a Response object\nResponse response = page.waitForResponse(r -> r.url().contains(token), () -> {\n  page.click("button#update");\n});\n')),(0,r.kt)("h3",c({},{id:"api-reference-1"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-request",title:"Request"}),"Request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-response",title:"Response"}),"Response")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-page#page-event-request"}),"Page.onRequest(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-page#page-event-response"}),"Page.onResponse(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-page#page-wait-for-request"}),"Page.waitForRequest(urlOrPredicate[, options], callback)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-page#page-wait-for-response"}),"Page.waitForResponse(urlOrPredicate[, options], callback)"))),(0,r.kt)("br",null),(0,r.kt)("h2",c({},{id:"handle-requests"}),"Handle requests"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-java"}),'page.route("**/api/fetch_data", route -> route.fulfill(new Route.FulfillOptions()\n  .setStatus(200)\n  .setBody(testData)));\npage.navigate("https://example.com");\n')),(0,r.kt)("p",null,"You can mock API endpoints via handling the network requests in your Playwright script."),(0,r.kt)("h4",c({},{id:"variations-1"}),"Variations"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-java"}),'browserContext.route("**/api/login", route -> route.fulfill(new Route.FulfillOptions()\n  .setStatus(200)\n  .setBody("accept")));\npage.navigate("https://example.com");\n')),(0,r.kt)("h3",c({},{id:"api-reference-2"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-browsercontext#browser-context-route"}),"BrowserContext.route(url, handler[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-browsercontext#browser-context-unroute"}),"BrowserContext.unroute(url[, handler])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-page#page-route"}),"Page.route(url, handler[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-page#page-unroute"}),"Page.unroute(url[, handler])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-route",title:"Route"}),"Route"))),(0,r.kt)("br",null),(0,r.kt)("h2",c({},{id:"modify-requests"}),"Modify requests"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-java"}),'// Delete header\npage.route("**/*", route -> {\n  Map<String, String> headers = new HashMap<>(route.request().headers());\n  headers.remove("X-Secret");\n    route.resume(new Route.ResumeOptions().setHeaders(headers));\n});\n\n// Continue requests as POST.\npage.route("**/*", route -> route.resume(new Route.ResumeOptions().setMethod("POST")));\n')),(0,r.kt)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),(0,r.kt)("h2",c({},{id:"abort-requests"}),"Abort requests"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-java"}),'page.route("**/*.{png,jpg,jpeg}", route -> route.abort());\n\n// Abort based on the request type\npage.route("**/*", route -> {\n  if ("image".equals(route.request().resourceType()))\n    route.abort();\n  else\n    route.resume();\n});\n')),(0,r.kt)("h3",c({},{id:"api-reference-3"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-page#page-route"}),"Page.route(url, handler[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-browsercontext#browser-context-route"}),"BrowserContext.route(url, handler[, options])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-route#route-abort"}),"Route.abort([errorCode])"))),(0,r.kt)("br",null),(0,r.kt)("h2",c({},{id:"websockets"}),"WebSockets"),(0,r.kt)("p",null,"Playwright supports ",(0,r.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"}),"WebSockets")," inspection out of the box. Every time WebSocket is created, ",(0,r.kt)("a",c({parentName:"p"},{href:"/java/docs/1.20/api/class-page#page-event-web-socket"}),"Page.onWebSocket(handler)")," event is fired. This event contains the ",(0,r.kt)("a",c({parentName:"p"},{href:"/java/docs/1.20/api/class-websocket",title:"WebSocket"}),"WebSocket")," instance for further web socket frames inspection:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-java"}),'page.onWebSocket(ws -> {\n  log("WebSocket opened: " + ws.url());\n  ws.onFrameSent(frameData -> log(frameData.text()));\n  ws.onFrameReceived(frameData -> log(frameData.text()));\n  ws.onClose(ws1 -> log("WebSocket closed"));\n});\n')),(0,r.kt)("h3",c({},{id:"api-reference-4"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-websocket",title:"WebSocket"}),"WebSocket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-page#page-event-web-socket"}),"Page.onWebSocket(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-websocket#web-socket-event-frame-sent"}),"WebSocket.onFrameSent(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-websocket#web-socket-event-frame-received"}),"WebSocket.onFrameReceived(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"/java/docs/1.20/api/class-websocket#web-socket-event-close"}),"WebSocket.onClose(handler)"))),(0,r.kt)("br",null))}v.isMDXComponent=!0}}]);