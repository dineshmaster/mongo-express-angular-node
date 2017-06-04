var mongoose = require('../models/mongo')
var personSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  }
})
module.exports = mongoose.model('Person', personSchema)
