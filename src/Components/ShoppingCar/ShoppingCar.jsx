import React from 'react'
import styles from './ShoppingCar.module.scss'

const ShoppingCar = ({ emptyCart, cartItems }) => {
  const totalPrice = Object.values(cartItems).reduce((sum, item) => sum + parseInt(item.price), 0)
  const totalItems = Object.values(cartItems).reduce((sum, item) => sum + parseInt(item.qty), 0)

  return (
    <div className={`${styles.ShoppingCar}`}>
      <span className={`${styles.materialIcons}`}>shopping_cart</span>
      <span className={`${styles.cantidad}`}>{totalItems}</span>
      <button className={`${styles.button} ${styles.materialIcons}`} onClick={emptyCart}>delete</button>
      <br />
      <div className={`${styles.texto}`}>Total a pagar: {totalPrice}</div>
    </div>

  )
}

export default ShoppingCar
