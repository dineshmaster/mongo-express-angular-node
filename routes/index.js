var express = require('express');
var router = express.Router();
var Person = require('../models/person')

/* GET home page. */
router.get('/show', function (req, res, next) {
  // res.render('index')
 Person.find()
 .then(function(doc){
   console.log(doc)
 res.render('index',{values:['A','B']})
 })
 
});

/* GET create page */
router.get('/index',function(req,res,next){
  res.render('index',{values:['A','B']})
})


router.post("/create", function (req, res, next) {
  console.log('Incoming name : ' + req.body.name)
  var person = new Person({ name: req.body.name })
  person.save(function (err, person) {
    if (err) console.error(err);
    console.log('Data inserted successfully')
    res.redirect('/index')
  })
});

module.exports = router;
