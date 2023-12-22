var todos = [];
var todoFlag = false;
const coursePath = "/course";
const productPath = "/product";
const testimonialPath = "/testimonial";
const gallaryPath = "/gallary";
const notificationPath = "/notification";


const loadSection = (filename, clickedElement) => {
    const content = document.getElementById("content");
    // const clickedElementId = clickedElement.closest('div').id;
    let renderPath = "";
    switch (filename) {
        case "addCourse":
        case "updateCourse":
        case "deleteCourse":
            renderPath = `${coursePath}`
            break;

        case "addProduct":
        case "updateProduct":
        case "deleteProduct":
            renderPath = `${productPath}`
            break;

        case "addPhoto":
        case "addVideo":
            renderPath = `${gallaryPath}`
            break;

        case "addtestimonial":
        case "updateTestimonial":
        case "deleteTestimonial":
            renderPath = `${testimonialPath}`
            break;

        case "addNotification":
        case "updateNotification":
        case "deleteNotification":
            renderPath = `${notificationPath}`
            break;

        default:
            break;
    }

    // fetch(`/${"views"}/${clickedElementId}/${filename}`)
    fetch(`${renderPath}/${filename}`, {
        withCredentials: true,
    })
        .then(res => {
            if (res.ok) {
                return res.text();
            } else {
                throw new Error(`${res.status}`);
            }
        })
        .then(htmlSnippet => {
            content.innerHTML = htmlSnippet;

            switch (filename) {
                case 'addNotification':
                    loadaddNotificationQuill();
                    break;
                case 'updateNotification':
                    loadupdateNotificationQuill();
                    break;
            }
        }).catch(err => {
            switch (err.message) {
                case '401':
                    location.reload();
                    console.log("error");
                    break;
                default:
                    console.log(err.message);
                    break;
            }
        })
};

function loadLogout(filename) {
    fetch(`${filename}`, {
        withCredentials: true,
    }).then((res) => {
        if (res.ok) {
            location.reload();
        }
    }).catch(err => {
        switch (err.message) {
            case '401':
                location.reload();
                console.log("error");
                break;
            default:
                console.log(err.message);
                break;
        }
    })
}

const toggleVisibility = (display, elementA, elementB) => {
    const containerA = document.getElementById(elementA);
    const containerB = document.getElementById(elementB);

    if (display === "yesSubtitle") {
        containerA.style.display = "flex";
        if (containerB) {
            containerB.style.display = "none";
        }
    }
    if (display === "noSubtitle") {
        containerA.style.display = "none";
        if (containerB) {
            containerB.style.display = "block";
        }
    }
}


const editSubTitle = (elementToRemove) => {
    //If it is currently clicked
    if (todoFlag) {
        return;
    }

    const title = elementToRemove.getAttribute('data-title');
    const description = elementToRemove.getAttribute('data-description');

    const todoList = document.getElementById("todoList");
    const indexToRemove = todos.findIndex(todo => todo.title === title);
    todos.splice(indexToRemove, 1);

    todoList.removeChild(elementToRemove.parentNode);

    const updateSubTitle = document.getElementById("subTitleInput");
    // const updateDescription = document.getElementById("quill-editorSub");

    updateSubTitle.value = title;
    quillSub.summernote('code', JSON.parse(description));

    todoFlag = true;
    var newButton = document.getElementById("subButtonBtn");
    newButton.disabled = true;
    var button = document.getElementById("submitButton");
    button.disabled = true;

    toggleVisibility('yesSubtitle', 'subtDescVisiblity');

}


function addTodo() {
    // Get values from input fields
    var title = document.getElementById("subTitleInput").value;
    var description = quillSub.summernote('code');
    var todoList = document.getElementById("todoList");

    //Check All input entered
    if (title.length === 0 || description === "<p><br></p>" || description.length === 0) {
        return;
    }

    // Convert Delta to JSON
    var descriptionJSON = JSON.stringify(description);

    // Add values to the array
    todos.push({ Title: title, Description: description });

    var subTitleElement = document.createElement("li");

    subTitleElement.innerHTML = `<p id="${title}" data-title="${title}" data-description='${descriptionJSON}'  onclick="editSubTitle(this)"><strong> ${title} </strong></p> `;
    todoList.appendChild(subTitleElement);

    // Clear input fields
    document.getElementById("subTitleInput").value = "";
    quillSub.summernote('empty');

    todoFlag = false;
    var newButton = document.getElementById("subButtonBtn");
    newButton.disabled = false;
    var button = document.getElementById("submitButton");
    button.disabled = false;

    toggleVisibility('noSubtitle', 'subtDescVisiblity')
}

function handleAddCourseSubmit(event) {
    var radios = document.getElementsByName('subtitle');

    if (radios[1].checked) {
        var button = document.getElementById("submitButton");
        var ftitle = document.getElementById("title").value;
        var description = quillNormal.summernote('code');

        //Check All input entered
        if (ftitle.length === 0 || description === "<p><br></p>" || description.length === 0) {
            return;
        }

        // Convert Delta to JSON        
        var descriptionJSON = JSON.stringify(description);
        const formData = new FormData();
        formData.append("Title", ftitle);
        formData.append("Description", descriptionJSON);

        button.disabled = true;
        fetch(`${coursePath}/addCourseNormalList`, {
            method: 'POST',
            body: formData,
            withCredentials: true,
        })
            .then(response => response.json())
            .then(data => {
                CourseList = data.CourseList;
                loadSection('addCourse');
            })
            .catch(error => {
                alert("Not updated");
                button.disabled = false;
                console.error('Error uploading file:', error);
            });
    }
    else if (radios[0].checked) {
        var button = document.getElementById("submitButton");
        var title = document.getElementById("title").value;
        // var subTitleInput = document.getElementById("subTitleInput").value;
        // var description = quillSub.summernote('code');
        // var descriptionJSON = JSON.stringify(description);

        //Check All input entered
        if (title.length === 0 || todos.length === 0) {
            console.log(title.length, todos.length)
            event.preventDefault();
            return;
        }

        const formData = new FormData();
        formData.append("Title", title);
        formData.append("SubTitle", JSON.stringify(todos));

        button.disabled = true;
        fetch(`${coursePath}/addCourseSubList`, {
            method: 'POST',
            body: formData,
            withCredentials: true,
        })
            .then(response => response.json())
            .then(data => {
                todos = [];
                CourseList = data.CourseList;
                loadSection('addCourse');
            })
            .catch(error => {
                alert("Not updated");
                button.disabled = false;
                console.error('Error uploading file:', error);
            });

    }
    else {
        alert("please choose any option before submit")
    }

} 