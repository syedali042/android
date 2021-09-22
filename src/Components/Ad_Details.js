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
import HFooter from './SubComp/Hfooter';


function Ad_Details(props) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
    };

    const id = props.match.params.id
    const [Adventure, setAdventure] = useState([]);
    const [AdventureImages, setAdventureImages] = useState([]);
    useEffect(async()=>{
        const res = await axios.post(`${GURL.BASEURL}getAdventureById`, {adventure_id:id});
        if(res){
            setAdventure(res.data.data);
            setAdventureImages(JSON.parse(res.data.data.adventure_images));
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
                                    {AdventureImages?AdventureImages.map((img)=>(
                                    <div className="img_slider">
                                        <div style={{opacity:'0.8'}}><img src={`${GURL.SERVER_IMAGES}/adventureImages/${img}`} alt="Lahore" height="170px" width="100%" style={{borderRadius: 5}}/></div>
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
                                        <br />
                                        <h4 className="text-muted mb-3">{Adventure.adventure_type}</h4>
                                        <h2 className="font-weight-bold p-1">{Adventure.adventure_title}</h2>
                                        <h6 className="bold">Rs.{Adventure.adventure_charges}<span className="text-muted">/person</span></h6>
                                        <h6 className="bold">City :<span className="text-muted"> {Adventure.adventure_city}</span></h6>
                                        <h6 className="bold">Address :<span className="text-muted"> {Adventure.adventure_place_address}</span></h6>
                                        <div className="orders">
                                                <a href={Adventure.adventure_location} className="btn_order">Visit Location</a>
                                                <a href="javascript://" onClick={()=>props.history.push('../adventure_booking/'+Adventure.adventure_id)} className="btn_order order2 w-100">Book Now</a>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="row p-3">
                                    <div className="col-6">
                                        <h6 style={{fontWeight:'600', fontSize:'13px'}}>Duration</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 style={{fontWeight:'500', fontSize:'11px', float:'right'}}>{Adventure.adventure_duration}</h6>
                                    </div>
                                </div>
                                <div className="row p-3">
                                    <div className="col-6">
                                        <p style={{fontWeight:'600', fontSize:'13px'}}>Starting Time</p>
                                    </div>
                                    <div className="col-6">
                                        <p style={{fontWeight:'500', fontSize:'11px', float:'right'}}>{Adventure.adventure_start_time}</p>
                                    </div>
                                </div>
                                <div className="row p-3">
                                    <div className="col-6">
                                        <p style={{fontWeight:'600', fontSize:'13px'}}>Ending Time</p>
                                    </div>
                                    <div className="col-6">
                                        <p style={{fontWeight:'500', fontSize:'11px', float:'right'}}>{Adventure.adventure_end_time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                                    
                    </div>
                    </div>
                </div>

                </section>
                <HFooter />
        </>
    )
}

export default Ad_Details;
