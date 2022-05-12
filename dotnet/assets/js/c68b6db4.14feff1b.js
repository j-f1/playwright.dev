"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[33],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},97129:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return g}});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(i)for(var a of i(t))p.call(t,a)&&c(e,a,t[a]);return e};const d={id:"release-notes",title:"Release notes"},m=void 0,h={unversionedId:"release-notes",id:"version-1.21/release-notes",title:"Release notes",description:"- Version 1.21",source:"@site/versioned_docs/version-1.21/release-notes.mdx",sourceDirName:".",slug:"/release-notes",permalink:"/dotnet/docs/1.21/release-notes",tags:[],version:"1.21",frontMatter:{id:"release-notes",title:"Release notes"},sidebar:"docs",previous:{title:"Debugging tools",permalink:"/dotnet/docs/1.21/debug"},next:{title:"Test Runners",permalink:"/dotnet/docs/1.21/test-runners"}},k={},g=[{value:"Version 1.21",id:"version-121",level:2},{value:"Highlights",id:"highlights",level:3},{value:"Behavior Changes",id:"behavior-changes",level:3},{value:"Browser Versions",id:"browser-versions",level:3},{value:"Version 1.20",id:"version-120",level:2},{value:"Web-First Assertions",id:"web-first-assertions",level:3},{value:"Other Updates",id:"other-updates",level:3},{value:"Announcements",id:"announcements",level:3},{value:"Browser Versions",id:"browser-versions-1",level:3},{value:"Version 1.19",id:"version-119",level:2},{value:"Highlights",id:"highlights-1",level:3},{value:"Browser Versions",id:"browser-versions-2",level:3},{value:"Version 1.18",id:"version-118",level:2},{value:"Locator Improvements",id:"locator-improvements",level:3},{value:"New APIs &amp; changes",id:"new-apis--changes",level:3},{value:"Browser Versions",id:"browser-versions-3",level:3},{value:"Version 1.17",id:"version-117",level:2},{value:"Frame Locators",id:"frame-locators",level:3},{value:"Trace Viewer Update",id:"trace-viewer-update",level:3},{value:"HTML Report Update",id:"html-report-update",level:3},{value:"Ubuntu ARM64 support + more",id:"ubuntu-arm64-support--more",level:2},{value:"New APIs",id:"new-apis",level:3},{value:"Version 1.16",id:"version-116",level:2},{value:"\ud83c\udfad Playwright Library",id:"-playwright-library",level:3},{value:"Locator.WaitForAsync",id:"locatorwaitforasync",level:4},{value:"\ud83c\udfad Playwright Trace Viewer",id:"-playwright-trace-viewer",level:3},{value:"Browser Versions",id:"browser-versions-4",level:3},{value:"Version 1.15",id:"version-115",level:2},{value:"\ud83d\uddb1\ufe0f Mouse Wheel",id:"\ufe0f-mouse-wheel",level:3},{value:"\ud83d\udcdc New Headers API",id:"-new-headers-api",level:3},{value:"\ud83c\udf08 Forced-Colors emulation",id:"-forced-colors-emulation",level:3},{value:"New APIs",id:"new-apis-1",level:3},{value:"Important \u26a0",id:"important-",level:3},{value:"Browser Versions",id:"browser-versions-5",level:3},{value:"Version 1.14",id:"version-114",level:2},{value:"\u26a1\ufe0f New &quot;strict&quot; mode",id:"\ufe0f-new-strict-mode",level:4},{value:"\ud83d\udccd New <strong>Locators API</strong>",id:"-new-locators-api",level:4},{value:"\ud83e\udde9 Experimental <strong>React</strong> and <strong>Vue</strong> selector engines",id:"-experimental-react-and-vue-selector-engines",level:4},{value:"\u2728 New <strong><code>nth</code></strong> and <strong><code>visible</code></strong> selector engines",id:"-new-nth-and-visible-selector-engines",level:4},{value:"Browser Versions",id:"browser-versions-6",level:3},{value:"Version 1.13",id:"version-113",level:2},{value:"Playwright",id:"playwright",level:4},{value:"Tools",id:"tools",level:4},{value:"New and Overhauled Guides",id:"new-and-overhauled-guides",level:4},{value:"Browser Versions",id:"browser-versions-7",level:4},{value:"New Playwright APIs",id:"new-playwright-apis",level:4},{value:"Version 1.12",id:"version-112",level:2},{value:"Highlights",id:"highlights-2",level:4},{value:"Browser Versions",id:"browser-versions-8",level:4}],N={toc:g};function w(e){var t,a=e,{components:n}=a,c=((e,t)=>{var a={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},N),c),l(t,o({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#version-121"}),"Version 1.21")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#version-120"}),"Version 1.20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#version-119"}),"Version 1.19")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#version-118"}),"Version 1.18")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#version-117"}),"Version 1.17")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#ubuntu-arm64-support--more"}),"Ubuntu ARM64 support + more")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#version-116"}),"Version 1.16")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#version-115"}),"Version 1.15")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#version-114"}),"Version 1.14")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#version-113"}),"Version 1.13")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#version-112"}),"Version 1.12"))),(0,r.kt)("h2",u({},{id:"version-121"}),"Version 1.21"),(0,r.kt)("h3",u({},{id:"highlights"}),"Highlights"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New ",(0,r.kt)("strong",{parentName:"p"},"experimental")," role selectors that allow selecting elements by their ",(0,r.kt)("a",u({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-1.2/#roles"}),"ARIA role"),", ",(0,r.kt)("a",u({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-1.2/#aria-attributes"}),"ARIA attributes")," and ",(0,r.kt)("a",u({parentName:"p"},{href:"https://w3c.github.io/accname/#dfn-accessible-name"}),"accessible name"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// Click a button with accessible name "log in"\nawait page.ClickAsync("role=button[name=\'log in\']")\n')),(0,r.kt)("p",{parentName:"li"},"To use role selectors, make sure to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_EXPERIMENTAL_FEATURES=1")," environment variable."),(0,r.kt)("p",{parentName:"li"},"Read more in ",(0,r.kt)("a",u({parentName:"p"},{href:"./selectors#role-selector"}),"our documentation"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New ",(0,r.kt)("inlineCode",{parentName:"p"},"scale")," option in ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page#page-screenshot"}),"Page.ScreenshotAsync(options)")," for smaller sized screenshots.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New ",(0,r.kt)("inlineCode",{parentName:"p"},"caret")," option in ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page#page-screenshot"}),"Page.ScreenshotAsync(options)")," to control text caret. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},'"hide"'),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We now ship a designated .NET docker image ",(0,r.kt)("inlineCode",{parentName:"p"},"mcr.microsoft.com/playwright/dotnet"),". Read more in ",(0,r.kt)("a",u({parentName:"p"},{href:"./docker"}),"our documentation"),"."))),(0,r.kt)("h3",u({},{id:"behavior-changes"}),"Behavior Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Playwright now supports large file uploads (100s of MBs) via ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-locator#locator-set-input-files"}),"Locator.SetInputFilesAsync(files, options)")," API.")),(0,r.kt)("h3",u({},{id:"browser-versions"}),"Browser Versions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chromium 101.0.4951.26"),(0,r.kt)("li",{parentName:"ul"},"Mozilla Firefox 98.0.2"),(0,r.kt)("li",{parentName:"ul"},"WebKit 15.4")),(0,r.kt)("p",null,"This version was also tested against the following stable channels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Google Chrome 100"),(0,r.kt)("li",{parentName:"ul"},"Microsoft Edge 100")),(0,r.kt)("h2",u({},{id:"version-120"}),"Version 1.20"),(0,r.kt)("h3",u({},{id:"web-first-assertions"}),"Web-First Assertions"),(0,r.kt)("p",null,"Playwright for .NET 1.20 introduces ",(0,r.kt)("a",u({parentName:"p"},{href:"./test-assertions"}),"Web-First Assertions"),"."),(0,r.kt)("p",null,"Consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'using System.Threading.Tasks;\nusing Microsoft.Playwright.NUnit;\nusing NUnit.Framework;\n\nnamespace Playwright.TestingHarnessTest.NUnit\n{\n    public class ExampleTests : PageTest\n    {\n        [Test]\n        public async Task StatusBecomesSubmitted()\n        {\n            await Expect(Page.Locator(".status")).ToHaveTextAsync("Submitted");\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Playwright will be re-testing the node with the selector ",(0,r.kt)("inlineCode",{parentName:"p"},".status")," until fetched Node has the ",(0,r.kt)("inlineCode",{parentName:"p"},'"Submitted"')," text. It will be re-fetching the node and checking it over and over, until the condition is met or until the timeout is reached. You can pass this timeout as an option."),(0,r.kt)("p",null,"Read more in ",(0,r.kt)("a",u({parentName:"p"},{href:"./test-assertions"}),"our documentation"),"."),(0,r.kt)("h3",u({},{id:"other-updates"}),"Other Updates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New options for methods ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-screenshot"}),"Page.ScreenshotAsync(options)"),", ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-locator#locator-screenshot"}),"Locator.ScreenshotAsync(options)")," and ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-elementhandle#element-handle-screenshot"}),"ElementHandle.ScreenshotAsync(options)"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("inlineCode",{parentName:"li"},"ScreenshotAnimations.Disabled")," rewinds all CSS animations and transitions to a consistent state"),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("inlineCode",{parentName:"li"},"mask: Locator[]")," masks given elements, overlaying them with pink ",(0,r.kt)("inlineCode",{parentName:"li"},"#FF00FF")," boxes."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-locator#locator-highlight"}),"Locator.HighlightAsync()")," visually reveals element(s) for easier debugging.")),(0,r.kt)("h3",u({},{id:"announcements"}),"Announcements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v1.20 is the last release to receive WebKit update for macOS 10.15 Catalina. Please update MacOS to keep using latest & greatest WebKit!")),(0,r.kt)("h3",u({},{id:"browser-versions-1"}),"Browser Versions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chromium 101.0.4921.0"),(0,r.kt)("li",{parentName:"ul"},"Mozilla Firefox 97.0.1"),(0,r.kt)("li",{parentName:"ul"},"WebKit 15.4")),(0,r.kt)("p",null,"This version was also tested against the following stable channels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Google Chrome 99"),(0,r.kt)("li",{parentName:"ul"},"Microsoft Edge 99")),(0,r.kt)("h2",u({},{id:"version-119"}),"Version 1.19"),(0,r.kt)("h3",u({},{id:"highlights-1"}),"Highlights"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Locator now supports a ",(0,r.kt)("inlineCode",{parentName:"p"},"has")," option that makes sure it contains another locator inside:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await Page.Locator("article", new () { Has = Page.Locator(".highlight") }).ClickAsync();\n')),(0,r.kt)("p",{parentName:"li"},"Read more in ",(0,r.kt)("a",u({parentName:"p"},{href:"./api/class-locator#locator-locator-option-has"}),"locator documentation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-locator#locator-page"}),"Locator.Page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page#page-screenshot"}),"Page.ScreenshotAsync(options)")," and ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-locator#locator-screenshot"}),"Locator.ScreenshotAsync(options)")," now automatically hide blinking caret")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Playwright Codegen now generates locators and frame locators"))),(0,r.kt)("h3",u({},{id:"browser-versions-2"}),"Browser Versions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chromium 100.0.4863.0"),(0,r.kt)("li",{parentName:"ul"},"Mozilla Firefox 96.0.1"),(0,r.kt)("li",{parentName:"ul"},"WebKit 15.4")),(0,r.kt)("p",null,"This version was also tested against the following stable channels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Google Chrome 98"),(0,r.kt)("li",{parentName:"ul"},"Microsoft Edge 98")),(0,r.kt)("h2",u({},{id:"version-118"}),"Version 1.18"),(0,r.kt)("h3",u({},{id:"locator-improvements"}),"Locator Improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-locator#locator-drag-to"}),"Locator.DragToAsync(target, options)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each locator can now be optionally filtered by the text it contains:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await Page.Locator("li", new () { HasTextString = "My Item" })\n          .Locator("button").click();\n')),(0,r.kt)("p",{parentName:"li"},"Read more in ",(0,r.kt)("a",u({parentName:"p"},{href:"./api/class-locator#locator-locator-option-has-text"}),"locator documentation")))),(0,r.kt)("h3",u({},{id:"new-apis--changes"}),"New APIs & changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"./api/class-browser#browser-new-context-option-accept-downloads"}),(0,r.kt)("inlineCode",{parentName:"a"},"AcceptDownloads"))," option now defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"./api/class-tracing#tracing-start-option-sources"}),(0,r.kt)("inlineCode",{parentName:"a"},"Sources"))," option to embed sources into traces.")),(0,r.kt)("h3",u({},{id:"browser-versions-3"}),"Browser Versions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chromium 99.0.4812.0"),(0,r.kt)("li",{parentName:"ul"},"Mozilla Firefox 95.0"),(0,r.kt)("li",{parentName:"ul"},"WebKit 15.4")),(0,r.kt)("p",null,"This version was also tested against the following stable channels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Google Chrome 97"),(0,r.kt)("li",{parentName:"ul"},"Microsoft Edge 97")),(0,r.kt)("h2",u({},{id:"version-117"}),"Version 1.17"),(0,r.kt)("h3",u({},{id:"frame-locators"}),"Frame Locators"),(0,r.kt)("p",null,"Playwright 1.17 introduces ",(0,r.kt)("a",u({parentName:"p"},{href:"./api/class-framelocator"}),"frame locators")," - a locator to the iframe on the page. Frame locators capture the logic sufficient to retrieve the ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe")," and then locate elements in that iframe. Frame locators are strict by default, will wait for ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe")," to appear and can be used in Web-First assertions."),(0,r.kt)("p",null,(0,r.kt)("img",u({parentName:"p"},{src:"https://user-images.githubusercontent.com/746130/142082759-2170db38-370d-43ec-8d41-5f9941f57d83.png",alt:"Graphics"}))),(0,r.kt)("p",null,"Frame locators can be created with either ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page#page-frame-locator"}),"Page.FrameLocator(selector)")," or ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-locator#locator-frame-locator"}),"Locator.FrameLocator(selector)")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var locator = page.FrameLocator("#my-frame").Locator("text=Submit");\nawait locator.ClickAsync();\n')),(0,r.kt)("p",null,"Read more at ",(0,r.kt)("a",u({parentName:"p"},{href:"./api/class-framelocator"}),"our documentation"),"."),(0,r.kt)("h3",u({},{id:"trace-viewer-update"}),"Trace Viewer Update"),(0,r.kt)("p",null,"Playwright Trace Viewer is now ",(0,r.kt)("strong",{parentName:"p"},"available online")," at ",(0,r.kt)("a",u({parentName:"p"},{href:"https://trace.playwright.dev"}),"https://trace.playwright.dev"),"! Just drag-and-drop your ",(0,r.kt)("inlineCode",{parentName:"p"},"trace.zip")," file to inspect its contents."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": trace files are not uploaded anywhere; ",(0,r.kt)("a",u({parentName:"p"},{href:"https://trace.playwright.dev"}),"trace.playwright.dev")," is a ",(0,r.kt)("a",u({parentName:"p"},{href:"https://web.dev/progressive-web-apps/"}),"progressive web application")," that processes traces locally."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Playwright Test traces now include sources by default (these could be turned off with tracing option)"),(0,r.kt)("li",{parentName:"ul"},"Trace Viewer now shows test name"),(0,r.kt)("li",{parentName:"ul"},"New trace metadata tab with browser details"),(0,r.kt)("li",{parentName:"ul"},"Snapshots now have URL bar"))),(0,r.kt)("p",null,(0,r.kt)("img",u({parentName:"p"},{src:"https://user-images.githubusercontent.com/746130/141877831-29e37cd1-e574-4bd9-aab5-b13a463bb4ae.png",alt:"image"}))),(0,r.kt)("h3",u({},{id:"html-report-update"}),"HTML Report Update"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTML report now supports dynamic filtering"),(0,r.kt)("li",{parentName:"ul"},"Report is now a ",(0,r.kt)("strong",{parentName:"li"},"single static HTML file")," that could be sent by e-mail or as a slack attachment.")),(0,r.kt)("p",null,(0,r.kt)("img",u({parentName:"p"},{src:"https://user-images.githubusercontent.com/746130/141877402-e486643d-72c7-4db3-8844-ed2072c5d676.png",alt:"image"}))),(0,r.kt)("h2",u({},{id:"ubuntu-arm64-support--more"}),"Ubuntu ARM64 support + more"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Playwright now supports ",(0,r.kt)("strong",{parentName:"p"},"Ubuntu 20.04 ARM64"),". You can now run Playwright tests inside Docker on Apple M1 and on Raspberry Pi.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can now use Playwright to install stable version of Edge on Linux:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 install msedge\n")))),(0,r.kt)("h3",u({},{id:"new-apis"}),"New APIs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tracing now supports a ",(0,r.kt)("a",u({parentName:"li"},{href:"./api/class-tracing#tracing-start-option-title"}),(0,r.kt)("inlineCode",{parentName:"a"},"'title'"))," option"),(0,r.kt)("li",{parentName:"ul"},"Page navigations support a new ",(0,r.kt)("a",u({parentName:"li"},{href:"./api/class-page#page-goto"}),(0,r.kt)("inlineCode",{parentName:"a"},"'commit'"))," waiting option")),(0,r.kt)("h2",u({},{id:"version-116"}),"Version 1.16"),(0,r.kt)("h3",u({},{id:"-playwright-library"}),"\ud83c\udfad Playwright Library"),(0,r.kt)("h4",u({},{id:"locatorwaitforasync"}),"Locator.WaitForAsync"),(0,r.kt)("p",null,"Wait for a locator to resolve to a single element with a given state. Defaults to the ",(0,r.kt)("inlineCode",{parentName:"p"},"state: 'visible'"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var orderSent = page.Locator("#order-sent");\norderSent.WaitForAsync();\n')),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-locator#locator-wait-for"}),"Locator.WaitForAsync(options)"),"."),(0,r.kt)("h3",u({},{id:"-playwright-trace-viewer"}),"\ud83c\udfad Playwright Trace Viewer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"run trace viewer with ",(0,r.kt)("inlineCode",{parentName:"li"},"pwsh bin\\Debug\\netX\\playwright.ps1 show-trace")," and drop trace files to the trace viewer PWA"),(0,r.kt)("li",{parentName:"ul"},"better visual attribution of action targets")),(0,r.kt)("p",null,"Read more about ",(0,r.kt)("a",u({parentName:"p"},{href:"./trace-viewer"}),"Trace Viewer"),"."),(0,r.kt)("h3",u({},{id:"browser-versions-4"}),"Browser Versions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chromium 97.0.4666.0"),(0,r.kt)("li",{parentName:"ul"},"Mozilla Firefox 93.0"),(0,r.kt)("li",{parentName:"ul"},"WebKit 15.4")),(0,r.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Google Chrome 94"),(0,r.kt)("li",{parentName:"ul"},"Microsoft Edge 94")),(0,r.kt)("h2",u({},{id:"version-115"}),"Version 1.15"),(0,r.kt)("h3",u({},{id:"\ufe0f-mouse-wheel"}),"\ud83d\uddb1\ufe0f Mouse Wheel"),(0,r.kt)("p",null,"By using ",(0,r.kt)("a",u({parentName:"p"},{href:"https://playwright.dev/dotnet/docs/next/api/class-mouse#mouse-wheel"}),(0,r.kt)("inlineCode",{parentName:"a"},"Page.Mouse.WheelAsync"))," you are now able to scroll vertically or horizontally."),(0,r.kt)("h3",u({},{id:"-new-headers-api"}),"\ud83d\udcdc New Headers API"),(0,r.kt)("p",null,"Previously it was not possible to get multiple header values of a response. This is now possible and additional helper functions are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://playwright.dev/dotnet/docs/next/api/class-request#request-all-headers"}),"Request.AllHeadersAsync()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://playwright.dev/dotnet/docs/next/api/class-request#request-headers-array"}),"Request.HeadersArrayAsync()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://playwright.dev/dotnet/docs/next/api/class-request#request-header-value"}),"Request.HeaderValueAsync(name: string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://playwright.dev/dotnet/docs/next/api/class-response#response-all-headers"}),"Response.AllHeadersAsync()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://playwright.dev/dotnet/docs/next/api/class-response#response-headers-array"}),"Response.HeadersArrayAsync()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://playwright.dev/dotnet/docs/next/api/class-response#response-header-value"}),"Response.HeaderValueAsync(name: string)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://playwright.dev/dotnet/docs/next/api/class-response#response-header-values"}),"Response.HeaderValuesAsync(name: string)"))),(0,r.kt)("h3",u({},{id:"-forced-colors-emulation"}),"\ud83c\udf08 Forced-Colors emulation"),(0,r.kt)("p",null,"Its now possible to emulate the ",(0,r.kt)("inlineCode",{parentName:"p"},"forced-colors")," CSS media feature by passing it in the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://playwright.dev/dotnet/docs/next/api/class-browser#browser-new-context-option-forced-colors"}),"context options")," or calling ",(0,r.kt)("a",u({parentName:"p"},{href:"https://playwright.dev/dotnet/docs/next/api/class-page#page-emulate-media"}),"Page.EmulateMediaAsync()"),"."),(0,r.kt)("h3",u({},{id:"new-apis-1"}),"New APIs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://playwright.dev/dotnet/docs/next/api/class-page#page-route"}),"Page.RouteAsync()")," accepts new ",(0,r.kt)("inlineCode",{parentName:"li"},"times")," option to specify how many times this route should be matched."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://playwright.dev/dotnet/docs/next/api/class-page#page-set-checked"}),"Page.SetCheckedAsync(selector: string, checked: Boolean)")," and ",(0,r.kt)("a",u({parentName:"li"},{href:"https://playwright.dev/dotnet/docs/next/api/class-locator#locator-set-checked"}),"Locator.SetCheckedAsync(selector: string, checked: Boolean)")," was introduced to set the checked state of a checkbox."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://playwright.dev/dotnet/docs/next/api/class-request#request-sizes"}),"Request.SizesAsync()")," Returns resource size information for given http request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://playwright.dev/dotnet/docs/next/api/class-tracing#tracing-start-chunk"}),"Tracing.StartChunkAsync()")," - Start a new trace chunk."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://playwright.dev/dotnet/docs/next/api/class-tracing#tracing-stop-chunk"}),"Tracing.StopChunkAsync()")," - Stops a new trace chunk.")),(0,r.kt)("h3",u({},{id:"important-"}),"Important \u26a0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2b06 .NET Core Apps 2.1 are ",(0,r.kt)("strong",{parentName:"li"},"no longer")," supported for our CLI tooling. As of August 31st, 2021, .NET Core 2.1 is no ",(0,r.kt)("a",u({parentName:"li"},{href:"https://devblogs.microsoft.com/dotnet/net-core-2-1-will-reach-end-of-support-on-august-21-2021/"}),"longer supported")," and will not receive any security updates. We've decided to move the CLI forward and require .NET Core 3.1 as a minimum. ")),(0,r.kt)("h3",u({},{id:"browser-versions-5"}),"Browser Versions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chromium 96.0.4641.0"),(0,r.kt)("li",{parentName:"ul"},"Mozilla Firefox 92.0"),(0,r.kt)("li",{parentName:"ul"},"WebKit 15.0")),(0,r.kt)("h2",u({},{id:"version-114"}),"Version 1.14"),(0,r.kt)("h4",u({},{id:"\ufe0f-new-strict-mode"}),'\u26a1\ufe0f New "strict" mode'),(0,r.kt)("p",null,"Selector ambiguity is a common problem in automation testing. ",(0,r.kt)("strong",{parentName:"p"},'"strict" mode')," ensures that your selector points to a single element and throws otherwise."),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"setStrict(true)")," in your action calls to opt in."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// This will throw if you have more than one button!\nawait page.ClickAsync("button", new Page.ClickOptions().setStrict(true));\n')),(0,r.kt)("h4",u({},{id:"-new-locators-api"}),"\ud83d\udccd New ",(0,r.kt)("a",u({parentName:"h4"},{href:"./api/class-locator"}),(0,r.kt)("strong",{parentName:"a"},"Locators API"))),(0,r.kt)("p",null,"Locator represents a view to the element(s) on the page. It captures the logic sufficient to retrieve the element at any given moment."),(0,r.kt)("p",null,"The difference between the ",(0,r.kt)("a",u({parentName:"p"},{href:"./api/class-locator"}),"Locator")," and ",(0,r.kt)("a",u({parentName:"p"},{href:"./api/class-elementhandle"}),"ElementHandle")," is that the latter points to a particular element, while ",(0,r.kt)("a",u({parentName:"p"},{href:"./api/class-locator"}),"Locator")," captures the logic of how to retrieve that element."),(0,r.kt)("p",null,"Also, locators are ",(0,r.kt)("strong",{parentName:"p"},'"strict" by default'),"!"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var locator = page.Locator("button");\nawait locator.ClickAsync();\n')),(0,r.kt)("p",null,"Learn more in the ",(0,r.kt)("a",u({parentName:"p"},{href:"./api/class-locator"}),"documentation"),"."),(0,r.kt)("h4",u({},{id:"-experimental-react-and-vue-selector-engines"}),"\ud83e\udde9 Experimental ",(0,r.kt)("a",u({parentName:"h4"},{href:"./selectors#react-selectors"}),(0,r.kt)("strong",{parentName:"a"},"React"))," and ",(0,r.kt)("a",u({parentName:"h4"},{href:"./selectors#vue-selectors"}),(0,r.kt)("strong",{parentName:"a"},"Vue"))," selector engines"),(0,r.kt)("p",null,"React and Vue selectors allow selecting elements by its component name and/or property values. The syntax is very similar to ",(0,r.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"}),"attribute selectors")," and supports all attribute selector operators."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await page.ClickAsync("_react=SubmitButton[enabled=true]");\nawait page.ClickAsync("_vue=submit-button[enabled=true]");\n')),(0,r.kt)("p",null,"Learn more in the ",(0,r.kt)("a",u({parentName:"p"},{href:"./selectors#react-selectors"}),"react selectors documentation")," and the ",(0,r.kt)("a",u({parentName:"p"},{href:"./selectors#vue-selectors"}),"vue selectors documentation"),"."),(0,r.kt)("h4",u({},{id:"-new-nth-and-visible-selector-engines"}),"\u2728 New ",(0,r.kt)("a",u({parentName:"h4"},{href:"./selectors#n-th-element-selector"}),(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"nth")))," and ",(0,r.kt)("a",u({parentName:"h4"},{href:"./selectors#selecting-visible-elements"}),(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"visible")))," selector engines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"./selectors#n-th-element-selector"}),(0,r.kt)("inlineCode",{parentName:"a"},"nth"))," selector engine is equivalent to the ",(0,r.kt)("inlineCode",{parentName:"li"},":nth-match")," pseudo class, but could be combined with other selector engines."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"./selectors#selecting-visible-elements"}),(0,r.kt)("inlineCode",{parentName:"a"},"visible"))," selector engine is equivalent to the ",(0,r.kt)("inlineCode",{parentName:"li"},":visible")," pseudo class, but could be combined with other selector engines.")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'// select the first button among all buttons\nawait button.ClickAsync("button >> nth=0");\n// or if you are using locators, you can use First, Nth() and Last\nawait page.Locator("button").First.ClickAsync();\n\n// click a visible button\nawait button.ClickAsync("button >> visible=true");\n')),(0,r.kt)("h3",u({},{id:"browser-versions-6"}),"Browser Versions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chromium 94.0.4595.0"),(0,r.kt)("li",{parentName:"ul"},"Mozilla Firefox 91.0"),(0,r.kt)("li",{parentName:"ul"},"WebKit 15.0")),(0,r.kt)("h2",u({},{id:"version-113"}),"Version 1.13"),(0,r.kt)("h4",u({},{id:"playwright"}),"Playwright"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ud83d\udd96 Programmatic drag-and-drop support")," via the ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-drag-and-drop"}),"Page.DragAndDropAsync(source, target, options)")," API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ud83d\udd0e Enhanced HAR")," with body sizes for requests and responses. Use via ",(0,r.kt)("inlineCode",{parentName:"li"},"recordHar")," option in ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)"),".")),(0,r.kt)("h4",u({},{id:"tools"}),"Tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Playwright Trace Viewer now shows parameters, returned values and ",(0,r.kt)("inlineCode",{parentName:"li"},"console.log()")," calls.")),(0,r.kt)("h4",u({},{id:"new-and-overhauled-guides"}),"New and Overhauled Guides"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/intro"}),"Intro")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/auth"}),"Authentication"))),(0,r.kt)("h4",u({},{id:"browser-versions-7"}),"Browser Versions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chromium 93.0.4576.0"),(0,r.kt)("li",{parentName:"ul"},"Mozilla Firefox 90.0"),(0,r.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,r.kt)("h4",u({},{id:"new-playwright-apis"}),"New Playwright APIs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"new ",(0,r.kt)("inlineCode",{parentName:"li"},"baseURL")," option in ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)")," and ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-browser#browser-new-page"}),"Browser.NewPageAsync(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-response#response-security-details"}),"Response.SecurityDetailsAsync()")," and ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-response#response-server-addr"}),"Response.ServerAddrAsync()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-drag-and-drop"}),"Page.DragAndDropAsync(source, target, options)")," and ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-frame#frame-drag-and-drop"}),"Frame.DragAndDropAsync(source, target, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-download#download-cancel"}),"Download.CancelAsync()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-input-value"}),"Page.InputValueAsync(selector, options)"),", ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-frame#frame-input-value"}),"Frame.InputValueAsync(selector, options)")," and ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-elementhandle#element-handle-input-value"}),"ElementHandle.InputValueAsync(options)")),(0,r.kt)("li",{parentName:"ul"},"new ",(0,r.kt)("inlineCode",{parentName:"li"},"force")," option in ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-fill"}),"Page.FillAsync(selector, value, options)"),", ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-frame#frame-fill"}),"Frame.FillAsync(selector, value, options)"),", and ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-elementhandle#element-handle-fill"}),"ElementHandle.FillAsync(value, options)")),(0,r.kt)("li",{parentName:"ul"},"new ",(0,r.kt)("inlineCode",{parentName:"li"},"force")," option in ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page#page-select-option"}),"Page.SelectOptionAsync(selector, values, options)"),", ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-frame#frame-select-option"}),"Frame.SelectOptionAsync(selector, values, options)"),", and ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-elementhandle#element-handle-select-option"}),"ElementHandle.SelectOptionAsync(values, options)"))),(0,r.kt)("h2",u({},{id:"version-112"}),"Version 1.12"),(0,r.kt)("h4",u({},{id:"highlights-2"}),"Highlights"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Playwright for .NET v1.12 is now stable!"),(0,r.kt)("li",{parentName:"ul"},"Ships with the ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/cli#generate-code"}),"codegen")," and ",(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/trace-viewer"}),"trace viewer")," tools out-of-the-box")),(0,r.kt)("h4",u({},{id:"browser-versions-8"}),"Browser Versions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chromium 93.0.4530.0"),(0,r.kt)("li",{parentName:"ul"},"Mozilla Firefox 89.0"),(0,r.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,r.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Google Chrome 91"),(0,r.kt)("li",{parentName:"ul"},"Microsoft Edge 91")))}w.isMDXComponent=!0}}]);