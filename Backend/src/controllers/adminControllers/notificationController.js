const asyncHandler = require("express-async-handler");
const { notificationModel: Notification } = require("../../database/index");
const allowedOrigins = require("../../config/allowedOrigins");

let NotificationList = [];
async function setNotificationList() {
    try {
        const retrievedNotification = await Notification.find();
        NotificationList = retrievedNotification;
    } catch (error) {
        console.error('Error setting NotificationList:', error);
    }
}

//@desc Display the addNotification page
//@route GET /addNotification
//access public
const renderaddNotification = asyncHandler((req, res) => {
    res.render("notification/addNotification", {
        message: "add Notification",
    });
});

//@desc Display the updateNotification page
//@route GET /updateNotification
//access public
const renderupdateNotification = asyncHandler((req, res) => {
    res.render("notification/updateNotification", {
        message: "update Notification",
        NotificationList,
    });
});

//@desc Display the deleteNotification page
//@route GET /deleteNotification
//access public
const renderdeleteNotification = asyncHandler((req, res) => {
    res.render("notification/deleteNotification", {
        message: "delete Notification",
        NotificationList,
    });
});

//@desc Get all Notifications
//@route GET /getNotificationList
//access public
const getNotificationList = asyncHandler(async (req, res) => {
    const referer = req.headers.referer;
    // // Check if the Referer header matches any of the allowed domains
    const isAllowed = allowedOrigins.some(domain => referer && referer.includes(domain));

    if (isAllowed) {
        await setNotificationList();
        return res.json({ NotificationList });
    }

    res.status(404);
    throw new Error("Page not found");
});

//@desc Add Notification
//@route POST /uploadAddNotification
//access public
const uploadAddNotification = asyncHandler(async (req, res) => {
    const notificationName = req.body.notificationName;
    const notificationDescription = req.body.notificationDescription;

    await Notification.create({
        name: notificationName,
        description: notificationDescription
    })
    await setNotificationList();

    res.json({
        message: 'Received Notification Data',
        NotificationList
    });
});

//@desc Update Notification
//@route POST /uploadUpdateNotification
//access public
const uploadUpdateNotification = asyncHandler(async (req, res) => {
    const notificationOldName = req.body.updateNotificationData;
    const UpdateNotificationName = req.body.UpdateNotificationName;
    const UpdateNotificationDescription = req.body.UpdateNotificationDescription;

    await Notification.findOneAndUpdate(
        { name: notificationOldName },
        { $set: { name: UpdateNotificationName, description: UpdateNotificationDescription } },
        { new: true }
    );

    await setNotificationList();
    res.json({
        message: 'Received Notification Data',
        NotificationList
    });
});

//@desc Delete Notification
//@route POST /uploadDeleteNotification
//access public
const uploadDeleteNotification = asyncHandler(async (req, res) => {
    const deleteNotification = req.body.deleteNotification;

    await Notification.findOneAndDelete({ name: deleteNotification });
    await setNotificationList();

    res.json({
        message: "Notification Deleted",
        NotificationList
    });
});

module.exports = {
    renderaddNotification, renderupdateNotification, renderdeleteNotification,
    getNotificationList, uploadAddNotification, uploadUpdateNotification, uploadDeleteNotification
};