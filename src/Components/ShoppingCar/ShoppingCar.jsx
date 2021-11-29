import React, { useState } from 'react'
import styles from './ShoppingCar.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

// import { Link, useLocation } from 'react-router-dom'

import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap'

const ShoppingCar = ({ emptyCart, cartItems, deleteFromCart }) => {
  const [dropdown, setDropdown] = useState(false)

  const openCloseDropdown = () => {
    setDropdown(!dropdown)
  }

  const totalPrice = Object.values(cartItems).reduce((sum, item) => sum + parseInt(item.price), 0)

  return (
    <>
      <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
        <span className={`${styles.contador}`}>
          {Object.keys(cartItems).length > 0 ? Object.keys(cartItems).length : 0}
        </span>
        <DropdownToggle caret color='info' style={{ backgroundColor: 'white' }}>
          <span className={`${styles.materialIcons}`}>shopping_cart</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>
            <div className={`${styles.header}`}>
              <span>Productos</span>
              <span>{Object.keys(cartItems).length}</span>
            </div>
          </DropdownItem>
          <DropdownItem divider />
          {Object.keys(cartItems).length > 0
            ? (
              <>
                {cartItems.map((item) => {
                  // no esta regresando el id
                  const { _id, name, img, price } = item
                  const delFromCart = () => deleteFromCart({ id: _id })
                  console.log(item)

                  return (
                    <DropdownItem className={`${styles.cartitem}`} key={_id}>
                      <img
                        src={img}
                        className={`${styles.cartItemImg}`}
                        alt={name}
                      />
                      <div className={`${styles.cartItemDetail}`}>
                        <span>{name}</span>
                        <span>$ {price}</span>
                      </div>
                      <button className={`${styles.button}`} onClick={delFromCart}>
                        <span className={`${styles.button} ${styles.materialIcons}`}>
                          delete
                        </span>
                      </button>
                    </DropdownItem>
                  )
                })}
              </>
              )
            : <span style={{ padding: 3 }}>El carrito esta vacío!</span>}
          {Object.keys(cartItems).length > 0 && <DropdownItem divider />}
          {Object.keys(cartItems).length > 0 && (
            <>
              <div className={`${styles.header}`}>
                <button className={`${styles.button}`} onClick={emptyCart}>
                  Vaciar Carrito
                  <span className={`${styles.button} ${styles.materialIcons}`}>
                    delete
                  </span>
                </button>
              </div>
            </>
          )}
          <DropdownItem divider />
          <DropdownItem>
            <div className={`${styles.header}`}>
              <span>Total a Pagar: </span>
              <span>$ {totalPrice}</span>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default ShoppingCar
