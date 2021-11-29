import React from 'react'
import styles from './Counter.module.scss'

const Counter = ({ onAddToCart, onRemoveCart, cantidad = 0 }) => {
  const handlerAdd = () => {
    onAddToCart()
  }

  const handlerRest = () => {
    onRemoveCart()
  }

  return (
    <div className={`${styles.styleContainer}`}>
      <button onClick={handlerRest}> - </button>
      <span className={`${styles.styleQty}`}>{cantidad}</span>
      <button onClick={handlerAdd}> + </button>
    </div>
  )
}

export default Counter
