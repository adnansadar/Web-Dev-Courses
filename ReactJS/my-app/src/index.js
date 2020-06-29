import React from 'react'; //'react' is a module and React is the object we are importing from it
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>;
console.log(element);

ReactDOM.render(element, document.getElementById('root'));