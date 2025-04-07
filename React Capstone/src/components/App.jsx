
import '../styles/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'


function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route index component={Home}/>
          <Route path="/products"/>
          <Route path="/contact"/>
          <Route path="/about"/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
