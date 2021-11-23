import React from "react";
import styles from "./Counter.module.scss";

const Counter = ({ id, cantidad, setCantidad, setGlobal, global}) => {
  const handlerAdd = () => {
    setCantidad(cantidad + 1);
    // let valor = { ...global,id: id, cantidad: cantidad + 1 };
    // setGlobal(valor);
    // console.log("suma", valor);
  };
  // const onLikeClick = (id) => {
  //   const newProducts = products.map((product) => {
  //     if (product.id !== id) return product;
  //     else return { ...product, like: !product.like };
  //   });
  //   setProducts(newProducts);
  // };
  // console.log("imprimiendo global",global);

  const handlerRest = () => {
    setCantidad(cantidad - 1);
    // let valor = { ...global,id: id, cantidad: cantidad + 1 };
    // setGlobal(valor);
    // console.log("suma", valor);
  };

  return (
    <div className={`${styles.styleContainer}`}>
      <button onClick={handlerRest}> - </button>
      <span className={`${styles.styleQty}`}>{cantidad}</span>
      <button onClick={handlerAdd}> + </button>
    </div>
  );
};

export default Counter;
