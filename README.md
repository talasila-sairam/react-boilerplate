# react-boilerplate
basic react environment setup with webpack 4  and react-router 4 along with development and production webpack configuration and detailed readme file 
// Babel enables you writing your code in ES6 (ES2015). With Babel the code will get transpiled back to ES5 so that every browser,
   // without having all ES6 features implemented, can interpret it. Babel even takes it one step further.
   // You can not only use ES6 features, but also the next generations of ES.

    "babel-core"
    "babel-loader"
    "babel-preset-env"

    //  since you want to use React, you need one more configuration to transform the natural React .jsx files to .js files.
    It is for the sake of convenience.

    "babel-preset-react"

    // this package is responsible for using spread operator "..."
    "babel-preset-stage-2"


    // this package reponsible for build
    "webpack"

    //this package is responsible for webpack cli as in webpack 4 both are separated
    "webpack-cli"

    //this is simple dev server which is internally a node server to run locally
    "webpack-dev-server"


    //  Hot Module Replacement in React
    //  A huge development boost will give you react-hot-loader (Hot Module Replacement).
    //  It will shorten your feedback loop during development.
    //  Basically whenever you change something in your source code,
    //  the change will apply in your app running in the browser without reloading the entire page.

     "react-hot-loader"


    // to provide routing we need to install react router

     "react-router-dom"


    // to load css styles we need following loaders

    "css-loader"
    "style-loader"

    // to extract css from files we use following

    "extract-text-webpack-plugin"

    // to minify css we use this processor

     "cssnano"

    // for minification and optimization we use


     "mini-css-extract-plugin"
     "optimize-css-assets-webpack-plugin"


   // first run

    npm run install

   // for developement

    npm start

   // for minified build generation

    npm run compile
