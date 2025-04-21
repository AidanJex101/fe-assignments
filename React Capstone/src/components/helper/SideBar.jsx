
export default function SideBar(props) {
   
    function handleClick(e) {
      const type = e.target.id
      
      if (props.isChecked.includes(type)) {
        props.setIsChecked((iC) => iC.filter((category) => category != type))
      }
      else {
        props.setIsChecked((iC) => [...iC, type])
      }
      
    }

    const addCategories = () => {
      return props.categories.map((category) => {
        return(
          <div key={category}>
            <label htmlFor={category}>{category}</label>
            <input id={category} type="checkbox" name="categories" defaultChecked={true} onClick={(e) => {handleClick(e)}} ></input>
          </div>
        )
      })
    }

  return(
      <div className="side-bar">
        <div className="filter-section">
          <h2>Categories</h2>
          {addCategories()}
        </div>
        <div className="sort-section">
          <h2>Sort By</h2>
          <label htmlFor="type">Type: </label>
          <select name="type" id="type" onChange={(e) => props.handleType(e, "type")}>
            <option value="id">id</option>
            <option value="title">title</option>
            <option value="price">price</option>
            <option value="category">category</option>
          </select>
          <br></br>
          <label htmlFor="order">Order: </label>
          <select name="order" id="order" onChange={(e) => props.handleType(e, "order")}>
            <option value="asc">ascending</option>
            <option value="desc">decending</option>
          </select>
        </div>
      </div>
  )
}