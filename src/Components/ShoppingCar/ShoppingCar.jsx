import React, { useState } from 'react'
import styles from './ShoppingCar.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

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

  const ItemsCar = () => {
    let arrayItems = []

    for (const key in cartItems) {
      let postData = []
      postData = { ...postData, id: key, name: cartItems[key].name, img: cartItems[key].img, price: cartItems[key].price }
      arrayItems = [...arrayItems, postData]
    }

    return arrayItems
  }

  const arrayItems = ItemsCar()

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
                {arrayItems.map((item) => {
                  const { id, name, img, price } = item
                  const delFromCart = () => deleteFromCart({ id })

                  return (
                    <DropdownItem className={`${styles.cartitem}`} key={id}>
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
