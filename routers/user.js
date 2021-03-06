const Router = require('koa-router');
let userRouter = new Router();
let userController = require('../controllers/user');

userRouter.get('/user/register',userController.showRegister)
.post('/user/check-username',userController.checkUsername)
.post('/user/do-register',userController.doRegister)
.post('/user/do-login',userController.doLogin)
.get('/user/get-pic',userController.getPic)
.get('/user/logout',userController.logout)
.get('/user/login',async ctx => {
  ctx.render('login');
})
module.exports = userRouter;