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
- now (npm install -g now, start script, now => web server, no need to keep machine on)

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
- Webpack (handles more than JS, imports CSS, images, etc like JS, inline images and style per http request, hot-reloadable web server, also offers Treeshaking)
- Rollup (Tree shaking, faster loading production code, moves into the same code, quite new, not established yet, great for library authors, not hot reloading) 
- JSPM (SystemJS, universal module loader, can load modules at runtime, has its own package manager, can install from npm, git, uses Rollup in builder - Treeshaking)

### Sourcemaps
- Debugging transpiled and bundled ES6 code
- Map code back to the original code (see original ES6 code)
- Part of our build
- Downloaded only if you open developer tools

### Linting
Automate coding standards and syntax error/convention checking
- Why use a Linter?
   - Enforce Consistency (Curly brace position, confirmm/alert, trailing commas, Globals, eval)
   - Avoid mistakes (extra parenthesis, overwriting a function, assignment in conditional, missing default case in switch, debugger /console.log)

- Linter options:
  - JSLint (opinionated)
  - JSHint
  - ESLint (use this now)
  - TSLint (for Typescript support)
 
- Core Decisions
 - Config format
   - .eslintrc, eslint.yml,.. , package.json
 - Which built-in rules
   - decide which rules to follow
 - Warnings or Errors
   - errors break the build (production, team is forced to follow up), warnings can be ignored (dev), use both
 - Which plugins
    See https://github.com/dustinspecker/awesome-eslint
   - eslint-plugin-react
   - eslint-plugin-node
   - eslint-plugin-angular
 - Use preset instead
    - from scratch
    - Recommended defaults => tweak settings later
    - airbnb, XO, standardJS
- Implementing ESLint:
 - No file watching option built-in
  Solution: 
    - eslint-loader : relint all files (Webpack)
    - eslint-watch : wrapper around ESLint adds the file watch, not tied to webpack, better warning/error formatting, displays clean message, easily lint tests and build scripts too
 -  No support for many JS experimental features
  Solution:
    - Supports ES6 and ES7 natively
    - Also supports stage-0 to state-4 features
    Babel ESLint is the answer

While Lint via an automated build process?

- one place to check
- universal configuration
- part of continuous integration

### Testing and Continuous Integration (CI)
- 6 key Testing decisions
- configure and write tests
- continuous integration

JS Testing styles:
- Unit         Single function or modules
- Integration  Interaction between modules, clicking or waiting, slow, done in QA (e.g., Selenium)
- UI           Automate interactions with UI

Unit test decisions:

- Framework
  - Mocha (highly configurable, large support ecosystem)   -> use this one
  - Jasmine (highly configurable and built-in assertions)
  - Tape (old)
  - QUnit
  - AVA (parallel, runs only impacted tests)
  - Jest (nice wrapper over Jasmine, improved)
  
- Assertion library
  -  expect(2+2).to.equal(4)
  -  assert(2+2).equals(4)
  Use Chai.js
- Helper Library
  - JSDOM - simulate the DOM in node.js (no need to open a browser, fast)
  - Cheerio - jQuery for the server (virtual DOM using jQuery selectors)
- Where to run tests
  - Browser => Karma, Testem
  - Headless browser => PhantomJS (V8 engine without browser)
  - In-memory DOM => JSDOM
- Where to place tests
  - Centralized:  less "noise" in src folder, deployment confusion, inertia
  - Alongside importing easier, clear visibility, convenient to open at the same time, no recreating folder structure, easier to mode files
  - naming convention: .spec and .test are almost equally popular
- When to run the unit tests
  - every time you save
  - rapid feedback
  - facilitates TDD
  - automatic = low friction
  - increases visibility

Testing approach decisions:

- Mocha
- Chai
- JSOM
- node
- alongside
- after save

#### Continuous integration
. set up a CI server to find out when the build breaks





    
 
 
 
 
 
 
 

 
 
 
 
  
  
   
   
 











