import React, { useEffect, useRef, useState } from 'react';
import {useTranslation} from "react-i18next"
import { v4 as uuidv4 } from 'uuid';
import VariousCarsSec from './home/VariousCarsSec';

import "../styles/Application.scss";
import cities from "../assets/cities.json"

function Application (props) {
    const { t, i18n } = useTranslation();
    const locationOptionRef = useRef()
    const [ inputVaule, setInputValue ] = useState({})

    const onChange= e =>{
        console.log(locationOptionRef)
        setInputValue({...inputVaule, [e.target.name]: e.target.value})
    }

    const onSubmit=(e)=>{
        e.preventDefault()
    }

    return(
        <main id="Application">
            <form onSubmit={onsubmit}>
                <p>{t("application.take_a_minute_for_feedback")}</p>
                <label htmlFor="name">{t("name")}</label>
                    <input id="name" type="text" name="name" onChange={onChange} />
                <label htmlFor="tel">{t("mobile_number")}</label>
                    <input id="tel" type="tel" name="mobile" onChange={onChange} required pattern="^[0-9-+\s()]*$"/>
                <label htmlFor="email">email</label>
                    <input id="email" type="email" name="email" required onChange={onChange} />
                <label htmlFor="cartype">{t("choose_cartype")}</label>
                <input id="cartype" type="text" name="cartype" style={{display: "none"}}/> 
                <VariousCarsSec t={t}/>
                <label htmlFor="location"> {t("choose_location")}</label>
                    <select id="location" name="location" onChange={onChange} value={inputVaule.location} ref={locationOptionRef}>
                        <option value=""></option>
                        {
                            cities.map((c, i)=> <option key={uuidv4()} value={i18n.language==="en"? c.CityEngName : c.CityName} data-i={i}>{i18n.language==="en"? c.CityEngName : c.CityName}</option>)
                        }                
                    </select>
                    {

inputVaule.location!==undefined && <select>
    {
cities[locationOptionRef.current.selectedIndex].AreaList.map(area=>
<option value={i18n.language==="en" ? area.AreaEngName : area.AreaName}>{area.ZipCode}-{i18n.language==="en" ? area.AreaEngName : area.AreaName}</option>)        
    }
</select>

}    
                <label htmlFor="remark">{t("remark")}</label>
                    <textarea id="remark"></textarea>
                <input type="submit" value={t("next")} onSubmit={onSubmit}/>
                {/* 0: {ZipCode: '602', AreaName: '番路鄉', AreaEngName: 'Fanlu Township'} */}
                {/* <p>{t("no_mobile")}<a href="#">{t("contact_with_us")} {">>"}</a></p> */}
            </form> 
        </main>
    )
}

export default Application;