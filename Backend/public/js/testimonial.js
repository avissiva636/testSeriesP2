let Testimonials = [];

function fetchtestimonialData() {
    return fetch(`${testimonialPath}/gettestimoniallist`, {
        withCredentials: true,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Assuming the response is in JSON format
        })
        .then(data => {
            Testimonials = data.Testimonials;
            // Now you can use the CourseList array with the fetched data
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
fetchtestimonialData()

function handleTestimonial() {

    const testimonialNameLength = document.getElementById('testimonialName').value.length;
    const testimonialDescriptionLength = document.getElementById('testimonialDescription').value.length;
    const testimonialPhotoLength = document.getElementById('testimonialPhoto').files.length;

    if (testimonialNameLength === 0 || testimonialDescriptionLength === 0 || testimonialPhotoLength === 0) {
        return;
    }

    var aTButton = document.getElementById("addTestimonialBtn");
    aTButton.disabled = true;

    const form = document.getElementById('testimonialForm');
    const formData = new FormData(form);

    fetch(`${testimonialPath}/uploadAddTestimonial`, {
        method: 'POST',
        body: formData,
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
            Testimonials = data.Testimonials;
            aTButton.disabled = false;
            loadSection('addtestimonial');
        })
        .catch(error => {
            aTButton.disabled = false;
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

function handleUpdateTestimonial() {
    const updateTestimonial = document.getElementById('updateTestimonial');
    const UpdateTestimonialName = document.getElementById('UpdateTestimonialName');
    const UpdateTestimonialDescription = document.getElementById('UpdateTestimonialDescription');

    const filteredTestimonials = Testimonials.filter((testimonial) => testimonial.name === updateTestimonial.value);
    UpdateTestimonialName.value = filteredTestimonials[0].name;
    UpdateTestimonialDescription.value = filteredTestimonials[0].desc;
}

function handleUpdateSubmitTestimonial() {
    const updateTestimonialData = document.getElementById('updateTestimonial').value;
    const UpdateTestimonialName = document.getElementById('UpdateTestimonialName');
    const UpdateTestimonialDescription = document.getElementById('UpdateTestimonialDescription');
    if (updateTestimonialData.length === 0 ||
        UpdateTestimonialName.value.length === 0 ||
        UpdateTestimonialDescription.value.length === 0) {
        return;
    }
    var uTButton = document.getElementById("updateTestimonialBtn");
    uTButton.disabled = true;
    const formData = new FormData();

    formData.append('updateTestimonialData', updateTestimonialData);
    formData.append('UpdateTestimonialName', UpdateTestimonialName.value);
    formData.append('UpdateTestimonialDescription', UpdateTestimonialDescription.value);

    fetch(`${testimonialPath}/uploadUpdateTestimonial`, {
        method: 'PUT',
        body: formData,
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
            Testimonials = data.Testimonials;
            uTButton.disabled = false;
            loadSection('updateTestimonial');
        })
        .catch(error => {
            uTButton.disabled = false;
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

function handleDeleteTestimonial() {
    const deleteTestimonial = document.getElementById('deleteTestimonial').value;

    if (deleteTestimonial.length === 0) {
        return;
    }

    var button = document.getElementById("deleteTestimonialBtn");
    button.disabled = true;

    const formData = new FormData();
    formData.append('deleteTestimonial', deleteTestimonial);

    fetch(`${testimonialPath}/uploadDeleteTestimonial`, {
        method: 'DELETE',
        body: formData,
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
            Testimonials = data.Testimonials;
            button.disabled = false;
            loadSection('deleteTestimonial');
        })
        .catch(error => {
            button.disabled = false;
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