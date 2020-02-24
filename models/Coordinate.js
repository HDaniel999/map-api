const { model } = require('mongoose')
const EventSchema = require('../schemas/Coordinate')

const EventModel = model('Coordinate',  EventSchema)

module.exports = EventModel