import '../styles/LoginPopup.scss'
function LoginPopup(props) {
    return (
        <div className="login-popup">
            <div className="overlay" onClick={props.clickOverlay}></div>
            <form onSubmit={props.onSubmit}>
                <button className="close" onClick={props.clickOverlay}></button>
                <p className="title">登入 / 註冊</p>
                <p>為使客服能夠及時與你聯絡，同時保護帳戶資料安全，系統將發送驗證碼以確認電話號碼正確</p>
                <input type="tel" id="phone" name="phone" placeholder="手機號碼" pattern="[0-9]{10}" required></input>
                <input type="submit" value="下一步" />
                <p>沒有手機號碼？<a href="#">與我們連絡 >></a></p>
            </form>                       
        </div>        
)
}


export default LoginPopup;