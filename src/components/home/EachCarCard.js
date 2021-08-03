function EachCarCard (props) {
    return(
        <a href="#" className="card" onClick={props.onClick}>
            <div>
                <p>{props.title}</p>
                <p>{props.courses}</p>                
            </div>
            <img src={props.img_src} alt={props.title} width="120px" />
        </a>
    )
}

export default EachCarCard;