const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api","/api/stripe", "/api/currentUser", "/auth/google" ],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};