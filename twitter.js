

// Replace the accessKey string value with your valid access key.
//let accessKey = '0829c71f6ce446;

// Replace or verify the region.

// You must use the same region in your REST API call as you used to obtain your access keys.
// For example, if you obtained your access keys from the westus region, replace 
// "westcentralus" in the URI below with "westus".

// NOTE: Free trial access keys are generated in the westcentralus region, so if you are using
// a free trial access key, you should not need to change this region.
//let uri = 'westcentralus.api.cognitive.microsoft.com';
//let path = '/text/analytics/v2.0/keyPhrases';

//let response_handler = function (response) {
    //let body = '';
    //response.on ('data', function (d) {
        //body += d;
    //});
    //response.on ('end', function () {
        //let body_ = JSON.parse (body);
        //let body__ = JSON.stringify (body_, null, '  ');
        //console.log (body__);
   //});
    //response.on ('error', function (e) {
        //console.log ('Error: ' + e.message);
    //});
//};

let get_key_phrases = function (documents) {
    let body = JSON.stringify (documents);

    let request_params = {
        method : 'POST',
        hostname : uri,
        path : path,
        headers : {
            'Ocp-Apim-Subscription-Key' : accessKey,
        }
    };

    let req = https.request (request_params, response_handler);
    req.write (body);
    req.end ();
}

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'qlaTCWFv7oPqQc2HB1dNhxP1B',
  consumer_secret: 'RMYmSsy5ncRv2CH2Ucs5m5Klmn6ioBYyF4yuenFKwsbIpeSUVb',
  access_token_key: '1070292947873206273-61YFtgqKeFfcou6bQfyVs17oqL847O',
  access_token_secret: 'j6NVBTcJYp5sKhxQJeWBVsI1KBC3Ds6fuiGocjebXsCbg'
});

function tweetfinder(params,callback){
	var tweet_work = {q:'earthquake',count:400,tweet_mode:'extended'}
	var list_create = new Array();
	var k = 0;
	client.get('search/tweets',tweet_work,tweet__work)
	function tweet__work(err,data,response){
		if(err){
			console.log('It failed')
		}
		else{
			for(var i=0;i<400;i++)
			{
				if(data['statuses'][i])
				{
					var dict_create = {}
				 	if(data['statuses'][i].lang === 'en')
					{
						dict_create['id'] = k+1;
						dict_create['language'] = 'en';
						dict_create['text'] = data['statuses'][i]['full_text'];
						list_create[k] = dict_create;
						k++;
						//console.log(i + ' ' + data['statuses'][i]['full_text']);
						//console.log(i + ' ' + data['statuses'][i]['created_at']);
					}

				}
				else
				{
					console.log('thats it!');
				 	break;
				}
				
				
			}
			let documents = {'documents':list_create};
			console.log(documents)
			get_key_phrases (documents);
		}

	}
}
//RSOE_EDIS
function tweet_namefinder(params,callback){
	var tweet_work = {screen_name:'RSOE_EDIS',count:400}
	var list_create = new Array();
	var k = 0;
	client.get('statuses/user_timeline',tweet_work,tweet__work)
	function tweet__work(err,data,response){
		if(err){
			console.log('It failed')
		}
		else{
			for(var i=0;i<400;i++)
			{
				if(data[i])
				{
					var dict_create = {}
				 	if(data[i].lang === 'en')
					{
						dict_create['id'] = k+1;
						dict_create['language'] = 'en';
						dict_create['text'] = data[i]['text'];
						list_create[k] = dict_create;
						k++;
						//console.log(i + ' ' + data[i]['text']);
						//console.log(i + ' ' + data[i]['created_at']);
					}

				}
				else
				{
					console.log('thats it!');
				 	break;
				}
				
				
			}
			let documents = {'documents':list_create};
			get_key_phrases (documents);
		}

	}
}

tweet_namefinder()

function tweetStreamer(){
	var stream = client.stream('statuses/filter', { track: '#',language: 'en'})
	stream.on('tweet', function (tweet) {
  		console.log(tweet)
	})
}

function tweetSearcher(){
	var tweet_work = {q:'flood',count:3,tweet_mode:'extended'}
	client.get('search/tweets',tweet_work,tweet__work)
	function tweet__work(err,data,response){
		if(err){
			console.log('It failed')
		}
		else{
			for(var i=0;i<3;i++)
			{
				if(data['statuses'][i])
				{
				 	if(data['statuses'][i].lang === 'en')
					{
						console.log(i + ' ' + data['statuses'][i]['full_text']);
						console.log(i + ' ' + data['statuses'][i]['created_at']);
					}

				}
				else
				{
					console.log('thats it!');
				 	break;
				}
				
				
			}
			
		}
	}
}

/*var spawn  = require('child_process').spawn,
py = spawn('python',['side.py']),
data = [1,2,3,4,5,6],
datastring = '';

py.stdout.on('data',function(data){
	datastring += data.toString();
});

py.stdout.on('end',function(){
	console.log('Sum of numbers = '+ datastring);
});

py.stdin.write(JSON.stringify(data));
py.stdin.end();
*/