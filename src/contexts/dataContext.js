import { createContext, useContext, useEffect, useState } from "react";
import { InitContext } from "./InitContext";

export const DataContext = createContext();

export const DataProvider = props => {
    const { apiTeachers } = useContext(InitContext);
    const [ me, setMe ] = useState({});
    const [teachers, setTeachers] = useState([
        // {
        //     "id": 3,
        //     "name": "kk1",
        //     "mobile": "09331112222",
        //     "email": "kk@kk.com",
        //     "role": "teacher",
        //     "created_at": "2021-08-03T18:27:32.000000Z",
        //     "updated_at": "2021-08-03T18:27:32.000000Z"
        // }, {
        //     "id": 1,
        //     "name": "abc",
        //     "mobile": "09331112222",
        //     "email": "kabc@kk.com",
        //     "role": "teacher",
        //     "created_at": "2021-08-03T18:27:32.000000Z",
        //     "updated_at": "2021-08-03T18:27:32.000000Z"
        // },
        // {
        //     "id": 2,
        //     "name": "ww",
        //     "mobile": "12341234",
        //     "email": "ww@kk.com",
        //     "role": "teacher",
        //     "created_at": "2021-08-03T18:27:32.000000Z",
        //     "updated_at": "2021-08-03T18:27:32.000000Z"
        // },
        // {
        //     "id": 9,
        //     "name": "小明",
        //     "mobile": "12341234",
        //     "email": "mingim@kk.com",
        //     "role": "teacher",
        //     "created_at": "2021-08-03T18:27:32.000000Z",
        //     "updated_at": "2021-08-03T18:27:32.000000Z"
        // },       {
        //     "id": 12,
        //     "name": "emma",
        //     "mobile": "12341234",
        //     "email": "mingim@kk.com",
        //     "role": "teacher",
        //     "created_at": "2021-08-03T18:27:32.000000Z",
        //     "updated_at": "2021-08-03T18:27:32.000000Z"
        // }
    ])

    const [isLogin, setIsLogin] = useState(false)
    const [isRegister, setIsRegister] = useState(false)
    const [isChangePW, setIsChangePW] = useState(false);
    const [isDropDown, setIsDropDown] = useState(false)

    useEffect(()=> {
        fetch(apiTeachers)
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setTeachers(data.data)
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