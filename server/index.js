const Koa = require('koa');
var cors = require('koa2-cors');
const Koa_Session = require('koa-session');

// app.use(cors()) 后端解决跨域问题

// 配置
const session_signed_key = ["some secret"];  // 这个是配合signed属性的签名key
const session_config = {
    key: 'koa:sess', /**  cookie的key。 (默认是 koa:sess) */
    maxAge: 1000000,   /**  session 过期时间，以毫秒ms为单位计算 。*/
    autoCommit: true, /** 自动提交到响应头。(默认是 true) */
    overwrite: true, /** 是否允许重写 。(默认是 true) */
    httpOnly: true, /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。  (默认 true) */
    signed: true, /** 是否签名。(默认是 true) */
    rolling: true, /** 是否每次响应时刷新Session的有效期。(默认是 false) */
    renew: false, /** 是否在Session快过期时刷新Session的有效期。(默认是 false) */
};

// 实例化
const app = new Koa();
const session = Koa_Session(session_config, app)
app.keys = session_signed_key;

// 使用中间件，注意有先后顺序
app.use(session);

// response
app.use(ctx => {

    if (ctx.req.url === '/api/list') {
        ctx.body = {
            data: [
                {
                    name: '姓故',
                    id: 1,
                    content: 'this is my code,which is react server'
                }
            ]
        }
    }
    if (ctx.req.url === '/api/isLogin') {
        console.log(ctx.session.isLogin);
        ctx.body = {
            data: ctx.session.isLogin
        }
    }
    if (ctx.req.url === '/api/login') {
        ctx.session.isLogin = true;
        ctx.body = {
            data: true
        }
    }
    if (ctx.req.url === '/api/logout') {
        ctx.session.isLogin = false;
        ctx.body = {
            data: false
        }
    }

    if (ctx.req.url === '/api/trans') {
        if (ctx.session.isLogin) {
            ctx.body = {
                data: '这是翻译后的文件'
            }
        } else {
            ctx.body = {
                data: '没登录'
            }
        }

    }

});

app.listen(3006, () => {
    console.log('success!');
});