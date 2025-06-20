import React, {useState} from 'react';

function UpdateObjects () {

    const [car, setCar] = useState({
        year: 2025,
        make: "Suzuki",
        model: "WagonR"
    });

    const yearChange = (e) => {
        setCar(c => ({...c, year: e.target.value}));
    }

    const makeChange = (e) => {
        setCar(c => ({...c, make: e.target.value}))
    }

    const modelChange = (e) => {
        setCar(c => ({...c, model: e.target.value}))
    }




    const [fruits, setFruits] = useState(["Apple", "Orange", "Banana"]);

    function addFruit () {
        const newFruit = document.getElementById("fruitInput").value;
        document.getElementById("fruitInput").value = "";
        setFruits(f=> ([...f, newFruit]));
    }

    function removeFruit (index) {
        setFruits(f => f.filter((_, i) => i!==index));
    }


    return (
        <div>
            <p>Your favorite car is a {car.year} {car.make} {car.model}.</p>
            <input value={car.year} type="number" placeholder="Year" onChange={yearChange} />
            <input value={car.make} type="text" placeholder="Make" onChange={makeChange} />
            <input value={car.model} type="text" placeholder="Model" onChange={modelChange} />

            <h1>List of fruits</h1>
            <ul>
                {fruits.map((fruit, index) => <li key={index} onClick={() => removeFruit(index)}>{fruit}</li>)}
            </ul>
            <input type="text" id="fruitInput" placeholder="Enter fruit name"></input>
            <button onClick={addFruit}>Add Fruit</button>
        </div>
    );

}

export default UpdateObjects