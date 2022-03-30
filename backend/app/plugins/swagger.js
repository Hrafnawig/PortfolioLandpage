const fp =require('fastify-plugin');
// adding swagger
module.exports = fp(async function (fastify, opts,next) {
    fastify.register(require('fastify-swagger'), {
        routePrefix: '/swagger',
        swagger: {
            info: {
                title: 'PortfolioAPI',
                description: 'Fastify swagger API',
                version: '0.1.0'
            },
            externalDocs: {
                url: 'https://swagger.io',
                description: 'Find more info here'
            },
            host: 'localhost:3000',
            schemes: ['http'],
            consumes: ['application/json'],
            produces: ['application/json'],
        },
        uiConfig: {
            docExpansion: 'full',
            deepLinking: false
        },
        uiHooks: {
            onRequest: function (request, reply, next) { next() },
            preHandler: function (request, reply, next) { next() }
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        exposeRoute: true
    })
    next()
})