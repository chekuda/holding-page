const Client = require('../models/client')
const { CLIENT_EMAIL_EXIST, INVALID_EMAIL, EMAIL_SAVED } = require('../shared/serverMessages')

exports.saveEmail = (req, res) => {
  if (req.body.checkbox) { // Avoid bots
    res.redirect('/')
  } else {
    req.checkBody('email', 'error').isEmail()
    const errors = req.validationErrors()

    if (errors) {
      const dataPage = INVALID_EMAIL
      res.status(400).render('form', dataPage)
    } else {
      Client.find({ email: req.body.email }, (err, docs) => {
        if (err || docs.length) {
          res.status(400).render('form', CLIENT_EMAIL_EXIST)
        } else {
          const newClient = Client({
            email: req.body.email
          })
          newClient.save(error => {
            if (error) {
              res.status(400).render('form', INVALID_EMAIL)
            } else {
              res.status(201).render('form', EMAIL_SAVED(req.body.email))
            }
          })
        }
      })
    }
  }
}

exports.redirect = (req, res) => {
  res.redirect('/')
}
