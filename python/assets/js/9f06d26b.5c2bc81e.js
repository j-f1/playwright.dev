"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7544],{3889:function(t,a,e){e.r(a),e.d(a,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return g},default:function(){return k}});var n=e(7462),r=e(3366),i=(e(7294),e(3905)),s=e(6396),c=e(8215),o=["components"],l={id:"class-tracing",title:"Tracing"},p=void 0,h={unversionedId:"api/class-tracing",id:"api/class-tracing",isDocsHomePage:!1,title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened in Trace Viewer after Playwright script runs.",source:"@site/docs/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/python/docs/next/api/class-tracing",tags:[],version:"current",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"api",previous:{title:"Touchscreen",permalink:"/python/docs/next/api/class-touchscreen"},next:{title:"Video",permalink:"/python/docs/next/api/class-video"}},g=[{value:"tracing.start(**kwargs)",id:"tracing-start",children:[],level:2},{value:"tracing.start_chunk(**kwargs)",id:"tracing-start-chunk",children:[],level:2},{value:"tracing.stop(**kwargs)",id:"tracing-stop",children:[],level:2},{value:"tracing.stop_chunk(**kwargs)",id:"tracing-stop-chunk",children:[],level:2}],u={toc:g};function k(t){var a=t.components,e=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened in ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/trace-viewer"},"Trace Viewer")," after Playwright script runs."),(0,i.kt)("p",null,"Start recording a trace before performing actions. At the end, stop tracing and save it to a file."),(0,i.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'browser = chromium.launch()\ncontext = browser.new_context()\ncontext.tracing.start(screenshots=True, snapshots=True)\npage = context.new_page()\npage.goto("https://playwright.dev")\ncontext.tracing.stop(path = "trace.zip")\n'))),(0,i.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'browser = await chromium.launch()\ncontext = await browser.new_context()\nawait context.tracing.start(screenshots=True, snapshots=True)\npage = await context.new_page()\nawait page.goto("https://playwright.dev")\nawait context.tracing.stop(path = "trace.zip")\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-tracing#tracing-start"},"tracing.start(**kwargs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-tracing#tracing-start-chunk"},"tracing.start_chunk(**kwargs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-tracing#tracing-stop"},"tracing.stop(**kwargs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-tracing#tracing-stop-chunk"},"tracing.stop_chunk(**kwargs)"))),(0,i.kt)("h2",{id:"tracing-start"},"tracing.start(**kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"traces_dir")," folder specified in ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-browsertype#browser-type-launch"},"browser_type.launch(**kwargs)"),".",(0,i.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"screenshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,i.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snapshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," If this option is true tracing will",(0,i.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"capture DOM snapshot on every action"),(0,i.kt)("li",{parentName:"ul"},"record network activity"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sources"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-sources"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">"," Whether to include source files for trace actions.",(0,i.kt)("a",{href:"#tracing-start-option-sources",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-title"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Trace name to be shown in the Trace Viewer.",(0,i.kt)("a",{href:"#tracing-start-option-title",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,i.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Start tracing."),(0,i.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage = context.new_page()\npage.goto("https://playwright.dev")\ncontext.tracing.stop(path = "trace.zip")\n'))),(0,i.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'await context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage = await context.new_page()\nawait page.goto("https://playwright.dev")\nawait context.tracing.stop(path = "trace.zip")\n')))),(0,i.kt)("h2",{id:"tracing-start-chunk"},"tracing.start_chunk(**kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-option-title"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Trace name to be shown in the Trace Viewer.",(0,i.kt)("a",{href:"#tracing-start-chunk-option-title",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,i.kt)("a",{href:"#tracing-start-chunk-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Start a new trace chunk. If you'd like to record multiple traces on the same ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", use ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-tracing#tracing-start"},"tracing.start(**kwargs)")," once, and then create multiple trace chunks with ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-tracing#tracing-start-chunk"},"tracing.start_chunk(**kwargs)")," and ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-tracing#tracing-stop-chunk"},"tracing.stop_chunk(**kwargs)"),"."),(0,i.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"sync",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage = context.new_page()\npage.goto("https://playwright.dev")\n\ncontext.tracing.start_chunk()\npage.click("text=Get Started")\n# Everything between start_chunk and stop_chunk will be recorded in the trace.\ncontext.tracing.stop_chunk(path = "trace1.zip")\n\ncontext.tracing.start_chunk()\npage.goto("http://example.com")\n# Save a second trace file with different actions.\ncontext.tracing.stop_chunk(path = "trace2.zip")\n'))),(0,i.kt)(c.Z,{value:"async",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'await context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage = await context.new_page()\nawait page.goto("https://playwright.dev")\n\nawait context.tracing.start_chunk()\nawait page.click("text=Get Started")\n# Everything between start_chunk and stop_chunk will be recorded in the trace.\nawait context.tracing.stop_chunk(path = "trace1.zip")\n\nawait context.tracing.start_chunk()\nawait page.goto("http://example.com")\n# Save a second trace file with different actions.\nawait context.tracing.stop_chunk(path = "trace2.zip")\n')))),(0,i.kt)("h2",{id:"tracing-stop"},"tracing.stop(**kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,i.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]",">"," Export trace into the file with the given path.",(0,i.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,i.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Stop tracing."),(0,i.kt)("h2",{id:"tracing-stop-chunk"},"tracing.stop_chunk(**kwargs)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"},"Union"),"[",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,i.kt)("a",{parentName:"li",href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"},"pathlib.Path"),"]",">"," Export trace collected since the last ",(0,i.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-tracing#tracing-start-chunk"},"tracing.start_chunk(**kwargs)")," call into the file with the given path.",(0,i.kt)("a",{href:"#tracing-stop-chunk-option-path",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,i.kt)("a",{href:"#tracing-stop-chunk-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Stop the trace chunk. See ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-tracing#tracing-start-chunk"},"tracing.start_chunk(**kwargs)")," for more details about multiple trace chunks."))}k.isMDXComponent=!0}}]);