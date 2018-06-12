const Koa = require('koa')
const app = new Koa()
app.use(async (ctx, next) => {
  console.log('');
  ctx.body = 'hello Koa'
  
})
app.listen(8077, '192.168.0.104')