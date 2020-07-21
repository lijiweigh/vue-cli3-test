'use strict';
const path = require('path');
const fs = require('fs-extra');
function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	
	chainWebpack(config) {
		config
			.plugin('html')
			.tap(args => {
                console.log("------------------")
                console.log(args)
				return args
			})
	}
};
