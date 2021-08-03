import React, {createContext, useState} from "react";

export const InitContext = createContext();

export const InitProvider = (props) => {
    const [isEng, setIsEng] = useState(false);
    const [apiOrigin]=useState("http://www.testapp.net")

    return(
        <InitContext.Provider value={{
            apiOrigin,
            isEng, setIsEng
        }}>
            <>
                {props.children}
            </>
        </InitContext.Provider>

    )
}