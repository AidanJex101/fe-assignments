

export default function Counter(props) {
  let max = 10;
  if (props.maxCount) {
    max = props.maxCount;
  }
  return(
    <div className="counter-container">
      <section>
        <button className="subtract" onClick={() => {if (props.count > 1) (props.setCount((prevCount) => prevCount - 1))}}>-</button>
        <h2>{props.count}</h2>
        <button className="add" onClick={() => {if (props.count < max) (props.setCount((prevCount) => prevCount + 1))}}>+</button>
      </section>
    </div>
  )
}