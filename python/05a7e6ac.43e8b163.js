(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{208:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},209:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},210:function(e,t,r){"use strict";var n=r(0),a=r(211);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},211:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},212:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(210),i=r(208),l=r(55),c=r.n(l),s=37,p=39;t.a=function(e){var t=e.lazy,r=e.block,l=e.defaultValue,b=e.values,u=e.groupId,d=e.className,m=Object(o.a)(),O=m.tabGroupChoices,f=m.setTabGroupChoices,j=Object(n.useState)(l),h=j[0],v=j[1],w=n.Children.toArray(e.children);if(null!=u){var k=O[u];null!=k&&k!==h&&b.some((function(e){return e.value===k}))&&v(k)}var y=function(e){v(e),null!=u&&f(u,e)},g=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":r},d)},b.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case p:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(g,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},r)}))),t?Object(n.cloneElement)(w.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},213:function(e,t,r){"use strict";var n=r(3),a=r(0),o=r.n(a);t.a=function(e){var t=e.children,r=e.hidden,a=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:r,className:a}),t)}},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(209)),i=(r(212),r(213),{id:"class-worker",title:"Worker"}),l={unversionedId:"api/class-worker",id:"api/class-worker",isDocsHomePage:!1,title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/docs/api/class-worker.mdx",slug:"/api/class-worker",permalink:"/python/docs/next/api/class-worker",version:"current",sidebar:"api",previous:{title:"WebSocket",permalink:"/python/docs/next/api/class-websocket"}},c=[{value:"worker.on(&quot;close&quot;)",id:"workeronclose",children:[]},{value:"worker.evaluate(expression, **kwargs)",id:"workerevaluateexpression-kwargs",children:[]},{value:"worker.evaluate_handle(expression, **kwargs)",id:"workerevaluate_handleexpression-kwargs",children:[]},{value:"worker.url",id:"workerurl",children:[]}],s={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Worker class represents a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker"),". ",Object(o.b)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",Object(o.b)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'def handle_worker(worker):\n    print("worker created: " + worker.url)\n    worker.on("close", lambda: print("worker destroyed: " + worker.url))\n\npage.on(\'worker\', handle_worker)\n\nprint("current workers:")\nfor worker in page.workers:\n    print("    " + worker.url)\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-worker#workeronclose"}),'worker.on("close")')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-worker#workerevaluateexpression-kwargs"}),"worker.evaluate(expression, **kwargs)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-worker#workerevaluate_handleexpression-kwargs"}),"worker.evaluate_handle(expression, **kwargs)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-worker#workerurl"}),"worker.url"))),Object(o.b)("h2",{id:"workeronclose"},'worker.on("close")'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-worker",title:"Worker"}),"Worker"),">")),Object(o.b)("p",null,"Emitted when this dedicated ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker")," is terminated."),Object(o.b)("h2",{id:"workerevaluateexpression-kwargs"},"worker.evaluate(expression, **kwargs)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"arg")," <","[EvaluationArgument]","> Optional argument to pass to ",Object(o.b)("inlineCode",{parentName:"li"},"page_function")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"expression")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"force_expr")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),"> Whether to treat given ",Object(o.b)("inlineCode",{parentName:"li"},"expression")," as JavaScript evaluate expression, even though it looks like an arrow function. Optional."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">")),Object(o.b)("p",null,"Returns the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"page_function")),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," returns a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," would wait for the promise to resolve and return its value."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," returns a non-",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," value, then ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," returns ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),". DevTools Protocol also supports transferring some additional values that are not serializable by ",Object(o.b)("inlineCode",{parentName:"p"},"JSON"),": ",Object(o.b)("inlineCode",{parentName:"p"},"-0"),", ",Object(o.b)("inlineCode",{parentName:"p"},"NaN"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Infinity"),", ",Object(o.b)("inlineCode",{parentName:"p"},"-Infinity"),", and bigint literals."),Object(o.b)("h2",{id:"workerevaluate_handleexpression-kwargs"},"worker.evaluate_handle(expression, **kwargs)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"arg")," <","[EvaluationArgument]","> Optional argument to pass to ",Object(o.b)("inlineCode",{parentName:"li"},"page_function")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"expression")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"force_expr")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),"> Whether to treat given ",Object(o.b)("inlineCode",{parentName:"li"},"expression")," as JavaScript evaluate expression, even though it looks like an arrow function. Optional."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">")),Object(o.b)("p",null,"Returns the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"page_function")," as in-page object (JSHandle)."),Object(o.b)("p",null,"The only difference between ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," and ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," is that ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," returns in-page object (JSHandle)."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," returns a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," would wait for the promise to resolve and return its value."),Object(o.b)("h2",{id:"workerurl"},"worker.url"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">")))}p.isMDXComponent=!0}}]);