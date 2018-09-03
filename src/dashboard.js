import React from 'react'
import {BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom' 
import App from './App';

function Erying(){
    return <h2>erying</h2>
    }
    function Qibing(){
    return <h2>骑兵连</h2>
    }
class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <ul>
                    {/* Link 标签 点击跳转到指定路由 */}
                    <li><Link to ="/dashboard/" >一营</Link></li> 
                    <li><Link to ="/dashboard/er">二营</Link></li>
                    <li><Link to ="/dashboard/qibing">骑兵连</Link></li>
                </ul>
                <Route path="/dashboard/" exact component={App}></Route>
                <Route path="/dashboard/er"  component={Erying}></Route>
                <Route path="/dashboard/qibing"  component={Qibing}></Route>   
            </div>
           
        )
    }
}
export default Dashboard