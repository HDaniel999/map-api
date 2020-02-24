const { Router } = require('express')
const find = require('./find')
const save = require('./save')
const findOne = require('./findOne')
const update = require('./update')
const deleteCoordinate = require('./delete')

const coordinateRouter = Router()

coordinateRouter.get('/', find)
coordinateRouter.post('/', save)
coordinateRouter.get('/:id', findOne)
coordinateRouter.patch('/:id', update)
coordinateRouter.delete('/:id', deleteCoordinate)

module.exports = coordinateRouter