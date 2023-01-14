
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("Essentials")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/docs/essentials/application.html"}},[_v("Creating an Application")])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"fw-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Template")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Getting Started")]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Essentials \n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/essentials/application.html"}},[_v("Creating an Application")])])])])]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Components In-Depth")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Reusability")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Built-in Components")]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Scaling Up\n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/scaling-up/sfc.html"}},[_v("Single-file Components")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/scaling-up/routing.html"}},[_v("Routing")])])])])]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Best Practices")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("TypeScript")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Extra Topics")])])],1)],1)]),_v(" "),_m(0),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"single-file-components"}},[_c('span',{staticClass:"anchor",attrs:{"id":"single-file-components"}}),_v("Single-File Components"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#single-file-components","onclick":"event.stopPropagation()"}})]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"introduction"}},[_c('span',{staticClass:"anchor",attrs:{"id":"introduction"}}),_v("Introduction"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#introduction","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Vue Single-File Components (a.k.a. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*.vue")]),_v(" files, abbreviated as "),_c('strong',[_v("SFC")]),_v(") is a special file format that allows us to encapsulate the template, logic, "),_c('strong',[_v("and")]),_v(" styling of a Vue component in a single file. Here's an example SFC:")]),_v(" "),_c('div',{staticClass:"options-api"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("<script>\n")]),_c('span',[_v("export default {\n")]),_c('span',[_v("  data() {\n")]),_c('span',[_v("    return {\n")]),_c('span',[_v("      greeting: 'Hello World!'\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("  }\n")]),_c('span',[_v("}\n")]),_c('span',[_v("</script>\n")]),_c('span',[_v("\n")]),_c('span',[_v("<template>\n")]),_c('span',[_v("  <p class=\"greeting\"></p>\n")]),_c('span',[_v("</template>\n")]),_c('span',[_v("\n")]),_c('span',[_v("<style>\n")]),_c('span',[_v(".greeting {\n")]),_c('span',[_v("  color: red;\n")]),_c('span',[_v("  font-weight: bold;\n")]),_c('span',[_v("}\n")]),_c('span',[_v("</style>\n")])])])]),_v(" "),_c('div',{staticClass:"composition-api"},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("<script setup>\n")]),_c('span',[_v("import { ref } from 'vue'\n")]),_c('span',[_v("const greeting = ref('Hello World!')\n")]),_c('span',[_v("</script>\n")]),_c('span',[_v("\n")]),_c('span',[_v("<template>\n")]),_c('span',[_v("  <p class=\"greeting\"></p>\n")]),_c('span',[_v("</template>\n")]),_c('span',[_v("\n")]),_c('span',[_v("<style>\n")]),_c('span',[_v(".greeting {\n")]),_c('span',[_v("  color: red;\n")]),_c('span',[_v("  font-weight: bold;\n")]),_c('span',[_v("}\n")]),_c('span',[_v("</style>\n")])])])]),_v(" "),_c('p',[_v("As we can see, Vue SFC is a natural extension of the classic trio of HTML, CSS and JavaScript. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<template>")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<script>")]),_v(", and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<style>")]),_v(" blocks encapsulate and colocate the view, logic and styling of a component in the same file. The full syntax is defined in the "),_c('a',{attrs:{"href":"/api/sfc-spec"}},[_v("SFC Syntax Specification")]),_v(".")]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"why-sfc"}},[_c('span',{staticClass:"anchor",attrs:{"id":"why-sfc"}}),_v("Why SFC"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#why-sfc","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While SFCs require a build step, there are numerous benefits in return:")]),_v(" "),_c('ul',[_c('li',[_v("Author modularized components using familiar HTML, CSS and JavaScript syntax")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#what-about-separation-of-concerns"}},[_v("Colocation of inherently coupled concerns")])]),_v(" "),_c('li',[_v("Pre-compiled templates without runtime compilation cost")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/api/sfc-css-features"}},[_v("Component-scoped CSS")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/api/sfc-script-setup"}},[_v("More ergonomic syntax when working with Composition API")])]),_v(" "),_c('li',[_v("More compile-time optimizations by cross-analyzing template and script")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/guide/scaling-up/tooling.html#ide-support"}},[_v("IDE support")]),_v(" with auto-completion and type-checking for template expressions")]),_v(" "),_c('li',[_v("Out-of-the-box Hot-Module Replacement (HMR) support")])]),_v(" "),_c('p',[_v("SFC is a defining feature of Vue as a framework, and is the recommended approach for using Vue in the following scenarios:")]),_v(" "),_c('ul',[_c('li',[_v("Single-Page Applications (SPA)")]),_v(" "),_c('li',[_v("Static Site Generation (SSG)")]),_v(" "),_c('li',[_v("Any non-trivial frontend where a build step can be justified for better development experience (DX).")])]),_v(" "),_c('p',[_v("That said, we do realize there are scenarios where SFCs can feel like overkill. This is why Vue can still be used via plain JavaScript without a build step. If you are just looking for enhancing largely static HTML with light interactions, you can also check out "),_c('a',{attrs:{"href":"https://github.com/vuejs/petite-vue"}},[_v("petite-vue")]),_v(", a 6 kB subset of Vue optimized for progressive enhancement.")]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"how-it-works"}},[_c('span',{staticClass:"anchor",attrs:{"id":"how-it-works"}}),_v("How It Works"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-it-works","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Vue SFC is a framework-specific file format and must be pre-compiled by "),_c('a',{attrs:{"href":"https://github.com/vuejs/core/tree/main/packages/compiler-sfc"}},[_v("@vue/compiler-sfc")]),_v(" into standard JavaScript and CSS. A compiled SFC is a standard JavaScript (ES) module - which means with proper build setup you can import an SFC like a module:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs js"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" MyComponent "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'./MyComponent.vue'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("export")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("default")]),_v(" {\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("components")]),_v(": {\n")]),_c('span',[_v("    MyComponent\n")]),_c('span',[_v("  }\n")]),_c('span',[_v("}\n")])])]),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<style>")]),_v(" tags inside SFCs are typically injected as native "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<style>")]),_v(" tags during development to support hot updates. For production they can be extracted and merged into a single CSS file.")]),_v(" "),_c('p',[_v("You can play with SFCs and explore how they are compiled in the "),_c('a',{attrs:{"href":"https://sfc.vuejs.org/"}},[_v("Vue SFC Playground")]),_v(".")]),_v(" "),_c('p',[_v("In actual projects, we typically integrate the SFC compiler with a build tool such as "),_c('a',{attrs:{"href":"https://vitejs.dev/"}},[_v("Vite")]),_v(" or "),_c('a',{attrs:{"href":"http://cli.vuejs.org/"}},[_v("Vue CLI")]),_v(" (which is based on "),_c('a',{attrs:{"href":"https://webpack.js.org/"}},[_v("webpack")]),_v("), and Vue provides official scaffolding tools to get you started with SFCs as fast as possible. Check out more details in the "),_c('a',{attrs:{"href":"/guide/scaling-up/tooling"}},[_v("SFC Tooling")]),_v(" section.")]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"what-about-separation-of-concerns"}},[_c('span',{staticClass:"anchor",attrs:{"id":"what-about-separation-of-concerns"}}),_v("What About Separation of Concerns?"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#what-about-separation-of-concerns","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Some users coming from a traditional web development background may have the concern that SFCs are mixing different concerns in the same place - which HTML/CSS/JS were supposed to separate!")]),_v(" "),_c('p',[_v("To answer this question, it is important for us to agree that "),_c('strong',[_v("separation of concerns is not equal to the separation of file types")]),_v(". The ultimate goal of engineering principles is to improve the maintainability of codebases. Separation of concerns, when applied dogmatically as separation of file types, does not help us reach that goal in the context of increasingly complex frontend applications.")]),_v(" "),_c('p',[_v("In modern UI development, we have found that instead of dividing the codebase into three huge layers that interweave with one another, it makes much more sense to divide them into loosely-coupled components and compose them. Inside a component, its template, logic, and styles are inherently coupled, and colocating them actually makes the component more cohesive and maintainable.")]),_v(" "),_c('p',[_v("Note even if you don't like the idea of Single-File Components, you can still leverage its hot-reloading and pre-compilation features by separating your JavaScript and CSS into separate files using "),_c('a',{attrs:{"href":"/api/sfc-spec.html#src-imports"}},[_v("Src Imports")]),_v(".")]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.2")]),_v("]")])])])}
}];
  