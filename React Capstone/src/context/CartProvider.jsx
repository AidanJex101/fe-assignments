import {useState, createContext} from 'react';
import Counter from '../components/helper/Counter';
export const CartContext = createContext();

export default function CartProvider({children}) {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);
  const addToCart = (item) => {
    let itemId = item.id;
    let itemQuantity = item.quantity;
    const existingItem = cart.find((cartItem) => cartItem.id === itemId);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === itemId) {
          return { ...cartItem, quantity: cartItem.quantity + itemQuantity };
        }
        return cartItem;
      });
      setCart(updatedCart);
      return;
    }
    else {
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  const removeFromCart = (item) => {
    if (count === item.quantity) {
      setCart((prevCart) => prevCart.filter((prevItem) => prevItem.id !== item.id));
    }
    else {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - count };
        }
        return cartItem;
      });
      setCart(updatedCart);
      setCount(1);
    }
    
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
              <Counter count={count} setCount={setCount} maxCount={item.quantity}></Counter>
              <button onClick={() => {removeFromCart(item)}}>Remove from Cart</button>
            </div>
          );
        }
      )
    );
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
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