import '../styles/Header.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return(
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src="/logo.png" alt="logo" width="100px"/>
        </NavLink>
      </div>
      <ul className='navigation'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </header>
  )
}