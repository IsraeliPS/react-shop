import styles from "./CardTitle.module.scss";

const CardTitle = ({ titulo, oferta }) => {
  const title = titulo.toUpperCase();
  
  return (
    <h5  className={`${styles.title} ${oferta? styles.oferta : styles.sinOferta} `}>
      {title}
    </h5>
  );
};
export default CardTitle;
