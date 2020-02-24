const { Router } = require('express')
const CoordinateRouter = require('./coordinate')

const apiRouter = Router()

apiRouter.get('/', (req, res) => {
    res.json({ appName: 'Api map', version: 1})
})

apiRouter.use('/coordinate', CoordinateRouter)

module.exports = apiRouter