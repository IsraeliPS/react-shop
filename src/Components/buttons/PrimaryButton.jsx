import styles from './PrimaryButton.module.scss'

const PrimaryButton = ({ text, url, id, onAddToCart }) => {
  const handlerAdd = () => {
    onAddToCart()
  }

  return (
    <a
      href={url}
      type='button'
      onClick={handlerAdd}
      className={`${styles.button}`}
    >
      {text}
    </a>
  )
}

export default PrimaryButton
