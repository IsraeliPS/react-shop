import React from 'react'
import styles from './Search.module.scss'

const Search = () => {
  return (
    <div>
      <div className={`${styles.bar}`}>

        <input
          className={`${styles.box}`}
          type='text'
          placeholder='Buscar Producto'
          aria-label='Search'
        />
        <span className={`${styles.iconSearch}`}>search</span>
      </div>
    </div>
  )
}

export default Search
