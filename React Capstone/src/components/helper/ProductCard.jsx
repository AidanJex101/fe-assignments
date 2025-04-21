
import { NavLink } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartProvider'
import Counter from './Counter'
export default function ProductCard(props) {
  const cartData = useContext(CartContext)
  
  const [count, setCount] = useState(1)
  const [cartItem, setCartItem] = useState({
    name: props.title,
    price: props.price,
    image: props.image,
    id: props.uid
  })

  useEffect(() => {
    setCartItem((prevItem) => ({
      ...prevItem,
      quantity: count
    }))
  }, [count])

  function handleAddCart() {
    cartData.addToCart(cartItem)
    setCount(1)
    alert(`${cartItem.name} has been added to your cart`)
  }

  return(
    <div className="product-card">
      <h2>{props.title}</h2>
      <div className="product-image">
        <NavLink className="image-wrapper" to={`/products/${props.uid}`}><img src={props.image} alt="Product Image" width="100%"/></NavLink>
      </div>
      <div className="text-container">
        <h3>${props.price}</h3>
        <Counter setCount={setCount} count={count}/>
        <input type="submit" value="Add to Cart" onClick={handleAddCart}/>
        <div className="reviews">
          <p>Reviews: {props.count}</p>
          <p>Rating: {props.rate}</p>
        </div>
      </div>
    </div>
  )
}