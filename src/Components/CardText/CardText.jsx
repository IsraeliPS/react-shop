import styles from "./CardText.module.scss"

const CardText = ({ text }) => {
  return <p className={`${styles.card_text}`}>{text}</p>;
};

export default CardText;
