var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test_db')

module.exports = mongoose