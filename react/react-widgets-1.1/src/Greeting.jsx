import { useState } from "react"

export default function Greeting() {
  const [greeting, updateGreeting] = useState("Hello!")
  return(
    <div className="greeting-container">
      <h2>{greeting}</h2>
      <button onClick={() => {
        if (greeting == "Hello!") {
          updateGreeting("Goodbye!")
        }
        else {
          updateGreeting("Hello!")
        }
      }}>Toggle Me</button>
    </div>
  )
}