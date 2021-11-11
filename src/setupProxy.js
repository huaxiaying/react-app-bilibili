const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use( '/api', createProxyMiddleware({
      target: 'http://train-e-test.devzz.yioks.org:31680',
      changeOrigin: true,
    })
  );
}


/* 
  设置本地代理：
  方式一： 在package.json文件中，直接添加代理目标
    "proxy": "http://train-e-test.devzz.yioks.org:31680"

  方式二： 直接访问express应用程序实例并连接自己的代理中间件；
    1、安装中间件
      npm install http-proxy-middleware --save
    2、创建src/setupProxy.js
      const { createProxyMiddleware } = require('http-proxy-middleware);
      module.exports =function(app) {
        // ...
      }
 */
 