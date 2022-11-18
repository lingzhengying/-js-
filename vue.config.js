module.exports = {
    lintOnSave: false,
    devServer: {
        open:true,
        proxy:{
            '/api':{
                target:'http://1.116.64.64:5004/api2/',
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    },
    chainWebpack(chainableWebpack) {
        // 用chainWebpack 做一些配置，loader的添加，修改，以及插件的配置
        chainableWebpack.resovle = { extensions:['.js','.ts','.json','d.ts']}
    }
}