import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/dataContext";
import { v4 as uuidv4 } from 'uuid';
import { InitContext } from "../contexts/InitContext";
import { Spinner } from "../components/Spinner";

import "../styles/MyAccount.scss";

function MyAccount(props) {
    const { apiPWReset, apiAuthRefresh } = useContext(InitContext);
    const { me, setMe } = useContext(DataContext);

    const fetchPWReset = e => {
        fetch(apiPWReset, {
            method: "GET",
            Authorization: `Bearer ${sessionStorage.getItem("session_token")}`
        })      
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })  
        .catch(err=>console.log(err))
    }

    // const fetchApiAuthRefresh = e => {
    //     fetch(apiAuthRefresh, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
    //         }
    //         .then(res=>res.json())
    //         .then(data=>{
    //             console.log(data)
    //         })
    //         .catch(err=> console.error(err))
    //     })
    // }

    return(
        <>{
            me.user===undefined ? <Spinner/>: 
            <main id="MyAccount">
                myAccount
                <section>
                    {Object.keys(me.user).map((key, i)=><li key={uuidv4()}>{key}:{Object.values(me.user)[i]}</li>)}
                </section>
                <button onClick={fetchPWReset}>reset password</button>
            </main>     
        }</>
          
    )
}

export default MyAccount;