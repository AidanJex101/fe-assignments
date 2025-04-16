import {useState} from 'react'
import '../styles/Counter.scss'
export default function Counter() {
  const [count, updateCount] = useState(1)

  return(
    <div className="counter-container">
      <section>
        <button className="subtract" onClick={() => {if (count > 1) {updateCount(count - 1)}}}>-</button>
        <h2>{count}</h2>
        <button className="add" onClick={() => updateCount(count + 1)}>+</button>
      </section>
      <input type="submit" value="Add to Cart"/>
    </div>
  )
}