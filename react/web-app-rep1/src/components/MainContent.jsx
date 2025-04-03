import Image from "./Image"
import Header from "./Header"
import Button from "./Button"
import TextContainer from "./TextContainer"
import MainContentGrid from "./MainContentGrid"
import Lake from "../assets/foster-lake.jpg"
import "../styles/MainContent.css"
export default function MainContent() {
  return(
    <div className="main-content-container">
      <Image src={Lake} alt="Lake" width="100%" height="100%"></Image>
      <Header name="Header"></Header>
      <Header name="Subheader"></Header>
      <TextContainer></TextContainer>
      <MainContentGrid></MainContentGrid>
      <TextContainer></TextContainer>
      <Button name="Button" width="400px" height="200px"></Button>
    </div>
  )
}