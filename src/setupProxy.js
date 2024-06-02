//setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/europe', 
    createProxyMiddleware({
      target: 'https://europe.api.riotgames.com',
      changeOrigin: true,
      pathRewrite: {
        '^/europe': '',
      },
    })
  );

  app.use(
    '/euw1',
    createProxyMiddleware({
      target: 'https://euw1.api.riotgames.com',
      changeOrigin: true,
      pathRewrite: {
        '^/euw1': '',
      },
      logLevel: 'debug', 
    })
  );

  app.use(
    '/cdn', 
    createProxyMiddleware({
      target: 'https://ddragon.leagueoflegends.com',
      changeOrigin: true,
      pathRewrite: {
        '^/cdn': '',
      },
    })
  );
};
