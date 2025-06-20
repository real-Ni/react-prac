import React, {useState} from 'react';

function Counter () {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <> <br/> <h1>Counter:</h1>
        <div className="counter">
        <button onClick={updateCount}>{count}</button>
        <button onClick={resetCount}>Reset</button>
        </div> <h1>end of counter</h1><br/> <br/>
        </>
    );
}

export default Counter