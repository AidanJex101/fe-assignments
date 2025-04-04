import {useEffect, useState} from 'react'
import '../styles/Users.css'
import { NavLink, Switch } from 'react-router-dom'
export default function Users() {

  const [people, setPeople] = useState([])
  const [isLoadingData, setIsLoadingData] = useState(true)

  useEffect(() => {
    
    fetch("https://www.swapi.tech/api/people")
      .then(results => results.json())
      .then(data => {
        setPeople(data.results)
        setIsLoadingData(false)
      })
      .catch(error => {
        console.error('Get People Error: ', error)
      })
  }, [])

  return(
    <div className="user-list">
      <h1>Users</h1>
      {!isLoadingData ? (
        <Switch>
          <ol>
            {people.map((person) => (
              <li key={person.uid}>
                <NavLink to={{ pathname: "/user", state: {id: `${person.uid}`, name: person.name}, }}>{person.name}</NavLink>
              </li>
            ))}
          </ol>
        </Switch>
      ) : (<h2>Loading...</h2>)}
      
    </div>
  )
}