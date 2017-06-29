var express = require('express');
var router = express.Router();
var Person = require('../models/person')

/* GET home page. */
router.get('/show', function (req, res, next) {
 Person.find()
 .then(function(doc){
   console.log(doc)
 res.render('index',{person:doc})
 })
});


/*GET create page */
router.get('/create',function(req,res,next){
  res.render('create');
})

/*POST create */
router.post("/create", function (req, res, next) {
  console.log('Incoming name : ' + req.body.name)
  var person = new Person({ name: req.body.name, age:req.body.age })
  person.save(function (err, person) {
    if (err) console.error(err);
    console.log('Data inserted successfully')
    res.redirect('/show')
  })
});

/*GET edit */
router.get('/edit/:id',function(req,res,next){
  console.log('Incoming ID: '+req.params.id)
  var _id = req.params.id
  Person.findById(_id,function(err,person){
    if(err) console.log('Error fetching info for id: '+_id)
    res.render('update',{person:person})
  })
})

/*PUT edit */
router.post('/update',function(req,res,next){
  var _id = req.body._id;
  Person.findOneAndUpdate({_id:_id},{$set:{name:req.body.name,age:req.body.age}},{new:true},function(err,doc){
    if(err) console.log('Error updating document')
    res.redirect('/show')
  })
})

router.get('/delete/:id',function(req,res,next){
  var _id = req.params.id
  Person.remove({_id:_id},function(err){
    if(!err) res.redirect('/show')
  })
})
module.exports = router;
