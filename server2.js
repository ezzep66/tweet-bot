let semana = require("./semana");
let frases = require("./frases")
let Twitter = require('twitter-lite');
let config = require('./config2')

const T = new Twitter(config); 

let now = new Date().getUTCDay();

setInterval(armarTweet,5000, now);
//setInterval(armarTweet,1000 * 60 * 60 * 12, now);
//setInterval(armarTweet,1500, now);

function armarTweet(now) {
  let tw = "#Buen" + semana[now];
  enviarTweet(tw)
} 

function enviarTweet(tw){  
  let tweet = {
    status: tw + " " + '"' + generarFrase() + '"' + " - CFK"
  };

console.log("test: " ,tweet.status)
  // T.post('statuses/update', tweet)
  // .then(data => console.log(data))
  // .catch(console.error)

  
}

function generarFrase(){
  let frasesArrayLength = frases.length; 
  let num = Math.floor(Math.random()*frasesArrayLength)
   
  return frases[num]
}

