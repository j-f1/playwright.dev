"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1720],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(a),u=i,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||r;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),i=Object.defineProperty,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7294),i=a(4939),r=a(9670),l=a(6010),o="tabItem_LplD",s=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&m(e,a,t[a]);if(d)for(var a of d(t))u.call(t,a)&&m(e,a,t[a]);return e};function f(e){var t,a,i;const{lazy:s,block:d,defaultValue:h,values:u,groupId:m,className:f}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=u?u:b.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),g=(0,r.lx)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===h?h:null!=(i=null!=h?h:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?i:null==(a=b[0])?void 0:a.props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,r.UB)(),[x,O]=(0,n.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,r.o5)();if(null!=m){const e=N[m];null!=e&&e!==x&&k.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==x&&(C(t),O(n),null!=m&&w(m,n))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},k.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(i=y({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>T.push(e),onKeyDown:P,onFocus:j,onClick:j},a),r={className:(0,l.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":x===e})},p(i,c(r))),null!=t?t:e);var i,r}))),s?(0,n.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function b(e){const t=(0,i.Z)();return n.createElement(f,y({key:String(t)},e))}},6534:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return y},default:function(){return v},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var n=a(3905),i=a(3824),r=a(3811),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&h(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&h(e,a,t[a]);return e};const m={id:"class-accessibility",title:"Accessibility"},y=void 0,f={unversionedId:"api/class-accessibility",id:"version-stable/api/class-accessibility",title:"Accessibility",description:"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as screen readers or switches.",source:"@site/versioned_docs/version-stable/api/class-accessibility.mdx",sourceDirName:"api",slug:"/api/class-accessibility",permalink:"/python/docs/api/class-accessibility",tags:[],version:"stable",frontMatter:{id:"class-accessibility",title:"Accessibility"},sidebar:"api",previous:{title:"APIResponse",permalink:"/python/docs/api/class-apiresponse"},next:{title:"Browser",permalink:"/python/docs/api/class-browser"}},b={},k=[{value:"accessibility.snapshot(**kwargs)",id:"accessibility-snapshot",level:2}],g={toc:k};function v(e){var t,a=e,{components:l}=a,h=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=u(u({},g),h),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as ",(0,n.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Screen_reader"}),"screen readers")," or ",(0,n.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Switch_access"}),"switches"),"."),(0,n.kt)("p",null,"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."),(0,n.kt)("p",null,'Rendering engines of Chromium, Firefox and WebKit have a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives access to this Accessibility Tree.'),(0,n.kt)("p",null,'Most of the accessibility tree gets filtered out when converting from internal browser AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Playwright tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/python/docs/api/class-accessibility#accessibility-snapshot"}),"accessibility.snapshot(**kwargs)"))),(0,n.kt)("h2",u({},{id:"accessibility-snapshot"}),"accessibility.snapshot(**kwargs)"),(0,n.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"interesting_only"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"accessibility-snapshot-option-interesting-only"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," Prune uninteresting nodes from the tree. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),".",(0,n.kt)("a",{href:"#accessibility-snapshot-option-interesting-only",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"root"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"accessibility-snapshot-option-root"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"/python/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">"," The root DOM element for the snapshot. Defaults to the whole page.",(0,n.kt)("a",{href:"#accessibility-snapshot-option-root",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"accessibility-snapshot-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),"|",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">",(0,n.kt)("a",{href:"#accessibility-snapshot-return",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"role")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," The ",(0,n.kt)("a",u({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria/#usage_intro"}),"role"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," A human readable name for the node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," The current value of the node, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"description")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," An additional human readable description of the node, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keyshortcuts")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Keyboard shortcuts associated with this node, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"roledescription")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," A human readable alternative to the role, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"valuetext")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," A description of the current value, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"disabled")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," Whether the node is disabled, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"expanded")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," Whether the node is expanded or collapsed, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"focused")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," Whether the node is focused, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"modal")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," Whether the node is ",(0,n.kt)("a",u({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Modal_window"}),"modal"),", if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"multiline")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," Whether the node text input supports multiline, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"multiselectable")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," Whether more than one child can be selected, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"readonly")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," Whether the node is read only, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"required")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," Whether the node is required, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"selected")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," Whether the node is selected in its parent node, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"checked")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),'|"mixed"',">",' Whether the checkbox is checked, or "mixed", if applicable.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pressed")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),'|"mixed"',">",' Whether the toggle button is checked, or "mixed", if applicable.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"level")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">"," The level of a heading, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"valuemin")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," The minimum value in a node, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"valuemax")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," The maximum value in a node, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"autocomplete")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," What kind of autocomplete is supported by a control, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"haspopup")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," What kind of popup is currently being shown for a node, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"invalid")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Whether and in what way this node's value is invalid, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"orientation")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Whether the node is oriented horizontally or vertically, if applicable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"children")," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"}),"List"),"[",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"]",">"," Child nodes, if any, if applicable.")))),(0,n.kt)("p",null,"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."),(0,n.kt)("div",u({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",u({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",u({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",u({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",u({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"The Chromium accessibility tree contains nodes that go unused on most platforms and by most screen readers. Playwright will discard them as well for an easier to process tree, unless ",(0,n.kt)("inlineCode",{parentName:"p"},"interesting_only")," is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."))),(0,n.kt)("p",null,"An example of dumping the entire accessibility tree:"),(0,n.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-py"}),"snapshot = page.accessibility.snapshot()\nprint(snapshot)\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-py"}),"snapshot = await page.accessibility.snapshot()\nprint(snapshot)\n")))),(0,n.kt)("p",null,"An example of logging the focused node's name:"),(0,n.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-py"}),'def find_focused_node(node):\n    if (node.get("focused"))\n        return node\n    for child in (node.get("children") or []):\n        found_node = find_focused_node(child)\n        if (found_node)\n            return found_node\n    return None\n\nsnapshot = page.accessibility.snapshot()\nnode = find_focused_node(snapshot)\nif node:\n    print(node["name"])\n'))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-py"}),'def find_focused_node(node):\n    if (node.get("focused"))\n        return node\n    for child in (node.get("children") or []):\n        found_node = find_focused_node(child)\n        if (found_node)\n            return found_node\n    return None\n\nsnapshot = await page.accessibility.snapshot()\nnode = find_focused_node(snapshot)\nif node:\n    print(node["name"])\n')))))}v.isMDXComponent=!0}}]);