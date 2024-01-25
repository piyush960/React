// rendering lists

import List from "./List"

function App() {

    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "Mango", calories: 45},
                    {id: 3, name: "Banana", calories: 105},
                    {id: 4, name: "Pineapple", calories: 37},
                    {id: 5, name: "Chickoo", calories: 86},
                    {id: 6, name: "Grapes", calories: 75}]


    const vegetables = [{id: 1, name: "Potato", calories: 95},
                    {id: 2, name: "Tomato", calories: 45},
                    {id: 3, name: "Carrot", calories: 105},
                    {id: 4, name: "Brinjal", calories: 37},
                    {id: 5, name: "Peas", calories: 86},
                    {id: 6, name: "Lady Finger", calories: 75}]

    return(
      <>
        <List category="Fruits" items={fruits}/>
        <List category="Vegetables" items={vegetables}/>
      </>
    )
}

export default App
