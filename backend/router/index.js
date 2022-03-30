const router = require('express').Router();
const Controller= require('../controllers/hotel.controller');

router.get('/',Controller.HotelData);

module.exports = router;