const { Coordinate } = require('../../models')

function saveCoordinate (req, res) {
    const data = req.body
    Coordinate.create(data)
        .then((coordinate) => res.json(coordinate))
        .catch((error) => res.status(400).json(error))
}

module.exports = saveCoordinate