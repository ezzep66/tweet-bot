let semana = require("./semana");
let frases = require("./frases")
let Twitter = require('twitter-lite');
let config = require('./config2')

const T = new Twitter(config); 

let now = new Date().getUTCDay();

//setInterval(armarTweet,1000 * 60 * 60 * 24, now);
setInterval(armarTweet,1500, now);

function armarTweet(now) {
  let tw = "#Buen" + semana[now];
  enviarTweet(tw)
} 

function enviarTweet(tw){  
  let tweet = {
    status: '"' + tw + " " + generarFrase() + '"'
  };

console.log("test: " ,tweet.status)
  //T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response){
    if(err){
      console.error
    } else {
      console.log(data)
    }
  }
}

function generarFrase(){
  let frasesArrayLength = frases.length; 
  let num = Math.floor(Math.random()*frasesArrayLength)
   
  return frases[num]
}

