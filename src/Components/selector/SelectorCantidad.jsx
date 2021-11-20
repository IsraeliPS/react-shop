import React from "react";
import styles from "./SelectorCantidad.module.scss";

const SelectorCantidad = ({setCantidad}) => {

    // const handlerCambio =(event)=> {
    //     setCantidad(event.target.value)
    // }
    
  return (
    <div className={`${styles.box}`}>
      <select onChange={(event)=> setCantidad(event.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );
};

export default SelectorCantidad;
