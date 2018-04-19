const nodemailer = require('nodemailer')

exports.transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

exports.mailCampaing = {
  from: 'info@trekbase.org', // sender address
  replyTo: 'info@trekbase.org',
  to: 'joselchecaexpo@gmail.com', // list of receivers
  subject: 'Welcome to Trekbase',
  text: 'Trekbase',
  html: '<b>Hello Client</b>'
}
