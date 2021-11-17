import React, { useState } from "react";
import styles from "./Card.module.scss";

import CardImage from "./CardImage/CardImage";
import CardTitle from "./CardTitle/CardTitle";
import CardText from "./CardText/CardText";

import SelectorCantidad from "../selector/SelectorCantidad";
import SelectorHoja from "../selector/SelectorHoja";
import SelectorSiAtole from "../selector/SelectorSiAtole";
import SelectorAtole from "../selector/SelectorAtole";
import PrimaryButton from "../buttons/PrimaryButton";

const Card = ({ titulo, img, text, price, linkBtn, oferta = false }) => {
  const [platano, setPlatano] = useState(false);
  const [checked, setChecked] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  
  const PriceHoja = platano ? 10 : 0;
  const PriceAtole = checked ? 15 : 0;
  const ConOferta=oferta?(price + PriceHoja + PriceAtole)*.1:0
  
  const totalPrice = (price + PriceHoja + PriceAtole-ConOferta)*cantidad;
  
  return (
    <div className={`${styles.card}`}>
      
      <CardImage url={img} alt={"tamal"} />

      <div className={`${styles.card_body}`}>
        <CardTitle titulo={titulo} oferta={oferta} />

        <CardText text={text} />

        <SelectorCantidad setCantidad={setCantidad}/>
        <SelectorHoja platano={platano} setPlatano={setPlatano} />
        <SelectorSiAtole checked={checked} setChecked={setChecked} />

        {checked && <SelectorAtole />}
        
        <PrimaryButton url={linkBtn} text="Comprar" />
        <div className={`${styles.price}`}>Total: $ {totalPrice}</div>
      </div>
    </div>
  
  );
};

export default Card;

/*
1) Hacer la tarea del jueves (personalizar sus cards con SASS)
2) Agregar (con estados) Un selector de tamales [hoja de plátano | hoja de maiz] Si son oaxaqueños, el precio debe aumentar $10
3) Agregar (con estados) Un selector para incluir o no atole. Si es con atole, agregar $15
4) Si agergan atole, permitir elegir el sabor [ fresa | cajeta | chocolate ]
*/
