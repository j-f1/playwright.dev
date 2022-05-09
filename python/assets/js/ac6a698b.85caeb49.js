"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[273],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),f=o,h=u["".concat(i,".").concat(f)]||u[f]||m[f]||n;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(67294),o=Object.defineProperty,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,i=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function s({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&i(e,a,t[a]);if(n)for(var a of n(t))c.call(t,a)&&i(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(67294),o=a(54939),n=a(39670),l=a(86010),c="tabItem_LplD",i=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&h(e,a,t[a]);if(m)for(var a of m(t))f.call(t,a)&&h(e,a,t[a]);return e};function k(e){var t,a,o;const{lazy:i,block:m,defaultValue:u,values:f,groupId:h,className:k}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=f?f:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),g=(0,n.lx)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:null!=(o=null!=u?u:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?o:null==(a=y[0])?void 0:a.props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:x}=(0,n.UB)(),[w,O]=(0,r.useState)(v),L=[],{blockElementScrollPositionUntilNextRender:T}=(0,n.o5)();if(null!=h){const e=N[h];null!=e&&e!==w&&b.some((t=>t.value===e))&&O(e)}const _=e=>{const t=e.currentTarget,a=L.indexOf(t),r=b[a].value;r!==w&&(T(t),O(r),null!=h&&x(h,r))},F=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=L.indexOf(e.currentTarget)+1;t=L[a]||L[0];break}case"ArrowLeft":{const a=L.indexOf(e.currentTarget)-1;t=L[a]||L[L.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},k)},b.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(o=d({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>L.push(e),onKeyDown:F,onFocus:_,onClick:_},a),n={className:(0,l.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":w===e})},s(o,p(n))),null!=t?t:e);var o,n}))),i?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function y(e){const t=(0,o.Z)();return r.createElement(k,d({key:String(t)},e))}},18848:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return h},metadata:function(){return k},toc:function(){return b}});var r=a(3905),o=a(73824),n=a(73811),l=Object.defineProperty,c=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))m.call(t,a)&&u(e,a,t[a]);return e};const h={id:"class-framelocator",title:"FrameLocator"},d=void 0,k={unversionedId:"api/class-framelocator",id:"api/class-framelocator",title:"FrameLocator",description:"FrameLocator represents a view to the iframe on the page. It captures the logic sufficient to retrieve the iframe and locate elements in that iframe. FrameLocator can be created with either page.framelocator(selector) or locator.framelocator(selector) method.",source:"@site/docs/api/class-framelocator.mdx",sourceDirName:"api",slug:"/api/class-framelocator",permalink:"/python/docs/next/api/class-framelocator",tags:[],version:"current",frontMatter:{id:"class-framelocator",title:"FrameLocator"},sidebar:"api",previous:{title:"Frame",permalink:"/python/docs/next/api/class-frame"},next:{title:"JSHandle",permalink:"/python/docs/next/api/class-jshandle"}},y={},b=[{value:"frame_locator.first",id:"frame-locator-first",level:2},{value:"frame_locator.frame_locator(selector)",id:"frame-locator-frame-locator",level:2},{value:"frame_locator.last",id:"frame-locator-last",level:2},{value:"frame_locator.locator(selector, **kwargs)",id:"frame-locator-locator",level:2},{value:"frame_locator.nth(index)",id:"frame-locator-nth",level:2}],g={toc:b};function v(e){var t,a=e,{components:l}=a,u=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=f(f({},g),u),c(t,i({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"FrameLocator represents a view to the ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe")," on the page. It captures the logic sufficient to retrieve the ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe")," and locate elements in that iframe. FrameLocator can be created with either ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-page#page-frame-locator"}),"page.frame_locator(selector)")," or ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-locator#locator-frame-locator"}),"locator.frame_locator(selector)")," method."),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-py"}),'locator = page.frame_locator("my-frame").locator("text=Submit")\nlocator.click()\n'))),(0,r.kt)(n.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-py"}),'locator = page.frame_locator("#my-frame").locator("text=Submit")\nawait locator.click()\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Strictness")),(0,r.kt)("p",null,"Frame locators are strict. This means that all operations on frame locators will throw if more than one element matches given selector."),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-py"}),"# Throws if there are several frames in DOM:\npage.frame_locator('.result-frame').locator('button').click()\n\n# Works because we explicitly tell locator to pick the first frame:\npage.frame_locator('.result-frame').first.locator('button').click()\n"))),(0,r.kt)(n.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-py"}),"# Throws if there are several frames in DOM:\nawait page.frame_locator('.result-frame').locator('button').click()\n\n# Works because we explicitly tell locator to pick the first frame:\nawait page.frame_locator('.result-frame').first.locator('button').click()\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Converting Locator to FrameLocator")),(0,r.kt)("p",null,"If you have a ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-locator",title:"Locator"}),"Locator")," object pointing to an ",(0,r.kt)("inlineCode",{parentName:"p"},"iframe")," it can be converted to ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"}),"FrameLocator")," using ",(0,r.kt)("a",f({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:scope"}),(0,r.kt)("inlineCode",{parentName:"a"},":scope"))," CSS selector:"),(0,r.kt)(o.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-py"}),'frameLocator = locator.frame_locator(":scope");\n'))),(0,r.kt)(n.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-py"}),'frameLocator = locator.frame_locator(":scope");\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-framelocator#frame-locator-first"}),"frame_locator.first")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-framelocator#frame-locator-frame-locator"}),"frame_locator.frame_locator(selector)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-framelocator#frame-locator-last"}),"frame_locator.last")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-framelocator#frame-locator-locator"}),"frame_locator.locator(selector, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-framelocator#frame-locator-nth"}),"frame_locator.nth(index)"))),(0,r.kt)("h2",f({},{id:"frame-locator-first"}),"frame_locator.first"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-first-return"})," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),">",(0,r.kt)("a",{href:"#frame-locator-first-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns locator to the first matching frame."),(0,r.kt)("h2",f({},{id:"frame-locator-frame-locator"}),"frame_locator.frame_locator(selector)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selector"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-option-selector"})," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," A selector to use when resolving DOM element. See ",(0,r.kt)("a",f({parentName:"li"},{href:"/python/docs/next/selectors"}),"working with selectors")," for more details.",(0,r.kt)("a",{href:"#frame-locator-frame-locator-option-selector",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-frame-locator-return"})," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),">",(0,r.kt)("a",{href:"#frame-locator-frame-locator-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"When working with iframes, you can create a frame locator that will enter the iframe and allow selecting elements in that iframe."),(0,r.kt)("h2",f({},{id:"frame-locator-last"}),"frame_locator.last"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-last-return"})," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),">",(0,r.kt)("a",{href:"#frame-locator-last-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns locator to the last matching frame."),(0,r.kt)("h2",f({},{id:"frame-locator-locator"}),"frame_locator.locator(selector, **kwargs)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"selector"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-selector"})," ","<",(0,r.kt)("a",f({parentName:"p"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," A selector to use when resolving DOM element. See ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/selectors"}),"working with selectors")," for more details.",(0,r.kt)("a",{href:"#frame-locator-locator-option-selector",class:"list-anchor"},"#"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"above"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-above"})," ","<",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-locator",title:"Locator"}),"Locator"),">"," Matches elements that are above any of the elements matching the inner locator, at any horizontal position. Inner locator is queried against the same root as the outer one. More details in ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/selectors#selecting-elements-based-on-layout"}),"layout selectors")," guide.",(0,r.kt)("a",{href:"#frame-locator-locator-option-above",class:"list-anchor"},"#")),(0,r.kt)("p",{parentName:"li"},"Note that outer and inner locators must belong to the same frame. Inner locator must not contain ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),"s.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"below"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-below"})," ","<",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-locator",title:"Locator"}),"Locator"),">"," Matches elements that are below any of the elements matching the inner locator, at any horizontal position. Inner locator is queried against the same root as the outer one. More details in ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/selectors#selecting-elements-based-on-layout"}),"layout selectors")," guide.",(0,r.kt)("a",{href:"#frame-locator-locator-option-below",class:"list-anchor"},"#")),(0,r.kt)("p",{parentName:"li"},"Note that outer and inner locators must belong to the same frame. Inner locator must not contain ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),"s.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"has"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-has"})," ","<",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-locator",title:"Locator"}),"Locator"),">"," Matches elements containing an element that matches an inner locator. Inner locator is queried against the outer one. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"article")," that has ",(0,r.kt)("inlineCode",{parentName:"p"},"text=Playwright")," matches ",(0,r.kt)("inlineCode",{parentName:"p"},"<article><div>Playwright</div></article>"),".",(0,r.kt)("a",{href:"#frame-locator-locator-option-has",class:"list-anchor"},"#")),(0,r.kt)("p",{parentName:"li"},"Note that outer and inner locators must belong to the same frame. Inner locator must not contain ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),"s.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"has_text"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-has-text"})," ","<",(0,r.kt)("a",f({parentName:"p"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|",(0,r.kt)("a",f({parentName:"p"},{href:"https://docs.python.org/3/library/re.html",title:"Pattern"}),"Pattern"),">"," Matches elements containing specified text somewhere inside, possibly in a child or a descendant element. When passed a ","[string]",", matching is case-insensitive and searches for a substring. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},'"Playwright"')," matches ",(0,r.kt)("inlineCode",{parentName:"p"},"<article><div>Playwright</div></article>"),".",(0,r.kt)("a",{href:"#frame-locator-locator-option-has-text",class:"list-anchor"},"#"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"left_of"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-left-of"})," ","<",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-locator",title:"Locator"}),"Locator"),">"," Matches elements that are to the left of any element matching the inner locator, at any vertical position. Inner locator is queried against the same root as the outer one. More details in ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/selectors#selecting-elements-based-on-layout"}),"layout selectors")," guide.",(0,r.kt)("a",{href:"#frame-locator-locator-option-left-of",class:"list-anchor"},"#")),(0,r.kt)("p",{parentName:"li"},"Note that outer and inner locators must belong to the same frame. Inner locator must not contain ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),"s.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"near"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-near"})," ","<",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-locator",title:"Locator"}),"Locator"),">"," Matches elements that are near (<= 50 css pixels) any of the elements matching the inner locator. Inner locator is queried against the same root as the outer one. More details in ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/selectors#selecting-elements-based-on-layout"}),"layout selectors")," guide.",(0,r.kt)("a",{href:"#frame-locator-locator-option-near",class:"list-anchor"},"#")),(0,r.kt)("p",{parentName:"li"},"Note that outer and inner locators must belong to the same frame. Inner locator must not contain ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),"s.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"right_of"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-option-right-of"})," ","<",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-locator",title:"Locator"}),"Locator"),">"," Matches elements that are to the right of any element matching the inner locator, at any vertical position. Inner locator is queried against the same root as the outer one. More details in ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/selectors#selecting-elements-based-on-layout"}),"layout selectors")," guide.",(0,r.kt)("a",{href:"#frame-locator-locator-option-right-of",class:"list-anchor"},"#")),(0,r.kt)("p",{parentName:"li"},"Note that outer and inner locators must belong to the same frame. Inner locator must not contain ",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),"s.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-locator-return"})," ","<",(0,r.kt)("a",f({parentName:"p"},{href:"/python/docs/next/api/class-locator",title:"Locator"}),"Locator"),">",(0,r.kt)("a",{href:"#frame-locator-locator-return",class:"list-anchor"},"#")))),(0,r.kt)("p",null,"The method finds an element matching the specified selector in the FrameLocator's subtree."),(0,r.kt)("h2",f({},{id:"frame-locator-nth"}),"frame_locator.nth(index)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"index"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-option-index"})," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">",(0,r.kt)("a",{href:"#frame-locator-nth-option-index",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"frame-locator-nth-return"})," ","<",(0,r.kt)("a",f({parentName:"li"},{href:"/python/docs/next/api/class-framelocator",title:"FrameLocator"}),"FrameLocator"),">",(0,r.kt)("a",{href:"#frame-locator-nth-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns locator to the n-th matching frame. It's zero based, ",(0,r.kt)("inlineCode",{parentName:"p"},"nth(0)")," selects the first frame."))}v.isMDXComponent=!0}}]);