import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
// import ShoppingCar from "../ShoppingCar/ShoppingCar";

const TamalesData = "https://api-cafe-tamales.herokuapp.com/api/tamales";

const TamalesIndex = ({ addToCart, cartItems, removeFromCart }) => {
  const [tamal, setTamal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ComponentExist = true;
    fetch(TamalesData)
      .then((res) => {
        res
          .json()
          .then((data) => {
            if (ComponentExist) {
              setTamal(data.tamal);
              setLoading(false);
            }
          })
          .catch(() => {
            setError(true);
          });
      })
      .finally(() => setLoading(false));

    return () => {
      ComponentExist = false;
    };
  }, []);

  if (error) {
    return <div>Error al obtener los datos. Favor de recargar la página</div>;
  }

  if (loading) return <h2>Please wait...</h2>;
  
console.log(cartItems)
  return (
    <div className="container">
      <div className="row">
        {tamal.map((item) => {
          const { _id, name, img, price } = item;
          const cantidad = cartItems[_id];
          
          const onAddToCart = () =>  addToCart({ id: _id, price })
          const onRemoveCart = () => removeFromCart({ id: _id, price });
          
          return (
            <Card
              key={_id}
              id={_id}
              titulo={name}
              img={img}
              price={price}
              onAddToCart={onAddToCart}
              cartItems={cartItems}
              cantidad={cantidad}
              onRemoveCart={onRemoveCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TamalesIndex;
