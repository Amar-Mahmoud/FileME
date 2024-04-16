import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [userData, setUserData] = useState({});

    const updateUserData = (newData) => {
        setUserData(prevState => ({
            ...prevState,
            ...newData
        }));
    };

    return (
        <DataContext.Provider value={{ userData, updateUserData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
