function SimpleCard (props) {
    
    return(
    <div className="simpleCard">
        <a href={props.src}>
            <div className="img-wrapper">
                <img src={props.img_src} alt={props.text}/>
            </div>
            <div className="text-div">
                {/* <div className="svg-wrapper"> */}
                   {props.icon} 
                {/* </div> */}
                <p>{props.text}</p>            
            </div>
        </a>
    </div>
    )
}

export default SimpleCard;