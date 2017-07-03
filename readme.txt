1. Install Node.js https://nodejs.org/en/download/

2. To install packages execute 
   <pre>npm install</pre>

3a. To build the project during development with hot reload execute
    <pre>npm run build</pre>
    Runs webpack.config.js

3b. To build the project for production execute
    <pre>npm run dist</pre>
    Runs webpack.prod.config.js with UglifyJsPlugin, OccurrenceOrderPlugin, and AggressiveMergingPlugin to compress file size.

This template is designed to migrate a classic website layout to be used with Webpack. In contrast to other setups, the main entry point will be an index.html. All JS code will be bundled into a single bundle.js which is automatically added to the index.html to be imported. All your CSS files will also be bundled into a single styles.css file.

You can program with ECMAScript 2015. Babel will migrate it to CommonJS for use in the browser. Additional, a polyfill is automatically added for older browsers. ESLint checks your code style and validates your code during compiling.

There is a config file for development with Hot Module Reload, as well as a distribution file for production with several plugins for optimisation purposes.

After running Webpack, the distribution folder has this structure:
- fonts/
- images/
- bundle.js
- index.html
- styles.css

