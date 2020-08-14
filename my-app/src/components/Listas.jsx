import React, {useState} from 'react'

const Listas = () => {


    const estadoInicial = [
        {id:1, texto: "hola"},
        {id:2, texto: "asda"},
        {id:3, texto:"jesuisd"}
    ]
    const[lista,setLista] = useState(estadoInicial)
    
    const agregarElemento = () => {
        console.log("kda");
        setLista([
            ...lista,
            {id:4, texto:"iiaidjjesuisd"}
        ])
    }

    return (
        <>
            <h2>Listas</h2>

            {
                lista.map((el) => <h4 key={el.id}>numeros {el.texto}</h4>)
            }
            <button onClick={() => agregarElemento()}>Agregar</button>
        </>
    )
}

export default Listas
