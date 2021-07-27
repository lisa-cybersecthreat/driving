import { useState } from "react"

function FooterMenuItem (props) {
    const [isDropDown, setIsDropDown] = useState(false)

    const clickMenuItem = () => setIsDropDown(!isDropDown)

    return(
        <li onClick={clickMenuItem}>
            <div className="menu-item">
                <h3>{props.t("learn_drive_license")}</h3>
                <div className="icon">{isDropDown? "-" : "+"}</div>
            </div>
            <div className={isDropDown? "show" : "dropdown"}>
                <a href="#">{props.t("coach")}</a>
                <a href="#">{props.t("learn_mustknow")}</a>
                <a href="#">{props.t("simulated_test")}</a>                        
            </div>
        </li>
    )
}

export default FooterMenuItem;