import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import dashboard from "../images/dashboard.jpg"
import '../styles/Coach.scss'

import {FiSearch} from "react-icons/fi"
import CoachCard from './coach/CoachCard';

function Coach () {
    const { t, i18n } = useTranslation();

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
                <CoachCard/>
            </section>
        </main>
    )
}

export default Coach;
