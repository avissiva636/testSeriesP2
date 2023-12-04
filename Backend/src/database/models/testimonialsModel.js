const mongoose = require('mongoose');

const testimonialsSchema = new mongoose.Schema({
    name: String,
    desc: String,
    photo: String,
},
    { timestamps: true, });


const Testimonials = mongoose.model('Testimonials', testimonialsSchema);

module.exports = Testimonials;