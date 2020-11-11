
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport('SMTP',{
service: 'Gmail',
auth: {
user:'rameshmusuvathi@gmail.com',
pass:'lillylotus'
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
