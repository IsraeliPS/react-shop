import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import ShoppingCar from "../ShoppingCar/ShoppingCar";

const TamalesData = "https://api-cafe-tamales.herokuapp.com/api/tamales";

const TamalesIndex = ({ global, setGlobal }) => {
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
            let Items = Object.values(data);

            let TamalesItems = [];
            for (let x of Items) {
              for (let y of x) {
                TamalesItems = [...TamalesItems, y];
              }
            }
            if (ComponentExist) {
              setTamal(TamalesItems);
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

  return (
    <div className="container">
      <ShoppingCar global={global} />
      <div className="row">
        {tamal.map(({ _id, name, img, price }) => (
          <Card
            global={global}
            setGlobal={setGlobal}
            key={_id}
            id={_id}
            titulo={name}
            img={img}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};

export default TamalesIndex;
