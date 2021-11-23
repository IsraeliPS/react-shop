import React from 'react'
import styles from './SelectorSiAtole.module.scss'

function SelectorSiAtole({checked,setChecked}) {
    
    const handleClick = () => setChecked(!checked)

    return (
        <div>
            <input id={`${styles.siAtole}`} onClick={handleClick} type="checkbox" />
            <label id={`${styles.textSiAtole}`} for="siAtole">¿Desea Atole?</label>            
        </div>
    )
}

export default SelectorSiAtole
