const { Coordinate } = require('../../models')

function updateCounter (req, res) {
    const { id } = req.params
    const data = req.body
    Coordinate.updateOne({ _id: id}, data)
        .then((coordinate) => res.json(coordinate))
        .catch((error) => res.status(400).json(error))
}

module.exports = updateCounter