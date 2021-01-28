(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),l=a(7),c=(a(0),a(209)),r=a(212),i=a(213),s={id:"input",title:"Input"},p={unversionedId:"input",id:"input",isDocsHomePage:!1,title:"Input",description:"- Text input",source:"@site/docs/input.mdx",slug:"/input",permalink:"/python/docs/next/input",version:"current",sidebar:"docs",previous:{title:"Extensibility",permalink:"/python/docs/next/extensibility"},next:{title:"Installation",permalink:"/python/docs/next/installation"}},b=[{value:"Text input",id:"text-input",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Checkboxes and radio buttons",id:"checkboxes-and-radio-buttons",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Select options",id:"select-options",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Mouse click",id:"mouse-click",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Type characters",id:"type-characters",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Keys and shortcuts",id:"keys-and-shortcuts",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Upload files",id:"upload-files",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Focus element",id:"focus-element",children:[{value:"API reference",id:"api-reference-7",children:[]}]}],o={toc:b};function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#text-input"}),"Text input")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#checkboxes-and-radio-buttons"}),"Checkboxes and radio buttons")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#select-options"}),"Select options")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#mouse-click"}),"Mouse click")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#type-characters"}),"Type characters")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#keys-and-shortcuts"}),"Keys and shortcuts")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#upload-files"}),"Upload files")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#focus-element"}),"Focus element"))),Object(c.b)("h2",{id:"text-input"},"Text input"),Object(c.b)("p",null,"This is the easiest way to fill out the form fields. It focuses the element and triggers an ",Object(c.b)("inlineCode",{parentName:"p"},"input")," event with the entered text. It works for ",Object(c.b)("inlineCode",{parentName:"p"},"<input>"),", ",Object(c.b)("inlineCode",{parentName:"p"},"<textarea>"),", ",Object(c.b)("inlineCode",{parentName:"p"},"[contenteditable]")," and ",Object(c.b)("inlineCode",{parentName:"p"},"<label>")," associated with an input or textarea."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Text input\npage.fill('#name', 'Peter')\n\n# Date input\npage.fill('#date', '2020-02-02')\n\n# Time input\npage.fill('#time', '13-15')\n\n# Local datetime input\npage.fill('#local', '2020-03-02T05:15')\n\n# Input through label\npage.fill('text=First Name', 'Peter')\n"))),Object(c.b)(i.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Text input\nawait page.fill('#name', 'Peter')\n\n# Date input\nawait page.fill('#date', '2020-02-02')\n\n# Time input\nawait page.fill('#time', '13-15')\n\n# Local datetime input\nawait page.fill('#local', '2020-03-02T05:15')\n\n# Input through label\nawait page.fill('text=First Name', 'Peter')\n")))),Object(c.b)("h3",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagefillselector-value-kwargs"}),"page.fill(selector, value, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-frame#framefillselector-value-kwargs"}),"frame.fill(selector, value, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handlefillvalue-kwargs"}),"element_handle.fill(value, **kwargs)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"checkboxes-and-radio-buttons"},"Checkboxes and radio buttons"),Object(c.b)("p",null,"This is the easiest way to check and uncheck a checkbox or a radio button. This method can be used with ",Object(c.b)("inlineCode",{parentName:"p"},"input[type=checkbox]"),", ",Object(c.b)("inlineCode",{parentName:"p"},"input[type=radio]"),", ",Object(c.b)("inlineCode",{parentName:"p"},"[role=checkbox]")," or ",Object(c.b)("inlineCode",{parentName:"p"},"label")," associated with checkbox or radio button."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Check the checkbox\npage.check('#agree')\n\n# Assert the checked state\nassert page.is_checked('#agree') is True\n\n# Uncheck by input <label>.\npage.uncheck('#subscribe-label')\n\n# Select the radio button\npage.check('text=XL')\n"))),Object(c.b)(i.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Check the checkbox\nawait page.check('#agree')\n\n# Assert the checked state\nassert await page.is_checked('#agree') is True\n\n# Uncheck by input <label>.\nawait page.uncheck('#subscribe-label')\n\n# Select the radio button\nawait page.check('text=XL')\n")))),Object(c.b)("h3",{id:"api-reference-1"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagecheckselector-kwargs"}),"page.check(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageis_checkedselector-kwargs"}),"page.is_checked(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageuncheckselector-kwargs"}),"page.uncheck(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handlecheckkwargs"}),"element_handle.check(**kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleis_checked"}),"element_handle.is_checked()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleuncheckkwargs"}),"element_handle.uncheck(**kwargs)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"select-options"},"Select options"),Object(c.b)("p",null,"Selects one or multiple options in the ",Object(c.b)("inlineCode",{parentName:"p"},"<select>")," element. You can specify option ",Object(c.b)("inlineCode",{parentName:"p"},"value"),", ",Object(c.b)("inlineCode",{parentName:"p"},"label")," or ",Object(c.b)("inlineCode",{parentName:"p"},"elementHandle")," to select. Multiple options can be selected."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Single selection matching the value\npage.select_option('select#colors', 'blue')\n\n# Single selection matching the label\npage.select_option('select#colors', label='Blue')\n\n# Multiple selected items\npage.select_option('select#colors', ['red', 'green', 'blue'])\n\n# Select the option via element handle\noption = page.query_selector('#best-option')\npage.select_option('select#colors', option)\n"))),Object(c.b)(i.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Single selection matching the value\nawait page.select_option('select#colors', 'blue')\n\n# Single selection matching the label\nawait page.select_option('select#colors', label='Blue')\n\n# Multiple selected items\nawait page.select_option('select#colors', ['red', 'green', 'blue'])\n\n# Select the option via element handle\noption = await page.query_selector('#best-option')\nawait page.select_option('select#colors', option)\n")))),Object(c.b)("h3",{id:"api-reference-2"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageselect_optionselector-kwargs"}),"page.select_option(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-frame#frameselect_optionselector-kwargs"}),"frame.select_option(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleselect_optionkwargs"}),"element_handle.select_option(**kwargs)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"mouse-click"},"Mouse click"),Object(c.b)("p",null,"Performs a simple human click."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Generic click\npage.click('button#submit')\n\n# Double click\npage.dblclick('#item')\n\n# Right click\npage.click('#item', button='right')\n\n# Shift + click\npage.click('#item', modifiers=['Shift'])\n\n# Hover over element\npage.hover('#item')\n\n# Click the top left corner\npage.click('#item', position={ 'x': 0, 'y': 0})\n"))),Object(c.b)(i.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Generic click\nawait page.click('button#submit')\n\n# Double click\nawait page.dblclick('#item')\n\n# Right click\nawait page.click('#item', button='right')\n\n# Shift + click\nawait page.click('#item', modifiers=['Shift'])\n\n# Hover over element\nawait page.hover('#item')\n\n# Click the top left corner\nawait page.click('#item', position={ 'x': 0, 'y': 0})\n")))),Object(c.b)("p",null,"Under the hood, this and other pointer-related methods:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"wait for element with given selector to be in DOM"),Object(c.b)("li",{parentName:"ul"},"wait for it to become displayed, i.e. not empty, no ",Object(c.b)("inlineCode",{parentName:"li"},"display:none"),", no ",Object(c.b)("inlineCode",{parentName:"li"},"visibility:hidden")),Object(c.b)("li",{parentName:"ul"},"wait for it to stop moving, for example, until css transition finishes"),Object(c.b)("li",{parentName:"ul"},"scroll the element into view"),Object(c.b)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point, for example, waits until element becomes non-obscured by other elements"),Object(c.b)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),Object(c.b)("h4",{id:"forcing-the-click"},"Forcing the click"),Object(c.b)("p",null,"Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/actionability"}),"actionability")," checks and force the click:"),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"page.click('button#submit', force=True)\n"))),Object(c.b)(i.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"await page.click('button#submit', force=True)\n")))),Object(c.b)("h4",{id:"programmatic-click"},"Programmatic click"),Object(c.b)("p",null,"If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click"}),Object(c.b)("inlineCode",{parentName:"a"},"HTMLElement.click()"))," behavior via simply dispatching a click event on the element:"),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"page.dispatch_event('button#submit', 'click')\n"))),Object(c.b)(i.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"await page.dispatch_event('button#submit', 'click')\n")))),Object(c.b)("h3",{id:"api-reference-3"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageclickselector-kwargs"}),"page.click(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-frame#frameclickselector-kwargs"}),"frame.click(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleclickkwargs"}),"element_handle.click(**kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagedblclickselector-kwargs"}),"page.dblclick(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-frame#framedblclickselector-kwargs"}),"frame.dblclick(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handledblclickkwargs"}),"element_handle.dblclick(**kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagehoverselector-kwargs"}),"page.hover(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-frame#framehoverselector-kwargs"}),"frame.hover(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handlehoverkwargs"}),"element_handle.hover(**kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagedispatch_eventselector-type-kwargs"}),"page.dispatch_event(selector, type, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-frame#framedispatch_eventselector-type-kwargs"}),"frame.dispatch_event(selector, type, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handledispatch_eventtype-kwargs"}),"element_handle.dispatch_event(type, **kwargs)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"type-characters"},"Type characters"),Object(c.b)("p",null,"Type into the field character by character, as if it was a user with a real keyboard."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Type character by character\npage.type('#area', 'Hello World!')\n"))),Object(c.b)(i.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Type character by character\nawait page.type('#area', 'Hello World!')\n")))),Object(c.b)("p",null,"This method will emit all the necessary keyboard events, with all the ",Object(c.b)("inlineCode",{parentName:"p"},"keydown"),", ",Object(c.b)("inlineCode",{parentName:"p"},"keyup"),", ",Object(c.b)("inlineCode",{parentName:"p"},"keypress")," events in place. You can even specify the optional ",Object(c.b)("inlineCode",{parentName:"p"},"delay")," between the key presses to simulate real user behavior."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Most of the time, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pagefillselector-value-kwargs"}),"page.fill(selector, value, **kwargs)")," will just work. You only need to type characters if there is special keyboard handling on the page."))),Object(c.b)("h3",{id:"api-reference-4"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagetypeselector-text-kwargs"}),"page.type(selector, text, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-frame#frametypeselector-text-kwargs"}),"frame.type(selector, text, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handletypetext-kwargs"}),"element_handle.type(text, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-keyboard#keyboardtypetext-kwargs"}),"keyboard.type(text, **kwargs)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"keys-and-shortcuts"},"Keys and shortcuts"),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Hit Enter\npage.press('#submit', 'Enter')\n\n# Dispatch Control+Right\npage.press('#name', 'Control+ArrowRight')\n\n# Press $ sign on keyboard\npage.press('#value', '$')\n"))),Object(c.b)(i.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Hit Enter\nawait page.press('#submit', 'Enter')\n\n# Dispatch Control+Right\nawait page.press('#name', 'Control+ArrowRight')\n\n# Press $ sign on keyboard\nawait page.press('#value', '$')\n")))),Object(c.b)("p",null,"This method focuses the selected element and produces a single keystroke. It accepts the logical key names that are emitted in the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," property of the keyboard events:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,\nArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,\nArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"You can alternatively specify a single character you'd like to produce such as ",Object(c.b)("inlineCode",{parentName:"li"},'"a"')," or ",Object(c.b)("inlineCode",{parentName:"li"},'"#"'),"."),Object(c.b)("li",{parentName:"ul"},"Following modification shortcuts are also supported: ",Object(c.b)("inlineCode",{parentName:"li"},"Shift, Control, Alt, Meta"),".")),Object(c.b)("p",null,"Simple version produces a single character. This character is case-sensitive, so ",Object(c.b)("inlineCode",{parentName:"p"},'"a"')," and ",Object(c.b)("inlineCode",{parentName:"p"},'"A"')," will produce different results."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# <input id=name>\npage.press('#name', 'Shift+A')\n\n# <input id=name>\npage.press('#name', 'Shift+ArrowLeft')\n"))),Object(c.b)(i.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# <input id=name>\nawait page.press('#name', 'Shift+A')\n\n# <input id=name>\nawait page.press('#name', 'Shift+ArrowLeft')\n")))),Object(c.b)("p",null,"Shortcuts such as ",Object(c.b)("inlineCode",{parentName:"p"},'"Control+o"')," or ",Object(c.b)("inlineCode",{parentName:"p"},'"Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),Object(c.b)("p",null,"Note that you still need to specify the capital ",Object(c.b)("inlineCode",{parentName:"p"},"A")," in ",Object(c.b)("inlineCode",{parentName:"p"},"Shift-A")," to produce the capital character. ",Object(c.b)("inlineCode",{parentName:"p"},"Shift-a")," produces a lower-case one as if you had the ",Object(c.b)("inlineCode",{parentName:"p"},"CapsLock")," toggled."),Object(c.b)("h3",{id:"api-reference-5"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagepressselector-key-kwargs"}),"page.press(selector, key, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-frame#framepressselector-key-kwargs"}),"frame.press(selector, key, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handlepresskey-kwargs"}),"element_handle.press(key, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-keyboard#keyboardpresskey-kwargs"}),"keyboard.press(key, **kwargs)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"upload-files"},"Upload files"),Object(c.b)("p",null,"You can select input files for upload using the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageset_input_filesselector-files-kwargs"}),"page.set_input_files(selector, files, **kwargs)")," method. It expects first argument to point to an ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"}),"input element")," with the type ",Object(c.b)("inlineCode",{parentName:"p"},'"file"'),". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the current working directory. Empty array clears the selected files."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Select one file\npage.set_input_files(\'input#upload\', \'myfile.pdf\')\n\n# Select multiple files\npage.set_input_files(\'input#upload\', [\'file1.txt\', \'file2.txt\'])\n\n# Remove all the selected files\npage.set_input_files(\'input#upload\', [])\n\n# Upload buffer from memory\npage.set_input_files(\n    "input#upload",\n    files=[\n        {"name": "test.txt", "mimeType": "text/plain", "buffer": b"this is a test"}\n    ],\n)\n'))),Object(c.b)(i.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Select one file\nawait page.set_input_files(\'input#upload\', \'myfile.pdf\')\n\n# Select multiple files\nawait page.set_input_files(\'input#upload\', [\'file1.txt\', \'file2.txt\'])\n\n# Remove all the selected files\nawait page.set_input_files(\'input#upload\', [])\n\n# Upload buffer from memory\nawait page.set_input_files(\n    "input#upload",\n    files=[\n        {"name": "test.txt", "mimeType": "text/plain", "buffer": b"this is a test"}\n    ],\n)\n')))),Object(c.b)("p",null,"If you don't have input element in hand (it is created dynamically), you can handle the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageonfilechooser"}),'page.on("filechooser")')," event or use a corresponding waiting method upon your action:"),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'with page.expect_file_chooser() as fc_info:\n    page.click("upload")\nfile_chooser = fc_info.value\nfile_chooser.set_files("myfile.pdf")\n'))),Object(c.b)(i.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'async with page.expect_file_chooser() as fc_info:\n    await page.click("upload")\nfile_chooser = await fc_info.value\nawait file_chooser.set_files("myfile.pdf")\n')))),Object(c.b)("h3",{id:"api-reference-6"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-filechooser",title:"FileChooser"}),"FileChooser")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageset_input_filesselector-files-kwargs"}),"page.set_input_files(selector, files, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-frame#frameset_input_filesselector-files-kwargs"}),"frame.set_input_files(selector, files, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleset_input_filesfiles-kwargs"}),"element_handle.set_input_files(files, **kwargs)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"focus-element"},"Focus element"),Object(c.b)("p",null,"For the dynamic pages that handle focus events, you can focus the given element."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"page.focus('input#name')\n"))),Object(c.b)(i.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"await page.focus('input#name')\n")))),Object(c.b)("h3",{id:"api-reference-7"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagefocusselector-kwargs"}),"page.focus(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-frame#framefocusselector-kwargs"}),"frame.focus(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handlefocus"}),"element_handle.focus()"))),Object(c.b)("br",null))}u.isMDXComponent=!0},208:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(0),l=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=l.a.createContext({}),b=function(e){var t=l.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=b(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),o=b(a),m=n,d=o["".concat(r,".").concat(m)]||o[m]||u[m]||c;return a?l.a.createElement(d,i(i({ref:t},p),{},{components:a})):l.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,r=new Array(c);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var p=2;p<c;p++)r[p]=a[p];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},210:function(e,t,a){"use strict";var n=a(0),l=a(211);t.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},211:function(e,t,a){"use strict";var n=a(0),l=Object(n.createContext)(void 0);t.a=l},212:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(210),r=a(208),i=a(55),s=a.n(i),p=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,o=e.values,u=e.groupId,m=e.className,d=Object(c.a)(),h=d.tabGroupChoices,O=d.setTabGroupChoices,f=Object(n.useState)(i),j=f[0],y=f[1],g=n.Children.toArray(e.children);if(null!=u){var k=h[u];null!=k&&k!==j&&o.some((function(e){return e.value===k}))&&y(k)}var v=function(e){y(e),null!=u&&O(u,e)},N=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},m)},o.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},213:function(e,t,a){"use strict";var n=a(3),l=a(0),c=a.n(l);t.a=function(e){var t=e.children,a=e.hidden,l=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:l}),t)}}}]);