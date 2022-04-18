import { Box } from "@mui/material";
import React from "react";
import Product from "./Product/Product.js";
const DUMMY_PRODUCTS = [
    {
        id: 1,
        name: "Long sleeve button-up",
        category: "Mens",
        imgURL:
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        price: 25,
    },
    {
        id: 2,
        name: "White short sleeve",
        category: "Mens",
        imgURL:
            "https://images.unsplash.com/photo-1609228579945-4067c8186939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        price: 10,
    },
    {
        id: 3,
        name: "Flannel Button-up",
        imgURL: "https://litb-cgis.rightinthebox.com/images/640x853/202108/bps/product/inc/wbcahs1629864169796.jpg?fmt=webp&v=1",
        price: 25,
    },
    {
        id: 4,
        name: "Denim long sleeve",
        imgURL: "https://img.guess.com/image/upload/f_auto,q_auto:eco,fl_strip_profile,dpr_1.5,fl_advanced_resize,fl_progressive,w_392,c_scale/v1/NA/Style/ECOMM/M1BH02D14LB-ACDI",
        price: 22,
    },
    {
        id: 5,
        name: "Flannel short sleeve",
        imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZA2EFa0nzl11jTVLcKRvifqxqw7ZN2OV5uQ&usqp=CAU",
        price: 17,
    },
];
const Products = () => {
    return (
        <Box>
            <ul className="products-container">
                {DUMMY_PRODUCTS.map((product, index) => (
                    <li key={index}>
                        <Product
                            id={product.id}
                            name={product.name}
                            imgURL={product.imgURL}
                            price={product.price}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
};

export default Products;