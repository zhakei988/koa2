const router = require('koa-router')()
const lesson = require('./LessonController');   // 引入用户模块逻辑层
//router.prefix('/api/classauth')

router.get('/api/classauth/:id',lesson.classauth)
module.exports = router
