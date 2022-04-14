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
        name: "Dell lattitude",
        imgURL:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
    },
    {
        id: 4,
        name: "HP Pavillion",
        imgURL:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
    },
    {
        id: 5,
        name: "Acer Aspire",
        imgURL:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
    },
];
const Products = () => {
    return (
        <div>
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
        </div>
    );
};

export default Products;