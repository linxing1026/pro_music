//引入路由中间件  开始
const Router = require('koa-router');
const musicController = require('../controllers/music.js');
let musicRouter = new Router();

musicRouter
.post('/music/add-music', musicController.addMusic)
.put('/music/update-music',musicController.updateMusic)
.delete('/music/del-music',musicController.delMusic)
.get('/music/index', musicController.showIndex)
.get('/music/edit',musicController.showEdit)
.get('/music/add',async ctx => {
  ctx.render('add');
})
module.exports = musicRouter;