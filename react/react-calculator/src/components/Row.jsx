import Button from "./Button"

function Row(props) {

  return(
    <div className="row">
      {props.children.map((button) => {
        return (
            <Button key={button} handleClick={props.handleClick}>{button}</Button>
        )
      })}
     </div>
  )

}

export default Row