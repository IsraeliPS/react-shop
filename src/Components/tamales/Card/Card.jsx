import React, { useState } from "react";
import styles from "./Card.module.scss";

import CardImage from "../../CardImage/CardImage";
import CardTitle from "../../CardTitle/CardTitle";

import PrimaryButton from "../../buttons/PrimaryButton";
import Counter from "../../buttons/Counter";

const Card = ({ id, titulo, img, price, global, setGlobal }) => {
  const [cantidad, setCantidad] = useState(0); //estado del precio

  return (
    <div className={`${styles.card}`}>
      <CardImage url={img} alt={"Tamal"} />

      <div className={`${styles.card_body}`}>
        <CardTitle titulo={titulo} />

        {/* <CardText text={text} /> */}

        {/* <SelectorCantidad setCantidad={setCantidad}/> */}
        {/* <SelectorHoja platano={platano} setPlatano={setPlatano} /> */}
        {/* <SelectorSiAtole checked={checked} setChecked={setChecked} />

        {checked && <SelectorAtole />} */}
        <div className={`${styles.price}`}>Precio: $ {price}</div>
        {cantidad ? (
          <Counter id={id} cantidad={cantidad} setCantidad={setCantidad} />
        ) : (
          <PrimaryButton
            setCantidad={setCantidad}
            text="Comprar"
            id={id}
            cantidad={cantidad}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
