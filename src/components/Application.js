import React, { useEffect } from 'react';
import {useTranslation} from "react-i18next"
import { v4 as uuidv4 } from 'uuid';
import VariousCarsSec from './home/VariousCarsSec';

import "../styles/Application.scss";
import cities from "../assets/cities.json"

function Application (props) {
    const { t, i18n } = useTranslation();

    const onChange=(e)=>{

    }

    const onSubmit=(e)=>{
        e.preventDefault()
    }

    function clickCarCard(e) {
        console.log(e)
        console.log(this)
    }

    return(
        <main id="Application">
            <form>
                <p>{t("application.take_a_minute_for_feedback")}</p>
                <label htmlFor="tel">{t("mobile_number")}</label>
                    <input id="tel" type="tel" name="mobile" onChange={onChange} required pattern="^[0-9-+\s()]*$"/>
                
                <label htmlFor="name">{t("name")}</label>
                    <input id="name" type="text" name="name" onChange={onChange} />
                
                <label htmlFor="email">email</label>
                    <input id="email" type="email" id="email" name="email" required onChange={onChange} />
                
                <label htmlFor="cartype">{t("choose_cartype")}</label>
                <input id="cartype" type="text" name="cartype" style={{display: "none"}}/> 
                <VariousCarsSec t={t} onClick={clickCarCard}/>
                <label htmlFor="location"> {t("choose_location")}</label>
                    <select id="location" name="location">
                        {
                            cities.map(c=> <option key={uuidv4()} value={i18n.language==="en"? c.CityEngName : c.CityName}>{i18n.language ==="en"? c.CityEngName : c.CityName}</option>)
                        }                    
                    </select>
                <label htmlFor="remark">{t("remark")}</label>
                    <textarea id="remark"></textarea>
                <input type="submit" value={t("next")} onSubmit={onSubmit}/>
                
                {/* <p>{t("no_mobile")}<a href="#">{t("contact_with_us")} {">>"}</a></p> */}
            </form> 
        </main>
    )
}

export default Application;