
import '../styles/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import Products from './Products'
import Contact from './Contact'
import About from './About'
import Product from './Product'
import Header from './Header'
import Footer from './Footer'
import Cart from './Cart'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/cart" component={Cart}/>
            <Route path="/products/" component={Product}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
