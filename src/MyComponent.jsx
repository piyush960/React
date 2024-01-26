
import React, {useState} from 'react';

function MyComponent(){

    // UPDATE ARRAY OF OBJECTS

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel}

        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => index !== i))
    }

    function handleYearChange(e){
        setCarYear(e.target.value)
    }

    function handleMakeChange(e){
        setCarMake(e.target.value)
    }

    function handleModelChange(e){
        setCarModel(e.target.value)
    }

    

    return(<div>
        <h2>Your Cars</h2>
        <ul>
            {
                cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)
            }
        </ul>
        <input type="number" value={carYear} id='car-year' placeholder='enter year' onChange={handleYearChange}/><br />
        <input type="text" value={carMake} id='car-make' placeholder='enter make' onChange={handleMakeChange}/><br />
        <input type="text" value={carModel} id='car-model' placeholder='enter model' onChange={handleModelChange}/><br />
        <button onClick={handleAddCar}>Add Car</button>
    </div>)
}


export default MyComponent


/**

UPDATE STATE OF OBJECTS

function MyComponent(){
    
    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

    function handleYearChange(e){

        setCar(c => ({...c, year: e.target.value}))
    }

    function handleMakeChange(e){
        setCar(c => ({...c, make: e.target.value}))

    }

    function handleModelChange(e){
        setCar(c => ({...c, model: e.target.value}))

    }

    return(<div>
        <p>Your Car is : {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}/><br /><br />
        <input type="text" value={car.make} onChange={handleMakeChange}/><br /><br />
        <input type="text" value={car.model} onChange={handleModelChange}/><br /><br />
    </div>)
    
}

UPDATE STATE OF ARRAY

function MyComponent(){
    
    const [foods, setFood] = useState(["Apple", "Mango", "Banana"])

    function handleAddFood(){
        const newFood = document.getElementById('newFood').value;
        document.getElementById('newFood').value = '';
        setFood(f => [...foods, newFood])
    }

    function handleRemoveFood(index){
        setFood(f => f.filter((_, i) => index !== i))
    }

    return(<div>
        <h2>List of Foods</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)} style={{cursor: 'pointer'}}>{food}</li>)}
        </ul>
        <input type="text" placeholder='enter a food' id='newFood'/>
        <button onClick={handleAddFood}>Add</button>
    </div>)

}

 */