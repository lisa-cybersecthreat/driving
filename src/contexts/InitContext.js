import React, {createContext, useState} from "react";

export const InitContext = createContext();

export const InitProvider = (props) => {
    const [isEng, setIsEng] = useState(false);
    const [apiOrigin]=useState("http://testapp.net")
    const [apiRegister]=useState("http://testapp.net/api/register")
    const [apiLogin]=useState("http://testapp.net/api/auth/login");
    const [apiLogout]=useState("http://testapp.net/api/auth/logout");
    const [apiUser]=useState("http://testapp.net/api/user");
    const [apiArticles] = useState("http://testapp.net/api/articles")
    

    return(
        <InitContext.Provider value={{
            apiOrigin,
            apiRegister,
            apiLogout,
            apiLogin,
            apiUser,
            apiArticles,
            isEng, setIsEng
        }}>
            <>
                {props.children}
            </>
        </InitContext.Provider>

    )
}