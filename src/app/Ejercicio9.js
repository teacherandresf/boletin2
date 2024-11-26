import {useState} from "react"

const usuariosIniciales = [
    
]

let contadorId = 2;

function User({usuario, onDelete}){
    return(
        <li>
            <p>Nombre: {usuario.nombre}</p>
            <p>Email: {usuario.email}</p>
            <p>Edad: {usuario.edad}</p>
            <button onClick={() => onDelete(usuario.id)}>Eliminar</button>
        </li>
    );
}

export default function UserTable(){

    const [usuariosEstado, setUsuariosEstado] = useState(usuariosIniciales)
    const [nuevoNombre, setNuevoNombre] = useState("")
    const [nuevoEmail, setNuevoEmail] = useState("")
    const [nuevaEdad, setNuevaEdad] = useState(0)

    function gestionarAgregarUsuario(e){
        e.preventDefault();
        setUsuariosEstado([...usuariosEstado,
            {
                id: contadorId++,
                nombre: nuevoNombre,
                email: nuevoEmail,
                edad: nuevaEdad
            }
        ])
        setNuevaEdad("")
        setNuevoEmail("")
        setNuevoNombre("")
    }

    function handleDelete(userId){
        setUsuariosEstado(usuariosEstado.filter(
            usuario => usuario.id !== userId
        ))
    }

    return(
        <div>
            <form onSubmit={gestionarAgregarUsuario}>
                <label>Nombre: <input type="text" value={nuevoNombre} onChange={e => setNuevoNombre(e.target.value)} /></label>
                <label>Email: <input type="email" value={nuevoEmail} onChange={e => setNuevoEmail(e.target.value)} /></label>
                <label>Edad: <input type="number" value={nuevaEdad} onChange={e => setNuevaEdad(e.target.value)} /></label>
                <input type="submit" value="Crear" />
            </form>
            <h3>Usuarios registrados: </h3>
            <ul>
                {usuariosEstado.map(
                    usuario => <User usuario={usuario} key={usuario.id}
                        onDelete={handleDelete} />
                )}
            </ul>
        </div>
    );
}