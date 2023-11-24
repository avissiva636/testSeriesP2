const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    Title: String,
    subarr: [Object], // Array of subarr subdocuments
    SubTitle: [
        {
            Title: String,
            subarr: [Object], // Array of subarr subdocuments
        },
    ],
});

courseSchema.pre('validate', function () {
    if ((this.subarr.length > 0 && this.SubTitle.length > 0) ||
        (this.subarr.length < 0 && this.SubTitle.length < 0)
    ) {
        this.invalidate('subarr', 'Only one of subarr or SubTitle should exist for a document');
        this.invalidate('SubTitle', 'Only one of subarr or SubTitle should exist for a document');
    }

});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
