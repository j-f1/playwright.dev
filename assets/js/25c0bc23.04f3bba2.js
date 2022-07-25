"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var l=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=l.createContext({}),s=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),f=o,h=u["".concat(d,".").concat(f)]||u[f]||c[f]||n;return a?l.createElement(h,r(r({ref:t},p),{},{components:a})):l.createElement(h,r({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<n;s++)r[s]=a[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4679:function(e,t,a){a.r(t),a.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return m}});var l=a(3905),o=Object.defineProperty,n=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&p(e,a,t[a]);return e};const u={id:"class-download",title:"Download"},f=void 0,h={unversionedId:"api/class-download",id:"version-stable/api/class-download",title:"Download",description:"Download] objects are dispatched by page via the [page.on('download') event.",source:"@site/versioned_docs/version-stable/api/class-download.mdx",sourceDirName:"api",slug:"/api/class-download",permalink:"/docs/api/class-download",tags:[],version:"stable",frontMatter:{id:"class-download",title:"Download"},sidebar:"api",previous:{title:"Dialog",permalink:"/docs/api/class-dialog"},next:{title:"ElementHandle",permalink:"/docs/api/class-elementhandle"}},w={},m=[{value:"download.cancel()",id:"download-cancel",level:2},{value:"download.createReadStream()",id:"download-create-read-stream",level:2},{value:"download.delete()",id:"download-delete",level:2},{value:"download.failure()",id:"download-failure",level:2},{value:"download.page()",id:"download-page",level:2},{value:"download.path()",id:"download-path",level:2},{value:"download.saveAs(path)",id:"download-save-as",level:2},{value:"download.suggestedFilename()",id:"download-suggested-filename",level:2},{value:"download.url()",id:"download-url",level:2}],k={toc:m};function v(e){var t,a=e,{components:o}=a,p=((e,t)=>{var a={};for(var l in e)d.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&i)for(var l of i(e))t.indexOf(l)<0&&s.call(e,l)&&(a[l]=e[l]);return a})(a,["components"]);return(0,l.kt)("wrapper",(t=c(c({},k),p),n(t,r({components:o,mdxType:"MDXLayout"}))),(0,l.kt)("p",null,(0,l.kt)("a",c({parentName:"p"},{href:"/docs/api/class-download",title:"Download"}),"Download")," objects are dispatched by page via the ",(0,l.kt)("a",c({parentName:"p"},{href:"/docs/api/class-page#page-event-download"}),"page.on('download')")," event."),(0,l.kt)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed."),(0,l.kt)("p",null,"Download event is emitted once the download starts. Download path becomes available once download completes:"),(0,l.kt)("pre",null,(0,l.kt)("code",c({parentName:"pre"},{className:"language-js"}),"// Note that Promise.all prevents a race condition\n// between clicking and waiting for the download.\nconst [ download ] = await Promise.all([\n  // It is important to call waitForEvent before click to set up waiting.\n  page.waitForEvent('download'),\n  // Triggers the download.\n  page.locator('text=Download file').click(),\n]);\n// wait for download to complete\nconst path = await download.path();\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"/docs/api/class-download#download-cancel"}),"download.cancel()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"/docs/api/class-download#download-create-read-stream"}),"download.createReadStream()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"/docs/api/class-download#download-delete"}),"download.delete()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"/docs/api/class-download#download-failure"}),"download.failure()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"/docs/api/class-download#download-page"}),"download.page()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"/docs/api/class-download#download-path"}),"download.path()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"/docs/api/class-download#download-save-as"}),"download.saveAs(path)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"/docs/api/class-download#download-suggested-filename"}),"download.suggestedFilename()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",c({parentName:"li"},{href:"/docs/api/class-download#download-url"}),"download.url()"))),(0,l.kt)("h2",c({},{id:"download-cancel"}),"download.cancel()"),(0,l.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.13"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-cancel-return"})," ","<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,l.kt)("a",{href:"#download-cancel-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Cancels a download. Will not fail if the download is already finished or canceled. Upon successful cancellations, ",(0,l.kt)("inlineCode",{parentName:"p"},"download.failure()")," would resolve to ",(0,l.kt)("inlineCode",{parentName:"p"},"'canceled'"),"."),(0,l.kt)("h2",c({},{id:"download-create-read-stream"}),"download.createReadStream()"),(0,l.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-create-read-stream-return"})," ","<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",(0,l.kt)("a",c({parentName:"li"},{href:"https://nodejs.org/api/stream.html#stream_class_stream_readable",title:"Readable"}),"Readable"),">",">",(0,l.kt)("a",{href:"#download-create-read-stream-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns readable stream for current download or ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if download failed."),(0,l.kt)("h2",c({},{id:"download-delete"}),"download.delete()"),(0,l.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-delete-return"})," ","<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,l.kt)("a",{href:"#download-delete-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Deletes the downloaded file. Will wait for the download to finish if necessary."),(0,l.kt)("h2",c({},{id:"download-failure"}),"download.failure()"),(0,l.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-failure-return"})," ","<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",">",(0,l.kt)("a",{href:"#download-failure-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns download error if any. Will wait for the download to finish if necessary."),(0,l.kt)("h2",c({},{id:"download-page"}),"download.page()"),(0,l.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.12"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-page-return"})," ","<",(0,l.kt)("a",c({parentName:"li"},{href:"/docs/api/class-page",title:"Page"}),"Page"),">",(0,l.kt)("a",{href:"#download-page-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Get the page that the download belongs to."),(0,l.kt)("h2",c({},{id:"download-path"}),"download.path()"),(0,l.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-path-return"})," ","<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",">",(0,l.kt)("a",{href:"#download-path-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns path to the downloaded file in case of successful download. The method will wait for the download to finish if necessary. The method throws when connected remotely."),(0,l.kt)("p",null,"Note that the download's file name is a random GUID, use ",(0,l.kt)("a",c({parentName:"p"},{href:"/docs/api/class-download#download-suggested-filename"}),"download.suggestedFilename()")," to get suggested file name."),(0,l.kt)("h2",c({},{id:"download-save-as"}),"download.saveAs(path)"),(0,l.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-option-path"})," ","<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Path where the download should be copied.",(0,l.kt)("a",{href:"#download-save-as-option-path",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-save-as-return"})," ","<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,l.kt)("a",{href:"#download-save-as-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Copy the download to a user-specified path. It is safe to call this method while the download is still in progress. Will wait for the download to finish if necessary."),(0,l.kt)("h2",c({},{id:"download-suggested-filename"}),"download.suggestedFilename()"),(0,l.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-suggested-filename-return"})," ","<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,l.kt)("a",{href:"#download-suggested-filename-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",(0,l.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"}),(0,l.kt)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",(0,l.kt)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",(0,l.kt)("a",c({parentName:"p"},{href:"https://html.spec.whatwg.org/#downloading-resources"}),"whatwg"),". Different browsers can use different logic for computing it."),(0,l.kt)("h2",c({},{id:"download-url"}),"download.url()"),(0,l.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"download-url-return"})," ","<",(0,l.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,l.kt)("a",{href:"#download-url-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Returns downloaded url."))}v.isMDXComponent=!0}}]);