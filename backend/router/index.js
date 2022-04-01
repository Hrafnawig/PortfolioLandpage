const router = require('express').Router();
const Controller= require('../controllers/hotel.controller');
const bodyParser = require('body-parser').json();

router.get('/',Controller.HotelData);
router.post('/book',bodyParser,Controller.HotelBook);
router.get('/:id',Controller.getHotelById);

module.exports = router;