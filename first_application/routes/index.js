var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var places = [
    { name: 'Orlando, Florida', rating: 10 },
    { name: 'Virginia Beach, Virginia', rating: 9 },
    { name: 'Myrtle Beach, South Carolina', rating: 8 },
    { name: 'Gatlinburg, Tennessee', rating: 9 },
    { name: 'Las Vegas, Nevada', rating: 7 }
  ];

  // create a name
  var myname = "Dennis Franks Jr.";

  res.render('index', {
    title: 'Favorite Places',
    places: places,
    myname: myname
  });
});

module.exports = router;