import React, { useState } from "react";
import styles from "./SelectorAtole.module.scss";

const SelectorAtole = () => {
  const [sabor, setSabor] = useState("");

  const handleFresa = () => setSabor("Fresa");
  const handleChocolate = () => setSabor("Chocolate");
  const handleCajeta = () => setSabor("Cajeta");

  return (
    <div className={`${styles.atole}`}>
      <p className={`${styles.title}`}>ATOLE</p>
      <div>
        <label
          className={`${sabor === "Fresa" ? `${styles.Fresa}` : ""} ${
            styles.fondo
          }`}
        >
          <input
            type="button"
            className={`${styles.Button}`}
            onClick={handleFresa}
          />
          Fresa
        </label>

        <label
          className={`${sabor === "Chocolate" ? `${styles.Chocolate}` : ""} ${
            styles.fondo
          }`}
        >
          <input
            type="button"
            className={`${styles.Button}`}
            onClick={handleChocolate}
          />
          Chocolate
        </label>

        <label
          className={`${sabor === "Cajeta" ? `${styles.Cajeta}` : ""} ${
            styles.fondo
          }`}
        >
          <input
            type="button"
            className={`${styles.Button}`}
            onClick={handleCajeta}
          />
          Cajeta
        </label>
      </div>
    </div>
  );
};

export default SelectorAtole;
