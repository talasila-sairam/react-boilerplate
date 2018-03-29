import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.jsx'

    // ReactDOM.render needs two parameters. The first parameter is your JSX.
    // It has to have always one root node. The second parameter is the node where your output should be appended.
    // Remember when we used <div id="app"></div> in the dist/index.html file? The same id is your entry point for React now.
ReactDOM.render(
    <div>
        <Routes/>
    </div>,document.querySelector("#app")
)
