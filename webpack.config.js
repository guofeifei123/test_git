const PATH = require('path');

module.exports = {
	entry: {
		"a":'./src/js/index.js'   // 入口文件
},
	output: {            // 出口文件          
		path: PATH.resolve(__dirname,'dist/js'),         // 出口文件位置
		filename: 'bundle.js'      // 出口文件名，name就是entry的键名
	}
}