const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
import routes from '../route/index';
import { getStore } from '../store'
import { matchRoutes } from 'react-router-config'

app.use(express.static('public'));
// 代理接口中间层
app.use('/api', proxy('localhost:3006', {
	proxyReqPathResolver: function (req) {
		return '/api' + req.url;
	}
}));

import render from './template'

app.get('*', function (req, res) {
	let store = getStore();

	// 根据路由路径找打匹配的方法，往store加数据
	let matchedRoute = matchRoutes(routes, req.path);

	// 让匹配的组件执行一遍loadData
	let list = []
	matchedRoute.forEach(item => {
		if (item.route.loadData) {
			list.push(item.route.loadData(store))
		}
	})

	Promise.all(list).then(() => {
		res.send(render(req, store, routes))
	})


})

app.listen(3000, () => {
	console.log('success');
})