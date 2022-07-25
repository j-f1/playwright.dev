"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1313],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return y}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(a),y=r,m=c["".concat(s,".").concat(y)]||c[y]||k[y]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},51:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return y},default:function(){return b},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return h}});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))l.call(t,a)&&d(e,a,t[a]);return e};const c={id:"class-keyboard",title:"Keyboard"},y=void 0,m={unversionedId:"api/class-keyboard",id:"version-stable/api/class-keyboard",title:"Keyboard",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is Keyboard.TypeAsync(text, options), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/versioned_docs/version-stable/api/class-keyboard.mdx",sourceDirName:"api",slug:"/api/class-keyboard",permalink:"/dotnet/docs/api/class-keyboard",tags:[],version:"stable",frontMatter:{id:"class-keyboard",title:"Keyboard"},sidebar:"api",previous:{title:"JSHandle",permalink:"/dotnet/docs/api/class-jshandle"},next:{title:"Locator",permalink:"/dotnet/docs/api/class-locator"}},u={},h=[{value:"Keyboard.DownAsync(key)",id:"keyboard-down",level:2},{value:"Keyboard.InsertTextAsync(text)",id:"keyboard-insert-text",level:2},{value:"Keyboard.PressAsync(key, options)",id:"keyboard-press",level:2},{value:"Keyboard.TypeAsync(text, options)",id:"keyboard-type",level:2},{value:"Keyboard.UpAsync(key)",id:"keyboard-up",level:2}],N={toc:h};function b(e){var t,a=e,{components:r}=a,d=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=k(k({},N),d),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Keyboard provides an api for managing a virtual keyboard. The high level api is ",(0,n.kt)("a",k({parentName:"p"},{href:"/dotnet/docs/api/class-keyboard#keyboard-type"}),"Keyboard.TypeAsync(text, options)"),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."),(0,n.kt)("p",null,"For finer control, you can use ",(0,n.kt)("a",k({parentName:"p"},{href:"/dotnet/docs/api/class-keyboard#keyboard-down"}),"Keyboard.DownAsync(key)"),", ",(0,n.kt)("a",k({parentName:"p"},{href:"/dotnet/docs/api/class-keyboard#keyboard-up"}),"Keyboard.UpAsync(key)"),", and ",(0,n.kt)("a",k({parentName:"p"},{href:"/dotnet/docs/api/class-keyboard#keyboard-insert-text"}),"Keyboard.InsertTextAsync(text)")," to manually fire events as if they were generated from a real keyboard."),(0,n.kt)("p",null,"An example of holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," in order to select and delete some text:"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-csharp"}),'await page.Keyboard.TypeAsync("Hello World!");\nawait page.Keyboard.PressAsync("ArrowLeft");\n\nawait page.Keyboard.DownAsync("Shift");\nfor (int i = 0; i < " World".Length; i++)\n    await page.Keyboard.PressAsync("ArrowLeft");\n\nawait page.Keyboard.UpAsync("Shift");\n\nawait page.Keyboard.PressAsync("Backspace");\n// Result text will end up saying "Hello!"\n')),(0,n.kt)("p",null,"An example of pressing uppercase ",(0,n.kt)("inlineCode",{parentName:"p"},"A")),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-csharp"}),'await page.Keyboard.PressAsync("Shift+KeyA");\n// or \nawait page.Keyboard.PressAsync("Shift+A");\n')),(0,n.kt)("p",null,"An example to trigger select-all with the keyboard"),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-csharp"}),'// on Windows and Linux\nawait page.Keyboard.PressAsync("Control+A");\n// on macOS\nawait page.Keyboard.PressAsync("Meta+A");\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"/dotnet/docs/api/class-keyboard#keyboard-down"}),"Keyboard.DownAsync(key)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"/dotnet/docs/api/class-keyboard#keyboard-insert-text"}),"Keyboard.InsertTextAsync(text)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"/dotnet/docs/api/class-keyboard#keyboard-press"}),"Keyboard.PressAsync(key, options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"/dotnet/docs/api/class-keyboard#keyboard-type"}),"Keyboard.TypeAsync(text, options)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"/dotnet/docs/api/class-keyboard#keyboard-up"}),"Keyboard.UpAsync(key)"))),(0,n.kt)("h2",k({},{id:"keyboard-down"}),"Keyboard.DownAsync(key)"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-down-option-key"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"," Name of the key to press or a character to generate, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"a"),".",(0,n.kt)("a",{href:"#keyboard-down-option-key",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-down-return"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#keyboard-down-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"keydown")," event."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,n.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," values can be found ",(0,n.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"F1")," - ",(0,n.kt)("inlineCode",{parentName:"p"},"F12"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit0"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit9"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyA"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyZ"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backquote"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Minus"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Equal"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backslash"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backspace"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Escape"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageUp"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowRight"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),(0,n.kt)("p",null,"Following modification shortcuts are also supported: ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Control"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Alt"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),(0,n.kt)("p",null,"Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a modifier key, ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Control"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"Alt"),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",(0,n.kt)("a",k({parentName:"p"},{href:"/dotnet/docs/api/class-keyboard#keyboard-up"}),"Keyboard.UpAsync(key)"),"."),(0,n.kt)("p",null,"After the key is pressed once, subsequent calls to ",(0,n.kt)("a",k({parentName:"p"},{href:"/dotnet/docs/api/class-keyboard#keyboard-down"}),"Keyboard.DownAsync(key)")," will have ",(0,n.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat"}),"repeat")," set to true. To release the key, use ",(0,n.kt)("a",k({parentName:"p"},{href:"/dotnet/docs/api/class-keyboard#keyboard-up"}),"Keyboard.UpAsync(key)"),"."),(0,n.kt)("div",k({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",k({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",k({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",k({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Modifier keys DO influence ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard.down"),". Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))),(0,n.kt)("h2",k({},{id:"keyboard-insert-text"}),"Keyboard.InsertTextAsync(text)"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-option-text"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"," Sets input to the specified text value.",(0,n.kt)("a",{href:"#keyboard-insert-text-option-text",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-return"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#keyboard-insert-text-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches only ",(0,n.kt)("inlineCode",{parentName:"p"},"input")," event, does not emit the ",(0,n.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"keyup")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"keypress")," events."),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-csharp"}),'await page.Keyboard.PressAsync("\u55e8");\n')),(0,n.kt)("div",k({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",k({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",k({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",k({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Modifier keys DO NOT effect ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard.insertText"),". Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),(0,n.kt)("h2",k({},{id:"keyboard-press"}),"Keyboard.PressAsync(key, options)"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-option-key"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"," Name of the key to press or a character to generate, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"a"),".",(0,n.kt)("a",{href:"#keyboard-press-option-key",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"KeyboardPressOptions?"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Delay"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-option-delay"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"}),"double"),"?",">"," Time to wait between ",(0,n.kt)("inlineCode",{parentName:"li"},"keydown")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"keyup")," in milliseconds. Defaults to 0.",(0,n.kt)("a",{href:"#keyboard-press-option-delay",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-return"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#keyboard-press-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,n.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," values can be found ",(0,n.kt)("a",k({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"F1")," - ",(0,n.kt)("inlineCode",{parentName:"p"},"F12"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit0"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit9"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyA"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyZ"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backquote"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Minus"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Equal"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backslash"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backspace"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Escape"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageUp"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowRight"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),(0,n.kt)("p",null,"Following modification shortcuts are also supported: ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Control"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Alt"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),(0,n.kt)("p",null,"Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),(0,n.kt)("p",null,"Shortcuts such as ",(0,n.kt)("inlineCode",{parentName:"p"},'key: "Control+o"')," or ",(0,n.kt)("inlineCode",{parentName:"p"},'key: "Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-csharp"}),'await page.GotoAsync("https://keycode.info");\nawait page.Keyboard.PressAsync("A");\nawait page.ScreenshotAsync(new PageScreenshotOptions { Path = "A.png" });\nawait page.Keyboard.PressAsync("ArrowLeft");\nawait page.ScreenshotAsync(new PageScreenshotOptions { Path = "ArrowLeft.png" });\nawait page.Keyboard.PressAsync("Shift+O");\nawait page.ScreenshotAsync(new PageScreenshotOptions { Path = "O.png" });\nawait browser.CloseAsync();\n')),(0,n.kt)("p",null,"Shortcut for ",(0,n.kt)("a",k({parentName:"p"},{href:"/dotnet/docs/api/class-keyboard#keyboard-down"}),"Keyboard.DownAsync(key)")," and ",(0,n.kt)("a",k({parentName:"p"},{href:"/dotnet/docs/api/class-keyboard#keyboard-up"}),"Keyboard.UpAsync(key)"),"."),(0,n.kt)("h2",k({},{id:"keyboard-type"}),"Keyboard.TypeAsync(text, options)"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-option-text"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"," A text to type into a focused element.",(0,n.kt)("a",{href:"#keyboard-type-option-text",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"KeyboardTypeOptions?"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Delay"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-option-delay"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.double",title:"double"}),"double"),"?",">"," Time to wait between key presses in milliseconds. Defaults to 0.",(0,n.kt)("a",{href:"#keyboard-type-option-delay",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-return"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#keyboard-type-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Sends a ",(0,n.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"input"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),(0,n.kt)("p",null,"To press a special key, like ",(0,n.kt)("inlineCode",{parentName:"p"},"Control")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",(0,n.kt)("a",k({parentName:"p"},{href:"/dotnet/docs/api/class-keyboard#keyboard-press"}),"Keyboard.PressAsync(key, options)"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",k({parentName:"pre"},{className:"language-csharp"}),'await page.Keyboard.TypeAsync("Hello"); // types instantly\nawait page.Keyboard.TypeAsync("World", new KeyboardTypeOptions { Delay = 100 }); // types slower, like a user\n')),(0,n.kt)("div",k({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",k({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",k({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",k({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Modifier keys DO NOT effect ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard.type"),". Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),(0,n.kt)("div",k({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",k({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",k({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",k({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",k({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"For characters that are not on a US keyboard, only an ",(0,n.kt)("inlineCode",{parentName:"p"},"input")," event will be sent."))),(0,n.kt)("h2",k({},{id:"keyboard-up"}),"Keyboard.UpAsync(key)"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-up-option-key"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"," Name of the key to press or a character to generate, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"a"),".",(0,n.kt)("a",{href:"#keyboard-up-option-key",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-up-return"})," ","<",(0,n.kt)("a",k({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#keyboard-up-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"keyup")," event."))}b.isMDXComponent=!0}}]);