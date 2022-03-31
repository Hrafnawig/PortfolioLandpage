const db = require('../models');
module.exports.HotelData = async (req, res, next) => {
    try {
        const hotelData = await db.Hotel.findAll();
        res.send({ data: hotelData });
    } catch (err) {
        next(err);
    }
};
module.exports.HotelBook = async (req, res, next) => {
    try {
        let { body:{
            inB,outB, roomId
        } } = req;
        const val={
            in : inB,
            out : outB
        }
        //2022-03-31
        const book = await db.Hotel.update(val,{where:{id:roomId}});
        res.send({ success: book});
    } catch (err) {
        next(err);
    }
};