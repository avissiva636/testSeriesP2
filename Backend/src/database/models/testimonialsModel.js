const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    name: String,
    description: String,
},
    { timestamps: true, });


const Testimonials = mongoose.model('Testimonials', testimonialsSchema);

module.exports = Testimonials;