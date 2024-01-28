const asyncHandler = require("express-async-handler");
const multer = require('multer');
const fs = require('fs');
const path = require("path");

const { productModel: Product } = require("../../database/index");

let productList = []
async function setProductList() {
    try {
        const retrievedProduct = await Product.find();
        productList = retrievedProduct;
    } catch (error) {
        console.error('Error setting productList:', error);
    }
}

// function getProductPhoto(mainProduct, subProductNames) {
//     const product = productList.find(p => p.mainProduct === mainProduct);

//     if (product) {
//         return product.subProducts
//             .filter(subProduct => subProductNames.includes(subProduct.name))
//             .map(subProduct => subProduct.photo);

//         // return subProductNames.map(subProductName => {
//         //     const subProduct = product.subProducts.find(s => s.name === subProductName);
//         //     return subProduct ? subProduct.photo : null;
//         // }
//         // );
//     }

//     return [];
// }

//@desc Display the Add Product page
//@route GET /addProduct
//access public

const renderProductList = asyncHandler((req, res) => {
    res.render("products/addProduct", {
        message: "add product",
        productList: productList,
    });
});

//@desc Get all Products
//@route GET /getProductList
//access public
const getProductList = asyncHandler(async (req, res) => {
    if (req.headers.origin) {
        await setProductList()
        return res.status(200).json({ productList });
    }
});

//@desc Add Product
//@route POST /addProductList
//access public
const addProductList = asyncHandler(async (req, res) => {
    var mainProduct = req.body.mainProduct;
    var subProducts = JSON.parse(req.body.subProducts);
    // const productImageNames = req.productImageNames;

    // subProducts.forEach((subProduct, index) => {
    //     subProduct.photo = productImageNames[index];
    // });

    await Product.create({
        mainProduct: mainProduct,
        subProducts: subProducts,
    })
    await setProductList();

    res.json({
        message: "Product Data Updated",
        productList,
    });
});

//@desc Update Products
//@route POST /updateProductList
//access public
const updateProductList = asyncHandler(async (req, res) => {
    const updateProductList = JSON.parse(req.body.updateProductList);
    var prodIndex = 0;
    for (const uproduct of updateProductList) {
        try {
            // Check if SubTitle exists
            const existingProduct = await Product.findOne({ mainProduct: uproduct.mainProduct, "subProducts.name": uproduct.originalSubProductName });

            if (existingProduct) {
                // SubTitle exists, update it
                await Product.updateOne(
                    { mainProduct: uproduct.mainProduct, "subProducts.name": uproduct.originalSubProductName },
                    {
                        $set: {
                            "subProducts.$": uproduct.subProducts,
                        },
                    }
                );
            } else {
                // SubTitle doesn't exist, add it
                // uproduct.subProducts.photo = req.productImageNames[prodIndex++];
                await Product.updateOne(
                    { mainProduct: uproduct.mainProduct },
                    {
                        $addToSet: {
                            subProducts: uproduct.subProducts,
                        },
                    },
                    { upsert: true }
                );
            }
        } catch (err) {
            console.error(`Error updating document: ${err}`);
        }
    }
    await setProductList();

    res.json({
        message: "Product Data Updated",
        productList,
    });
});

const renderUpdateProduct = asyncHandler((req, res) => {
    res.render("products/updateProduct", {
        message: "update Product",
        productList: productList,
    });
});

const deleteProductList = asyncHandler(async (req, res) => {
    const producttoDelete = JSON.parse(req.body.producttoDelete);
    const category = req.body.category;
    if (category === "MAIN") {
        await Product.deleteOne({ mainProduct: producttoDelete });
    }
    else if (category === "SUB") {
        const subProduct = JSON.parse(req.body.subProduct);
        try {
            for (const dproduct of subProduct) {
                await Product.findOneAndUpdate(
                    { mainProduct: producttoDelete },
                    { $pull: { subProducts: { name: dproduct } } },
                    { new: true }
                );
                // var photoLinks = getProductPhoto(producttoDelete, subProduct);

                // // Delete the file
                // photoLinks.forEach((photo) => {
                //     prodPhoto = path.join(__dirname, '../../../public/images/products', photo);
                //     if (fs.existsSync(prodPhoto)) {
                //         fs.unlinkSync(prodPhoto);
                //     } else {
                //         console.log(`File ${photo} does not exist.`);
                //     }
                // });
            }
        } catch (err) {
            console.error(`Error Deleting document: ${err}`);
        }
    }
    await setProductList();

    res.json({
        message: "Product Data Deleted",
        productList,
    });
});

const renderDeleteProduct = asyncHandler((req, res) => {
    res.render("products/deleteProduct", {
        message: "delete Course",
        productList: productList,
    });
});

module.exports = {
    renderProductList,
    getProductList, addProductList, updateProductList, renderUpdateProduct,
    deleteProductList, renderDeleteProduct
}