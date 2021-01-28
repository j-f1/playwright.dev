(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(209)),i=(n(212),n(213),{id:"test-runners",title:"Test Runners"}),s={unversionedId:"test-runners",id:"version-1.8.0/test-runners",isDocsHomePage:!1,title:"Test Runners",description:"You can use our Pytest integration to write end-to-end tests in Python.",source:"@site/versioned_docs/version-1.8.0/test-runners.mdx",slug:"/test-runners",permalink:"/python/docs/test-runners",version:"1.8.0",sidebar:"version-1.8.0/docs",previous:{title:"Verification",permalink:"/python/docs/verification"},next:{title:"Docker",permalink:"/python/docs/docker"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Fixtures",id:"fixtures",children:[]},{value:"Examples",id:"examples",children:[{value:"Configure Mypy typings for auto-completion",id:"configure-mypy-typings-for-auto-completion",children:[]},{value:"Skip test by browser",id:"skip-test-by-browser",children:[]},{value:"Run on a specific browser",id:"run-on-a-specific-browser",children:[]},{value:"Configure base-url",id:"configure-base-url",children:[]},{value:"Ignore HTTPS errors",id:"ignore-https-errors",children:[]},{value:"Use custom viewport size",id:"use-custom-viewport-size",children:[]},{value:"Device emulation",id:"device-emulation",children:[]}]},{value:"Debugging",id:"debugging",children:[{value:"Use with pdb",id:"use-with-pdb",children:[]},{value:"Screenshot on test failure",id:"screenshot-on-test-failure",children:[]}]},{value:"Deploy to CI",id:"deploy-to-ci",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright-pytest"}),"Pytest integration")," to write end-to-end tests in Python."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#usage"}),"Usage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#fixtures"}),"Fixtures")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#examples"}),"Examples")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#debugging"}),"Debugging")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#deploy-to-ci"}),"Deploy to CI"))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ pip install pytest-playwright\n")),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"page")," fixture to write a basic test. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#examples"}),"more examples"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"def test_example_is_working(page):\n    page.goto(\"https://example.com\")\n    assert page.innerText('h1') == 'Example Domain'\n    page.click(\"text=More information\")\n")),Object(o.b)("p",null,"To run your tests, use pytest CLI."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# Run tests (Chromium and headless by default)\n$ pytest\n\n# Run tests in headful mode\n$ pytest --headful\n\n# Run tests in a different browser (chromium, firefox, webkit)\n$ pytest --browser firefox\n\n# Run tests in multiple browsers\n$ pytest --browser chromium --browser webkit\n")),Object(o.b)("p",null,"If you want to add the CLI arguments automatically without specifying them, you can use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.pytest.org/en/stable/reference.html#ini-options-ref"}),"pytest.ini")," file:"),Object(o.b)("h2",{id:"fixtures"},"Fixtures"),Object(o.b)("p",null,"This plugin configures Playwright-specific ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.pytest.org/en/latest/fixture.html"}),"fixtures for pytest"),". To use these fixtures, use the fixture name as an argument to the test function."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"def test_my_app_is_working(fixture_name):\n    # Test using fixture_name\n    # ...\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Function scope"),": These fixtures are created when requested in a test function and destroyed when the test ends."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"context"),": New ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://playwright.dev/#path=docs%2Fcore-concepts.md&q=browser-contexts"}),"browser context")," for a test."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"page"),": New ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://playwright.dev/#path=docs%2Fcore-concepts.md&q=pages-and-frames"}),"browser page")," for a test.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Session scope"),": These fixtures are created when requested in a test function and destroyed when all tests end."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"browser"),": Browser instance launched by Playwright."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"browser_name"),": Browser name as string."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"is_chromium"),", ",Object(o.b)("inlineCode",{parentName:"li"},"is_webkit"),", ",Object(o.b)("inlineCode",{parentName:"li"},"is_firefox"),": Booleans for the respective browser types.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Customizing fixture options"),": For ",Object(o.b)("inlineCode",{parentName:"p"},"browser")," and ",Object(o.b)("inlineCode",{parentName:"p"},"context")," fixtures, use the the following fixtures to define custom launch options."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"browser_type_launch_args"),": Override launch arguments for ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-browsertype#browser_typelaunchkwargs"}),"browser_type.launch(**kwargs)"),". It should return a Dict."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"browser_context_args"),": Override the options for ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)"),". It should return a Dict.")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"configure-mypy-typings-for-auto-completion"},"Configure Mypy typings for auto-completion"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import Page\n\ndef test_visit_admin_dashboard(page: Page):\n    page.goto("/admin")\n    # ...\n')),Object(o.b)("h3",{id:"skip-test-by-browser"},"Skip test by browser"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'import pytest\n\n@pytest.mark.skip_browser("firefox")\ndef test_visit_example(page):\n    page.goto("https://example.com")\n    # ...\n')),Object(o.b)("h3",{id:"run-on-a-specific-browser"},"Run on a specific browser"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'import pytest\n\n@pytest.mark.only_browser("chromium")\ndef test_visit_example(page):\n    page.goto("https://example.com")\n    # ...\n')),Object(o.b)("h3",{id:"configure-base-url"},"Configure base-url"),Object(o.b)("p",null,"Start Pytest with the ",Object(o.b)("inlineCode",{parentName:"p"},"base-url")," argument."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ pytest --base-url http://localhost:8080\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'def test_visit_example(page):\n    page.goto("/admin")\n    # -> Will result in http://localhost:8080/admin\n')),Object(o.b)("h3",{id:"ignore-https-errors"},"Ignore HTTPS errors"),Object(o.b)("p",null,"conftest.py"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'import pytest\n\n@pytest.fixture(scope="session")\ndef browser_context_args(browser_context_args):\n    return {\n        **browser_context_args,\n        "ignoreHTTPSErrors": True\n    }\n')),Object(o.b)("h3",{id:"use-custom-viewport-size"},"Use custom viewport size"),Object(o.b)("p",null,"conftest.py"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'import pytest\n\n@pytest.fixture(scope="session")\ndef browser_context_args(browser_context_args):\n    return {\n        **browser_context_args,\n        "viewport": {\n            "width": 1920,\n            "height": 1080,\n        }\n    }\n')),Object(o.b)("h3",{id:"device-emulation"},"Device emulation"),Object(o.b)("p",null,"conftest.py"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import pytest\n\n@pytest.fixture(scope=\"session\")\ndef browser_context_args(browser_context_args, playwright):\n    iphone_11 = playwright.devices['iPhone 11 Pro']\n    return {\n        **browser_context_args,\n        **iphone_11,\n    }\n")),Object(o.b)("h2",{id:"debugging"},"Debugging"),Object(o.b)("h3",{id:"use-with-pdb"},"Use with pdb"),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"breakpoint()")," statement in your test code to pause execution and get a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.python.org/3/library/pdb.html"}),"pdb")," REPL."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'def test_bing_is_working(page):\n    page.goto("https://bing.com")\n    breakpoint()\n    # ...\n')),Object(o.b)("h3",{id:"screenshot-on-test-failure"},"Screenshot on test failure"),Object(o.b)("p",null,"You can capture screenshots for failed tests with a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.pytest.org/en/6.1.0/reference.html?highlight=pytest_runtest_makereport#test-running-runtest-hooks"}),"pytest runtest hook"),". Add this to your ",Object(o.b)("inlineCode",{parentName:"p"},"conftest.py")," file."),Object(o.b)("p",null,"Note that this snippet uses ",Object(o.b)("inlineCode",{parentName:"p"},"slugify")," to convert test names to file paths, which can be installed with ",Object(o.b)("inlineCode",{parentName:"p"},"pip install python-slugify"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'# In conftest.py\nfrom slugify import slugify\nfrom pathlib import Path\n\ndef pytest_runtest_makereport(item, call) -> None:\n    if call.when == "call":\n        if call.excinfo is not None and "page" in item.funcargs:\n            page = item.funcargs["page"]\n            screenshot_dir = Path(".playwright-screenshots")\n            screenshot_dir.mkdir(exist_ok=True)\n            page.screenshot(path=str(screenshot_dir / f"{slugify(item.nodeid)}.png"))\n')),Object(o.b)("h2",{id:"deploy-to-ci"},"Deploy to CI"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright-github-action"}),"Playwright GitHub Action")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://playwright.dev/#path=docs%2Fci.md&q="}),"guides for other CI providers")," to deploy your tests to CI/CD"))}p.isMDXComponent=!0},208:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},210:function(e,t,n){"use strict";var r=n(0),a=n(211);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},211:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},212:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(210),i=n(208),s=n(55),c=n.n(s),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,b=e.values,u=e.groupId,m=e.className,d=Object(o.a)(),f=d.tabGroupChoices,h=d.setTabGroupChoices,g=Object(r.useState)(s),O=g[0],j=g[1],y=r.Children.toArray(e.children);if(null!=u){var w=f[u];null!=w&&w!==O&&b.some((function(e){return e.value===w}))&&j(w)}var v=function(e){j(e),null!=u&&h(u,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},213:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);