const PrimaryButton=({text,type,url})=>{
    return <a href={url} className={`btn btn-${type}`}>{text}</a>
}

export default PrimaryButton