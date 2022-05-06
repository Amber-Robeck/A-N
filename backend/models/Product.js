const mongoose = require('mongoose');


//TODO: Add quantity to schema, maybe within variations ie: [{black: [{s: 1}, {m: 2}, {l: 0}]}, {white: [{s: 0}, {m: 3}, {l: 4}]}]
const ProductSchema = mongoose.Schema({
    name: String,
    description: String,
    category: Array,
    originalPrice: Number,
    currentPrice: Number,
    onSale: Boolean,
    saleType: String,
    variations: Array,
    availableSizes: Array,

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
                    "originalPrice": 14.99,
                    "currentPrice": 13.99,
                    "onSale": true,
                    "saleType": "get1now",
                    "variations": ["gray", "black", "white"],
                    "availableSizes": ["s", "m", "l"]
                },
                {
                    "name": "T-shirt",
                    "description": "Simple shirt made of cotton.",
                    "category": ["womens", "shirt"],
                    "originalPrice": 16.99,
                    "currentPrice": 15.99,
                    "onSale": true,
                    "saleType": "get1now",
                    "variations": ["gray", "black", "white"],
                    "availableSizes": ["s", "m", "l"]
                },

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