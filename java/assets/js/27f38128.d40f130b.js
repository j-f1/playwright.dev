"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[41990],{3905:function(e,r,a){a.d(r,{Zo:function(){return c},kt:function(){return d}});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),p=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},k={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||o;return a?t.createElement(m,l(l({ref:r},c),{},{components:a})):t.createElement(m,l({ref:r},c))}));function d(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},571:function(e,r,a){a.r(r),a.d(r,{assets:function(){return h},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return v}});var t=a(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,a)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,k=(e,r)=>{for(var a in r||(r={}))s.call(r,a)&&c(e,a,r[a]);if(i)for(var a of i(r))p.call(r,a)&&c(e,a,r[a]);return e};const u={id:"class-worker",title:"Worker"},d=void 0,m={unversionedId:"api/class-worker",id:"version-1.19/api/class-worker",title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/versioned_docs/version-1.19/api/class-worker.mdx",sourceDirName:"api",slug:"/api/class-worker",permalink:"/java/docs/1.19/api/class-worker",tags:[],version:"1.19",frontMatter:{id:"class-worker",title:"Worker"},sidebar:"version-1.19/api",previous:{title:"WebSocketFrame",permalink:"/java/docs/1.19/api/class-websocketframe"}},h={},v=[{value:"Worker.onClose(handler)",id:"worker-event-close",level:2},{value:"Worker.evaluate(expression, arg)",id:"worker-evaluate",level:2},{value:"Worker.evaluateHandle(expression, arg)",id:"worker-evaluate-handle",level:2},{value:"Worker.url()",id:"worker-url",level:2},{value:"Worker.waitForClose(options, callback)",id:"worker-wait-for-close",level:2}],f={toc:v};function w(e){var r,a=e,{components:n}=a,c=((e,r)=>{var a={};for(var t in e)s.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&i)for(var t of i(e))r.indexOf(t)<0&&p.call(e,t)&&(a[t]=e[t]);return a})(a,["components"]);return(0,t.kt)("wrapper",(r=k(k({},f),c),o(r,l({components:n,mdxType:"MDXLayout"}))),(0,t.kt)("p",null,"The Worker class represents a ",(0,t.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker"),". ",(0,t.kt)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",(0,t.kt)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),(0,t.kt)("pre",null,(0,t.kt)("code",k({parentName:"pre"},{className:"language-java"}),'page.onWorker(worker -> {\n  System.out.println("Worker created: " + worker.url());\n  worker.onClose(worker1 -> System.out.println("Worker destroyed: " + worker1.url()));\n});\nSystem.out.println("Current workers:");\nfor (Worker worker : page.workers())\n  System.out.println("  " + worker.url());\n')),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",k({parentName:"li"},{href:"/java/docs/1.19/api/class-worker#worker-event-close"}),"Worker.onClose(handler)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",k({parentName:"li"},{href:"/java/docs/1.19/api/class-worker#worker-evaluate"}),"Worker.evaluate(expression[, arg])")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",k({parentName:"li"},{href:"/java/docs/1.19/api/class-worker#worker-evaluate-handle"}),"Worker.evaluateHandle(expression[, arg])")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",k({parentName:"li"},{href:"/java/docs/1.19/api/class-worker#worker-url"}),"Worker.url()")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",k({parentName:"li"},{href:"/java/docs/1.19/api/class-worker#worker-wait-for-close"}),"Worker.waitForClose([options], callback)"))),(0,t.kt)("h2",k({},{id:"worker-event-close"}),"Worker.onClose(handler)"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"type: ","<",(0,t.kt)("a",k({parentName:"li"},{href:"/java/docs/1.19/api/class-worker",title:"Worker"}),"Worker"),">")),(0,t.kt)("p",null,"Emitted when this dedicated ",(0,t.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker")," is terminated."),(0,t.kt)("h2",k({},{id:"worker-evaluate"}),"Worker.evaluate(expression","[, arg]",")"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"expression"),(0,t.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-expression"})," ","<",(0,t.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,t.kt)("a",{href:"#worker-evaluate-option-expression",class:"list-anchor"},"#")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"arg"),(0,t.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-arg"})," ","<",(0,t.kt)("a",k({parentName:"li"},{href:"/java/docs/1.19/evaluating#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),">"," Optional argument to pass to ",(0,t.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,t.kt)("a",{href:"#worker-evaluate-option-arg",class:"list-anchor"},"#")),(0,t.kt)("li",{parentName:"ul"},"returns:",(0,t.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-return"})," ","<",(0,t.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html",title:"Object"}),"Object"),">",(0,t.kt)("a",{href:"#worker-evaluate-return",class:"list-anchor"},"#"))),(0,t.kt)("p",null,"Returns the return value of ",(0,t.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,t.kt)("p",null,"If the function passed to the ",(0,t.kt)("a",k({parentName:"p"},{href:"/java/docs/1.19/api/class-worker#worker-evaluate"}),"Worker.evaluate(expression[, arg])")," returns a ",(0,t.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",(0,t.kt)("a",k({parentName:"p"},{href:"/java/docs/1.19/api/class-worker#worker-evaluate"}),"Worker.evaluate(expression[, arg])")," would wait for the promise to resolve and return its value."),(0,t.kt)("p",null,"If the function passed to the ",(0,t.kt)("a",k({parentName:"p"},{href:"/java/docs/1.19/api/class-worker#worker-evaluate"}),"Worker.evaluate(expression[, arg])")," returns a non-",(0,t.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," value, then ",(0,t.kt)("a",k({parentName:"p"},{href:"/java/docs/1.19/api/class-worker#worker-evaluate"}),"Worker.evaluate(expression[, arg])")," returns ",(0,t.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,t.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,t.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,t.kt)("h2",k({},{id:"worker-evaluate-handle"}),"Worker.evaluateHandle(expression","[, arg]",")"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"expression"),(0,t.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-expression"})," ","<",(0,t.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,t.kt)("a",{href:"#worker-evaluate-handle-option-expression",class:"list-anchor"},"#")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"arg"),(0,t.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-arg"})," ","<",(0,t.kt)("a",k({parentName:"li"},{href:"/java/docs/1.19/evaluating#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),">"," Optional argument to pass to ",(0,t.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,t.kt)("a",{href:"#worker-evaluate-handle-option-arg",class:"list-anchor"},"#")),(0,t.kt)("li",{parentName:"ul"},"returns:",(0,t.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-return"})," ","<",(0,t.kt)("a",k({parentName:"li"},{href:"/java/docs/1.19/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">",(0,t.kt)("a",{href:"#worker-evaluate-handle-return",class:"list-anchor"},"#"))),(0,t.kt)("p",null,"Returns the return value of ",(0,t.kt)("inlineCode",{parentName:"p"},"expression")," as a ",(0,t.kt)("a",k({parentName:"p"},{href:"/java/docs/1.19/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),(0,t.kt)("p",null,"The only difference between ",(0,t.kt)("a",k({parentName:"p"},{href:"/java/docs/1.19/api/class-worker#worker-evaluate"}),"Worker.evaluate(expression[, arg])")," and ",(0,t.kt)("a",k({parentName:"p"},{href:"/java/docs/1.19/api/class-worker#worker-evaluate-handle"}),"Worker.evaluateHandle(expression[, arg])")," is that ",(0,t.kt)("a",k({parentName:"p"},{href:"/java/docs/1.19/api/class-worker#worker-evaluate-handle"}),"Worker.evaluateHandle(expression[, arg])")," returns ",(0,t.kt)("a",k({parentName:"p"},{href:"/java/docs/1.19/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),(0,t.kt)("p",null,"If the function passed to the ",(0,t.kt)("a",k({parentName:"p"},{href:"/java/docs/1.19/api/class-worker#worker-evaluate-handle"}),"Worker.evaluateHandle(expression[, arg])")," returns a ",(0,t.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",(0,t.kt)("a",k({parentName:"p"},{href:"/java/docs/1.19/api/class-worker#worker-evaluate-handle"}),"Worker.evaluateHandle(expression[, arg])")," would wait for the promise to resolve and return its value."),(0,t.kt)("h2",k({},{id:"worker-url"}),"Worker.url()"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"returns:",(0,t.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-url-return"})," ","<",(0,t.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,t.kt)("a",{href:"#worker-url-return",class:"list-anchor"},"#"))),(0,t.kt)("h2",k({},{id:"worker-wait-for-close"}),"Worker.waitForClose(","[options]",", callback)"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,t.kt)("inlineCode",{parentName:"li"},"Worker.WaitForCloseOptions"),">",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"setTimeout"),(0,t.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-wait-for-close-option-timeout"})," ","<",(0,t.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Maximum time to wait for in milliseconds. Defaults to ",(0,t.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,t.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,t.kt)("a",k({parentName:"li"},{href:"/java/docs/1.19/api/class-browsercontext#browser-context-set-default-timeout"}),"BrowserContext.setDefaultTimeout(timeout)"),".",(0,t.kt)("a",{href:"#worker-wait-for-close-option-timeout",class:"list-anchor"},"#")))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"callback"),(0,t.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-wait-for-close-option-callback"})," ","<",(0,t.kt)("a",k({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html",title:"Runnable"}),"Runnable"),">"," Callback that performs the action triggering the event.",(0,t.kt)("a",{href:"#worker-wait-for-close-option-callback",class:"list-anchor"},"#")),(0,t.kt)("li",{parentName:"ul"},"returns:",(0,t.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-wait-for-close-return"})," ","<",(0,t.kt)("a",k({parentName:"li"},{href:"/java/docs/1.19/api/class-worker",title:"Worker"}),"Worker"),">",(0,t.kt)("a",{href:"#worker-wait-for-close-return",class:"list-anchor"},"#"))),(0,t.kt)("p",null,"Performs action and waits for the Worker to close."))}w.isMDXComponent=!0}}]);