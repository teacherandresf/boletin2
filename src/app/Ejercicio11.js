import {useState, useRef} from "react"

export default function TimeCounter(){
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    let intervaloId = useRef(null);

    function timeFormateado(segundos){
        const minutos = Math.floor(segundos/60)
        const segundosRestantes = segundos % 60
        return minutos + ":" + segundosRestantes
    }

    function startTimer(){
        if(!isRunning){
            setIsRunning(true)
            intervaloId.current = setInterval(()=>{
                setTime(prevTime => prevTime+1)
            }, 1000)

        }
    }

    function pauseTimer(){
        setIsRunning(false)
        clearInterval(intervaloId.current)
        intervaloId.current = null
    }

    function resetTimer(){
        setIsRunning(false)
        clearInterval(intervaloId.current)
        intervaloId.current = null
        setTime(0)
    }



    return(
        <div>
            <h1>Contador de tiempo:</h1>
            <p>Tiempo: {timeFormateado(time)}</p>
            <button onClick={startTimer} disabled={isRunning}>
                Iniciar
            </button>
            <button onClick={pauseTimer} disabled={!isRunning}>
                Pausar
            </button>
            <button onClick={resetTimer}>Reiniciar</button>
        </div>
    );
}