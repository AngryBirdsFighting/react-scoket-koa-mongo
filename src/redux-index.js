import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from  'redux' // 1. 创建store 2. 开启中间件 3. 连接函数
import thunk  from 'redux-thunk' //异步处理 redux
import {Provider} from 'react-redux' // 简化redux 开发， Provider：在应用最外层，传入store即可， 只传一次
import {couter} from './index.redux'

const reduxDevtools = window.devToolsExtension?  window.devToolsExtension: ()=> {}

const store = createStore(couter, compose(applyMiddleware(thunk), reduxDevtools()))

    ReactDOM.render(
         (<Provider store= {store}> 
             <App />          
        </Provider>
        ),
        document.getElementById('root')   
);
    registerServiceWorker();



