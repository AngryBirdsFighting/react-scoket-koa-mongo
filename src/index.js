import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux' // 1. 创建store 2. 开启中间件 3. 连接函数
import thunk from 'redux-thunk' //异步处理 redux
import {Provider} from 'react-redux' // 简化redux 开发， Provider：在应用最外层，传入store即可， 只传一次
import {couter} from './index.redux'
import Auth from './auth'
import Dashboard from './dashboard'
import {BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom' 

const reduxDevtools = window.devToolsExtension? window.devToolsExtension: ()=> {}
// 路由传参
class Text extends React.Component{
constructor(props){
super(props)
}
render(){
// js跳转方式
// this.props.history.push("/") 
console.log(this.props)
return <h2>{this.props.match.params.location}</h2>
}
}
const store = createStore(couter, compose(applyMiddleware(thunk), reduxDevtools()))
ReactDOM.render(
(<Provider store= {store}> 
<BrowserRouter>
{/* 之渲染命中的第一个 */}
<Switch> 
{/* 根据路由渲染指定模板 */}
{/* exact 完全匹配 */}
<Route path="/login" exact component={Auth}></Route>
<Route path="/dashboard" component={Dashboard}></Route> 
{/* 路由重定向 */}
<Redirect to='/qibing'></Redirect>
</Switch> 
</BrowserRouter> 
</Provider>
),
document.getElementById('root') 
);
registerServiceWorker();



