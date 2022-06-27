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

router.get('/form/recurring', function(req, res){
    res.render("form2")
})

router.get('/form/tutor-main', function(req, res){
    res.render("form3")
})

router.get('/form/tutor-conn', function(req, res){
    res.render("form-tutor-conn")
})

router.get('/form/create-branch', function(req, res){
    res.render("form-create-branch")
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

router.get('/dashboard', function(req, res){
    res.render("dashboard")
})

router.get('/login', function(req, res){
    res.render("signin")
})


//* Add Links for MORE section 

module.exports = router;