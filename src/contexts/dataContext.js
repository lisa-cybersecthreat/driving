import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = props => {
    const [ me, setMe ] = useState({});
    const [teachers, setTeachers] = useState([])

    return(
        <DataContext.Provider value={{
            me, setMe,
            teachers, setTeachers
        }}>
            {props.children}
        </DataContext.Provider>
    )
}