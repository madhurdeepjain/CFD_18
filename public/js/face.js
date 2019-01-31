'use strict';

const request = require('request');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '2fda92f422f54ddcaedbeea7ee9e8c36';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
// const uriBase = 'https://centralindia.api.cognitive.microsoft.com/face/v1.0/detect';

const imageUrl = '';

// Request parameters.
// const params = {
//     'returnFaceId': 'true',
//     'returnFaceLandmarks': 'false'
// };

let options = {
    uri: 'https://centralindia.api.cognitive.microsoft.com/face/v1.0/detect',
    qs: {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false'
    },
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  // let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  // console.log('JSON Response\n');
  // console.log(jsonResponse);
  let jsonResponse = JSON.parse(body);
  let faceid = jsonResponse[0].faceId;
  // console.log(faceid);
  options = {
    uri: 'https://centralindia.api.cognitive.microsoft.com/face/v1.0/findsimilars',
    body: '{"faceId": "' + faceid + '","faceListId": "1"' + '}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
  };
  request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);
  });
});
