
import React, { useState, useEffect, createContext } from 'react';
import ComponentB from './ComponentB';

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("");

    useEffect(() => {
        setUser("Alex")
    }, [])

    return(
            <div className='box'>
                <h1>ComponentA</h1>
                <h2>{user}</h2>
                <UserContext.Provider value={user}>
                    <ComponentB />
                </UserContext.Provider>
            </div>
        )
}

export default ComponentA