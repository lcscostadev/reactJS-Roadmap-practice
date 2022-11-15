import React, { useState, useEffect } from 'react';

const UseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000)
    }, [])

    // if we dont use the second parameter it keeps rendering for ever

    return (
        <>
            <h1>I've rendered {count} times!</h1>
        </>
    )
}

export default UseEffect;