import React, { useContext, useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import { useTranslation } from 'react-i18next';

import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai';
import {BsPencilSquare} from 'react-icons/bs';
import {IoPeopleOutline, IoLanguageOutline} from 'react-icons/io5'
import {BiCalendarPlus, BiMenu} from 'react-icons/bi'
import {GiCartwheel} from 'react-icons/gi'
import {FaRegUserCircle} from 'react-icons/fa'

import '../styles/Nav.scss'
import LoginPopup from './LoginPopup';
import logo from "../images/logo.png";

import { InitContext } from '../contexts/InitContext';

function Nav (props) {
    const {
        apiOrigin,
        isEng, setIsEng 
    } = useContext(InitContext)
    const [isOpenLogin, setIsOpenLogin] = useState(false)
    // const [isEng, setIsEng] = useState(false)
    const [isDropDown, setIsDropDown] = useState(false)
    const [registData, setRegistData] = useState({})

    const { t, i18n } = useTranslation();

    const clickHamburger = () => setIsDropDown(!isDropDown)
    const closeDropDown = () => setIsDropDown(false)

    const clickLoginBtn = (e) => {
        closeDropDown()
        setIsOpenLogin(!isOpenLogin)
    }

    const clickOverlay = (e) => setIsOpenLogin(false)

    const clickLan = () => {
        closeDropDown()
        setIsEng(!isEng)
    }

    useEffect(()=>{
        const lng = isEng? "en":"zh"
        i18n.changeLanguage(lng)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEng])

    const changeInput = (e) => {
        setRegistData({...registData, [e.target.name] : e.target.value})  
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        var numberPattern = /\d+/g;  

        if(registData.password_confirm !== registData.password) {
            alert("password not matching")
            // registData.password_confirm.setCustomValidity("Passwords Don't Match")
        } else {
            setRegistData({...registData, "mobile": registData.mobile.match(numberPattern).join("")})  
            var url=`${apiOrigin}/api/register`;
            const data= {}          
                fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify(data)
                })
                .then(res=>res.json())
                .then(data=> {
                    console.log(data)
                })
                .catch(err => console.error(err))
            }
        }

        
    
    

    return(
        <>
            <nav>
                
                <section className="logo-div">
                <button onClick={onSubmit}>fetch test</button>
                    { !isDropDown  && <><img src={logo} alt="logo"/>學開車</> }
                </section>
                {!isDropDown && <AiOutlineMenu onClick={clickHamburger} className="hamburger" />
                    // <button className="hamburger" onClick={clickHamburger}>
                    //         <span></span><span></span><span></span>
                    // </button>  
                }
                
                <section className="menu" style={{display: isDropDown&& "flex"}}>
                    <div className="navlink-div">
                        <NavLink exact to="/" activeClassName="active-link" onClick={closeDropDown}>
                            <AiOutlineHome/>{t("home")}
                        </NavLink> 
                        <NavLink exact to="/application" activeClassName="active-link" onClick={closeDropDown}>
                                <BsPencilSquare />{t("new_application")}
                        </NavLink>
                        <NavLink exact to="/coach" activeClassName="active-link" onClick={closeDropDown}>
                            <IoPeopleOutline/>{t("coach")}
                        </NavLink>
                        <NavLink exact to="/mustknow" activeClassName="active-link" onClick={closeDropDown} >
                            <BiCalendarPlus/>{t("mustknow")}
                        </NavLink>
                        <NavLink exact to="/retake" activeClassName="active-link" onClick={closeDropDown} >
                            <BiCalendarPlus/>{t("retake_lessons")}
                        </NavLink>
                        <NavLink exact to="/course" activeClassName="active-link" onClick={closeDropDown} >
                            <GiCartwheel/>{t("our_courses")}
                        </NavLink>
                    </div>    
                    <div className="login-div">
                        <div onClick={clickLoginBtn}><FaRegUserCircle />{t("login_register")}</div>
                        <div onClick={clickLan}><IoLanguageOutline/>{isEng ? "Eng" : "文"}</div>
                    </div>   
                    {isDropDown && <button className="close" onClick={closeDropDown} ></button>}    
                </section>
            </nav>        
            {
                    isOpenLogin && 
                    <LoginPopup 
                        t={t}
                        // lan={isEng? "en" : "zh"}
                        clickOverlay={clickOverlay} 
                        registData={registData}
                        onChange={changeInput}
                        onSubmit={onSubmit}
                    />
                }
        </>

    )
}

export default Nav;