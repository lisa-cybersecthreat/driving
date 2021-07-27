import {
    VscBook
} from "react-icons/vsc"
import {
    MdAttachMoney
} from "react-icons/md";
import {
    FcBusinessman
} from "react-icons/fc";
import {
    AiOutlineInsurance
} from "react-icons/ai"
import {
    CgMoreO
} from "react-icons/cg"

function WhyUsSec (props) {
    return(
        <section className="why-us-sec">
            <h1>{props.t("why_us")}</h1>
            <p>{props.t("why_us_desc")}</p>
            <ul className="grid-5">
                <li>
                    <VscBook />
                    <p>{props.t("free_simulated_test")}</p>
                </li>
                <li>
                    <MdAttachMoney/>
                    <p>{props.t("pay_tuition_fee_by_class")}</p>
                </li>
                <li>
                    <FcBusinessman/>
                    <p>{props.t("over_100_coaches")}</p>
                </li>
                <li>
                    < AiOutlineInsurance/>
                    <p>{props.t("transparent_insurance_protection")}</p>
                </li>
                <li className="learn-more">
                    <a href="#">
                        <CgMoreO/>
                        <p>{props.t("learn_more")}</p>                    
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default WhyUsSec;