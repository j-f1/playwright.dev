"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[69902],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||p;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14454:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return f}});var r=n(3905),a=Object.defineProperty,p=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&c(e,n,t[n]);return e};const m={id:"test-typescript",title:"TypeScript"},d=void 0,h={unversionedId:"test-typescript",id:"version-1.22/test-typescript",title:"TypeScript",description:"Playwright Test supports TypeScript out of the box. You just write tests in TypeScript and Playwright Test will read them, transform to JavaScript and run. This works both with CommonJS modules and ECMAScript modules.",source:"@site/versioned_docs/version-1.22/test-typescript.mdx",sourceDirName:".",slug:"/test-typescript",permalink:"/docs/test-typescript",tags:[],version:"1.22",frontMatter:{id:"test-typescript",title:"TypeScript"},sidebar:"docs",previous:{title:"Advanced: fixtures",permalink:"/docs/test-fixtures"},next:{title:"Experimental: components",permalink:"/docs/test-components"}},y={},f=[{value:"TypeScript with CommonJS",id:"typescript-with-commonjs",level:2},{value:"TypeScript with ESM",id:"typescript-with-esm",level:2},{value:"TypeScript path mapping",id:"typescript-path-mapping",level:2},{value:"Manually compile tests with TypeScript",id:"manually-compile-tests-with-typescript",level:2}],g={toc:f};function w(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},g),c),p(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright Test supports TypeScript out of the box. You just write tests in TypeScript and Playwright Test will read them, transform to JavaScript and run. This works both with ",(0,r.kt)("a",u({parentName:"p"},{href:"https://nodejs.org/api/modules.html"}),"CommonJS modules")," and ",(0,r.kt)("a",u({parentName:"p"},{href:"https://nodejs.org/api/esm.html"}),"ECMAScript modules"),"."),(0,r.kt)("h2",u({},{id:"typescript-with-commonjs"}),"TypeScript with CommonJS"),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node.js")," works with CommonJS modules ",(0,r.kt)("strong",{parentName:"p"},"by default"),". Unless you use ",(0,r.kt)("inlineCode",{parentName:"p"},"'.mjs'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"'.mts'")," extensions, or specify ",(0,r.kt)("inlineCode",{parentName:"p"},'type: "module"')," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"pacakge.json"),", Playwright Test will treat all TypeScript files as CommonJS. You can then import as usual without an extension."),(0,r.kt)("p",null,"Consider this helper module written in TypeScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// helper.ts\nexport const username = 'John';\nexport const password = 'secret';\n")),(0,r.kt)("p",null,"You can import from the helper as usual:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// example.spec.ts\nimport { test, expect } from '@playwright/test';\nimport { username, password } from './helper';\n\ntest('example', async ({ page }) => {\n  await page.locator('#username').fill(username);\n  await page.locator('#password').fill(password);\n});\n")),(0,r.kt)("h2",u({},{id:"typescript-with-esm"}),"TypeScript with ESM"),(0,r.kt)("p",null,"You can opt into using ",(0,r.kt)("a",u({parentName:"p"},{href:"https://nodejs.org/api/esm.html"}),"ECMAScript modules")," by setting ",(0,r.kt)("inlineCode",{parentName:"p"},'type: "module"')," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file. Playwright Test will switch to the ESM mode once it reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright.config.ts")," file, so make sure you have one."),(0,r.kt)("p",null,"Playwright Test follows the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/esm-node.html"}),"experimental support for ESM in TypeScript")," and, according to the specification, ",(0,r.kt)("strong",{parentName:"p"},"requires an extension")," when importing from a module, either ",(0,r.kt)("inlineCode",{parentName:"p"},"'.js'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"'.ts'"),"."),(0,r.kt)("p",null,"First, enable modules in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "name": "my-package",\n  "version": "1.0.0",\n  "type": "module",\n}\n')),(0,r.kt)("p",null,"Then write the helper module in TypeScript as usual:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// helper.ts\nexport const username = 'John';\nexport const password = 'secret';\n")),(0,r.kt)("p",null,"Specify the extension when importing from a module:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// example.spec.ts\nimport { test, expect } from '@playwright/test';\nimport { username, password } from './helper.ts';\n\ntest('example', async ({ page }) => {\n  await page.locator('#username').fill(username);\n  await page.locator('#password').fill(password);\n});\n")),(0,r.kt)("h2",u({},{id:"typescript-path-mapping"}),"TypeScript path mapping"),(0,r.kt)("p",null,"If you use ",(0,r.kt)("a",u({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping"}),"path mapping")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", Playwright Test will pick it up. Make sure that ",(0,r.kt)("inlineCode",{parentName:"p"},"baseUrl")," is also set."),(0,r.kt)("p",null,"Here is an example ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," that works with Playwright Test:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "baseUrl": ".", // This must be specified if "paths" is.\n    "paths": {\n      "@myhelper/*": ["packages/myhelper/*"] // This mapping is relative to "baseUrl".\n    }\n  }\n}\n')),(0,r.kt)("p",null,"You can now import using the mapped paths:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// example.spec.ts\nimport { test, expect } from '@playwright/test';\nimport { username, password } from '@myhelper/credentials';\n\ntest('example', async ({ page }) => {\n  await page.locator('#username').fill(username);\n  await page.locator('#password').fill(password);\n});\n")),(0,r.kt)("h2",u({},{id:"manually-compile-tests-with-typescript"}),"Manually compile tests with TypeScript"),(0,r.kt)("p",null,"Sometimes, Playwright Test will not be able to transform your TypeScript code correctly, for example when you are using experimental or very recent features of TypeScript, usually configured in ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,r.kt)("p",null,"In this case, you can perform your own TypeScript compilation before sending the tests to Playwright."),(0,r.kt)("p",null,"First add a ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file inside the tests directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "compilerOptions": {\n        "target": "ESNext",\n        "module": "commonjs",\n        "moduleResolution": "Node",\n        "sourceMap": true,\n        "outDir": "../tests-out",\n    }\n}\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", add two scripts:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "pretest": "tsc --incremental -p tests/tsconfig.json",\n    "test": "playwright test -c tests-out"\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pretest")," script runs typescript on the tests. ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," will run the tests that have been generated to the ",(0,r.kt)("inlineCode",{parentName:"p"},"tests-out")," directory. The ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," argument configures the test runner to look for tests inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"tests-out")," directory."),(0,r.kt)("p",null,"Then ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run test")," will build the tests and run them."))}w.isMDXComponent=!0}}]);