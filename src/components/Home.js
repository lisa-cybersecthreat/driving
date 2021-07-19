import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import car from "../images/car.jpg"
import cars from "../images/cars.jpg"
import gps from "../images/gps.jpg"
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
            <>
                <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{"clickable": true}} navigation={true} className="mySwiper">
                    <SwiperSlide><img src={car} alt="car"/></SwiperSlide>
                    <SwiperSlide><img src={cars} alt="car"/></SwiperSlide>
                    <SwiperSlide><img src={gps} alt="car"/></SwiperSlide>
                </Swiper>
            </>
        </main>
    )
}

export default Home;