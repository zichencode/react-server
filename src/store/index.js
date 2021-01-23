
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import axiosClient from '../utils/request.client'
import axiosServer from '../utils/request.server'
import { reducer as homeReducer } from '../pages/Home/store';
const reducer = combineReducers({
	home: homeReducer
})

const middlewareClient = [thunk.withExtraArgument(axiosClient)];
const middlewareServer = [thunk.withExtraArgument(axiosServer)];
const composeEnhancers =
	typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		}) : compose;

const enhancerClient = composeEnhancers(
	applyMiddleware(...middlewareClient),
	// other store enhancers if any
);
const enhancer = composeEnhancers(
	applyMiddleware(...middlewareServer),
	// other store enhancers if any
);
export const getStore = () => {
	return createStore(reducer, enhancer)
}

export const getClientStore = () => {
	// 脱水
	const defaultProps = window.context.state;
	return createStore(reducer,defaultProps, enhancerClient)
}
