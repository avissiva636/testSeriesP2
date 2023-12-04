const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoid:String,
},
{ timestamps: true, });

const video = mongoose.model('video', videoSchema);

module.exports = video;
