import { FaMedal } from "react-icons/fa"

function StudentSuccessCard (props) {
    return(
        <>
            <FaMedal />
            <div className="text-div">
                <p><span className="pass">Pass!&nbsp;</span>{props.location}</p>
                <p><span>Tel:&nbsp;</span>{props.tel}</p>
            </div>
        </>
    )
}

export default StudentSuccessCard;