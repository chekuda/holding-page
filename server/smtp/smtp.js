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
  from: 'no-reply@trekbase.org', // sender address
  replyTo: 'no-reply@trekbase.org',
  to: 'joselchecaexpo@gmail.com', // list of receivers
  subject: 'Welcome to Trekbase', // Subject line
  text: 'Trekbase', // plain text body
  html: '<b>Hello Done</b>' // html body
}
