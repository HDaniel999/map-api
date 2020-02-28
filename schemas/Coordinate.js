const { Schema } = require('mongoose')

const ObjectSchema = {
    lat: {
        required: [true, 'Latitude is required'],
        type: Schema.Types.Decimal128,
        unique: true,
        validate: /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/,
        message: props => `${props.value} is not a valid Latitude!`
    },
    lng: {
        required: [true, 'Latitude is required'],
        type: Schema.Types.Decimal128,
        unique: true,
        validate: /^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/,
        message: props => `${props.value} is not a valid Latitude!`
    }
}

module.exports = new Schema(ObjectSchema)