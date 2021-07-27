function SimpleCard (props) {
    
    return(
    <div className="simpleCard">
        <div className="img-wrapper">
            <img src={props.img_src} alt={props.text}/>
        </div>
        <div className="text-div">
            {props.icon}
            <p>{props.text}</p>            
        </div>
    </div>
    )
}

export default SimpleCard;