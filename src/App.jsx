/**
 React Hook -> special function that allow functional components to use react features
              without writing classes (useState, useEffect, useContext, etc.) 
  
  useState() -> a react hook that allows creation of a stateful variable and a setter
                setter is used to update the value of stateful variable in virtual DOM
                [name, setName]
 
 */

import Counter from './Counter'

function App() {

  return(
    <Counter />
  )
}

export default App
