require('dotenv').config()

module.exports = {
  consumer_key: 'process.env.API_KEY',
  consumer_secret: 'process.env.API_SECRET',
  access_token: 'process.env.ACCESS_TOKEN',
  access_token_secret: 'process.env.TOKEN_SECRET',
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
}