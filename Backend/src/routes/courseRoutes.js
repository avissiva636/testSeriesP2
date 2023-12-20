const express = require("express");
const router = express.Router();

const { renderAddCourse, renderUpdateCourse,
    getCourseList, addCourseNormalList, addCourseSubList,
    updateCourseNormalList, updateCourseSubList,
    renderDeleteCourse, deleteCourseNormalList, deleteCourseSubList
} = require("../controllers/adminControllers/courseController");
const validateToken = require("../util/middleware/validateTokenHandler");

const {dataPass} = require("../util/middleware/imageUpload");

router.route("/getCourseList").get(getCourseList);

router.use(validateToken);

router.route("/addCourseNormalList").post(dataPass, addCourseNormalList);

router.route("/addCourseSubList").post(dataPass, addCourseSubList)

router.route("/addCourse").get(renderAddCourse);

router.route("/uploadUpdateCourseList").put(dataPass, updateCourseNormalList);

router.route("/updateCourseSubList").put(dataPass, updateCourseSubList);

router.route("/updateCourse").get(renderUpdateCourse);

router.route("/deleteNormalCourseList").delete(dataPass, deleteCourseNormalList)

router.route("/deleteSubCourseList").delete(dataPass, deleteCourseSubList)

router.route("/deleteCourse").get(renderDeleteCourse);

module.exports = router;