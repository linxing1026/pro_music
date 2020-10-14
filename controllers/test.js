const testModel = require('../models/test');
const path = require('path');

module.exports = {
	async getList(ctx,next) {
		let result = await testModel.showList();
		if(result.length>0){
			ctx.body = {
				resultCode:"00000000",
				resultDesc:"成功",
				data:{
					data:result
				}
			}
		}else{
			ctx.body = {
				resultCode:"00000000",
				resultDesc:"成功",
				data:null
			}
		}
	}
}
