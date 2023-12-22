//updateCourse
let NotificationList = [];
// let updateCourseList = [];

function fetchNotificationData() {
    return fetch(`${notificationPath}/getNotificationList`, {
        withCredentials: true,
    })
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
            switch (error.message) {
                case '401':
                    location.reload();
                    console.log("error");
                    break;
                default:
                    console.log(error.message);
                    break;
            }
        });
}

// Call the function to initiate the fetch operation
fetchNotificationData();

function handleAddNotificationSubmit(event) {
    event.preventDefault();

    const notificationName = document.getElementById('notificationName').value;
    const notificationDescription = quillNotificationAdd.summernote('code');

    //Check All input entered
    if (notificationName.length === 0 || notificationDescription === "<p><br></p>" || notificationDescription.length === 0) {
        return;
    }

    var aNButton = document.getElementById("NotificationsubmitButton");
    aNButton.disabled = true;

    fetch(`${notificationPath}/uploadAddNotification`, {
        method: 'POST',
        body: JSON.stringify({ notificationName: notificationName, notificationDescription: notificationDescription }),
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true,
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then(data => {
            // You can update the UI or show a success message here
            NotificationList = data.NotificationList;
            aNButton = false;
            loadSection('addNotification');
        })
        .catch(error => {
            aNButton = false;
            switch (error.message) {
                case '401':
                    location.reload();
                    console.log("error");
                    break;
                default:
                    console.log(error.message);
                    break;
            }
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
    quillNotificationUpdate.summernote('code', filteredNotification[0].description);
}

// updateNotification
// Submitting updated Notification
function updateNotificationList() {
    const updateNotificationData = document.getElementById('updateNotification').value;
    const UpdateNotificationName = document.getElementById('UpdateNotificationName');
    const UpdateNotificationDescription = quillNotificationUpdate.summernote('code');

    if (!updateNotificationData ||
        UpdateNotificationName.value.length === 0 ||
        UpdateNotificationDescription === "<p><br></p>" ||
        UpdateNotificationDescription.length === 0) {
        return;
    }

    var uNButton = document.getElementById("updateNotificationBtn");
    uNButton.disabled = true;

    fetch(`${notificationPath}/uploadUpdateNotification`, {
        method: 'PUT',
        body: JSON.stringify({
            updateNotificationData,
            UpdateNotificationName: UpdateNotificationName.value,
            UpdateNotificationDescription,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true,
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then(data => {
            NotificationList = data.NotificationList;
            uNButton.disabled = false;
            loadSection('updateNotification');
        })
        .catch(error => {
            uNButton.disabled = false;
            switch (error.message) {
                case '401':
                    location.reload();
                    console.log("error");
                    break;
                default:
                    console.log(error.message);
                    break;
            }
        });
}

function handleDeleteNotification() {
    const deleteNotification = document.getElementById('deleteNotification').value;

    if (deleteNotification.length === 0) {
        return;
    }

    var dNButton = document.getElementById("deleteNotificationBtn");
    dNButton.disabled = true;

    fetch(`${notificationPath}/uploadDeleteNotification`, {
        method: 'DELETE',
        body: JSON.stringify({
            deleteNotification
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true,
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then(data => {
            NotificationList = data.NotificationList;
            dNButton.disabled = false;
            alert(`${deleteNotification} Deleted`);
            loadSection('deleteNotification');
        })
        .catch(error => {
            dNButton.disabled = false;
            switch (error.message) {
                case '401':
                    location.reload();
                    console.log("error");
                    break;
                default:
                    console.log(error.message);
                    break;
            }
        });
}