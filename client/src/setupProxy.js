const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://qxtrand.onrender.com/api', // <-- Updated to new backend URL
      changeOrigin: true,
    })
  );
};
