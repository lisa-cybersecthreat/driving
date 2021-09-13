import { useRef } from 'react';
import SuccessMsg from './SuccessMsg';

function RegisterPopup(props) {
    const formRef=useRef()

    const clickSbmitBtn = e => {
        var formData = new FormData(formRef.current)
        var obj={}
        formData.forEach((value, key)=>obj[key]=value)
        props.setInputData(obj)
    }

    return (
        <div id="RegisterPopup" className="login-popup">
            <div className="overlay"></div>
            {
                // props.alert.toLowerCase().indexOf("success")===-1 ?
                    <form onSubmit={props.onSubmit} ref={formRef} >
                        <button className="close" onClick={props.closeAllPopup}></button>
                        <p className="title">{props.t("register")}</p>
                        {/* <p>{props.t("popup_desc")}</p> */}
                        <label>{props.t("name")} 
                            <input defaultValue="" type="text" name="name" required/>
                        </label>
                        <label>email
                            <input defaultValue="" type="email" name="email"  required/>
                        </label>
                        <label>{props.t("mobile_number")}
                            <input defaultValue="" type="tel" name="mobile"  required pattern="^[0-9-+\s()]*$" />
                        </label>
                        {/* <label>{props.t("i am a")}
                            <select name="role" defaultValue="student">
                                <option value="student">{props.t("student")}</option>
                                <option value="teacher">{props.t("teacher")}</option>                            
                            </select>
                        </label> */}
                        {/* <div className="custom-radio-div">
                            <input id="student" type="radio" name="role" value="student" defaultChecked/>
                            <label htmlFor="student">{props.t("student")}</label>
                            <input id="teacher" type="radio" name="role" value="teacher"/>
                            <label htmlFor="teacher">{props.t("teacher")}</label>                      
                        </div> */}
                        <label>{props.t("password")}
                            <input defaultValue="" type="password" name="password"  required autoComplete="off" />
                        </label>
                        <label>{props.t("confirm password")}
                            <input defaultValue="" type="password" name="password_confirmation" required autoComplete="off" />
                        </label>
                        <input type="submit" value={props.t("next")} onClick={clickSbmitBtn}/>
                        {/* <p>{props.t("no_mobile")}<a href="#application" onClick={props.closeAllPopup}>{props.t("contact_with_us")} {">>"}</a></p> */}
                        <div className="alert-div">
                            {
                                (props.alert!==null && props.alert.message===undefined) && Object.values(props.alert).map((value, i)=>
                                    value.map(elm=><p style={{color: "var(--red)"}}><props.AiFillExclamationCircle/>{props.t(`error message.${elm.toLowerCase().replaceAll(".", "")}`)}</p>)
                                )
                            }
                        </div>
                    </form>                 
                    // :<SuccessMsg
                    //     t={props.t}
                    //     message={props.t("regist success")}
                    //     onClick={props.fetchLogin}
                    // />                
                    }


        </div>        
    )
}


export default RegisterPopup;