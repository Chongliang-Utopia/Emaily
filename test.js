// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("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");
const msg = {
  to: "chongliangtao1002@gmail.com",
  from: "chongliangtao1002@gmail.com",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail.send(msg);
