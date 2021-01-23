import React from 'react';
import Home from '../pages/Home'
import Login from '../pages/Login'
import App from '../app'
export default [
    {
        path: '/',
        component: App,
        routes: [ // 是被matchRoutes 识别的字段名称
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
        ]
    }
];