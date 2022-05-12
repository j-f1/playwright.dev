"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[96874],{3905:function(e,s,t){t.d(s,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function r(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function a(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?a(Object(t),!0).forEach((function(s){r(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function i(e,s){if(null==e)return{};var t,n,r=function(e,s){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],s.indexOf(t)>=0||(r[t]=e[t]);return r}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var s=n.useContext(p),t=s;return e&&(t="function"==typeof e?e(s):o(o({},s),e)),t},c=function(e){var s=l(e.components);return n.createElement(p.Provider,{value:s},e.children)},u={inlineCode:"code",wrapper:function(e){var s=e.children;return n.createElement(n.Fragment,{},s)}},f=n.forwardRef((function(e,s){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(t),d=r,h=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return t?n.createElement(h,o(o({ref:s},c),{},{components:t})):n.createElement(h,o({ref:s},c))}));function d(e,s){var t=arguments,r=s&&s.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var p in s)hasOwnProperty.call(s,p)&&(i[p]=s[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},94422:function(e,s,t){t.r(s),t.d(s,{assets:function(){return m},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return v}});var n=t(3905),r=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,s,t)=>s in e?r(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,u=(e,s)=>{for(var t in s||(s={}))p.call(s,t)&&c(e,t,s[t]);if(i)for(var t of i(s))l.call(s,t)&&c(e,t,s[t]);return e};const f={id:"class-apiresponseassertions",title:"APIResponseAssertions"},d=void 0,h={unversionedId:"api/class-apiresponseassertions",id:"version-1.19/api/class-apiresponseassertions",title:"APIResponseAssertions",description:"The APIResponseAssertions] class provides assertion methods that can be used to make assertions about the [APIResponse] in the tests. A new instance of [APIResponseAssertions] is created by calling [PlaywrightAssertions.assertThat(response):",source:"@site/versioned_docs/version-1.19/api/class-apiresponseassertions.mdx",sourceDirName:"api",slug:"/api/class-apiresponseassertions",permalink:"/java/docs/1.19/api/class-apiresponseassertions",tags:[],version:"1.19",frontMatter:{id:"class-apiresponseassertions",title:"APIResponseAssertions"}},m={},v=[{value:"APIResponseAssertions.isOK()",id:"api-response-assertions-to-be-ok",level:2},{value:"APIResponseAssertions.not()",id:"api-response-assertions-not",level:2}],y={toc:v};function b(e){var s,t=e,{components:r}=t,c=((e,s)=>{var t={};for(var n in e)p.call(e,n)&&s.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))s.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(s=u(u({},y),c),a(s,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/1.19/api/class-apiresponseassertions",title:"APIResponseAssertions"}),"APIResponseAssertions")," class provides assertion methods that can be used to make assertions about the ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/1.19/api/class-apiresponse",title:"APIResponse"}),"APIResponse")," in the tests. A new instance of ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/1.19/api/class-apiresponseassertions",title:"APIResponseAssertions"}),"APIResponseAssertions")," is created by calling ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/1.19/api/class-playwrightassertions#playwright-assertions-expect-api-response"}),"PlaywrightAssertions.assertThat(response)"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),"...\nimport static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;\n\npublic class TestPage {\n  ...\n  @Test\n  void navigatesToLoginPage() {\n    ...\n    APIResponse response = page.request().get('https://playwright.dev');\n    assertThat(response).isOK();\n  }\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/1.19/api/class-apiresponseassertions#api-response-assertions-to-be-ok"}),"APIResponseAssertions.isOK()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/1.19/api/class-apiresponseassertions#api-response-assertions-not"}),"APIResponseAssertions.not()"))),(0,n.kt)("h2",u({},{id:"api-response-assertions-to-be-ok"}),"APIResponseAssertions.isOK()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-assertions-to-be-ok-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#api-response-assertions-to-be-ok-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Ensures the response status code is within ","[200..299]"," range."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),"assertThat(response).isOK();\n")),(0,n.kt)("h2",u({},{id:"api-response-assertions-not"}),"APIResponseAssertions.not()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-assertions-not-return"})," ","<",(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/1.19/api/class-apiresponseassertions",title:"APIResponseAssertions"}),"APIResponseAssertions"),">",(0,n.kt)("a",{href:"#api-response-assertions-not-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Makes the assertion check for the opposite condition. For example, this code tests that the response status is not successful:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),"assertThat(response).not().isOK();\n")))}b.isMDXComponent=!0}}]);