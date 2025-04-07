
import '../styles/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import Products from './Products'
import Contact from './Contact'
import About from './About'


function App() {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/about" component={About}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
