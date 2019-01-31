# CodeFunDo++ 2018
This is a clone of the CodeFunDo++ 2018 Hackathon project from CodeForGood Team.

This app is hosted at https://codeforgood.azurewebsites.net/

Video link: https://youtu.be/rF_tYcFjgco

This web app aims to predict the natural disasters and help government and community in tackling them. There are mainly 4 sections:

1. Future Predictions 
2. Major ongoing or recent events
3. Statistical Study of disasters
4. Disaster Guidelines

### Future Predictions
This section contains the pre-trained models over various major disasters. We will apply machine learning and deep learning techinques on the available dataset to predict the forthcoming disasters.The models will be trained using Tensorflow lib, sklearn lib and Microsoft CNTK Toolkit. These models will be loaded in the browser via TensorflowJs. The dataset features will be different for each disaster. The dataset has been scraped and mined from various authentic sources like Satelite Data, Twitter etc.
We also plan to propose sensors that can be used by cities/states to improve the probability of prediction. These Sensors are part of our smart city idea to implement IoT devices in order to get real time and improved predictions. 

### Major ongoing or recent events
This section includes the disasters that have happened in the last month or are currently ongoing. For each city/state their helpline numbers will be provided specific to the location of Event.
Also details of associated relief funds will be mentioned to which people can donate.

### Statistical Study of disasters
Under this section we display our study of disasters that have happened in past.

### Disaster Guidelines
This section has guidelines related to every disaster for future or immediate help to victim.

### Features
Our app has following features:
1. Emergency Button
2. Chatbot

#### Emergency Button 
This button aims to help immediate victims of the disaster. The app detects the location and the corresponding weather conditions of the person. The person has to fill a form to get his personal and family contact details and then the app informs his family about his condition.

#### Chatbot
The victim can directly tell his/her current state and the chatbot will guide the person for the respective state of person according to disaster.

*Note:* Some features have not been implemented and display our future desire.
