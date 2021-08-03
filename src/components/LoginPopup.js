import { useEffect, useState } from 'react'
import '../styles/form.scss'
function LoginPopup(props) {

    // var url = "http://www.testapp.net/api/home/1";
    // // var url = "http://www.testapp.net/login";
    // // var url = "https://sjkcboibmh.execute-api.us-east-1.amazonaws.com/UserAuthentication"
    // useEffect(() => {
    //     fetch(url, {
    //         // method: "POST",
    //         // headers: {
    //         //     'Content-Type': 'application/json'
    //         //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //         //   },
    //         // body: JSON.stringify({
    //         //     "userid": "123" ,
    //         //     "password" :"123"
    //         // })
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(err => console.log(err))
    // }, [])


    return (
        <div className="login-popup">
            <div className="overlay" onClick={props.clickOverlay}></div>
            {/* <form onSubmit={props.onSubmit}  action="/action_page.php"> */}
            <form onSubmit={props.onSubmit}  encType="multipart/form-data">
                <button className="close" onClick={props.clickOverlay}></button>
                <p>{props.t("login_register")}</p>
                <p>{props.t("popup_desc")}</p>
                <input type="text" name="name" placeholder={props.t("name")} onChange={props.onChange} />
                <input type="email" id="email" name="email" placeholder="email" required onChange={props.onChange} />
                <label htmlFor="mobile" />
                <input id="mobile" type="tel" name="mobile" placeholder={props.t("mobile_number")} onChange={props.onChange} required pattern="^[0-9-+\s()]*$"/>
                {/* <label>role:
                    <select name="role" id="role" onChange={props.onChange}>
                        <option value="student">student</option>
                        <option value="teacher">teacher</option>
                    </select>
                </label>
                <input type="password" name="password" placeholder="password" onChange={props.onChange} required autoComplete="off" />
                <input type="password" name="password_confirm" placeholder="confirm password" onChange={props.onChange} required autoComplete="off" /> */}
                <input type="submit" value={props.t("next")} onSubmit={props.onSubmit}/>
                <p>{props.t("no_mobile")}<a href="#">{props.t("contact_with_us")} {">>"}</a></p>
            </form>                       
        </div>        
)
}


export default LoginPopup;