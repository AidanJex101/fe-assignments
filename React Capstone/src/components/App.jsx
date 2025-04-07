
import '../styles/App.scss'
import Home from './Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route index component={Home}/>
          <Route path="/products"/>
          <Route path="/contact"/>
          <Route path="/about"/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
