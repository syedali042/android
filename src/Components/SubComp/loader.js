import {React} from 'react';

function Loader(props) {
    const display = props.display;
    if(display==1){

        let overlay = document.getElementsByClassName('loading-overlay')[0]

        overlay.classList.toggle('is-active')


    }
    return (
        <>
            <div className="loading-overlay">
                <span className="fas fa-spinner fa-3x fa-spin"></span>
            </div>
        </>
    )
}

export default Loader;
