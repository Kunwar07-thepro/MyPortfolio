var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kunwar Surya Partap' });
});
// Gets the About me page
// router.get('/about', function(req, res, next){
//   res.render('about', {title: 'About Kunwar Surya Partap'})
// })

module.exports = router;
