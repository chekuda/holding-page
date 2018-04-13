const mongoose = require('mongoose')

const Schema = mongoose.Schema

const newSchema = new Schema({
  email: String
})

const Client = mongoose.model('client', newSchema)

module.exports = Client