//updateCourse
let NotificationList = [];
// let updateCourseList = [];

function fetchNotificationData() {
    return fetch('/getNotificationList')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Assuming the response is in JSON format
        })
        .then(data => {
            NotificationList = data.NotificationList;
            // Now you can use the NotificationList array with the fetched data
        })
        .catch(error => {
            // Handle errors that occurred during the fetch
            console.error('Error during fetch:', error);
        });
}

// Call the function to initiate the fetch operation
fetchNotificationData();

function handleAddNotificationSubmit(event) {
    event.preventDefault();

    const notificationName = document.getElementById('notificationName').value;
    const notificationDescription = quillNotificationAdd.summernote('code');

    fetch('/uploadAddNotification', {
        method: 'POST',
        body: JSON.stringify({ notificationName: notificationName, notificationDescription: notificationDescription }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => {
            // You can update the UI or show a success message here
            NotificationList = data.NotificationList;
            loadSection('addNotification')
        })
        .catch(error => {
            console.error('Error uploading file:', error);
        });
    // event.preventDefault();
}

// updateNotification
// DropDownBox Action 
function handleUpdateNotification() {
    const updateNotification = document.getElementById('updateNotification');
    const UpdateNotificationName = document.getElementById('UpdateNotificationName');

    const filteredNotification = NotificationList.filter((notification) => notification.name === updateNotification.value);

    UpdateNotificationName.value = filteredNotification[0].name;
    quillNotificationUpdate.summernote('code',filteredNotification[0].description);
}

// updateNotification
// Submitting updated Notification
function updateNotificationList() {
    const updateNotificationData = document.getElementById('updateNotification').value;
    if (!updateNotificationData) {
        return;
    }
    const UpdateNotificationName = document.getElementById('UpdateNotificationName');
    const UpdateNotificationDescription = quillNotificationUpdate.summernote('code');

    fetch('/uploadUpdateNotification', {
        method: 'POST',
        body: JSON.stringify({
            updateNotificationData,
            UpdateNotificationName: UpdateNotificationName.value,
            UpdateNotificationDescription,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => {
            NotificationList = data.NotificationList;
            loadSection('updateNotification');
        })
        .catch(error => {
            console.error('Error uploading file:', error);
        });
}

function handleDeleteNotification() {
    const deleteNotification = document.getElementById('deleteNotification').value;

    fetch('/uploadDeleteNotification', {
        method: 'POST',
        body: JSON.stringify({
            deleteNotification
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => {
            NotificationList = data.NotificationList;
            loadSection('deleteNotification');
        })
        .catch(error => {
            console.error('Error uploading file:', error);
        });
}