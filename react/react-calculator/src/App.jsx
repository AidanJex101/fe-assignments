import { useState } from 'react'
import {evaluate} from 'mathjs'

import './App.css'
import Row from './components/Row.jsx'
import Button from './components/Button.jsx'
import Input from './components/Input.jsx'

function App() {

  const [input, setInput] = useState("")

  const buttonOptions = [

    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "+"],
    ["^", "0", ".", "-"],

  ]

  function handleOptClick(val) {
    setInput((prevInput) => prevInput + val)
  }

  function renderButtons() {
    return buttonOptions.map((row, index) => {
      return (
        <Row key={index} handleClick={handleOptClick}>{row}</Row>
      )
    })
  }

  function handleEqualClick() {
    setInput((prevInput) => evaluate(prevInput))
  }

  return (
    <div className="app-container">
      <Input>{input}</Input>
      {renderButtons()}
      <div className="row">
        <Button handleClick={() => {setInput("")}} label="clear-btn">Clear</Button>
        <Button handleClick={handleEqualClick} label="equal-btn">=</Button>
      </div>
    </div>
  )
}

export default App
