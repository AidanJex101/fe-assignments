import {useState, useRef, useEffect} from "react"

export default function FontSizer() {

  const [size, setSize] = useState(50)
  const header = useRef(null)


  useEffect(() => {
    header.current.style.fontSize = `${size}px`
  }, [size])

  function Grow() {
    if (size < 96) {
      setSize((s) => s + 5)
    }
  }

  function Shrink() {
    if (size > 4) {
      setSize((s) => s - 5)
    }
  }

  return(
    <div className="font-sizer-container">
      <h1 ref={header}>Star Wars: The Force Awakens</h1>
      <div className="button-container">
        <button onClick={Grow}>Grow</button>
        <button onClick={Shrink}>Shrink</button>
      </div>
    </div>
  )
}