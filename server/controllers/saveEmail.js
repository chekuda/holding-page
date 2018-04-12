const shared = require('../shared')

exports.saveEmail = (req, res) => {
  if(req.body.checkbox) { // Avoid bots
    res.redirect('/')
  }

  req.checkBody('email', 'error').isEmail()
  const errors = req.validationErrors()

  if(errors) {
    const dataPage = {
      ...shared,
      result: {
        class: 'result error',
        msg: 'Please insert a valid email'
      }
    }
    res.status(400).render('form', dataPage)
  } else {
    const dataPage = {
      ...shared,
      result: {
        class: 'result success',
        msg: 'Welcome to TrekBase'
      },
      subtitle: '*Thanks for sign up*',
      formClass: 'hide'
    }
    res.status(201).render('form', dataPage)
  }
}

exports.redirect = (req, res) => {
  res.redirect('/')
}