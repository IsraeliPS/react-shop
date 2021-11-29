import React from 'react'
import styles from './Search.module.scss'

const Search = () => {
  return (
    < >
      <div className={`${styles.bar}`}>
        <input
          className={`${styles.box}`}
          type='text'
          placeholder='Encuentra tu antojo favorito'
          aria-label='Search'
        />
        <span className={`${styles.iconSearch}`}>search</span>
      </div>
    </>
  )
}

export default Search
