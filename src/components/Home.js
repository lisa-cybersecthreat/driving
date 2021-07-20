import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "./home/Card";

import car from "../images/car.jpg"
import cars from "../images/cars.jpg"
import gps from "../images/gps.jpg";
import filling_application_form from "../images/filling-application-form.jpg";
import guys_sitting_car from "../images/guys-sitting-car.jpg"
import using_digital_tablet_smartphone from "../images/using-digital-tablet-smartphone.jpg";

import "../styles/home.scss"

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "../styles/swiper-style.scss";
import SwiperCore, {Pagination,Navigation} from 'swiper/core';
SwiperCore.use([Pagination,Navigation]);

function Home () {
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



    return(
        <main id="home">
            <section>
                <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{"clickable": true}} navigation={true} className="mySwiper">
                    <SwiperSlide className="img-wrapper"><img src={car} alt="car"/></SwiperSlide>
                    <SwiperSlide className="img-wrapper"><img src={cars} alt="car"/></SwiperSlide>
                    <SwiperSlide className="img-wrapper"><img src={gps} alt="car"/></SwiperSlide>
                </Swiper>
            </section>
            <section className="cards-div-3">
                <Card src={using_digital_tablet_smartphone} title="新手報名" desc="線上簡單快速報名" link="馬上報名"/>
                <Card src={guys_sitting_car} title="專業教練" desc="來自全台的專業合格教練" link="找教練"/>
                <Card src={filling_application_form} title="筆試秘笈" desc="模擬試題，讓您輕鬆過關" link="了解更多"/>
            </section>
            <section>
                <h1></h1>
            </section>
        </main>
    )
}

export default Home;