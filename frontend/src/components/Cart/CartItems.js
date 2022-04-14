import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartItems = () => {
    const cartItems = useSelector((state) => state.cart.itemsList);
    // console.log("thiscart", cartItems)
    return (
        <div className="cart-container">
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {" "}
                        <CartItem
                            quantity={item.quantity}
                            id={item.id}
                            price={item.price}
                            total={item.totalPrice}
                            name={item.name}
                        />{" "}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartItems;