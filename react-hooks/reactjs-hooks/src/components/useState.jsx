import React, { useState } from 'react';

const UseState = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </>
    );
}

export default UseState;