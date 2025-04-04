import {useState} from 'react'

export default function Counter() {
  const [count, updateCount] = useState(0)

  return(
    <div className="counter-container">
      <h2>{count}</h2>
      <section>
        <button onClick={() => updateCount(count + 1)}>+</button>
        <button onClick={() => {if (count > 1) {updateCount(count - 1)}}}>-</button>
      </section>
    </div>
  )
}