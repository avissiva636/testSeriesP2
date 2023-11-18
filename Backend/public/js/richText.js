// const quill = document.getElementById("quill-container");

// document.addEventListener('DOMContentLoaded', function () {
//   var quillEditorNormal = document.getElementById('quill-editornormal');

//     var quillNormal = new Quill(quillEditorNormal, {
//       theme: 'snow',
//       modules: {
//         toolbar: [
//           [{ header: [1, 2, 3, 4, 5, 6, false] }],
//           [{ font: [] }],
//           [{ list: "ordered" }, { list: "bullet" }],
//           ["bold", "italic", "underline"],
//           [{ color: [] }, { background: [] }],
//           [{ script: "sub" }, { script: "super" }],
//           [{ align: [] }],
//           ["image", "blockquote", "code-block"],
//           ["clean"],
//         ],
//       },
//     });  

//   });

var quillSub;

var quillEditorSub = document.getElementById('quill-editorSub');
document.addEventListener('DOMContentLoaded', function () {
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

});

 