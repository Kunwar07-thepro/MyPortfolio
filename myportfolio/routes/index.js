var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kunwar Surya Partap' });
});
router.get('/', function(req, res, next){
  res.render('projects', {title: 'Projects'})
})
router.get('/', function(req, res, next){
  res.render('about', {title: 'About Kunwar Surya Partap'})
})
router.get('/', function(req, res, next){
  res.render('contact', {title: 'Contact Me'})
})

// Gets the About me page
// router.get('/about', function(req, res, next){
//   res.render('about', {title: 'About Kunwar Surya Partap'})
// })

module.exports = router;
