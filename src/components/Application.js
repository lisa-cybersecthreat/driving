import React, { useEffect, useRef, useState } from 'react';
import {useTranslation} from "react-i18next"
import { v4 as uuidv4 } from 'uuid';
import VariousCarsSec from './home/VariousCarsSec';

import "../styles/Application.scss";
import cities from "../assets/cities.json"

function Application (props) {
    const { t, i18n } = useTranslation();
    const location1OptionRef = useRef()
    const formRef = useRef();
    const location2OptionRef = useRef()
    const [location1, setLocation1] =useState("")
    const [selectedCars, setSelectedCars] = useState([])
    const [submitForm, setSumitForm] = useState(false)

    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)
    

    const changeLocation = e => setLocation1(e.target.value)

    const clickSubmitBtn = e => setSumitForm(!submitForm)

    const onSubmit= async e =>{
        e.preventDefault()

        const formData = new FormData(formRef.current)
        formData.forEach((value, key)=>formData[key]=value)

        
        const data={...formData, location: formData.location1.concat(formData.location2), cartype: selectedCars}
        console.log("formdata and data: ")
        console.log(data)


        console.log(e.target.files)
        var reader = new FileReader()
        reader.onload= function(e){
            
            // console.log(e.target.result)
            setImage(e.target.result)
        }
        reader.readAsDataURL(formData.file)
    }
    
    const chooseImage = e => {
        console.log(e.target.files[0])
    }

    return(
        <main id="Application">
            <form onSubmit={onSubmit} ref={formRef}>
                <p>{t("application.take_a_minute_for_feedback")}</p>
                {/* <label htmlFor="name">{t("name")}</label>
                    <input id="name" type="text" name="name" />
                <label htmlFor="tel">{t("mobile_number")}</label>
                    <input id="tel" type="tel" name="mobile"   required pattern="^[0-9-+\s()]*$"/>
                <label htmlFor="email">email</label>
                    <input id="email" type="email" name="email" required />
                <label htmlFor="cartype">{t("choose_cartype")}</label> */}
                <input id="cartype" type="text" name="cartype" style={{display: "none"}}/> 
                <VariousCarsSec t={t} selectedCars={selectedCars} setSelectedCars={setSelectedCars} submitForm={submitForm} />
                <label htmlFor="location1"> {t("choose_location")}</label>
                    <select id="location1" name="location1" ref={location1OptionRef} onChange={changeLocation} value={location1}>
                        <option value=""></option>
                        {
                            cities.map((c, i)=> <option key={uuidv4()} value={i18n.language==="en"? c.CityEngName : c.CityName} data-i={i}>{i18n.language==="en"? c.CityEngName : c.CityName}</option>)
                        }                
                    </select>
                    {
                        location1.length>0 && <select name="location2" ref={location2OptionRef} >
                            {
                                cities[location1OptionRef.current.selectedIndex-1].AreaList.map(area=>
                                <option value={i18n.language==="en" ? `${area.ZipCode}-${area.AreaEngName}` : `${area.ZipCode}-${area.AreaName}`} key={uuidv4()}>{area.ZipCode}-{i18n.language==="en" ? area.AreaEngName : area.AreaName}</option>)        
                            }
                        </select>
                    }    
                <label htmlFor="remark">{t("remark")}</label>
                    <textarea id="remark"></textarea>
                <input type="submit" value={t("next")} onClick={clickSubmitBtn}/>
                {/* <label>upload image:
                    <input type="file" name="file" accept="image/*" onChange={chooseImage}/>
                </label>   
                <img src={image} alt="file" />  */}
                {/* <p>{t("no_mobile")}<a href="#">{t("contact_with_us")} {">>"}</a></p> */}
            </form> 
        </main>
    )
}

export default Application;