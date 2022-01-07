import { useState } from 'react'
import './App.css'
import Store from './component/StoreItem'
import Cart from './component/StoreItem'

function App() {

  const [store, setStore] = useState([{
    id: 1,
    name: 'beetroot',
    price: 0.35,
    stock: 10,
    amountInCart: 0
  }])

  return <>

    <header id="store">
      <h1>Grocero</h1>
      <ul className="item-list store--item-list">
        <Cart />
      </ul>
    </header>
    <main id="cart">
      <h2>Your Cart</h2>

      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          <Store />
        </ul>
      </div>

      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>

        <div>
          <span className="total-number">£0.00</span>
        </div>
      </div>
    </main>

  </>
}

export default App
