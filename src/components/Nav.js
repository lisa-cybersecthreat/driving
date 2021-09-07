import React, { useContext, useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import { useTranslation } from 'react-i18next';

import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai';
import {BsPencilSquare} from 'react-icons/bs';
import {IoPeopleOutline, IoLanguageOutline} from 'react-icons/io5'
import {BiCalendarPlus, BiCheck} from 'react-icons/bi'
import {GiCartwheel} from 'react-icons/gi'
import {FaJava, FaRegUserCircle} from 'react-icons/fa'

import '../styles/Nav.scss'
import '../styles/form.scss';
import LoginPopup from './LoginPopup';
import logo from "../images/logo.png";

import { InitContext } from '../contexts/InitContext';
import RegisterPopup from './RegisterPopup';
import ChangePWPopup from './ChangePWPopup';

function Nav (props) {
    const {
        apiRegister,
        apiLogin,
        apiLogout,
        apiMe,
        isEng, setIsEng 
    } = useContext(InitContext)
    const [isLogin, setIsLogin] = useState(false)
    const [isRegister, setIsRegister] = useState(false)
    const [isChangePW, setIsChangePW] = useState(false);
    // const [isEng, setIsEng] = useState(false)
    const [isDropDown, setIsDropDown] = useState(false)
    const [inputData, setInputData] = useState({
        // email: "",
        // password: "",
    })
    const [alert, setAlert] = useState("")

    const { t, i18n } = useTranslation();

    const clickHamburger = () => setIsDropDown(!isDropDown)
    const closeDropDown = () => setIsDropDown(false)

    const clickLoginBtn = (elm, setElm) => {
        closeDropDown()
        setElm(!elm)
    }


    const clickOverlay = (e) => {
        setIsLogin(false)
        setIsRegister(false)
        setIsChangePW(false)
    }

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
        setInputData({...inputData, [e.target.name] : e.target.value})  
    }

    const fetchLogin = toggle => {
        console.log(inputData)
        fetch(apiLogin, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(inputData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            sessionStorage.setItem("access_token", data.access_token)
            toggle(false)
        })
        .catch(err => console.error(err))        
    }


    const FetchUser = e => {
        console.log("fetch user")
        fetch("http://testapp.net/api/auth/me", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
            }, 
            body: JSON.stringify({
                // id: `Bearer ${sessionStorage.getItem("access_token")}`
                id: "bb"
                // "name": "lisa.wang",
                // "id": "hello@cybersecthreat.com",
                // "mobile": "(0908)1175-99",
                // "role": "student",
                // "password": "123",
                // "password_confirm": "123"            
            })
        })
        .then(res=>{
            console.log(res)
            return res.json()
        })
        .then(data=> {
            console.log(data)
        })
        .catch(err=> console.error(err))
    }

    const submitRegister = async(e) => {
        e.preventDefault();

        if(inputData.password!==inputData.password_confirm) {
            setAlert("password not match")
            return
        } else {
            setAlert("")
        }

        console.log(inputData)
        // fetch(apiRegister, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }, 
        //     body: JSON.stringify(inputData)
        // })
        // .then(res=>res.text())
        // .then(data=> {
        //     console.log(data)
        //     if(data.toLowerCase().indexOf("mobile_unique")!==-1) {
        //         setInputData({...inputData, mobile: ""})
        //         setAlert(`${t("duplicate mobile")} ${inputData.mobile}`)
        //     }
        //     if(data.toLowerCase().indexOf("email_unique")!==-1) {
        //         setInputData({...inputData, email: ""})
        //         setAlert(`${t("duplicate email")} ${inputData.email}`)
        //     }
        //     if(data.toLowerCase().indexOf("success")!==-1) {
        //         setAlert("success")
        //         setTimeout(()=> {
        //             fetchLogin(setIsRegister)
        //         }, 500)
        //     }
        // })
        // .catch(err => console.error(err))
    }
    

    const submitLogin = e => {
        e.preventDefault();
        console.log(inputData);
        fetchLogin(setIsLogin)
    }

    const clickLogoutBtn = e => {  
        sessionStorage.removeItem("access_token")
        window.location.reload()
        // console.log(inputData)
        // fetch(apiLogout, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(res=>res.text())
        // .then(data=>{
        //     console.log(data)
        //     sessionStorage.setItem("access_token", data.access_token)
        // })
        // .catch(err => console.error(err))     
    }

    return(
        <>
            <nav>
                <section className="logo-div">
                <button onClick={FetchUser}>fetch test</button>
                    { !isDropDown  && <><img src={logo} alt="logo"/>學開車</> }
                </section>
                {!isDropDown && <AiOutlineMenu onClick={clickHamburger} className="hamburger" />}
    
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
                        {/* <NavLink exact to="/retake" activeClassName="active-link" onClick={closeDropDown} >
                            <BiCalendarPlus/>{t("retake_lessons")}
                        </NavLink> */}
                        <NavLink exact to="/course" activeClassName="active-link" onClick={closeDropDown} >
                            <GiCartwheel/>{t("our_courses")}
                        </NavLink>
                    </div>    
                    <div className="login-div">
                        <div>
                            <FaRegUserCircle />

                            {
                                sessionStorage.getItem("access_token") === null || sessionStorage.getItem("access_token") === undefined ?
                                <><p onClick={()=>clickLoginBtn(isLogin, setIsLogin)}>{t("login")}</p>
                                <b style={{margin: "0 .5em"}}>/</b>
                                <p onClick={()=>clickLoginBtn(isRegister, setIsRegister)}>{t("register")}</p>  </>
                                : <p onClick={()=>clickLogoutBtn(isLogin, setIsLogin)}>{t("logout")}</p>
                            }
                        </div>
                        <div onClick={clickLan}><IoLanguageOutline/>{isEng ? "Eng" : "文"}</div>
                    </div>   
                    {isDropDown && <button className="close" onClick={closeDropDown} ></button>}    
                </section>
            </nav>        
            {
                    isRegister && 
                    <RegisterPopup
                        t={t}
                        clickOverlay={clickOverlay} 
                        // inputData={inputData}
                        // onChange={changeInput}
                        onSubmit={submitRegister}
                        alert={alert}
                        setInputData={setInputData}
                    />
                }
                {
                    isLogin && 
                    <LoginPopup
                        t={t}
                        clickOverlay={clickOverlay} 
                        // inputData={inputData}
                        onChange={changeInput}
                        onSubmit={submitLogin}
                        alert={alert}
                        setIsChangePW={setIsChangePW}
                    />
                }
                {
                    isChangePW && 
                    <ChangePWPopup
                        t={t}
                        clickOverlay={clickOverlay}
                        alert={alert}
                    />
                }
        </>

    )
}

export default Nav;