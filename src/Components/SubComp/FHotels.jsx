import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from "react-slick";
import plain from '../../images/plain.jpg';
import GURL from '../../GURL'
import plain1 from '../../images/plain1.jpg';
import plain2 from '../../images/plain2.jpg';


function FHotels(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        centerMode: true
    };
    const images = props.images;
    return (
        <>
            <section className="featured_hotels">
                <div className="container">
                        <div className="row mt-2">
                           <div className="col-12">
                           <Slider {...settings}>
                                <div className="hotel_slider">
                                    <img src={`${GURL.SERVER_IMAGES}/adventureImages/`} alt="uk" height="150px" width="100%" className="img_Slider" style={{borderRadius: 10}}/>
                                </div>
                            </Slider>
                           </div>
                       </div>
                </div>
            </section>
        </>
    )
}

export default FHotels;
