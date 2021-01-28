(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{190:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a(3),l=a(7),r=(a(0),a(209)),c=a(212),s=a(213),i={id:"assertions",title:"Assertions"},b={unversionedId:"assertions",id:"assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/docs/assertions.mdx",slug:"/assertions",permalink:"/python/docs/next/assertions",version:"current",sidebar:"docs",previous:{title:"Auto-waiting",permalink:"/python/docs/next/actionability"},next:{title:"Authentication",permalink:"/python/docs/next/auth"}},o=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Attribute value",id:"attribute-value",children:[]},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"JS expression",id:"js-expression",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Custom assertions",id:"custom-assertions",children:[{value:"API reference",id:"api-reference-7",children:[]}]}],p={toc:o};function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#text-content"}),"Text content")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#inner-text"}),"Inner text")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#attribute-value"}),"Attribute value")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#checkbox-state"}),"Checkbox state")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#js-expression"}),"JS expression")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#inner-html"}),"Inner HTML")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#visibility"}),"Visibility")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#enabled-state"}),"Enabled state")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#custom-assertions"}),"Custom assertions"))),Object(r.b)("h2",{id:"text-content"},"Text content"),Object(r.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'content = page.text_content("nav:first-child")\nassert content == "home"\n'))),Object(r.b)(s.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'content = await page.text_content("nav:first-child")\nassert content == "home"\n')))),Object(r.b)("h3",{id:"api-reference"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageinner_textselector-kwargs"}),"page.inner_text(selector, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleinner_text"}),"element_handle.inner_text()"))),Object(r.b)("h2",{id:"inner-text"},"Inner text"),Object(r.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'text = page.inner_text(".selected")\nassert text == "value"\n'))),Object(r.b)(s.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'text = await page.inner_text(".selected")\nassert text == "value"\n')))),Object(r.b)("h3",{id:"api-reference-1"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageinner_textselector-kwargs"}),"page.inner_text(selector, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleinner_text"}),"element_handle.inner_text()"))),Object(r.b)("h2",{id:"attribute-value"},"Attribute value"),Object(r.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'checked = page.get_attribute("input", "alt")\nassert alt == "Text"\n'))),Object(r.b)(s.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'checked = await page.get_attribute("input", "alt")\nassert alt == "Text"\n')))),Object(r.b)("h2",{id:"checkbox-state"},"Checkbox state"),Object(r.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'checked = page.is_checked("input")\nassert checked\n'))),Object(r.b)(s.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'checked = await page.is_checked("input")\nassert checked\n')))),Object(r.b)("h3",{id:"api-reference-2"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageis_checkedselector-kwargs"}),"page.is_checked(selector, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleis_checked"}),"element_handle.is_checked()"))),Object(r.b)("h2",{id:"js-expression"},"JS expression"),Object(r.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'content = page.eval_on_selector("nav:first-child", "e => e.textContent")\nassert content == "home"\n'))),Object(r.b)(s.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'content = await page.eval_on_selector("nav:first-child", "e => e.textContent")\nassert content == "home"\n')))),Object(r.b)("h3",{id:"api-reference-3"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageeval_on_selectorselector-expression-kwargs"}),"page.eval_on_selector(selector, expression, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-jshandle#js_handleevaluateexpression-kwargs"}),"js_handle.evaluate(expression, **kwargs)"))),Object(r.b)("h2",{id:"inner-html"},"Inner HTML"),Object(r.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'html = page.inner_html("div.result")\nassert html == "<p>Result</p>"\n'))),Object(r.b)(s.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'html = await page.inner_html("div.result")\nassert html == "<p>Result</p>"\n')))),Object(r.b)("h3",{id:"api-reference-4"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageinner_htmlselector-kwargs"}),"page.inner_html(selector, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleinner_html"}),"element_handle.inner_html()"))),Object(r.b)("h2",{id:"visibility"},"Visibility"),Object(r.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'visible = page.is_visible("input")\nassert visible\n'))),Object(r.b)(s.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'visible = await page.is_visible("input")\nassert visible\n')))),Object(r.b)("h3",{id:"api-reference-5"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageis_visibleselector-kwargs"}),"page.is_visible(selector, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleis_visible"}),"element_handle.is_visible()"))),Object(r.b)("h2",{id:"enabled-state"},"Enabled state"),Object(r.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'enabled = page.is_enabled("input")\nassert enabled\n'))),Object(r.b)(s.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'enabled = await page.is_enabled("input")\nassert enabled\n')))),Object(r.b)("h3",{id:"api-reference-6"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageis_enabledselector-kwargs"}),"page.is_enabled(selector, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleis_enabled"}),"element_handle.is_enabled()"))),Object(r.b)("h2",{id:"custom-assertions"},"Custom assertions"),Object(r.b)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),Object(r.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Assert local storage value\nuser_id = page.evaluate(\"() => window.localStorage.getItem('user_id')\")\nassert user_id\n\n# Assert value for input element\npage.wait_for_selector('#search')\nvalue = page.eval_on_selector('#search', 'el => el.value')\nassert value == 'query'\n\n# Assert computed style\nfont_size = page.eval_on_selector('div', 'el => window.getComputedStyle(el).fontSize')\nassert font_size == '16px'\n\n# Assert list length\nlength = page.eval_on_selector_all('li.selected', '(items) => items.length')\nassert length == 3\n"))),Object(r.b)(s.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Assert local storage value\nuser_id = page.evaluate(\"() => window.localStorage.getItem('user_id')\")\nassert user_id\n\n# Assert value for input element\nawait page.wait_for_selector('#search')\nvalue = await page.eval_on_selector('#search', 'el => el.value')\nassert value == 'query'\n\n# Assert computed style\nfont_size = await page.eval_on_selector('div', 'el => window.getComputedStyle(el).fontSize')\nassert font_size == '16px'\n\n# Assert list length\nlength = await page.eval_on_selector_all('li.selected', '(items) => items.length')\nassert length == 3\n")))),Object(r.b)("h3",{id:"api-reference-7"},"API reference"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageevaluateexpression-kwargs"}),"page.evaluate(expression, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageeval_on_selectorselector-expression-kwargs"}),"page.eval_on_selector(selector, expression, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageeval_on_selector_allselector-expression-kwargs"}),"page.eval_on_selector_all(selector, expression, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-frame#frameevaluateexpression-kwargs"}),"frame.evaluate(expression, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-frame#frameeval_on_selectorselector-expression-kwargs"}),"frame.eval_on_selector(selector, expression, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-frame#frameeval_on_selector_allselector-expression-kwargs"}),"frame.eval_on_selector_all(selector, expression, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleeval_on_selectorselector-expression-kwargs"}),"element_handle.eval_on_selector(selector, expression, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleeval_on_selector_allselector-expression-kwargs"}),"element_handle.eval_on_selector_all(selector, expression, **kwargs)")),Object(r.b)("li",{parentName:"ul"},"[EvaluationArgument]")))}u.isMDXComponent=!0},208:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var b=l.a.createContext({}),o=function(e){var t=l.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=o(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=o(a),d=n,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return a?l.a.createElement(m,s(s({ref:t},b),{},{components:a})):l.a.createElement(m,s({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var b=2;b<r;b++)c[b]=a[b];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";var n=a(0),l=a(211);t.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},211:function(e,t,a){"use strict";var n=a(0),l=Object(n.createContext)(void 0);t.a=l},212:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(210),c=a(208),s=a(55),i=a.n(s),b=37,o=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(r.a)(),O=m.tabGroupChoices,j=m.setTabGroupChoices,h=Object(n.useState)(s),y=h[0],f=h[1],v=n.Children.toArray(e.children);if(null!=u){var g=O[u];null!=g&&g!==y&&p.some((function(e){return e.value===g}))&&f(g)}var x=function(e){f(e),null!=u&&j(u,e)},_=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case o:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(_,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},213:function(e,t,a){"use strict";var n=a(3),l=a(0),r=a.n(l);t.a=function(e){var t=e.children,a=e.hidden,l=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:l}),t)}}}]);