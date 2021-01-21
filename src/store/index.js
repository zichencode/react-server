
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { reducer as homeReducer } from '../pages/Home/store';
const reducer = combineReducers({
	home: homeReducer
})

const middleware = [thunk];
const composeEnhancers =
	typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		}) : compose;

const enhancer = composeEnhancers(
	applyMiddleware(...middleware),
	// other store enhancers if any
);
const getStore = () => {
	return createStore(reducer, enhancer)
}

export default getStore