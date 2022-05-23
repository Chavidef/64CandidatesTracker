import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CountContext = createContext();

const CountsContextComponents = ({ children }) => {
    const [counts, setCounts] = useState({
        pending: 0,
        confirmed: 0,
        refused: 0
    });


    const updateCounts = async () => {
        const { data } = await axios.get('/api/candidates/getcounts');
        setCounts(data);
    }

    useEffect(() => {
        updateCounts();
    }, []);

    return (
        <CountContext.Provider value={{ counts, updateCounts }}>
            {children}
        </CountContext.Provider>
    )
}

const useCounts = () => {
    return useContext(CountContext);
}

export { CountsContextComponents, useCounts };