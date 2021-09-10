import { createContext, useContext, useEffect, useState } from "react";
import { InitContext } from "./InitContext";

export const DataContext = createContext();

export const DataProvider = props => {
    const { apiTeachers } = useContext(InitContext);
    const [ me, setMe ] = useState({});
    const [teachers, setTeachers] = useState([])

    const [isLogin, setIsLogin] = useState(false)
    const [isRegister, setIsRegister] = useState(false)
    const [isChangePW, setIsChangePW] = useState(false);
    const [isDropDown, setIsDropDown] = useState(false)

    useEffect(()=> {
        fetch(apiTeachers)
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setTeachers([data])
        })
        .catch(err=>console.error(err))
    }, [apiTeachers])

    return(
        <DataContext.Provider value={{
            me, setMe,
            teachers, setTeachers,
            isLogin, setIsLogin,
            isRegister, setIsRegister,
            isChangePW, setIsChangePW,
            isDropDown, setIsDropDown
        }}>
            {props.children}
        </DataContext.Provider>
    )
}