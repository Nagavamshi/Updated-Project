import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import App from './App';
import reducers from './createStore';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
    </Provider>, document.getElementById('root'));


 let queryparam =  function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');

        vars[hash[0]] = hash[1];
    }
    return vars;
}

localStorage.setItem("dealer_code",queryparam().dealer_code)
localStorage.setItem("dealid",queryparam().dealid)
localStorage.setItem("dealjacketid", queryparam().dealjacketid)



