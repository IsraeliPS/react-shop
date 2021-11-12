import styles from "./CardTitle.module.scss";

const CardTitle = ({ titulo, oferta }) => {
  const title = titulo.toUpperCase();
  const classOferta = oferta ? "text-success" : "";
  return (
    <h5 className={`card-title ${styles.primaryTitle} ${classOferta}`}>
      {title}
    </h5>
  );
};
export default CardTitle;
