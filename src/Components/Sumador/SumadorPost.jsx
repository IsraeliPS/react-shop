import React,{useEffect, useState} from 'react'

const SumadorPost = () => {
    const agregarAtoleFake=()=>{
        fetch("https://api-cafe-tamales.herokuapp.com/api/atoles",{
            method:'POST',
            header:{'Content/type':'application/json'},
            body:JSON.stringify({
                name:"Atolito Fresa",
                img:"https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/10/atoledejamaica.jpg",
                price:'30',
            })
        })
    }

    useEffect(agregarAtoleFake,[])

    return (
        <div>
            
        </div>
    )
}

export default SumadorPost

