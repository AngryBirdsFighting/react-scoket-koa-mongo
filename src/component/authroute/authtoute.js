import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

@withRouter
class AuthRoute extends React.Component{
    componentDidMount(){
        const writeUrl = ["/login", '/register']
        if(writeUrl.indexOf(this.props.location.pathname) > -1){
            return null 
        }
        // 获取权限
        console.log(this.props.history)
    }
    render() {
        
        return (
            <div className = 'logo-container'>sadasdasdas</div>
        )
    }
}

export default AuthRoute