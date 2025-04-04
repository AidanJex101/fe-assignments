import Users from './components/Users'
import './App.css'
import User from './components/User'
import { BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/user" component={User}></Route>
            <Route path="/" component={Users}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
