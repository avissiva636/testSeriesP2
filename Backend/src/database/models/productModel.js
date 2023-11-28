const mongoose = require("mongoose");

const productschema = mongoose.Schema({
    mainProduct: {
        type: String,
        required: [true, "please add the product name"],
    },
    subProducts: {
        type: [
            {
                name: String,
                link: String,
                photo:String,
            }
        ],
        required: [true, "please add the subprodudcts"],
    },

},
    { timestamps: true, });

module.exports = mongoose.model("Product", productschema);