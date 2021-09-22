import React, {useEffect, useState} from 'react';
import axios from 'axios';
import GURL from '../GURL'
import { useHistory } from "react-router-dom";
import Header from './SubComp/Header';
import Rooms from './SubComp/Rooms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarked, faStar} from "@fortawesome/free-solid-svg-icons";

const Hotel = (props) => {

    let history = useHistory();
    const [Count, setCount] = useState(1);
    const [Hotel, setHotel] = useState([]);
    const [HotelInfo, setHotelInfo] = useState([]);
    const [HotelRoomPrice, setHotelRoomPrice] = useState([]);
    const [HotelRooms, setHotelRooms] = useState([]);
    const [HotelFacilities, setHotelFacilities] = useState([]);
    const text = props.match.params.id;
    useEffect(() =>{
        document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active');
        async function fetchData(){
            const res = await axios.post(`${GURL.BASEURL}hd`, {hotel_id: text});
            if(res){
                let data = res.data.hotel.hotel;
                setHotelInfo(data.hotelInfo);
                setHotelFacilities(data.hotelFacilities);
                setHotelRoomPrice(data.min_room_price.room_price);
                setHotelRooms(data.rooms);
                console.log(data);
                document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active');
            }
        }
        fetchData();
    },[]);

    // const hotelInfo = Hotel.hotel.hotelInfo;
    const hotelImage = GURL.SERVER_IMAGES+'/hotelImages/'+HotelInfo.hotel_image;
    const hotelName = HotelInfo.hotel_name;
    const hotelPrice = HotelRoomPrice;
    // console.log(Count)
    return (
        <>
            <Header />
            <div className="loading-overlay">
            <img className="profile_img infinity-loop" src={window?`${GURL.SERVER_IMAGES}logo-n.png`:null} style={{width:'65px'}} alt="profile_img"/>    
            </div>
            <br />
            <section className="myTabs" style={{marginTop:"-8%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <section className="myCaro">
                                <div className="">
                                    <div className="row mt-3">
                                        <div className="col-12">
                                        {/* <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                            <div class="carousel-inner">
                                                {hotel.hotel_images ? hotel.hotel_images.map((img, index)=>{
                                                    if(index==0){
                                                        <div className="carousel-item active">
                                                            <img src={`${GURL.SERVER_IMAGES}/hotelImages/${img}`} className="d-block w-100" alt="plain" height="250"/>
                                                        </div>
                                                    }else{
                                                        <div className="carousel-item">
                                                            <img src={`${GURL.SERVER_IMAGES}/hotelImages/${img}`} className="d-block w-100" alt="plain" height="250"/>
                                                        </div>
                                                    }
                                                }) : 'Not Available'}
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                            </div>
                                        </div> */}
                                        <h4 className="font-weight-bold pt-3 pb-3">{hotelName}</h4>
                                        <img src={hotelImage} className="d-block w-100 rounded" alt="plain" height="220"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="row pt-3">
                                        <div className="col-12">
                                            <div className="grey_back">
                                                <h5 className="bold pb-2"><span className="text-warning">Starting From </span> Rs.{hotelPrice}<span className="text-muted">/night</span></h5>
                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                <span className="text-muted left"> {HotelInfo.hotel_id} reviews</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="m-3">
                                        <table className="table table-bordered">
                                            <tr className="pb-2">
                                                <th style={{fontSize:'13px',}}>City</th>
                                                <td style={{textAlign:'right', fontSize:'13px',}}>{HotelInfo.hotel_city}</td>
                                            </tr>
                                            <br />
                                            <tr className="pb-2">
                                                <th style={{fontSize:'13px',}}>State</th>
                                                <td style={{textAlign:'right', fontSize:'13px',}}>{HotelInfo.hotel_state}</td>
                                            </tr>
                                            <br />
                                            <tr className="pb-2">
                                                <th style={{fontSize:'13px',}}>Address</th>
                                                <td style={{textAlign:'right', fontSize:'13px',}}>{HotelInfo.hotel_address}</td>
                                            </tr>
                                        </table>
                                        <a className="btn btn-info btn-sm w-100" href={HotelInfo.hotel_location}><FontAwesomeIcon icon={faMapMarked} className="text-warning" /> Location</a>
                                        <br />
                                        <br />
                                        <h4><span style={{fontSize:'16px'}} className="text-muted">More About {HotelInfo.hotel_name}</span></h4>
                                        <p style={{fontSize:'13px'}} className="font-weight-light">{HotelInfo.hotel_desc}</p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="amenities" role="tabpanel" aria-labelledby="amenities-tab">
                                    <br />
                                    <div className="row">
                                        <h6 className="bold text-muted">Amenities at {HotelInfo.hotel_name}</h6>
                                    </div>
                                    <br />
                                    <ul className="row">
                                        {HotelFacilities.map((facility, index)=>(
                                            <li class="pt-3" style={{listStyle:'none'}}><b>{index+1}</b>. &nbsp;&nbsp;&nbsp;{facility.facility_name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="tab-pane active" id="rooms" role="tabpanel" aria-labelledby="avail-rooms">
                                    
                                    <div className="row">
                                        <h5 className="bold"><span style={{fontSize:'16px', fontWeight:'bold', marginTop:'20px'}} className="text-muted">Available Rooms</span></h5>
                                    </div>
                                    <Rooms data={HotelRooms}/>
                                    <br />
                                    <br /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="row nav nav-tabs m-0" id="myTab" role="tablist">
                    <li className="col-4 text-center nav-item" role="presentation">
                        <a className="nav-link active" id="avail-rooms" data-bs-toggle="tab" data-bs-target="#rooms" type="button" role="tab" aria-controls="contact" aria-selected="false">Rooms</a>
                    </li>
                    <li className="col-4 text-center nav-item" role="presentation">
                        <a className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">About</a>
                    </li>
                    <li className="col-4 text-center nav-item" role="presentation">
                        <a className="nav-link" id="amenities-tab" data-bs-toggle="tab" data-bs-target="#amenities" type="button" role="tab" aria-controls="amenities" aria-selected="false">Ameneties</a>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Hotel;
