import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux' // 1. 创建store 2. 开启中间件 3. 连接函数
import thunk from 'redux-thunk' //异步处理 redux
import {Provider} from 'react-redux' // 简化redux 开发， Provider：在应用最外层，传入store即可， 只传一次
// import {counter} from './index.redux'
import reducer from './reducer.js'
import { instance } from "./http";
import {BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom'
import Login from "./container/login/login";
import AuthRoute from "./component/authroute/authtoute";
import Register from "./container/register/register";
 
const reduxDevtools = window.devToolsExtension
    ? window.devToolsExtension
    : () => {}
    // 路由传参
    // class Text extends React.Component {
    //     constructor(props) {
    //         super(props)
    //     }
    //     render() {
    //         // js跳转方式 this.props.history.push("/")
    //         console.log(this.props)
    //         return <h2>{this.props.match.params.location}</h2>
    //     }
    // }
const store = createStore(reducer, compose(applyMiddleware(thunk), reduxDevtools()))
// console.log(store.getState())
// let a = store.getState()
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <AuthRoute></AuthRoute>
            <Route path = "/login" component = {Login}></Route>
            <Route path = "/register" component = {Register}></Route>
        </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
// registerServiceWorker();
