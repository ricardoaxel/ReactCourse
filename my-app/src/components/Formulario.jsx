import React from 'react'

const Formulario = () => {

    const [fruta,setFruta] = React.useState('')
    const [descripcion,setDescripcion] = React.useState('')

    const[lista,setLista] =React.useState([])
    
    const guardarDatos = (e) => {
        e.preventDefault()

        if(!(fruta.trim())){
            console.log("Campo fruta vacio")
            return
        }
        if(!(descripcion.trim())){
            console.log("Campo descripción vacio")
            return
        }

        console.log("Procesando datos..." + fruta + descripcion)

        setLista([
            ...lista,
            {fruta,
            descripcion}
        ])

        e.target.reset()
        setFruta("")
        setDescripcion("")
        
    }

    return (
        <div>
            <h2>Formularios</h2>
            <form onSubmit={guardarDatos}>
                <input 
                type="text"
                placeholder="Ingrese Ruta"
                className= "form-control mb-2"
                onChange= {e => setFruta(e.target.value)}
                />
                <input 
                type="text"
                placeholder="Ingrese Descripción"
                className= "form-control mb-2"
                onChange= {e => setDescripcion(e.target.value)}
                />
                <button className="btn btn-primary btn-black" type= "submit">Agregar</button>
            </form>
                {
                    lista.map(el => <li key= {el.fruta}>{el.fruta} es: {el.descripcion}</li>)
                }
        </div>
    )
}

export default Formulario
