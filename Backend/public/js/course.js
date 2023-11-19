//updateCourse
let CourseList = [
    {
        Title: "IAS",
        Description: "IASdes",
    },
    {
        Title: "KAS",
        Description: "KASdes",
    },
    {
        Title: "SAAD",
        Description: "SAADdes",
    },
    {
        Title: "KPSC Prelims",
        SubTitle: [
            {
                Title: "CTI",
                Description: "CTIdes",
            },
            {
                Title: "AE/JE",
                Description: "AE/JEdes",
            },
            {
                Title: "Group C",
                Description: "Group Cdes",
            },
        ],
    },
];

document.addEventListener('change', function (event) {
    var target = event.target;

    // Check if the changed element is the course dropdown
    if (target.id === 'course') {
        toggleVisibility("noSubtitle", "subtitleContent");
        var selectedCourse = target.value;
        console.log(target.value)
        var subtitleSelect = document.getElementById('subtitle');
        console.log(subtitleSelect)
        subtitleSelect.innerHTML = ''; // Clear existing options
        subtitleSelect.innerHTML += '<option value="" selected disabled> Select Course </option>';

        // Find the selected course in CourseList
        var selectedCourseData = CourseList.find(function (course) {
            return course.Title === selectedCourse;
        });
        // Assuming selectedCourseData is the object mentioned above

        if (selectedCourseData && selectedCourseData.SubTitle && selectedCourseData.SubTitle.length > 0) {
            // The course has subtitles            
            toggleVisibility("yesSubtitle", "subtitleVisiblity", "descriptionVisiblity");
        } else {
            // The course has no subtitles            
            var updateDescription = document.getElementById('updateDescription');            
            updateDescription.value=selectedCourseData.Description;
            toggleVisibility("noSubtitle", "subtitleVisiblity", "descriptionVisiblity");
        }
        
        // Add options based on the selected course's subtitles
        if (selectedCourseData && selectedCourseData.SubTitle) {
            selectedCourseData.SubTitle.forEach(function (subtitle) {
                subtitleSelect.innerHTML += '<option value="' + subtitle.Title + '">' + subtitle.Title + '</option>';
            });
        }
    }
});

var originalSubTitleName;
function handleSubtitleSelection() {
    var selectedCourse = document.getElementById('course');
    var subtitleSelect = document.getElementById('subtitle');
    originalSubTitleName = subtitleSelect.value;
    var selectedOption = subtitleSelect.options[subtitleSelect.selectedIndex];
    // var subtitleContent = document.getElementById('subtitleContent');

    //enabling course, description box
    toggleVisibility("yesSubtitle", "subtitleContent");
    var updateSubTitle = document.getElementById("updatesubTitle");
    var updateQuillEditorSub = document.getElementById("updatequill-editorSub");

    //getting descrition from courselist
    var description = CourseList
        .find(course => course.Title === selectedCourse.value)
        ?.SubTitle
        .find(subtitle => subtitle.Title === selectedOption.value)
        ?.Description;

    //setting value for course, description box
    updateSubTitle.value = selectedOption.value;
    updateQuillEditorSub.value = description;

}

function updateCourseListSubtitle() {
    var selectedCourse = document.getElementById('course');
    var updateSubTitle = document.getElementById("updatesubTitle");
    var updateQuillEditorSub = document.getElementById("updatequill-editorSub");

    console.log("before", CourseList);
    CourseList = CourseList.map(course => {
        if (course.Title === selectedCourse.value) {
            course.SubTitle = course.SubTitle.map(subtitle => {
                if (subtitle.Title === originalSubTitleName) {
                    return { Title: updateSubTitle.value, Description: updateQuillEditorSub.value };
                }
                return subtitle;
            });
        }
        return course;
    });

    updateSubTitle.value = "";
    updateQuillEditorSub.value = "";
    toggleVisibility("noSubtitle", "subtitleContent");

}


function updateCourseListDescrition() {
    var selectedCourse = document.getElementById('course');
    var updateDescription = document.getElementById('updateDescription');

    CourseList = CourseList.map(course => {
        if (course.Title === selectedCourse.value) {
            return { ...course, Description: updateDescription.value };
        }
        return course;
    });
    
}

