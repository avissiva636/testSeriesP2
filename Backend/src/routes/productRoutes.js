const express = require("express");
const router = express.Router();

const { renderProductList,
    getProductList, addProductList,
    updateProductList, renderUpdateProduct,
    deleteProductList, renderDeleteProduct
} = require("../controllers/adminControllers/productController");
const validateToken = require("../util/middleware/validateTokenHandler");

const { productUpload, dataPass } = require("../util/middleware/imageUpload");

router.route("/getProductList").get(getProductList);

router.use(validateToken);

// router.route("/addProductList").post(productUpload.array('photo'), addProductList);
router.route("/addProductList").post(dataPass, addProductList);

router.route("/addProduct").get(renderProductList);

// router.route("/updateProductList").post(productUpload.array('prodUpPhoto'), updateProductList);
router.route("/updateProductList").put(dataPass, updateProductList);

router.route("/updateProduct").get(renderUpdateProduct);


router.route("/deleteProductList").delete(dataPass, deleteProductList)

router.route("/deleteProduct").get(renderDeleteProduct);

module.exports = router;