import {React, useState, useEffect} from 'react'
import uk from "../../images/uk.jpg";
import china from "../../images/china.jpg";
import dubia from "../../images/dubia.jpg";
import Slider from "react-slick";
import GURL from '../../GURL'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import HomeBackgroundThree from './HomeBackgroundThree';

function Featured() {

    const history = useHistory();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
      };

    const toursListing = async (TourType) => {
        let data = {tour_id:'0', TourType:TourType};
        let res = await axios.post(`${GURL.BASEURL}tourListing`, data);
        history.push(`tour_listings/${TourType}`);
    }
    return (
        <>
            <section className="featured ">
                <div className="container">
                <div className="row">
                        <div className="col-12">
                            <div className="left_text">
                                <hr/><span style={{fontWeight:'600', fontSize:'12px', color:'#011a42'}}>Wanna go somewhere ?</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2 bg-secondary pt-3 pt-1">
                           <div className="col-12">
                           <Slider {...settings}>
                                <div className="img_slider" onClick={()=>toursListing('National')}>
                                    <img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/nat-tours.jpg`} alt="uk" height="150px" width="100%" className="img_Slider" style={{borderRadius: 10}}/>
                                    <div className="font-weight-light text-white p-2" style={{zIndex:'1', fontSize:'11px',fontWeight:'600', opacity:1}}>National Tours</div>
                                </div>
                                <div className="img_slider" onClick={()=>toursListing('International')}>
                                    <img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/inter-tours.jpg`} alt="china" height="150px" width="100%" style={{borderRadius: 10}}/>
                                    <div className="font-weight-light text-white p-2" style={{zIndex:'1', fontSize:'11px',fontWeight:'600', opacity:1}}>International Tours</div>
                                </div>
                            </Slider>
                           </div>
                       </div>
                </div>
            </section>
        </>
    )
}

export default Featured;
