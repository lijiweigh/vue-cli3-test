'use strict';
const path = require('path');
const fs = require('fs-extra');
const webpack = require("webpack")
// const autodllWebpackPlugin = require("autodll-webpack-plugin")
const optimizeCss = require("optimize-css-assets-webpack-plugin")
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")
const hardSourceWebpackPlugin = require("hard-source-webpack-plugin")
// 分析打包时间
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
    publicPath: "./",
    lintOnSave: false,
    // pages: {
    //     "index/index": {
    //         entry: "./src/main.js",
    //         template: "./public/index.html",
    //         filename: "index/index.html"
    //     },
    //     "copy/copy": {
    //         entry: "./src/main.js",
    //         template: "./public/index.html",
    //         filename: "copy/copy.html"
    //     }
    // },
    // css: {
    //     extract: {
    //         publicPath: "//a.b.com/"
    //     }
    // },
    configureWebpack: smp.wrap({
        // plugins: [new BundleAnalyzerPlugin()]
    }),
	chainWebpack(config) {
        // config.output
        //     .filename(pathdata => {
        //         let name = pathdata.chunk.name
        //         console.log(name)
        //         name = name.split("/")
        //         return `${name[0]}/${name[1]}.[contenthash].js`
        //     })
        // config  
        //     .entryPoints
        //         .clear();
        // config.entry("main/app").add("./src/main.js");
        // config
        //     .externals({
        //         "vue": "Vue",
        //         "vue-router": "VueRouter"
        //     })
        // config.entry("app").prepend("@babel/polyfill")
        // let oneofs = ["vue-modules", "vue", "normal-modules", "normal"]
        // oneofs.forEach(key => {
        //     config.module
        //         .rule("scss")
        //             .oneOf(key)
        //             .use("extract-css-loader")
        //             .tap(options => {
        //                 console.log(options)
        //                 options.publicPath = "https://css.com/"
        //                 console.log(options)
        //                 return options
        //             });
        // })
        // config
        //     .module
        //         .rule("images")
        //             .use("url-loader")
        //                 .tap(options => {
        //                     return {
        //                         ...options,
        //                         publicPath: "https://assets.com/"
        //                     }
        //                 })
        
        // config
        //     .plugin("extract-css")
        //         .tap(args => {
        //             console.log(args)
        //             args[0].publicPath = "https://abc.com"
        //             return args
        //         })

		// config
		// 	.plugin('html')
		// 	.tap(args => {
		// 		return args
        //     });
        config
            .plugin("hard-resource")
            .use(hardSourceWebpackPlugin, [{}])
        config
            .plugin("hoisting")
            .use(new webpack.optimize.ModuleConcatenationPlugin, [{}])
        // config
        //     .plugin("dll")
        //     .use(autodllWebpackPlugin, [{
        //         inject: true,
        //         debug: true,
        //         filename: '[name]_[contenthash].js',
        //         path: './dll',
        //         entry: {
        //             vendor: [
        //                 'vue',
        //                 'vue-router',
        //                 'core-js'
        //             ]
        //         }
        //     }]);
        // config
        //     .plugin("optimize-css")
        //         .use(optimizeCss, [{}]);
        // config
        //     .optimization
        //         .minimizer("optimize-css")
        //             .use(optimizeCss, [{}])
        // config
        //     .optimization
        //         .splitChunks({
        //             cacheGroups: {
        //                 venders: {
        //                     test: /[\\/]node_modules[\\/]/,
        //                     priority: -10,
        //                     chunks: "initial"
        //                 },
        //                 common: {
        //                     minChunks: 1,
        //                     priority: -20,
        //                     reuseExistingChunk: true
        //                 }
        //             }
        //         })
        config
            .optimization
                .set("moduleIds", "hashed")
        return config
	}
};
