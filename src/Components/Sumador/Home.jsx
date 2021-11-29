import React, { useState } from 'react'
import Sumador from './Sumador'

const Home = () => {
  const [mostrar, setMostrar] = useState(true)
  return (
    <div>
      <h1>Bienvenidos a Tamalap</h1>
      <button onClick={() => setMostrar(!mostrar)}>Mostrar/Ocultar</button>
      {mostrar && <Sumador />}
    </div>
  )
}

export default Home
