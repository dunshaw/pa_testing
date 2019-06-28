module.exports = {
  devServer: {
    // 设置代理
    proxy: {
      "/apis": {
        target: 'http://11.240.99.70:9002', // 访问数据的计算机域名
        ws: true, // 是否启用websockets
        changOrigin: false, //开启代理
        secure: false,
        pathRewrite:{
            '^/apis':'/'
        } 
      }
    },
    host:'11.240.99.70',
    // host:'localhost', 
    port: 3000,
  },
};
