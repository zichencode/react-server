import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../route/index'
import getStore from '../store'
import { Provider } from 'react-redux'

const App = () => (
    <Provider store={getStore()}>
        <BrowserRouter>
            <Fragment>
                {routes.map(route => (<Route {...route} />))}
            </Fragment>
        </BrowserRouter>
    </Provider>
)
ReactDOM.hydrate(<App />, document.getElementById('root'))