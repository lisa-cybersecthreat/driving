import { AiOutlineCheckCircle } from "react-icons/ai";
// import "../styles/SuccessMsg.scss"

function ReservationSuccess(props) {
    return (  
        <div className="login-popup">
        <div className="overlay"></div>
            <form id="SuccessMsg" className="login-popup" onSubmit={props.onClick}>
                <AiOutlineCheckCircle/>
                <h1>{props.t("reservation successful")}</h1>
                <p>{props.message}</p>
                    {
                        <ul>
                            <li>{props.t("name")}<span>{props.alert.data.student_name}</span></li>
                            <li>{props.t("email")}<span>{props.alert.data.student_mail}</span></li>
                            <li>{props.t("mobile")}<span>{props.alert.data.student_mobile}</span></li>
                            <li>{props.t("booking location")}<span>{props.alert.data.booking_location}</span></li>
                            <li>{props.t("booking date")}<span>{props.alert.data.booking_date}</span></li>
                            <li>{props.t("price")}<span>{props.alert.data.price}</span></li>
                            <li>{props.t("note")}<span>{props.alert.data.booking_note}</span></li>
                            <hr/>
                            <li>{props.t("teacher")}<span>{props.alert.teacher.name}</span></li>
                            <li>{props.t("email")}<span>{props.alert.teacher.email}</span></li>
                            <li>{props.t("mobile")}<span>{props.alert.teacher.mobile}</span></li>
                            <li>{props.t("note")}<span>{props.alert.booking_note}</span></li>
                        </ul>

                    }
                <button>{props.t("continue")}</button>
            </form>      
        </div>  
)
}


export default ReservationSuccess;