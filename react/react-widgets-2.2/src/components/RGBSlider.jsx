import {useState, useRef} from 'react'

export default function RGBSlider() {
  const [red, setRed] = useState(120)
  const [green, setGreen] = useState(120)
  const [blue, setBlue] = useState(120)
  const redSlider = useRef(null)
  const blueSlider = useRef(null)
  const greenSlider = useRef(null)


  function handleOnChange(type) {
    if (type == "red") {
      setRed(redSlider.current.value)
    }
    else if (type == "green") {
      setGreen(greenSlider.current.value)
    }
    else {
      setBlue(blueSlider.current.value)
    }
  }

  return(
    <div className="rgb-slider-container">
      <div className="color-box" style={{width: "100px", height: "100px", backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></div>
      <h1>{`Red: ${red}   Green: ${green}   Blue: ${blue}`}</h1>
      <section>
        <label htmlFor="red">Red: </label>
        <input onChange={(e) => handleOnChange(e.target.name)} ref={redSlider} type="range" id="red" name="red" min="0" max="255"/>
      </section>
      <section>
         <label htmlFor="green">Green: </label>
        <input onChange={(e) => handleOnChange(e.target.name)} ref={greenSlider} type="range" id="green" name="green" min="0" max="255"/>
      </section>
      <section>
        <label htmlFor="blue">Blue: </label>
        <input onChange={(e) => handleOnChange(e.target.name)}  ref={blueSlider} type="range" id="blue" name="blue" min="0" max="255"/>
      </section>
    </div>
  )
}