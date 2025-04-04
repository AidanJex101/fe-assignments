
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Clock from './components/Clock.jsx'
import ColorChanger from './components/ColorChanger.jsx'
import Counter from './components/Counter.jsx'
import FontSizer from './components/FontSizer.jsx'
import Greeting from './components/Greeting.jsx'
import Navbar from './components/Navbar.jsx'
import RGBSlider from './components/RGBSlider.jsx'
import ShowHide from './components/ShowHide.jsx'
import TextAlignment from './components/TextAlignment.jsx'
import './App.scss'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="component-container">
          <Switch>
            <Route path="/Clock" component={Clock}/>
            <Route path="/ColorChanger" component={ColorChanger}/>
            <Route path="/Counter" component={Counter}/>
            <Route path="/FontSizer" component={FontSizer}/>
            <Route path="/Greeting" component={Greeting}/>
            <Route path="/RGBSlider" component={RGBSlider}/>
            <Route path="/ShowHide" component={ShowHide}/>
            <Route path="/TextAlignment" component={TextAlignment}/>
          </Switch>
        </div>
       
      </BrowserRouter>
    </>
  )
}

export default App
