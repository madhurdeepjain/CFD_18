  // status fields and start button in UI
  var phraseDiv;
  var startRecognizeOnceAsyncButton;

  // subscription key and region for speech services.
  var subscriptionKey = '57cf2fac83434ecf9d3801a97c5904c9';
  var serviceRegion = 'southeastasia';
  var authorizationToken;
  var SpeechSDK;
  var recognizer;
  document.addEventListener("DOMContentLoaded", function () {
    startRecognizeOnceAsyncButton = document.getElementById("startRecognizeOnceAsyncButton");
    phraseDiv = document.getElementById("phraseDiv");
    startRecognizeOnceAsyncButton.addEventListener("click", function () {
      startRecognizeOnceAsyncButton.disabled = true;
      phraseDiv.innerHTML = "";

      // if we got an authorization token, use the token. Otherwise use the provided subscription key
      var speechConfig;
      if (authorizationToken) {
        speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(authorizationToken, serviceRegion.value);
      } else {
        if (subscriptionKey === "" || subscriptionKey === "subscription") {
          alert("Please enter your Microsoft Cognitive Services Speech subscription key!");
          return;
        }
        speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
      }
      var prom = document.getElementById('mylist')
      speechConfig.speechRecognitionLanguage =prom.options[prom.selectedIndex].value ;
      var audioConfig  = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
      recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

      recognizer.recognizeOnceAsync(
        function (result) {
          startRecognizeOnceAsyncButton.disabled = false;
          phraseDiv.innerHTML += result.text;
          window.console.log(result);

          recognizer.close();
          recognizer = undefined;
        },
        function (err) {
          startRecognizeOnceAsyncButton.disabled = false;
          phraseDiv.innerHTML += err;
          window.console.log(err);

          recognizer.close();
          recognizer = undefined;
        });
    });

    if (!!window.SpeechSDK) {
      SpeechSDK = window.SpeechSDK;
      startRecognizeOnceAsyncButton.disabled = false;

      document.getElementById('content').style.display = 'block';
      document.getElementById('warning').style.display = 'none';

      // in case we have a function for getting an authorization token, call it.
      if (typeof RequestAuthorizationToken === "function") {
          RequestAuthorizationToken();
      }
    }
  });