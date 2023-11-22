const express = require("express");
const router = express.Router();

let CourseList = [
    {
        Title: "IAS",
        Description: "IAS",
    },
    {
        Title: "KAS",
        Description: "KAS",
    },
    {
        Title: "SAAD",
        Description: "SAAD",
    },
    {
        Title: "KPSC Prelims",
        SubTitle: [
            {
                Title: "CTI",
                Description: "CTI",
            },
            {
                Title: "AE/JE",
                Description: "AE/JE",
            },
            {
                Title: "Group C",
                Description: "Group C",
            },
        ],
    },
];

let productList = [
    {
        mainProduct: "KAS Mains notes",
        subProducts: [
            { name: "Subproduct 1", link: "wrotea" },
            { name: "Subproduct 2", link: "wroteb" },
            { name: "Subproduct 3", link: "wrotec" },
        ],
    },
    {
        mainProduct: "KAS Prelims notes",
        subProducts: [
            { name: "Subproduct A", link: "dheara" },
            { name: "Subproduct B", link: "dhearb" },
            { name: "Subproduct C", link: "dhearc" },
        ],
    },
    {
        mainProduct: "Current affairs magazines",
        subProducts: [
            { name: "Subproduct X", link: "goodlea" },
            { name: "Subproduct Y", link: "goodleb" },
            { name: "Subproduct Z", link: "goodlec" },
        ],
    },
    {
        mainProduct: "SAAD Material",
        subProducts: [
            { name: "Subproduct I", link: "youtubea" },
            { name: "Subproduct II", link: "youtubeb" },
            { name: "Subproduct III", link: "youtubec" },
        ],
    },
    {
        mainProduct: "KPSC Group C Material",
        subProducts: [
            { name: "Subproduct Alpha", link: "gmaila" },
            { name: "Subproduct Beta", link: "gmailb" },
            { name: "Subproduct Gama", link: "gmailc" },
        ],
    },
    {
        mainProduct: "PSI/ ESI Material",
        subProducts: [
            { name: "Subproduct 4", link: "checka" },
            { name: "Subproduct 5", link: "checkb" },
            { name: "Subproduct 6", link: "checkc" },
        ],
    },
    {
        mainProduct: "FDA & SDA Material",
        subProducts: [
            { name: "Subproduct 11", link: "materiala" },
            { name: "Subproduct 12", link: "materialb" },
            { name: "Subproduct 13", link: "materialc" },
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
        CourseList: CourseList,
    });
})

router.route("/addProduct").get((req, res) => {
    res.render("products/addProduct", {
        message: "delete Course",
        productList: productList,
    });
})

router.route("/updateProduct").get((req, res) => {
    res.render("products/updateProduct", {
        message: "delete Course",
        productList: productList,
    });
})

router.route("/deleteProduct").get((req, res) => {
    res.render("products/deleteProduct", {
        message: "delete Course",
        productList: productList,
    });
})

module.exports = router;