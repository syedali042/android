import React from 'react';
import logo from "../../images/logo.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons";

function FirstPartTabs() {
    return (
        <>
            <section className="hotel_icon">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <img src={logo} alt="logo" className="logo_style"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                           <div className="grey_back">
                           <a href="#" className="icon_btn">FEATURED</a>
                            <a href="#" className="icon_btn btn2_icon">TOP RATED</a>
                            <h4 className="text-muted mt-3">Aparements</h4>
                            <h2 className="font-weight-bold">Portland-Plush King Rooms</h2>
                            <h3 className="bold">$240<span className="text-muted">/night</span></h3>
                            <FontAwesomeIcon icon={faStar} style={{color: 'yellow'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: 'yellow'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: 'yellow'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: 'yellow'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: 'yellow'}}/>
                            <span className="text-muted left">14k reviews</span>
                           <div className="orders">
                                <a href="#" className="btn_order">BOOK NOW</a>
                                <a href="#" className="btn_order order2">ALL MY ADS</a>
                           </div>
                           </div>
                        </div>
                    </div>
                    </div>
        </section>
        </>
    )
}

export default FirstPartTabs;
