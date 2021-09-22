
import { useEffect, useRef } from "react";
import private_car from "../../images/private_car.png";
import van from "../../images/van.png";
import motorcycle from "../../images/motorcycle.png";
import cargo_truck from "../../images/cargo_truck.png";
import scooter from "../../images/scooter.png";
import taxi from "../../images/taxi.png";
import bus from "../../images/bus.png";

import EachCarCard from './EachCarCard';

export default function VariousCarsSec(props) {
    const divRef = useRef();

    useEffect(()=>{console.log("various cars sec")
        if(props.submitForm===undefined) return
        console.log(divRef)
        let arr=[]
        divRef.current.childNodes.forEach(elm=>{
            if(elm.classList.contains("selected")){
                // console.log(elm)
                // console.log(elm.getAttribute("data-cartype"))
                arr=[...arr, elm.getAttribute("data-cartype")]
                props.setSelectedCars(arr)
            }
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.submitForm])

    return(
        <section className="various-cars-sec" >
            <div className="div-wrapper" ref={divRef}>
                <EachCarCard title={props.t("private_car")} img_src={private_car} courses={props.t("courses")}/>
                <EachCarCard title={props.t("van")} img_src={van} courses={props.t("courses")}/>
                <EachCarCard title={props.t("motorcycle")} img_src={motorcycle} courses={props.t("courses")}/>
                <EachCarCard title={props.t("scooter")} img_src={scooter} courses={props.t("courses")}/>
                <EachCarCard title={props.t("taxi")} img_src={taxi} courses={props.t("courses")}/>
                <EachCarCard title={props.t("bus")} img_src={bus} courses={props.t("courses")}/>
                <EachCarCard title={props.t("cargo_truck")} img_src={cargo_truck} courses={props.t("courses")}/>                    
            </div>       
        </section>
    )
}