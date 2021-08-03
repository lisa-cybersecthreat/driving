import React, {createContext, useContext, useState} from 'react';

export const FunctionContext = createContext()

export const FunctionPrivider = (props) => {
    const changeInput = (e) => {
        // setRegistData({...registData, [e.target.name] : e.target.value})  
    }
    
    return (
        <FunctionContext.Provider value={{
            changeInput
        }}>

        </FunctionContext.Provider>
    )
}