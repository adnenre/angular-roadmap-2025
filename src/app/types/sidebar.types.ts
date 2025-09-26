export interface SidebarItem {
  id: string;
  label: string;

  route?: string;
  children?: SidebarItem[];
  isExpanded?: boolean;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: 'introduction',
    label: 'Introduction to Angular',

    children: [
      {
        id: 'angular-history',
        label: 'Angular and History',
        route: '/docs/introduction/angular-history',
      },
      {
        id: 'architecture',
        label: 'Angular Architecture',
        route: '/docs/introduction/architecture',
      },
      { id: 'setup', label: 'Setting up a New Project', route: '/docs/introduction/setup' },
    ],
  },
  {
    id: 'components',
    label: 'Components',

    children: [
      { id: 'component-anatomy', label: 'Component Anatomy', route: '/docs/components/anatomy' },
      {
        id: 'creating-components',
        label: 'Creating Components',
        route: '/docs/components/creating',
      },
      {
        id: 'metadata',
        label: 'Metadata',
        children: [
          { id: 'selector', label: 'Selector', route: '/docs/components/metadata/selector' },
          { id: 'template', label: 'Template', route: '/docs/components/metadata/template' },
          { id: 'standalone', label: 'Standalone', route: '/docs/components/metadata/standalone' },
          { id: 'providers', label: 'Providers', route: '/docs/components/metadata/providers' },
          { id: 'imports', label: 'Imports', route: '/docs/components/metadata/imports' },
          { id: 'styles', label: 'Styles', route: '/docs/components/metadata/styles' },
          {
            id: 'view-providers',
            label: 'viewProvider',
            route: '/docs/components/metadata/view-providers',
          },
          {
            id: 'encapsulation',
            label: 'Encapsulation',
            route: '/docs/components/metadata/encapsulation',
          },
          {
            id: 'change-detection',
            label: 'changeDetection',
            route: '/docs/components/metadata/change-detection',
          },
        ],
      },
      {
        id: 'communication',
        label: 'Communication',
        children: [
          {
            id: 'parent-child',
            label: 'Parent-Child Interaction',
            route: '/docs/components/communication/parent-child',
          },
          {
            id: 'view-child',
            label: 'ViewChild',
            route: '/docs/components/communication/view-child',
          },
          {
            id: 'content-child',
            label: 'ContentChild',
            route: '/docs/components/communication/content-child',
          },
        ],
      },
      { id: 'lifecycle', label: 'Component Lifecycle', route: '/docs/components/lifecycle' },
      { id: 'dynamic-components', label: 'Dynamic Components', route: '/docs/components/dynamic' },
    ],
  },
  {
    id: 'modules',
    label: 'Modules',

    children: [
      {
        id: 'module-architecture',
        label: 'Module Architecture',
        route: '/docs/modules/architecture',
      },
      { id: 'creating-modules', label: 'Creating Modules', route: '/docs/modules/creating' },
      { id: 'feature-modules', label: 'Feature Modules', route: '/docs/modules/feature' },
      { id: 'lazy-loading', label: 'Lazy Loading Modules', route: '/docs/modules/lazy-loading' },
      { id: 'dependencies', label: 'Dependencies', route: '/docs/modules/dependencies' },
    ],
  },
  {
    id: 'templates',
    label: 'Templates',

    children: [
      { id: 'interpolation', label: 'Interpolation', route: '/docs/templates/interpolation' },
      {
        id: 'template-statements',
        label: 'Template Statements',
        route: '/docs/templates/statements',
      },
      { id: 'control-flow', label: 'Control Flow', route: '/docs/templates/control-flow' },
      { id: 'template-ref-vars', label: 'Template Ref Vars', route: '/docs/templates/ref-vars' },
      { id: 'input-output', label: '@input & @Output', route: '/docs/templates/input-output' },
      {
        id: 'binding',
        label: 'Understand Binding',
        children: [
          {
            id: 'data-binding',
            label: 'Data Binding',
            route: '/docs/templates/binding/data-binding',
          },
          {
            id: 'property-binding',
            label: 'Property Binding',
            route: '/docs/templates/binding/property-binding',
          },
          {
            id: 'attribute-binding',
            label: 'Attribute Binding',
            route: '/docs/templates/binding/attribute-binding',
          },
          {
            id: 'event-binding',
            label: 'Event Binding',
            route: '/docs/templates/binding/event-binding',
          },
          {
            id: 'two-way-binding',
            label: 'Two-way Binding',
            route: '/docs/templates/binding/two-way-binding',
          },
        ],
      },
    ],
  },
  // Continue with the rest of your structure...
  {
    id: 'directives',
    label: 'Directives',

    children: [
      { id: 'structural', label: 'Structural Directive', route: '/docs/directives/structural' },
      { id: 'attribute', label: 'Attribute Directives', route: '/docs/directives/attribute' },
      { id: 'custom', label: 'Custom Directives', route: '/docs/directives/custom' },
    ],
  },
  {
    id: 'routing',
    label: 'Routing',

    children: [
      { id: 'configuration', label: 'Configuration', route: '/docs/routing/configuration' },
      { id: 'lazy-loading', label: 'Lazy Loading', route: '/docs/routing/lazy-loading' },
      { id: 'router-outlets', label: 'Router Outlets', route: '/docs/routing/outlets' },
      { id: 'router-links', label: 'Router Links', route: '/docs/routing/links' },
      { id: 'router-events', label: 'Router Events', route: '/docs/routing/events' },
      { id: 'guards', label: 'Guards', route: '/docs/routing/guards' },
    ],
  },
  {
    id: 'services',
    label: 'Services & Remote Data',

    children: [
      {
        id: 'dependency-injection',
        label: 'Dependency Injection',
        route: '/docs/services/dependency-injection',
      },
    ],
  },
  {
    id: 'forms',
    label: 'Forms',

    children: [
      { id: 'reactive-forms', label: 'Reactive Forms', route: '/docs/forms/reactive' },
      { id: 'typed-forms', label: 'Typed Forms', route: '/docs/forms/typed' },
      { id: 'template-forms', label: 'Template-driven Forms', route: '/docs/forms/template' },
      { id: 'dynamic-forms', label: 'Dynamic Forms', route: '/docs/forms/dynamic' },
      { id: 'custom-validators', label: 'Custom Validators', route: '/docs/forms/validators' },
      {
        id: 'control-value-accessor',
        label: 'Control Value Accessor',
        route: '/docs/forms/value-accessor',
      },
    ],
  },
  {
    id: 'http',
    label: 'HTTP Client',

    children: [
      { id: 'setup-client', label: 'Setting Up the Client', route: '/docs/http/setup' },
      { id: 'making-requests', label: 'Making Requests', route: '/docs/http/requests' },
      { id: 'interceptors', label: 'Writing Interceptors', route: '/docs/http/interceptors' },
    ],
  },
  {
    id: 'rxjs',
    label: 'RxJS Basics',

    children: [
      {
        id: 'observable-pattern',
        label: 'Observable Pattern',
        route: '/docs/rxjs/observable-pattern',
      },
      { id: 'observable-lifecycle', label: 'Observable Lifecycle', route: '/docs/rxjs/lifecycle' },
      { id: 'rxjs-vs-promises', label: 'RxJS vs Promises', route: '/docs/rxjs/vs-promises' },
      {
        id: 'operators',
        label: 'Operators',
        children: [
          { id: 'filtering', label: 'Filtering', route: '/docs/rxjs/operators/filtering' },
          {
            id: 'rate-limiting',
            label: 'Rate Limiting',
            route: '/docs/rxjs/operators/rate-limiting',
          },
          {
            id: 'transformation',
            label: 'Transformation',
            route: '/docs/rxjs/operators/transformation',
          },
          { id: 'combination', label: 'Combination', route: '/docs/rxjs/operators/combination' },
        ],
      },
    ],
  },
  {
    id: 'signals',
    label: 'Signals',

    children: [
      { id: 'rxjs-interop', label: 'RXJS Interop', route: '/docs/signals/rxjs-interop' },
      { id: 'inputs-as-signals', label: 'Inputs as Signals', route: '/docs/signals/inputs' },
      { id: 'queries-as-signals', label: 'Queries as Signals', route: '/docs/signals/queries' },
      { id: 'model-inputs', label: 'Model Inputs', route: '/docs/signals/model-inputs' },
    ],
  },
  {
    id: 'State-Management',
    label: 'State Management',
    children: [
      { id: 'NGXS', label: 'NGXS', route: '/docs/State-Management/NGXS' },
      { id: 'Elf', label: 'Elf', route: '/docs/State-Management/Elf' },
      { id: 'NgRx', label: 'NgRx', route: '/docs/State-Management/NgRx' },
    ],
  },
  {
    id: 'Zones',
    label: 'Zones',
    children: [
      {
        id: 'Zoneless-Applications',
        label: 'Zoneless Applications',
        route: 'docs/Zones/Zoneless-Application',
      },
    ],
  },

  {
    id: 'developer-tools',
    label: 'Developer Tools',
    children: [
      { id: 'devtools', label: 'DevTools', route: '/docs/developer-tools/devtools' },
      {
        id: 'language-service',
        label: 'Language Service',
        route: '/docs/developer-tools/language-service',
      },
      {
        id: 'libraries',
        label: 'Libraries',
        children: [
          {
            id: 'using-libraries',
            label: 'Using Libraries',
            route: '/docs/developer-tools/libraries/using-libraries',
          },
          {
            id: 'creating-libraries',
            label: 'Creating Libraries',
            route: '/docs/developer-tools/libraries/creating-libraries',
          },
        ],
      },
      {
        id: 'angular-cli',
        label: 'Angular CLI',
        children: [
          {
            id: 'local-setup',
            label: 'Local Setup',
            route: '/docs/developer-tools/angular-cli/local-setup',
          },
          {
            id: 'deployment',
            label: 'Deployment',
            route: '/docs/developer-tools/angular-cli/deployment',
          },
          {
            id: 'end-to-end-testing',
            label: 'End-to-End Testing',
            route: '/docs/developer-tools/angular-cli/end-to-end-testing',
          },
          {
            id: 'schematics',
            label: 'Schematics',
            route: '/docs/developer-tools/angular-cli/schematics',
          },
          {
            id: 'build-environments',
            label: 'Build Environments',
            route: '/docs/developer-tools/angular-cli/build-environments',
          },
          {
            id: 'cli-builders',
            label: 'CLI Builders',
            route: '/docs/developer-tools/angular-cli/cli-builders',
          },
          {
            id: 'aot-compilation',
            label: 'AoT Compilation',
            route: '/docs/developer-tools/angular-cli/aot-compilation',
          },
        ],
      },
    ],
  },
  { id: 'ssr', label: 'SSR', route: '/docs/ssr' },
  {
    id: 'ssg',
    label: 'SSG',
    children: [{ id: 'analogjs', label: 'AnalogJS', route: '/docs/ssg/analogjs' }],
  },
  {
    id: 'security',
    label: 'Security',
    children: [
      {
        id: 'cross-site-scripting',
        label: 'Cross-site Scripting',
        children: [
          {
            id: 'sanitization',
            label: 'Sanitization',
            route: '/docs/security/cross-site-scripting/sanitization',
          },
          {
            id: 'trusting-safe-values',
            label: 'Trusting Safe Values',
            route: '/docs/security/cross-site-scripting/trusting-safe-values',
          },
          {
            id: 'enforce-trusted-types',
            label: 'Enforce Trusted Types',
            route: '/docs/security/cross-site-scripting/enforce-trusted-types',
          },
        ],
      },
      {
        id: 'http-vulnerabilities',
        label: 'HTTP Vulnerabilities',
        children: [
          {
            id: 'cross-site-request-forgery',
            label: 'Cross-site Request Forgery',
            route: '/docs/security/http-vulnerabilities/cross-site-request-forgery',
          },
          {
            id: 'httpclient-csrf',
            label: 'HttpClient CSRF',
            route: '/docs/security/http-vulnerabilities/httpclient-csrf',
          },
          {
            id: 'xsrf-protection',
            label: 'XSRF protection',
            route: '/docs/security/http-vulnerabilities/xsrf-protection',
          },
          {
            id: 'cross-site-script-inclusion',
            label: 'Cross-site Script Inclusion',
            route: '/docs/security/http-vulnerabilities/cross-site-script-inclusion',
          },
        ],
      },
    ],
  },
  {
    id: 'accessibility',
    label: 'Accessibility',
    children: [
      { id: 'attributes', label: 'Attributes', route: '/docs/accessibility/attributes' },
      { id: 'ui-components', label: 'UI Components', route: '/docs/accessibility/ui-components' },
      { id: 'containers', label: 'Containers', route: '/docs/accessibility/containers' },
      { id: 'routing', label: 'Routing', route: '/docs/accessibility/routing' },
      {
        id: 'link-identification',
        label: 'Link Identification',
        route: '/docs/accessibility/link-identification',
      },
    ],
  },
  {
    id: 'performance',
    label: 'Performance',
    children: [
      {
        id: 'deferrable-views',
        label: 'Deferrable Views',
        route: '/docs/performance/deferrable-views',
      },
      {
        id: 'image-optimization',
        label: 'Image Optimization',
        route: '/docs/performance/image-optimization',
      },
      { id: 'zone-pollution', label: 'Zone Pollution', route: '/docs/performance/zone-pollution' },
      {
        id: 'slow-computations',
        label: 'Slow Computations',
        route: '/docs/performance/slow-computations',
      },
      { id: 'hydration', label: 'Hydration', route: '/docs/performance/hydration' },
    ],
  },
  {
    id: 'testing',
    label: 'Testing',
    children: [
      {
        id: 'testing-services',
        label: 'Testing Services',
        route: '/docs/testing/testing-services',
      },
      { id: 'testing-pipes', label: 'Testing Pipes', route: '/docs/testing/testing-pipes' },
      {
        id: 'testing-requests',
        label: 'Testing Requests',
        route: '/docs/testing/testing-requests',
      },
      {
        id: 'testing-directives',
        label: 'Testing Directives',
        route: '/docs/testing/testing-directives',
      },
      {
        id: 'services-with-dependencies',
        label: 'Services with Dependencies',
        route: '/docs/testing/services-with-dependencies',
      },
      {
        id: 'component-bindings',
        label: 'Component Bindings',
        route: '/docs/testing/component-bindings',
      },
      { id: 'debugging-tests', label: 'Debugging Tests', route: '/docs/testing/debugging-tests' },
      {
        id: 'component-templates',
        label: 'Component Templates',
        route: '/docs/testing/component-templates',
      },
      { id: 'code-coverage', label: 'Code Coverage', route: '/docs/testing/code-coverage' },
    ],
  },
  {
    id: 'internationalization',
    label: 'Internationalization',
    children: [
      {
        id: 'localize-package',
        label: 'Localize Package',
        route: '/docs/internationalization/localize-package',
      },
      {
        id: 'locales-by-id',
        label: 'Locales by ID',
        route: '/docs/internationalization/locales-by-id',
      },
      {
        id: 'translation-files',
        label: 'Translation Files',
        route: '/docs/internationalization/translation-files',
      },
      {
        id: 'multiple-locales',
        label: 'Multiple Locales',
        route: '/docs/internationalization/multiple-locales',
      },
    ],
  },
  {
    id: 'animation',
    label: 'Animation',
    children: [
      {
        id: 'introduction-and-setup',
        label: 'Introduction and Setup',
        route: '/docs/animation/introduction-and-setup',
      },
      { id: 'basic-animation', label: 'Basic Animation', route: '/docs/animation/basic-animation' },
      {
        id: 'advanced-animation',
        label: 'Advanced Animation',
        route: '/docs/animation/advanced-animation',
      },
      {
        id: 'route-transitions',
        label: 'Route Transitions',
        route: '/docs/animation/route-transitions',
      },
      {
        id: 'reusable-animations',
        label: 'Reusable Animations',
        route: '/docs/animation/reusable-animations',
      },
      {
        id: 'complex-sequences',
        label: 'Complex Sequences',
        route: '/docs/animation/complex-sequences',
      },
      {
        id: 'transitions-triggers',
        label: 'Transitions & Triggers',
        route: '/docs/animation/transitions-triggers',
      },
    ],
  },
];
