
import Card from "./components/card.jsx"


import './App.css'

function App() {
  const mockData = [
    {name: "Michael Jordan", src: "../public/profile-pic-1.jpg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tenetur dolor optio ad minima ipsum? Minima voluptatem, laudantium dolore non soluta dolor consequuntur. Deleniti accusamus odio officiis hic veniam suscipit?"},
    {name: "Mike Tyson", src: "../public/profile-pic-2.jpg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tenetur dolor optio ad minima ipsum? Minima voluptatem, laudantium dolore non soluta dolor consequuntur. Deleniti accusamus odio officiis hic veniam suscipit?"},
    {name: "Angela Fur", src: "../public/profile-pic-3.jpg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tenetur dolor optio ad minima ipsum? Minima voluptatem, laudantium dolore non soluta dolor consequuntur. Deleniti accusamus odio officiis hic veniam suscipit?"}
  ]
  return (
    <>
      {mockData.map((data) => {
        console.log(data.src)
        return(
          <Card name={data.name} src={data.src} description={data.description}></Card>
        )
      })}
    </>
  )
}

export default App
