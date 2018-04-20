const express = require('express')

const SaveEmail = require('../controllers/saveEmail')
const Unsubscribe = require('../controllers/unsubscribe')

const listofRoutes = express.Router()

listofRoutes.post('/validate', SaveEmail.saveEmail)
listofRoutes.get('/unsubscribe', Unsubscribe.unsubscribe)
listofRoutes.get('/validate', SaveEmail.redirect)

module.exports = listofRoutes
