/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from 'react-i18next';

import car from "../images/car.jpg";
import driving_school from "../images/driving_school.jpg";
import gps from "../images/gps.jpg";
import filling_application_form from "../images/filling-application-form.jpg";
import guys_sitting_car from "../images/guys-sitting-car.jpg"
import using_digital_tablet_smartphone from "../images/using-digital-tablet-smartphone.jpg";
import how_much_tuition from "../images/how_much_tuition.jpg"
// import private_car from "../images/private_car.png";
// import van from "../images/van.png";
// import motorcycle from "../images/motorcycle.png";
// import cargo_truck from "../images/cargo_truck.png";
// import scooter from "../images/scooter.png";
// import taxi from "../images/taxi.png";
// import bus from "../images/bus.png";
import how_many_classes from "../images/how_many_classes.jpg";
import where_location from "../images/where_location.jpg";
import when_upcoming_exame from "../images/when_upcoming_exame.jpg";
import logo from "../images/logo.png";
import message from "../images/message.png";

import "../styles/home.scss";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "../styles/swiper-style.scss";
import SwiperCore, {Autoplay, Pagination,Navigation} from 'swiper/core';
// import EachCarCard from './home/EachCarCard';

import {GiMoneyStack, GiTurban} from "react-icons/gi"
import {
    BiCalendarCheck, 
    BiLocationPlus
} from "react-icons/bi";
import {AiOutlineSchedule} from "react-icons/ai";
import { GrPersonalComputer } from "react-icons/gr";
import { BsPencil } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri"

import Card from "./home/Card";
import WhyUsSec from "./home/WhyUsSec";
import SimpleCard from './home/simpleCard';
import StudentFeedBackCard from './home/StudentFeedbackCard';
import { InitContext } from '../contexts/InitContext';
import StudentSuccessCard from './home/StudentSuccessCard';
import VariousCarsSec from './home/VariousCarsSec';


function Home (props) {
    const { isEng, setIsEng, apiOrigin } = useContext(InitContext)
    const { t, i18n } = useTranslation();
    SwiperCore.use([Pagination,Navigation, Autoplay]);

    var url = `${apiOrigin}/api/teachers`;
    // var url="http://localhost:9000/todos" 
    // var url = "https://sjkcboibmh.execute-api.us-east-1.amazonaws.com/UserAuthentication"
    useEffect(() => {
        fetch(url, {
            // method: "GET",
            // headers: {
            //     'Content-Type': 'text/html',
            // }
        })
        .then(res => {
            res.json();
            console.log(res)
            console.log(res.headers.get('Content-Type'));
        })
        .then(data => {
            console.log(data)
            // console.log(data[0].mobile)
            // console.log(typeof(data))
        })
        .catch(err => console.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <main id="home" lang={isEng? "en" : "zh"}>
            <section>
                <Swiper slidesPerView={1} loop={true} pagination={{"clickable": true}} navigation={true} autoplay={{"delay": 5000,"disableOnInteraction": false}} speed={2000} className="hero-slider">
                    <SwiperSlide className="img-wrapper"><img src={car} alt="car"/></SwiperSlide>
                    <SwiperSlide className="img-wrapper"><img src={driving_school} alt="driving_school"/></SwiperSlide>
                    <SwiperSlide className="img-wrapper"><img src={gps} alt="car"/></SwiperSlide>
                </Swiper>
            </section>
            <section className="cards-div-3">
                <Card src={using_digital_tablet_smartphone} title={t("new_application")} desc={t("new_application_desc")} link={t("new_application_link")}/>
                <Card src={guys_sitting_car} title={t("coach")} desc={t("coach_desc")} link={t("coach_link")}/>
                <Card src={filling_application_form} title={t("test")} desc={t("test_desc")} link={t("test_link")}/>
            </section>
            <section className="success-list-section">
                <div className="left-div">
                    <h1>125551+</h1>
                    <p>{t("join_our_team")}</p>
                </div>
                <hr/>
                <div className="right-div">
                    <p>{t("congrat_students_pass")}</p>
                    <Swiper slidesPerView={3} slidesPerGroup={3} direction={'vertical'} autoplay={{"delay": 1200,"disableOnInteraction": false}} speed={1200} loop={true}>
                        <SwiperSlide><StudentSuccessCard tel={t("student_feedback_1.tel")} location={t("student_feedback_1.location")}/></SwiperSlide>
                        <SwiperSlide><StudentSuccessCard tel={t("student_feedback_2.tel")} location={t("student_feedback_2.location")}/></SwiperSlide>
                        <SwiperSlide><StudentSuccessCard tel={t("student_feedback_3.tel")} location={t("student_feedback_3.location")}/></SwiperSlide>
                        <SwiperSlide><StudentSuccessCard tel={t("student_feedback_4.tel")} location={t("student_feedback_4.location")}/></SwiperSlide>
                        <SwiperSlide><StudentSuccessCard tel={t("student_feedback_5.tel")} location={t("student_feedback_5.location")}/></SwiperSlide>
                        <SwiperSlide><StudentSuccessCard tel={t("student_feedback_6.tel")} location={t("student_feedback_6.location")}/></SwiperSlide>
                        <SwiperSlide><StudentSuccessCard tel={t("student_feedback_7.tel")} location={t("student_feedback_7.location")}/></SwiperSlide>
                        <SwiperSlide><StudentSuccessCard tel={t("student_feedback_8.tel")} location={t("student_feedback_8.location")}/></SwiperSlide>
                        <SwiperSlide><StudentSuccessCard tel={t("student_feedback_9.tel")} location={t("student_feedback_9.location")}/></SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <VariousCarsSec t={t} />
            {/* <section className="various-cars-sec" >
                    <div className="div-wrapper">
                        <EachCarCard title={t("private_car")} img_src={private_car} courses={t("courses")}/>
                        <EachCarCard title={t("van")} img_src={van} courses={t("courses")}/>
                        <EachCarCard title={t("motorcycle")} img_src={motorcycle} courses={t("courses")}/>
                        <EachCarCard title={t("scooter")} img_src={scooter} courses={t("courses")}/>
                        <EachCarCard title={t("taxi")} img_src={taxi} courses={t("courses")}/>
                        <EachCarCard title={t("bus")} img_src={bus} courses={t("courses")}/>
                        <EachCarCard title={t("cargo_truck")} img_src={cargo_truck} courses={t("courses")}/>                    
                    </div>       
            </section> */}
            <WhyUsSec t={t}/>
            <section className="student-feedback-section" >
                <img src={message} alt="message" />
                <h1>學生心得&nbsp;<span>來自考完試的用戶的真實評價</span></h1>
                <Swiper slidesPerView={3} spaceBetween={11}  navigation={true}>
                    <SwiperSlide><StudentFeedBackCard text={t("student_feedback_1.text")} tel={t("student_feedback_1.tel")} date={t("student_feedback_1.date")} location={t("student_feedback_1.location")}/></SwiperSlide>
                    <SwiperSlide><StudentFeedBackCard text={t("student_feedback_2.text")} tel={t("student_feedback_2.tel")} date={t("student_feedback_2.date")} location={t("student_feedback_2.location")}/></SwiperSlide>
                    <SwiperSlide><StudentFeedBackCard text={t("student_feedback_3.text")} tel={t("student_feedback_3.tel")} date={t("student_feedback_3.date")} location={t("student_feedback_3.location")}/></SwiperSlide>
                    <SwiperSlide><StudentFeedBackCard text={t("student_feedback_4.text")} tel={t("student_feedback_4.tel")} date={t("student_feedback_4.date")} location={t("student_feedback_4.location")}/></SwiperSlide>
                    <SwiperSlide><StudentFeedBackCard text={t("student_feedback_5.text")} tel={t("student_feedback_5.tel")} date={t("student_feedback_5.date")} location={t("student_feedback_5.location")}/></SwiperSlide>
                    <SwiperSlide><StudentFeedBackCard text={t("student_feedback_6.text")} tel={t("student_feedback_6.tel")} date={t("student_feedback_6.date")} location={t("student_feedback_6.location")}/></SwiperSlide>
                    <SwiperSlide><StudentFeedBackCard text={t("student_feedback_7.text")} tel={t("student_feedback_7.tel")} date={t("student_feedback_7.date")} location={t("student_feedback_7.location")}/></SwiperSlide>
                    <SwiperSlide><StudentFeedBackCard text={t("student_feedback_8.text")} tel={t("student_feedback_8.tel")} date={t("student_feedback_8.date")} location={t("student_feedback_8.location")}/></SwiperSlide>
                    <SwiperSlide><StudentFeedBackCard text={t("student_feedback_9.text")} tel={t("student_feedback_9.tel")} date={t("student_feedback_9.date")} location={t("student_feedback_9.location")}/></SwiperSlide>
                </Swiper>
                <div className="more-link"><a>更多評價</a><div></div><div></div></div>
            </section>
            <section className="cards-div-4">
                <Card title={t("retake_lessons")} desc={t("retake_lessons_desc")} link={t("new_application_link")}/>
                <Card title={t("preemployment_course")} desc={t("preemployment_course_desc")} link={t("see_details")}/>
                <Card title={t("taxi_test")} desc={t("taxi_test_desc")} link={t("download_app")}/>
                <Card title={t("purchase_insurance")} desc={t("purchase_insurance_desc")} link={t("insurance_details")}/>
            </section>
            <section className="qna_cars_div_4">
                <SimpleCard text={t("how_much_tuition")} img_src={how_much_tuition} icon={<GiMoneyStack/>} />
                <SimpleCard text={t("how_many_classes")} img_src={how_many_classes} icon={<AiOutlineSchedule/>} />
                <SimpleCard text={t("when_upcoming_exame")} img_src={when_upcoming_exame} icon={<BiCalendarCheck/>} />
                <SimpleCard text={t("where_location")} img_src={where_location} icon={<BiLocationPlus/>} />
            </section>
            <section className="contact-us-section">
            <div className="logo-div"><img src={logo} alt="logo"/>學開車</div>
                <div className="slogan-div">
                    <h3>{t("slogan")}<span>{t("slogan_desc")}</span></h3>
                    <p>台北市民生東路22號</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3032394867146!2d121.5368361148424!3d25.057709283961227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abe1973d6863%3A0xc75243adc4ca2879!2sNo.%2022%2C%20Section%203%2C%20Minsheng%20East%20Road%2C%20Zhongshan%20District%2C%20Taipei%20City%2C%2010491!5e0!3m2!1sen!2stw!4v1627361953376!5m2!1sen!2stw" allowFullScreen="" loading="lazy"></iframe>
            </section>
            <section className="qna-section">
                <h1>{t("hot_qna")}</h1>
                <a href={t("qna.q1.url")}>{t("qna.q1.text")}</a>
                <a href={t("qna.q2.url")}>{t("qna.q2.text")}</a>
                <a href={t("qna.q3.url")}>{t("qna.q3.text")}</a>
                <a href={t("qna.q4.url")}>{t("qna.q4.text")}</a>
                <a href={t("qna.q5.url")}>{t("qna.q5.text")}</a>
                <a href={t("qna.q6.url")}>{t("qna.q6.text")}</a>
                <a href={t("qna.q7.url")}>{t("qna.q7.text")}</a>
                <a href={t("qna.q8.url")}>{t("qna.q8.text")}</a>
                <a href={t("qna.q9.url")}>{t("qna.q9.text")}</a>
            </section>

        </main>
    )
}

export default Home;


    // const url="https://pokeapi.co/api/v2/pokemon?offset=0&limit=2"
    // const url = "https://www.testapp.net";
    // const url="http://www.testapp.net/js/app.js"

    // var url = new URL('php/data.php', location);
    // url.searchParams.append("command", "get_token");
    // var url_string = url.toString()
    // console.log(url_string);
    // fetch(url_string, {/* etc */})

    // useEffect(()=>{
    //     fetch(url,{
    //           mode: 'cors', // no-cors
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))        
    // }, [])
