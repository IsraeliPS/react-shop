import React, { useState, useEffect } from 'react'
import Card from './Card/Card'

const TamalesData = 'https://desafio-react-13.herokuapp.com/products/type/tamales'

const TamalesIndex = ({ addToCart, cartItems, removeFromCart }) => {
  const [tamal, setTamal] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let ComponentExist = true
    fetch(TamalesData)
      .then((res) => {
        res
          .json()
          .then((data) => {
            if (ComponentExist) {
              setTamal(data.payload.productType)
              console.log('hola')
              setLoading(false)
              // setTamal(data.tamal)
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
    <>
      <div className='row'>
        {tamal.map((item) => {
          const { _id, description: name, image: img, price } = item
          // const { _id, name, img, price } = item

          const cantidad = cartItems[_id] ? cartItems[_id].qty : 0

          const onAddToCart = () => addToCart({ id: _id, price, name, img })

          const onRemoveCart = () => removeFromCart({ id: _id, price, name, img })

          return (
            <Card
              key={_id}
              id={_id}
              titulo={name}
              img={img}
              price={price}
              onAddToCart={onAddToCart}
              cartItems={cartItems}
              cantidad={cantidad}
              onRemoveCart={onRemoveCart}
            />
          )
        })}
      </div>
    </>
  )
}

export default TamalesIndex
