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

function AdBookingDetails(props) {

    let history = useHistory();
    const [count, setCount] = useState([]);
    const [Booking, setBooking] = useState([]);
    const [Hotel, setHotel] = useState([]);
    const [Room, setRoom] = useState([]);
    const [Payment, setPayment] = useState([]);
    const [AdImg, setAdImg] = useState([])
    const text = props.match.params.id;

    useEffect(async () => {
        document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active')
        const id = props.match.params.id;
        const res = await axios.post(`${GURL.BASEURL}bookingDetails`, {request_id: id, booking: 'AD_BOOKINGS'});
        if(res){
            console.log(res)
            setBooking(res.data.data.info)
            setHotel(res.data.data.adventure)
            setPayment(res.data.data.payment)
            setRoom(res.data.data.room)
            const AdImg = JSON.parse(res.data.data.adventure.adventure_images);
            setAdImg(AdImg);
            document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active')
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
                                    <img style={{}} src={`${GURL.SERVER_IMAGES}adventureImages/${Hotel ? AdImg[0]:null}`} alt="logo" className="hello_logo"/> 
                                    <div className="pt-3 ml-2">
                                        <h5>{Hotel ? Hotel.adventure_title:null}</h5>  
                                        <p style={{fontSize:'12px'}}>{Hotel ? Hotel.adventure_place_address:null}</p>   
                                    </div>   
                                </div> 
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="download_bookings">
                        <div className="col-12 mt-3">
                            <h5 className="mt-2">Booking Details</h5>
                            <ul style={{marginTop:'0%'}}>
                                <div>
                                <li className="bold1"><p>Adventure Type: <p style={{float:'right', margin:0, fontSize:13}}>{Hotel?Hotel.adventure_type:null}</p></p></li>
                                <li></li>
                                </div>
                                <div>
                                <li className="bold1"><p>Date: <p style={{float:'right', margin:0, fontSize:13}}>{Booking?Booking.request_adventure_date:null}</p></p></li>
                                <li></li>
                                </div>

                                <div>
                                <li className="bold1 pt-3"><p>Total Guests: <p style={{float:'right', margin:0, fontSize:13}}>Persons: 0{Booking?Booking.request_persons:null}, Male: 0{Booking?Booking.request_male:null}, Female: 0{Booking?Booking.request_female:null}</p></p></li>
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
                    <div className="overlay">
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="hello_tabs">
                            <ul>
                                {/* <li><a onClick={()=>history.push(`../portal/${Hotel?Hotel.hotel_id:null}`)}>View Adventure</a></li> */}
                            </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <Hfooter />
        </>
    )
}

export default AdBookingDetails;
