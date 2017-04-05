var proxy = require('http-proxy-middleware');

var apiProxy = proxy('/', {
    target: 'http://localhost:3030'
});

module.exports = {
  port: 8080,
  server: {
    middleware: {
      1: apiProxy
    }
  }
};
