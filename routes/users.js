const router = require('koa-router')()

router.prefix('/users')

router.post('/signup', function (ctx, next) {
  ctx.body = ctx.request.body
})

router.get('/login', function (ctx, next) {
  const { username, password } = ctx.request.body
  ctx.body = {
    code: 0,
    msg: '登录成功',
  }
})

module.exports = router
