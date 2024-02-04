const express = require("express");
const router = express.Router();

const { renderAddTestimonial,
    uploadAddTestimonial, deleteTestimonialImage,
    getTestimonialList
} = require("../controllers/adminControllers/testimonialController")
const validateToken = require("../util/middleware/validateTokenHandler");

const { testimonialUpload, dataPass } = require("../util/middleware/imageUpload");

router.route("/getTestimonialList").get(getTestimonialList);


router.use(validateToken);

// Handle the file upload
router.post('/uploadAddTestimonial', testimonialUpload.single('TestimonialPhoto'), uploadAddTestimonial);

router.route("/addTestimonial").get(renderAddTestimonial);

router.route("/deleteTestimonial").delete(dataPass, deleteTestimonialImage);

module.exports = router;




// const express = require("express");
// const router = express.Router();

// const { renderAddTestimonial, renderUpdateTestimonial, renderDeleteTestimonial,
//     getTestimonialList, uploadAddTestimonial, uploadUpdateTestimonial, uploadDeleteTestimonial
// } = require("../controllers/adminControllers/testimonialController");

// const {testimonialUpload,dataPass} = require("../util/middleware/imageUpload");

// const validateToken = require("../util/middleware/validateTokenHandler");


// router.route("/gettestimoniallist").get(getTestimonialList);

// router.use(validateToken);

// router.post("/uploadAddTestimonial", testimonialUpload.single('TestimonialPhoto'), uploadAddTestimonial);

// router.route("/addTestimonial").get(renderAddTestimonial);

// router.put("/uploadUpdateTestimonial", dataPass, uploadUpdateTestimonial);

// router.route("/updateTestimonial").get(renderUpdateTestimonial);

// router.delete("/uploadDeleteTestimonial", dataPass, uploadDeleteTestimonial);

// router.route("/deleteTestimonial").get(renderDeleteTestimonial);

// module.exports = router;