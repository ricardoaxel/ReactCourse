import React from 'react'

const Contador = () => {

    const [contador,setContador] = React.useState(0)

    const aumentar = () =>{
        console.log("click");
        setContador(contador+1)
    }
    return (
        <>
            <h1> Contador</h1>
            <h3>Número aumentando {contador}</h3>
            <h4>
                {
                    contador>3 ? 'Es mayor a 3' : "Menor"
                }
            </h4>
            <button onClick={aumentar}>Aumentar</button>
        </>
    )
}

export default Contador
