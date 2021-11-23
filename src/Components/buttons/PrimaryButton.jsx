import styles from "./PrimaryButton.module.scss";

const PrimaryButton = ({ text, url, setCantidad, id, cantidad }) => {
  const handlerAdd = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <a
      href={url}
      type="button"
      onClick={handlerAdd}
      className={`${styles.button}`}
    >
      {text}
    </a>
  );
};

export default PrimaryButton;
