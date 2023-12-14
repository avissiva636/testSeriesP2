const express = require("express");
const router = express.Router();
const multer = require('multer');
const dataflow = multer();

const { renderAddCourse, renderUpdateCourse,
    getCourseList, addCourseNormalList, addCourseSubList,
    updateCourseNormalList, updateCourseSubList,
    renderDeleteCourse, deleteCourseNormalList, deleteCourseSubList
} = require("../controllers/adminControllers/courseController");
const validateToken = require("../util/middleware/validateTokenHandler");


router.route("/getCourseList").get(getCourseList);

router.use(validateToken);

router.route("/addCourseNormalList").post(dataflow.any(), addCourseNormalList);

router.route("/addCourseSubList").post(dataflow.any(), addCourseSubList)

router.route("/addCourse").get(renderAddCourse);

router.route("/uploadUpdateCourseList").put(dataflow.any(), updateCourseNormalList);

router.route("/updateCourseSubList").put(dataflow.any(), updateCourseSubList);

router.route("/updateCourse").get(renderUpdateCourse);

router.route("/deleteNormalCourseList").delete(dataflow.any(), deleteCourseNormalList)

router.route("/deleteSubCourseList").delete(dataflow.any(), deleteCourseSubList)

router.route("/deleteCourse").get(renderDeleteCourse);

module.exports = router;