const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    cName: {
        type: String,
        required: true
    },
    description: {
        type: String
    },

    cimage: {
        type: String
    },

    status: {
        type: String,
        default: "Active"
    },
})
module.exports = mongoose.model("MyCategory",  categorySchema )