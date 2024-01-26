/*
useState() --> triggers the component to re-render everytime the state of value changes

useRef() --> React Hook that doesn't trigger the component to re-render when its state of value changes

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