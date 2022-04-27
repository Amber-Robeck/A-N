import { Box, Card } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.addToCart({ name, id, price, })
        );
    };
    return (
        <Box>
        <Link to={`/men/${id}`}>
        <Card className="card"
        cover={<a href={`/men/${id}`}></a>}>
            <img src={imgURL} alt={name} />
            <h2>{name}</h2>
            <p>$ {price}</p>
            <button onClick={addToCart}>Add to cart</button>
        </Card>
            </Link>
        </Box>
    );
};

export default Product;