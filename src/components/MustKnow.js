import React from "react";
import { useTranslation } from 'react-i18next';

import how_many_classes from "../images/how_many_classes.jpg";
import where_location from "../images/where_location.jpg";
import when_upcoming_exame from "../images/when_upcoming_exame.jpg";
import logo from "../images/logo.png";
import message from "../images/message.png";
import how_much_tuition from "../images/how_much_tuition.jpg";

import {GiMoneyStack, GiTurban} from "react-icons/gi"
import {
    BiCalendarCheck, 
    BiLocationPlus
} from "react-icons/bi";
import {AiOutlineSchedule, AiOutlineCar} from "react-icons/ai";


import SimpleCard from "./home/simpleCard";

function MustKnow () {
    const { t, i18n } = useTranslation()
    return(
        <main id="MustKnow">
            <section className="qna_cars_div_4">
                <SimpleCard text={t("eligibility_register")} img_src={how_much_tuition} icon={<GiMoneyStack/>} />
                <SimpleCard text={t("how_many_classes")} img_src={how_many_classes} icon={<AiOutlineSchedule/>} />
                <SimpleCard text={t("physical_exam_instuct")} img_src={when_upcoming_exame} icon={<BiCalendarCheck/>} />
                <SimpleCard text={t("where_location")} img_src={where_location} icon={<BiLocationPlus/>} />
                <SimpleCard text={t("note_exam")} img_src={where_location} icon={<AiOutlineCar/>} />
            </section>
        </main>
    )
}

export default MustKnow;