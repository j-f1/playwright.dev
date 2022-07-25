"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3699],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(k,s(s({ref:t},c),{},{components:r})):a.createElement(k,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9467:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return f}});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e};const d={id:"network",title:"Network"},m=void 0,k={unversionedId:"network",id:"network",title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/docs/network.mdx",sourceDirName:".",slug:"/network",permalink:"/docs/next/network",tags:[],version:"current",frontMatter:{id:"network",title:"Network"},sidebar:"docs",previous:{title:"Navigations",permalink:"/docs/next/navigations"},next:{title:"Pages",permalink:"/docs/next/pages"}},h={},f=[{value:"HTTP Authentication",id:"http-authentication",level:2},{value:"API reference",id:"api-reference",level:3},{value:"HTTP Proxy",id:"http-proxy",level:2},{value:"Network events",id:"network-events",level:2},{value:"Variations",id:"variations",level:4},{value:"API reference",id:"api-reference-1",level:3},{value:"Handle requests",id:"handle-requests",level:2},{value:"Variations",id:"variations-1",level:4},{value:"API reference",id:"api-reference-2",level:3},{value:"Modify requests",id:"modify-requests",level:2},{value:"Abort requests",id:"abort-requests",level:2},{value:"API reference",id:"api-reference-3",level:3},{value:"Modify responses",id:"modify-responses",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Record and replay requests",id:"record-and-replay-requests",level:2},{value:"Recording HAR with CLI",id:"recording-har-with-cli",level:3},{value:"Recording HAR with a script",id:"recording-har-with-a-script",level:3},{value:"Replaying from HAR",id:"replaying-from-har",level:3},{value:"WebSockets",id:"websockets",level:2},{value:"API reference",id:"api-reference-5",level:3},{value:"Missing Network Events and Service Workers",id:"missing-network-events-and-service-workers",level:2}],g={toc:f};function w(e){var t,r=e,{components:n}=r,c=((e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},g),c),o(t,s({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright provides APIs to ",(0,a.kt)("strong",{parentName:"p"},"monitor")," and ",(0,a.kt)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XHRs")," and ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch")," requests, can be tracked, modified and handled."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#http-authentication"}),"HTTP Authentication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#http-proxy"}),"HTTP Proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#network-events"}),"Network events")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#handle-requests"}),"Handle requests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#modify-requests"}),"Modify requests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#abort-requests"}),"Abort requests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#modify-responses"}),"Modify responses")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#record-and-replay-requests"}),"Record and replay requests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#websockets"}),"WebSockets")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#missing-network-events-and-service-workers"}),"Missing Network Events and Service Workers"))),(0,a.kt)("br",null),(0,a.kt)("h2",u({},{id:"http-authentication"}),"HTTP Authentication"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  httpCredentials: {\n    username: 'bill',\n    password: 'pa55w0rd',\n  },\n});\nconst page = await context.newPage();\nawait page.goto('https://example.com');\n")),(0,a.kt)("h3",u({},{id:"api-reference"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-browser#browser-new-context"}),"browser.newContext([options])"))),(0,a.kt)("h2",u({},{id:"http-proxy"}),"HTTP Proxy"),(0,a.kt)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),(0,a.kt)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),(0,a.kt)("p",null,"Here is an example of a global proxy:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const browser = await chromium.launch({\n  proxy: {\n    server: 'http://myproxy.com:3128',\n    username: 'usr',\n    password: 'pwd'\n  }\n});\n")),(0,a.kt)("p",null,"When specifying proxy for each context individually, ",(0,a.kt)("strong",{parentName:"p"},"Chromium on Windows")," needs a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const browser = await chromium.launch({\n  // Browser proxy option is required for Chromium on Windows.\n  proxy: { server: 'per-context' }\n});\nconst context = await browser.newContext({\n  proxy: { server: 'http://myproxy.com:3128' }\n})\n")),(0,a.kt)("h2",u({},{id:"network-events"}),"Network events"),(0,a.kt)("p",null,"You can monitor all the requests and responses:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const { chromium, webkit, firefox } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n\n  // Subscribe to 'request' and 'response' events.\n  page.on('request', request =>\n      console.log('>>', request.method(), request.url()));\n  page.on('response', response =>\n      console.log('<<', response.status(), response.url()));\n  await page.goto('https://example.com');\n\n  await browser.close();\n})();\n")),(0,a.kt)("p",null,"Or wait for a network response after the button click:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// Use a glob URL pattern\nconst [response] = await Promise.all([\n  page.waitForResponse('**/api/fetch_data'),\n  page.locator('button#update').click(),\n]);\n")),(0,a.kt)("h4",u({},{id:"variations"}),"Variations"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// Use a RegExp\nconst [response] = await Promise.all([\n  page.waitForResponse(/\\.jpeg$/),\n  page.locator('button#update').click(),\n]);\n\n// Use a predicate taking a Response object\nconst [response] = await Promise.all([\n  page.waitForResponse(response => response.url().includes(token)),\n  page.locator('button#update').click(),\n]);\n")),(0,a.kt)("h3",u({},{id:"api-reference-1"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-request",title:"Request"}),"Request")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-response",title:"Response"}),"Response")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-page#page-event-request"}),"page.on('request')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-page#page-event-response"}),"page.on('response')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-page#page-wait-for-request"}),"page.waitForRequest(urlOrPredicate[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-page#page-wait-for-response"}),"page.waitForResponse(urlOrPredicate[, options])"))),(0,a.kt)("br",null),(0,a.kt)("h2",u({},{id:"handle-requests"}),"Handle requests"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"await page.route('**/api/fetch_data', route => route.fulfill({\n  status: 200,\n  body: testData,\n}));\nawait page.goto('https://example.com');\n")),(0,a.kt)("p",null,"You can mock API endpoints via handling the network requests in your Playwright script."),(0,a.kt)("h4",u({},{id:"variations-1"}),"Variations"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// Set up route on the entire browser context.\n// It will apply to popup windows and opened links.\n\nawait browserContext.route('**/api/login', route => route.fulfill({\n  status: 200,\n  body: 'accept',\n}));\nawait page.goto('https://example.com');\n")),(0,a.kt)("h3",u({},{id:"api-reference-2"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browser-context-route"}),"browserContext.route(url, handler[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browser-context-unroute"}),"browserContext.unroute(url[, handler])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-page#page-route"}),"page.route(url, handler[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-page#page-unroute"}),"page.unroute(url[, handler])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-route",title:"Route"}),"Route"))),(0,a.kt)("br",null),(0,a.kt)("h2",u({},{id:"modify-requests"}),"Modify requests"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// Delete header\nawait page.route('**/*', route => {\n  const headers = route.request().headers();\n  delete headers['X-Secret'];\n  route.continue({headers});\n});\n\n// Continue requests as POST.\nawait page.route('**/*', route => route.continue({method: 'POST'}));\n")),(0,a.kt)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),(0,a.kt)("h2",u({},{id:"abort-requests"}),"Abort requests"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"await page.route('**/*.{png,jpg,jpeg}', route => route.abort());\n\n// Abort based on the request type\nawait page.route('**/*', route => {\n  return route.request().resourceType() === 'image' ?\n      route.abort() : route.continue();\n});\n")),(0,a.kt)("h3",u({},{id:"api-reference-3"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-page#page-route"}),"page.route(url, handler[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browser-context-route"}),"browserContext.route(url, handler[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-route#route-abort"}),"route.abort([errorCode])"))),(0,a.kt)("br",null),(0,a.kt)("h2",u({},{id:"modify-responses"}),"Modify responses"),(0,a.kt)("p",null,"To modify a response use ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," to get original response and then pass the response to ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-route#route-fulfill"}),"route.fulfill([options])"),". You can override individual fields on the response via options:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"await page.route('**/title.html', async route => {\n  // Fetch original response.\n  const response = await page.request.fetch(route.request());\n  // Add a prefix to the title.\n  let body = await response.text();\n  body = body.replace('<title>', '<title>My prefix:');\n  route.fulfill({\n    // Pass all fields from the response.\n    response,\n    // Override response body.\n    body,\n    // Force content type to be html.\n    headers: {\n      ...response.headers(),\n      'content-type': 'text/html'\n    }\n  });\n});\n")),(0,a.kt)("h3",u({},{id:"api-reference-4"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-page#page-route"}),"page.route(url, handler[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browser-context-route"}),"browserContext.route(url, handler[, options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-playwright#playwright-request"}),"playwright.request")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browser-context-request"}),"browserContext.request")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-page#page-request"}),"page.request")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-route#route-fulfill"}),"route.fulfill([options])"))),(0,a.kt)("br",null),(0,a.kt)("h2",u({},{id:"record-and-replay-requests"}),"Record and replay requests"),(0,a.kt)("p",null,"You can record network activity as an HTTP Archive file (HAR). Later on, this archive can be used to mock responses to the network requests. You'll need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Record a HAR file."),(0,a.kt)("li",{parentName:"ol"},"Commit the HAR file alongside the tests."),(0,a.kt)("li",{parentName:"ol"},"Route requests using the saved HAR files in the tests.")),(0,a.kt)("h3",u({},{id:"recording-har-with-cli"}),"Recording HAR with CLI"),(0,a.kt)("p",null,"Open the browser with ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/next/cli"}),"Playwright CLI")," and pass ",(0,a.kt)("inlineCode",{parentName:"p"},"--save-har")," option to produce a HAR file. Optionally, use ",(0,a.kt)("inlineCode",{parentName:"p"},"--save-har-glob")," to only save requests you are interested in, for example API endpoints. If the har file name ends with ",(0,a.kt)("inlineCode",{parentName:"p"},".zip"),", artifacts are written as separate files and are all compressed into a single ",(0,a.kt)("inlineCode",{parentName:"p"},"zip"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# Save API requests from example.com as "example.har" archive.\nnpx playwright open --save-har=example.har --save-har-glob="**/api/**" https://example.com\n')),(0,a.kt)("h3",u({},{id:"recording-har-with-a-script"}),"Recording HAR with a script"),(0,a.kt)("p",null,"Alternatively, instead of using the CLI, you can record HAR programmatically. Pass ",(0,a.kt)("inlineCode",{parentName:"p"},"har")," option when creating a ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," with ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-browser#browser-new-context"}),"browser.newContext([options])")," to create an archive. If the har file name ends with ",(0,a.kt)("inlineCode",{parentName:"p"},".zip"),", artifacts are written as separate files and are all compressed into a single ",(0,a.kt)("inlineCode",{parentName:"p"},"zip"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  recordHar: { path: 'example.har', urlFilter: '**/api/**' }\n});\n\n// ... Perform actions ...\n\n// Close context to ensure HAR is saved to disk.\nawait context.close();\n")),(0,a.kt)("h3",u({},{id:"replaying-from-har"}),"Replaying from HAR"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-page#page-route-from-har"}),"page.routeFromHAR(har[, options])")," or ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-browsercontext#browser-context-route-from-har"}),"browserContext.routeFromHAR(har[, options])")," to serve matching responses from the ",(0,a.kt)("a",u({parentName:"p"},{href:"http://www.softwareishard.com/blog/har-12-spec/"}),"HAR")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// Replay API requests from HAR.\n// Either use a matching response from the HAR,\n// or abort the request if nothing matches.\nawait page.routeFromHAR('example.har');\n")),(0,a.kt)("p",null,"HAR replay matches URL and HTTP method strictly. For POST requests, it also matches POST payloads strictly. If multiple recordings match a request, the one with the most matching headers is picked. An entry resulting in a redirect will be followed automatically."),(0,a.kt)("p",null,"Similar to when recording, if given HAR file name ends with ",(0,a.kt)("inlineCode",{parentName:"p"},".zip"),", it is considered an archive containing the HAR file along with network payloads stored as separate entries. You can also extract this archive, edit payloads or HAR log manually and point to the extracted har file. All the payloads will be resolved relative to the extracted har file on the file system."),(0,a.kt)("br",null),(0,a.kt)("h2",u({},{id:"websockets"}),"WebSockets"),(0,a.kt)("p",null,"Playwright supports ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"}),"WebSockets")," inspection out of the box. Every time WebSocket is created, ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-page#page-event-web-socket"}),"page.on('websocket')")," event is fired. This event contains the ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-websocket",title:"WebSocket"}),"WebSocket")," instance for further web socket frames inspection:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"page.on('websocket', ws => {\n  console.log(`WebSocket opened: ${ws.url()}>`);\n  ws.on('framesent', event => console.log(event.payload));\n  ws.on('framereceived', event => console.log(event.payload));\n  ws.on('close', () => console.log('WebSocket closed'));\n});\n")),(0,a.kt)("h3",u({},{id:"api-reference-5"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-websocket",title:"WebSocket"}),"WebSocket")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-page#page-event-web-socket"}),"page.on('websocket')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-websocket#web-socket-event-frame-sent"}),"webSocket.on('framesent')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-websocket#web-socket-event-frame-received"}),"webSocket.on('framereceived')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-websocket#web-socket-event-close"}),"webSocket.on('close')"))),(0,a.kt)("br",null),(0,a.kt)("h2",u({},{id:"missing-network-events-and-service-workers"}),"Missing Network Events and Service Workers"),(0,a.kt)("p",null,"Playwright's built-in ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-browsercontext#browser-context-route"}),"browserContext.route(url, handler[, options])")," and ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-page#page-route"}),"page.route(url, handler[, options])")," allow your tests to natively route requests and perform mocking and interception."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If you're using Playwright's native ",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browser-context-route"}),"browserContext.route(url, handler[, options])")," and ",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-page#page-route"}),"page.route(url, handler[, options])"),", and it appears network events are missing, disable Service Workers by setting ",(0,a.kt)("inlineCode",{parentName:"li"},"Browser.newContext.serviceWorkers")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"'block'"),"."),(0,a.kt)("li",{parentName:"ol"},"It might be that you are using a mock tool such as Mock Service Worker (MSW). While this tool works out of the box for mocking responses, it adds its own Service Worker that takes over the network requests, hence making them invisible to ",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browser-context-route"}),"browserContext.route(url, handler[, options])")," and ",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-page#page-route"}),"page.route(url, handler[, options])"),". If you are interested in both network testing and mocking, consider using built-in ",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browser-context-route"}),"browserContext.route(url, handler[, options])")," and ",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-page#page-route"}),"page.route(url, handler[, options])")," for ",(0,a.kt)("a",u({parentName:"li"},{href:"#handle-requests"}),"response mocking"),"."),(0,a.kt)("li",{parentName:"ol"},"If you're interested in not solely using Service Workers for testing and network mocking, but in routing and listening for requests made by Service Workers themselves, please see ",(0,a.kt)("a",u({parentName:"li"},{href:"https://github.com/microsoft/playwright/issues/15684"}),"this experimental feature"),".")),(0,a.kt)("br",null))}w.isMDXComponent=!0}}]);