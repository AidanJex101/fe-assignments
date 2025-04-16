import '../styles/ProductCard.scss'
import { NavLink } from 'react-router-dom'
import Counter from './Counter'
export default function ProductCard(props) {
  return(
    <div className="product-card">
      <h2>{props.title}</h2>
      <div className="product-image">
        <NavLink className="image-wrapper" to={`/products/${props.uid}`}><img src={props.image} alt="Product Image" width="100%"/></NavLink>
      </div>
      <div className="text-container">
        <h3>${props.price}</h3>
        <Counter/>
        <div className="reviews">
          <p>Reviews: {props.count}</p>
          <p>Rating: {props.rate}</p>
        </div>
      </div>
    </div>
  )
}