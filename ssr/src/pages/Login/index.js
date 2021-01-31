import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login,logout } from '../../components/Header/store/action'
class Login extends Component {
    handleLogin() {
        this.props.login()
    }
    handleLogout() {
        this.props.logout()
    }
    render() {
        return (
            <div>
                <button onClick={ this.handleLogin.bind(this) } index="5">点击登录</button>
                <button onClick={ this.handleLogout.bind(this) } index="5">点击退出</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(Login);