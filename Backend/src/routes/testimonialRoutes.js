const express = require("express");
const router = express.Router();

const { renderAddTestimonial, renderUpdateTestimonial, renderDeleteTestimonial,
    getTestimonialList, uploadAddTestimonial, uploadUpdateTestimonial, uploadDeleteTestimonial
} = require("../controllers/adminControllers/testimonialController");

const {testimonialUpload,dataPass} = require("../util/middleware/imageUpload");

const validateToken = require("../util/middleware/validateTokenHandler");


router.route("/gettestimoniallist").get(getTestimonialList);

router.use(validateToken);

router.post("/uploadAddTestimonial", testimonialUpload.single('TestimonialPhoto'), uploadAddTestimonial);

router.route("/addTestimonial").get(renderAddTestimonial);

router.put("/uploadUpdateTestimonial", dataPass, uploadUpdateTestimonial);

router.route("/updateTestimonial").get(renderUpdateTestimonial);

router.delete("/uploadDeleteTestimonial", dataPass, uploadDeleteTestimonial);

router.route("/deleteTestimonial").get(renderDeleteTestimonial);

module.exports = router;