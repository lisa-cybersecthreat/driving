import { v4 as uuidv4 } from 'uuid';

export default function MustKnowCard (props) {
    
    return(
        <div id={props.id} className="each-detail-card">
            <div className="title-div"> 
                {props.svg}
                <h1>{props.tt.text}</h1>                    
            </div> 
            {
                props.tt.detail.map(elm=><p key={uuidv4()}>{elm}</p>)
            } 
        </div>
    )
}