const content = document.getElementById("content");
var todos = [];

const loadSection = (filename, clickedElement) => {
    const clickedElementId = clickedElement.closest('div').id;

    fetch(`/${"views"}/${clickedElementId}/${filename}`)
        .then(res => {
            if (res.ok) {
                return res.text();
            }
        })
        .then(htmlSnippet => {
            content.innerHTML = htmlSnippet;
        });
};

// const descriptionContainer = document.getElementById("descriptionDetails");
// const subtitlContainer = document.getElementById("subtitleDetails");
const toggleVisibility = (display, elementA, elementB) => {
    const containerA = document.getElementById(elementA);
    const containerB = document.getElementById(elementB);

    if (display === "yes") {
        containerA.style.display = "flex";
        if (containerB) {
            containerB.style.display = "none";
        }
    }
    if (display === "no") {
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
    console.log(description)
    todos.splice(indexToRemove, 1);

    todoList.removeChild(elementToRemove.parentNode);

    const updateSubTitle = document.getElementById("subTitle");
    // const updateDescription = document.getElementById("quill-editorSub");

    updateSubTitle.value = title;
    quillSub.setContents(JSON.parse(description));    

    toggleVisibility('yes', 'subtDescVisiblity')

}


function addTodo() {
    // Get values from input fields
    var title = document.getElementById("subTitle").value;
    var description = quillSub.getContents();
    var todoList = document.getElementById("todoList");
    
    // Convert Delta to JSON
    var descriptionJSON = JSON.stringify(description);
    
    // Add values to the array
    todos.push({ title: title, description: descriptionJSON });

    var subTitleElement = document.createElement("li");

    subTitleElement.innerHTML = `<p id="${title}" data-title="${title}" data-description='${descriptionJSON}'  onclick="editSubTitle(this)"><strong> ${title} </strong></p> `;
    todoList.appendChild(subTitleElement);

    // Clear input fields
    document.getElementById("subTitle").value = "";
    quillSub.setText("");


    toggleVisibility('no','subtDescVisiblity')
}