// const quill = document.getElementById("quill-container");

var quillNormal;
var quillSub;
var quillUpAdd;
var quillUp;
var quillDes;


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

  document.body.addEventListener('click', function (event) {
    // Check if the clicked element has a specific class or ID
    if (event.target.id === 'course') {
      var quillEditorUpAdd = document.getElementById('quill-editorSubupAdd');
      quillEditorUpAdd.innerHTML = '';
      const editor = document.createElement("div");
      quillEditorUpAdd.append(editor);

      if (quillEditorUpAdd) {
        quillUpAdd = new Quill(editor, {
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
    // Check if the clicked element has a specific class or ID
    if (event.target.id === 'course') {
      var quillEditorUp = document.getElementById('quill-editorSubup');
      quillEditorUp.innerHTML = '';
      const editor = document.createElement("div");
      quillEditorUp.append(editor);

      if (quillEditorUp) {
        quillUp = new Quill(editor, {
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
    // Check if the clicked element has a specific class or ID
    if (event.target.id === 'updateCourseQload') {
      var contentDiv = document.getElementById('content');
      
        function loadQuillDes() {
          try {           

            var quillEditorDes = document.getElementById('quillUpdateDescription');
            quillEditorDes.innerHTML = '';
            const editor = document.createElement("div");
            quillEditorDes.append(editor);
    
            if (quillEditorDes) {
              quillDes = new Quill(editor, {
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
          } catch (error) {
            contentDiv.removeEventListener('change', loadQuillDes);
          }
        }        
      
      contentDiv.addEventListener('change', loadQuillDes);

    }
  });

});
