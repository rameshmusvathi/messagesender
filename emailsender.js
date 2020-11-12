require('dotenv').config()
const userName = process.env.GMAILUSER;
const passWord = process.env.GMAILPASS;
const telegramchatid=process.env.TELEGRAM_CHAT_ID;
const telegramtoken = process.env.TELEGRAM_TOKEN
const Telegram = require('node-telegram-bot-api')
const bot = new Telegram(process.env.TELEGRAM_TOKEN)
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
  subject:'Sending Email using Node.js in html format',
  html: '<h1>My first html email for Node js</h1><p>That was easy</p>'
};
// just updating
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


bot.sendMessage(process.env.TELEGRAM_CHAT_ID, "Some one committed file in Personal NodeJStraining repo")
