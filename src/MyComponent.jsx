

import React, { useRef, useEffect } from "react"

function MyComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log('Component Re-Rendered')
    })

    function handleInput1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "#c6c6c6";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleInput2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "#c6c6c6";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleInput3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "#c6c6c6";
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
    }

    return(<div>
        <button onClick={handleInput1}>Click ME!</button>
        <input ref={inputRef1} /><br />

        <button onClick={handleInput2}>Click ME!</button>
        <input ref={inputRef2} /><br />

        <button onClick={handleInput3}>Click ME!</button>
        <input ref={inputRef3} /><br />
    </div>)    
}

export default MyComponent