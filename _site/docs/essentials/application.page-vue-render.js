
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("Essentials")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/docs/essentials/application.html"}},[_v("Creating an Application")])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"fw-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Template")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Getting Started")]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Essentials \n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/essentials/application.html"}},[_v("Creating an Application")])])])])]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Components In-Depth")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Reusability")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Built-in Components")]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Scaling Up\n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/scaling-up/sfc.html"}},[_v("Single-file Components")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/scaling-up/tooling.html"}},[_v("Tooling")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/scaling-up/routing.html"}},[_v("Routing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/scaling-up/state-management.html"}},[_v("State Management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/scaling-up/testing.html"}},[_v("Testing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/scaling-up/ssr.html"}},[_v("Server-Side Rendering (SSR)")])])])])]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Best Practices")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("TypeScript")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Extra Topics")])])],1)],1)]),_v(" "),_m(0),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"creating-a-vue-application"}},[_c('span',{staticClass:"anchor",attrs:{"id":"creating-a-vue-application"}}),_v("Creating a Vue Application"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#creating-a-vue-application","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h2',{attrs:{"id":"the-application-instance"}},[_c('span',{staticClass:"anchor",attrs:{"id":"the-application-instance"}}),_v("The application instance"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#the-application-instance","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Every Vue application starts by creating a new "),_c('strong',[_v("application instance")]),_v(" with the "),_c('a',{attrs:{"href":"https://vuejs.org/api/application.html#createapp"}},[_v("createApp")]),_v(" function:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs js"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { createApp } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" app = createApp({\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("/* root component options */")]),_v("\n")]),_c('span',[_v("})\n")])])]),_c('h2',{attrs:{"id":"the-root-component"}},[_c('span',{staticClass:"anchor",attrs:{"id":"the-root-component"}}),_v("The Root Component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#the-root-component","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The object we are passing into "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("createApp")]),_v(" is in fact a component. Every app requires a \"root component\" that can contain other components as its children.")]),_v(" "),_c('p',[_v("If you are using Single-File Components, we typically import the root component from another file:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs js"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { createApp } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// import the root component App from a single-file component.")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" App "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'./App.vue'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" app = createApp(App)\n")])])]),_c('p',[_v("While many examples in this guide only need a single component, most real applications are organized into a tree of nested, reusable components. For example, a Todo application's component tree might look like this:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("App (root component)\n")]),_c('span',[_v("├─ TodoList\n")]),_c('span',[_v("│  └─ TodoItem\n")]),_c('span',[_v("│     ├─ TodoDeleteButton\n")]),_c('span',[_v("│     └─ TodoEditButton\n")]),_c('span',[_v("└─ TodoFooter\n")]),_c('span',[_v("   ├─ TodoClearButton\n")]),_c('span',[_v("   └─ TodoStatistics\n")])])]),_c('p',[_v("In later sections of the guide, we will discuss how to define and compose multiple components together. Before that, we will focus on what happens inside a single component.")]),_v(" "),_c('h2',{attrs:{"id":"mounting-the-app"}},[_c('span',{staticClass:"anchor",attrs:{"id":"mounting-the-app"}}),_v("Mounting the App"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#mounting-the-app","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("An application instance won't render anything until its "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".mount()")]),_v(" method is called. It expects a \"container\" argument, which can either be an actual DOM element or a selector string:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs html"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("div")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("id")]),_v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"app\"")]),_v(">")]),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("div")]),_v(">")]),_v("\n")])])]),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs js"}},[_c('span',[_v("app.mount("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'#app'")]),_v(")\n")])])]),_c('p',[_v("The content of the app's root component will be rendered inside the container element. The container element itself is not considered part of the app.")]),_v(" "),_c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".mount()")]),_v(" method should always be called after all app configurations and asset registrations are done. Also note that its return value, unlike the asset registration methods, is the root component instance instead of the application instance.")]),_v(" "),_c('h3',{attrs:{"id":"in-dom-root-component-template"}},[_c('span',{staticClass:"anchor",attrs:{"id":"in-dom-root-component-template"}}),_v("In-DOM Root Component Template"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#in-dom-root-component-template","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("When using Vue without a build step, we can write our root component's template directly inside the mount container:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs html"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("div")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("id")]),_v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"app\"")]),_v(">")]),_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("button")]),_v(" @"),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("click")]),_v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"count++\"")]),_v(">")]),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("button")]),_v(">")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("div")]),_v(">")]),_v("\n")])])]),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs js"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { createApp } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" app = createApp({\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("data")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}}),_v(")")]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" {\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("count")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("0")]),_v("\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("  }\n")]),_c('span',[_v("})\n")]),_c('span',[_v("\n")]),_c('span',[_v("app.mount("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'#app'")]),_v(")\n")])])]),_c('p',[_v("Vue will automatically use the container's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("innerHTML")]),_v(" as the template if the root component does not already have a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("template")]),_v(" option.")]),_v(" "),_c('h2',{attrs:{"id":"app-configurations"}},[_c('span',{staticClass:"anchor",attrs:{"id":"app-configurations"}}),_v("App Configurations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#app-configurations","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The application instance exposes a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".config")]),_v(" object that allows us to configure a few app-level options, for example, defining an app-level error handler that captures errors from all descendant components:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs js"}},[_c('span',[_v("app.config.errorHandler = "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("err")]),_v(") =>")]),_v(" {\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("/* handle error */")]),_v("\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("The application instance also provides a few methods for registering app-scoped assets. For example, registering a component:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs js"}},[_c('span',[_v("app.component("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'TodoDeleteButton'")]),_v(", TodoDeleteButton)\n")])])]),_c('p',[_v("This makes the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TodoDeleteButton")]),_v(" available for use anywhere in our app. We will discuss registration for components and other types of assets in later sections of the guide. You can also browse the full list of application instance APIs in its "),_c('a',{attrs:{"href":"https://vuejs.org/api/application.html"}},[_v("API reference")]),_v(".")]),_v(" "),_c('p',[_v("Make sure to apply all app configurations before mounting the app!")]),_v(" "),_c('h2',{attrs:{"id":"multiple-application-instances"}},[_c('span',{staticClass:"anchor",attrs:{"id":"multiple-application-instances"}}),_v("Multiple application instances"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#multiple-application-instances","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("/contents/topic2.html")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs js"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" app1 = createApp({\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("/* ... */")]),_v("\n")]),_c('span',[_v("})\n")]),_c('span',[_v("app1.mount("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'#container-1'")]),_v(")\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" app2 = createApp({\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("/* ... */")]),_v("\n")]),_c('span',[_v("})\n")]),_c('span',[_v("app2.mount("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'#container-2'")]),_v(")\n")])])]),_c('p',[_v("If you are using Vue to enhance server-rendered HTML and only need Vue to control specific parts of a large page, avoid mounting a single Vue application instance on the entire page. Instead, create multiple small application instances and mount them on the elements they are responsible for.")]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.2")]),_v("]")])])])}
}];
  