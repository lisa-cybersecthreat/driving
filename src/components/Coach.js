import React, { useContext, useEffect, useState } from 'react';
import {useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import dashboard from "../images/dashboard.jpg"
import '../styles/Coach.scss'

import {FiSearch} from "react-icons/fi"
import CoachCard from './coach/CoachCard';
import { InitContext } from '../contexts/InitContext';
import { DataContext } from '../contexts/dataContext';

function Coach () {
    const { t, i18n } = useTranslation();
    const { teachers, setTeachers} = useContext(DataContext)

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
                    teachers.map(teacher=><CoachCard teacher={teacher} key={uuidv4()} />)
                    // teachers.map(teacher=>console.log(teacher.data))
                }
            </section>
        </main>
    )
}

export default Coach;
