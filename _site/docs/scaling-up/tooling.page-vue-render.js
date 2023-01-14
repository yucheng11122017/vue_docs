
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("Essentials")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/docs/essentials/application.html"}},[_v("Creating an Application")])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"fw-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Template")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Getting Started")]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Essentials \n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/essentials/application.html"}},[_v("Creating an Application")])])])])]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Components In-Depth")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Reusability")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Built-in Components")]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Scaling Up\n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/scaling-up/sfc.html"}},[_v("Single-file Components")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/scaling-up/tooling.html"}},[_v("Tooling")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/scaling-up/routing.html"}},[_v("Routing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/scaling-up/state-management.html"}},[_v("State Management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/scaling-up/testing.html"}},[_v("Testing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/scaling-up/ssr.html"}},[_v("Server-Side Rendering (SSR)")])])])])]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Best Practices")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("TypeScript")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Extra Topics")])])],1)],1)]),_v(" "),_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_c('p',[_v("You don't need to install anything on your machine to try out Vue SFCs - there are online playgrounds that allow you to do so right in the browser:")]),_v(" "),_m(2),_v(" "),_c('p',[_v("It is also recommended to use these online playgrounds to provide reproductions when reporting bugs.")]),_v(" "),_c('hr'),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_c('p',[_v("To get started with Vite + Vue, simply run:")]),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_c('p',[_v("Both online playgrounds mentioned above also support downloading files as a Vite project.")]),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_c('p',[_v("For information on migrating from Vue CLI to Vite:")]),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('hr'),_v(" "),_m(17),_v(" "),_c('ul',[_c('li',[_m(18),_v(" "),_c('box',{attrs:{"type":"info"}},[_v("\n  Volar replaces [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur), our previous official VSCode extension for Vue 2. If you have Vetur currently installed, make sure to disable it in Vue 3 projects.\n")])],1),_v(" "),_m(19),_v(" "),_m(20)]),_v(" "),_c('hr'),_v(" "),_m(21),_v(" "),_c('vueschoollink',{attrs:{"href":"https://vueschool.io/lessons/using-vue-dev-tools-with-vuejs-3","title":"Free Vue.js Devtools Lesson"}}),_v(" "),_c('p',[_v("The Vue browser devtools extension allows you to explore a Vue app's component tree, inspect the state of individual components, track state management events, and profile performance.")]),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_c('hr'),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_c('hr'),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_m(29),_v(" "),_c('hr'),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_c('p',[_v("Users previously using Vue CLI may be used to having linters configured via webpack loaders. However when using a Vite-based build setup, our general recommendation is:")]),_v(" "),_m(32),_v(" "),_c('hr'),_v(" "),_m(33),_v(" "),_m(34),_v(" "),_c('hr'),_v(" "),_m(35),_v(" "),_c('p',[_v("Custom blocks are compiled into imports to the same Vue file with different request queries. It is up to the underlying build tool to handle these import requests.")]),_v(" "),_m(36),_v(" "),_c('hr'),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_m(39),_v(" "),_m(40),_v(" "),_c('p',[_v("The package itself provides lower-level utilities for processing Vue SFCs and is only meant for tooling authors that need to support Vue SFCs in custom tools.")]),_v(" "),_c('box',{attrs:{"type":"info"}},[_v("\n  Always prefer using this package via the `vue/compiler-sfc` deep import since this ensures its version is in sync with the Vue runtime.\n")]),_v(" "),_m(41),_v(" "),_m(42),_v(" "),_c('p',[_v("Official plugin that provides Vue SFC support in Vite.")]),_v(" "),_m(43),_v(" "),_m(44),_v(" "),_m(45),_v(" "),_c('hr'),_v(" "),_m(46),_v(" "),_m(47),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(48)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"tooling"}},[_c('span',{staticClass:"anchor",attrs:{"id":"tooling"}}),_v("Tooling"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tooling","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"try-it-online"}},[_c('span',{staticClass:"anchor",attrs:{"id":"try-it-online"}}),_v("Try It Online"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#try-it-online","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://sfc.vuejs.org"}},[_v("Vue SFC Playground")]),_v(" "),_c('ul',[_c('li',[_v("Always deployed from latest commit")]),_v(" "),_c('li',[_v("Designed for inspecting component compilation results")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://vite.new/vue"}},[_v("Vue + Vite on StackBlitz")]),_v(" "),_c('ul',[_c('li',[_v("IDE-like environment running actual Vite dev server in the browser")]),_v(" "),_c('li',[_v("Closest to local setup")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"project-scaffolding"}},[_c('span',{staticClass:"anchor",attrs:{"id":"project-scaffolding"}}),_v("Project Scaffolding"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-scaffolding","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"vite"}},[_c('span',{staticClass:"anchor",attrs:{"id":"vite"}}),_v("Vite"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vite","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"https://vitejs.dev/"}},[_v("Vite")]),_v(" is a lightweight and fast build tool with first-class Vue SFC support. It is created by Evan You, who is also the author of Vue!")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"language-sh"},[_c('pre',[_c('code',{pre:true},[_c('span',{pre:true,attrs:{"class":"line"}},[_c('span',{pre:true,attrs:{"style":"color:var(--vt-c-green);"}},[_v("$")]),_v(" "),_c('span',{pre:true,attrs:{"style":"color:#A6ACCD;"}},[_v("npm init vue@latest")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("This command will install and execute "),_c('a',{attrs:{"href":"https://github.com/vuejs/create-vue"}},[_v("create-vue")]),_v(", the official Vue project scaffolding tool.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("To learn more about Vite, check out the "),_c('a',{attrs:{"href":"https://vitejs.dev"}},[_v("Vite docs")]),_v(".")]),_v(" "),_c('li',[_v("To configure Vue-specific behavior in a Vite project, for example passing options to the Vue compiler, check out the docs for "),_c('a',{attrs:{"href":"https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#readme"}},[_v("@vitejs/plugin-vue")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"vue-cli"}},[_c('span',{staticClass:"anchor",attrs:{"id":"vue-cli"}}),_v("Vue CLI"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-cli","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"https://cli.vuejs.org/"}},[_v("Vue CLI")]),_v(" is the official webpack-based toolchain for Vue. It is now in maintenance mode and we recommend starting new projects with Vite unless you rely on specific webpack-only features. Vite will provide superior developer experience in most cases.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/"}},[_v("Vue CLI -> Vite Migration Guide from VueSchool.io")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/vitejs/awesome-vite#vue-cli"}},[_v("Tools / Plugins that help with auto migration")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"note-on-in-browser-template-compilation"}},[_c('span',{staticClass:"anchor",attrs:{"id":"note-on-in-browser-template-compilation"}}),_v("Note on In-Browser Template Compilation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#note-on-in-browser-template-compilation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("When using Vue without a build step, component templates are written either directly in the page's HTML or as inlined JavaScript strings. In such cases, Vue needs to ship the template compiler to the browser in order to perform on-the-fly template compilation. On the other hand, the compiler would be unnecessary if we pre-compile the templates with a build step. To reduce client bundle size, Vue provides "),_c('a',{attrs:{"href":"https://unpkg.com/browse/vue@3/dist/"}},[_v("different \"builds\"")]),_v(" optimized for different use cases.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("Build files that start with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vue.runtime.*")]),_v(" are "),_c('strong',[_v("runtime-only builds")]),_v(": they do not include the compiler. When using these builds, all templates must be pre-compiled via a build step.")])]),_v(" "),_c('li',[_c('p',[_v("Build files that do not include "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".runtime")]),_v(" are "),_c('strong',[_v("full builds")]),_v(": they include the compiler and support compiling templates directly in the browser. However, they will increase the payload by ~14kb.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Our default tooling setups use the runtime-only build since all templates in SFCs are pre-compiled. If, for some reason, you need in-browser template compilation even with a build step, you can do so by configuring the build tool to alias "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vue")]),_v(" to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vue/dist/vue.esm-bundler.js")]),_v(" instead.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("If you are looking for a lighter-weight alternative for no-build-step usage, check out "),_c('a',{attrs:{"href":"https://github.com/vuejs/petite-vue"}},[_v("petite-vue")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"ide-support"}},[_c('span',{staticClass:"anchor",attrs:{"id":"ide-support"}}),_v("IDE Support"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ide-support","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The recommended IDE setup is "),_c('a',{attrs:{"href":"https://code.visualstudio.com/"}},[_v("VSCode")]),_v(" + the "),_c('a',{attrs:{"href":"https://github.com/johnsoncodehk/volar"}},[_v("Volar")]),_v(" extension. Volar provides syntax highlighting, TypeScript support, and intellisense for template expressions and component props.")])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_c('a',{attrs:{"href":"https://www.jetbrains.com/webstorm/"}},[_v("WebStorm")]),_v(" also provides great built-in support for Vue SFCs.")])])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Other IDEs that support the "),_c('a',{attrs:{"href":"https://microsoft.github.io/language-server-protocol/"}},[_v("Language Service Protocol")]),_v(" (LSP) can also leverage Volar's core functionalities via LSP:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Sublime Text support via "),_c('a',{attrs:{"href":"https://github.com/sublimelsp/LSP-volar"}},[_v("LSP-Volar")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("vim / Neovim support via "),_c('a',{attrs:{"href":"https://github.com/yaegassy/coc-volar"}},[_v("coc-volar")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("emacs support via "),_c('a',{attrs:{"href":"https://emacs-lsp.github.io/lsp-mode/page/lsp-volar/"}},[_v("lsp-mode")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"browser-devtools"}},[_c('span',{staticClass:"anchor",attrs:{"id":"browser-devtools"}}),_v("Browser Devtools"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#browser-devtools","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"https://raw.githubusercontent.com/vuejs/devtools/main/media/screenshot-shadow.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"https://raw.githubusercontent.com/vuejs/devtools/main/media/screenshot-shadow.png","alt":""}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://devtools.vuejs.org/"}},[_v("Documentation")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd"}},[_v("Chrome Extension")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/"}},[_v("Firefox Addon")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://devtools.vuejs.org/guide/installation.html#standalone"}},[_v("Standalone Electron app")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"typescript"}},[_c('span',{staticClass:"anchor",attrs:{"id":"typescript"}}),_v("TypeScript"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typescript","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Main article: "),_c('a',{attrs:{"href":"/guide/typescript/overview"}},[_v("Using Vue with TypeScript")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('a',{attrs:{"href":"https://github.com/johnsoncodehk/volar"}},[_v("Volar")]),_v(" provides type checking for SFCs using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<script lang=\"ts\">")]),_v(" blocks, including template expressions and cross-component props validation.")])]),_v(" "),_c('li',[_c('p',[_v("Use "),_c('a',{attrs:{"href":"https://github.com/johnsoncodehk/volar/tree/master/vue-language-tools/vue-tsc"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vue-tsc")])]),_v(" for performing the same type checking from the command line, or for generating "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("d.ts")]),_v(" files for SFCs.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"testing"}},[_c('span',{staticClass:"anchor",attrs:{"id":"testing"}}),_v("Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Main article: "),_c('a',{attrs:{"href":"/guide/scaling-up/testing"}},[_v("Testing Guide")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('a',{attrs:{"href":"https://www.cypress.io/"}},[_v("Cypress")]),_v(" is recommended for E2E tests. It can also be used for component testing for Vue SFCs via the "),_c('a',{attrs:{"href":"https://docs.cypress.io/guides/component-testing/introduction"}},[_v("Cypress Component Test Runner")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_c('a',{attrs:{"href":"https://vitest.dev/"}},[_v("Vitest")]),_v(" is a test runner created by Vue / Vite team members that focuses on speed. It is specifically designed for Vite-based applications to provide the same instant feedback loop for unit / component testing.")])]),_v(" "),_c('li',[_c('p',[_c('a',{attrs:{"href":"https://jestjs.io/"}},[_v("Jest")]),_v(" can be made to work with Vite via "),_c('a',{attrs:{"href":"https://github.com/sodatea/vite-jest"}},[_v("vite-jest")]),_v(". However, this is only recommended if you have existing Jest-based test suites that you need to migrate over to a Vite-based setup, as Vitest provides similar functionalities with a much more efficient integration.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"linting"}},[_c('span',{staticClass:"anchor",attrs:{"id":"linting"}}),_v("Linting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#linting","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The Vue team maintains "),_c('a',{attrs:{"href":"https://github.com/vuejs/eslint-plugin-vue"}},[_v("eslint-plugin-vue")]),_v(", an "),_c('a',{attrs:{"href":"https://eslint.org/"}},[_v("ESLint")]),_v(" plugin that supports SFC-specific linting rules.")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm install -D eslint eslint-plugin-vue")]),_v(", then follow "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("eslint-plugin-vue")]),_v("'s "),_c('a',{attrs:{"href":"https://eslint.vuejs.org/user-guide/#usage"}},[_v("configuration guide")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Setup ESLint IDE extensions, for example "),_c('a',{attrs:{"href":"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"}},[_v("ESLint for VSCode")]),_v(", so you get linter feedback right in your editor during development. This also avoids unnecessary linting cost when starting the dev server.")])]),_v(" "),_c('li',[_c('p',[_v("Run ESLint as part of the production build command, so you get full linter feedback before shipping to production.")])]),_v(" "),_c('li',[_c('p',[_v("(Optional) Setup tools like "),_c('a',{attrs:{"href":"https://github.com/okonet/lint-staged"}},[_v("lint-staged")]),_v(" to automatically lint modified files on git commit.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"formatting"}},[_c('span',{staticClass:"anchor",attrs:{"id":"formatting"}}),_v("Formatting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#formatting","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("The "),_c('a',{attrs:{"href":"https://github.com/johnsoncodehk/volar"}},[_v("Volar")]),_v(" VSCode extension provides formatting for Vue SFCs out of the box.")])]),_v(" "),_c('li',[_c('p',[_v("Alternatively, "),_c('a',{attrs:{"href":"https://prettier.io/"}},[_v("Prettier")]),_v(" provides built-in Vue SFC formatting support.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"sfc-custom-block-integrations"}},[_c('span',{staticClass:"anchor",attrs:{"id":"sfc-custom-block-integrations"}}),_v("SFC Custom Block Integrations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#sfc-custom-block-integrations","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("If using Vite, a custom Vite plugin should be used to transform matched custom blocks into executable JavaScript. "),_c('a',{attrs:{"href":"https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-transforming-custom-blocks"}},[_v("Example")])])]),_v(" "),_c('li',[_c('p',[_v("If using Vue CLI or plain webpack, a webpack loader should be configured to transform the matched blocks. "),_c('a',{attrs:{"href":"https://vue-loader.vuejs.org/guide/custom-blocks.html"}},[_v("Example")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"lower-level-packages"}},[_c('span',{staticClass:"anchor",attrs:{"id":"lower-level-packages"}}),_v("Lower-Level Packages"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#lower-level-packages","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"vue-compiler-sfc"}},[_c('span',{staticClass:"anchor",attrs:{"id":"vue-compiler-sfc"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@vue/compiler-sfc")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-compiler-sfc","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/core/tree/main/packages/compiler-sfc"}},[_v("Docs")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("This package is part of the Vue core monorepo and is always published with the same version as the main "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vue")]),_v(" package. It is included as a dependency of the main "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vue")]),_v(" package and proxied under "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vue/compiler-sfc")]),_v(" so you don't need to install it individually.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"vitejs-plugin-vue"}},[_c('span',{staticClass:"anchor",attrs:{"id":"vitejs-plugin-vue"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@vitejs/plugin-vue")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vitejs-plugin-vue","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue"}},[_v("Docs")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"vue-loader"}},[_c('span',{staticClass:"anchor",attrs:{"id":"vue-loader"}}),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vue-loader")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-loader","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vue-loader.vuejs.org/"}},[_v("Docs")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The official loader that provides Vue SFC support in webpack. If you are using Vue CLI, also see "),_c('a',{attrs:{"href":"https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader"}},[_v("docs on modifying "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vue-loader")]),_v(" options in Vue CLI")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"other-online-playgrounds"}},[_c('span',{staticClass:"anchor",attrs:{"id":"other-online-playgrounds"}}),_v("Other Online Playgrounds"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#other-online-playgrounds","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://play.vueuse.org"}},[_v("VueUse Playground")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://replit.com/@templates/VueJS-with-Vite"}},[_v("Vue + Vite on Repl.it")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://codesandbox.io/s/vue-3"}},[_v("Vue on CodeSandbox")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://codepen.io/pen/editor/vue"}},[_v("Vue on Codepen")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://components.studio/create/vue3"}},[_v("Vue on Components.studio")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://webcomponents.dev/create/cevue"}},[_v("Vue on WebComponents.dev")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.2")]),_v("]")])])])}
}];
  