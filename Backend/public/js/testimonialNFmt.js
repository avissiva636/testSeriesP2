function uploadTestimonialFile() { //uploadFile
    const form = document.getElementById('uploadTestimonialForm');
    const formData = new FormData(form);
    // Check if a file is selected
    const fileInput = document.getElementById('fileTestimonialInput');
    if (fileInput.files.length < 1) {
        return
    }

    fetch(`${testimonialPath}/uploadAddTestimonial`, {
        method: 'POST',
        body: formData,
        withCredentials: true,
    })
        .then(response => response.json())
        .then(data => {
            // You can update the UI or show a success message here
            // form.reset();
            loadSection('addTestimonial')
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


function deleteTestimonial(deleteFile) {  //deleteImage
    if (!confirm("Are you sure you want to delete this video?")) {
        return; 
    }
    
    const formData = new FormData();
    formData.append("imagenameToDelete", deleteFile);
    fetch(`${testimonialPath}/deleteTestimonial`, {
        method: 'DELETE',
        body: formData,
        withCredentials: true,
    })
        .then(() => loadSection('addTestimonial'))
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
