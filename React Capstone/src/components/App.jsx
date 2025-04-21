
import '../styles/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Header from './common/Header'
import Footer from './common/Footer'
import Cart from './pages/Cart'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/cart" component={Cart}/>
            <Route path="/products/:id" component={Product}/>
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
