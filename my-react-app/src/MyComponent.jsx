import React, {useState} from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [name2, setName2] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    const handleNameChange = (event) => {
        setName2(event.target.value);
    }

    function handleQuantityChange (event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange (event) {
        setComment(event.target.value);
    }

    function handlePaymentChange (e) {
        setPayment(e.target.value);
    }

    const handleShippingChange = (e) => {
        setShipping(e.target.value);
    }

    const updateName = () => {
        setName("Nitansh");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const decrementAge = () => {
        setAge(age>=1 ? age-1 : age);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <br/><br/><h1>Ordering app</h1>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button> <br/>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>+</button>
            <button onClick={decrementAge}>-</button> <br/>

            <p>Employed: {isEmployed ? "Yes" : "No"}</p>
            <button display="block" onClick={toggleEmployedStatus}>Toggle status</button> <br/>

            <input value={name2} onChange={handleNameChange} />
            <p>Name: {name2}</p> <br/>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p> <br/>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter desc here" />
            <p>Comment: {comment}</p> <br/>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Cash">Cash</option>
            </select>
            <p>Payment type: {payment}</p> <br/>

            <label>
                <input type="radio" value="Pick Up"
                        checked={shipping === "Pick Up"}
                        onChange={handleShippingChange} />
                        Pick Up
            </label> <br />
            <label>
                <input type="radio" value="Delivery"
                        checked={shipping === "Delivery"}
                        onChange={handleShippingChange} />
                        Delivery
            </label>
            <p>Shipping type: {shipping}</p>
            <br/> <br/> <h1>end</h1>
        </div>
    );
}

export default MyComponent