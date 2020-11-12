
process.env.NTBA_FIX_319 = 1;
require('dotenv').config()
const fetch = require('node-fetch')
const Telegram = require('node-telegram-bot-api')
const userName = process.env.GMAILUSER;
const passWord = process.env.GMAILPASS;
const telegramChatid=process.env.TELEGRAMCHATID;
const telegramToken = process.env.TELEGRAMTOKEN;
const weatherToken = process.env.WEATHERTOKEN;


const bot = new Telegram(process.env.TELEGRAMTOKEN)

const weatherURL = new URL('https://api.openweathermap.org/data/2.5/weather')
weatherURL.searchParams.set('id', '1880251')
weatherURL.searchParams.set('APPID', weatherToken)
weatherURL.searchParams.set('units', 'metric')
fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=1880251&units=metric&APPID=a74ef7d8885197e1209951e8ac085f1a")
        .then((response) => response.json())
        .then((data) => {
            const forecast = data.weather[0].description;
            const temperature = data.main.temp;
            const name = data.name;
            bot.on('text', (msg)=>{bot.sendMessage(msg.chat.id, 'Messengingjs file push/pull in messagesender repo')})
            console.log(`Today's forecast for ${name}: ${forecast}`);
            console.log(`Current temperature in ${name} is ${temperature}°C `);
        })
        .catch((err) => console.log(err));
process.exit;


