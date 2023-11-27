const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require("path");

const { courseModel: Course } = require("../database/index");
const { productModel: Product } = require("../database/index");
const { videoModel: Video } = require("../database/index");
const { testimonialsModel: Testimonial } = require("../database/index");

// let CourseList = [
//     {
//         Title: "IAS",
//         Description: { "ops": [{ "insert": "IASdes\n" }] },
//     },
//     {
//         Title: "KAS",
//         Description: { "ops": [{ "insert": "KASdes\n" }] },
//     },
//     {
//         Title: "SAAD",
//         Description: { "ops": [{ "insert": "SAADdes\n" }] },
//     },
//     {
//         Title: "KPSC Prelims",
//         SubTitle: [
//             {
//                 Title: "CTI",
//                 Description: { "ops": [{ "insert": "CTIdes\n" }] },
//             },
//             {
//                 Title: "AE/JE",
//                 Description: { "ops": [{ "insert": "AE/JEdes\n" }] },
//             },
//             {
//                 Title: "Group C",
//                 Description: { "ops": [{ "insert": "Group Cdes\n" }] },
//             },
//         ],
//     },
// ];

// let CourseList = []
// async function setCourseList() {
//     Course.find()
//         .then((retrievedCourse) => { CourseList = retrievedCourse; })
//         .catch((error) => { console.log('Error setting CourseList:', error) });
// }
// setCourseList();

let CourseList = []
async function setCourseList() {
    try {
        const retrievedCourse = await Course.find();
        CourseList = retrievedCourse;
    } catch (error) {
        console.error('Error setting CourseList:', error);
    }
}

setCourseList();

// let productList = [
//     {
//         mainProduct: "KAS Mains notes",
//         subProducts: [
//             { name: "Subproduct 1", link: "wrotea" },
//             { name: "Subproduct 2", link: "wroteb" },
//             { name: "Subproduct 3", link: "wrotec" },
//         ],
//     },
//     {
//         mainProduct: "KAS Prelims notes",
//         subProducts: [
//             { name: "Subproduct A", link: "dheara" },
//             { name: "Subproduct B", link: "dhearb" },
//             { name: "Subproduct C", link: "dhearc" },
//         ],
//     },
//     {
//         mainProduct: "Current affairs magazines",
//         subProducts: [
//             { name: "Subproduct X", link: "goodlea" },
//             { name: "Subproduct Y", link: "goodleb" },
//             { name: "Subproduct Z", link: "goodlec" },
//         ],
//     },
//     {
//         mainProduct: "SAAD Material",
//         subProducts: [
//             { name: "Subproduct I", link: "youtubea" },
//             { name: "Subproduct II", link: "youtubeb" },
//             { name: "Subproduct III", link: "youtubec" },
//         ],
//     },
//     {
//         mainProduct: "KPSC Group C Material",
//         subProducts: [
//             { name: "Subproduct Alpha", link: "gmaila" },
//             { name: "Subproduct Beta", link: "gmailb" },
//             { name: "Subproduct Gama", link: "gmailc" },
//         ],
//     },
//     {
//         mainProduct: "PSI/ ESI Material",
//         subProducts: [
//             { name: "Subproduct 4", link: "checka" },
//             { name: "Subproduct 5", link: "checkb" },
//             { name: "Subproduct 6", link: "checkc" },
//         ],
//     },
//     {
//         mainProduct: "FDA & SDA Material",
//         subProducts: [
//             { name: "Subproduct 11", link: "materiala" },
//             { name: "Subproduct 12", link: "materialb" },
//             { name: "Subproduct 13", link: "materialc" },
//         ],
//     },
// ];

let productList = []
async function setProductList() {
    try {
        const retrievedProduct = await Product.find();
        productList = retrievedProduct;
    } catch (error) {
        console.error('Error setting productList:', error);
    }
}

setProductList();

// let Testimonials = [
//     {
//         name: "vijay",
//         desc: "I came here to get some help with my prelims. Individual guidance is quite beneficial.I was able to complete the syllabus according to the schedule.Worth for money.",
//         photo: "images/testimonials/4.jpg"
//     }
// ];

let Testimonials = [];

async function setTestimonials() {
    try {
        const retrievedTestimonial = await Testimonial.find();
        Testimonials = retrievedTestimonial;
    } catch (error) {
        console.error('Error setting Testimonials:', error);
    }
}
setTestimonials();

// let videoEidList = ['9dhAEj7bZ28'];
let videoEidList = [];
async function setvideoEidList() {
    try {
        const retrievedVideo = await Video.find();
        videoEidList = retrievedVideo;
    } catch (error) {
        console.error('Error setting videoEidList:', error);
    }
}
setvideoEidList()

const multer = require('multer');
const dataflow = multer();

router.route("/").get((req, res) => {
    res.status(200).render("adminHome", {
        message: "adminHome",
    });
    // res.status(200).json({message:"hello"});
})

// Testing View
router.route("/test").get((req, res) => {
    res.render("test", {
        message: "update",
        // CourseList:[{ Title: 'Sample Course' }],
    });
})

router.route("/getCourseList").get(async (req, res) => {
    await setCourseList()
    res.json({ CourseList });
})

router.route("/addCourseNormalList").post(dataflow.any(), async (req, res) => {
    const data = {
        Title: req.body.Title,
        Description: JSON.parse(req.body.Description)
    };

    CourseList.push(data);

    await Course.create({
        Title: data.Title,
        Description: data.Description,
    });

    res.json({
        message: "Course Data Updated",
        CourseList,
        formdata: req.body
    });
})

router.route("/addCourseSubList").post(dataflow.any(), async (req, res) => {
    const data = {
        Title: req.body.Title,
        SubTitle: JSON.parse(req.body.SubTitle)
    }
    await Course.create({
        Title: data.Title,
        SubTitle: data.SubTitle,
    });

    CourseList.push(data);
    res.json({
        message: "Course Data Updated",
        CourseList,
    });
})

router.route("/addCourse").get((req, res) => {
    res.render("courses/addCourse", {
        message: "add Course",
        CourseList,
    });
})

router.route("/uploadUpdateCourseList").post(dataflow.any(), async (req, res) => {
    // const data = req.body;
    // CourseList = JSON.parse(req.body.CourseList);
    const selectedCourse = JSON.parse(req.body.selectedCourse);
    const updateDescription = JSON.parse(req.body.updateDescription);

    await Course.findOneAndUpdate({ Title: selectedCourse }, { Description: updateDescription });
    await setCourseList()

    res.json({
        message: "Course Description Updated",
        CourseList
    });
})

router.route("/updateCourseSubList").post(dataflow.any(), async (req, res) => {
    const updateCourseList = JSON.parse(req.body.updateCourseList);

    for (const ucourse of updateCourseList) {
        try {
            // Check if SubTitle exists
            const existingCourse = await Course.findOne({ Title: ucourse.Title, "SubTitle.Title": ucourse.SubTitle.Title });

            if (existingCourse) {
                // SubTitle exists, update it
                await Course.updateOne(
                    { Title: ucourse.Title, "SubTitle.Title": ucourse.SubTitle.Title },
                    {
                        $set: {
                            "SubTitle.$": ucourse.SubTitle,
                        },
                    }
                );
            } else {
                // SubTitle doesn't exist, add it
                await Course.updateOne(
                    { Title: ucourse.Title },
                    {
                        $addToSet: {
                            SubTitle: ucourse.SubTitle,
                        },
                    },
                    { upsert: true }
                );
            }
        } catch (err) {
            console.error(`Error updating document: ${err}`);
        }
    }

    // setCourseList()

    res.json({
        message: "Course Data Updated",
        CourseList: CourseList
    });
})

router.route("/updateCourse").get((req, res) => {
    res.render("courses/updateCourse", {
        message: "update Course",
        CourseList: CourseList,
    });
})

router.route("/deleteNormalCourseList").post(dataflow.any(), async (req, res) => {
    const DeleteData = JSON.parse(req.body.DeleteData);
    // CourseList = JSON.parse(req.body.CourseList);
    await Course.deleteOne({ Title: DeleteData });
    await setCourseList();

    res.json({
        message: "Normal Course Data Deleted",
        CourseList
    });
})

router.route("/deleteSubCourseList").post(dataflow.any(), async (req, res) => {
    const coursetoDelete = JSON.parse(req.body.coursetoDelete);
    const selectedsubCourses = JSON.parse(req.body.selectedValues);

    try {
        for (const dcourse of selectedsubCourses) {

            console.log(dcourse)
            await Course.findOneAndUpdate(
                { Title: coursetoDelete },
                { $pull: { SubTitle: { Title: dcourse } } },
                { new: true }
            );
        }
    } catch (err) {
        console.error(`Error updating document: ${err}`);
    }

    await setCourseList();

    res.json({
        message: "Course Data Deleted",
        CourseList
    });
})

router.route("/deleteCourse").get((req, res) => {
    res.render("courses/deleteCourse", {
        message: "delete Course",
        CourseList: CourseList,
    });
})

router.route("/getProductList").get((req, res) => {
    res.json({ productList });
})

router.route("/addProductList").post(dataflow.any(), async (req, res) => {
    const data = {
        mainProduct: req.body.mainProduct,
        subProducts: JSON.parse(req.body.subProducts)
    }

    await Product.create({
        mainProduct: data.mainProduct,
        subProducts: data.subProducts,
    })

    productList.push(data);
    res.json({
        message: "Product Data Updated",
        productList,
    });
})

router.route("/addProduct").get((req, res) => {
    res.render("products/addProduct", {
        message: "delete Course",
        productList: productList,
    });
})

router.route("/updateProductList").post(dataflow.any(), async (req, res) => {

    const updateProductList = JSON.parse(req.body.updateProductList);

    for (const uproduct of updateProductList) {
        try {
            // Check if SubTitle exists
            const existingProduct = await Product.findOne({ mainProduct: uproduct.mainProduct, "subProducts.name": uproduct.subProducts.name });

            if (existingProduct) {
                // SubTitle exists, update it
                await Product.updateOne(
                    { mainProduct: uproduct.mainProduct, "subProducts.name": uproduct.subProducts.name },
                    {
                        $set: {
                            "subProducts.$": uproduct.subProducts,
                        },
                    }
                );
            } else {
                // SubTitle doesn't exist, add it
                await Product.updateOne(
                    { mainProduct: uproduct.mainProduct },
                    {
                        $addToSet: {
                            subProducts: uproduct.subProducts,
                        },
                    },
                    { upsert: true }
                );
            }
        } catch (err) {
            console.error(`Error updating document: ${err}`);
        }
    }

    await setProductList();

    res.json({
        message: "Product Data Updated",
        productList,
    });
})

router.route("/updateProduct").get((req, res) => {
    res.render("products/updateProduct", {
        message: "delete Course",
        productList: productList,
    });
})

router.route("/deleteProductList").post(dataflow.any(), async (req, res) => {
    const producttoDelete = JSON.parse(req.body.producttoDelete);
    const category = req.body.category;
    if (category === "MAIN") {
        await Product.deleteOne({ mainProduct: producttoDelete });
    }
    else if (category === "SUB") {
        const subProduct = JSON.parse(req.body.subProduct);
        try {
            for (const dproduct of subProduct) {
                await Product.findOneAndUpdate(
                    { mainProduct: producttoDelete },
                    { $pull: { subProducts: { name: dproduct } } },
                    { new: true }
                );
            }
        } catch (err) {
            console.error(`Error updating document: ${err}`);
        }
    }

    await setProductList();

    res.json({
        message: "Product Data Deleted",
        productList,
    });
})

router.route("/deleteProduct").get((req, res) => {
    res.render("products/deleteProduct", {
        message: "delete Course",
        productList: productList,
    });
})

// router.route("/addPhoto").get((req, res) => {
//     res.render("gallary/addPhoto", {
//         message: "add photo",
//         files: ["2.jpg","3.jpeg"],
//     });
// })


// Set up storage using multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });
// Handle the file upload
router.post('/upload', upload.single('image'), (req, res) => {
    // After successful upload, you can redirect or send a response

    const files = fs.readdirSync(path.join(__dirname, '../../public/images'));

    let index = files.indexOf('testimonials');
    if (index !== -1) {
        files.splice(index, 1);
    }

    res.json({
        message: 'File uploaded successfully!',
        files
    });
});

router.route("/addPhoto").get((req, res) => {
    try {
        const files = fs.readdirSync(path.join(__dirname, '../../public/images'));

        //To skip the testimonials folder
        let index = files.indexOf('testimonials');
        if (index !== -1) {
            files.splice(index, 1);
        }

        res.render("gallery/addPhoto", {
            message: "Add photo",
            files,
        });
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

router.route("/deletePhoto").post(dataflow.any(), (req, res) => {

    // Assuming you have the filename you want to delete
    const imagenameToDelete = req.body.imagenameToDelete;

    res.json({ message: req.body })
    const filePath = path.join(__dirname, '../../public/images', imagenameToDelete);

    // Check if the file exists before attempting to delete
    if (fs.existsSync(filePath)) {
        // Delete the file
        fs.unlinkSync(filePath);
        res.json({ message: `File ${imagenameToDelete} deleted successfully.` })
    } else {
        console.log(`File ${imagenameToDelete} does not exist.`);
    }

})

router.post('/uploadVideo', dataflow.any(), async (req, res) => {
    // After successful upload, you can redirect or send a response
    const videoId = req.body.videoId;

    // videoEidList.push(videoId);
    await Video.create({ videoid: videoId })
    await setvideoEidList()

    res.json({
        message: 'video Id successfully!',
        videos: videoEidList,
    });
});

router.route("/addVideo").get((req, res) => {
    res.render("gallery/addVideo", {
        message: "add video",
        videos: videoEidList,
    });
})

router.route("/deleteVideo").post(dataflow.any(), async (req, res) => {

    // Assuming you have the filename you want to delete
    const videoIdToDelete = req.body.videoIdToDelete;

    await Video.deleteOne({ _id: videoIdToDelete })

    await setvideoEidList()

    // videoEidList = videoEidList.filter(item => item !== videoIdToDelete);
    res.json({
        message: "Video Deleted",
        videoEidList: videoEidList
    })
})

const testimonialStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/testimonials'));
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + path.extname(file.originalname);
        req.testimonialImagePath = path.join(__dirname, '../../public/images/testimonials', fileName);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

router.route("/gettestimoniallist").get((req, res) => {
    res.json({ Testimonials });
})

const testimonialUpload = multer({ storage: testimonialStorage });
router.post("/uploadAddTestimonial", testimonialUpload.single('TestimonialPhoto'), async (req, res) => {
    try {
        const testimonialName = req.body['Testimonial Name'];
        const testimonialDescription = req.body['Testimonial Description'];

        // Testimonials.push({
        //     name: testimonialName,
        //     desc: testimonialDescription,
        //     photo: req.testimonialImagePath
        // })

        Testimonial.create({
            name: testimonialName,
            desc: testimonialDescription,
            photo: req.testimonialImagePath
        })

        await setTestimonials();

    } catch (error) {
        console.log(error.message)
    }
    // Respond to the client as needed
    res.json({
        message: 'Received Testimonial Data',
        Testimonials
    });
})

router.route("/addTestimonial").get((req, res) => {
    res.render("testimonial/addTestimonial", {
        message: "add Testimonial",
        Testimonials,
    });
})

router.post("/uploadUpdateTestimonial", dataflow.any(), async (req, res) => {

    try {
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
    } catch (error) {
        console.log(error.message)
    }
})

router.route("/updateTestimonial").get((req, res) => {
    res.render("testimonial/updateTestimonial", {
        message: "update Testimonial",
        Testimonials,
    });
})

router.post("/uploadDeleteTestimonial", dataflow.any(), async (req, res) => {
    try {
        const deleteTestimonial = req.body.deleteTestimonial;
        // const indexToRemove = Testimonials.findIndex(testimonial => testimonial.name === deleteTestimonial);

        const deletedTestimonial = await Testimonial.findOneAndDelete({ name: deleteTestimonial });
        // const deletedTestimonial = await Testimonial.findOne({ name: deleteTestimonial });

        if (deletedTestimonial) {
            const photoPath = deletedTestimonial.photo;
            console.log(photoPath)
            if (fs.existsSync(photoPath)) {
                // Delete the file
                console.log("executing")
                fs.unlinkSync(photoPath);
            } else {
                console.log(`File ${photoPath} does not exist.`);
            }
            console.log('Deleted Testimonial:', deletedTestimonial);
        } else {
            console.log('Testimonial not found or already deleted.');
        }
        await setTestimonials();

        // Respond to the client as needed
        res.json({
            message: `File ${deletedTestimonial.photo} deleted successfully.`,
            Testimonials
        });


        // Testimonials.splice(indexToRemove, 1)

        // // Check if the file exists before attempting to delete
    } catch (error) {
        console.log("error", error.message)
    }
})

router.route("/deleteTestimonial").get((req, res) => {
    res.render("testimonial/deleteTestimonial", {
        message: "delete Testimonial",
        Testimonials,
    });
})


module.exports = router;