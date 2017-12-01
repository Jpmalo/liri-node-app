
var keys = require('./keys.js');
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var spotify = new Spotify({
    id: '57866f4ae9344793bdad7e8bca2c2ada',
    secret: '88178cba833141029058fed7e57aa8d5'
})
var request = require("request");
var fs = require('fs');
var cmd = process.argv[2];
var userInput = process.argv[3];
var client = new Twitter(keys.twitterKeys);

function liriOptions() {
    if (cmd === "my-tweets") {
        var client = new Twitter(keys.twitterKeys);
        var username = {
            screen_name: 'Jel_jpm',
            count: 20
        } 
    
        client.get('statuses/user_timeline', username, function(error, tweets, response){
            if (!error) {
                console.log("Latest Tweets:");
                console.log("--------------");
                for(var i =0; i < tweets.length; i++) {
                    var tweetTime = tweets[i].created_at;
                    console.log(tweets[i].text + "   " + "Tweeted At: " + tweetTime);               
                }
            };
        });
    } else if (cmd === "spotify-this-song") {
        spotify.search({
            type: 'track',
            query: 'All the Small Things '
        }, function(err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
            }
            console.log(data.artist);
            console.log();
            console.log();
            console.log();
        })


    }
}

liriOptions();