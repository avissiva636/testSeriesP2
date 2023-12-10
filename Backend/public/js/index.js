var todos = [];

const loadSection = (filename, clickedElement) => {
    const content = document.getElementById("content");
    // const clickedElementId = clickedElement.closest('div').id;

    // fetch(`/${"views"}/${clickedElementId}/${filename}`)
    fetch(`/${filename}`)
        .then(res => {
            if (res.ok) {
                return res.text();
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
        })
};

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

    const title = elementToRemove.getAttribute('data-title');
    const description = elementToRemove.getAttribute('data-description');

    const todoList = document.getElementById("todoList");
    const indexToRemove = todos.findIndex(todo => todo.title === title);
    todos.splice(indexToRemove, 1);

    todoList.removeChild(elementToRemove.parentNode);

    const updateSubTitle = document.getElementById("subTitleInput");
    // const updateDescription = document.getElementById("quill-editorSub");

    updateSubTitle.value = title;
    quillSub.summernote('code',JSON.parse(description));

    toggleVisibility('yesSubtitle', 'subtDescVisiblity')

}


function addTodo() {
    // Get values from input fields
    var title = document.getElementById("subTitleInput").value;
    var description = quillSub.summernote('code');
    var todoList = document.getElementById("todoList");

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


    toggleVisibility('noSubtitle', 'subtDescVisiblity')
}

function handleAddCourseSubmit() {
    var radios = document.getElementsByName('subtitle');

    if (radios[1].checked) {
        var button = document.getElementById("submitButton")
        var ftitle = document.getElementById("title").value;
        var description = quillNormal.summernote('code');
        // Convert Delta to JSON        
        var descriptionJSON = JSON.stringify(description);
        const formData = new FormData();
        formData.append("Title", ftitle);
        formData.append("Description", descriptionJSON);

        button.disabled = true;
        fetch('/addCourseNormalList', {
            method: 'POST',
            body: formData
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
        var button = document.getElementById("submitButton")
        var title = document.getElementById("title").value;
        // var subTitleInput = document.getElementById("subTitleInput").value;
        var description = quillSub.summernote('code');
        var descriptionJSON = JSON.stringify(description);

        const formData = new FormData();
        formData.append("Title", title);
        formData.append("SubTitle", JSON.stringify(todos));

        button.disabled = true;
        fetch('/addCourseSubList', {
            method: 'POST',
            body: formData
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