/**
 * 需求1. 以public开头，使用其他部分(正则)
 * 需求2. 精确/ 或者 /abc 替换成/xxx
 * 	  2.2 模糊  /xx 开头 替换成 /aaa
 */
module.exports = (rules) => {
	// 一个ctx.url 对应多条规则的匹配
    return async (ctx,next) => {
	    for(let i = 0; i< rules.length; i++) {
	      let rule = rules[i];
	      // 是否需要使用正则
	      if(rule.regex) {
	        let result = rule.regex.exec(ctx.url);
	        // result不匹配null或者匹配
	        if(result) {
	            // 判断是直接赋值。还是取分组的内容
	            if(!rule.dist) {
//	               console.log(ctx.url,'分组正则字符串，最终改为:' + result[1])
	              // 还是取分组的内容
	              ctx.url = result[1];
	            } else {
//	               console.log(ctx.url,'精确正则字符串，最终改为:' + rule.dist)
	              ctx.url = rule.dist;
	            }
	        }
	      }
	      // 字符串精确匹配的
	      if(rule.src === ctx.url) {
//	        console.log(ctx.url,'精确匹配字符串，最终改为:' + rule.dist)
	        ctx.url = rule.dist;
	      }
	    }
		
		//放行，交给static处理
		await next();
	}
}
