const path = require("path");
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8089,
    hot: true,
    //context: ['/oauth', '/api-client', '/api-system', '/api-product'],
    proxy: {
        // 프록시 요청을 보낼 api의 시작 부분 (/ : 전체 허용)
        '/': {
            // 프록시 요청을 보낼 서버의 주소
            target: process.env.VUE_APP_EVMS_API,
        },
    },
    overlay: false, //eslint 설정 끄기
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
  }
}