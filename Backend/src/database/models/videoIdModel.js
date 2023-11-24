const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoid:[String],
});

const video = mongoose.model('video', videoSchema);

module.exports = video;
