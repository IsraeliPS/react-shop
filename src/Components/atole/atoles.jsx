import React, { useEffect, useState } from 'react'

import Card from './CardAtole/CardAtole'

const AtolesData = 'https://api-cafe-tamales.herokuapp.com/api/atoles';

const AtoleIndex = ({ addToCart, cartItems, removeFromCart }) => {
  const [atole, setAtole] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let ComponentExist = true
    fetch(AtolesData)
      .then((res) => {
        res
          .json()
          .then((data) => {
            if (ComponentExist) {
              setAtole(data.atol)
              setLoading(false)
            }
          })
          .catch(() => {
            setError(true)
          })
      })
      .finally(() => setLoading(false))

    return () => {
      ComponentExist = false
    }
  }, [])

  if (error) {
    return <div>Error al obtener los datos. Favor de recargar la página</div>
  }

  if (loading) return <h2>Please wait a moment...</h2>

  return (
    <div className='container'>
      <div className='row'>
        {atole.map((item) => {
          const { _id, name, img, price } = item

          const cantidad = cartItems[_id] ? cartItems[_id].qty : 0

          const onAddToCart = () => addToCart({ id: _id, price, name, img })
          const onRemoveCart = () => removeFromCart({ id: _id, price, name, img })

          return (
            <Card
              key={_id}
              titulo={name}
              img={img}
              price={price}
              onAddToCart={onAddToCart}
              cantidad={cantidad}
              cartItems={cartItems}
              onRemoveCart={onRemoveCart}
            />
          )
        })}
      </div>
    </div>
  )
};

export default AtoleIndex
//
