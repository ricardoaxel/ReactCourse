import React, {useState} from 'react'

const Eventos = () => {

    /*En este caso texto es el estado que se tiene, setTexto será la función que asigna
    un valor al texto y useState es el valor por defecto */
    const [texto,setTexto] = useState("Texto desde stado")

    const eventClick = () => {
        console.log("click dadoo")
        setTexto("Cambiar texto jeje")
    }


    return (
        <>
            <h2>{ texto }</h2>
            <button onClick= {() =>eventClick()}>Click</button>
        </>
    )
}   

export default Eventos
