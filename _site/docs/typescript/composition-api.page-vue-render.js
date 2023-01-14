
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("Essentials")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/docs/essentials/application.html"}},[_v("Creating an Application")])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"fw-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_v("Template")])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Getting Started")]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("Essentials \n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/essentials/application.html"}},[_v("Creating an Application")])])])])]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Components In-Depth")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Reusability")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Built-in Components")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Scaling Up")]),_v(" "),_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Best Practices")]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_v("TypeScript \n\n"),_c('i',{staticClass:"site-nav-dropdown-btn-icon site-nav-rotate-icon",attrs:{"onclick":"handleSiteNavClick(this.parentNode, false); event.stopPropagation();"}},[_c('span',{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})])]),_c('ul',{staticClass:"site-nav-dropdown-container site-nav-dropdown-container-open site-nav-list"},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/typescript/overview.html"}},[_v("Overview")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/typescript/composition-api.html"}},[_v("TS with Composition API")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-1",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/docs/typescript/options-api.html"}},[_v("TS with Options API")])])])])])]),_v(" "),_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',{staticClass:"site-nav-custom-list-item site-nav-list-item-0"},[_v("Extra Topics")])])],1)],1)]),_v(" "),_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_m(1),_v(" "),_c('hr'),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_m(6),_v(" "),_c('p',[_v("However, it is usually more straightforward to define props with pure types via a generic type argument:")]),_v(" "),_m(7),_c('p',[_v("This is called \"type-based declaration\". The compiler will try to do its best to infer the equivalent runtime options based on the type argument. In this case, our second example compiles into the exact same runtime options as the first example.")]),_v(" "),_c('p',[_v("You can use either type-based declaration OR runtime declaration, but you cannot use both at the same time.")]),_v(" "),_c('p',[_v("We can also move the props types into a separate interface:")]),_v(" "),_m(8),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_c('p',[_v("This is because Vue components are compiled in isolation and the compiler currently does not crawl imported files in order to analyze the source type. This limitation could be removed in a future release.")]),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_m(17),_v(" "),_m(18),_v(" "),_m(19),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_m(24),_v(" "),_c('p',[_v("With type-based declaration, a prop can use a complex type much like any other type:")]),_v(" "),_m(25),_m(26),_v(" "),_m(27),_m(28),_v(" "),_m(29),_m(30),_v(" "),_c('hr'),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_m(33),_m(34),_v(" "),_m(35),_v(" "),_m(36),_c('hr'),_v(" "),_m(37),_v(" "),_c('p',[_v("Refs infer the type from the initial value:")]),_v(" "),_m(38),_m(39),_v(" "),_m(40),_m(41),_v(" "),_m(42),_m(43),_v(" "),_m(44),_c('hr'),_v(" "),_m(45),_v(" "),_m(46),_v(" "),_m(47),_m(48),_v(" "),_m(49),_c('box',{attrs:{"type":"info"}},[_v("\nIt's not recommended to use the generic argument of `reactive()` because the returned type, which handles nested ref unwrapping, is different from the generic argument type.\n")]),_v(" "),_c('hr'),_v(" "),_m(50),_v(" "),_m(51),_v(" "),_m(52),_c('p',[_v("You can also specify an explicit type via a generic argument:")]),_v(" "),_m(53),_c('hr'),_v(" "),_m(54),_v(" "),_c('p',[_v("When dealing with native DOM events, it might be useful to type the argument we pass to the handler correctly. Let's take a look at this example:")]),_v(" "),_m(55),_m(56),_v(" "),_m(57),_c('hr'),_v(" "),_m(58),_v(" "),_m(59),_v(" "),_m(60),_c('p',[_v("It's recommended to place the injection key in a separate file so that it can be imported in multiple components.")]),_v(" "),_m(61),_v(" "),_m(62),_m(63),_v(" "),_m(64),_v(" "),_m(65),_c('p',[_v("If you are sure that the value is always provided, you can also force cast the value:")]),_v(" "),_m(66),_c('hr'),_v(" "),_m(67),_v(" "),_m(68),_v(" "),_m(69),_m(70),_v(" "),_c('hr'),_v(" "),_m(71),_v(" "),_m(72),_v(" "),_m(73),_m(74),_v(" "),_m(75),_m(76),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(77)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"typescript-with-composition-api"}},[_c('span',{staticClass:"anchor",attrs:{"id":"typescript-with-composition-api"}}),_v("TypeScript with Composition API"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typescript-with-composition-api","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("This page assumes you've already read the overview on "),_c('a',{attrs:{"href":"/docs/typescript/overview"}},[_v("Using Vue with TypeScript")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"typing-component-props"}},[_c('span',{staticClass:"anchor",attrs:{"id":"typing-component-props"}}),_v("Typing Component Props"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typing-component-props","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"using-script-setup"}},[_c('span',{staticClass:"anchor",attrs:{"id":"using-script-setup"}}),_v("Using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<script setup>")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-script-setup","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("When using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<script setup>")]),_v(", the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("defineProps()")]),_v(" macro supports inferring the props types based on its argument:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("<script setup lang=\"ts\">\n")]),_c('span',[_v("const props = defineProps({\n")]),_c('span',[_v("  foo: { type: String, required: true },\n")]),_c('span',[_v("  bar: Number\n")]),_c('span',[_v("})\n")]),_c('span',[_v("\n")]),_c('span',[_v("props.foo // string\n")]),_c('span',[_v("props.bar // number | undefined\n")]),_c('span',[_v("</script>\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("This is called \"runtime declaration\", because the argument passed to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("defineProps()")]),_v(" will be used as the runtime "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("props")]),_v(" option.")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("<script setup lang=\"ts\">\n")]),_c('span',[_v("const props = defineProps<{\n")]),_c('span',[_v("  foo: string\n")]),_c('span',[_v("  bar?: number\n")]),_c('span',[_v("}>()\n")]),_c('span',[_v("</script>\n")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("<script setup lang=\"ts\">\n")]),_c('span',[_v("interface Props {\n")]),_c('span',[_v("  foo: string\n")]),_c('span',[_v("  bar?: number\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("const props = defineProps<Props>()\n")]),_c('span',[_v("</script>\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"syntax-limitations"}},[_c('span',{staticClass:"anchor",attrs:{"id":"syntax-limitations"}}),_v("Syntax Limitations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#syntax-limitations","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("In order to generate the correct runtime code, the generic argument for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("defineProps()")]),_v(" must be one of the following:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("An object literal type:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_v("defineProps<{ "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("/*... */")]),_v(" }>()\n")])])])]),_v(" "),_c('li',[_c('p',[_v("A reference to an interface or object literal type "),_c('strong',[_v("in the same file")]),_v(":")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("interface")]),_v(" Props {"),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("/* ... */")]),_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("defineProps<Props>()\n")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The interface or object literal type can contain references to types imported from other files, however, the generic argument itself passed to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("defineProps")]),_v(" "),_c('strong',[_v("cannot")]),_v(" be an imported type:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { Props } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'./other-file'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// NOT supported")]),_v("\n")]),_c('span',[_v("defineProps<Props>()\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"props-default-values"}},[_c('span',{staticClass:"anchor",attrs:{"id":"props-default-values"}}),_v("Props Default Values"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#props-default-values","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("When using type-based declaration, we lose the ability to declare default values for the props. This can be resolved by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("withDefaults")]),_v(" compiler macro:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("export")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("interface")]),_v(" Props {\n")]),_c('span',[_v("  msg?: "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v("\n")]),_c('span',[_v("  labels?: "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v("[]\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" props = withDefaults(defineProps<Props>(), {\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("msg")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'hello'")]),_v(",\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("labels")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("() =>")]),_v(" ["),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'one'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'two'")]),_v("]\n")]),_c('span',[_v("})\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("This will be compiled to equivalent runtime props "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("default")]),_v(" options. In addition, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("withDefaults")]),_v(" helper provides type checks for the default values, and ensures the returned "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("props")]),_v(" type has the optional flags removed for properties that do have default values declared.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Alternatively, you can use the currently experimental "),_c('a',{attrs:{"href":"/guide/extras/reactivity-transform.html"}},[_v("Reactivity Transform")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("<script setup lang=\"ts\">\n")]),_c('span',[_v("interface Props {\n")]),_c('span',[_v("  name: string\n")]),_c('span',[_v("  count?: number\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("// reactive destructure for defineProps()\n")]),_c('span',[_v("// default value is compiled to equivalent runtime option\n")]),_c('span',[_v("const { name, count = 100 } = defineProps<Props>()\n")]),_c('span',[_v("</script>\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("This behavior currently requires "),_c('a',{attrs:{"href":"/guide/extras/reactivity-transform.html#explicit-opt-in"}},[_v("explicit opt-in")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"without-script-setup"}},[_c('span',{staticClass:"anchor",attrs:{"id":"without-script-setup"}}),_v("Without "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<script setup>")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#without-script-setup","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("If not using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<script setup>")]),_v(", it is necessary to use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("defineComponent()")]),_v(" to enable props type inference. The type of the props object passed to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("setup()")]),_v(" is inferred from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("props")]),_v(" option.")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { defineComponent } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("export")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("default")]),_v(" defineComponent({\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("props")]),_v(": {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("message")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("String")]),_v("\n")]),_c('span',[_v("  },\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("setup")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("props")]),_v(")")]),_v(" {\n")]),_c('span',[_v("    props.message "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// <-- type: string")]),_v("\n")]),_c('span',[_v("  }\n")]),_c('span',[_v("})\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"complex-prop-types"}},[_c('span',{staticClass:"anchor",attrs:{"id":"complex-prop-types"}}),_v("Complex prop types"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#complex-prop-types","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("<script setup lang=\"ts\">\n")]),_c('span',[_v("interface Book {\n")]),_c('span',[_v("  title: string\n")]),_c('span',[_v("  author: string\n")]),_c('span',[_v("  year: number\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("const props = defineProps<{\n")]),_c('span',[_v("  book: Book\n")]),_c('span',[_v("}>()\n")]),_c('span',[_v("</script>\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("For runtime declaration, we can use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PropType")]),_v(" utility type:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("type")]),_v(" { PropType } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" props = defineProps({\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("book")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("Object")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("as")]),_v(" PropType<Book>\n")]),_c('span',[_v("})\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("This works in much the same way if we're specifying the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("props")]),_v(" option directly:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { defineComponent } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("type")]),_v(" { PropType } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("export")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("default")]),_v(" defineComponent({\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("props")]),_v(": {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("book")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("Object")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("as")]),_v(" PropType<Book>\n")]),_c('span',[_v("  }\n")]),_c('span',[_v("})\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("props")]),_v(" option is more commonly used with the Options API, so you'll find more detailed examples in the guide to "),_c('a',{attrs:{"href":"/guide/typescript/options-api.html#typing-component-props"}},[_v("TypeScript with Options API")]),_v(". The techniques shown in those examples also apply to runtime declarations using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("defineProps()")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"typing-component-emits"}},[_c('span',{staticClass:"anchor",attrs:{"id":"typing-component-emits"}}),_v("Typing Component Emits"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typing-component-emits","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<script setup>")]),_v(", the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("emit")]),_v(" function can also be typed using either runtime declaration OR type declaration:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("<script setup lang=\"ts\">\n")]),_c('span',[_v("// runtime\n")]),_c('span',[_v("const emit = defineEmits(['change', 'update'])\n")]),_c('span',[_v("\n")]),_c('span',[_v("// type-based\n")]),_c('span',[_v("const emit = defineEmits<{\n")]),_c('span',[_v("  (e: 'change', id: number): void\n")]),_c('span',[_v("  (e: 'update', value: string): void\n")]),_c('span',[_v("}>()\n")]),_c('span',[_v("</script>\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The type argument should be a type literal with "),_c('a',{attrs:{"href":"https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures"}},[_v("Call Signatures")]),_v(". The type literal will be used as the type of the returned "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("emit")]),_v(" function. As we can see, the type declaration gives us much finer-grained control over the type constraints of emitted events.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("When not using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<script setup>")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("defineComponent()")]),_v(" is able to infer the allowed events for the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("emit")]),_v(" function exposed on the setup context:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { defineComponent } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("export")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("default")]),_v(" defineComponent({\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("emits")]),_v(": ["),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'change'")]),_v("],\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("setup")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("props, { emit }")]),_v(")")]),_v(" {\n")]),_c('span',[_v("    emit("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'change'")]),_v(") "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// <-- type check / auto-completion")]),_v("\n")]),_c('span',[_v("  }\n")]),_c('span',[_v("})\n")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"typing-ref"}},[_c('span',{staticClass:"anchor",attrs:{"id":"typing-ref"}}),_v("Typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ref()")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typing-ref","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { ref } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// inferred type: Ref<number>")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" year = ref("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2020")]),_v(")\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// => TS Error: Type 'string' is not assignable to type 'number'.")]),_v("\n")]),_c('span',[_v("year.value = "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'2020'")]),_v("\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Sometimes we may need to specify complex types for a ref's inner value. We can do that by using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Ref")]),_v(" type:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { ref } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("type")]),_v(" { Ref } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" year: Ref<"),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v(" | "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("number")]),_v("> = ref("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'2020'")]),_v(")\n")]),_c('span',[_v("\n")]),_c('span',[_v("year.value = "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2020")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// ok!")]),_v("\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Or, by passing a generic argument when calling "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ref()")]),_v(" to override the default inference:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// resulting type: Ref<string | number>")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" year = ref<"),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v(" | "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("number")]),_v(">("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'2020'")]),_v(")\n")]),_c('span',[_v("\n")]),_c('span',[_v("year.value = "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2020")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// ok!")]),_v("\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("If you specify a generic type argument but omit the initial value, the resulting type will be a union type that includes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undefined")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// inferred type: Ref<number | undefined>")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" n = ref<"),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("number")]),_v(">()\n")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"typing-reactive"}},[_c('span',{staticClass:"anchor",attrs:{"id":"typing-reactive"}}),_v("Typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("reactive()")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typing-reactive","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("reactive()")]),_v(" also implicitly infers the type from its argument:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { reactive } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// inferred type: { title: string }")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" book = reactive({ "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("title")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'Vue 3 Guide'")]),_v(" })\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("To explicitly type a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("reactive")]),_v(" property, we can use interfaces:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { reactive } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("interface")]),_v(" Book {\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("title")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v("\n")]),_c('span',[_v("  year?: "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("number")]),_v("\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" book: Book = reactive({ "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("title")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'Vue 3 Guide'")]),_v(" })\n")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"typing-computed"}},[_c('span',{staticClass:"anchor",attrs:{"id":"typing-computed"}}),_v("Typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("computed()")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typing-computed","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("computed()")]),_v(" infers its type based on the getter's return value:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { ref, computed } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" count = ref("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("0")]),_v(")\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// inferred type: ComputedRef<number>")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" double = computed("),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("() =>")]),_v(" count.value * "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(")\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// => TS Error: Property 'split' does not exist on type 'number'")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" result = double.value.split("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("''")]),_v(")\n")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" double = computed<"),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("number")]),_v(">("),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("() =>")]),_v(" {\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// type error if this doesn't return a number")]),_v("\n")]),_c('span',[_v("})\n")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"typing-event-handlers"}},[_c('span',{staticClass:"anchor",attrs:{"id":"typing-event-handlers"}}),_v("Typing Event Handlers"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typing-event-handlers","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("<script setup lang=\"ts\">\n")]),_c('span',[_v("function handleChange(event) {\n")]),_c('span',[_v("  // `event` implicitly has `any` type\n")]),_c('span',[_v("  console.log(event.target.value)\n")]),_c('span',[_v("}\n")]),_c('span',[_v("</script>\n")]),_c('span',[_v("\n")]),_c('span',[_v("<template>\n")]),_c('span',[_v("  <input type=\"text\" @change=\"handleChange\" />\n")]),_c('span',[_v("</template>\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Without type annotation, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("event")]),_v(" argument will implicitly have a type of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("any")]),_v(". This will also result in a TS error if "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\"strict\": true")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\"noImplicitAny\": true")]),_v(" are used in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tsconfig.json")]),_v(". It is therefore recommended to explicitly annotate the argument of event handlers. In addition, you may need to explicitly cast properties on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("event")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("function")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("handleChange")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("event: Event")]),_v(") ")]),_v("{\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("console")]),_v(".log((event.target "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("as")]),_v(" HTMLInputElement).value)\n")]),_c('span',[_v("}\n")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"typing-provide-inject"}},[_c('span',{staticClass:"anchor",attrs:{"id":"typing-provide-inject"}}),_v("Typing Provide / Inject"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typing-provide-inject","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Provide and inject are usually performed in separate components. To properly type injected values, Vue provides an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("InjectionKey")]),_v(" interface, which is a generic type that extends "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Symbol")]),_v(". It can be used to sync the type of the injected value between the provider and the consumer:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { provide, inject } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("type")]),_v(" { InjectionKey } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'vue'")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" key = "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("Symbol")]),_v("() "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("as")]),_v(" InjectionKey<"),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v(">\n")]),_c('span',[_v("\n")]),_c('span',[_v("provide(key, "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'foo'")]),_v(") "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// providing non-string value will result in error")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" foo = inject(key) "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// type of foo: string | undefined")]),_v("\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("When using string injection keys, the type of the injected value will be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unknown")]),_v(", and needs to be explicitly declared via a generic type argument:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" foo = inject<"),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v(">("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'foo'")]),_v(") "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// type: string | undefined")]),_v("\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Notice the injected value can still be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undefined")]),_v(", because there is no guarantee that a provider will provide this value at runtime.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undefined")]),_v(" type can be removed by providing a default value:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" foo = inject<"),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v(">("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'foo'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'bar'")]),_v(") "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// type: string")]),_v("\n")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" foo = inject("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'foo'")]),_v(") "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("as")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v("\n")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"typing-template-refs"}},[_c('span',{staticClass:"anchor",attrs:{"id":"typing-template-refs"}}),_v("Typing Template Refs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typing-template-refs","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Template refs should be created with an explicit generic type argument and an initial value of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("null")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("<script setup lang=\"ts\">\n")]),_c('span',[_v("import { ref, onMounted } from 'vue'\n")]),_c('span',[_v("\n")]),_c('span',[_v("const el = ref<HTMLInputElement | null>(null)\n")]),_c('span',[_v("\n")]),_c('span',[_v("onMounted(() => {\n")]),_c('span',[_v("  el.value?.focus()\n")]),_c('span',[_v("})\n")]),_c('span',[_v("</script>\n")]),_c('span',[_v("\n")]),_c('span',[_v("<template>\n")]),_c('span',[_v("  <input ref=\"el\" />\n")]),_c('span',[_v("</template>\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Note that for strict type safety, it is necessary to use optional chaining or type guards when accessing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("el.value")]),_v(". This is because the initial ref value is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("null")]),_v(" until the component is mounted, and it can also be set to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("null")]),_v(" if the referenced element is unmounted by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v-if")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"typing-component-template-refs"}},[_c('span',{staticClass:"anchor",attrs:{"id":"typing-component-template-refs"}}),_v("Typing Component Template Refs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typing-component-template-refs","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Sometimes you might need to annotate a template ref for a child component in order to call its public method. For example, we have a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MyModal")]),_v(" child component with a method that opens the modal:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("<!-- MyModal.vue -->\n")]),_c('span',[_v("<script setup lang=\"ts\">\n")]),_c('span',[_v("import { ref } from 'vue'\n")]),_c('span',[_v("\n")]),_c('span',[_v("const isContentShown = ref(false)\n")]),_c('span',[_v("const open = () => (isContentShown.value = true)\n")]),_c('span',[_v("\n")]),_c('span',[_v("defineExpose({\n")]),_c('span',[_v("  open\n")]),_c('span',[_v("})\n")]),_c('span',[_v("</script>\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("In order to get the instance type of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MyModal")]),_v(", we need to first get its type via "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("typeof")]),_v(", then use TypeScript's built-in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("InstanceType")]),_v(" utility to extract its instance type:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"5":"","class":"hljs"}},[_c('span',[_v("<!-- App.vue -->\n")]),_c('span',[_v("<script setup lang=\"ts\">\n")]),_c('span',[_v("import MyModal from './MyModal.vue'\n")]),_c('span',[_v("\n")]),_c('span',[_v("const modal = ref<InstanceType<typeof MyModal> | null>(null)\n")]),_c('span',[_v("\n")]),_c('span',[_v("const openModal = () => {\n")]),_c('span',[_v("  modal.value?.open()\n")]),_c('span',[_v("}\n")]),_c('span',[_v("</script>\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Note if you want to use this technique in TypeScript files instead of Vue SFCs, you need to enable Volar's "),_c('a',{attrs:{"href":"/docs/typescript/overview.html#volar-takeover-mode"}},[_v("Takeover Mode")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("[Generated by "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.0.2")]),_v("]")])])])}
}];
  