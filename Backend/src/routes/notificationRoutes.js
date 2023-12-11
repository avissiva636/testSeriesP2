const express = require("express");
const router = express.Router();

const {renderaddNotification, renderupdateNotification, renderdeleteNotification,
    getNotificationList, 
    uploadAddNotification, uploadUpdateNotification, uploadDeleteNotification} = require("../controllers/adminControllers/notificationController");

router.route("/addNotification").get(renderaddNotification);

router.route("/getNotificationList").get(getNotificationList);

router.post("/uploadAddNotification", uploadAddNotification);

router.post("/uploadUpdateNotification", uploadUpdateNotification);

router.route("/updateNotification").get(renderupdateNotification);

router.post("/uploadDeleteNotification", uploadDeleteNotification);

router.route("/deleteNotification").get(renderdeleteNotification);

module.exports = router;