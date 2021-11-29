import './App.css'
import React, { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Atoles from './Components/atole/atoles'
import Index from './Components/landing/index'
import Tamales from './Components/tamales/TamalesIndex'
import ShoppingCar from './Components/ShoppingCar/ShoppingCar'
import Search from './Components/Search/Search'

function App () {
  const [cartItems, setCartItems] = useState({})

  const addToCart = (itemsObject) => {
    const existingItem = cartItems[itemsObject.id]

    if (!existingItem) {
      const cart = {
        ...cartItems,
        [itemsObject.id]: {
          qty: 1,
          price: parseInt(itemsObject.price),
          name: itemsObject.name,
          img: itemsObject.img
        }
      }
      setCartItems(cart)
    } else {
      const cart = {
        ...cartItems,
        [itemsObject.id]: {
          qty: existingItem.qty + 1,
          price: existingItem.price + parseInt(itemsObject.price),
          name: itemsObject.name,
          img: itemsObject.img
        }
      }
      setCartItems(cart)
    }
  }

  const removeFromCart = (itemsObject) => {
    const existingItem = cartItems[itemsObject.id]
    if (existingItem) {
      if (existingItem.qty <= 1) {
        const { [itemsObject.id]: omitir, ...restOfItems } = cartItems
        setCartItems(restOfItems)
      } else {
        const cart = {
          ...cartItems,
          [itemsObject.id]: {
            qty: existingItem.qty - 1,
            price: existingItem.price - parseInt(itemsObject.price),
            name: itemsObject.name,
            img: itemsObject.img
          }
        }
        setCartItems(cart)
      }
    } else {
      console.log('Error al restar:', itemsObject)
    }
  }

  const emptyCart = () => setCartItems({})

  return (
    <div>
      <nav>
        <Link to='/'>Inicio</Link>
        <Link to='/tamales'>Tamales</Link>
        <Link to='/atoles'>Atoles</Link>
      </nav>
      <Search />
      <ShoppingCar emptyCart={emptyCart} cartItems={cartItems} />
      <Routes>
        <Route path='/' element={<Index cartItems={cartItems} />} />
        <Route
          path='/tamales'
          element={
            <Tamales
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path='/atoles'
          element={
            <Atoles
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              cartItems={cartItems}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
