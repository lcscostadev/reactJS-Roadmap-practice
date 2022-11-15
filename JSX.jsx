import React, { useState } from 'react';

const JSX = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h1>This is an example of JSX file</h1>
                <button onClick={() => setCount(count + 1)}>Click to increase</button>
            </div>
        </>
    )
}

export default JSX;