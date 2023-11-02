const express = require("express");
const { getCourses, getCourse, createCourse, updateCourse, deleteCourse,
} = require("../controllers/contactController");

const validateToken = require("../util/middleware/validateTokenHandler");
const router = express.Router();

router.route("/course").get(getCourses);
router.route("/course/:id").get(getCourse);
router.route("/product").get(getProducts);
router.route("/product/:id").get(getProduct);

router.use(validateToken);

router.route("/course").post(createCourse);
router.route("/course/:id").put(updateCourse).delete(deleteCourse);

router.route("/product").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct);

// router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;