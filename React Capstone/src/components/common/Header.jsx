
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'
import cart from '../../assets/shopping-cart.png'
export default function Header() {
  const cartData = useContext(CartContext)
  return(
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src="/logo.png" alt="logo" width="100px"/>
        </NavLink>
      </div>
      <ul className='navigation'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <div className="cart">
          <NavLink to="/cart">
            <img src={cart} alt="cart"/>
            <span className="cart-count">{cartData.getCartQuantity()}</span>
          </NavLink>
        </div>
      </ul>
    </header>
  )
}