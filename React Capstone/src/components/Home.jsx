import '../styles/Home.scss'
import Header from './Header'
import Footer from './Footer'
import hero from '../assets/hero.jpg'


export default function Home() {
  return(
    <>
      <Header></Header>
      <div className="main-content-container">
        <h1>Atomic Shopping</h1>
        <h2>Delivering faster then the speed of light, prices smaller then an Atom</h2>
        <div className="hero-image">
          <img src={hero} alt="CEO" width="100%"/>
        </div>
        <p>"You won't regret coming to <strong>Atomic Shopping</strong> the best intergalactic place to shop, if you <br></br>aren't <strong>exploding</strong> with <strong>joy</strong> after a visit then we did something wrong."</p>
        <h2>- CEO Aidan Jex</h2>
      </div>
      <Footer></Footer>
    </>
  )
}
