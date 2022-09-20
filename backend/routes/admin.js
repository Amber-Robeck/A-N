const express = require('express');
const router = express.Router();
const Product = require('../models/Product')
// /admin routes

//all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.json({ message: err });
    }
});

//Create product
router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        originalPrice: req.body.originalPrice,
        currentPrice: req.body.currentPrice,
        onSale: req.body.onSale,
        saleType: req.body.saleType,
        variations: req.body.variations,
        availableSizes: req.body.availableSizes,
    });

    try {
        const newProduct = await product.save();
        res.json({
            message: "New product saved",
            newProduct: newProduct
        });
    } catch (err) {
        res.json({ message: err });
    }
});

//Individual products
router.get('/update/:productId', async (req, res) => {
    try {
        const singleProduct = await Product.findById(req.params.productId);
        res.json(singleProduct);
    } catch (err) {
        res.json({ message: err });
    }
});

//Update
router.put('/update/:productId', async (req, res) => {
    console.log(req.body)
    try {
        const updatedProduct = await Product.updateOne(
            { _id: req.params.productId },
            {
                $set: {
                    name: req.body.name,
                    description: req.body.description,
                    category: req.body.category,
                    originalPrice: req.body.originalPrice,
                    currentPrice: req.body.currentPrice,
                    onSale: req.body.onSale,
                    saleType: req.body.saleType,
                    variations: req.body.variations
                }
            });
        res.json(updatedProduct);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;