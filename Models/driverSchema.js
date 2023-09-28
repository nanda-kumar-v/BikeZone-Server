const mongoose = require('mongoose')

const driverSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    fName: {
        type: String,
    },
    lName: {
        type: String,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
    },
    age: {
        type: Number,
    },
    mobile: {
        type: Number,
    },
    qualification: {
        type: String,
    },
    exp: {
        type: Number,
    }
})

const drivers = mongoose.model("drivers", driverSchema)

module.exports = drivers