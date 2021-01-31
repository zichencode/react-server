
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import axiosClient from '../utils/request.client'
import axiosServer from '../utils/request.server'
import { reducer as homeReducer } from '../pages/Home/store';
import { reducer as headerReducer } from '../components/Header/store';
import { reducer as transReducer } from '../pages/Trans/store';
const reducer = combineReducers({
	home: homeReducer,
	header: headerReducer,
	trans:transReducer
})

const middlewareClient = [thunk.withExtraArgument(axiosClient)];
const middlewareServer = req => [thunk.withExtraArgument(axiosServer(req))];
const composeEnhancers =
	typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		}) : compose;

const enhancerClient = composeEnhancers(
	applyMiddleware(...middlewareClient),
	// other store enhancers if any
);
const enhancer = req => composeEnhancers(
	applyMiddleware(...middlewareServer(req)),
	// other store enhancers if any
);
export const getStore = (req) => {
	return createStore(reducer, enhancer(req))
}

export const getClientStore = () => {
	// 脱水
	const defaultProps = window.context.state;
	return createStore(reducer,defaultProps, enhancerClient)
}
