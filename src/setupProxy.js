const proxy = require('http-proxy-middleware');
module.exports = function(app) {

  app.use(
    '/api',
    proxy({
      target: 'http://localhost',
      changeOrigin: true,
    })
  );

  app.use(
    '/dapi',
    proxy({
      target: 'http://192.168.2.119:8092',//gateway socket
      changeOrigin: true,
      pathRewrite: {
        '^/dapi' : '/api'           
    },
    })
  );
  
};