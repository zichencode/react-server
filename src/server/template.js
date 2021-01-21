import { StaticRouter, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server'
import { matchRoutes } from 'react-router-config'
import getStore from '../store'
import { Provider } from 'react-redux'
import routes from '../route/index';


const render = (req, res) => {
    let store = getStore();

    // 根据路由路径找打匹配的方法，往store加数据
    let matchedRoute = matchRoutes(routes, req.path);

    // 让匹配的组件执行一遍loadData
    let list = []
    matchedRoute.forEach(item => {
        if(item.route.loadData) {
            list.push(item.route.loadData(store))
        }
    })
    Promise.all(list).then(() => {
        let str = renderToString((
            <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Fragment>{routes.map(route => (<Route {...route}/>))}</Fragment>
            </StaticRouter>
            </Provider>
        ))
        res.end( `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <div id="root">${str}</div>
            <script src="/index.js"></script>
        </body>
        </html>
        `)
    })

    
} 
 
 
export default render