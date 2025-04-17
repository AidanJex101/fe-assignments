
import hero from '../assets/hero.jpg'


export default function Home() {
  return(
    <>
      <div className="main-content-container">
        <div className="hero-image">
          <img src={hero} alt="CEO" width="100%"/>
        </div>
        <div className="text-container">
          <h1>Atomic Shopping</h1>
          <h2>Delivering faster then the speed of light, prices smaller then an Atom</h2>
          <div className="quote">
            <h2>"You won't regret coming to <strong>Atomic Shopping</strong> the best intergalactic place to shop, <br></br>if you aren't <strong>exploding</strong> with <strong>joy</strong> after a visit then we did something wrong."</h2>
            <p>- CEO Aidan Jex</p>
          </div>
        </div>
      </div>
    </>
  )
}
