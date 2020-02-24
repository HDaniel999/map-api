const { Schema } = require('mongoose')

const ObjectSchema = {
    lat: {
        required: true,
        type: Schema.Types.Decimal128
    },
    lng: {
        required: true,
        type: Schema.Types.Decimal128
    }
}

module.exports = new Schema(ObjectSchema)