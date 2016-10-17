const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  dbUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017'
}, environment);
