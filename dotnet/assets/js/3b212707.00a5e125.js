"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6598],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,g=h["".concat(s,".").concat(d)]||h[d]||c[d]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3811:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))i.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},3824:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(7294),r=n(4939),l=n(9670),o=n(6010),i="tabItem_LplD",s=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&g(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&g(e,n,t[n]);return e};function b(e){var t,n,r;const{lazy:s,block:c,defaultValue:h,values:d,groupId:g,className:b}=e,w=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=d?d:w.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,l.lx)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===h?h:null!=(r=null!=h?h:null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(n=w[0])?void 0:n.props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,l.UB)(),[P,T]=(0,a.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,l.o5)();if(null!=g){const e=y[g];null!=e&&e!==P&&f.some((t=>t.value===e))&&T(e)}const D=e=>{const t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==P&&(C(t),T(a),null!=g&&N(g,a))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]||O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]||O[O.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},b)},f.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=m({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>O.push(e),onKeyDown:x,onFocus:D,onClick:D},n),l={className:(0,o.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":P===e})},p(r,u(l))),null!=t?t:e);var r,l}))),s?(0,a.cloneElement)(w.filter((e=>e.props.value===P))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function w(e){const t=(0,r.Z)();return a.createElement(b,m({key:String(t)},e))}},4752:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return f}});var a=n(3905),r=n(3824),l=n(3811),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&h(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&h(e,n,t[n]);return e};const g={id:"debug",title:"Debugging Tests"},m=void 0,b={unversionedId:"debug",id:"version-stable/debug",title:"Debugging Tests",description:"The Playwright inspector is a great tool to help with debugging. It opens up a browser window highlighting the selectors as you step through each line of the test. You can also use the explore button to find other available selectors which you can then copy into your test file and rerun your tests to see if it passes.",source:"@site/versioned_docs/version-stable/debug.mdx",sourceDirName:".",slug:"/debug",permalink:"/dotnet/docs/debug",tags:[],version:"stable",frontMatter:{id:"debug",title:"Debugging Tests"},sidebar:"docs",previous:{title:"Running Tests",permalink:"/dotnet/docs/running-tests"},next:{title:"Test Generator",permalink:"/dotnet/docs/codegen"}},w={},f=[{value:"Playwright Inspector",id:"playwright-inspector",level:2},{value:"Using PWDEBUG",id:"using-pwdebug",level:3},{value:"Selectors in Developer Tools Console",id:"selectors-in-developer-tools-console",level:4},{value:"Using page.pause",id:"using-pagepause",level:3},{value:"Stepping through the Playwright script",id:"stepping-through-the-playwright-script",level:2},{value:"Browser Developer Tools",id:"browser-developer-tools",level:2},{value:"Debugging Selectors",id:"debugging-selectors",level:2},{value:"playwright.$(selector)",id:"playwrightselector",level:4},{value:"playwright.$$(selector)",id:"playwrightselector-1",level:4},{value:"playwright.inspect(selector)",id:"playwrightinspectselector",level:4},{value:"playwright.locator(selector)",id:"playwrightlocatorselector",level:4},{value:"playwright.selector(element)",id:"playwrightselectorelement",level:4},{value:"Run Tests in headed mode",id:"run-tests-in-headed-mode",level:2},{value:"Verbose API logs",id:"verbose-api-logs",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],k={toc:f};function v(e){var t,n=e,{components:o}=n,h=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},k),h),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The Playwright inspector is a great tool to help with debugging. It opens up a browser window highlighting the selectors as you step through each line of the test. You can also use the explore button to find other available ",(0,a.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/selectors"}),"selectors")," which you can then copy into your test file and rerun your tests to see if it passes."),(0,a.kt)("h2",d({},{id:"playwright-inspector"}),"Playwright Inspector"),(0,a.kt)("p",null,"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts. That's our default recommended tool for scripts troubleshooting."),(0,a.kt)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),(0,a.kt)("p",null,"There are several ways of opening Playwright Inspector:"),(0,a.kt)("h3",d({},{id:"using-pwdebug"}),"Using PWDEBUG"),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. This configures Playwright for debugging and opens the inspector."),(0,a.kt)(r.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"PWDEBUG=1 dotnet test\n"))),(0,a.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),"$env:PWDEBUG=1\ndotnet test\n"))),(0,a.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PWDEBUG=1\ndotnet test\n")))),(0,a.kt)("p",null,"Additional useful defaults are configured when ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," is set:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browsers launch in the headed mode"),(0,a.kt)("li",{parentName:"ul"},"Default timeout is set to 0 (= no timeout)")),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG=console")," will configure the browser for debugging in Developer tools console:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Runs headed"),": Browsers always launch in headed mode"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Disables timeout"),": Sets default timeout to 0 (= no timeout)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Console helper"),": Configures a ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright")," object in the browser to generate and highlight ",(0,a.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/selectors"}),"Playwright selectors"),". This can be used to verify text or composite selectors.")),(0,a.kt)("h4",d({},{id:"selectors-in-developer-tools-console"}),"Selectors in Developer Tools Console"),(0,a.kt)("p",null,"When running in Debug Mode with ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG=console"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright")," object is available in Developer tools console."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run with ",(0,a.kt)("inlineCode",{parentName:"li"},"PWDEBUG=console")),(0,a.kt)("li",{parentName:"ol"},"Setup a breakpoint to pause the execution"),(0,a.kt)("li",{parentName:"ol"},"Open the console panel in browser developer tools"),(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright")," API",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.$(selector)"),": Highlight the first occurrence of the selector. This reflects how ",(0,a.kt)("inlineCode",{parentName:"li"},"page.$")," would see the page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.$$(selector)"),": Highlight all occurrences of the selector. This reflects how ",(0,a.kt)("inlineCode",{parentName:"li"},"page.$$")," would see the page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.inspect(selector)"),": Inspect the selector in the Elements panel."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.locator(selector)"),": Highlight the first occurrence of the locator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.clear()"),": Clear existing highlights."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.selector(element)"),": Generate a selector that points to the element.")))),(0,a.kt)("a",{href:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png"},(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png",width:"500",alt:"Highlight selectors"})),(0,a.kt)("h3",d({},{id:"using-pagepause"}),"Using page.pause"),(0,a.kt)("p",null,"Call ",(0,a.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-pause"}),"Page.PauseAsync()")," method from your script when running in headed browser."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-csharp"}),"// Pause on the following line.\nawait page.PauseAsync();\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"codegen")," commands in the Playwright ",(0,a.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/cli"}),"CLI"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 codegen wikipedia.org\n")))),(0,a.kt)("h2",d({},{id:"stepping-through-the-playwright-script"}),"Stepping through the Playwright script"),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," is set, Playwright Inspector window will be opened and the script will be paused on the first Playwright statement:"),(0,a.kt)("img",{width:"557",alt:"Paused on line",src:"https://user-images.githubusercontent.com/883973/108614337-71761580-73ae-11eb-9f61-3d29c52c9520.png"}),(0,a.kt)("p",null,"Now we know what action is about to be performed and we can look into the details on that action. For example, when stopped on an input action such as ",(0,a.kt)("inlineCode",{parentName:"p"},"click"),", the exact point Playwright is about to click is highlighted with the large red dot on the inspected page:"),(0,a.kt)("img",{width:"344",alt:"Red dot on inspected page",src:"https://user-images.githubusercontent.com/883973/108614363-b69a4780-73ae-11eb-8f5e-51f9c91ec9b4.png"}),(0,a.kt)("p",null,"By the time Playwright has paused on that click action, it has already performed actionability checks that can be found in the log:"),(0,a.kt)("img",{width:"712",alt:"Action log",src:"https://user-images.githubusercontent.com/883973/108614564-72a84200-73b0-11eb-9de2-828b28d78b36.png"}),(0,a.kt)("p",null,"If actionability can't be reached, it'll show action as pending:"),(0,a.kt)("img",{width:"712",alt:"Pending action",src:"https://user-images.githubusercontent.com/883973/108614840-e6e3e500-73b2-11eb-998f-0cf31b2aa9a2.png"}),(0,a.kt)("p",null,'You can step over each action using the "Step over" action (keyboard shortcut: ',(0,a.kt)("inlineCode",{parentName:"p"},"F10"),") or resume script without further pauses (",(0,a.kt)("inlineCode",{parentName:"p"},"F8"),"):"),(0,a.kt)("center",null,(0,a.kt)("img",{width:"98",alt:"Stepping toolbar",src:"https://user-images.githubusercontent.com/883973/108614389-f9f4b600-73ae-11eb-8df2-8d9ce9da5d5c.png"})),(0,a.kt)("h2",d({},{id:"browser-developer-tools"}),"Browser Developer Tools"),(0,a.kt)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script in headed mode. Developer tools help to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inspect the DOM tree and ",(0,a.kt)("strong",{parentName:"li"},"find element selectors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",(0,a.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/api/class-page#page-event-console"}),"read logs via API"),")"),(0,a.kt)("li",{parentName:"ul"},"Check ",(0,a.kt)("strong",{parentName:"li"},"network activity")," and other developer tools features")),(0,a.kt)("a",{href:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png"},(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png",width:"500",alt:"Chromium Developer Tools"})),(0,a.kt)("p",null,"Using a ",(0,a.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-pause"}),"Page.PauseAsync()")," method is an easy way to pause the Playwright script execution and inspect the page in Developer tools. It will also open ",(0,a.kt)("a",d({parentName:"p"},{href:"/dotnet/docs/inspector"}),"Playwright Inspector")," to help with debugging."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Chromium"),": you can also open developer tools through a launch option."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-csharp"}),"await using var browser = await playwright.Chromium.LaunchAsync(new()\n{\n  Devtools: true\n});\n")),(0,a.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"For WebKit"),": launching WebKit Inspector during the execution will   prevent the Playwright script from executing any further."))),(0,a.kt)("h2",d({},{id:"debugging-selectors"}),"Debugging Selectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the Explore button to hover over elements in the screen and click them to automatically generate selectors for those elements."),(0,a.kt)("li",{parentName:"ul"},"To verify where selector points, paste it into the inspector input field:")),(0,a.kt)("img",{width:"602",alt:"Selectors toolbar",src:"https://user-images.githubusercontent.com/883973/108614696-ad5eaa00-73b1-11eb-81f5-9eebe62543a2.png"}),(0,a.kt)("p",null,"You can also use the following API inside the Developer Tools Console of any browser."),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,a.kt)("h4",d({},{id:"playwrightselector"}),"playwright.$(selector)"),(0,a.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,a.kt)("h4",d({},{id:"playwrightselector-1"}),"playwright.$$(selector)"),(0,a.kt)("p",null,"Same as ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,a.kt)("h4",d({},{id:"playwrightinspectselector"}),"playwright.inspect(selector)"),(0,a.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,a.kt)("h4",d({},{id:"playwrightlocatorselector"}),"playwright.locator(selector)"),(0,a.kt)("p",null,"Query Playwright element using the actual Playwright query engine, for example:"),(0,a.kt)("h4",d({},{id:"playwrightselectorelement"}),"playwright.selector(element)"),(0,a.kt)("p",null,"Generates selector for the given element."),(0,a.kt)("h2",d({},{id:"run-tests-in-headed-mode"}),"Run Tests in headed mode"),(0,a.kt)("p",null,"Playwright runs browsers in headless mode by default. To change this behavior, use ",(0,a.kt)("inlineCode",{parentName:"p"},"headless: false")," as a launch option. You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"slowMo")," option to slow down execution and follow along while debugging."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-csharp"}),"// Chromium, Firefox, or Webkit\nawait using var browser = await playwright.Chromium.LaunchAsync(new()\n{\n    Headless = false,\n    SlowMo = 100\n});\n")),(0,a.kt)("h2",d({},{id:"verbose-api-logs"}),"Verbose API logs"),(0,a.kt)("p",null,"Playwright supports verbose logging with the ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable."),(0,a.kt)(r.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"DEBUG=pw:api dotnet run\n"))),(0,a.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:DEBUG="pw:api"\ndotnet run\n'))),(0,a.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set DEBUG=pw:api\ndotnet run\n")))),(0,a.kt)("h2",d({},{id:"whats-next"}),"What's Next"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/codegen"}),"Generate tests with Codegen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/trace-viewer"}),"See a trace of your tests"))))}v.isMDXComponent=!0}}]);