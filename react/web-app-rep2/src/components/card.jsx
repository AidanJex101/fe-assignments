import Image from "../components/Image"
import Header from "../components/Header"
import TextContainer from "../components/TextContainer"


import "../styles/card.css"

export default function Card(props) {
  return(
    <div className="card-container">
      <Image src={props.src} alt="Profile Picture" width="100px" height="100px"></Image>
      <Header name={props.name}></Header>
      <TextContainer width="100%" description={props.description}></TextContainer>
    </div>
  )
}