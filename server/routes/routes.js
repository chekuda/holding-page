const express = require('express')
const Controllers = require('../controllers/saveEmail')

const listofRoutes = express.Router()

listofRoutes.post('/validate', Controllers.saveEmail)
listofRoutes.get('/validate', Controllers.redirect)

module.exports = listofRoutes