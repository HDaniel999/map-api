const { Coordinate} = require('../../models')

function findOneCoordinate (req, res) {
    const { id } = req.params
    Coordinate.findOne({ _id: id })
        .then((event) => res.json(event))
        .catch((error) => res.status(400).json(error))
}

module.exports = findOneCoordinate