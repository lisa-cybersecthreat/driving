import '../styles/form.scss';

function LoginPopup(props) {

    return (
        <div className="login-popup">
            <div className="overlay" onClick={props.clickOverlay}></div>
            {/* <form onSubmit={props.onSubmit}  action="/action_page.php"> */}
            <form onSubmit={props.onSubmit}  encType="multipart/form-data">
                <button className="close" onClick={props.clickOverlay}></button>
                <p>{props.t("login")}</p>
                <p>{props.t("popup_desc")}</p>
                <input type="email" name="email" placeholder="email" onChange={props.onChange} required />
                <input type="password" name="password" placeholder="password" onChange={props.onChange} required autoComplete="off" />
                {/* <input type="email" id="email" name="email" value={props.registData.email} placeholder="email" required onChange={props.onChange} /> */}
                {/* <input type="password" name="password" placeholder="password" onChange={props.onChange} required autoComplete="off" /> */}
                <input type="submit" value={props.t("next")} onSubmit={props.onSubmit}/>
                <p>{props.t("no_mobile")}<a href="#application" onClick={props.clickOverlay}>{props.t("contact_with_us")} {">>"}</a></p>
                <p style={{color: props.alert.toLowerCase().indexOf("success")!==-1 ? "var(-green}" : "var(--red)"}}>{props.alert}</p>   
            </form>            
        </div>        
)
}


export default LoginPopup;