let Testimonials = [];

function fetchtestimonialData() {
    return fetch('/gettestimoniallist')
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
            console.error('Error during fetch:', error);
        });
}

// Call the function to initiate the fetch operation
fetchtestimonialData()

function handleTestimonial() {

    const form = document.getElementById('testimonialForm');
    const formData = new FormData(form);

    fetch('/uploadAddTestimonial', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // You can update the UI or show a success message here
            form.reset();
            Testimonials=data.Testimonials;            
        })
        .catch(error => {
            console.error('Error uploading file:', error);
        });
}

function handleUpdateTestimonial() {
    const updateTestimonial = document.getElementById('updateTestimonial');
    const UpdateTestimonialName = document.getElementById('UpdateTestimonialName');
    const UpdateTestimonialDescription = document.getElementById('UpdateTestimonialDescription');

    const filteredTestimonials = Testimonials.filter((testimonial) => testimonial.name === updateTestimonial.value);
    console.log(filteredTestimonials,)
    UpdateTestimonialName.value = filteredTestimonials[0].name;
    UpdateTestimonialDescription.value = filteredTestimonials[0].desc;
}

function handleUpdateSubmitTestimonial() {
    const updateTestimonialData = document.getElementById('updateTestimonial').value;
    if (!updateTestimonialData) {
        return;
    }
    const UpdateTestimonialName = document.getElementById('UpdateTestimonialName');
    const UpdateTestimonialDescription = document.getElementById('UpdateTestimonialDescription');
    const formData = new FormData();
    formData.append('UpdateTestimonialName', UpdateTestimonialName.value);
    formData.append('UpdateTestimonialDescription', UpdateTestimonialDescription.value);

    fetch('/uploadUpdateTestimonial', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            Testimonials = data.Testimonials;
            loadSection('updateTestimonial');
        })
        .catch(error => {
            console.error('Error uploading file:', error);
        });
}

function handleDeleteTestimonial() {
    const deleteTestimonial = document.getElementById('deleteTestimonial').value;

    const formData = new FormData();
    formData.append('deleteTestimonial', deleteTestimonial);

    fetch('/uploadDeleteTestimonial', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            Testimonials = data.Testimonials;
            loadSection('deleteTestimonial');
        })
        .catch(error => {
            console.error('Error uploading file:', error);
        });

}