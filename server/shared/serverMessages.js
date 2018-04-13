const shared = require('./index')

exports.CLIENT_EMAIL_EXIST = {
  ...shared,
  result: {
    class: 'result error',
    msg: 'Email already exist'
  }
}

exports.INVALID_EMAIL = {
  ...shared,
  result: {
    class: 'result error',
    msg: 'Please insert a valid Email'
  }
}

exports.EMAIL_SAVED = (email) => ({
  ...shared,
  result: {
    class: 'result success',
    msg: 'Welcome to TrekBase',
    email
  },
  subtitle: '*Thanks for sign up*',
  formClass: 'hide'
})