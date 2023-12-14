const express = require("express");
const router = express.Router();

const { renderaddNotification, renderupdateNotification, renderdeleteNotification,
    getNotificationList,
    uploadAddNotification, uploadUpdateNotification, uploadDeleteNotification } = require("../controllers/adminControllers/notificationController");
const validateToken = require("../util/middleware/validateTokenHandler");

router.route("/getNotificationList").get(getNotificationList);

router.use(validateToken);

router.route("/addNotification").get(renderaddNotification);

router.post("/uploadAddNotification", uploadAddNotification);

router.put("/uploadUpdateNotification", uploadUpdateNotification);

router.route("/updateNotification").get(renderupdateNotification);

router.delete("/uploadDeleteNotification", uploadDeleteNotification);

router.route("/deleteNotification").get(renderdeleteNotification);

module.exports = router;