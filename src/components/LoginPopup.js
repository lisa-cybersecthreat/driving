function LoginPopup(props) {

    const clickchangePWBtn = () => {
        props.closeAllPopup()
        props.setIsChangePW(true);
    }


    return (
        <div className="login-popup">
            <div className="overlay"></div>
            <form onSubmit={props.onSubmit}>
                <button className="close" onClick={props.closeAllPopup}></button>
                <p className="title">{props.t("login")}</p>
                {/* <p>{props.t("popup_desc")}</p> */}
                <input type="email" name="email" placeholder="email" onChange={props.onChange} required />
                <input type="password" name="password" placeholder={props.t("password")} onChange={props.onChange} required autoComplete="off" />
                <input type="submit" value={props.t("next")} onSubmit={props.onSubmit}/>
                {/* <p>{props.t("no_mobile")}<a href="#application" onClick={props.closeAllPopup}>{props.t("contact_with_us")} {">>"}</a></p> */}
                <p onClick={clickchangePWBtn} style={{cursor: "pointer", fontWeight:"900"}}>{props.t("forgot password")}??</p>
                {/* <p style={{color: props.alert.toLowerCase().indexOf("success")!==-1 ? "var(-green}" : "var(--red)"}}>{props.alert}</p>    */}
            </form>            
        </div>        
)
}


export default LoginPopup;