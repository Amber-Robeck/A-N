import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { Button, Modal, Box, Typography } from "@mui/material"
import CartItems from "./CartItems";
const Cart = () => {
    const quantity = useSelector((state) => state.cart.totalQuantity);
    // const dispatch = useDispatch();
    // const showCart = () => {
    //     dispatch(cartActions.setShowCart());
    // }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="cartIcon">
            {/* <h3 onClick={showCart}>Cart: {quantity} Items</h3> */}
            <Button onClick={handleOpen}>Cart: {quantity} Items</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="cartMdl">
                    <Button onClick={handleClose} className="closeBtn">X</Button>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Your cart
                    </Typography>
                    <CartItems />
                    <Button className="orderBtn">Place Order</Button>
                </Box>
            </Modal>
        </div>
    );
};

export default Cart;