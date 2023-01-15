<head-bottom>
  <link rel="stylesheet" href="{{baseUrl}}/stylesheets/main.css">
</head-bottom>

<header sticky>
  <navbar type="dark">
    <!-- <a slot="brand" href="{{baseUrl}}/index.html" title="Home" class="navbar-brand">Your Logo</a> -->
    <dropdown header="Essentials" class="nav-link">
      <li><a href="{{baseUrl}}/docs/essentials/application.html" class="dropdown-item">Creating an Application</a></li>
      <li><a href="{{baseUrl}}/docs/essentials/template-syntax.html" class="dropdown-item">Template Syntax</a></li>
    </dropdown>
    <dropdown header="Components In-Depth" class="nav-link">
      <li><a href="{{baseUrl}}/docs/components/registration.html" class="dropdown-item">Registration</a></li>
      <li><a href="{{baseUrl}}/docs/components/props.html" class="dropdown-item">Props</a></li>
      <li><a href="{{baseUrl}}/docs/components/events.html" class="dropdown-item">Events</a></li>
      <li><a href="{{baseUrl}}/docs/components/v-model.html" class="dropdown-item">Component v-model</a></li>
      <li><a href="{{baseUrl}}/docs/components/attrs.html" class="dropdown-item">Fallthrough Attributes</a></li>
      <li><a href="{{baseUrl}}/docs/components/slots.html" class="dropdown-item">Slots</a></li>
      <li><a href="{{baseUrl}}/docs/components/provide-inject.html" class="dropdown-item">Provide / inject</a></li>
      <li><a href="{{baseUrl}}/docs/components/async.html" class="dropdown-item">Async Components</a></li>
    </dropdown>
    <dropdown header="Reusability" class="nav-link">
      <li><a href="{{baseUrl}}/docs/reusability/composables.html" class="dropdown-item">Composables</a></li>
      <li><a href="{{baseUrl}}/docs/reusability/custom-directives.html" class="dropdown-item">Custom Directives</a></li>
      <li><a href="{{baseUrl}}/docs/reusability/plugins.html" class="dropdown-item">Plugins</a></li>
    </dropdown>
    <dropdown header="Built-in Components" class="nav-link">
      <li><a href="{{baseUrl}}/docs/built-ins/transition.html" class="dropdown-item">Transition</a></li>
      <li><a href="{{baseUrl}}/docs/built-ins/transition-group.html" class="dropdown-item">TransitionGroup</a></li>
      <li><a href="{{baseUrl}}/docs/built-ins/keep-alive.html" class="dropdown-item">KeepAlive</a></li>
      <li><a href="{{baseUrl}}/docs/built-ins/teleport.html" class="dropdown-item">Teleport</a></li>
      <li><a href="{{baseUrl}}/docs/built-ins/suspense.html" class="dropdown-item">Suspense</a></li>
    </dropdown>
    <dropdown header="Scaling Up" class="nav-link">
      <li><a href="{{baseUrl}}/docs/scaling-up/sfc.html" class="dropdown-item">Single-File Components</a></li>
      <li><a href="{{baseUrl}}/docs/scaling-up/tooling.html" class="dropdown-item">Tooling</a></li>
      <li><a href="{{baseUrl}}/docs/scaling-up/routing.html" class="dropdown-item">Routing</a></li>
      <li><a href="{{baseUrl}}/docs/scaling-up/state-management.html" class="dropdown-item">State Management</a></li>
      <li><a href="{{baseUrl}}/docs/scaling-up/testing.html" class="dropdown-item">Testing</a></li>
      <li><a href="{{baseUrl}}/docs/scaling-up/ssr.html" class="dropdown-item">Server-Side Rendering (SSR)</a></li>
    </dropdown>
    <dropdown header="Best practises" class="nav-link">
      <li><a href="{{baseUrl}}/docs/best-practices/production-deployment.html" class="dropdown-item">Production Deployment</a></li>
      <li><a href="{{baseUrl}}/docs/best-practices/performance.html" class="dropdown-item">Performance</a></li>
      <li><a href="{{baseUrl}}/docs/best-practices/accessibility.html" class="dropdown-item">Accessibility</a></li>
      <li><a href="{{baseUrl}}/docs/best-practices/security.html" class="dropdown-item">Security</a></li>
    </dropdown>
    <dropdown header="TypeScript" class="nav-link">
      <li><a href="{{baseUrl}}/docs/typescript/overview.html" class="dropdown-item">Overview</a></li>
      <li><a href="{{baseUrl}}/docs/typescript/composition-api.html" class="dropdown-item">TS with Composition API</a></li>
      <li><a href="{{baseUrl}}/docs/typescript/options-api.html" class="dropdown-item">TS with Options API</a></li>
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
* Extra Topics
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
