const Twit = require('twit')

const T = new Twit ({
   consumer_key:'q0ozRxlZgSg3FOluoBclI8p2i',
   consumer_secret:'jXy8AiULqQlnouFtsrpSOup7zzpz66eBuu9VJoOb6zV3ihxZA2',
   access_token:'131027191-5t9hlBzHM0YI9l74wiOuxPZlNYzrhwzbQTvCGwl0',
   access_token_secret:'7XMqIN9RXJSmnTQSBtc6XtQaWx44ItX0HRgcMYPGedQ3D'
})


const params = {
   q: 'messi',
   count: 10
}

T.get('search/tweets', params, gotData);
function gotData(err, data, response) {
   let tweets = data.statuses;
   for (let i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text)
   }
}

T.get(4444, function () {
   console.log('Listening on port 4444');
 });


 




