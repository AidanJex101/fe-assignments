import {useEffect, useState, useRef} from 'react'

export default function TextAlignment() {
  const [alignment, setAlignment] = useState("center")
  const paragragh = useRef(null)

  useEffect(() => {
    paragragh.current.style.textAlign = alignment
  }, [alignment])

  function changeAlignment(innerText) {
    setAlignment(innerText)
  }

  return(
    <div className="text-alignment-widget">
      <p ref={paragragh}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In excepturi pariatur temporibus? Quas nostrum soluta iusto, asperiores natus nulla omnis veritatis suscipit laudantium distinctio tenetur corrupti assumenda repellat iste porro!</p>
      <div className="button-container">
        <button onClick={(event) => changeAlignment(event.target.innerText.toLowerCase())}>Left</button>
        <button onClick={(event) => changeAlignment(event.target.innerText.toLowerCase())}>Center</button>
        <button onClick={(event) => changeAlignment(event.target.innerText.toLowerCase())}>Right</button>
      </div>
    </div>
  )
}