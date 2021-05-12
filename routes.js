var express = require('express'),
    path = require('path'),
    app = express();

var router = express.Router();

router.get('/', function(req, res){
    res.render("index")
})

router.get('/information', function(req, res){
    res.render("info")
})

router.get('/signup', function(req, res){
    res.render("signup")
})

router.get('/contact-faq', function(req, res){
    res.render("contact")
})

router.get('/form/one-time', function(req, res){
    res.render("form1")
})

router.get('/form/reocurring', function(req, res){
    res.render("form2")
})

router.get('/form/tutor', function(req, res){
    res.render("form2")
})

router.get('/tutor', function(req, res){
    res.render("more/tutor")
})

router.get('/branch', function(req, res){
    res.render("more/branch")
})

router.get('/resources', function(req, res){
    res.render("more/study")
})

router.get('/team', function(req, res){
    res.render("more/team")
})

//* Add Links for MORE section 

module.exports = router;