import Image from "./Image.jsx";
import Button from "./Button.jsx";
import "../styles/SideBar.css";
import logo from"../assets/react.svg"

export default function SideBar() {
  return(
    <div className="side-bar">
      <Image src={logo} alt="logo" width="100px" height="100px"/>
      <Button name="Home"/>
      <Button name="Contact"/>
      <Button name="About us"/>
      <Button name="Store"/>
      <Button name="Apply"/>
      <Image src={logo} alt="logo" width="100px" height="100px"/>
    </div>
  )
}