console.log("The bot is starting");

let Twit = require('twit');

let config = require('./config')

let T = new Twit(config)

//tweetIt();

function tweetIt() {
  let tweet = {
    status: 'hola'
  }
  
  function tweeted(err, data, response) {
    if(err) {
      console.log(err)
    } else {
      console.log(data)
    }
  }
  
  T.post('statuses/update', tweet, tweeted)

}



// let params = {
//   q: 'paulina',
//   count: 2
// };

// function gotData(err, data, response){
//   let tweets = data.statuses;
//   tweets.forEach(tweet => {
//     console.log(tweet.text)
//   })
// }

// T.get('search/tweets', params, gotData)