import React from 'react'
import styles from './ShoppingCar.module.scss'

const ShoppingCar = ({ emptyCart, cartItems }) => {
  const totalPrice = Object.values(cartItems).reduce((sum, item) => sum + parseInt(item.price), 0)
  const totalItems = Object.values(cartItems).reduce((sum, item) => sum + parseInt(item.qty), 0)

  return (
    <div className={`${styles.ShoppingCar}`}>
      <div>
        <span className={`${styles.materialIcons}`}>shopping_cart</span>
        <span className={`${styles.cantidad}`}>{totalItems}</span>
        <div>Total a pagar: {totalPrice}</div>
      </div>

      <button className={`${styles.button} ${styles.materialIcons}`} onClick={emptyCart}>delete</button>
    </div>
  )
}

export default ShoppingCar
