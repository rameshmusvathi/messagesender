
process.env.NTBA_FIX_319 = 1;
require('dotenv').config()
const fetch = require('node-fetch')
const Telegram = require('node-telegram-bot-api')
const userName = process.env.GMAILUSER;
const passWord = process.env.GMAILPASS;
const telegramChatid=process.env.TELEGRAMCHATID;
const telegramToken = process.env.TELEGRAMTOKEN;
const weatherToken = process.env.WEATHERTOKEN;


const bot = new Telegram("AAGvp_PnOSuSqgvQYQxZmMGBchU_a5k_riM")

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
            
  
            bot.on('message', (msg)=>{const telegramChatid = msg.chat.id; bot.sendMessage(telegramChatid, "Messagingapp js file push/pull in messagesender repo")})
            console.log(`Today's forecast for ${name}: ${forecast}`);
            console.log(`Current temperature in ${name} is ${temperature}°C `);
    
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
            html: '<h1 This mail from Github</h1><p>That was easy. `Today forecast for ${name}: ${forecast}`</p>'
             };
            // send email via gmail
             transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                } else {
            console.log('Email sent: ' + info.response);
            }
            });
        })
        .catch((err) => console.log(err));
process.exit;


