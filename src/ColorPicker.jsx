

import React, {useState} from 'react';

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(e){
        setColor(e.target.value)
    }

    return(<div className='color-picker-container'>
                <h1>Select Color</h1>
                <div className="color-container" style={{backgroundColor: color}}>
                    Selected Color: {color}
                </div>
                <label htmlFor='color-selector'>
                    Select Color: 
                    <input type="color" name='color-selector' onChange={handleColorChange} value={color}/>
                </label>
            </div>)
}

export default ColorPicker