'use strict'
const db = require('../models')
module.exports = async function (fastify, opts, next) {
  fastify.route({
    method:'GET',
    url: '/',
    schema: {
      tags:['Hotel'],
      response:{
        200:{
          type: 'object',
          properties:{
            status: { type:'string' },
            timestamp: { type:'string', format: 'date-time' }
          }
        }
      }
    },
    handler: async(req,rep) =>{
      console.log(await db.Test.findAll())
      return {status:'uploaded', timestamps: new Date().toISOString()}
    }
  });
  next()
}
