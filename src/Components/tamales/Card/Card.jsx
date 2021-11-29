import React from 'react'
import styles from './Card.module.scss'

import CardImage from '../../CardImage/CardImage'
import CardTitle from '../../CardTitle/CardTitle'

import PrimaryButton from '../../buttons/PrimaryButton'
import Counter from '../../buttons/Counter'

const Card = ({ id, titulo, img, price, cantidad, onAddToCart, onRemoveCart }) => {
  const totalPrice = parseInt(price) * cantidad

  return (
    <div className={`${styles.card}`}>
      <CardImage url={img} alt='Tamal' />

      <div className={`${styles.card_body}`}>
        <CardTitle titulo={titulo} />

        <div className={`${styles.precio}`}>Precio ${price}</div>

        {cantidad
          ? (
            <div>
              <Counter
                id={id}
                cantidad={cantidad}
                onAddToCart={onAddToCart}
                onRemoveCart={onRemoveCart}
              />
              <br />
              <div className={`${styles.total}`}>Total: $ {totalPrice}</div>
              <br />
            </div>
            )
          : (
            <PrimaryButton
              text='Comprar'
              id={id}
              cantidad={cantidad}
              onAddToCart={onAddToCart}

            />
            )}
      </div>
    </div>
  )
}

export default Card
