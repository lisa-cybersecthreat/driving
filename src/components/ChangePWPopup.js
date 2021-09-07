import { useContext } from "react";
import { InitContext } from "../contexts/InitContext";

function ChangePWPopup(props) {
    const {
        apiPWReset
    } = useContext(InitContext)
    const clickResetBtn = e => {
        fetch(apiPWReset, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
            },
            body: JSON.stringify({email: "bb@bb.com"})
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="login-popup">
            <div className="overlay"></div>
            <form onSubmit={props.onSubmit}>
            <button onClick={clickResetBtn}>reset</button>
                <button className="close" onClick={props.clickOverlay}></button>
                <p>{props.t("change password")}</p>
                <input type="email" name="email" placeholder="email" onChange={props.onChange} required />
                <input type="password" name="password" placeholder="password" onChange={props.onChange} required autoComplete="off" />
                <input defaultValue="" type="password" name="password_confirm" placeholder="confirm password"  required autoComplete="off" />
                <input type="submit" value={props.t("confirm")} onSubmit={props.onSubmit}/>
                <p style={{color: props.alert.toLowerCase().indexOf("success")!==-1 ? "var(-green}" : "var(--red)"}}>{props.alert}</p>   
            </form>            
        </div>        
)
}


export default ChangePWPopup;