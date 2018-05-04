const fs = require('fs')
const path = require('path')
const handlebars = require('handlebars')
const rn = require('random-number')

const {
  CLIENT_EMAIL_EXIST,
  INVALID_EMAIL,
  EMAIL_SAVED,
  UNKNOWN_ERROR,
  COULDNT_SAVE_EMAIL
} = require('../shared/serverMessages')
const Client = require('../models/client')
const EventLog = require('../models/eventLog')
const { transporter, mailCampaing } = require('../smtp/smtp')

const createEmailMarkup = (defaultMarkup, email, randomN) => {
  const newTemplate = handlebars.compile(defaultMarkup)
  const sendTo = (email.match(/^[^@]+/g) || [])[0]

  return {
    ...mailCampaing,
    to: email,
    html: newTemplate({ sendTo, randomN })
  }
}

const emailSender = (newEmail) => transporter.sendMail(newEmail)

const saveEmail = async (req, res) => {
  let clientSaved = ''
  let defaultMarkup = ''
  let newMailCampaing = ''
  let docs = ''

  if (req.body.checkbox) { // Avoid bots
    return res.redirect('/')
  }

  req.checkBody('email', 'error').isEmail()
  const errors = req.validationErrors()

  if (errors) {
    return res.status(400).render('form', INVALID_EMAIL)
  }

  try {
    docs = await Client.find({ email: req.body.email })
  } catch (err) {
    return res.status(500).render('form', UNKNOWN_ERROR(err))
  }

  if (docs.length) {
    return res.status(400).render('form', CLIENT_EMAIL_EXIST)
  }

  try {
    const newClient = Client({ email: req.body.email, randomN: rn() })
    clientSaved = await newClient.save()
  } catch (err) {
    return res.status(500).render('form', COULDNT_SAVE_EMAIL(err))
  }

  try {
    defaultMarkup = fs.readFileSync(path.join(__dirname, '../smtp/email.handlebars'), 'utf-8')
    newMailCampaing = createEmailMarkup(defaultMarkup, req.body.email, clientSaved.randomN)
  } catch (err) {
    return res.status(401).render('form', EMAIL_SAVED({ email: clientSaved.email, error: err }))
  }

  try {
    await emailSender(newMailCampaing)
  } catch (err) {
    return res.status(401).render('form', EMAIL_SAVED({ email: clientSaved.email, error: err }))
  }

  try {
    const eventLog = EventLog({
      type: req.body.campaign,
      date: new Date().getTime(),
      remoteId: clientSaved._id,
      randomN: clientSaved.randomN
    })
    await eventLog.save()
    res.status(201).render('form', EMAIL_SAVED({ email: clientSaved.email, sent: true }))
  } catch (err) {
    return res.status(401).render('form', EMAIL_SAVED({ email: clientSaved.email, error: err }))
  }
}

exports.saveEmail = saveEmail

exports.redirect = (req, res) => {
  res.redirect('/')
}
