# react-server SSR

ssr 文件是服务端渲染
server 是一个koa的服务器

```html
cd ssr
运行 npm i
npm run dev
```


```html
cd server
运行 npm i
node index.js
```
在浏览器打开 `localhost:3000` 查看

功能：
1. react 同构
2. 同构中路由及多级路由
3. 同构中的redux 数据流
4. 异步数据服务器端渲染方式 脱水-注水过程
5. node做中间层
6. css服务器端渲染方式
7. seo - react-helmet 应用
8. 服务端渲染和预渲染的优劣