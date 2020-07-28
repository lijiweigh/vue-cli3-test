'use strict';
const path = require('path');
const fs = require('fs-extra');
const autodllWebpackPlugin = require("autodll-webpack-plugin")
function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	publicPath: "./",
	chainWebpack(config) {
		config
			.plugin('html')
			.tap(args => {
				return args
            });
        config
            .plugin("dll")
            .use(autodllWebpackPlugin, [{
                inject: true,
                debug: true,
                filename: '[name]_[contenthash].js',
                path: './dll',
                entry: {
                    vendor: [
                        'vue',
                        'vue-router'
                    ]
                }
            }]);
        return config
	}
};
