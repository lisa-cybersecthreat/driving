import { useRef } from 'react';

function RegisterPopup(props) {
    const formRef=useRef()

    const clickSbmitBtn = e => {
        var numberPattern = /\d+/g;
        var formData = new FormData(formRef.current)
        var obj={}
        formData.forEach((value, key)=>obj[key]=value)
        props.setInputData({...obj, mobile: obj.mobile.match(numberPattern).join().replaceAll(",", "")})
    }

    return (
        <div className="login-popup">
            <div className="overlay"></div>
            <form onSubmit={props.onSubmit} ref={formRef} >
                <button className="close" onClick={props.clickOverlay}></button>
                <p>{props.t("register")}</p>
                {/* <p>{props.t("popup_desc")}</p> */}
                {/* <input defaultValue="" type="text" name="id" placeholder="id" required/> */}
                {/* <input defaultValue="" type="text" name="name" value={props.registData.name} placeholder={props.t("name")} onChange={props.onChange} />
                <input defaultValue="" type="email" name="email" value={props.registData.email} placeholder="email" onChange={props.onChange} />
                <input defaultValue="" type="tel" name="mobile" value={props.registData.mobile} placeholder={props.t("mobile_number")}  required pattern="^[0-9-+\s()]*$"/>
                <label>role:
                    <select defaultValue="student" name="role" id="role"  >
                        <option value="student">student</option>
                        <option value="teacher">teacher</option>
                    </select>
                </label>
                <input defaultValue="" type="password" name="password" placeholder="password"  required autoComplete="off" />
                <input defaultValue="" type="password" name="password_confirm" placeholder="confirm password"  required autoComplete="off" /> */}
                <input defaultValue="" type="text" name="name" placeholder={props.t("name")}  required/>
                <input defaultValue="" type="email" name="email" placeholder="email"  required/>
                <input defaultValue="" type="tel" name="mobile" placeholder={props.t("mobile_number")}  required pattern="^[0-9-+\s()]*$" />
                {/* <label>role:
                    <select defaultValue="student" name="role" id="role"  >
                        <option value="student">student</option>
                        <option value="teacher">teacher</option>
                    </select>
                </label> */}
                <div className="custom-radio-div">
                    <input id="student" type="radio" name="role" value="student" defaultChecked/>
                    <label htmlFor="student">student</label>
                    
                    <input id="teacher" type="radio" name="role" value="teacher"/>
                    <label htmlFor="teacher">teacher</label>                      
                </div>
                  

                <input defaultValue="" type="password" name="password" placeholder={props.t("password")}  required autoComplete="off" />
                <input defaultValue="" type="password" name="password_confirm" placeholder={props.t("confirm password")}  required autoComplete="off" />
                <input type="submit" value={props.t("next")} onClick={clickSbmitBtn}/>
                {/* <p>{props.t("no_mobile")}<a href="#application" onClick={props.clickOverlay}>{props.t("contact_with_us")} {">>"}</a></p> */}
                <p style={{color: props.alert.toLowerCase().indexOf("success")!==-1 ? "var(-green}" : "var(--red)"}}>{props.alert}</p>   
            </form>            
        </div>        
    )
}


export default RegisterPopup;