const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    name: String,
    description: Object,
},
    { timestamps: true, });


const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;