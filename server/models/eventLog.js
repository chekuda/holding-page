const mongoose = require('mongoose')

const Schema = mongoose.Schema

const newSchema = new Schema({
  type: String,
  date: Date,
  remoteId: Schema.Types.ObjectId,
  randomN: Number
})

const EventLog = mongoose.model('eventlog', newSchema)

module.exports = EventLog
