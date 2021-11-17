import styles from "./PrimaryButton.module.scss"

const PrimaryButton=({text,url})=>{
    return <a href={url} type="button" className={`${styles.primaryTitle}`}>{text}</a>
}

export default PrimaryButton