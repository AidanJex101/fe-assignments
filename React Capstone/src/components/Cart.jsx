
import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../context/CartProvider";

export default function Cart() {
    const cartInfo = useContext(CartContext);
    const cartDetailsRef = useRef(null);
    const cartTotalRef = useRef(null);
    
    useEffect(() => {
        cartDetailsRef.innerHTML = cartInfo.getCart().innerHTML;
        cartTotalRef.innerText = `Total: $${cartInfo.getCartTotal()}`;
    }, [cartInfo.cart]);

    return (
        (cartInfo.cart.length === 0) 
        ? <div className="cart-container">
            <h1>Your cart is empty</h1>
            <p>Add some products to your cart to see them here.</p>
          </div>
        : <div className="cart-container">
        <h1>Your Cart</h1>
            <div ref={cartDetailsRef} className="cart-items">
                {cartInfo.getCart()}
            </div>
            <div className="cart-total">
                <h2 ref={cartTotalRef}>Total: ${cartInfo.getCartTotal()}</h2>
                <button className="checkout-button" onClick={cartInfo.clearCart}>Checkout</button>
            </div>
        </div>  
    );
}