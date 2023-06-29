const mongoose = require('mongoose')
const emailValidator = require("email-validator")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function () {
            return emailValidator.validate(this.email)
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'restaurantOwner', 'deliveryBoy'],
        default: 'user'
    },
    profileImage: {
        type: String,
        default: '../public/assets/User.jpg'
    },
    resetToken: {
        type: String,
        trim: true
    },
    accessToken: {
        type: String,
        trim: true
    }

}, {
    timestamps: true
})





const userModel = mongoose.model('user', userSchema);
module.exports = userModel