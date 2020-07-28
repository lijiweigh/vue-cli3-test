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
            .entryPoints
                .clear();
        config.entry("main/app").add("./src/main.js");
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
                        'vue-router',
                        'core-js'
                    ]
                }
            }]);
        config
            .optimization
                .splitChunks({
                    cacheGroups: {
                        venders: {
                            test: /[\\/]node_modules[\\/]/,
                            priority: -10,
                            chunks: "initial"
                        },
                        common: {
                            minChunks: 1,
                            priority: -20,
                            reuseExistingChunk: true
                        }
                    }
                })
        return config
	}
};
