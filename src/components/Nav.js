import React, { useContext, useEffect, useRef, useState } from 'react';
import {NavLink, withRouter} from "react-router-dom";
import { useTranslation } from 'react-i18next';

import {AiOutlineHome, AiOutlineMenu, AiOutlineLogout, AiOutlineExclamationCircle, AiFillExclamationCircle} from 'react-icons/ai';
import {BsPencilSquare} from 'react-icons/bs';
import {IoPeopleOutline, IoLanguageOutline} from 'react-icons/io5'
import {BiCalendarPlus, BiCheck} from 'react-icons/bi'
import {GiCartwheel} from 'react-icons/gi'
import {FaJava, FaRegUserCircle, FaAddressBook, FaUserCog} from 'react-icons/fa'

import '../styles/Nav.scss'
import '../styles/form.scss';
import LoginPopup from './LoginPopup';
import logo from "../images/logo.png";

import { InitContext } from '../contexts/InitContext';
import RegisterPopup from './RegisterPopup';
import ChangePWPopup from './ChangePWPopup';
import SuccessMsg from './SuccessMsg';
import { DataContext } from '../contexts/dataContext';

function Nav (props) {
    const {
        apiRegister,
        apiLogin,
        apiLogout,
        apiAuthRefresh,
        apiMe,
        apiTeachers,
        isEng, setIsEng 
    } = useContext(InitContext)
    const {
        me, setMe,
        teachers, setTeachers,
        isLogin, setIsLogin,
        isRegister, setIsRegister,
        isChangePW, setIsChangePW,
        isDropDown, setIsDropDown
    } = useContext(DataContext)
    // const [isLogin, setIsLogin] = useState(false)
    // const [isRegister, setIsRegister] = useState(false)
    // const [isChangePW, setIsChangePW] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false)
    // const [isDropDown, setIsDropDown] = useState(false)
    const [inputData, setInputData] = useState({
        // "name": "zz2",
        // "email": "zz2@zz2.com",
        // "mobile": "090811759922222",
        // "role": "teacher",
        // "password": "Zz222222222",
        // "password_confirmation": "Zz222222222"
    })
    const [alert, setAlert] = useState({})
    const { t, i18n } = useTranslation();

    const clickHamburger = () => setIsDropDown(!isDropDown)
    const closeDropDown = () => setIsDropDown(false)
    const changeInput = (e) => {
        setAlert({})
        setInputData({...inputData, [e.target.name] : e.target.value})  
    }

    const clickLoginBtn = (elm, setElm) => {
        closeDropDown()
        setElm(!elm)
    }

    const closeAllPopup = (e) => {
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

        if(sessionStorage.getItem("access_token")!==null) FetchApiMe()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEng])

    const fetchLogin = () => {
        console.log("fetchLogin")
        console.log(inputData)

        fetch(apiLogin, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(inputData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setAlert(data)
            if(data.access_token!==undefined) {
                sessionStorage.setItem("access_token", data.access_token)
                closeAllPopup();
                FetchApiMe();         
            } 
        })
        .catch(err => console.error(err))      
    }

    const FetchApiMe = () => {
        fetch(apiMe, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.user!==undefined){
                setMe(data)
            } else {
                props.history.push("/");
                setIsLogin(true)
                sessionStorage.removeItem("access_token")
            }
        })
        .catch(err=> console.error(err))
    }

    const submitRegister = async(e) => {
        e.preventDefault();

        var numberPattern = /\d+/g;

        fetch(apiRegister, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({...inputData, mobile: inputData.mobile.match(numberPattern).join().replaceAll(",", "")})
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
            setAlert(data)
            if(data.message!==undefined && data.message.toLowerCase().indexOf("success")!==-1) {
                closeAllPopup()
                setIsSuccess(true)
            }
        })
        .catch(err => console.error(err))
    }

    const submitLogin = e => {
        e.preventDefault();
        console.log(inputData);
        fetchLogin()
    }

    const clickLogoutBtn = async e => { 
        await fetch(apiLogout, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err => console.error(err))  
            sessionStorage.removeItem("access_token")
            // window.location.reload()  
            props.history.push("/") 
            setMe({})
            setIsDropDown(false)
    }


    return(
        <>
            <nav>
                <section className="logo-div">
                    { !isDropDown  && <>
                    <img src={logo} alt="logo"/>學開車
                    {me.user!==undefined && <p>welcome {me.user.name}</p>}
                    </> }
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
                        <NavLink exact to="/coach" activeClassName="active-link" onClick={closeDropDown} >
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
                            {
                                // sessionStorage.getItem("access_token") === null || sessionStorage.getItem("access_token") === undefined ?
                                me.user===undefined ? <>
                                <div onClick={()=>clickLoginBtn(isLogin, setIsLogin)} className="pointer"><FaRegUserCircle />{t("login")}</div>
                                <b style={{margin: "0 .5em"}}>/</b>
                                <div onClick={()=>clickLoginBtn(isRegister, setIsRegister)} className="pointer"><FaAddressBook/>{t("register")}</div>
                                </>
                                : <>
                                <div onClick={()=>clickLogoutBtn(isLogin, setIsLogin)} className="pointer"><AiOutlineLogout/>{t("logout")}</div>
                                <div className="myAccount-div">
                                    <NavLink exact to="myAccount" activeClassName="active-link" onClick={closeDropDown} >
                                        <FaUserCog/>{t("my account")}
                                    </NavLink>                               
                                </div>                                
                                </>
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
                        closeAllPopup={closeAllPopup} 
                        // inputData={inputData}
                        // onChange={changeInput}
                        onSubmit={submitRegister}
                        alert={alert}
                        setInputData={setInputData}
                        // fetchLogin={fetchLogin}
                        AiFillExclamationCircle={AiFillExclamationCircle}
                        setIsSuccess={setIsSuccess}
                    />
                }
                {
                    isLogin && 
                    <LoginPopup
                        t={t}
                        closeAllPopup={closeAllPopup} 
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
                        closeAllPopup={closeAllPopup}
                        alert={alert}
                    />
                }
                {
                    isSuccess && 
                    <SuccessMsg
                        t={t}
                        message={t("regist success")}
                        onClick={fetchLogin}
                    />     
                }
        </>

    )
}

export default withRouter(Nav);