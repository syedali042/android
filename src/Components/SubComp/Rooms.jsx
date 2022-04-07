import {React, useEffect, useState} from 'react';
import axios from 'axios';
import GURL from '../../GURL'
import { useHistory } from "react-router-dom";
import plain from "../../images/plain.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons";

function Rooms(props) {
    const history = useHistory();
    const rooms = props.data;

    const createBooking = (id) => {
        history.push(`../booking/${id}`);
    }
    return (
        <>
            <section className="myRooms pt-3">
                <div className="">
                    <div className="row">
                        {rooms.map((room)=>(
                        <div className="col-6 pb-1">
                            <div className="card">
                                <img className="card-img-top" style={{height:'100px'}} src={`${GURL.SERVER_IMAGES}/roomImages/${room.room_title_img}`} alt="plain" />
                                <div className="card-body" style={{padding:'0.3rem'}}>
                                    <p style={{fontSize: '12px', fontWeight: '300', marginTop:'-5%'}} className="d-inline-block text-primary pt-2">Room # {room.room_no}</p>
                                    <p style={{fontSize: '12px', fontWeight: '300', float:'right'}} className="d-inline-block text-subtitle pt-1"><span className="rounded p-1" style={{backgroundColor:'rgb(0, 35, 63)', fontSize:'8px' , color:'#fff'}}>{room.room_type}</span></p>
                                <h6>Rs.{room.room_price}<span className="text-muted" style={{fontSize: '14px'}}>/night</span></h6>
                                <a href="javascript://" onClick={()=>createBooking(room.room_id)} className="card-link" style={{fontSize:'10px'}}>Book Now</a>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Rooms;
