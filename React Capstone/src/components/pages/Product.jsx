
import {useState, useEffect} from 'react'
import { Commet } from 'react-loading-indicators'
import { NavLink } from 'react-router-dom'
import Counter from '../helper/Counter'
import { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'

export default function Product(props) {

  const [cardData, setCardData] = useState([])
  const id = props.match.params.id
  const [isLoading, setIsLoading] = useState(true)
  const [count, setCount] = useState(1)
  const [cartItem, setCartItem] = useState({})
  const cartData = useContext(CartContext)

  function getProduct(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCardData(data)
        setIsLoading(false)
      })
      .catch((err) => console.error("Get Card Data Error: ", err))
  }

  useEffect(() => {
    getProduct(id)
    
  }, [])

  useEffect(() => {
    setCartItem({
      name: cardData.title,
      price: cardData.price,
      image: cardData.image,
      id: cardData.uid,
      quantity: count
    })
  }, [isLoading])

    
  
    useEffect(() => {
      setCartItem((prevItem) => ({
        ...prevItem,
        quantity: count
      }))
    }, [count])
  
    function handleAddCart() {
      cartData.addToCart(cartItem)
    }

   

  return(
    <>
      {isLoading 
      ? <Commet color="#32cd32" size="large" text="" textColor="" /> 
      : <div className="product-card-large">
          <h2>{cardData.title}</h2>
          <div className="product-image">
            <img src={cardData.image} alt="Product Image" width="100%"/>
          </div>
          <div className="text-container-large">
            <h3>${cardData.price}</h3>
            <p>{cardData.description}</p>
            <Counter setCount={setCount} handleAddCart={handleAddCart} count={count}/>
            <div className="reviews-large">
              <p>Reviews: {cardData.rating.count}</p>
              <p>Rating: {cardData.rating.rate}</p>
            </div>
          </div>
          <NavLink to="/products">Back to Products</NavLink>
        </div>}
    </>
  )
}