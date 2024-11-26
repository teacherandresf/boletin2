import {useState} from "react"

const listaEstudiantesInicial =
    [
        {id:1, nombre:"Manuel"},
        {id:2, nombre:"Pepe"},
        {id:3, nombre:"Julia"}
    ];

let idContador = 4;

export default function StudentList(){

    const [listaEstudiantesEstado, setListaEstudiantesEstado] = useState(listaEstudiantesInicial);
    const [nuevoNombreEstudiante, setNuevoNombreEstudiante] = useState("");

    function gestionarEliminarEstudiante(estudianteId){
        setListaEstudiantesEstado(listaEstudiantesEstado.filter(
            estudiante => estudiante.id !== estudianteId
        ));
    };

    function gestionarAgregarEstudiante(e){
        e.preventDefault();
        setListaEstudiantesEstado([
            ...listaEstudiantesEstado,
            {
                id: idContador++,
                nombre: nuevoNombreEstudiante
            }
        ]);

        //Vaciar el input
        setNuevoNombreEstudiante("");

    }

    return(
    <div>
        {
            listaEstudiantesEstado.map(
                estudiante =>
                    <div key={estudiante.id}>
                        <p style={{display:"inline"}}>{estudiante.nombre}</p>
                        <button onClick={() => gestionarEliminarEstudiante(estudiante.id)} >Eliminar</button>
                    </div>
                
            )
        }
        <form onSubmit={gestionarAgregarEstudiante}>
            <input type="text" value={nuevoNombreEstudiante} onChange={e => setNuevoNombreEstudiante(e.target.value)} />
            <input type="submit" value="Agregar" />
        </form>
    </div>
    );
};