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
	console.log(req.url, 'url ======');
	// 对/favicon.ico网站图标请求忽略
	if (req.path === '/favicon.ico') return;
	let store = getStore(req);

	// 根据路由路径找打匹配的方法，往store加数据
	let matchedRoute = matchRoutes(routes, req.path);

	// 让匹配的组件执行一遍loadData
	let list = []
	matchedRoute.forEach(item => {
		if (item.route.loadData) {
			let i = new Promise((resolve) => {
				item.route.loadData(store).then(r => resolve(r)).catch(r => resolve(r))
			})
			list.push(i)
		}
	})
	Promise.all(list).then(() => {
		let context = {css: []};
		let html = render(req, store, routes, context);
		if (context.NotFound) {
			res.status(404);
		}
		res.send(html)

	})


})

app.listen(3000, () => {
	console.log('success');
})