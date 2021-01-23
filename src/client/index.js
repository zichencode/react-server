import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../route/index'
import {getClientStore} from '../store'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

const App = () => (
    <Provider store={getClientStore()}>
        <BrowserRouter>
            <Fragment>
                {renderRoutes(routes)}
            </Fragment>
        </BrowserRouter>
    </Provider>
)
ReactDOM.hydrate(<App />, document.getElementById('root'))