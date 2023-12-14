const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require('multer');
const dataflow = multer();

const { renderAddTestimonial, renderUpdateTestimonial, renderDeleteTestimonial,
    getTestimonialList, uploadAddTestimonial, uploadUpdateTestimonial, uploadDeleteTestimonial
} = require("../controllers/adminControllers/testimonialController");
const validateToken = require("../util/middleware/validateTokenHandler");

const testimonialStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/testimonials'));
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + path.extname(file.originalname);
        req.testimonialImageName = fileName;
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const testimonialUpload = multer({ storage: testimonialStorage });

router.route("/gettestimoniallist").get(getTestimonialList);

router.use(validateToken);

router.post("/uploadAddTestimonial", testimonialUpload.single('TestimonialPhoto'), uploadAddTestimonial);

router.route("/addTestimonial").get(renderAddTestimonial);

router.put("/uploadUpdateTestimonial", dataflow.any(), uploadUpdateTestimonial);

router.route("/updateTestimonial").get(renderUpdateTestimonial);

router.delete("/uploadDeleteTestimonial", dataflow.any(), uploadDeleteTestimonial);

router.route("/deleteTestimonial").get(renderDeleteTestimonial);

module.exports = router;