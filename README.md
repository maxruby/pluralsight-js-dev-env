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
- Babel
- Typescript
- Elm









