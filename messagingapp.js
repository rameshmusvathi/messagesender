
process.env.NTBA_FIX_319 = 1;
require('dotenv').config()
const fetch = require('node-fetch')
const userName = process.env.GMAILUSER;
const passWord = process.env.GMAILPASS;
const telegramChatid=process.env.TELEGRAMCHATID;
const telegramToken = process.env.TELEGRAMTOKEN;
const weatherToken = process.env.WEATHERTOKEN;


const Telegram = require('node-telegram-bot-api');
const bot = new Telegram(process.env.TELEGRAMTOKEN, {polling:true});

const weatherURL = new URL('https://api.openweathermap.org/data/2.5/weather')
weatherURL.searchParams.set('id', '1880251')
weatherURL.searchParams.set('APPID', weatherToken)
weatherURL.searchParams.set('units', 'metric')

const getWeatherData = async () => {
  const resp = await fetch(weatherURL.toString())
  const body = await resp.json()
  return body
}


  const main = async () => {
  const weatherData = await getWeatherData()
  const weathermessage = `The weather in ${weatherData.name}: ${weatherData.weather[0].description}. Current temperature is ${weatherData.main.temp} degree celsius, with a low temp of ${weatherData.main.temp_min} degree celsius and high of ${weatherData.main.temp_max} degree celsius.`
  // const weatherMessage = 'The weather in ${weatherData.name}: ${weatherData.weather[0].description}. Current temperature is ${weatherData.main.temp} degree celsius, with a low temp of ${weatherData.main.temp_min} degree celsius and high of ${weatherData.main.temp_max} degree celsius.`
  // bot.on('message', (msg) => {
  // const telegramChatid = msg.chat.id;
  // bot.sendMessage(telegramChatid, weatherMessage) });
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  ignoreTLS: false,
  secure: false,
  auth: {
  user: userName,
  pass: passWord
  }
    });
  var mailOptions = {
  from:'rameshmusuvathi@gmail.com',
  to:'mails2kirupa@gmail.com',
  subject:'Weather in Singapore',
  text: weatherMessage
  };
  // send email via gmail
  transporter.sendMail(mailOptions, function(error, info){
   if (error) {
    console.log(error);
   } else {
    console.log('Email sent: ' + info.response);
   }
  });
  }
  

//updating to check
  
main()


