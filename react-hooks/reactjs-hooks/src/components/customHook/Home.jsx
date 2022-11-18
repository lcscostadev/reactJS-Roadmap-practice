import React from 'react';
import UseFetch from './UseFetch';

const Home = () => {
    const [data] = UseFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title
                    }</p>
                })
            }
        </>
    )
}

export default Home;