var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// Gets the About me page
router.get('/', function(req, res, next){
  res.render('projects', {title: 'Some of My Projects'})
})

module.exports = router;