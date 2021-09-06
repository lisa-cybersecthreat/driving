import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

import how_many_classes from "../images/how_many_classes.jpg";
import where_location from "../images/where_location.jpg";
import when_upcoming_exame from "../images/when_upcoming_exame.jpg";
import logo from "../images/logo.png";
import message from "../images/message.png";
import how_much_tuition from "../images/how_much_tuition.jpg";
import motc from "../images/motc.png";

import {GiMoneyStack, GiTurban} from "react-icons/gi"
import {
    BiCalendarCheck, 
    BiLocationPlus
} from "react-icons/bi";
import {AiOutlineSchedule, AiOutlineCar} from "react-icons/ai";
import {RiUserSearchLine} from "react-icons/ri"
import {FaRegLightbulb} from "react-icons/fa"


import SimpleCard from "./home/simpleCard";
import "../styles/MustKnow.scss"
import MustKnowCard from "./home/MustKnowCard";

function MustKnow () {
    const { t, i18n } = useTranslation()

    return(
        <main id="MustKnow">
            <section className="qna_cars_div_4">
                <SimpleCard text={t("eligibility_exam.text")} img_src={how_much_tuition} icon={<GiMoneyStack/>} src="#eligibility_exam"/>
                <SimpleCard text={t("physical_exam_instuct")} img_src={when_upcoming_exame} icon={<BiCalendarCheck/>} src="#mustknow#physical_exam_instruction" />
                <SimpleCard text={t("note_exam")} img_src={where_location} icon={<AiOutlineCar/>} />
                <SimpleCard text={t("hot_qna")} img_src={how_many_classes} icon={<AiOutlineSchedule/>} src="#mustknow#hot_qna" />
            </section>
            <section className="mustknow-detail-div">
                <MustKnowCard id="eligibility_exam" tt={t("eligibility_exam", {returnObjects: true})} svg={<RiUserSearchLine/>}/>
                <MustKnowCard id="physical_exam_instruction" tt={t("physical_exam_instruction", {returnObjects: true})} svg={<FaRegLightbulb/>}/>
            </section>
            <section className="link-section">
                <img src={motc} alt="motc" />
                <a href="https://www.thb.gov.tw/catalog?node=9ea3538d-e302-4c8c-a2f9-038ad2caf714" target="_blank" rel="noreferrer">{t("online_test")}</a>  
                <a href="https://www.mvdis.gov.tw/m3-simulator-drv/" target="_blank" rel="noreferrer">{t("writing_testing")}</a>
            </section>
            <section id="hot_qna" className="qna-section">
                <h1>{t("hot_qna")}</h1>
                <p>{t("qna.q1.text")}</p>
                <p>{t("qna.q2.text")}</p>
                <p>{t("qna.q3.text")}</p>
                <p>{t("qna.q4.text")}</p>
                <p>{t("qna.q5.text")}</p>
                <p>{t("qna.q6.text")}</p>
                <p>{t("qna.q7.text")}</p>
                <p>{t("qna.q8.text")}</p>
                <p>{t("qna.q9.text")}</p>
            </section>
        </main>
    )
}

export default MustKnow;