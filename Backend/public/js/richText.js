// const quill = document.getElementById("quill-container");

var quillNormal;
var quillSub;
var quillUpAdd;
var quillUp;
var quillDes;
var quillNotificationAdd;
var quillNotificationUpdate;

var TOOLBAROPTIONS = [
  ['style', ['style']],
  ['font', ['bold', 'underline', 'clear']],
  ['color', ['color']],
  ['para', ['ul', 'ol', 'paragraph']],
  ['table', ['table']],
  ['insert', ['link', 'picture']],
  ['view', ['codeview']]
];

document.addEventListener('DOMContentLoaded', function () {
  document.body.addEventListener('click', function (event) {
    // Check if the clicked element has a specific class or ID
    if (event.target.id === 'noSubtitle') {
      var quillEditorNormal = document.getElementById('quill-editornormal');

      if (quillEditorNormal) {
        quillNormal = $('#quill-editornormal').summernote({
          placeholder: 'Please enter your data',
          tabsize: 2,
          height: 120,
          toolbar: TOOLBAROPTIONS
        });
      }
    }
  });

  document.body.addEventListener('click', function (event) {
    if (event.target.id === 'yesSubtitle') {
      var quillEditorSub = document.getElementById('quill-editorSub');

      if (quillEditorSub) {
        quillSub = $('#quill-editorSub').summernote({
          placeholder: 'Please enter your data',
          tabsize: 2,
          height: 120,
          toolbar: TOOLBAROPTIONS
        });
      }
    }
  });

  document.body.addEventListener('click', function (event) {
    // Check if the clicked element has a specific class or ID
    if (event.target.id === 'course') {
      var quillEditorUpAdd = document.getElementById('quill-editorSubupAdd');

      if (quillEditorUpAdd) {
        quillUpAdd = $('#quill-editorSubupAdd').summernote({
          placeholder: 'Please enter your data',
          tabsize: 2,
          height: 120,
          toolbar: TOOLBAROPTIONS
        });
      }
    }
  });

  document.body.addEventListener('click', function (event) {
    // Check if the clicked element has a specific class or ID
    if (event.target.id === 'course') {
      var quillEditorUp = document.getElementById('quill-editorSubup');

      if (quillEditorUp) {
        quillUp = $('#quill-editorSubup').summernote({
          placeholder: 'Please enter your data',
          tabsize: 2,
          height: 120,
          toolbar: TOOLBAROPTIONS
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

          if (quillEditorDes) {
            quillDes = $('#quillUpdateDescription').summernote({
              placeholder: 'Please enter your data',
              tabsize: 2,
              height: 120,
              toolbar: TOOLBAROPTIONS
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

function loadaddNotificationQuill() {
  var quillEditorNotificationAdd = document.getElementById('quill-addNotification');

  if (quillEditorNotificationAdd) {
    quillNotificationAdd = $('#quill-addNotification').summernote({
      placeholder: 'Please enter your data',
      tabsize: 2,
      height: 120,
      toolbar: TOOLBAROPTIONS
    });
  }
}

function loadupdateNotificationQuill() {
  var quillEditorNotificationUpdate = document.getElementById('quill-UpdateNotification');

  if (quillEditorNotificationUpdate) {
    quillNotificationUpdate = $('#quill-UpdateNotification').summernote({
      placeholder: 'Please enter your data',
      tabsize: 2,
      height: 120,
      toolbar: TOOLBAROPTIONS
    });
  }
}