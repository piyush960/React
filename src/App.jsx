/*
updater function -> it is passed as an argument to setState()
it is used with multiple state updates and asynchronous functions
allows safe update based on the previous state

it uses the current state to calculate the next state
set function do not trigger an update
React batches together setState() for performance reasons
NEXT state is still the CURRENT state after an update

but, 
updater function takes the PENDING state to calculate the NEXT state
React puts the updater functions in a queue (waiting in line)

*/

import MyComponent from "./MyComponent";

function App(){

  return(<MyComponent />)
}

export default App