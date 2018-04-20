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

exports.UNKNOWN_ERROR = (error) => ({
  ...shared,
  result: {
    class: 'result error',
    msg: 'Server Error. Try later',
    error
  }
})

exports.COULDNT_SAVE_EMAIL = (error) => ({
  ...shared,
  result: {
    class: 'result error',
    msg: 'Server Error. Couldnt save email',
    error
  }
})

exports.EMAIL_SAVED = ({ email, error, sent = false }) => ({
  ...shared,
  result: {
    class: 'result success',
    msg: 'Welcome to TrekBase',
    email,
    email_sent: sent,
    error
  },
  subtitle: '*Thanks for signing up*',
  formClass: 'hide'
})

exports.EMAIL_REMOVE_ERROR = (email) => {
  return {
    sendTo: email,
    htmlText: 'Ups! Sorry but we have had some errors in the server so please email us with a brief description of your issue to info@trekbase.org'
  }
}

exports.EMAIL_REMOVE_SUCCESS = (email) => {
  return {
    sendTo: email,
    htmlText: 'Your email has been removed successfully. Trekbase team hope see you back again soon'
  }
}

exports.EMAIL_REMOVE_ALREADY_DONE = (email) => {
  return {
    sendTo: email,
    htmlText: 'Your email has been removed already. Trekbase team hopes seeing you back again soon.'
  }
}
