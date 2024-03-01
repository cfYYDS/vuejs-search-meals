module.exports = {

    // 选项

    //  基本路径

    publicPath: "./",

    //  构建时的输出目录

    outputDir: "dist",

     //  放置静态资源的目录

    assetsDir: "static",

    //  html 的输出路径

    indexPath: "index.html",

    //文件名哈希

    filenameHashing: true,

    

    lintOnSave: true,

    //  是否使用带有浏览器内编译器的完整构建版本

    runtimeCompiler: false,

    //  babel-loader 默认会跳过 node_modules 依赖。

  
    // 配置 webpack-dev-server 行为。

    devServer: {

        open: process.platform === 'darwin',

        host: '0.0.0.0',

        port: 8080,

        https: false,

        hotOnly: false,

    }

}
