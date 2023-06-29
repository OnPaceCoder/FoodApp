const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxlength: [20, "Plan name should not exceed more than 20 characters"],
    },
    duration: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "Price not entered"]
    },
    ratingsAverage: {
        type: Number,
    },
    discount: {
        type: Number,
        validate: [
            function () {
                this.discount < 100;
            },
            "Discount should not exceed price"
        ]
    }



}, { timestamps: true })


//model
const planModel = mongoose.model("plan", planSchema)
module.exports = planModel