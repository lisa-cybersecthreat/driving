import React, {createContext, useState} from "react";

export const InitContext = createContext();

export const InitProvider = (props) => {
    const [isEng, setIsEng] = useState(false);
    const [apiOrigin]=useState("http://testapp.net")
    const [apiRegister]=useState("http://testapp.net/api/register")
    const [apiLogin]=useState("http://testapp.net/api/auth/login");
    const [apiLogout]=useState("http://testapp.net/api/auth/logout");
    const [apiMe]=useState("http://testapp.net/api/auth/me"); 
    const [apiPWReset]=useState("http://testapp.net/password/reset")
    const [apiArticles] = useState("http://testapp.net/api/articles")
    

    return(
        <InitContext.Provider value={{
            apiOrigin,
            apiRegister,
            apiLogout,
            apiLogin,
            apiMe,
            apiPWReset,
            apiArticles,
            isEng, setIsEng
        }}>
            <>
                {props.children}
            </>
        </InitContext.Provider>

    )
}