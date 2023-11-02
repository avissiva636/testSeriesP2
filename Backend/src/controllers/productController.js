const asyncHandler = require("express-async-handler");
const { productModel: Product } = require("../database/index");


//@desc Get all Products
//@route GET /api/home/product
//access public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
});

//@desc Get all Products
//@route GET /api/home/product/:id
//access public
const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.find({ _id: req.params.id });
    if (!product) {
        res.status(404);
        throw new Error("product not found");
    }
    res.status(200).json(product);
});

//@desc Create Product
//@route POST /api/home/product
//access private
const createProduct = asyncHandler(async (req, res) => {
    const { mainProduct, subProducts } = req.body;
    if (!mainProduct || !subProducts) {
        res.status(400);
        throw new Error("All fields are mandatory");
    };
    const product = await Product.create({
        title,
        subTitle,
        subArr
    });
    res.status(201).json(product);
});

//@desc Update Product
//@route PUT /api/home/product/:id
//access private
const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("product not found");
    }

    const updateProduct = await Product.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true });
    res.status(200).json(updateProduct);
});

//@desc Delete Product
//@route DELETE /api/home/product/:id
//access private
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("product not found");
    }

    await Product.deleteOne({ _id: req.params.id });

    res.status(200).json(product);
});

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };

