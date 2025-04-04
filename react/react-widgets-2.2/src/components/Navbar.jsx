import { NavLink } from "react-router-dom";

export default function Navbar() {
  const componentsList = ["Clock", "ColorChanger", "Counter", "FontSizer", "Greeting", "RGBSlider", "ShowHide", "TextAlignment"]


  return(
    <header>
      {componentsList.map((component, index) => (
          <div key={index} className="link-container">
            <NavLink to={`/${component}`}>{component}</NavLink>
          </div>
      ))}
    </header>
  )
}