const express = require("express");
const router = express.Router();
const multer = require('multer');
const dataflow = multer();

const { renderAddCourse, renderUpdateCourse,
    getCourseList, addCourseNormalList, addCourseSubList,
    updateCourseNormalList, updateCourseSubList,
    renderDeleteCourse, deleteCourseNormalList, deleteCourseSubList
} = require("../controllers/adminControllers/courseController");



router.route("/getCourseList").get(getCourseList);

router.route("/addCourseNormalList").post(dataflow.any(), addCourseNormalList);

router.route("/addCourseSubList").post(dataflow.any(), addCourseSubList)

router.route("/addCourse").get(renderAddCourse);

router.route("/uploadUpdateCourseList").post(dataflow.any(), updateCourseNormalList);

router.route("/updateCourseSubList").post(dataflow.any(), updateCourseSubList);

router.route("/updateCourse").get(renderUpdateCourse);

router.route("/deleteNormalCourseList").post(dataflow.any(), deleteCourseNormalList)

router.route("/deleteSubCourseList").post(dataflow.any(), deleteCourseSubList)

router.route("/deleteCourse").get(renderDeleteCourse);

module.exports = router;