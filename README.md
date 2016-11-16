# pluralsight-js-dev-env
JavaScript Development Environment from Pluralsight Course with Cory House 

### Starter Kit components

- Package management
- Bundling
- Minification
- Sourcemaps
- Transpiling
- Dynamic HTML generation
- Centralized HTTP
- Mock API framework
- Component libraries
- Development Webserver
- Linting
- Automated testing
- Continuous Integration
- Automated build
- Automated deployment
- Working example app

### Js Editors
- Visual Studio Code
- Atom
- Brackets
- JetBrains WebStorm

### Package Management
- npm (defacto standard)
- JSPM (good for bundling)
- security protection
  Node Security Project
    - manually:  npscheck 
    - npm install
    - production build
    - pull request
    - npm start (slight slowdown of startup)
    
### Development web server
- Configure web server
- Services for sharing work
- Options:
  - http-server (node.js)
  - live-server (live reloading)
  - Express (comprehensive, configurable, complex APIs, production-grade, can run everywhere) - ONLY one production-ready!
  - Koa (ES6 support, backend server work)
  - hapi
  - budo (Browserify)
  - Webpack (built into Webpack, serves from memory, includes hot realoading)
  - Browsersync (dedicated IP address on LAN for sharing, all interactions remain sync, browser and device testing devices and browsers, Webpack, Express)

### Sharing work-in-progress
- localtunnel (open Firewall, easy, just npm install localtunnel)
- ngrok (need authorization)
- Surge (Static files only on public URL, npm install -g surge)
- now (npm install -g now, start scrript, now => web server, no need to keep machine on)

### Automation
- Grunt (large, writes to disk)
- Gulp (in-memory streams, fast because it does not write to files, code over configuration, lots of plugins)
- npm scripts (package.json, OS command-line calls, use npm packages, call separate node scripts, convention pre/post hooks, largest package manager, no need for separate plugins, simpler debugging, better docs, easier to learn, simple)

### Transpiling
- Babel (latest features of Javascript to ES5, standardized JS, leverage full JS ecosystem -- React JSX syntax, ESLint, experimental features, no type defs, annotation, ES6 imports are statically analyzable, test, Lint, Babel, Great libs, IDE = safety)
- Typescript (Superset, type annotation, Enhanced autocompletion, safer refactoring)
- Elm (nothing like JS, compiles down to JS, clean syntax, no parenthesis or semicolon, immutable data structures, friendly errors, all errors are compile-time, interops with JS) 

Babel configuration

.babelrc
- Not npm specific
- Eaiser to read since isolated
package.json
  ```
  {
    babel: { // }
  }
  ```
### Bundling
- CommonJS does not work in web browsers
- Package project into file(s)
- Improve Node performance

### Selecting a Module formats
- IIFE (not recommended)
- AMD (Asynchronous Module Definition) - not recommended
- UMD (Universal Module Definition)
- CommonJS (CJS)
- ES6 Modules

Preferred approaches for encapsulating code:

- CommonJS  (node) => require('')
- ES6 Modules => import module from 'lib';
   - standardized
   - statically analyzable (predictable at run-time)
   - improved autocompletion
   - intelligent refactoring
   - fail fast and know bugs
   - Tree shaking (eliminate unused code)
   - easier to read
   - Named imports (variable that reference code in your module)
   - Default exports (how to consume modules)

### Bundling
- RequireJS (first popular bundler, relies and spread AMD)
- Browserify (takes code and npm packages, mass adoption, uses CommonJS pattern, plugin-based, packages modules at compile-time)
- Webpack (handles more than JS, imports CSS, images, etc like JS, inline images and style per http request, hot-reloadable web server)
- Rollup (Tree shaking, faster loading production code, moves into the same code, quite new, not established yet, great for library authors, not hot reloading) 
- JSPM (SystemJS, universal module loader, can load modules at runtime, has its own package manager, can install from npm, git, uses Rollup in builder - Treeshaking)










