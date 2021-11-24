import React from "react";
import styles from "./ShoppingCar.module.scss";

const ShoppingCar = ({ emptyCart, cartItems }) => {
  let cantidad = 0;
  let total = 0;
  for (let val in cartItems) {
    total += parseInt(cartItems[val].price);
    cantidad += cartItems[val].qty;
  }

  return (
    <div className={`${styles.ShoppingCar}`}>
      <div>
        <span className={`${styles.materialIcons}`}>shopping_cart</span>
        <span>{cantidad}</span>
        <div>Total a pagar: {total}</div>
      </div>

      <button className={`${styles.button} ${styles.materialIcons}`} onClick={emptyCart}>delete</button>
    </div>
  );
};

export default ShoppingCar;

/*
console.clear();
let cart = {};

const catalog = [
  { id: 1, title: "Artículo 1", price: 20 },
  { id: 2, title: "Artículo 2", price: 20 },
  { id: 3, title: "Artículo 3", price: 20 },
  { id: 4, title: "Artículo 4", price: 20 },
];

const emptyCart = () => {
  cart = {};
};

const addToCart = (catalogItem) => {
  const existingItem = cart[catalogItem.id];
  if (!existingItem) {
    cart = {
      ...cart,
      [catalogItem.id]: { qty: 1, price: catalogItem.price },
    };
  } else {
    cart = {
      ...cart,
      [catalogItem.id]: {
        qty: existingItem.qty + 1,
        price: existingItem.price + catalogItem.price,
      },
    };
  }
};

const removeFromCart = (catalogItem) => {
  const existingItem = cart[catalogItem.id];
  if (existingItem){
    if( existingItem.qty <= 1 ){
      let { [catalogItem.id]: omitir, ...restOfItems  } = cart;
      cart = restOfItems;
    }
    else {
      cart = {
        ...cart,
        [catalogItem.id]: {
          qty: existingItem.qty - 1,
          price: existingItem.price - catalogItem.price,
        },
      };
    }
  }

  
  else{
    console.log('Error al restar:', catalogItem)
  }
};

console.log("cartInicio: ", cart);
emptyCart();
addToCart(catalog[0]);
addToCart(catalog[1]);
addToCart(catalog[0]);
addToCart(catalog[0]);
addToCart(catalog[2]);
addToCart(catalog[2]);
addToCart(catalog[3]);
addToCart(catalog[3]);
addToCart(catalog[3]);
removeFromCart(catalog[1])
removeFromCart(catalog[0])
removeFromCart(catalog[2])
removeFromCart(catalog[1])



console.log("cartFinal: ", cart);
*/
