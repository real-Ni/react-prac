import React, {useState} from 'react';

function ColorPicker () {

    const [color, setColor] = useState("#FFFFFF");

    const colorChange = (e) => {
        setColor(e.target.value);
    }

    return(
        <div className="color-picker-container">
            <h1>color picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={colorChange}></input>
            <h1>end of color picker</h1>
        </div>
    );
}

export default ColorPicker