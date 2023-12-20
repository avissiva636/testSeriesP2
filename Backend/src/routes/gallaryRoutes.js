const express = require("express");
const router = express.Router();

const { renderAddPhoto, renderAddVideo,
    uploadImage, getphotolist, deleteImage,
    getvideolist, uploadVideo, deleteVideo } = require("../controllers/adminControllers/gallaryController")
const validateToken = require("../util/middleware/validateTokenHandler");

const { upload, dataPass } = require("../util/middleware/imageUpload");

router.route("/getphotolist").get(getphotolist);

router.get('/getvideolist', getvideolist);

router.use(validateToken);

// Handle the file upload
router.post('/upload', upload.single('image'), uploadImage);

router.route("/addPhoto").get(renderAddPhoto);

router.route("/deletePhoto").delete(dataPass, deleteImage);


router.post('/uploadVideo', dataPass, uploadVideo);

router.route("/addVideo").get(renderAddVideo);

router.route("/deleteVideo").delete(dataPass, deleteVideo);

module.exports = router;