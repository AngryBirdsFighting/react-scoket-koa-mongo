import React from 'react'
import {BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom'
import App from './App';
import {connect} from 'react-redux'
import {login, logout} from './auth.redux.js'

function Erying() {
    return <h2>erying</h2>
}
function Qibing() {
    return <h2>骑兵连</h2>
}
@connect(
    state => ({auth:state.auth}),
    {login, logout}
)

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const match = this.props.match.url
        const redirect = <Redirect to="/login" ></Redirect>
        const app = (<div>
        <ul>
            {/* Link 标签 点击跳转到指定路由 */}
            <li>
                <Link to={`${match}/`}>一营</Link>
            </li>
            <li>
                <Link to={`${match}/er`}>二营</Link>
            </li>
            <li>
                <Link to={`${match}/qibing`}>骑兵连</Link>
            </li>
        </ul>
        <Route path={`${match}/`} exact component={App}></Route>
        <Route path={`${match}/er`} component={Erying}></Route>
        <Route path={`${match}/qibing`} component={Qibing}></Route>
        <button onClick = {() => this.props.logout()}> 注销</button>
    </div>)

        return this.props.auth.isAuth ? app : redirect
    }
}
export default Dashboard