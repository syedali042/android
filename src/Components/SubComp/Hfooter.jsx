import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt,faMailBulk} from '@fortawesome/free-solid-svg-icons';
import { faHome,faSearch,faHeart, faCompass, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import GURL from '../../GURL';

function HFooter() {

    return (
        <>
            <div style={{paddingTop:'90px'}}>
            <footer className="nav">
                <ul className="row pr-0 pl-0 mb-0 mr-0 ml-0">
                    <li className="col-2"><a href="../checkAvailability"><FontAwesomeIcon icon={faSearch} className="ul_color"/></a></li>
                    <li className="col-2"><a href="../explorePlaces"><FontAwesomeIcon icon={faCompass} className="ul_color"/></a></li>
                    <li className="col-2">
                        <span className="shadow_overlay">
                            {/* <li><a href="../explorePlaces"><FontAwesomeIcon icon={faHome} style={{fontSize:'20px'}}/></a></li> */}
                            <li><a href="/"><img src={`${GURL.SERVER_APP_IMAGES}/logo.png`} width="20px"/></a></li>
                        </span>
                    </li>
                    <li className="col-2"><a href="../notification"><FontAwesomeIcon icon={faMailBulk} className="ul_color"/></a></li>
                    <li className="col-2"><a href="../jobs"><FontAwesomeIcon icon={faBriefcase} className="ul_color"/></a></li>
                </ul>
            </footer>
            </div>
        </>
    )
}

export default HFooter;
