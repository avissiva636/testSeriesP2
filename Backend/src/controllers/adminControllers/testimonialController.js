const asyncHandler = require("express-async-handler");
const { testimonialsModel: Testimonial } = require("../../database/index");
const fs = require('fs');
const path = require("path");
const allowedOrigins = require("../../config/allowedOrigins");

let Testimonials = [];

async function setTestimonials() {
    try {
        Testimonials = await Testimonial.find();
    } catch (error) {
        console.error('Error setting Testimonials:', error);
    }
}


const getTestimonialList = asyncHandler(async (req, res) => {
    const referer = req.headers.referer;
    // Check if the Referer header matches any of the allowed domains
    const isAllowed = allowedOrigins.some(domain => referer && referer.includes(domain));

    if (isAllowed) {
        if (!fs.existsSync(path.join(__dirname, '..', '..', '..', 'public', 'images', 'testimonials'))) {
            await fs.promises.mkdir(path.join(__dirname, '..', '..', '..', 'public', 'images', 'testimonials'));
        }
        await setTestimonials();
        return res.json({ Testimonials });
    }
    res.status(404);
    throw new Error("Page not found");
});


const renderAddTestimonial = asyncHandler(async (req, res) => {
    if (!fs.existsSync(path.join(__dirname, '..', '..', '..', 'public', 'images', 'testimonials'))) {
        await fs.promises.mkdir(path.join(__dirname, '..', '..', '..', 'public', 'images', 'testimonials'));
    }

    const files = fs.readdirSync(path.join(__dirname, '../../../public/images/testimonials'));
    res.render("testimonial/testimonialNFmt", {
        message: "render Testimonial",
        files,
    });
});


const uploadAddTestimonial = asyncHandler(async (req, res) => {
    // After successful upload, you can redirect or send a response
    const files = fs.readdirSync(path.join(__dirname, '../../../public/images/testimonials'));

    res.json({
        message: 'File uploaded successfully!',
        files
    });
});


//@desc Delete Testimonialimage
//@route DELETE /deleteTestimonial
//access public
const deleteTestimonialImage = asyncHandler((req, res) => {
    // Assuming you have the filename you want to delete
    const imagenameToDelete = req.body.imagenameToDelete;
    
    const filePath = path.join(__dirname, '../../../public/images/testimonials', imagenameToDelete);

    // Check if the file exists before attempting to delete
    if (fs.existsSync(filePath)) {
        // Delete the file
        fs.unlinkSync(filePath);
        res.json({ message: `File ${imagenameToDelete} deleted successfully.` })
    } else {
        console.log(`File ${imagenameToDelete} does not exist.`);
    }
});

module.exports = {
    renderAddTestimonial,
    uploadAddTestimonial,
    getTestimonialList,
    deleteTestimonialImage
};


// const renderAddTestimonial = asyncHandler((req, res) => {
//     res.render("testimonial/addTestimonial", {
//         message: "add Testimonial",
//         Testimonials,
//     });
// });

// const renderUpdateTestimonial = asyncHandler(async (req, res) => {
//     await setTestimonials();
//     res.render("testimonial/updateTestimonial", {
//         message: "update Testimonial",
//         Testimonials,
//     });
// });

// const renderDeleteTestimonial = asyncHandler(async (req, res) => {
//     await setTestimonials();
//     res.render("testimonial/deleteTestimonial", {
//         message: "delete Testimonial",
//         Testimonials,
//     });
// });

// const getTestimonialList = asyncHandler(async (req, res) => {
//     const referer = req.headers.referer;
//     // Check if the Referer header matches any of the allowed domains
//     const isAllowed = allowedOrigins.some(domain => referer && referer.includes(domain));

//     if (isAllowed) {
//         if (!fs.existsSync(path.join(__dirname, '..', '..', '..', 'public', 'images', 'testimonials'))) {
//             await fs.promises.mkdir(path.join(__dirname, '..', '..', '..', 'public', 'images', 'testimonials'));
//         }
//         await setTestimonials();
//         return res.json({ Testimonials });
//     }
//     res.status(404);
//     throw new Error("Page not found");
// });

// const uploadAddTestimonial = asyncHandler(async (req, res) => {
//     const testimonialName = req.body['Testimonial Name'];
//     const testimonialDescription = req.body['Testimonial Description'];

//     Testimonial.create({
//         name: testimonialName,
//         desc: testimonialDescription,
//         photo: req.testimonialImageName
//     })

//     await setTestimonials();
//     // Respond to the client as needed
//     res.json({
//         message: 'Received Testimonial Data',
//         Testimonials
//     });
// });

// const uploadUpdateTestimonial = asyncHandler(async (req, res) => {
//     const testimonialOldName = req.body.updateTestimonialData;
//     const testimonialNewName = req.body.UpdateTestimonialName;
//     const testimonialDescription = req.body.UpdateTestimonialDescription;

//     await Testimonial.findOneAndUpdate(
//         { name: testimonialOldName },
//         { $set: { name: testimonialNewName, desc: testimonialDescription } },
//         { new: true }
//     );

//     await setTestimonials();

//     res.json({
//         message: 'Updated Testimonial Data',
//         Testimonials
//     });

// });

// const uploadDeleteTestimonial = asyncHandler(async (req, res) => {
//     const deleteTestimonial = req.body.deleteTestimonial;
//     const deletedTestimonial = await Testimonial.findOneAndDelete({ name: deleteTestimonial });

//     if (deletedTestimonial) {
//         const photoPath = path.join(__dirname, '../../../public/images/testimonials', deletedTestimonial.photo);
//         if (fs.existsSync(photoPath)) {
//             fs.unlinkSync(photoPath);
//         } else {
//             console.log(`File ${photoPath} does not exist.`);
//         }
//     } else {
//         console.log('Testimonial not found or already deleted.');
//     }
//     await setTestimonials();

//     res.json({
//         message: `File ${deletedTestimonial.photo} deleted successfully.`,
//         Testimonials
//     });

// });


// module.exports = {
//     renderAddTestimonial, renderUpdateTestimonial, renderDeleteTestimonial,
//     getTestimonialList, uploadAddTestimonial, uploadUpdateTestimonial, uploadDeleteTestimonial
// };