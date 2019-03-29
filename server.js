// var http = require('http')

// var server = http.createServer((req, res) => {
//   res.writeHead('200')
//   res.end('hello danya')
// })

// server.listen(3001, ()=>{
//   console.log('服务已经启动')
// })

var Woa = require('./application')

var woa = new Woa()

function delay () {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}
woa.use( async (ctx, next) => {
  ctx.body = '1'
  await next()
  ctx.body += '2'
})

woa.use( async (ctx, next) => {
  ctx.body += '3'
  await delay()
  await next()
  ctx.body += '4'
})

woa.use( async (ctx, next) => {
  ctx.body += '5'
})

woa.listen(3001, () => {
  console.log('服务运行在3001端口')
})