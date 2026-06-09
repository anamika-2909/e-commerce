
const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    Email: {
        type: "string",
        required: true
    },
    Password: {
        type: "string",
        required: true
    },
    Address: {
        type: "string",
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    City: {
        type: "string",
        required: true
    },
    State: {
        type: "string",
        required: true
    },
    Zip:{
        type: Number,
        required: true
    }

})
module.exports=mongoose.model("contact",contactSchema)