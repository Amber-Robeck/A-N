import React from "react";
import Products from "../Products/Products";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";


const Layout = () => {
    let total = 0;
    const itemsList = useSelector((state) => state.cart);
    // console.log("state", itemsList)
    // itemsList.forEach((item) => {
    //     total += item.totalPrice;
    // });
    const showCart = useSelector((state) => state.cart.showCart);

    return (
        <Box className="layout">
            <Products />
        </Box>
    );
};

export default Layout;