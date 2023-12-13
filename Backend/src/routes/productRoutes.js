const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require('multer');
const dataflow = multer();

const { renderProductList,
    getProductList, addProductList,
    updateProductList, renderUpdateProduct,
    deleteProductList, renderDeleteProduct
} = require("../controllers/adminControllers/productController");

const productStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/products'));
    },
    filename: function (req, file, cb) {
        const fileName = Date.now() + path.extname(file.originalname);
        // req.productImagePath = path.join(__dirname, '../../public/images/products', fileName);
        req.productImageNames = req.productImageNames || []; // Initialize an array if not present
        req.productImageNames.push(fileName);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});


const productUpload = multer({ storage: productStorage });

router.route("/getProductList").get(getProductList);

// router.route("/addProductList").post(productUpload.array('photo'), addProductList);
router.route("/addProductList").post(dataflow.any(),addProductList);

router.route("/addProduct").get(renderProductList);

// router.route("/updateProductList").post(productUpload.array('prodUpPhoto'), updateProductList);
router.route("/updateProductList").post(dataflow.any(),updateProductList);

router.route("/updateProduct").get(renderUpdateProduct);


router.route("/deleteProductList").post(dataflow.any(), deleteProductList)

router.route("/deleteProduct").get(renderDeleteProduct);

module.exports = router;