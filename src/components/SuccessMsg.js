import { AiOutlineCheckCircle } from "react-icons/ai";
import "../styles/SuccessMsg.scss"

function SuccessMsg(props) {
    return (  
        <div className="login-popup">
        <div className="overlay"></div>
            <form id="SuccessMsg" className="login-popup" onSubmit={props.onClick}>
                <AiOutlineCheckCircle/>
                <h1>{props.t("success")}</h1>
                <p>{props.message}</p>
                <button>{props.t("continue")}</button>
            </form>      
        </div>  
)
}


export default SuccessMsg;