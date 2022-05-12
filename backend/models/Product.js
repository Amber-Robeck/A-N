const mongoose = require('mongoose');


//TODO: Add quantity to schema, maybe within variations ie: [{black: [{s: 1}, {m: 2}, {l: 0}]}, {white: [{s: 0}, {m: 3}, {l: 4}]}]
const variationSchema = new mongoose.Schema({
    name: String,
    availableSizes: Array,
});

const ProductSchema = mongoose.Schema({
    name: String,
    description: String,
    category: Array,
    originalPrice: Number,
    currentPrice: Number,
    onSale: Boolean,
    saleType: String,
    variations: [variationSchema],

});

const Product = mongoose.model('Product', ProductSchema);

// Prepopulate data if database is empty, will not duplicate
Product.find({}).exec((err, collection) => {
    if (collection.length === 0) {
        Product.insertMany(
            [
                {
                    "name": "T-shirt",
                    "description": "Simple shirt made of cotton.",
                    "category": ["mens", "shirt"],
                    "originalPrice": 15.99,
                    "currentPrice": 14.99,
                    "onSale": true,
                    "saleType": "get1now",
                    "variations": [{ "name": "gray", "availableSizes": [{ "s": 1 }, { "m": 2 }, { "xl": 1 }] }, { "name": "white", "availableSizes": [{ "s": 1 }, { "m": 7 }, { "xl": 4 }] }, { "name": "black", "availableSizes": [{ "s": 3 }, { "m": 1 }, { "xl": 2 }] }],
                },
                {
                    "name": "Longsleeve shirt",
                    "description": "Simple shirt made of cotton.",
                    "category": ["mens", "shirt"],
                    "originalPrice": 14.99,
                    "currentPrice": 13.99,
                    "onSale": true,
                    "saleType": "get1now",
                    "variations": [{ "name": "gray", "availableSizes": [{ "s": 1 }, { "m": 2 }, { "l": 0 }, { "xl": 1 }] }, { "name": "white", "availableSizes": [{ "s": 1 }, { "m": 7 }, { "xl": 4 }] }, { "name": "black", "availableSizes": [{ "s": 3 }, { "m": 1 }, { "xl": 2 }] }],
                },
                // {
                //     "name": "T-shirt",
                //     "description": "Simple shirt made of cotton.",
                //     "category": ["womens", "shirt"],
                //     "originalPrice": 16.99,
                //     "currentPrice": 15.99,
                //     "onSale": true,
                //     "saleType": "get1now",
                //     "variations": ["gray", "black", "white"],
                //     "availableSizes": ["s", "m", "l"]
                // },

            ],
            (insertErr) => {
                if (insertErr) {
                    console.log(insertErr);
                }
            }
        );
    }
});

module.exports = Product;