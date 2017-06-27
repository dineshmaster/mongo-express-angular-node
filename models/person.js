var mongoose = require('../models/mongo')
var Schema = mongoose.Schema;
var personSchema = new Schema({
  name:String
},{collection:'person'})
module.exports = mongoose.model('Person', personSchema)
