const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require("path");

let CourseList = [
    {
        Title: "IAS",
        Description: "IAS",
    },
    {
        Title: "KAS",
        Description: "KAS",
    },
    {
        Title: "SAAD",
        Description: "SAAD",
    },
    {
        Title: "KPSC Prelims",
        SubTitle: [
            {
                Title: "CTI",
                Description: "CTI",
            },
            {
                Title: "AE/JE",
                Description: "AE/JE",
            },
            {
                Title: "Group C",
                Description: "Group C",
            },
        ],
    },
];

let productList = [
    {
        mainProduct: "KAS Mains notes",
        subProducts: [
            { name: "Subproduct 1", link: "wrotea" },
            { name: "Subproduct 2", link: "wroteb" },
            { name: "Subproduct 3", link: "wrotec" },
        ],
    },
    {
        mainProduct: "KAS Prelims notes",
        subProducts: [
            { name: "Subproduct A", link: "dheara" },
            { name: "Subproduct B", link: "dhearb" },
            { name: "Subproduct C", link: "dhearc" },
        ],
    },
    {
        mainProduct: "Current affairs magazines",
        subProducts: [
            { name: "Subproduct X", link: "goodlea" },
            { name: "Subproduct Y", link: "goodleb" },
            { name: "Subproduct Z", link: "goodlec" },
        ],
    },
    {
        mainProduct: "SAAD Material",
        subProducts: [
            { name: "Subproduct I", link: "youtubea" },
            { name: "Subproduct II", link: "youtubeb" },
            { name: "Subproduct III", link: "youtubec" },
        ],
    },
    {
        mainProduct: "KPSC Group C Material",
        subProducts: [
            { name: "Subproduct Alpha", link: "gmaila" },
            { name: "Subproduct Beta", link: "gmailb" },
            { name: "Subproduct Gama", link: "gmailc" },
        ],
    },
    {
        mainProduct: "PSI/ ESI Material",
        subProducts: [
            { name: "Subproduct 4", link: "checka" },
            { name: "Subproduct 5", link: "checkb" },
            { name: "Subproduct 6", link: "checkc" },
        ],
    },
    {
        mainProduct: "FDA & SDA Material",
        subProducts: [
            { name: "Subproduct 11", link: "materiala" },
            { name: "Subproduct 12", link: "materialb" },
            { name: "Subproduct 13", link: "materialc" },
        ],
    },
];

const Testimonials = [
    {
        name: "vijay",
        desc: "I came here to get some help with my prelims. Individual guidance is quite beneficial.I was able to complete the syllabus according to the schedule.Worth for money.",
        photo: "images/testimonials/4.jpg"
    }
];

let videoEidList = ['9dhAEj7bZ28'];
const multer = require('multer');
const dataflow = multer();

router.route("/").get((req, res) => {
    res.render("adminHome", {
        message: "update",
        CourseList: [{ Title: 'Sample Course' }],
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

router.route("/getCourseList").get((req, res) => {
    res.json({ CourseList });
})

router.route("/addCourseNormalList").post(dataflow.any(), (req, res) => {
    const data = req.body;
    CourseList.push(data);
    console.log("make api request for databasechange");
    res.json({
        message: "Course Data Updated",
        CourseList,
        formdata: req.body
    });
})

router.route("/addCourseSubList").post(dataflow.any(), (req, res) => {
    const data = {
        Title: req.body.Title,
        SubTitle: JSON.parse(req.body.SubTitle)
    }


    CourseList.push(data);
    console.log("make api request for databasechange");
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

router.route("/updateCourse").get((req, res) => {
    res.render("courses/updateCourse", {
        message: "update Course",
        CourseList: CourseList,
    });
})

router.route("/deleteCourse").get((req, res) => {
    res.render("courses/deleteCourse", {
        message: "delete Course",
        CourseList: CourseList,
    });
})

router.route("/addProduct").get((req, res) => {
    res.render("products/addProduct", {
        message: "delete Course",
        productList: productList,
    });
})

router.route("/updateProduct").get((req, res) => {
    res.render("products/updateProduct", {
        message: "delete Course",
        productList: productList,
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

router.post('/uploadVideo', dataflow.any(), (req, res) => {
    // After successful upload, you can redirect or send a response

    const videoId = req.body.videoId;
    videoEidList.push(videoId);

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

const testimonialUpload = multer({ storage: testimonialStorage });
router.post("/uploadAddTestimonial", testimonialUpload.single('TestimonialPhoto'), (req, res) => {
    try {
        const testimonialName = req.body['Testimonial Name'];
        const testimonialDescription = req.body['Testimonial Description'];

        Testimonials.push({
            name: testimonialName,
            desc: testimonialDescription,
            photo: req.testimonialImagePath
        })
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

router.route("/updateTestimonial").get((req, res) => {
    res.render("testimonial/updateTestimonial", {
        message: "update Testimonial",
        Testimonials,
    });
})

router.route("/deleteTestimonial").get((req, res) => {
    res.render("testimonial/deleteTestimonial", {
        message: "delete Testimonial",
        Testimonials,
    });
})


module.exports = router;