const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require('multer');
const dataflow = multer();

const { renderAddPhoto, renderAddVideo,
    uploadImage, getphotolist, deleteImage,
    getvideolist, uploadVideo, deleteVideo } = require("../controllers/adminControllers/gallaryController")


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
// Handle the file upload
router.post('/upload', upload.single('image'), uploadImage);

router.route("/getphotolist").get(getphotolist);

router.route("/addPhoto").get(renderAddPhoto);

router.route("/deletePhoto").post(dataflow.any(), deleteImage);

router.get('/getvideolist', getvideolist);

router.post('/uploadVideo', dataflow.any(), uploadVideo);

router.route("/addVideo").get(renderAddVideo);

router.route("/deleteVideo").post(dataflow.any(), deleteVideo);

module.exports = router;