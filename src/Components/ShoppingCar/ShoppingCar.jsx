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

const ShoppingCar = ({ emptyCart, cartItems }) => {
  const [dropdown, setDropdown] = useState(false)

  const openCloseDropdown = () => {
    setDropdown(!dropdown)
  }

  console.log(Object.keys(cartItems).length)
  return (
    <>
      <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>
            Productos
          </DropdownItem>
          <DropdownItem divider />
          {Object.keys(cartItems).length > 0
            ? (
              <>
                {Object.values(cartItems).map((item) => {
                  const { _id, name, img, price } = item
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
                    </DropdownItem>
                  )
                })}
              </>
              )
            : (
              <span style={{ padding: 10 }}>El carrito esta vacío!</span>
              )}
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default ShoppingCar
