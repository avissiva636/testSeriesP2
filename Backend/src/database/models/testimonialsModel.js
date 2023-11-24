const mongoose = require('mongoose');

const testimonialsSchema = new mongoose.Schema({
    name: String,
    desc: String, 
    photo: String,
});


const Testimonials = mongoose.model('Testimonials', testimonialsSchema);

module.exports = Testimonials;
