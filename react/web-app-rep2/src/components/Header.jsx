import "../styles/Header.css"

export default function Header(props) {
  return(
    <div className="header-container">
      <h1>{props.name}</h1>
    </div>
  )
}