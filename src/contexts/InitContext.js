import React, {createContext, useState} from "react";

export const InitContext = createContext();

export const InitProvider = (props) => {
    const [isEng, setIsEng] = useState(false);

    return(
        <InitContext.Provider value={{
            isEng, setIsEng
        }}>
            <>
                {props.children}
            </>
        </InitContext.Provider>

    )
}