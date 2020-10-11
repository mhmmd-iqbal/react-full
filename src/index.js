import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App';
// import StatelessComponent from './component/StatelessComponent';
// import StatefullComponent from './container/StatefullComponent';
// import YoutubeComponent from './component/YoutubeComponent/YoutubeComponent';
// import Home from './container/Home/Home';
import AppComp from './container/App/AppComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

const globalState = {
    totalOrder: 0
}
// Reducer
const rootReducer = (state = globalState, action) => {
    if(action.type === 'PLUS_ORDER'){
        return {
            ...state,
            totalOrder: state.totalOrder + 1
        }
    }
    if(action.type === 'MINUS_ORDER'){
        if(state.totalOrder > 0){
            return {
                ...state,
                totalOrder: state.totalOrder - 1
            }

        }
    }
    return state;
}

// Store 
const storeRedux = createStore(rootReducer);


const appCom = 
<Provider store={storeRedux}>
    <AppComp></AppComp>    
</Provider>

ReactDOM.render(appCom, document.getElementById('root'));

// ReactDOM.render(<StatefullComponent/>, document.getElementById('root'));
// ReactDOM.render(<StatelessComponent/>, document.getElementById('root'));
// ReactDOM.render(<YoutubeComponent/>, document.getElementById('root'));
// ReactDOM.render(<Home />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
