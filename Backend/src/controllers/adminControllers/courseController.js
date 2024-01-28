const asyncHandler = require("express-async-handler");
const { courseModel: Course } = require("../../database/index");

let CourseList = []
async function setCourseList() {
    try {
        const retrievedCourse = await Course.find();
        CourseList = retrievedCourse;
    } catch (error) {
        console.error('Error setting CourseList:', error);
    }
}

//@desc Display the addCourse page
//@route GET /addCourse
//access public
const renderAddCourse = asyncHandler((req, res) => {
    res.render("courses/addCourse", {
        message: "add Course",
        CourseList,
    });
});

//@desc Display the updateCourse page
//@route GET /updateCourse
//access public
const renderUpdateCourse = asyncHandler((req, res) => {
    res.render("courses/updateCourse", {
        message: "update Course",
        CourseList: CourseList,
    });
});

//@desc Display the deleteCourse page
//@route GET /deleteCourse
//access public
const renderDeleteCourse = asyncHandler((req, res) => {
    res.render("courses/deleteCourse", {
        message: "delete Course",
        CourseList: CourseList,
    });
});

//@desc Get all Courses
//@route GET /getCourseList
//access public
const getCourseList = asyncHandler(async (req, res) => {
    if (req.headers.origin) {        
        await setCourseList();
        return res.status(200).json({ CourseList });
    }    
});

//@desc Add Course(without subtitle) in CourseList
//@route POST /addCourseNormalList
//access public
const addCourseNormalList = asyncHandler(async (req, res) => {
    const data = {
        Title: req.body.Title,
        Description: JSON.parse(req.body.Description)
    };

    CourseList.push(data);

    await Course.create({
        Title: data.Title,
        Description: data.Description,
    });

    res.status(200).json({
        message: "Course Data Updated",
        CourseList,
        formdata: req.body
    });
});

//@desc Add Course(with subtitle) in CourseList
//@route POST /addCourseSubList
//access public
const addCourseSubList = asyncHandler(
    async (req, res) => {
        const data = {
            Title: req.body.Title,
            SubTitle: JSON.parse(req.body.SubTitle)
        }
        await Course.create({
            Title: data.Title,
            SubTitle: data.SubTitle,
        });

        CourseList.push(data);
        res.status(200).json({
            message: "Course Data Updated",
            CourseList,
        });
    }
);

//@desc Update Course(without subtitle) in CourseList
//@route POST /uploadUpdateCourseList
//access public
const updateCourseNormalList = asyncHandler(async (req, res) => {
    const selectedCourse = JSON.parse(req.body.selectedCourse);
    const updateDescription = JSON.parse(req.body.updateDescription);

    await Course.findOneAndUpdate({ Title: selectedCourse }, { Description: updateDescription });
    await setCourseList()

    res.status(200).json({
        message: "Course Description Updated",
        CourseList
    });
});

//@desc Update Course(with subtitle) in CourseList
//@route POST /updateCourseSubList
//access public
const updateCourseSubList = asyncHandler(async (req, res) => {
    const updateCourseList = JSON.parse(req.body.updateCourseList);

    for (const ucourse of updateCourseList) {
        try {
            // Check if SubTitle exists
            const existingCourse = await Course.findOne({ Title: ucourse.Title, "SubTitle.Title": ucourse.originalSubTitleName });

            if (existingCourse) {
                // SubTitle exists, update it
                await Course.updateOne(
                    { Title: ucourse.Title, "SubTitle.Title": ucourse.originalSubTitleName },
                    {
                        $set: {
                            "SubTitle.$": ucourse.SubTitle,
                        },
                    }
                );
            } else {
                // SubTitle doesn't exist, add it
                await Course.updateOne(
                    { Title: ucourse.Title },
                    {
                        $addToSet: {
                            SubTitle: ucourse.SubTitle,
                        },
                    },
                    { upsert: true }
                );
            }
        } catch (err) {
            console.error(`Error updating document: ${err}`);
        }
    }

    await setCourseList()
    res.status(200).json({
        message: "Course Data Updated",
        CourseList: CourseList
    });
});

//@desc Delete Course(without subtitle) in CourseList
//@route POST /deleteNormalCourseList
//access public
const deleteCourseNormalList = asyncHandler(async (req, res) => {
    const DeleteData = JSON.parse(req.body.DeleteData);
    // CourseList = JSON.parse(req.body.CourseList);
    await Course.deleteOne({ Title: DeleteData });
    await setCourseList();

    res.status(200).json({
        message: "Normal Course Data Deleted",
        CourseList
    });
});

//@desc Delete Course(with subtitle) in CourseList
//@route POST /deleteSubCourseList
//access public
const deleteCourseSubList = asyncHandler(async (req, res) => {
    const coursetoDelete = JSON.parse(req.body.coursetoDelete);
    const selectedsubCourses = JSON.parse(req.body.selectedValues);

    try {
        for (const dcourse of selectedsubCourses) {
            await Course.findOneAndUpdate(
                { Title: coursetoDelete },
                { $pull: { SubTitle: { Title: dcourse } } },
                { new: true }
            );
        }
    } catch (err) {
        console.error(`Error updating document: ${err}`);
    }

    await setCourseList();

    res.status(200).json({
        message: "Course Data Deleted",
        CourseList
    });
});

module.exports = {
    renderAddCourse, renderUpdateCourse,
    getCourseList, addCourseNormalList, addCourseSubList,
    updateCourseNormalList, updateCourseSubList,
    renderDeleteCourse, deleteCourseNormalList, deleteCourseSubList
};