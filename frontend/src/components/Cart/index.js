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
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }
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
                <Box sx={style}>
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