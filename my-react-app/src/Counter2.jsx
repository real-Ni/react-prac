import React, {useState} from 'react';

function CounterTry () {
    const [count, setCount] = useState(0);

    // updates based on the previous state, not the current state (safer)
    const updateCount = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <> <br/> <h1>Counter 2:</h1>
        <div className="counter">
        <button onClick={updateCount}>{count}</button>
        <button onClick={resetCount}>Reset</button>
        </div> <h1>end of counter</h1><br/> <br/>
        </>
    );
}

export default CounterTry