import React, { useContext, useEffect, useState } from 'react';
import {useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import dashboard from "../images/dashboard.jpg"
import '../styles/Coach.scss'

import {FiSearch} from "react-icons/fi"
import CoachCard from './coach/CoachCard';
import { InitContext } from '../contexts/InitContext';

function Coach () {
    const {apiOrigin} = useContext(InitContext)
    const { t, i18n } = useTranslation();
    const [teachers, setTeachers] = useState([])

    // useEffect(()=>{
    //     fetch(`${apiOrigin}/api/teachers`)
    //     .then(res=>{
    //         console.log(res)
    //         return res.json()
    //     })
    //     .then(data=>{
    //         console.log(data)
    //         setTeachers([...teachers, data])
    //     })
    //     .catch(err=>console.error(err))
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return(
        <main id="Coach">
            <div className="img-wrapper">
                <img src={dashboard} alt="" />
            </div>
            <section className="search-bar-div">
                <form action="/action_page.php">
                    <input type="text" placeholder={`${t("search_coach")}...`} name="search" />
                    <input type="submit" value={t("search")} />
                </form>
                <input className="filter-btn" type="submit" value={t("filter")}/>
            </section>
            <section className="coach-cards-div">
                {
                    teachers.map(teacher=><CoachCard teacher={teacher[0]} key={uuidv4()} />)
                }
                
            </section>
        </main>
    )
}

export default Coach;
