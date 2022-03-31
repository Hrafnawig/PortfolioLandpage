const router = require('express').Router();
const Controller= require('../controllers/hotel.controller');
const bodyParser = require('body-parser').json();
router.get('/',Controller.HotelData);
router.post('/book',bodyParser,Controller.HotelBook);

module.exports = router;