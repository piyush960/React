/*
useEffect() -> React Hook that tells react to fire a function when
1.) component re-renders -- useEffect(() => {})
2.) when component is mounted -- useEffect(() => {}, [])
3.) when state of value changes -- useEffect(() => {}, [value])

// USES

Event Listeners
DOM manipulation
Subscriptions (real - time updates)
Fetching data from an API
Clean up when a component is unmounted

*/
import MyComponent from "./MyComponent"

function App(){
  return(<MyComponent />) 
}

export default App