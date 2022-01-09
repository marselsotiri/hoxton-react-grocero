import { useState } from 'react'
import './App.css'

import Header from './component/Header'
import Main from './component/Main'
import Data from './data/data'



function App() {

  const [item, setItem] = useState(Data)

  let GrocieresToDisplay = item

  function getCart() {
    return GrocieresToDisplay.filter(item => item.amountInCart > 0)
  }

  function getTotal() {
    let total = 0

    const cart = getCart()

    for (const item of cart) {
      total += item.price * item.amountInCart
    }

    return total
  }

  function addItemToCart(item) {
    const updatedItems = [...GrocieresToDisplay]
    item.amountInCart++
    setItem(updatedItems)
  }

  function removeItemFromCart(item) {
    const updatedItems = [...GrocieresToDisplay]
    item.amountInCart--
    setItem(updatedItems)
  }

  return <>

    <Header GrocieresToDisplay={GrocieresToDisplay} addItemToCart={addItemToCart} />

    <Main GrocieresToDisplay={GrocieresToDisplay} getTotal={getTotal} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />

  </>
}

export default App
