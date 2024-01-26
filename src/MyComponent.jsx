
import React, {useState, useEffect} from "react"

function MyComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleChange)
        console.log("Event Listener Added") // runs 2 times in strict mode (1. dev only setup and 2. cleanup cycle)

        return () => {
            window.removeEventListener('resize', handleChange) // remove event listener when we unmount out component
            console.log("Event Listener Removed") // gets cleaned during dev cycle unmount
        }
    }, [])
    

    function handleChange(){
        setWidth(w => window.innerWidth)
        setHeight(h => window.innerHeight)
    }

    return(<>
        <h2>
            Width: {width} Height: {height}
        </h2>
    </>)    
    
}

export default MyComponent

/**

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title = `${count} ${color}`
    }, [count])

    function incCount(){
        setCount(c => c+1)
    }

    function decCount(){
        setCount(c => c-1)

    }

    function changeColor(){
        setColor(c => c === 'green' ? 'red' : 'green')
    }

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={incCount}>Increase</button>
        <button onClick={decCount}>Decrease</button>
        <button onClick={changeColor}>Change Color</button>
    </>)

 */