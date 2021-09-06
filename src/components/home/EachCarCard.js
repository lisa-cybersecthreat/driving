import { useState } from "react";

function EachCarCard (props) {
    const [selected, setSelected] = useState(false)

    const onClick = (e) => {
        e.preventDefault();
        setSelected(!selected)
    }

    return(
        <a href="#" onClick={onClick} className={selected? "selected card" : "card"}>
            <div>
                <p>{props.title}</p>
                <p>{props.courses}</p>                
            </div>
            <img src={props.img_src} alt={props.title} width="120px" />
        </a>
    )
}

export default EachCarCard;