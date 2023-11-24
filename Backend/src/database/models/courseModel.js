const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    Title: String,
    Description: [Object], // Array of Description subdocuments
    SubTitle: [
        {
            Title: String,
            Description: [Object], // Array of Description subdocuments
        },
    ],
});

courseSchema.pre('validate', function () {
    if ((this.Description.length > 0 && this.SubTitle.length > 0) ||
        (this.Description.length < 0 && this.SubTitle.length < 0)
    ) {
        this.invalidate('Description', 'Only one of Description or SubTitle should exist for a document');
        this.invalidate('SubTitle', 'Only one of Description or SubTitle should exist for a document');
    }

});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
