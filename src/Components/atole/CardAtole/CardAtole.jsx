import React, { useState } from "react";
import styles from "./CardAtole.module.scss";
import CardImage from "../../CardImage/CardImage";
import CardTitle from "../../CardTitle/CardTitle";
import PrimaryButton from "../../buttons/PrimaryButton";
import Counter from "../../buttons/Counter";

const CardAtole = ({ id, titulo, img, price }) => {
  // const [platano, setPlatano] = useState(false);
  // // const [checked, setChecked] = useState(false);
  const [cantidad, setCantidad] = useState(0);

  // const PriceHoja = platano ? 10 : 0;
  // const PriceAtole = checked ? 15 : 0;
  // const ConOferta=oferta?(price + PriceHoja + PriceAtole)*.1:0

  // const totalPrice = (parseInt(price) + PriceHoja )*cantidad;

  return (
    <div className={`${styles.card}`}>
      <CardImage url={img} alt={"Atole"} />

      <div className={`${styles.card_body}`}>
        <CardTitle titulo={titulo} />
        {/* <CardText text={text} /> */}
        {/* <SelectorCantidad setCantidad={setCantidad} /> */}
        {/* <SelectorHoja platano={platano} setPlatano={setPlatano} /> */}
        {/* <SelectorSiAtole checked={checked} setChecked={setChecked} />

        {checked && <SelectorAtole />} */}
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
        <div className={`${styles.price}`}>Total: $ {price}</div>
      </div>
    </div>
  );
};

export default CardAtole;
