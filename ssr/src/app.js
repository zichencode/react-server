import React, { Fragment } from 'react';
import Header from './components/Header'
import { renderRoutes } from 'react-router-config';
import { getLoginStatus } from './components/Header/store/action'
const App = function (props) {
  return (
    <div>
      <Header staticContext={props.staticContext} />
      <Fragment>
        <h3>这是内容：</h3>
        {renderRoutes(props.route.routes)}
      </Fragment>
    </div>
  )
}

App.loadData = (store) => {
  return store.dispatch(getLoginStatus())
}

export default App