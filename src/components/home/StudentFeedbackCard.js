import { FaUserCircle } from "react-icons/fa"

function StudentFeedBackCard (props) {
    var tel = props.tel.replace(props.tel.substring(3,7), "****")

    return(
        <div className="student-feedback-card">
            <p className="text">{props.text}</p>
            <p className="tel"><FaUserCircle /><span>Tel:&nbsp; </span>{tel}</p>
            <p><span className="date">{props.date}&nbsp;</span><span className="location">{props.location}</span></p>
        </div>
    )
}

export default StudentFeedBackCard;