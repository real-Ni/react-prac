import React, {useState, useEffect} from 'react';

function ComponentTwo () {

//    const [count, setCount] = useState(0);
//    
//    useEffect(() => {
//        document.title = `Count: ${count}`;
//    }, [count]);
//
//    function addCount() {
//        setCount(c => c+1);
//    }
//
//    return(
//        <>
//        <p>Count: {count}</p>
//        <button onClick={addCount}>Add</button>
//        </>
//    );

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    
}

export default ComponentTwo