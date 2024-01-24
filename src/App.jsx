// props -> read-only properties that are shared between components
//           A parent component can send data to child component
//           <Component key=value />

// propTypes -> a mechanism which ensures the passed value is of correct datatype
//            age: PropeTypes.number

// defaultProps -> used to pass a default value

import Student from './Student'

function App() {
  return(
    <>
      <Student name="Alex" age={21}/>
      <Student name="Sam" age={19}/>
      <Student name="Helena" age={22}/>
      <Student age={20}/>
    </>
  )
}

export default App
