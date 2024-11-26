import {useState} from "react"

const calificacionesInicial = [

]

let id = 0;

export default function AverageCalculator(){

    const [calificacionesEstado, setCalificacionesEstado] = useState(calificacionesInicial);
    const [nuevaCalificacion, setNuevaCalificacion] = useState(0)
    const [promedio, setPromedio] = useState("Sin datos")

    function gestionarNuevaCalificacion(e){
        setNuevaCalificacion(e.target.value)
    }

    function agregarCalificacion(e){
        e.preventDefault()

        const nuevasCalificaciones = [
            ...calificacionesEstado,
            parseInt(nuevaCalificacion)
        ]

        setCalificacionesEstado(nuevasCalificaciones)

        let acumulador = 0;
            for(let calificacion of nuevasCalificaciones){
                acumulador = acumulador + calificacion
            }

            setPromedio(acumulador/nuevasCalificaciones.length)

            //Borrar input
            setNuevaCalificacion(0)

    }

    

    

    return(
        <div>
            <p>Calificaciones: </p>
            {
                calificacionesEstado.map(calificacion =>
                    <p key={id++}>{calificacion}</p>
                
                )
            }
            <form onSubmit={agregarCalificacion}>
                <input type="number" value={nuevaCalificacion} onChange={gestionarNuevaCalificacion} />
                <input type="submit" value="Agregar nota" />
            </form>
            <p>Promedio: {promedio}</p>
        </div>
    );
}