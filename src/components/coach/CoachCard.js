
import { useRef } from "react";
import cities from "../../assets/cities.json";
import "../../styles/CoachCard.scss";
   
export default function CoachCard (props) {
    const formRef = useRef()

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
                booking_date: new Date().toISOString(),
                booking_note: "",
                price: ""            
            }
    
            var formData = new FormData(formRef.current)
            formData.forEach((value, key)=>sendData[key]=value)
            console.log("sendData")
            console.log(sendData)

            fetch(props.apibookTeacher, {
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
                </div>
                <div>                
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
                        <input name="price" type="number" />
                    </label>
                    <label>{props.t("remark")}
                        <textarea name="booking_note" rows="5" cols="50" maxLength="2000"></textarea>
                    </label>
                </div>

                <button className="button" >{props.t("reservation")}</button>           
            </form>
        </div>
    )
}