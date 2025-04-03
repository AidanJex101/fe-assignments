import TextContainer from "./TextContainer"
import Image from "./Image"
import Long from "../assets/long.jpg"
import "../styles/MainContentGrid.css"
export default function MainContentGrid() {
  return(
    <div className="main-content-grid">
      <TextContainer width="50%"></TextContainer>
      <Image src={Long} alt="long" width="50%" height="100%"></Image>
      <Image src={Long} alt="long" width="50%" height="100%"></Image>
      <TextContainer width="50%"></TextContainer>
    </div>
  )
}