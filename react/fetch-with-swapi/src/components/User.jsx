import '../styles/User.css'
import {useState, useRef, useEffect} from 'react'
import {NavLink, useLocation} from 'react-router-dom'

export default function User() {
  const location = useLocation()
  console.log(location)
  const [isLoadingPerson, setIsLoadingPerson] = useState(true)
  const [isLoadingPlanet, setIsLoadingPlanet] = useState(true)
  const [userData, setUserData] = useState([])
  const [homePlanet, setHomePlanet] = useState("")
  const planetText = useRef(null)
  console.log(location.state?.id)

  function getPersonData() {
    fetch(`https://www.swapi.tech/api/people/${location.state?.id}`)
      .then(results => results.json())
      .then((data) => {
        setUserData(data.result)
        setIsLoadingPerson(false)
      })
      .catch(error => {
        console.error('Get Person Error: ', error)
      })
  }

  function getHomePlanet(swapiURL) {
    fetch(swapiURL)
      .then(results => results.json())
      .then(data => { 
        setHomePlanet(data.result.properties.name)
        setIsLoadingPlanet(false)
      })
      .catch(error => {
        console.error('Get Planet Name Error: ', error)
      })
  }



  useEffect(() => {
    getPersonData()
  }, [])

  useEffect(() => {
    if (!isLoadingPerson) {
      getHomePlanet(`${userData.properties.homeworld}`)
     
    }
  }, [isLoadingPerson])


  function handleClick(e) {
    planetText.current.innerText = homePlanet
    e.target.style.display = "none"
  }

  return(
    <div className="user-container">
      <h1>{location.state.name}</h1>
      {isLoadingPlanet ? <p>Loading...</p> : <button onClick={(e) => {handleClick(e)}}>Show Home Planet</button>}
      <h2 ref={planetText}></h2>
      <NavLink to="/">Go back</NavLink>
    </div>
  )
}