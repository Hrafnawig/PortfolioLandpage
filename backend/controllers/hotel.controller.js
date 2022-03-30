const db = require('../models');
module.exports.HotelData = async (req, res, next) => {
    try {
        const hotelData = await db.Hotel.findAll();
        console.log(hotelData)
        res.send({ data: hotelData });
    } catch (err) {
        next(err);
    }
};