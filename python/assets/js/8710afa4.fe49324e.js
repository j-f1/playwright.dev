"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[606],{78253:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return h},toc:function(){return g},default:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(26396),o=a(58215),s=["components"],p={id:"inspector",title:"Inspector"},c=void 0,h={unversionedId:"inspector",id:"inspector",isDocsHomePage:!1,title:"Inspector",description:"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts.",source:"@site/docs/inspector.mdx",sourceDirName:".",slug:"/inspector",permalink:"/python/docs/next/inspector",tags:[],version:"current",frontMatter:{id:"inspector",title:"Inspector"},sidebar:"docs",previous:{title:"Getting started",permalink:"/python/docs/next/intro"},next:{title:"Trace Viewer",permalink:"/python/docs/next/trace-viewer"}},g=[{value:"Open Playwright Inspector",id:"open-playwright-inspector",children:[],level:2},{value:"Stepping through the Playwright script",id:"stepping-through-the-playwright-script",children:[],level:2},{value:"Using Browser Developer Tools",id:"using-browser-developer-tools",children:[],level:2},{value:"Debugging Selectors",id:"debugging-selectors",children:[{value:"playwright.$(selector)",id:"playwrightselector",children:[],level:4},{value:"playwright.$$(selector)",id:"playwrightselector-1",children:[],level:4},{value:"playwright.inspect(selector)",id:"playwrightinspectselector",children:[],level:4},{value:"playwright.locator(selector)",id:"playwrightlocatorselector",children:[],level:4},{value:"playwright.selector(element)",id:"playwrightselectorelement",children:[],level:4}],level:2},{value:"Recording scripts",id:"recording-scripts",children:[],level:2}],u={toc:g};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts."),(0,i.kt)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#open-playwright-inspector"},"Open Playwright Inspector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#stepping-through-the-playwright-script"},"Stepping through the Playwright script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-browser-developer-tools"},"Using Browser Developer Tools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#debugging-selectors"},"Debugging Selectors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#recording-scripts"},"Recording scripts"))),(0,i.kt)("h2",{id:"open-playwright-inspector"},"Open Playwright Inspector"),(0,i.kt)("p",null,"There are several ways of opening Playwright Inspector:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. This configures Playwright for debugging and opens the inspector."),(0,i.kt)(l.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PWDEBUG=1 pytest -s\n"))),(0,i.kt)(o.Z,{value:"powershell",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:PWDEBUG=1\npytest -s\n"))),(0,i.kt)(o.Z,{value:"batch",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-batch"},"set PWDEBUG=1\npytest -s\n")))),(0,i.kt)("p",{parentName:"li"},"Additional useful defaults are configured when ",(0,i.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," is set:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Browsers launch in the headed mode"),(0,i.kt)("li",{parentName:"ul"},"Default timeout is set to 0 (= no timeout)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Call ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-pause"},"page.pause()")," method from your script when running in headed browser."),(0,i.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Pause on the following line.\npage.pause()\n"))),(0,i.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Pause on the following line.\nawait page.pause()\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"codegen")," commands in the Playwright ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/cli"},"CLI"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"playwright codegen wikipedia.org\n")))),(0,i.kt)("h2",{id:"stepping-through-the-playwright-script"},"Stepping through the Playwright script"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," is set, Playwright Inspector window will be opened and the script will be paused on the first Playwright statement:"),(0,i.kt)("img",{width:"557",alt:"Paused on line",src:"https://user-images.githubusercontent.com/883973/108614337-71761580-73ae-11eb-9f61-3d29c52c9520.png"}),(0,i.kt)("p",null,"Now we know what action is about to be performed and we can look into the details on that action. For example, when stopped on an input action such as ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),", the exact point Playwright is about to click is highlighted with the large red dot on the inspected page:"),(0,i.kt)("img",{width:"344",alt:"Red dot on inspected page",src:"https://user-images.githubusercontent.com/883973/108614363-b69a4780-73ae-11eb-8f5e-51f9c91ec9b4.png"}),(0,i.kt)("p",null,"By the time Playwright has paused on that click action, it has already performed actionability checks that can be found in the log:"),(0,i.kt)("img",{width:"712",alt:"Action log",src:"https://user-images.githubusercontent.com/883973/108614564-72a84200-73b0-11eb-9de2-828b28d78b36.png"}),(0,i.kt)("p",null,"If actionability can't be reached, it'll show action as pending:"),(0,i.kt)("img",{width:"712",alt:"Pending action",src:"https://user-images.githubusercontent.com/883973/108614840-e6e3e500-73b2-11eb-998f-0cf31b2aa9a2.png"}),(0,i.kt)("p",null,'You can step over each action using the "Step over" action or resume script without further pauses:'),(0,i.kt)("center",null,(0,i.kt)("img",{width:"98",alt:"Stepping toolbar",src:"https://user-images.githubusercontent.com/883973/108614389-f9f4b600-73ae-11eb-8df2-8d9ce9da5d5c.png"})),(0,i.kt)("h2",{id:"using-browser-developer-tools"},"Using Browser Developer Tools"),(0,i.kt)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script, with or without Playwright inspector. Developer tools help to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inspect the DOM tree"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/verification#console-logs"},"read logs via API"),")"),(0,i.kt)("li",{parentName:"ul"},"Check ",(0,i.kt)("strong",{parentName:"li"},"network activity")," and other developer tools features")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"For WebKit"),": launching WebKit Inspector during the execution will   prevent the Playwright script from executing any further."))),(0,i.kt)("h2",{id:"debugging-selectors"},"Debugging Selectors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the Explore button to hover over elements in the screen and click them to automatically generate selectors for those elements."),(0,i.kt)("li",{parentName:"ul"},"To verify where selector points, paste it into the inspector input field:")),(0,i.kt)("img",{width:"602",alt:"Selectors toolbar",src:"https://user-images.githubusercontent.com/883973/108614696-ad5eaa00-73b1-11eb-81f5-9eebe62543a2.png"}),(0,i.kt)("p",null,"You can also use the following API inside the Developer Tools Console of any browser."),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,i.kt)("h4",{id:"playwrightselector"},"playwright.$(selector)"),(0,i.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,i.kt)("h4",{id:"playwrightselector-1"},"playwright.$$(selector)"),(0,i.kt)("p",null,"Same as ",(0,i.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,i.kt)("h4",{id:"playwrightinspectselector"},"playwright.inspect(selector)"),(0,i.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,i.kt)("h4",{id:"playwrightlocatorselector"},"playwright.locator(selector)"),(0,i.kt)("p",null,"Query Playwright element using the actual Playwright query engine, for example:"),(0,i.kt)("h4",{id:"playwrightselectorelement"},"playwright.selector(element)"),(0,i.kt)("p",null,"Generates selector for the given element."),(0,i.kt)("h2",{id:"recording-scripts"},"Recording scripts"),(0,i.kt)("p",null,"At any moment, clicking Record action enables ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/codegen"},"codegen mode"),". Every action on the target page is turned into the generated script:"),(0,i.kt)("img",{width:"712",alt:"Recorded script",src:"https://user-images.githubusercontent.com/883973/108614897-85704600-73b3-11eb-8bcd-f2e129786c49.png"}),(0,i.kt)("p",null,"You can copy entire generated script or clear it using toolbar actions."))}d.isMDXComponent=!0}}]);