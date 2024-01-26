/*
useContext() --> React Hook that allows to pass value through multiple level of Components
without using props (prevents prop drilling)

//Provider Component

import {createContext} from react
export const MyContext = createContext()
<MyContext.Provider value= {value}>
  <child />
<MyContext.Provider />


// Consumer Component

import MyContext from ProviderComponet
import { useContext } from react
const value = useContext(MyContext)

*/

import ComponentA from "./ComponentA"

function App(){
  return(<ComponentA />)
}

export default App