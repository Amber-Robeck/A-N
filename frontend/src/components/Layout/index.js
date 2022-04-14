import React from "react";
import Products from "../Products";
import { useSelector } from "react-redux";


const Layout = () => {
    let total = 0;
    const itemsList = useSelector((state) => state.cart);
    // console.log("state", itemsList)
    // itemsList.forEach((item) => {
    //     total += item.totalPrice;
    // });
    const showCart = useSelector((state) => state.cart.showCart);

    return (
        <div className="layout">
            <Products />
        </div>
    );
};

export default Layout;