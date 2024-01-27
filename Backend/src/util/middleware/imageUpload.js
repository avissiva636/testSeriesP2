const path = require("path");
const fs = require('fs');
const multer = require('multer');
const dataflow = multer();

// Testimonial
const testimonialStorage = multer.diskStorage({
    destination: async function (req, file, cb) {
        if (!fs.existsSync(path.join(__dirname, '..','..','..','public','images','testimonials'))) {   
            console.log("hello testimonial")        ;
            await fs.promises.mkdir(path.join(__dirname, '..','..','..','public','images','testimonials'));
        }
        cb(null, path.join(__dirname, '../../../public/images/testimonials'));
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + path.extname(file.originalname);
        req.testimonialImageName = fileName;
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const testimonialUpload = multer({ storage: testimonialStorage });

// Product
const productStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../../public/images/products'));
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + path.extname(file.originalname);
        req.productImageNames = req.productImageNames || []; // Initialize an array if not present
        req.productImageNames.push(fileName);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const productUpload = multer({ storage: productStorage });

// Gallery image
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../../public/images/photo'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

module.exports = { testimonialUpload, productUpload, upload, dataPass: dataflow.any() };