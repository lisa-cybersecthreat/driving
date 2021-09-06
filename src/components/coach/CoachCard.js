export default function CoachCard (props) {
    return(
        <div className="coach-card">
            <h1>name:<span>{props.teacher.name}</span></h1>
            <p>mobile:<span>{props.teacher.mobile}</span></p>
            <p>email:<span>{props.teacher.email}</span></p>
            <p>id:<span>{props.teacher.id}</span></p>
            <p>location:<span></span></p>
            <p>car type:<span></span></p>
            <p>tuition:<span></span></p>
        </div>
    )
}