import {useState} from "react"

export default function LimitedCounter(){
     
    const [limiteContador, setLimiteContador ] = useState(0)
    const [contador, setContador] = useState(0)
    
    function incrementarContador(){
        if(contador < limiteContador){
            setContador(contador + 1)
        }
        
    }

    return(
        <div>
           <input type="number" value={limiteContador} onChange={e => setLimiteContador(e.target.value)} />
           <p>{contador}</p>
           <button onClick={incrementarContador}>Incrementar</button>
        </div>
    );
}