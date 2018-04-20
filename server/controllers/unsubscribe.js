const {
  EMAIL_REMOVE_ERROR,
  EMAIL_REMOVE_SUCCESS,
  EMAIL_REMOVE_ALREADY_DONE
} = require('../shared/serverMessages')
const Client = require('../models/client')
const EventLog = require('../models/eventLog')

const isNumber = (number) => {
  return Number(number)
}

exports.unsubscribe = async (req, res) => {
  if (!req.query || !req.query.number || !isNumber(req.query.number)) {
    return res.status(401).render('unsubscribe', EMAIL_REMOVE_ERROR())
  }

  let doc = ''
  try {
    doc = await Client.findOneAndRemove({ randomN: req.query.number })
  } catch (err) {
    return res.status(401).render('unsubscribe', EMAIL_REMOVE_ERROR())
  }

  try {
    await EventLog.findOneAndRemove({ randomN: req.query.number })
    if (!doc) {
      return res.status(201).render('unsubscribe', EMAIL_REMOVE_ALREADY_DONE())
    }
    return res.status(201).render('unsubscribe', EMAIL_REMOVE_SUCCESS(doc.email))
  } catch (err) {
    return res.status(401).render('unsubscribe', EMAIL_REMOVE_SUCCESS(doc))
  }
}
