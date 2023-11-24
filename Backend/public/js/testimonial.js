const Testimonials = [
    {
        name: "vijay",
        desc: "I came here to get some help with my prelims. Individual guidance is quite beneficial.I was able to complete the syllabus according to the schedule.Worth for money.",
        photo: "images/testimonials/4.jpg"
    }
];

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
            console.log(data.Testimonials)
            // updateVideoGallery(data.videos);
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
    
    UpdateTestimonialName.value = filteredTestimonials[0].name;
    UpdateTestimonialDescription.value = filteredTestimonials[0].desc;
}

function handleUpdateSubmitTestimonial() {
    console.log("axios call to update the testimonails")
}

function handleDeleteTestimonial() {
    console.log("axios call to delete the testimonails")
}