import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import CartProvider from './context/CartProvider.jsx'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
