// useRef can be used when we want a mutable value that doest re-render
import React, { useState, useRef, useEffect } from 'react';

const UseRef = () => {
    const [inputValue, setInputValue] = useState('');
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    })

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h1>This was rendered {count.current}</h1>
        </>
    )
}

export default UseRef;