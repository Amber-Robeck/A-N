import React from "react";
// import Header from "./Header";
import NavBar from "../NavBar"
import Products from "../Products.js";
// import "./Layout.css";
// import CartItems from "./CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
    let total = 0;
    const itemsList = useSelector((state) => state.cart.itemsList);

    itemsList.forEach((item) => {
        total += item.totalPrice;
    });
    const showCart = useSelector((state) => state.cart.showCart);

    return (
        <React.Fragment>
            <div className="layout">
                {<NavBar />}
                <Products />
                {/* {showCart && <CartItems />} */}
                <div className="total-price">
                    <h3>Total: ${total}</h3>
                    <button className="orderBtn">Place Order</button>
                </div>{" "}
            </div>
        </React.Fragment>
    );
};

export default Layout;