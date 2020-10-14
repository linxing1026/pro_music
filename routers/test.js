const Router = require('koa-router') 
let testRouter = new Router();
let testController = require('./../controllers/test')

testRouter
	.get('/test/getList',testController.getList)
	.get('/test/list',testController.getList)




module.exports = testRouter;