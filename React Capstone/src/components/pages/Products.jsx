
import ProductCard from "../helper/ProductCard";
import {useState, useEffect} from 'react'
import { Commet } from "react-loading-indicators";
import SideBar from "../helper/SideBar";


export default function Products() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isChecked, setIsChecked] = useState([])
  const [categories, setCategories] = useState([])
  const [type, setType] = useState("id")
  const [order, setOrder] = useState("asc")
  

  function handleType(e, type) {
    const value = e.target.value
    type == "type" ? setType(value) : setOrder(value)
  }
  
  function getCategories() {
    const uniqueCategories = []
    data.forEach((object) => {
      if (!uniqueCategories.includes(object.category)) {
        uniqueCategories.push(object.category)
      }
    })
    setCategories(uniqueCategories)
    
  }

  function generateCards() {
    return(
      data.map((card) => {
        if (isChecked.includes(card.category)) {
          return(
            <ProductCard key={card.id} category={card.category} title={card.title} price={card.price} description={card.description} image={card.image} count={card.rating.count} rate={card.rating.rate} uid={card.id}></ProductCard>
          )
        }
      })
    )
    
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())

      .then(responseText => {
        setData(responseText)
        
      })

      .catch(err => {
        console.error("Get Products Error: ", err)
      })
  }, [])

  useEffect(() => { 
    getCategories()
    setIsChecked(categories)
    
    setIsLoading(false)
  }, [data])

  useEffect(() => {
    setData((d) => [...d].sort((a, b) => a["id"] - b["id"]))
    if (type === "title" || type === "categpry") {
      setData((d) => [...d].sort((a, b) => a[type].localeCompare(b[type])))
    }
    if (type === "price") {
      setData((d) => [...d].sort((a, b) => a[type] - b[type]))
    }
    if (order == "desc") {
      setData((d) => [...d].reverse())
    }
  }, [type, order])


    
  return(
    <>
      <SideBar isChecked={isChecked} setIsChecked={setIsChecked} categories={categories} handleType={handleType}></SideBar>
      <h1>Products</h1>
      <div className="products-container">
        {isLoading ? <Commet color="#32cd32" size="large" text="" textColor="" /> : generateCards()}
      </div>
    </>
  )
}