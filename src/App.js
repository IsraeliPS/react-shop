import './App.css'
import React, { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Atoles from './Components/atole/atoles'
import Index from './Components/landing/index'
import Tamales from './Components/tamales/TamalesIndex'
import ShoppingCar from './Components/ShoppingCar/ShoppingCar'
import Search from './Components/Search/Search'
import styles from './App.module.scss'

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

  const deleteFromCart = (itemsObject) => {
    const existingItem = cartItems[itemsObject.id]
    if (existingItem) {
      const { [itemsObject.id]: omitir, ...restOfItems } = cartItems
      setCartItems(restOfItems)
    } else {
      console.log('Error al restar:', itemsObject)
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
    <>
      <nav className={`${styles.nav}`}>
        <Link to='/'>
          <img className={`${styles.imagen}`} src='https://userscontent2.emaze.com/images/0e4da0d7-1e34-42c4-9979-5003eb399ac2/d4b3b8de43ca34af4387cda9a6ff382c.png' alt='logo' />
        </Link>
        <Search />
        <ShoppingCar
          emptyCart={emptyCart} cartItems={cartItems}
          deleteFromCart={deleteFromCart}
        />
      </nav>

      <div className={`${styles.links}`}>
        <Link to='/tamales' className={`${styles.link}`}>Tamales</Link>
        <Link to='/atoles' className={`${styles.link}`}>Atoles</Link>
        <Link to='/Productos/:id' className={`${styles.link}`}>Productos/:id</Link>
      </div>

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
    </>
  )
}

export default App
