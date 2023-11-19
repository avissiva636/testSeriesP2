const express = require("express");
const router = express.Router();

let CourseList = [
    {
      Title: "IAS",
      Description:"IAS",
    },
    {
      Title: "KAS",
      Description:"KAS",
    },
    {
      Title: "SAAD",
      Description:"SAAD",
    },
    {
      Title: "KPSC Prelims",
      SubTitle: [
        {
          Title: "CTI",
          Description:"CTI",          
        },
        {
          Title: "AE/JE",
          Description:"AE/JE",
        },
        {
          Title: "Group C",
          Description:"Group C",
        },
      ],
    },
  ];


router.route("/").get((req, res) => {
    res.render("adminHome", {
        message: "update",
        CourseList: [{ Title: 'Sample Course' }],
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

router.route("/addCourse").get((req, res) => {
    res.render("courses/addCourse", {
        message: "add Course",
        CourseList: [{ Title: 'Sample Course' }],
    });
})

router.route("/updateCourse").get((req, res) => {
    res.render("courses/updateCourse", {
        message: "update Course",
        CourseList: CourseList,
    });
})

router.route("/deleteCourse").get((req, res) => {
    res.render("courses/deleteCourse", {
        message: "delete Course",
        CourseList: [{ Title: 'Sample Course' }],
    });
})

module.exports = router;