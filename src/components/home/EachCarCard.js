function EachCarCard (props) {
    return(
        <div className="card">
            <div>
                <p>{props.title}</p>
                <p>{props.courses}</p>                
            </div>
            <img src={props.img_src} alt={props.title} width="120px" />
        </div>
    )
}

export default EachCarCard;