import React from 'react';
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

export default [
    {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home'
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login'
    }
];