const { Coordinate } = require('../../models')

function findCoordinate (req, res) {
    Coordinate.find()
        .then((coordinate) => res.json({ coordinate }))
        .catch((error) => res.stauts(400).json(error))
}

module.exports = findCoordinate