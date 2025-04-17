import {useState, createContext} from 'react';
export const CartContext = createContext();

export default function CartProvider({children}) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const getCart = () => {
    return(
        cart.map((item) => {
        return (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Amount: {item.quantity}</p>
              </div>
            </div>
          );
        }
      )
    );
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  const getCartQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, getCart, getCartTotal, clearCart, getCartQuantity}}>
      {children}
    </CartContext.Provider>
  );
}