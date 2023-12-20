const express = require("express");
const router = express.Router();
const validateToken = require("../util/middleware/validateTokenHandler");
const { emailHandler } = require("../controllers/emailHandler");


router.route("/loginAdmin").get((req, res) => {
    res.status(200).render("login");
    // res.status(200).json({message:"hello"});
})

router.route("/validator").get(validateToken);

router.route("/").get((req, res) => {
    if (!req.cookies?.jwt) {
        res.redirect("/loginAdmin");
    }
    // validateToken();
    res.status(200).render("adminHome", {
        message: "adminHome",
    });
    // res.status(200).json({message:"hello"});
})

// Testing View
router.route("/test").get((req, res) => {
    res.render("test", {
        message: "update",
        // CourseList:[{ Title: 'Sample Course' }],
    });
})

router.route("/emailHandler").post(emailHandler);

router.route("/logout").get((req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.status(200).render("login");
});


module.exports = router;