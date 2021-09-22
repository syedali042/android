import {React, useEffect, useState} from 'react';
import axios from 'axios';
import GURL from '../GURL'
import { useHistory } from "react-router-dom";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import Header from './SubComp/Header';
import Hfooter from './SubComp/Hfooter';
import Heading from './SubComp/Heading';
import plain from "../images/plain.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";
// import {useScreenshot} from 'use-react-screenshot'

function Tour_Booking_Details(props) {

    let history = useHistory();
    const [Booking, setBooking] = useState([]);
    const [Hotel, setHotel] = useState([]);
    const [Payment, setPayment] = useState([]);
    const [TourImg, setTourImg] = useState([])
    const text = props.match.params.id;
    useEffect(async () => {
        document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active');
        const id = props.match.params.id;
        const res = await axios.post(`${GURL.BASEURL}bookingDetails`, {request_id: id, booking: 'TOUR_BOOKINGS'});
        if(res){
            console.log(res)
            setBooking(res.data.data.info)
            setHotel(res.data.data.tour)
            setPayment(res.data.data.payment)
            const TourImg = JSON.parse(res.data.data.tour.tour_images);
            setTourImg(TourImg);
            document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active');
        }
        console.log(Booking)
    },[]);

    const hotelDetails = (hotelId) => {

        history.push(`../portal/${hotelId}`);

    }
    
    return (
        <>
            <Header />
            <div className="loading-overlay">
            <img className="profile_img infinity-loop" src={window?`${GURL.SERVER_IMAGES}logo-n.png`:null} style={{width:'65px'}} alt="profile_img"/>    
            </div>
            <section className="hello">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-12">
                        <div className="card">
                            <div className="pt-2 pb-2">
                                <div className="left_Side">
                                    <img style={{}} src={`${GURL.SERVER_IMAGES}tourImages/${Hotel ? TourImg[0]:null}`} alt="logo" className="hello_logo"/> 
                                    <div className="pt-3 ml-2">
                                        <h5>{Hotel ? Hotel.tour_title:null}</h5>  
                                        <p style={{fontSize:'12px'}}>{Hotel ? Hotel.starting_from:null} - {Hotel ? Hotel.ending_at:null}</p>   
                                    </div>   
                                </div> 
                                {/* <div className="right_Side">
                                   <h4>Rs.{Payment ? Payment.total_amount:null}/-</h4>
                                </div>                    */}
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="download_bookings">
                        <div className="col-12 mt-3">
                            <h5 className="mt-2">Booking Details</h5>
                            <ul style={{marginTop:'0%'}}>
                                <div>
                                <li className="bold1"><p>Adventure Type:<p style={{float:'right', margin:0, fontSize:13}}>{Hotel?Hotel.tour_type:null}</p></p></li>
                                <li></li>
                                </div>

                                <div>
                                <li className="bold1 pt-3"><p>Total Guests:<p style={{float:'right', margin:0, fontSize:13}}>Single: 0{Booking?Booking.request_persons:null}, Couple: 0{Booking?Booking.request_couple:null}, Male: 0{Booking?Booking.request_male:null}, Female: 0{Booking?Booking.request_female:null}</p></p></li>
                                <li></li>
                                </div>

                                <div>
                                <li className="bold1 pt-3"><h6>Payment Status:</h6></li>
                                <li><p>Total <span className="float_right">{Payment?Payment.total_amount:null}</span></p></li>
                                <li><p>Total Deposit <span className="float_right">{Payment?Payment.deposit_amount:null}</span></p></li>
                                <li><p>Method <span className="float_right">{Payment?Payment.payment_method:null}</span></p></li>
                                <li><p>Transc. Id <span className="float_right">{Payment?Payment.transaction_id:null}</span></p></li>
                                <li><p>Status <span className="badge float_right">{Payment?Payment.payment_status:null}</span></p></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="overlay">
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="hello_tabs">
                            <ul>
                                <li><a onClick={()=>history.push(`../portal/${Hotel?Hotel.hotel_id:null}`)}>View Adventure</a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    </div> */}
                </div>
            </section>
            <Hfooter />
        
        </>
    )
}

export default Tour_Booking_Details;
