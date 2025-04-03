import {useState, useRef, useEffect} from 'react'

export default function ColorChanger() {
  const header = useRef(null)
  const input = useRef(null)
  const [color, setColor] = useState("black")


  const normalMessage = "Change my color!"



  useEffect(() => {
    header.current.style.color = color
  }, [color])

  function handleClick() {
    setColor(input.current.value)
  }

  return(
    <div className="color-changer-container">
      <h1 ref={header}>{normalMessage}</h1>
      <input ref={input} type="text" placeholder="Enter a color"/>
      <button onClick={handleClick}>Update</button>
    </div>
  )
}
