import { useEffect, useState } from 'react'
import '../styles/LoginPopup.scss'
function LoginPopup(props) {
    const [lang, setLang] = useState({
        title: {
            en: "login/register",
            zh: "登入 / 註冊"
        },
        desc: {
            en: "In order to contact you in time and protect the security of account information, the system will send a verification code to confirm that the phone number is correct",
            zh: "為使客服能夠及時與你聯絡，同時保護帳戶資料安全，系統將發送驗證碼以確認電話號碼正確"
        },
        phone: {
            en: "mobile number",
            zh: "手機號碼"
        },
        submit: {
            en: "next",
            zh: "下一步"
        },
        p: {
            en: "do not have moible number?",
            zh: "沒有手機號碼？"
        },
        link: {
            en: "contact with us",
            zh: "與我們連絡"
        }
    })


    // useEffect(() => {
    //     const lang_en={
    //         "title": "login/register",
    //         "desc" : "In order to contact you in time and protect the security of account information, the system will send a verification code to confirm that the phone number is correct"   
    //     }
    //     const lang_zh={
    //         "title": "登入 / 註冊",
    //         "desc" : "為使客服能夠及時與你聯絡，同時保護帳戶資料安全，系統將發送驗證碼以確認電話號碼正確"
    //     }  
    //     setLang(props.isEng===true ? lang_en : lang_zh)

    // },[props.isEng])
    
    

    return (
        <div className="login-popup">
            <div className="overlay" onClick={props.clickOverlay}></div>
            <form onSubmit={props.onSubmit}>
                <button className="close" onClick={props.clickOverlay}></button>
                <p className="title">{props.lan==="en" ? lang.title.en : lang.title.zh }</p>
                <p>{props.lan==="en" ? lang.desc.en : lang.desc.zh }</p>
                <input type="tel" id="phone" name="phone" placeholder={props.lan==="en" ? lang.phone.en : lang.phone.zh } pattern="[0-9]{10}" required></input>
                <input type="submit" value={props.lan==="en" ? lang.title.en : lang.title.zh } />
                <p>{props.lan==="en" ? lang.p.en : lang.p.zh }<a href="#">{props.lan==="en" ? lang.link.en : lang.link.zh } {">>"}</a></p>
            </form>                       
        </div>        
)
}


export default LoginPopup;