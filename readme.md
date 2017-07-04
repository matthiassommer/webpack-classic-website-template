webpack-classic-website-template
======

A website template for [Webpack](https://github.com/webpack/webpack).

## Description

This template is designed to migrate a classic website layout to be used with Webpack. In contrast to other setups, the main entry point will be an index.html. All JS code will be bundled into a single bundle.js which is automatically added to the index.html to be imported. All your CSS files will also be bundled into a single styles.css file.

* You can program using the latest features of JavaScript (e.g. ES6 and ES7). 
* Babel migrates it to CommonJS for use in the browser. 
* Additional, a polyfill is added for support of browsers. 
* ESLint checks your code style and looks for problematic patterns during compiling.
* [HandlebarsJS](http://handlebarsjs.com) is used to decouple HTML snippets from the JS code
* jQuery and jQueryUI for HTML document manipulation, event handling, and user interface interactions.

There is a config file for development with Hot Module Reload, and a distribution file for production with several plugins for optimisation purposes.

After running Webpack, the distribution folder has this structure:
dist
|-- fonts/
|-- images/
|-- bundle.js
|-- index.html
|-- styles.css


## Installation
1. Download Node.js from https://nodejs.org/en/download/ and install it.

2. To install packages execute 
   <pre>npm install</pre>


## Usage
* To build the project during development with hot reload execute
    <pre>npm run build</pre>
    Runs webpack.config.js

* To build the project for production execute
    <pre>npm run dist</pre>
    Runs webpack.prod.config.js with UglifyJs, OccurrenceOrderPlugin, and AggressiveMergingPlugin to compress file size.


## License
[MIT](http://www.opensource.org/licenses/mit-license)

