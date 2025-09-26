export const navbarItems = [
  {
    id: 'introduction',
    name: 'Introduction to Angular',

    children: [
      {
        id: 'angular-history',
        name: 'Angular and History',
        route: '/docs/introduction/angular-history',
      },
      {
        id: 'architecture',
        name: 'Angular Architecture',
        route: '/docs/introduction/architecture',
      },
      { id: 'setup', name: 'Setting up a New Project', route: '/docs/introduction/setup' },
    ],
  },
  {
    id: 'components',
    name: 'Components',

    children: [
      {
        id: 'component-anatomy',
        name: 'Component Anatomy',
        route: '/docs/components/component-anatomy',
      },
      {
        id: 'creating-components',
        name: 'Creating Components',
        route: '/docs/components/creating-components',
      },
      {
        id: 'metadata',
        name: 'Metadata',
        children: [
          { id: 'selector', name: 'Selector', route: '/docs/components/metadata/selector' },
          { id: 'template', name: 'Template', route: '/docs/components/metadata/template' },
          { id: 'standalone', name: 'Standalone', route: '/docs/components/metadata/standalone' },
          { id: 'providers', name: 'Providers', route: '/docs/components/metadata/providers' },
          { id: 'imports', name: 'Imports', route: '/docs/components/metadata/imports' },
          { id: 'styles', name: 'Styles', route: '/docs/components/metadata/styles' },
          {
            id: 'view-providers',
            name: 'viewProvider',
            route: '/docs/components/metadata/view-providers',
          },
          {
            id: 'encapsulation',
            name: 'Encapsulation',
            route: '/docs/components/metadata/encapsulation',
          },
          {
            id: 'change-detection',
            name: 'changeDetection',
            route: '/docs/components/metadata/change-detection',
          },
        ],
      },
      {
        id: 'communication',
        name: 'Communication',
        children: [
          {
            id: 'parent-child',
            name: 'Parent-Child Interaction',
            route: '/docs/components/communication/parent-child',
          },
          {
            id: 'view-child',
            name: 'ViewChild',
            route: '/docs/components/communication/view-child',
          },
          {
            id: 'content-child',
            name: 'ContentChild',
            route: '/docs/components/communication/content-child',
          },
        ],
      },
      {
        id: 'lifecycle',
        name: 'Component Lifecycle',
        route: '/docs/components/component-lifecycle',
      },
      {
        id: 'dynamic-components',
        name: 'Dynamic Components',
        route: '/docs/components/dynamic-components',
      },
    ],
  },
  {
    id: 'modules',
    name: 'Modules',

    children: [
      {
        id: 'module-architecture',
        name: 'Module Architecture',
        route: '/docs/modules/architecture',
      },
      { id: 'creating-modules', name: 'Creating Modules', route: '/docs/modules/creating' },
      { id: 'feature-modules', name: 'Feature Modules', route: '/docs/modules/feature' },
      { id: 'lazy-loading', name: 'Lazy Loading Modules', route: '/docs/modules/lazy-loading' },
      { id: 'dependencies', name: 'Dependencies', route: '/docs/modules/dependencies' },
    ],
  },
  {
    id: 'templates',
    name: 'Templates',

    children: [
      { id: 'interpolation', name: 'Interpolation', route: '/docs/templates/interpolation' },
      {
        id: 'template-statements',
        name: 'Template Statements',
        route: '/docs/templates/template-statements',
      },
      { id: 'control-flow', name: 'Control Flow', route: '/docs/templates/control-flow' },
      {
        id: 'template-ref-vars',
        name: 'Template Ref Vars',
        route: '/docs/templates/template-ref-vars',
      },
      { id: 'input-output', name: '@input & @Output', route: '/docs/templates/input-output' },
      {
        id: 'binding',
        name: 'Understand Binding',
        children: [
          {
            id: 'data-binding',
            name: 'Data Binding',
            route: '/docs/templates/binding/data-binding',
          },
          {
            id: 'property-binding',
            name: 'Property Binding',
            route: '/docs/templates/binding/property-binding',
          },
          {
            id: 'attribute-binding',
            name: 'Attribute Binding',
            route: '/docs/templates/binding/attribute-binding',
          },
          {
            id: 'event-binding',
            name: 'Event Binding',
            route: '/docs/templates/binding/event-binding',
          },
          {
            id: 'two-way-binding',
            name: 'Two-way Binding',
            route: '/docs/templates/binding/two-way-binding',
          },
        ],
      },
    ],
  },
  // Continue with the rest of your structure...
  {
    id: 'directives',
    name: 'Directives',

    children: [
      { id: 'structural', name: 'Structural Directive', route: '/docs/directives/structural' },
      { id: 'attribute', name: 'Attribute Directives', route: '/docs/directives/attribute' },
      { id: 'custom', name: 'Custom Directives', route: '/docs/directives/custom' },
    ],
  },
  {
    id: 'routing',
    name: 'Routing',

    children: [
      { id: 'configuration', name: 'Configuration', route: '/docs/routing/configuration' },
      { id: 'lazy-loading', name: 'Lazy Loading', route: '/docs/routing/lazy-loading' },
      { id: 'router-outlets', name: 'Router Outlets', route: '/docs/routing/outlets' },
      { id: 'router-links', name: 'Router Links', route: '/docs/routing/links' },
      { id: 'router-events', name: 'Router Events', route: '/docs/routing/events' },
      { id: 'guards', name: 'Guards', route: '/docs/routing/guards' },
    ],
  },
  {
    id: 'services',
    name: 'Services & Remote Data',

    children: [
      {
        id: 'dependency-injection',
        name: 'Dependency Injection',
        route: '/docs/services/dependency-injection',
      },
    ],
  },
  {
    id: 'forms',
    name: 'Forms',

    children: [
      { id: 'reactive-forms', name: 'Reactive Forms', route: '/docs/forms/reactive-forms' },
      { id: 'typed-forms', name: 'Typed Forms', route: '/docs/forms/typed-forms' },
      { id: 'template-forms', name: 'Template-driven Forms', route: '/docs/forms/template-forms' },
      { id: 'dynamic-forms', name: 'Dynamic Forms', route: '/docs/forms/dynamic-forms' },
      {
        id: 'custom-validators',
        name: 'Custom Validators',
        route: '/docs/forms/custom-validators',
      },
      {
        id: 'control-value-accessor',
        name: 'Control Value Accessor',
        route: '/docs/forms/control-value-accessor',
      },
    ],
  },
  {
    id: 'http',
    name: 'HTTP Client',

    children: [
      { id: 'setup-client', name: 'Setting Up the Client', route: '/docs/http/setup' },
      { id: 'making-requests', name: 'Making Requests', route: '/docs/http/requests' },
      { id: 'interceptors', name: 'Writing Interceptors', route: '/docs/http/interceptors' },
    ],
  },
  {
    id: 'rxjs',
    name: 'RxJS Basics',

    children: [
      {
        id: 'observable-pattern',
        name: 'Observable Pattern',
        route: '/docs/rxjs/observable-pattern',
      },
      { id: 'observable-lifecycle', name: 'Observable Lifecycle', route: '/docs/rxjs/lifecycle' },
      { id: 'rxjs-vs-promises', name: 'RxJS vs Promises', route: '/docs/rxjs/vs-promises' },
      {
        id: 'operators',
        name: 'Operators',
        children: [
          { id: 'filtering', name: 'Filtering', route: '/docs/rxjs/operators/filtering' },
          {
            id: 'rate-limiting',
            name: 'Rate Limiting',
            route: '/docs/rxjs/operators/rate-limiting',
          },
          {
            id: 'transformation',
            name: 'Transformation',
            route: '/docs/rxjs/operators/transformation',
          },
          { id: 'combination', name: 'Combination', route: '/docs/rxjs/operators/combination' },
        ],
      },
    ],
  },
  {
    id: 'signals',
    name: 'Signals',

    children: [
      { id: 'rxjs-interop', name: 'RXJS Interop', route: '/docs/signals/rxjs-interop' },
      { id: 'inputs-as-signals', name: 'Inputs as Signals', route: '/docs/signals/inputs' },
      { id: 'queries-as-signals', name: 'Queries as Signals', route: '/docs/signals/queries' },
      { id: 'model-inputs', name: 'Model Inputs', route: '/docs/signals/model-inputs' },
    ],
  },
  {
    id: 'State-Management',
    name: 'State Management',
    children: [
      { id: 'NGXS', name: 'NGXS', route: '/docs/State-Management/NGXS' },
      { id: 'Elf', name: 'Elf', route: '/docs/State-Management/Elf' },
      { id: 'NgRx', name: 'NgRx', route: '/docs/State-Management/NgRx' },
    ],
  },
  {
    id: 'Zones',
    name: 'Zones',
    children: [
      {
        id: 'Zoneless-Applications',
        name: 'Zoneless Applications',
        route: 'docs/Zones/Zoneless-Application',
      },
    ],
  },

  {
    id: 'developer-tools',
    name: 'Developer Tools',
    children: [
      { id: 'devtools', name: 'DevTools', route: '/docs/developer-tools/devtools' },
      {
        id: 'language-service',
        name: 'Language Service',
        route: '/docs/developer-tools/language-service',
      },
      {
        id: 'libraries',
        name: 'Libraries',
        children: [
          {
            id: 'using-libraries',
            name: 'Using Libraries',
            route: '/docs/developer-tools/libraries/using-libraries',
          },
          {
            id: 'creating-libraries',
            name: 'Creating Libraries',
            route: '/docs/developer-tools/libraries/creating-libraries',
          },
        ],
      },
      {
        id: 'angular-cli',
        name: 'Angular CLI',
        children: [
          {
            id: 'local-setup',
            name: 'Local Setup',
            route: '/docs/developer-tools/angular-cli/local-setup',
          },
          {
            id: 'deployment',
            name: 'Deployment',
            route: '/docs/developer-tools/angular-cli/deployment',
          },
          {
            id: 'end-to-end-testing',
            name: 'End-to-End Testing',
            route: '/docs/developer-tools/angular-cli/end-to-end-testing',
          },
          {
            id: 'schematics',
            name: 'Schematics',
            route: '/docs/developer-tools/angular-cli/schematics',
          },
          {
            id: 'build-environments',
            name: 'Build Environments',
            route: '/docs/developer-tools/angular-cli/build-environments',
          },
          {
            id: 'cli-builders',
            name: 'CLI Builders',
            route: '/docs/developer-tools/angular-cli/cli-builders',
          },
          {
            id: 'aot-compilation',
            name: 'AoT Compilation',
            route: '/docs/developer-tools/angular-cli/aot-compilation',
          },
        ],
      },
    ],
  },
  { id: 'ssr', name: 'SSR', route: '/docs/ssr' },
  {
    id: 'ssg',
    name: 'SSG',
    children: [{ id: 'analogjs', name: 'AnalogJS', route: '/docs/ssg/analogjs' }],
  },
  {
    id: 'security',
    name: 'Security',
    children: [
      {
        id: 'cross-site-scripting',
        name: 'Cross-site Scripting',
        children: [
          {
            id: 'sanitization',
            name: 'Sanitization',
            route: '/docs/security/cross-site-scripting/sanitization',
          },
          {
            id: 'trusting-safe-values',
            name: 'Trusting Safe Values',
            route: '/docs/security/cross-site-scripting/trusting-safe-values',
          },
          {
            id: 'enforce-trusted-types',
            name: 'Enforce Trusted Types',
            route: '/docs/security/cross-site-scripting/enforce-trusted-types',
          },
        ],
      },
      {
        id: 'http-vulnerabilities',
        name: 'HTTP Vulnerabilities',
        children: [
          {
            id: 'cross-site-request-forgery',
            name: 'Cross-site Request Forgery',
            route: '/docs/security/http-vulnerabilities/cross-site-request-forgery',
          },
          {
            id: 'httpclient-csrf',
            name: 'HttpClient CSRF',
            route: '/docs/security/http-vulnerabilities/httpclient-csrf',
          },
          {
            id: 'xsrf-protection',
            name: 'XSRF protection',
            route: '/docs/security/http-vulnerabilities/xsrf-protection',
          },
          {
            id: 'cross-site-script-inclusion',
            name: 'Cross-site Script Inclusion',
            route: '/docs/security/http-vulnerabilities/cross-site-script-inclusion',
          },
        ],
      },
    ],
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    children: [
      { id: 'attributes', name: 'Attributes', route: '/docs/accessibility/attributes' },
      { id: 'ui-components', name: 'UI Components', route: '/docs/accessibility/ui-components' },
      { id: 'containers', name: 'Containers', route: '/docs/accessibility/containers' },
      { id: 'routing', name: 'Routing', route: '/docs/accessibility/routing' },
      {
        id: 'link-identification',
        name: 'Link Identification',
        route: '/docs/accessibility/link-identification',
      },
    ],
  },
  {
    id: 'performance',
    name: 'Performance',
    children: [
      {
        id: 'deferrable-views',
        name: 'Deferrable Views',
        route: '/docs/performance/deferrable-views',
      },
      {
        id: 'image-optimization',
        name: 'Image Optimization',
        route: '/docs/performance/image-optimization',
      },
      { id: 'zone-pollution', name: 'Zone Pollution', route: '/docs/performance/zone-pollution' },
      {
        id: 'slow-computations',
        name: 'Slow Computations',
        route: '/docs/performance/slow-computations',
      },
      { id: 'hydration', name: 'Hydration', route: '/docs/performance/hydration' },
    ],
  },
  {
    id: 'testing',
    name: 'Testing',
    children: [
      {
        id: 'testing-services',
        name: 'Testing Services',
        route: '/docs/testing/testing-services',
      },
      { id: 'testing-pipes', name: 'Testing Pipes', route: '/docs/testing/testing-pipes' },
      {
        id: 'testing-requests',
        name: 'Testing Requests',
        route: '/docs/testing/testing-requests',
      },
      {
        id: 'testing-directives',
        name: 'Testing Directives',
        route: '/docs/testing/testing-directives',
      },
      {
        id: 'services-with-dependencies',
        name: 'Services with Dependencies',
        route: '/docs/testing/services-with-dependencies',
      },
      {
        id: 'component-bindings',
        name: 'Component Bindings',
        route: '/docs/testing/component-bindings',
      },
      { id: 'debugging-tests', name: 'Debugging Tests', route: '/docs/testing/debugging-tests' },
      {
        id: 'component-templates',
        name: 'Component Templates',
        route: '/docs/testing/component-templates',
      },
      { id: 'code-coverage', name: 'Code Coverage', route: '/docs/testing/code-coverage' },
    ],
  },
  {
    id: 'internationalization',
    name: 'Internationalization',
    children: [
      {
        id: 'localize-package',
        name: 'Localize Package',
        route: '/docs/internationalization/localize-package',
      },
      {
        id: 'locales-by-id',
        name: 'Locales by ID',
        route: '/docs/internationalization/locales-by-id',
      },
      {
        id: 'translation-files',
        name: 'Translation Files',
        route: '/docs/internationalization/translation-files',
      },
      {
        id: 'multiple-locales',
        name: 'Multiple Locales',
        route: '/docs/internationalization/multiple-locales',
      },
    ],
  },
  {
    id: 'animation',
    name: 'Animation',
    children: [
      {
        id: 'introduction-and-setup',
        name: 'Introduction and Setup',
        route: '/docs/animation/introduction-and-setup',
      },
      { id: 'basic-animation', name: 'Basic Animation', route: '/docs/animation/basic-animation' },
      {
        id: 'advanced-animation',
        name: 'Advanced Animation',
        route: '/docs/animation/advanced-animation',
      },
      {
        id: 'route-transitions',
        name: 'Route Transitions',
        route: '/docs/animation/route-transitions',
      },
      {
        id: 'reusable-animations',
        name: 'Reusable Animations',
        route: '/docs/animation/reusable-animations',
      },
      {
        id: 'complex-sequences',
        name: 'Complex Sequences',
        route: '/docs/animation/complex-sequences',
      },
      {
        id: 'transitions-triggers',
        name: 'Transitions & Triggers',
        route: '/docs/animation/transitions-triggers',
      },
    ],
  },
];
