
import {useState, useEffect} from 'react'
import { Commet } from 'react-loading-indicators'
import { NavLink } from 'react-router-dom'
import '../styles/product.scss'
import Counter from './Counter'
import Header from './Header'
import Footer from './Footer'

export default function Product() {

  const [cardData, setCardData] = useState([])
  const currentUrl = window.location.href
  const pathParts = currentUrl.split("/")
  const id = pathParts[pathParts.length - 1]
  const [isLoading, setIsLoading] = useState(true)

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
            <Counter/>
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