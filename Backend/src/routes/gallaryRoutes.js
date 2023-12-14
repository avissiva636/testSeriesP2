const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require('multer');
const dataflow = multer();

const { renderAddPhoto, renderAddVideo,
    uploadImage, getphotolist, deleteImage,
    getvideolist, uploadVideo, deleteVideo } = require("../controllers/adminControllers/gallaryController")
const validateToken = require("../util/middleware/validateTokenHandler");

// Set up storage using multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/photo'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.route("/getphotolist").get(getphotolist);

router.get('/getvideolist', getvideolist);

router.use(validateToken);

// Handle the file upload
router.post('/upload', upload.single('image'), uploadImage);

router.route("/addPhoto").get(renderAddPhoto);

router.route("/deletePhoto").delete(dataflow.any(), deleteImage);


router.post('/uploadVideo', dataflow.any(), uploadVideo);

router.route("/addVideo").get(renderAddVideo);

router.route("/deleteVideo").delete(dataflow.any(), deleteVideo);

module.exports = router;