

function uploadFile() {
    const form = document.getElementById('uploadForm');
    const formData = new FormData(form);
    // Check if a file is selected
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length < 1) {
        return
    }

    fetch(`${gallaryPath}/upload`, {
        method: 'POST',
        body: formData,
        withCredentials: true,
    })
        .then(response => response.json())
        .then(data => {
            // You can update the UI or show a success message here
            // form.reset();
            loadSection('addPhoto')
            // updateImageGallery(data.files);

        })
        .catch(error => {
            // Handle errors or show an error message            
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

//Not use currently
// function updateImageGallery(updatedFiles) {

//     // Get the image container element
//     const imageContainer = document.getElementById('imageContainer');

//     // Clear the existing content of the container
//     imageContainer.innerHTML = '';

//     // Append the new images to the container
//     updatedFiles.forEach(file => {
//         const imageWrapper = document.createElement('div');
//         imageWrapper.className = 'imageWrapper';

//         const newImage = document.createElement('img');
//         newImage.src = "/images/" + file;
//         newImage.alt = file;
//         newImage.style.maxWidth = "300px";
//         newImage.style.maxHeight = "200px";

//         const deleteIcon = document.createElement('span');
//         deleteIcon.className = 'deleteIcon';
//         deleteIcon.innerHTML = '❌';
//         deleteIcon.onclick = function () {
//             deleteImage(file);
//         };

//         imageWrapper.appendChild(newImage);
//         imageWrapper.appendChild(deleteIcon);
//         imageContainer.appendChild(imageWrapper);
//     });
// }

function deleteImage(deleteFile) {
    if (!confirm("Are you sure you want to delete this image?")) {
        return; 
    }

    const formData = new FormData();
    formData.append("imagenameToDelete", deleteFile);
    fetch(`${gallaryPath}/deletePhoto`, {
        method: 'DELETE',
        body: formData,
        withCredentials: true,
    })
        .then(() => loadSection('addPhoto'))
        .catch(error => {
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


function uploadvideo() {
    const form = document.getElementById('uploadVideoForm');
    const videoIdInput = document.getElementById('videoIdInput');

    if (videoIdInput.value.trim() !== '') {
        // Perform your action here

        const formData = new FormData();
        formData.append('videoId', videoIdInput.value);

        fetch(`${gallaryPath}/uploadVideo`, {
            method: 'POST',
            body: formData,
            withCredentials: true,
        })
            .then(response => response.json())
            .then(data => {
                // You can update the UI or show a success message here                
                // form.reset();
                loadSection('addVideo');
                // updateVideoGallery(data.videos);
            })
            .catch(error => {
                // Handle errors or show an error message
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
}

//Not use currently
// function updateVideoGallery(updatedVideos) {

//     const videoContainer = document.getElementById('videoContainer');
//     videoContainer.innerHTML = '';

//     updatedVideos.forEach(video => {
//         const imageWrapper = document.createElement('div');
//         imageWrapper.className = 'imageWrapper';

//         const iframe = document.createElement('iframe');
//         iframe.width = '300px';
//         iframe.height = '200px';
//         iframe.src = `https://www.youtube.com/embed/${video.videoid}`;
//         iframe.title = 'YouTube video player';
//         iframe.frameBorder = '0';
//         iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
//         iframe.allowFullscreen = true;

//         const deleteIcon = document.createElement('span');
//         deleteIcon.className = 'deleteIcon';
//         deleteIcon.innerHTML = '❌';
//         deleteIcon.onclick = function () {
//             deleteVideo(video);
//         };

//         imageWrapper.appendChild(iframe);
//         imageWrapper.appendChild(deleteIcon);
//         videoContainer.appendChild(imageWrapper);
//     });
// }

function deleteVideo(elementToRemove) {
    if (!confirm("Are you sure you want to delete this video?")) {
        return; 
    }


    const formData = new FormData();
    formData.append('videoIdToDelete', elementToRemove);

    fetch(`${gallaryPath}/deleteVideo`, {
        method: 'DELETE',
        body: formData,
        withCredentials: true,
    })
        .then(() => loadSection('addVideo'))
        .catch(error => {
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