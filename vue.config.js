module.exports = {
  publicPath: process.env.PUBLIC_PATH,

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    disableHostCheck: true, // 解决vue项目中的“Invalid Host header”问题
    port: 8080, // development server port 默认8000，这个得看你的项目申请的端口号是多少而定
    // 如果需要开启代理，请移除mockjs /src/main.jsL11
    proxy: {
      '/api': {
        // 捕获API的标志，如果API中有这个字符串，那么就开始匹配代理
        target: 'http://localhost:8090', // 地址可以是域名，也可以是IP地址。比如API请求/api/getList, 会被代理到请求http://www.baidu.com/api/getList 。
        ws: false,
        changeOrigin: true // 如果target是域名需要额外添加一个参数changeOrigin: true，否则会代理失败。
      }
    }
  },

  lintOnSave: false,
  transpileDependencies: [],
  productionSourceMap: false
}
