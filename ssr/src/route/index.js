import React from 'react';
import Home from '../pages/Home'
import Login from '../pages/Login'
import Trans from '../pages/Trans'
import NotFound404 from '../pages/NotFound/404'

import App from '../app'
export default [
    {
        path: '/',
        component: App,
        loadData: App.loadData,
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
            },
            {
                path: '/trans',
                component: Trans,
                exact: true,
                key: 'trans'
            },
            {
                component: NotFound404
            }
        ]
    }
];