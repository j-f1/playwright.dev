"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6725],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),g=a,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65733:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return g},default:function(){return h},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return y}});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&s(e,n,t[n]);return e};const m={id:"pom",title:"Page Object Models"},g=void 0,d={unversionedId:"pom",id:"version-1.21/pom",title:"Page Object Models",description:"Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite.",source:"@site/versioned_docs/version-1.21/pom.mdx",sourceDirName:".",slug:"/pom",permalink:"/dotnet/docs/1.21/pom",tags:[],version:"1.21",frontMatter:{id:"pom",title:"Page Object Models"},sidebar:"docs",previous:{title:"Pages",permalink:"/dotnet/docs/1.21/pages"},next:{title:"Screenshots",permalink:"/dotnet/docs/1.21/screenshots"}},f={},y=[{value:"Introduction",id:"introduction",level:2},{value:"Implementation",id:"implementation",level:2},{value:"API reference",id:"api-reference",level:3}],b={toc:y};function h(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},b),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Large test suites can be structured to optimize ease of authoring and maintenance. Page object models are one such approach to structure your test suite."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#introduction"}),"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#implementation"}),"Implementation"))),(0,r.kt)("h2",u({},{id:"introduction"}),"Introduction"),(0,r.kt)("p",null,"A page object represents a part of your web application. An e-commerce web application might have a home page, a listings page and a checkout page. Each of them can be represented by page object models."),(0,r.kt)("p",null,"Page objects ",(0,r.kt)("strong",{parentName:"p"},"simplify authoring"),". They create a higher-level API which suits your application."),(0,r.kt)("p",null,"Page objects ",(0,r.kt)("strong",{parentName:"p"},"simplify maintenance"),". They capture element selectors in one place and create reusable code to avoid repetition."),(0,r.kt)("h2",u({},{id:"implementation"}),"Implementation"),(0,r.kt)("p",null,"Page object models wrap over a Playwright ",(0,r.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.21/api/class-page",title:"Page"}),"Page"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'using System.Threading.Tasks;\nusing Microsoft.Playwright;\n\nnamespace BigEcommerceApp.Tests.Models\n{\n  public class SearchPage\n  {\n    private readonly IPage _page;\n    private readonly ILocator _searchTermInput;\n\n    public SearchPage(IPage page)\n    {\n      _page = page;\n      _searchTermInput = page.Locator("[aria-label=\'Enter your search term\']");\n    }\n\n    public async Task Goto()\n    {\n      await _page.GotoAsync("https://bing.com");\n    }\n\n    public async Task Search(string text)\n    {\n      await _searchTermInput.FillAsync(text);\n      await _searchTermInput.PressAsync("Enter");\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Page objects can then be used inside a test."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'using BigEcommerceApp.Tests.Models;\n\n// in the test\nvar page = new SearchPage(await browser.NewPageAsync());\nawait page.Goto();\nawait page.Search("search query");\n')),(0,r.kt)("h3",u({},{id:"api-reference"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.21/api/class-page",title:"Page"}),"Page"))))}h.isMDXComponent=!0}}]);