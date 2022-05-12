"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[74258],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(r),g=a,d=h["".concat(l,".").concat(g)]||h[g]||u[g]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},64939:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return h},metadata:function(){return d},toc:function(){return f}});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&p(e,r,t[r]);return e};const h={id:"trace-viewer",title:"Trace Viewer"},g=void 0,d={unversionedId:"trace-viewer",id:"version-1.18/trace-viewer",title:"Trace Viewer",description:"Playwright Trace Viewer is a GUI tool that helps exploring recorded Playwright traces after the script ran. Open traces locally or in your browser on trace.playwright.dev.",source:"@site/versioned_docs/version-1.18/trace-viewer.mdx",sourceDirName:".",slug:"/trace-viewer",permalink:"/java/docs/1.18/trace-viewer",tags:[],version:"1.18",frontMatter:{id:"trace-viewer",title:"Trace Viewer"},sidebar:"version-1.18/docs",previous:{title:"Inspector",permalink:"/java/docs/1.18/inspector"},next:{title:"Test Generator",permalink:"/java/docs/1.18/codegen"}},m={},f=[{value:"Recording a trace",id:"recording-a-trace",level:2},{value:"Viewing the trace",id:"viewing-the-trace",level:2},{value:"Actions",id:"actions",level:2},{value:"Screenshots",id:"screenshots",level:2},{value:"Snapshots",id:"snapshots",level:2},{value:"Viewing remote Traces",id:"viewing-remote-traces",level:2}],w={toc:f};function k(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},w),p),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright Trace Viewer is a GUI tool that helps exploring recorded Playwright traces after the script ran. Open traces ",(0,n.kt)("a",u({parentName:"p"},{href:"#viewing-the-trace"}),"locally")," or in your browser on ",(0,n.kt)("a",u({parentName:"p"},{href:"https://trace.playwright.dev"}),(0,n.kt)("inlineCode",{parentName:"a"},"trace.playwright.dev")),"."),(0,n.kt)("img",{width:"1212",alt:"Playwright Trace Viewer",src:"https://user-images.githubusercontent.com/883973/120585896-6a1bca80-c3e7-11eb-951a-bd84002480f5.png"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#recording-a-trace"}),"Recording a trace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#viewing-the-trace"}),"Viewing the trace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#actions"}),"Actions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#screenshots"}),"Screenshots")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#snapshots"}),"Snapshots")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#viewing-remote-traces"}),"Viewing remote Traces"))),(0,n.kt)("h2",u({},{id:"recording-a-trace"}),"Recording a trace"),(0,n.kt)("p",null,"Traces can be recorded using the ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/1.18/api/class-browsercontext#browser-context-tracing"}),"BrowserContext.tracing()")," API as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),'Browser browser = browserType.launch();\nBrowserContext context = browser.newContext();\n\n// Start tracing before creating / navigating a page.\ncontext.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true));\n\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\n\n// Stop tracing and export it into a zip archive.\ncontext.tracing().stop(new Tracing.StopOptions()\n  .setPath(Paths.get("trace.zip")));\n')),(0,n.kt)("p",null,"This will record the trace and place it into the file named ",(0,n.kt)("inlineCode",{parentName:"p"},"trace.zip"),"."),(0,n.kt)("h2",u({},{id:"viewing-the-trace"}),"Viewing the trace"),(0,n.kt)("p",null,"You can open the saved trace using Playwright CLI or in your browser on ",(0,n.kt)("a",u({parentName:"p"},{href:"https://trace.playwright.dev"}),(0,n.kt)("inlineCode",{parentName:"a"},"trace.playwright.dev")),"."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="show-trace trace.zip"\n')),(0,n.kt)("h2",u({},{id:"actions"}),"Actions"),(0,n.kt)("p",null,"Once trace is opened, you will see the list of actions Playwright performed on the left hand side:"),(0,n.kt)("img",{width:"301",alt:"Actions",src:"https://user-images.githubusercontent.com/883973/120588303-d39dd800-c3eb-11eb-9e8b-bfea8b775354.png"}),(0,n.kt)("p",null,"Selecting each action reveals:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"action snapshots,"),(0,n.kt)("li",{parentName:"ul"},"action log,"),(0,n.kt)("li",{parentName:"ul"},"source code location,"),(0,n.kt)("li",{parentName:"ul"},"network log for this action")),(0,n.kt)("p",null,"in the properties pane. You will also see rendered DOM snapshots associated with each action."),(0,n.kt)("h2",u({},{id:"screenshots"}),"Screenshots"),(0,n.kt)("p",null,"When tracing with the ",(0,n.kt)("inlineCode",{parentName:"p"},"screenshots")," option turned on, each trace records screencast and renders it as a film strip:"),(0,n.kt)("img",{width:"353",alt:"Film strip",src:"https://user-images.githubusercontent.com/883973/120588069-5d997100-c3eb-11eb-97a3-acbd5e0eb358.png"}),(0,n.kt)("p",null,"You can hover over the film strip to see a magnified image:"),(0,n.kt)("img",{width:"617",alt:"Magnify",src:"https://user-images.githubusercontent.com/883973/120588147-8f123c80-c3eb-11eb-864b-19d800619234.png"}),(0,n.kt)("p",null,"That helps locating the action of interest very quickly."),(0,n.kt)("h2",u({},{id:"snapshots"}),"Snapshots"),(0,n.kt)("p",null,"When tracing with the ",(0,n.kt)("inlineCode",{parentName:"p"},"snapshots")," option turned on, Playwright captures a set of complete DOM snapshots for each action. Depending on the type of the action, it will capture:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Before"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A snapshot at the time action is called.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Action"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A snapshot at the moment of the performed input. This type of snapshot is especially useful when exploring where exactly Playwright clicked.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"After"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"A snapshot after the action.")))),(0,n.kt)("br",null),(0,n.kt)("p",null,"Here is what the typical Action snapshot looks like:"),(0,n.kt)("img",{width:"682",alt:"Snapshots",src:"https://user-images.githubusercontent.com/883973/120588728-879f6300-c3ec-11eb-85d6-e67b0e92e4e3.png"}),(0,n.kt)("p",null,"Notice how it highlights both, the DOM Node as well as the exact click position."),(0,n.kt)("h2",u({},{id:"viewing-remote-traces"}),"Viewing remote Traces"),(0,n.kt)("p",null,"You can open remote traces using it's URL. They could be generated in a CI run and makes it easy to view the remote trace without having to manually download the file."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="show-trace https://example.com/trace.zip"\n')))}k.isMDXComponent=!0}}]);