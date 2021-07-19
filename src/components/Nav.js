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
import jsonlang from "../lang.json";

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
    
    // // const url ="http://testapp.net/api/teacher-showall";
    // const url=" https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-5740FC70-095E-4152-B9D0-9F8CD9EEFCC2"
    // fetch(url,{
    //     mode: 'cors'
    // })
    // .then(res => res.json())
    // .then( data => console.log(data))
    // .catch( err => console.log(err))

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
                
                <section className="menu" style={{display: isDropDown&& "flex"}}>
                    <div className="navlink-div">
                        <NavLink exact to="/" activeClassName="active-link">
                            <AiOutlineHome/>{isEng? "home" : "首頁"}
                        </NavLink> 
                        <NavLink exact to="/application" activeClassName="active-link">
                                <BsPencilSquare />{isEng? "Apply for test" : "新手報名"}
                        </NavLink>
                        <NavLink exact to="/coach" activeClassName="active-link">
                            <IoPeopleOutline/>{isEng? "Find an instructor" : "教練"}
                        </NavLink>
                        <NavLink exact to="/retake" activeClassName="active-link" >
                            <BiCalendarPlus/>{isEng? "re-take lessons" : "重考速成班"}
                        </NavLink>
                        <NavLink exact to="/course" activeClassName="active-link" >
                            <GiCartwheel/>{isEng? "our courses" : "我們的課程"}
                        </NavLink>
                    </div>    
                    <div className="login-div">
                        <div onClick={clickLoginBtn}><FaRegUserCircle />{isEng? "login/register" :"登入 / 註冊"}</div>
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
                        lan={isEng? "en" : "zh"}
                        clickOverlay={clickOverlay} 
                        onSubmit={onSubmit}
                    />
                }
        </>

    )
}

export default Nav;