import {React, useState, useEffect} from 'react';
import Header from './SubComp/Header';
import { useHistory } from 'react-router';
import logo from "../images/logo.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowsAltH, faUserFriends, faUser, faCalendarAlt, faMoneyBillWaveAlt, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Hotelicon from "./SubComp/Hotelicon";
import Rooms from './SubComp/Rooms';
import GURL from '../GURL';
import plain from "../images/plain.jpg";
import axios from 'axios';
import Slider from "react-slick";
import {Markup} from 'interweave';

function Tour_Details(props) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
    };

    const id = props.match.params.id
    const [Tour, setTour] = useState([]);
    const [TourImages, setTourImages] = useState([]);
    useEffect(async()=>{
        const res = await axios.post(`${GURL.BASEURL}getTourById`, {tour_id:id});
        if(res){
            setTour(res.data.data);
            setTourImages(JSON.parse(res.data.data.tour_images));
            document.getElementsByClassName('loading-overlay')[0].classList.remove('is-active');
        }
    },[])
    const history = useHistory();   
    const rooms = props.data;

    const createBooking = (id) => {
        history.push(`../booking/${id}`);
    }
    return (
        <>
            <Header />
            <div className="loading-overlay is-active">
            <img className="profile_img infinity-loop" src={window?`${GURL.SERVER_IMAGES}logo-n.png`:null} style={{width:'65px'}} alt="profile_img"/>    
            </div>
                <section className="myTabs">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <section className="myCards">
                        <div className="">
                            <div className="row">
                                <Slider style={{maxWidth:'100%', overflowX:'hidden', margin:0, pad:0}} {...settings}>
                                    {TourImages?TourImages.map((img)=>(
                                    <div className="img_slider">
                                        <div style={{opacity:'0.8'}}><img src={`${GURL.SERVER_IMAGES}/tourImages/${img}`} alt="Lahore" height="170px" width="100%" style={{borderRadius: 5}}/></div>
                                    </div>
                                    )):null}
                                </Slider>
                            
                            </div>
                        </div>
                    </section>
                    <section className="hotel_icon">
                        <div className="">
                            <div className="row">
                                <div className="col-12 text-center">
                                <div className="grey_back">
                                {/* <a href="#" className="icon_btn">FEATURED</a>
                                    <a href="#" className="icon_btn btn2_icon">TOP RATED</a> */}
                                    <br />
                                    {/* <h6 className="text-muted mb-3">{Tour.tour_type}</h6> */}
                                    <h4 className="font-weight-bold p-1">{Tour.tour_title}</h4>
                                    <h6 className="bold"><span className="text-muted">Last Date Of Booking:</span><br /> {Tour.ldob}</h6>
                                    <br />
                                    <h6 className="bold">Rs.{Tour.charges_per_person}<span className="text-muted">/person</span></h6>
                                    <h6 className="bold">Rs.{Tour.charges_per_couple}<span className="text-muted">/couple</span></h6>
                                    <div className="orders">
                                            {/* <a href="#" className="btn_order">BOOK NOW</a> */}
                                        <a href="javascript://" onClick={() => props.history.push(`../tour_bookings/${Tour.tour_id}`)} className="btn_order order2 w-100">Book Now</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                                    
                    </div>
                    </div>
                        <div className="row">
                            <div className="col">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <section className="hotel_icon">
                                    <div className="">
                                        <div className="row text-center" style={{fontSize:'15px', marginTop:20}}>
                                            <div className="col-5">
                                                <small style={{display:'block'}}>From</small>
                                                <span className="text-default" style={{float:'', fontSize:'12px'}}><FontAwesomeIcon icon={faCalendarAlt} className="text-success" />&nbsp; {Tour.starting_from}</span>
                                            </div>
                                            <div className="col-2 d-flex align-items-center justify-content-center text-warning">
                                                <center>
                                                <FontAwesomeIcon icon={faArrowAltCircleRight} className="text-warning" />
                                                </center>
                                            </div>
                                            <div className="col-5">
                                                <small style={{display:'block'}}>To</small>
                                                <span className="text-default" style={{float:'', fontSize:'12px'}}><FontAwesomeIcon icon={faCalendarAlt} className="text-success" />&nbsp; {Tour.ending_at}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="inclusions p-3">
                                        <h4 className="">Details</h4>

                                        <div className="text-justify"><Markup content={Tour.tour_details}/></div>
                                        <br />
                                        <br />
                                        <h4 className="">Inclusions</h4>
                                        
                                        <div className="text-justify"><Markup content={Tour.inclusions}/></div>
                                        <br />
                                        <br />
                                        <h4 className="">Exclusions</h4>

                                        <div className="text-justify"><Markup content={Tour.exclusions}/></div>
                                    </div>
                                </section>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="p-3">
                                        <h4 className="">Policies</h4>
                                        <Markup content={Tour.policies}/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div className="p-3">
                                        <h4 className="">Terms  Conditions</h4>
                                        <Markup content={Tour.terms_and_conditions}/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="avail" role="tabpanel" aria-labelledby="avail-tab"></div>
                            </div>
                                <ul className="nav nav-tabs" id="myTab" role="tablist" style={{fontSize:12}}>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Policies</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </section>
        </>
    )
}

export default Tour_Details;
