import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import StatelessComponent from './component/StatelessComponent';
// import StatefullComponent from './container/StatefullComponent';
// import YoutubeComponent from './component/YoutubeComponent/YoutubeComponent';
import AppComp from './container/App/AppComp';
import Home from './container/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<StatefullComponent/>, document.getElementById('root'));
// ReactDOM.render(<StatelessComponent/>, document.getElementById('root'));
// ReactDOM.render(<YoutubeComponent/>, document.getElementById('root'));
// ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<AppComp />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
