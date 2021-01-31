import { StaticRouter, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import {Helmet} from 'react-helmet'; 


const render = (req, store, routes, context) => {
    let str = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <Fragment>{renderRoutes(routes)}</Fragment>
            </StaticRouter>
        </Provider>
    ))
    const cssStr = context.css ? context.css.join('') : '';
    console.log(cssStr);
    const helmet = Helmet.renderStatic();
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <style>${cssStr}</style>
        </head>
        <body>
            <div id="root">${str}</div>
            <script>
            // 注水
                window.context = {
                    state: ${JSON.stringify(store.getState())}
                }
            </script>
            <script src="/index.js"></script>

        </body>
        </html>
        `;


}


export default render