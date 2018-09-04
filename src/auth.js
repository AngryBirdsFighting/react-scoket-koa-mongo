import React from 'react'
import {connect} from 'react-redux'
import {login} from './auth.redux'
import {Redirect} from 'react-router-dom'

@connect(state => state.auth, {login})

class Auth extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.isAuth
                    ? <Redirect to="/dashboard"></Redirect>
                    : null}
                <h1>您没有权限,请登录！</h1>
                <button onClick = {() =>this.props.login()}> 登录</button>
            </div>
        )
    }
}
export default Auth