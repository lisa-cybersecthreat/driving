import React, { useState } from 'react';
import {
    NavLink,
} from "react-router-dom";
import {
    AiOutlineHome
} from 'react-icons/ai';
import {
    BsPencilSquare
} from 'react-icons/bs';
import {
    IoPeopleOutline
} from 'react-icons/io5'
import {
    BiCalendarPlus
} from 'react-icons/bi'
import {
    GiCartwheel
} from 'react-icons/gi'

import '../styles/Nav.scss'

function Nav () {
    const [isOpenLogin, setIsOpenLogin] = useState(false)

    const clickLoginBtn = (e) => {
        setIsOpenLogin(!isOpenLogin)
    }

    const clickOverlay = (e) => {
        console.log("overlay")
        // setIsOpenLogin(false)
    }

    fetch('http://127.0.0.1:8000/api/apply-exam/submit')
    .then(res => res.json())
    .then( data => console.log(data))
    .catch( err => console.log(err))

    return(
        <nav>
            <section><div>logo</div></section>
            <section className="navlink-div">
                <NavLink exact to="/" activeClassName="active-link">
                    <AiOutlineHome/>首頁
                </NavLink> 
                <NavLink exact to="/application" activeClassName="active-link">
                        <BsPencilSquare />新手報名
                </NavLink>
                <NavLink exact to="/coach" activeClassName="active-link">
                    <IoPeopleOutline/>教練
                </NavLink>
                <NavLink exact to="/retake" activeClassName="active-link">
                    <BiCalendarPlus/>重考速成班
                </NavLink>
                <NavLink exact to="/course" activeClassName="active-link">
                    <GiCartwheel/>課程
                </NavLink>
            </section>    
            <section className="login-div">
                <div onClick={clickLoginBtn}>登入 / 註冊</div>
                {
                    isOpenLogin && <div className="overlay" onClick={clickOverlay}>
                        <form>
                            <h1>登入 / 註冊</h1>
                            <p>為使客服能夠及時與你聯絡，同時保護學生帳戶資料安全，系統將發送驗證碼以確認電話號碼正確</p>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"></input>
                        </form>                       
                    </div>

                }
                
            </section>
        </nav>
    )
}

export default Nav;