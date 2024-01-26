
import React, { useState, useEffect, useRef } from 'react';

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef();
    const startTimeRef = useRef();

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return(() => {
            clearInterval(intervalIdRef.current)
        })

    }, [isRunning])

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false)
    }

    function reset(){
        setIsRunning(false)
        setElapsedTime(0);
    }

    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`
    }

    return(<>
        <h1>{formatTime()}</h1>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={stop}>Stop</button>
    </>)
}

export default Stopwatch