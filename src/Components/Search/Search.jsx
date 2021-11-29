import React from 'react'
import styles from './Search.module.scss'

const Search = () => {
  return (
    <div style={{ width: 1000 }}>
      <div className={`${styles.bar}`}>

        <input
          className={`${styles.box}`}
          type='text'
          placeholder='Encuentra tu antojo favorito'
          aria-label='Search'
        />
        <span className={`${styles.iconSearch}`}>search</span>
      </div>
    </div>
  )
}

export default Search
