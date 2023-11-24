const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoid:[String],
});

const Testimonials = mongoose.model('Testimonials', videoSchema);

module.exports = Testimonials;
