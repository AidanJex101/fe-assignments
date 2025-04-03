import "../styles/TextContainer.css"

export default function TextContainer(props) {
  return(
    <div className="text-container" width={props.width}>
      <p>{props.description}</p>
    </div>
  )
}9