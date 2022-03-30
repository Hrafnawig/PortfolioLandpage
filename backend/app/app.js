'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const dbConfig =require('./config/config.json')
const chalk = require('chalk')

module.exports = async function (fastify, opts) {
  console.log(dbConfig.development)
  fastify.register(
      require('sequelize-fastify'),
      {
        instance: 'db',
        sequelizeOptions: dbConfig.development
      }
  )
      .ready(async () => {
        try {
          await fastify.db.authenticate()

          console.log(
              chalk.green('Database connection is successfully established.')
          )
        } catch(err) {
          console.log(
              chalk.red(`Connection could not established: ${err}`)
          )
        }
      })
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
