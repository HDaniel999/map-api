const { Coordinate } = require('../../models')

function deleteCoordinate (req, res) {
    const { id } = req.params
    Coordinate.deleteOne({ _id: id })
        .then(() => res.sendStatus(200))
        .catch((error) => res.status(400).json(error))
}

module.exports = deleteCoordinate