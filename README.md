# Node JS  + Github Actions Exercise

## messagingapp.js (Node JS) file contains scripts to send an email using gmail from specific sender to a receiver.

### In addition, the actions.yml file sends telegram message to a bot name "Rameshweatherbot"

### The code uses secret environment variable to store sender's username and password

### Github Actions.yml file has the code to run the messagingapp.js file when the file is pushed/pulled in to the repository.Simply making changes and committing the messagingapp.js file will trigger the actions and we can see an email sent and also on the run window the weather in Singapore.

### Weather data in Singapore is received via API from Openweather site.


![email CI](https://github.com/rameshmusvathi/PersonalNodeJStraining/workflows/email%20CI/badge.svg)
![notify CI](https://github.com/rameshmusvathi/PersonalNodeJStraining/workflows/notify%20CI/badge.svg)
![Telegram](https://img.shields.io/badge/try%20it-on%20telegram-0088cc.svg)
