"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[65835],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return v}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),v=i,h=u["".concat(s,".").concat(v)]||u[v]||p[v]||n;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function v(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56206:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return v},default:function(){return b},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return m}});var r=a(3905),i=Object.defineProperty,n=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))c.call(t,a)&&d(e,a,t[a]);return e};const u={id:"class-video",title:"Video"},v=void 0,h={unversionedId:"api/class-video",id:"version-1.22/api/class-video",title:"Video",description:"When browser context is created with the recordVideo option, each page has a video object associated with it.",source:"@site/versioned_docs/version-1.22/api/class-video.mdx",sourceDirName:"api",slug:"/api/class-video",permalink:"/java/docs/api/class-video",tags:[],version:"1.22",frontMatter:{id:"class-video",title:"Video"},sidebar:"api",previous:{title:"Tracing",permalink:"/java/docs/api/class-tracing"},next:{title:"WebSocket",permalink:"/java/docs/api/class-websocket"}},f={},m=[{value:"Video.delete()",id:"video-delete",level:2},{value:"Video.path()",id:"video-path",level:2},{value:"Video.saveAs(path)",id:"video-save-as",level:2}],k={toc:m};function b(e){var t,a=e,{components:i}=a,d=((e,t)=>{var a={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=p(p({},k),d),n(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"When browser context is created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"recordVideo")," option, each page has a video object associated with it."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-java"}),"System.out.println(page.video().path());\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-video#video-delete"}),"Video.delete()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-video#video-path"}),"Video.path()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-video#video-save-as"}),"Video.saveAs(path)"))),(0,r.kt)("h2",p({},{id:"video-delete"}),"Video.delete()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-delete-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,r.kt)("a",{href:"#video-delete-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Deletes the video file. Will wait for the video to finish if necessary."),(0,r.kt)("h2",p({},{id:"video-path"}),"Video.path()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-path-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"}),"Path"),">",(0,r.kt)("a",{href:"#video-path-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns the file system path this video will be recorded to. The video is guaranteed to be written to the filesystem upon closing the browser context. This method throws when connected remotely."),(0,r.kt)("h2",p({},{id:"video-save-as"}),"Video.saveAs(path)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-save-as-option-path"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"}),"Path"),">"," Path where the video should be saved.",(0,r.kt)("a",{href:"#video-save-as-option-path",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-save-as-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,r.kt)("a",{href:"#video-save-as-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Saves the video to a user-specified path. It is safe to call this method while the video is still in progress, or after the page has closed. This method waits until the page is closed and the video is fully saved."))}b.isMDXComponent=!0}}]);