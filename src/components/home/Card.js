

function Card (props) {
    return(
        <div className="card">
            <div className="img-wrapper">
                <img src={props.src} alt={props.title} />
            </div>
            <div className="info-div">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
                <a href={props.ahref}>
                    <p className="link-box">{props.link}</p>
                    <p className="arrow">{">>"}</p>
                </a> 
            </div>

        </div>
    )
}

export default Card;