import styles from "./CardImage.module.scss"

const CardImage = ({url,alt}) => {
    return <img src={url} className={`card-img-top ${styles.imagen}`} alt={alt} />
}

export default CardImage
