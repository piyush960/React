

import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [text, setText] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value)
    }

    function handleTextChange(e){
        setText(e.target.value)
    }

    function handlePaymentChange(e){
        setPayment(e.target.value)
    }

    function handleShippingChange(e){
        setShipping(e.target.value)
    }

    return(<div>
                <input type="text" value={name} onChange={handleNameChange}/>
                <p>Name: {name}</p>

                <input type="number" value={quantity} onChange={handleQuantityChange}/>
                <p>Quantity: {quantity}</p>

                <textarea value={text} placeholder='enter instructions...' onChange={handleTextChange}></textarea>
                <p>Message: {text}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an Option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Rupay">Rupay</option>
                </select>
                <p>Payment Mode: {payment}</p>

                <label>
                    <input type="radio" value="Pickup" onChange={handleShippingChange} checked={shipping === 'Pickup'} />
                    Pickup
                </label><br />

                <label>
                    <input type="radio" value="Delivery" onChange={handleShippingChange} checked={shipping === 'Delivery'} />
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>)

}

export default MyComponent