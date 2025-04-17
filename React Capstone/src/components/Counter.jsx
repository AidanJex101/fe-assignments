

export default function Counter(props) {

  return(
    <div className="counter-container">
      <section>
        <button className="subtract" onClick={() => {if (props.count > 1) (props.setCount((prevCount) => prevCount - 1))}}>-</button>
        <h2>{props.count}</h2>
        <button className="add" onClick={() => (props.setCount((prevCount) => prevCount + 1))}>+</button>
      </section>
      <input type="submit" value="Add to Cart" onClick={props.handleAddCart}/>
    </div>
  )
}