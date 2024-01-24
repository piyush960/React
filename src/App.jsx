import Header from './Header'
import Footer from './Footer'
import Food from './Food'

function App() {

  // return statement can return only single element that may contain children
  // hence enclose them in a fragment <></>
  return(
    // shorthand for <Header></Header>
    <>
      <Header/> 
      <Food/>
      <Footer/>
    </>
    
  )
}

export default App
