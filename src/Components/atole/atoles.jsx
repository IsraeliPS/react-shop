import React, { useEffect, useState } from "react";

import Card from "./CardAtole/CardAtole";
import ShoppingCar from "../ShoppingCar/ShoppingCar";

const AtolesData = "https://api-cafe-tamales.herokuapp.com/api/atoles";

const AtoleIndex = () => {
  const [atole, setAtole] = useState([]);

  useEffect(() => {
    fetch(AtolesData).then((res) => {
      res.json().then((data) => {
        let Items = Object.values(data);

        let AtolesItems = [];
        for (let x of Items) {
          for (let y of x) {
            AtolesItems = [...AtolesItems, y];
          }
        }
        setAtole(AtolesItems);
      });
    });
  }, []);

  return (
    <div className="container">
      <ShoppingCar global={global}/>
      <div className="row">
        {atole.map(({ _id, name, img, price }) => (
          <Card key={_id} titulo={name} img={img} price={price} />
        ))}
      </div>
    </div>
  );
};

export default AtoleIndex;
