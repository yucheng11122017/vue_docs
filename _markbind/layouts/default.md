<head-bottom>
  <link rel="stylesheet" href="{{baseUrl}}/stylesheets/main.css">
</head-bottom>

<header sticky>
  <navbar type="dark">
    <a slot="brand" href="{{baseUrl}}/index.html" title="Home" class="navbar-brand"><img src="{{baseUrl}}/images/vue_logo.png" width="100"/></a>
    <li><a href="{{baseUrl}}/index.html" class="nav-link">HOME</a></li>
    <li><a href="{{baseUrl}}/docs/quick-start.html" class="nav-link">QUICK START</a></li>
    <dropdown header="ESSENTIALS" class="nav-link">
      <li><a href="{{baseUrl}}/docs/essentials/application.html" class="dropdown-item">Creating an Application</a></li>
      <li><a href="{{baseUrl}}/docs/essentials/template-syntax.html" class="dropdown-item">Template Syntax</a></li>
      <li><a href="{{baseUrl}}/docs/essentials/reactivity-fundamentals.html" class="dropdown-item">Reactivity Fundamentals</a></li>
      <li><a href="{{baseUrl}}/docs/essentials/computed.html" class="dropdown-item">Computed Properties</a></li>
      <li><a href="{{baseUrl}}/docs/essentials/class-and-style.html" class="dropdown-item">Class and Style Bindings</a></li>
      <li><a href="{{baseUrl}}/docs/essentials/conditional.html" class="dropdown-item">Conditional Rendering</a></li>
      <li><a href="{{baseUrl}}/docs/essentials/list.html" class="dropdown-item">List Rendering</a></li>
      <li><a href="{{baseUrl}}/docs/essentials/event-handling.html" class="dropdown-item">Event Handling</a></li>
      <li><a href="{{baseUrl}}/docs/essentials/forms.html" class="dropdown-item">Form Input Bindings</a></li>
      <li><a href="{{baseUrl}}/docs/essentials/lifecycle.html" class="dropdown-item">Lifecycle Hooks</a></li>
      <li><a href="{{baseUrl}}/docs/essentials/watchers.html" class="dropdown-item">Watchers</a></li>
      <li><a href="{{baseUrl}}/docs/essentials/template-refs.html" class="dropdown-item">Template Refs</a></li>
      <li><a href="{{baseUrl}}/docs/essentials/component-basics.html" class="dropdown-item">Components Basics</a></li>
    </dropdown>
    <dropdown header="COMPONENTS" class="nav-link">
      <li><a href="{{baseUrl}}/docs/components/registration.html" class="dropdown-item">Registration</a></li>
      <li><a href="{{baseUrl}}/docs/components/props.html" class="dropdown-item">Props</a></li>
      <li><a href="{{baseUrl}}/docs/components/events.html" class="dropdown-item">Events</a></li>
      <li><a href="{{baseUrl}}/docs/components/v-model.html" class="dropdown-item">Component v-model</a></li>
      <li><a href="{{baseUrl}}/docs/components/attrs.html" class="dropdown-item">Fallthrough Attributes</a></li>
      <li><a href="{{baseUrl}}/docs/components/slots.html" class="dropdown-item">Slots</a></li>
      <li><a href="{{baseUrl}}/docs/components/provide-inject.html" class="dropdown-item">Provide / inject</a></li>
      <li><a href="{{baseUrl}}/docs/components/async.html" class="dropdown-item">Async Components</a></li>
    </dropdown>
    <li slot="right">
      <form class="navbar-form">
        <searchbar :data="searchData" placeholder="Search" :on-hit="searchCallback" menu-align-right></searchbar>
      </form>
    </li>
  </navbar>
</header>

<div id="flex-body">
  <nav id="site-nav">
    <div class="site-nav-top">
      <div class="fw-bold mb-2" style="font-size: 1.25rem;">Template</div>
    </div>
    <div class="nav-component slim-scroll">
      <site-nav>
<!-- * [Home :house:]({{ baseUrl }}/index.html) -->
* Getting Started :expanded:
  * [Introduction]({{baseUrl}}/docs/introduction.html)
  * [Quick Start]({{baseUrl}}/docs/quick-start.html)
* Essentials :expanded:
  * [Creating an Application]({{baseUrl}}/docs/essentials/application.html)
  * [Template Syntax]({{baseUrl}}/docs/essentials/template-syntax.html)
  * [Reactivity Fundamentals]({{baseUrl}}/docs/essentials/reactivity-fundamentals.html)
  * [Computed Properties]({{baseUrl}}/docs/essentials/computed.html)
  * [Class and Style Bindings]({{baseUrl}}/docs/essentials/class-and-style.html)
  * [Conditional Rendering]({{baseUrl}}/docs/essentials/conditional.html)
  * [List Rendering]({{baseUrl}}/docs/essentials/list.html)
  * [Event Handling]({{baseUrl}}/docs/essentials/event-handling.html)
  * [Form Input Bindings]({{baseUrl}}/docs/essentials/forms.html)
  * [Lifecycle Hooks]({{baseUrl}}/docs/essentials/lifecycle.html)
  * [Watchers]({{baseUrl}}/docs/essentials/watchers.html)
  * [Template Refs]({{baseUrl}}/docs/essentials/template-refs.html)
  * [Components Basics]({{baseUrl}}/docs/essentials/component-basics.html)
* Components In-Depth :expanded:
  * [Registration]({{baseUrl}}/docs/components/registration.html)
  * [Props]({{baseUrl}}/docs/components/props.html)
  * [Events]({{baseUrl}}/docs/components/events.html)
  * [Component v-model]({{baseUrl}}/docs/components/v-model.html)
  * [Fallthrough Attributes]({{baseUrl}}/docs/components/attrs.html)
  * [Slots]({{baseUrl}}/docs/components/slots.html)
  * [Provide / inject]({{baseUrl}}/docs/components/provide-inject.html)
  * [Async Components]({{baseUrl}}/docs/components/async.html)
* Reusability :expanded:
  * [Composables]({{baseUrl}}/docs/reusability/composables.html)
  * [Custom Directives]({{baseUrl}}/docs/reusability/custom-directives.md)
  * [Plugins]({{baseUrl}}/docs/reusability/plugins.md)
* Built-in Components :expanded:
  * [Transition]({{baseUrl}}/docs/built-ins/transition.html)
  * [TransitionGroup]({{baseUrl}}/docs/built-ins/transition-group.html)
  * [KeepAlive]({{baseUrl}}/docs/built-ins/keep-alive.html)
  * [Teleport]({{baseUrl}}/docs/built-ins/teleport.html)
  * [Suspense]({{baseUrl}}/docs/built-ins/suspense.html)
* Scaling Up :expanded:
  * [Single-file Components]({{baseUrl}}/docs/scaling-up/sfc.html)
  * [Tooling]({{baseUrl}}/docs/scaling-up/tooling.html)
  * [Routing]({{baseUrl}}/docs/scaling-up/routing.html)
  * [State Management]({{baseUrl}}/docs/scaling-up/state-management.html)
  * [Testing]({{baseUrl}}/docs/scaling-up/testing.html)
  * [Server-Side Rendering (SSR)]({{baseUrl}}/docs/scaling-up/ssr.html)
* Best Practices :expanded:
  * [Production Deployment]({{baseUrl}}/docs/best-practices/production-deployment.html)
  * [Performance]({{baseUrl}}/docs/best-practices/performance.html)
  * [Accessibility]({{baseUrl}}/docs/best-practices/accessibility.html)
  * [Security]({{baseUrl}}/docs/best-practices/security.html)
* TypeScript :expanded:
  * [Overview]({{baseUrl}}/docs/typescript/overview.html)
  * [TS with Composition API]({{baseUrl}}/docs/typescript/composition-api.html)
  * [TS with Options API]({{baseUrl}}/docs/typescript/options-api.html)
* Extra topics :expanded:
  * [Ways of using Vue]({{baseUrl}}/docs/extras/ways-of-using-vue.html)
  * [Composition API FAQ]({{baseUrl}}/docs/extras/composition-api-faq.html)
  * [Reactivity in Depth]({{baseUrl}}/docs/extras/reactivity-in-depth.html)
  * [Rendering Mechanism]({{baseUrl}}/docs/extras/rendering-mechanism.html)
  * [Render Functions & JSX]({{baseUrl}}/docs/extras/render-function.html)
  * [Vue and Web Components]({{baseUrl}}/docs/extras/web-components.html)
  * [Animation Techniques]({{baseUrl}}/docs/extras/animation.html)
  * [Reactivity Transform]({{baseUrl}}/docs/extras/reactivity-transform.html)
      </site-nav>
    </div>
  </nav>
  <div id="content-wrapper">
    {{ content }}
  </div>
  <nav id="page-nav">
    <div class="nav-component slim-scroll">
      <page-nav />
    </div>
  </nav>
</div>

<footer>
  <!-- Support MarkBind by including a link to us on your landing page! -->
  <div class="text-center">
    <small>[Generated by {{MarkBind}}]</small>
  </div>
</footer>
