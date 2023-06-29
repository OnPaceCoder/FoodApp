const mongoose = require("mongoose")


const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: [true, 'Review is required']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        required: [true, 'Rating is required']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: [true, 'Review must belong to user']
    },
    plan: {
        type: mongoose.Schema.ObjectId,
        ref: "plan",
        required: [true, "Review must belong to plan"]
    }
},
    { timestamps: true })


const reviewModel = mongoose.model("review", reviewSchema)
module.exports = reviewModel