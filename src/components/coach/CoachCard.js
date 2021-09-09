export default function CoachCard (props) {
    return(
        <div className="coach-card">
            <h1>name:<span>{props.teacher.data[0].name}</span></h1>
            <p>mobile:<span>{props.teacher.data[0].mobile}</span></p>
            <p>email:<span>{props.teacher.data[0].email}</span></p>
            <p>id:<span>{props.teacher.data[0].id}</span></p>
        </div>
    )
}