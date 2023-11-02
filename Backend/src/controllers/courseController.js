const asyncHandler = require("express-async-handler");
const {courseModel:Course} = require("../database/index");

//@desc Get all Courses
//@route GET /api/home/course
//access public
const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({});
    res.status(200).json(courses);
});

//@desc Get all Courses
//@route GET /api/home/course/:id
//access public
const getCourse = asyncHandler(async (req, res) => {    
    const course = await Course.find({ _id: req.params.id });
    if (!course) {
        res.status(404);
        throw new Error("course not found");
    }
    res.status(200).json(course);
});

//@desc Create Course
//@route POST /api/home/course
//access private
const createCourse = asyncHandler(async (req, res) => {
    const { title, subTitle, subArr } = req.body;
    if (!title || !(subTitle || subArr)) {
        res.status(400);
        throw new Error("All fields are mandatory");
    };
    const course = await Course.create({
        title,
        subTitle,
        subArr
    });
    res.status(201).json(course);
});

//@desc Update Course
//@route PUT /api/home/course/:id
//access private
const updateCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);
    if (!course) {
        res.status(404);
        throw new Error("course not found");
    }   

    const updateCourse = await Course.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true });
    res.status(200).json(updateCourse);
});

//@desc Delete Course
//@route DELETE /api/home/course/:id
//access private
const deleteCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);
    if (!course) {
        res.status(404);
        throw new Error("Course not found");
    }    

    await Course.deleteOne({ _id: req.params.id });

    res.status(200).json(course);
});

module.exports = { getCourses, getCourse, createCourse, updateCourse, deleteCourse };