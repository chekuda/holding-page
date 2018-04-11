const express = require('express')
const Controllers = require('../controllers/saveEmail')

const listofRoutes = express.Router()

listofRoutes.get('/saveemail', Controllers.saveEmail)

module.exports = listofRoutes