
const proxy = require('http-proxy-middleware');

module.exports = function(app){

    app.use(proxy('/tic', 
    {target: 'https://ticket-m.mtime.cn',
     secure: false,
     changeOrigin: true,
     pathRewrite: {
      "^/tic": ""
     },
    }));
    app.use(proxy('/ser',
     {target: 'https://m.mtime.cn',
     secure: false,
     changeOrigin: true,
     pathRewrite: {
      "^/ser": ""
     },
    }));
    app.use(proxy('/cin',
     {target: 'https://ticket-api-m.mtime.cn',
     secure: false,
     changeOrigin: true,
     pathRewrite: {
      "^/cin": ""
     },
    }));
};