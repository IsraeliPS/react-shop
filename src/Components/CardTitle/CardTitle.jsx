import styles from "./CardTitle.module.scss";

const CardTitle = ({ titulo}) => {
  const title = titulo.toUpperCase();
  return (
    <h5  className={`${styles.title}`}>
      {title}
    </h5>
  );
};
export default CardTitle;
