const asyncHandler = require("express-async-handler");
const { videoModel: Video } = require("../../database/index");
const fs = require('fs');
const path = require("path");

let videoEidList = [];
async function setvideoEidList() {
    try {
        const retrievedVideo = await Video.find();
        videoEidList = retrievedVideo;
    } catch (error) {
        console.error('Error setting videoEidList:', error);
    }
}

//@desc Display the addPhoto page
//@route GET /addPhoto
//access public
const renderAddPhoto = asyncHandler(async (req, res) => {
    if (!fs.existsSync(path.join(__dirname, '..','..','..','public','images','photo'))) {           
        await fs.promises.mkdir(path.join(__dirname, '..','..','..','public','images','photo'));
    }

    const files = fs.readdirSync(path.join(__dirname, '../../../public/images/photo'));
    res.render("gallery/addPhoto", {
        message: "Add photo",
        files,
    });
});

//@desc Display the addVideo page
//@route GET /addVideo
//access public
const renderAddVideo = asyncHandler(async (req, res) => {
    await setvideoEidList();
    res.render("gallery/addVideo", {
        message: "add video",
        videos: videoEidList,
    });
});

//@desc Get all images
//@route GET /getphotolist
//access public
const getphotolist = asyncHandler((req, res) => {
    const files = fs.readdirSync(path.join(__dirname, '../../../public/images/photo'));
    res.json({ files });
})

//@desc Add image in the respective place
//@route POST /upload
//access public
const uploadImage = asyncHandler((req, res) => {
    // After successful upload, you can redirect or send a response
    const files = fs.readdirSync(path.join(__dirname, '../../../public/images/photo'));

    res.json({
        message: 'File uploaded successfully!',
        files
    });
});

//@desc Delete image
//@route POST /deletePhoto
//access public
const deleteImage = asyncHandler((req, res) => {
    // Assuming you have the filename you want to delete
    const imagenameToDelete = req.body.imagenameToDelete;

    res.json({ message: req.body })
    const filePath = path.join(__dirname, '../../../public/images/photo', imagenameToDelete);

    // Check if the file exists before attempting to delete
    if (fs.existsSync(filePath)) {
        // Delete the file
        fs.unlinkSync(filePath);
        res.json({ message: `File ${imagenameToDelete} deleted successfully.` })
    } else {
        console.log(`File ${imagenameToDelete} does not exist.`);
    }
});

//@desc Get all videos
//@route GET /getvideolist
//access public
const getvideolist = asyncHandler(async (req, res) => {
    await setvideoEidList()
    res.json({
        videos: videoEidList,
    });
});

//@desc Add video
//@route POST /uploadVideo
//access public
const uploadVideo = asyncHandler(async (req, res) => {
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

//@desc Delete video
//@route POST /deleteVideo
//access public
const deleteVideo = asyncHandler(async (req, res) => {
    const videoIdToDelete = req.body.videoIdToDelete;

    await Video.deleteOne({ _id: videoIdToDelete })

    await setvideoEidList()
    res.json({
        message: "Video Deleted",
        videoEidList: videoEidList
    })
});


module.exports = {
    renderAddPhoto, renderAddVideo,
    uploadImage, getphotolist, deleteImage,
    getvideolist, uploadVideo, deleteVideo
}