import React from 'react'
import { Row } from 'reactstrap'
import styles from './Counter.module.scss'

const Counter = ({ onAddToCart, onRemoveCart, cantidad = 0 }) => {
  const handlerAdd = () => {
    onAddToCart()
  }

  const handlerRest = () => {
    onRemoveCart()
  }

  return (
    <div gap={3} className='container'>
      <div className={`${styles.styleContainer}`}>
        <button className={`${styles.styleButton}`} onClick={handlerRest}> - </button>
        <span className={`${styles.styleQty}`}>{cantidad}</span>
        <button className={`${styles.styleButton}`} onClick={handlerAdd}> + </button>
      </div>
    </div>
  )
}

export default Counter
