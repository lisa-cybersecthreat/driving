import React, {createContext, useState} from "react";

export const InitContext = createContext();

export const InitProvider = (props) => {
    const [isEng, setIsEng] = useState(false);
    const [apiOrigin]=useState("http://testapp.net")
    const [apiRegister]=useState("http://testapp.net/api/register")
    const [apiLogin]=useState("http://testapp.net/api/auth/login");
    const [apiLogout]=useState("http://testapp.net/api/auth/logout");
    const [apiMe]=useState("http://testapp.net/api/auth/me"); 
    const [apiPWReset]=useState("http://testapp.net/api/password/reset");
    const [apiTeachers] = useState("http://testapp.net/api/teachers")
    const [apiArticles] = useState("http://testapp.net/api/articles")
    const [apiAuthRefresh] = useState("http://testapp.net/api/auth/refresh")
    const [apibookTeacher] = useState("http://testapp.net/api/auth/reservation/teacher/submit")
    
    return(
        <InitContext.Provider value={{
            apiOrigin,
            apiRegister,
            apiLogout,
            apiLogin,
            apiMe,
            apiTeachers,
            apiPWReset,
            apiArticles,
            apiAuthRefresh,
            apibookTeacher,
            isEng, setIsEng
        }}>
            <>
                {props.children}
            </>
        </InitContext.Provider>

    )
}