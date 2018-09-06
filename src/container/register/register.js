import React, {Component} from 'react';
import Logo from "../../component/logo/logo";
import { List, InputItem, Radio, WhiteSpace, Button, WingBlank } from 'antd-mobile';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.state = {
            type:"genius"
        }
    }
    login(){
        this.props.history.push("/login")
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <h1>注册页</h1>
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <InputItem>密码</InputItem>
                        <InputItem>确认密码</InputItem>
                        <WhiteSpace/>
                        <RadioItem checked = {this.state.type == 'genius'}>牛人</RadioItem>
                        <RadioItem checked = {this.state.type == 'boss'}>BOSS</RadioItem>
                    </List>
                    <WhiteSpace/>
                    <Button onClick={this.login} type = 'primary'>登录</Button>
                    <WhiteSpace/>
                    <Button  type = 'primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register