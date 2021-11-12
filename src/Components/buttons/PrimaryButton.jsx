import styles from "./PrimaryButton.module.scss"

const PrimaryButton=({text,type,url})=>{
    return <a href={url} className={`btn btn-${type} ${styles.primaryTitle}`}>{text}</a>
}

export default PrimaryButton