import {useState} from "react"


function Contador({count, onIncrementar, indice}){

    return(
        <div>
            <p>{count}</p>
            <button onClick={() => onIncrementar(indice)} >Incrementar</button>
        </div>
    );
}

export default function MultiCounter(){

    const [contadores, setContadores] = useState([])

    function agregarContador(){
        setContadores([...contadores, 0])
    }

    function handleIncrementar(indice){
        setContadores(contadores.map(
            (contador, index) => {
                if(index === indice){
                    return contador + 1
                }else{
                    return contador
                }
            }
        ))
    }

    return(
        <div>
            <button onClick={agregarContador}> Agregar Contador</button>
            {contadores.map((contador, index) =>
                <Contador key={index} count={contador} onIncrementar={handleIncrementar} indice={index} />
            )}
        </div>
    );

}