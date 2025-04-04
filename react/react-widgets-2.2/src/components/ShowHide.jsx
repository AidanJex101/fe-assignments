import { useState } from "react";

export default function ShowHide() {
  const [display, updateDisplay] = useState({display: "block"})
  return(
    <div className="show-hide-container">
      <h2 style={display}>Hide me!</h2>
      <button onClick={() => {
        if (display.display == "block") {
          updateDisplay({display: "none"})
        }
        else {
          updateDisplay({display: "block"})
        }
      }}>Click me</button>
    </div>
  )
}