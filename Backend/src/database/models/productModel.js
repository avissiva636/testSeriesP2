const mongoose = require("mongoose");

const productschema = mongoose.Schema({
    mainProduct: {
        type: String,
        required: [true, "please add the product name"],
    },
    subProducts: {
        type: [String],
        required: [true, "please add the subprodudcts"],
    },

},
    { timestamps: true, });

module.exports = mongoose.model("Product", productschema);