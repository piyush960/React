/*
useState() --> triggers the component everytime the state of value changes

useRef() --> React Hook that doesn't trigger the component its state of value changes

useful for
Accessing/Interacting with DOM elements
Handling Focus, Animations, and Transitions
Managing Timers and Intervals

*/

import MyComponent from "./MyComponent"

function App(){
  return(<>
    <MyComponent />
  </>)
}

export default App