import React, { useContext, useEffect, useRef, useState } from 'react';
import {useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import dashboard from "../images/dashboard.jpg"
import '../styles/Coach.scss'

import {FiSearch} from "react-icons/fi";
import {FcBusinessman} from "react-icons/fc";
import { AiFillCheckCircle } from "react-icons/ai";
import CoachCard from './coach/CoachCard';
import { InitContext } from '../contexts/InitContext';
import { DataContext } from '../contexts/dataContext';
import SuccessMsg from './SuccessMsg';
import ReservationSuccess from './coach/ReservationSuccess';

function Instructor (props) {
    const { t, i18n } = useTranslation();
    const { 
        me, setMe,
        teachers, setTeachers,
        isLogin, setIsLogin,
        isRegister, setIsRegister,
        isChangePW, setIsChangePW,
        isDropDown, setIsDropDown
    } = useContext(DataContext)
    const {
        apiTeacherSubmit,
        apiExamSubmit,
    } = useContext(InitContext)
    const [searchInputValue, setSearchInputValue] = useState("")
    const [alert, setAlert] = useState(null)

    const changeInput = e => setSearchInputValue(e.target.value)

    const onSubmit = e => e.preventDefault()

    const clickSuccssBtn = () => setAlert(null)

    return(
        <main id="Coach">
            <div className="img-wrapper">
                <img src={dashboard} alt="" />
            </div>
            <section className="search-bar-div">
                <form action="/action_page.php" onSubmit={onSubmit}>
                    <input type="text" placeholder={`${t("search_coach")}...`} name="search" onChange={changeInput} />
                    <input type="submit" value={t("search")}/>
                </form>
                <input className="filter-btn" type="submit" value={t("filter")}/>
            </section>
            {
                searchInputValue.length>0 && <section className="search-index-section">
                    <p>{t("name included")}: <span>{searchInputValue}</span><AiFillCheckCircle style={{fill: "var(--green)"}} /></p>
                </section>
            }
            
            <section className="coach-cards-div">
                {
                    teachers.map(teacher=><CoachCard 
                                            me={me}
                                            teacher={teacher} 
                                            key={uuidv4()} 
                                            setIsLogin={setIsLogin}
                                            apiTeacherSubmit={apiTeacherSubmit}
                                            i18n={i18n}
                                            FcBusinessman={FcBusinessman}
                                            setAlert={setAlert}
                                            display={searchInputValue.length>0 && (teacher.name.toLowerCase().indexOf(searchInputValue.toLowerCase())===-1? "none" : "block")}
                                            t={t} />)
                }
            </section>
            {
                alert!==null && alert.status===200 && <ReservationSuccess t={t} alert={alert} onClick={clickSuccssBtn}/>
            }
        </main>
    )
}

export default Instructor;
