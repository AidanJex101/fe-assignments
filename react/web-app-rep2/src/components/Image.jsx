import "../styles/Image.css"

export default function Image(props) {
  return(
    <div className="image-container">
      <img src={props.src} alt={props.alt} width={props.width} height={props.height}/>
    </div>
  )
}