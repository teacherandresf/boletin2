import {useState} from "react"


export default function LiveValidationForm(){

    const [nuevoNombre, setNuevoNombre] = useState("")
    const [nuevoEmail, setNuevoEmail] = useState("")
    const [nuevaContri, setNuevaContri] = useState("")
    const [nombreCorrecto, setNombreCorrecto] = useState(false)
    const [mensajeErrorNombre, setMensajeErrorNombre] = useState("")

    function validarFormulario(e){
        e.preventDefault();
        if(nombreCorrecto){
            alert("Añadido")
        }else{
            alert("Revisa los campos")
        }

    }

  
    function validaNombre(e){
        const posibleNombre = e.target.value
        
        if(posibleNombre === ""){
            setMensajeErrorNombre("Debes escribir algo")
            setNombreCorrecto(false)
        } else if(posibleNombre.length > 10){
            setMensajeErrorNombre("has escrito demasiado")
            setNombreCorrecto(false)
        }else{
            setNombreCorrecto(true)
            setMensajeErrorNombre("")
        }
        
        setNuevoNombre(posibleNombre)
    }

    return(
        <div>
            <form onSubmit={validarFormulario} >
                <label>Nombre: <input type="text" value={nuevoNombre} onChange={validaNombre} /></label>
                <p>{mensajeErrorNombre}</p>
                <label>Email: <input type="text" value={nuevoEmail} onChange={e => setNuevoEmail(e.target.value)} /></label>
                <label>Contraseña: <input type="password" value={nuevaContri} onChange={e => setNuevaContri(e.target.value)} /></label>
                <input type="submit" />
            </form>
        </div>
    );
}