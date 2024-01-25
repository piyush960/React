import React, {useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0)

    const incCount = () => {
        setCount(count + 1)
    }

    const decCount = () => {
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return(
        <div className="">
            <h1>{count}</h1>
            <button onClick={decCount}>Dec Count</button>
            <button onClick={resetCount}>Reset Count</button>
            <button onClick={incCount}>Inc Count</button>
        </div>
    )
}

export default Counter