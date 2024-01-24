// conditional rendering - render only if certain condition evaluates to true

import Greet from './Greet'

function App() {
  return(
    <>
      <Greet username="Alex" isLoggedin={true}/>
      <Greet username="Sam" isLoggedin={false}/>
      <Greet username="Helena" isLoggedin={true}/>
      <Greet />
    </>
  )
}

export default App
