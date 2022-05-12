"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[32268],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3721:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return f}});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"auth",title:"Authentication"},h=void 0,g={unversionedId:"auth",id:"auth",title:"Authentication",description:"Playwright can be used to automate scenarios that require authentication.",source:"@site/docs/auth.mdx",sourceDirName:".",slug:"/auth",permalink:"/java/docs/next/auth",tags:[],version:"current",frontMatter:{id:"auth",title:"Authentication"},sidebar:"docs",previous:{title:"API testing",permalink:"/java/docs/next/api-testing"},next:{title:"Browsers",permalink:"/java/docs/next/browsers"}},m={},f=[{value:"Automate logging in",id:"automate-logging-in",level:2},{value:"Reuse authentication state",id:"reuse-authentication-state",level:2},{value:"Code generation",id:"code-generation",level:3},{value:"API reference",id:"api-reference",level:3},{value:"Session storage",id:"session-storage",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Multi-factor authentication",id:"multi-factor-authentication",level:2},{value:"Persistent authentication",id:"persistent-authentication",level:3},{value:"Lifecycle",id:"lifecycle",level:3},{value:"API reference",id:"api-reference-2",level:3}],w={toc:f};function k(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},w),p),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright can be used to automate scenarios that require authentication."),(0,a.kt)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/browser-contexts"}),"browser contexts"),". This isolation model improves reproducibility and prevents cascading test failures. New browser contexts can load existing authentication state. This eliminates the need to login in every context and speeds up test execution."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: This guide covers cookie/token-based authentication (logging in via the app UI). For ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication")," use ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-browser#browser-new-context"}),"Browser.newContext([options])"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#automate-logging-in"}),"Automate logging in")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#reuse-authentication-state"}),"Reuse authentication state")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#session-storage"}),"Session storage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#multi-factor-authentication"}),"Multi-factor authentication"))),(0,a.kt)("h2",u({},{id:"automate-logging-in"}),"Automate logging in"),(0,a.kt)("p",null,"The Playwright API can automate interaction with a login form. See ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/input"}),"Input guide")," for more details."),(0,a.kt)("p",null,"The following example automates login on GitHub. Once these steps are executed, the browser context will be authenticated."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'Page page = context.newPage();\npage.navigate("https://github.com/login");\n// Interact with login form\npage.click("text=Login");\npage.fill("input[name=\'login\']", USERNAME);\npage.fill("input[name=\'password\']", PASSWORD);\npage.click("text=Submit");\n// Verify app is logged in\n')),(0,a.kt)("p",null,"These steps can be executed for every browser context. However, redoing login for every test can slow down test execution. To prevent that, we will reuse existing authentication state in new browser contexts."),(0,a.kt)("h2",u({},{id:"reuse-authentication-state"}),"Reuse authentication state"),(0,a.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," or in ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"}),"local storage"),". Playwright provides ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-browsercontext#browser-context-storage-state"}),"BrowserContext.storageState([options])")," method that can be used to retrieve storage state from authenticated contexts and then create new contexts with prepopulated state."),(0,a.kt)("p",null,"Cookies and local storage state can be used across different browsers. They depend on your application's authentication model: some apps might require both cookies and local storage."),(0,a.kt)("p",null,"The following code snippet retrieves state from an authenticated context and creates a new context with that state."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// Save storage state into the file.\ncontext.storageState(new BrowserContext.StorageStateOptions().setPath(Paths.get("state.json")));\n\n// Create a new context with the saved storage state.\nBrowserContext context = browser.newContext(\n  new Browser.NewContextOptions().setStorageStatePath(Paths.get("state.json")));\n')),(0,a.kt)("h3",u({},{id:"code-generation"}),"Code generation"),(0,a.kt)("p",null,"Logging in via the UI and then reusing authentication state can be combined to implement ",(0,a.kt)("strong",{parentName:"p"},"login once and run multiple scenarios"),". The lifecycle looks like:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run tests (for example, with ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run test"),")."),(0,a.kt)("li",{parentName:"ol"},"Login via UI and retrieve authentication state.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In Jest, this can be executed in ",(0,a.kt)("a",u({parentName:"li"},{href:"https://jestjs.io/docs/en/configuration#globalsetup-string"}),(0,a.kt)("inlineCode",{parentName:"a"},"globalSetup")),"."))),(0,a.kt)("li",{parentName:"ol"},"In each test, load authentication state in ",(0,a.kt)("inlineCode",{parentName:"li"},"beforeEach")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"beforeAll")," step.")),(0,a.kt)("p",null,"This approach will also ",(0,a.kt)("strong",{parentName:"p"},"work in CI environments"),", since it does not rely on any external state."),(0,a.kt)("h3",u({},{id:"api-reference"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browser-context-storage-state"}),"BrowserContext.storageState([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browser#browser-new-context"}),"Browser.newContext([options])"))),(0,a.kt)("h2",u({},{id:"session-storage"}),"Session storage"),(0,a.kt)("p",null,"Rarely, ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"}),"session storage")," is used for storing information associated with the logged-in state. Session storage is specific to a particular domain and is not persisted across page loads. Playwright does not provide API to persist session storage, but the following snippet can be used to save/load session storage."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// Get session storage and store as env variable\nString sessionStorage = (String) page.evaluate("JSON.stringify(sessionStorage)");\nSystem.getenv().put("SESSION_STORAGE", sessionStorage);\n\n// Set session storage in a new context\nString sessionStorage = System.getenv("SESSION_STORAGE");\ncontext.addInitScript("(storage => {\\n" +\n  "  if (window.location.hostname === \'example.com\') {\\n" +\n  "    const entries = JSON.parse(storage);\\n" +\n  "     for (const [key, value] of Object.entries(entries)) {\\n" +\n  "      window.sessionStorage.setItem(key, value);\\n" +\n  "    };\\n" +\n  "  }\\n" +\n  "})(\'" + sessionStorage + "\')");\n')),(0,a.kt)("h3",u({},{id:"api-reference-1"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browser-context-storage-state"}),"BrowserContext.storageState([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browser#browser-new-context"}),"Browser.newContext([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-page#page-evaluate"}),"Page.evaluate(expression[, arg])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browser-context-add-init-script"}),"BrowserContext.addInitScript(script)"))),(0,a.kt)("h2",u({},{id:"multi-factor-authentication"}),"Multi-factor authentication"),(0,a.kt)("p",null,"Accounts with multi-factor authentication (MFA) cannot be fully automated, and need manual intervention. Persistent authentication can be used to partially automate MFA scenarios."),(0,a.kt)("h3",u({},{id:"persistent-authentication"}),"Persistent authentication"),(0,a.kt)("p",null,"Note that persistent authentication is not suited for CI environments since it relies on a disk location. User data directories are specific to browser types and cannot be shared across browser types."),(0,a.kt)("p",null,"User data directories can be used with the ",(0,a.kt)("a",u({parentName:"p"},{href:"/java/docs/next/api/class-browsertype#browser-type-launch-persistent-context"}),"BrowserType.launchPersistentContext(userDataDir[, options])")," API."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Path userDataDir = Paths.get("/path/to/directory");\n      BrowserContext context = chromium.launchPersistentContext(userDataDir,\n        new BrowserType.LaunchPersistentContextOptions().setHeadless(false));\n      // Execute login steps manually in the browser window\n    }\n  }\n}\n')),(0,a.kt)("h3",u({},{id:"lifecycle"}),"Lifecycle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a user data directory on disk."),(0,a.kt)("li",{parentName:"ol"},"Launch a persistent context with the user data directory and login the MFA account."),(0,a.kt)("li",{parentName:"ol"},"Reuse user data directory to run automation scenarios.")),(0,a.kt)("h3",u({},{id:"api-reference-2"}),"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/java/docs/next/api/class-browsertype#browser-type-launch-persistent-context"}),"BrowserType.launchPersistentContext(userDataDir[, options])"))))}k.isMDXComponent=!0}}]);