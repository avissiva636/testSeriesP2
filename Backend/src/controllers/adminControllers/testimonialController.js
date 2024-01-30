const asyncHandler = require("express-async-handler");
const { testimonialsModel: Testimonial } = require("../../database/index");
const fs = require('fs');
const path = require("path");

let Testimonials = [];

async function setTestimonials() {
    try {
        Testimonials = await Testimonial.find();
    } catch (error) {
        console.error('Error setting Testimonials:', error);
    }
}

const renderAddTestimonial = asyncHandler((req, res) => {
    res.render("testimonial/addTestimonial", {
        message: "add Testimonial",
        Testimonials,
    });
});

const renderUpdateTestimonial = asyncHandler(async (req, res) => {
    await setTestimonials();
    res.render("testimonial/updateTestimonial", {
        message: "update Testimonial",
        Testimonials,
    });
});

const renderDeleteTestimonial = asyncHandler(async (req, res) => {
    await setTestimonials();
    res.render("testimonial/deleteTestimonial", {
        message: "delete Testimonial",
        Testimonials,
    });
});

const getTestimonialList = asyncHandler(async (req, res) => {
    if (req.headers.origin) {
        if (!fs.existsSync(path.join(__dirname, '..','..','..','public','images','testimonials'))) {               
            await fs.promises.mkdir(path.join(__dirname, '..','..','..','public','images','testimonials'));
        }
        await setTestimonials();
        res.json({ Testimonials });
    }
});

const uploadAddTestimonial = asyncHandler(async (req, res) => {
    const testimonialName = req.body['Testimonial Name'];
    const testimonialDescription = req.body['Testimonial Description'];

    Testimonial.create({
        name: testimonialName,
        desc: testimonialDescription,
        photo: req.testimonialImageName
    })

    await setTestimonials();
    // Respond to the client as needed
    res.json({
        message: 'Received Testimonial Data',
        Testimonials
    });
});

const uploadUpdateTestimonial = asyncHandler(async (req, res) => {
    const testimonialOldName = req.body.updateTestimonialData;
    const testimonialNewName = req.body.UpdateTestimonialName;
    const testimonialDescription = req.body.UpdateTestimonialDescription;

    await Testimonial.findOneAndUpdate(
        { name: testimonialOldName },
        { $set: { name: testimonialNewName, desc: testimonialDescription } },
        { new: true }
    );

    await setTestimonials();

    res.json({
        message: 'Updated Testimonial Data',
        Testimonials
    });

});

const uploadDeleteTestimonial = asyncHandler(async (req, res) => {
    const deleteTestimonial = req.body.deleteTestimonial;
    const deletedTestimonial = await Testimonial.findOneAndDelete({ name: deleteTestimonial });

    if (deletedTestimonial) {
        const photoPath = path.join(__dirname, '../../../public/images/testimonials', deletedTestimonial.photo);
        if (fs.existsSync(photoPath)) {
            fs.unlinkSync(photoPath);
        } else {
            console.log(`File ${photoPath} does not exist.`);
        }
    } else {
        console.log('Testimonial not found or already deleted.');
    }
    await setTestimonials();

    res.json({
        message: `File ${deletedTestimonial.photo} deleted successfully.`,
        Testimonials
    });

});


module.exports = {
    renderAddTestimonial, renderUpdateTestimonial, renderDeleteTestimonial,
    getTestimonialList, uploadAddTestimonial, uploadUpdateTestimonial, uploadDeleteTestimonial
};