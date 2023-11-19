// const quill = document.getElementById("quill-container");

var quillNormal;
var quillSub;


document.addEventListener('DOMContentLoaded', function () {
  document.body.addEventListener('click', function (event) {
    // Check if the clicked element has a specific class or ID
    if (event.target.id === 'noSubtitle') {      
      var quillEditorNormal = document.getElementById('quill-editornormal');
      quillEditorNormal.innerHTML = '';
      const editor = document.createElement("div");
      quillEditorNormal.append(editor);

      if (quillEditorNormal) {        
        quillNormal = new Quill(editor, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ font: [] }],
              [{ list: "ordered" }, { list: "bullet" }],
              ["bold", "italic", "underline"],
              [{ color: [] }, { background: [] }],
              [{ script: "sub" }, { script: "super" }],
              [{ align: [] }],
              ["image", "blockquote", "code-block"],
              ["clean"],
            ],
          },
        });
      }
    }
  });

  document.body.addEventListener('click', function (event) {
    if (event.target.id === 'yesSubtitle') {    
      console.log("first")
      var quillEditorSub = document.getElementById('quill-editorSub');
      quillEditorSub.innerHTML = '';
      const editor = document.createElement("div");
      quillEditorSub.append(editor);

      if (quillEditorSub) {        
        quillSub = new Quill(editor, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ font: [] }],
              [{ list: "ordered" }, { list: "bullet" }],
              ["bold", "italic", "underline"],
              [{ color: [] }, { background: [] }],
              [{ script: "sub" }, { script: "super" }],
              [{ align: [] }],
              ["image", "blockquote", "code-block"],
              ["clean"],
            ],
          },
        });
      }
    }
  });

});


var quillEditorSub = document.getElementById('quill-editorSub');
document.addEventListener('DOMContentLoaded', function () {
  if (quillEditorSub) {
    console.log("second")
    quillSub = new Quill(quillEditorSub, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          [{ align: [] }],
          ["image", "blockquote", "code-block"],
          ["clean"],
        ],
      },
    });
  }

});

