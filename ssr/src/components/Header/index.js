import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './index.css';
import withStyle from '../../withStyle'
class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className={styles.header}>
                    <NavLink exact={true} activeClassName={styles.active} className={styles.item} to="/">home</NavLink>
                    {
                        this.props.isLogin ? (
                            <Fragment>
                                <NavLink exact={true} activeClassName={styles.active} className={styles.item} to="login">退出</NavLink>
                                <NavLink exact={true} activeClassName={styles.active} className={styles.item} to="trans">翻译展示</NavLink>
                            </Fragment>
                        ) : <NavLink exact={true} activeClassName={styles.active} className={styles.item} to="login">登录</NavLink>
                    }
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLogin: state.header.isLogin
    }
}
const exportHeader = connect(mapStateToProps, null)(withStyle(Header, styles));
export default exportHeader;