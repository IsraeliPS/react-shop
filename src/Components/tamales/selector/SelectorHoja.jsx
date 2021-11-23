import React from "react";
import styles from "./SelectorHoja.module.scss";

const SelectorHoja = ({ platano, setPlatano }) => {
  const handlerClickMaiz = () => setPlatano(false);
  const handlerClickPlatano = () => setPlatano(true);

  return (
    <div className={`${styles.hoja}`}>
      <p className={`${styles.title}`}> TIPO DE HOJA</p>
      <div className={`${styles.flex}`}>
        <label
          className={`${platano ? `${styles.ConHoja}` : ""} ${styles.fondo}`}
        >
          <input
            className={`${styles.Button}`}
            type="button"
            onClick={handlerClickPlatano}
          />
          Platano
        </label>

        <label
          className={`${!platano ? `${styles.SinHoja}` : ""} ${styles.fondo}`}
        >
          <input
            type="button"
            className={`${styles.Button}`}
            onClick={handlerClickMaiz}
          />
          Maíz
        </label>
      </div>
    </div>
  );
};

export default SelectorHoja;
