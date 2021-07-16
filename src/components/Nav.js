import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import {AiOutlineHome} from 'react-icons/ai';
import {BsPencilSquare} from 'react-icons/bs';
import {IoPeopleOutline, IoLanguageOutline} from 'react-icons/io5'
import {BiCalendarPlus} from 'react-icons/bi'
import {GiCartwheel} from 'react-icons/gi'
import {FaRegUserCircle} from 'react-icons/fa'

import '../styles/Nav.scss'
import LoginPopup from './LoginPopup';
import logo from "../images/logo.png";

function Nav () {
    const [isOpenLogin, setIsOpenLogin] = useState(false)
    const [isEng, setIsEng] = useState(false)
    const [isDropDown, setIsDropDown] = useState(false)

    const clickLoginBtn = (e) => setIsOpenLogin(!isOpenLogin)

    const clickOverlay = (e) => setIsOpenLogin(false)

    const clickLan = () => setIsEng(!isEng)

    const clickHamburger = () => setIsDropDown(!isDropDown)
    const closeDropDown = () => setIsDropDown(false)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
    
    // const url ="http://testapp.net/api/teacher-showall";
    const url=" https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-5740FC70-095E-4152-B9D0-9F8CD9EEFCC2"

    fetch(url,{
        // method: 'GET', // or 'PUT'
        mode: 'cors'
        // headers: {
        //   'Content-Type': 'application/json',
        // },
    })
    .then(res => res.json())
    .then( data => console.log(data))
    .catch( err => console.log(err))

    return(
        <>
            <nav>
                <section className="logo-div">
                    {
                        !isDropDown  && <><img src={logo} alt="logo"/>學開車</>
                    }
                    
                </section>
                {!isDropDown && <button className="hamburger" onClick={clickHamburger}>
                            <span></span>
                            <span></span>
                            <span></span>
                </button>  }
                
                <section className="menu" style={{display: isDropDown&& "unset"}}>
                    <div className="navlink-div">
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
                    </div>    
                    <div className="login-div">
                        <div onClick={clickLoginBtn}><FaRegUserCircle />登入 / 註冊</div>
                        <div onClick={clickLan}><IoLanguageOutline/>{isEng ? "Eng" : "文"}</div>
                    </div>   
                    {/* <button className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                    </button>                  */}
                    {isDropDown && <button className="close" onClick={closeDropDown}></button>}
                    
                </section>
            </nav>        
            {
                    isOpenLogin && 
                    <LoginPopup 
                        clickOverlay={clickOverlay} 
                        onSubmit={onSubmit}
                    />
                }
        </>

    )
}

export default Nav;