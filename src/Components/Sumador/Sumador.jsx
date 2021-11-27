import React,{useEffect, useState} from 'react'

const Sumador = () => {
    const [suma, setSuma] = useState(0)
    const [planets, setPlanets] = useState([])
    console.log('Iniciando /Actualizando componente Sumador')
    useEffect(()=>{
        const abortController=new AbortController();
        fetch('https://swapi.dev/api/planets',{signal: abortController.signal})
        .then(result=>result.json())
        .then(data=>setPlanets(data.results))
        .catch(error=>{
            if (abortController.signal.aborted){
                console.log('error controlado')
            }else {
                console.log('mostrar en div')
                console.log(error)
            }
        })
        
        console.log('Ejecutando algo en useEffect')
        return ()=>{
            console.log('Función Limpiadora')
            abortController.abort();
        }
    },[])
    return (
        <div>
            <h2>Suma: {suma}</h2>
            <button onClick={()=>setSuma(suma+1)}>Agregar 1</button>
        </div>
    )
}

export default Sumador
