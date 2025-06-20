import React, {useState} from 'react';

function UAOO () {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar () {
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel
        }

        setCars(c => ([...c, newCar]));

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar (index) {
        setCars(c => c.filter((_, i) => i!==index));
    }

    function handleYearChange (event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange (event) {
        setCarMake(event.target.value);
    }
    function handleModelChange (event) {
        setCarModel(event.target.value);
    }

    return(
        <>
        <br></br> <br></br> <br></br> <h1>Add cars</h1>
        <input value={carYear} type="number" placeholder="Year" onChange={handleYearChange}></input>
        <input value={carMake} type="text" placeholder="Make" onChange={handleMakeChange}></input>
        <input value={carModel} type="text" placeholder="Model" onChange={handleModelChange}></input>
        <button onClick={handleAddCar}>Add car</button>
        <ul>
            {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
        </ul>

        </>
    );
}

export default UAOO