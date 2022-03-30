const {Superhero} = require('../models/Hotel');
const _ =require('lodash');
const all =  ['nickname','real_name','origin_description','superpowers','catch_phrase','main_image_path','side_images_paths'];
module.exports.createHero = async (req, res, next) => {
  try {
    const { body } = req;
    const heroBody = _.pick(body, all);
    const hero = await Superhero.create(heroBody);
    res.status(200).send({ data: hero });
  } catch (err) {
    next(err);
  }
};

module.exports.getHeroes = async (req, res, next) => {
  try {
    const { pagination } = req;
    const heroes = await Superhero.findAll({
      attributes: {
        exclude: ['real_name','origin_description','superpowers','catch_phrase','side_images_paths'],
      },
      ...pagination,
    });
    res.send({ data: heroes });
  } catch (err) {
    next(err);
  }
};

module.exports.getdetailHero = async (req, res, next) => {
  try {
    const {  params: { id } } = req;
    const heroes = await Superhero.findByPk(id);
    res.send({ data: heroes });
  } catch (err) {
    next(err);
  }
};

module.exports.updateHeroImage = async (req, res, next) => {
  try {
    const {
      params: { id },
      body:{main_image_path},
    } = req;

    const [, [updatedHero]] = await Superhero.update(main_image_path, {
      where: { id },
      returning: true,
    });
    res.send({ data: updatedHero });
  } catch (err) {
    next(err);
  }
};

module.exports.updateHero = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const [, [updatedHero]] = await Superhero.update(body, {
      where: { id },
      returning: true,
    });
    res.send({ data: updatedHero});
  } catch (err) {
    next(err);
  }
};
 
module.exports.deleteHero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const hero = await Superhero.destroy({where:{id}});
    res.send({ data: hero });
  } catch (err) {
    next(err);
  }
};