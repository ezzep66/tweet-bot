require('dotenv').config()

module.exports = {
  subdomain: "api", // "api" is the default (change for other subdomains)
  version: "1.1", // version "1.1" is the default (change for other subdomains)
  consumer_key: process.env.API_KEY, // from Twitter.
  consumer_secret: process.env.API_SECRET, // from Twitter.
  access_token_key: process.env.ACCESS_TOKEN, // from your User (oauth_token)
  access_token_secret: process.env.TOKEN_SECRET // from your User (oauth_token_secret)
}