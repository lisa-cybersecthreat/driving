import "../styles/Spinner.scss";

export const Spinner = props => {
    return(
        <main id="Spinner">
            <div className="lds-spinner">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>            
        </main>

    )
}