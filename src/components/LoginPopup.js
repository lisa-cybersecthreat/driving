function LoginPopup(props) {

    const onKeyDown = e => e.keyCode===13 && e.preventDefault()
    return (
        <div className="login-popup">
            <div className="overlay"></div>
            <form onSubmit={props.onSubmit}>
                <button className="close" onClick={props.closeAllPopup}></button>
                <p className="title">{props.t("login")}</p>
                {/* <p>{props.t("popup_desc")}</p> */}
                <input type="email" name="email" placeholder="email"  onKeyDown={onKeyDown} onChange={props.onChange} required />
                <input type="password" name="password" placeholder={props.t("password")}  onKeyDown={onKeyDown} onChange={props.onChange} required autoComplete="off" />
                <input type="submit" value={props.t("next")} />
                {/* <p>{props.t("no_mobile")}<a href="#application" onClick={props.closeAllPopup}>{props.t("contact_with_us")} {">>"}</a></p> */}
                {/* <p style={{cursor: "pointer", fontWeight:"900"}}>{props.t("forgot password")}??</p> */}
                {
                    Object.keys(props.alert).length>0 && <p style={{color: props.alert.access_token!==undefined ? "var(--green}" : "var(--red)"}}>
                    {props.alert.access_token!==undefined ? props.t("login successfully") : props.t("email or password inccorect")}
                </p>   
                }

            </form>            
        </div>        
)
}

export default LoginPopup;