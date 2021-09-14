
import { useRef, useState } from "react";
import cities from "../../assets/cities.json";
import "../../styles/CoachCard.scss";
   
export default function CoachCard (props) {
    const formRef = useRef();
    const [tmr, setTmr] = useState(new Date())
    // const [alert, setAlert] = useState(null)

    const clickTeacher = e => {
        e.preventDefault();

        if(props.me.user!==undefined){
            let sendData = {
                student_id: props.me.user.id,
                teacher_id: props.teacher.id,
                student_name: props.me.user.name,
                student_mail: props.me.user.email,
                student_mobile: props.me.user.mobile,
                booking_location: "",
                booking_date: "",
                booking_note: "",
                price: ""            
            }
    
            var formData = new FormData(formRef.current)
            formData.forEach((value, key)=>sendData[key]=value)
            console.log("sendData")
            console.log(typeof(sendData.booking_note))
            console.log(sendData)

            fetch(props.apiTeacherSubmit, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
                },
                body: JSON.stringify(sendData)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.status!==undefined && data.status===200) props.setAlert({...data, teacher: props.teacher})
            })
            .catch(err => console.error(err))
        } else {
            props.setIsLogin(true)
        }
    }

    return(
        <div id="CoachCard" style={{display: props.display}}>
            <form onSubmit={clickTeacher} ref={formRef}>
                <div className="teacher-info-div">
                    <props.FcBusinessman />
                    <ul>
                        <li className="title">name:<span>{props.teacher.name}</span></li>
                        <li>mobile:<span>{props.teacher.mobile}</span></li>
                        <li>email:<span>{props.teacher.email}</span></li>
                        <li>id:<span>{props.teacher.id}</span></li>                       
                    </ul>  
                    <button className="button" >{props.t("reservation")}</button>                   
                </div>
                <div className="reservation-form">
                    <div className="upper-div">
                        <label>{props.t("choose_location")}
                            <select name="booking_location">
                                {
                                    cities.map((city, i)=>
                                        <option key={`city ${i}`} >{props.i18next==="en" ? city.CityEngName : city.CityName}</option>
                                        )
                                }
                            </select>
                        </label>
                        <label>{props.t("price")}
                            <input name="price" type="number" defaultValue={0} />
                        </label>
                        <label>{props.t("booking date")}
                            <input type="date" name="booking_date" min={new Date(tmr.setDate(tmr.getDate()+1)).toISOString().slice(0, 10)} required />
                        </label>                        
                    </div>                
                    <label>{props.t("remark")}
                        <textarea name="booking_note" rows="5" cols="50" maxLength="2000" defaultValue="..." required />
                    </label>
                </div>         
            </form>
        </div>
    )
}