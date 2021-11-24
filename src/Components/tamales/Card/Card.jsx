import React, { useState } from "react";
import styles from "./Card.module.scss";

import CardImage from "../../CardImage/CardImage";
import CardTitle from "../../CardTitle/CardTitle";

import PrimaryButton from "../../buttons/PrimaryButton";
import Counter from "../../buttons/Counter";

const Card = ({ id, titulo, img, price, onAddToCart,onRemoveCart }) => {
  const [cantidad, setCantidad] = useState(0); //estado del precio

  const totalPrice = parseInt(price) * cantidad;

  return (
    <div className={`${styles.card}`}>
      <CardImage url={img} alt={"Tamal"} />

      <div className={`${styles.card_body}`}>
        <CardTitle titulo={titulo} />

        <div className={`${styles.precio}`}>Precio por Producto: $ {price}</div>

        {cantidad ? (
          <Counter
            id={id}
            cantidad={cantidad}
            setCantidad={setCantidad}
            onAddToCart={onAddToCart}
            onRemoveCart={onRemoveCart}
          />
        ) : (
          <PrimaryButton
            setCantidad={setCantidad}
            text="Comprar"
            id={id}
            cantidad={cantidad} //global
            onAddToCart={onAddToCart}
          />
        )}
        <div className={`${styles.total}`}>Total: $ {totalPrice}</div>
      </div>
    </div>
  );
};

export default Card;
