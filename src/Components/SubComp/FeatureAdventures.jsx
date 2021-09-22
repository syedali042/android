import {React, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown, faArrowUp, faMoneyBillWaveAlt, faUser, faBed, faUserFriends, faCalendarAlt, faArrowsAltH, faMapMarker, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons';
import logo from "../../images/logo.jpeg";
import GURL from '../../GURL'
import { useHistory } from "react-router-dom";
// import { DefaultPlayer as Video } from 'react-html5video';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import axios from 'axios';
import Slider from "react-slick";
import {faMapMarkerAlt, faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import Counter from './Counter';
import HomeBackgroundSix from './HomeBackgroundSix'

function FeatureAdventures(props) {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
    };
    const history = useHistory();
    const [Adventures, setAdventures] = useState([]);
    // const [MinRoomPrice, setMinRoomPrice] = useState([]);
    // const [HotelDetails, setHotelDetails] = useState([]);
    useEffect(async()=>{
        try{
                const res = await axios.post(`${GURL.BASEURL}getFeaturedAdventures`, {data:'1'});   
                console.log(res.data.data);
                setAdventures(res.data.data);
                // setAdventures(res.data.data);
                document.getElementsByClassName('loading-content-spinner')[0].classList.toggle('d-none')
            
        }catch(err){
            console.log(err);
        }
    }, [])

    return (
        <>
        <div className="container">
            <div className="row pb-3">
                <div className="col-12 third">
                    <div className="left_text">
                        <hr/><span style={{fontWeight:'600', fontSize:'12px', color:'#011a42'}}>Featured Adventures</span>
                    </div>
                </div>
            </div>
            <center>
                {/* <span className="loading-content-spinner fas fa-spinner fa-3x fa-spin mt-3 mb-3"></span> */}
            </center>
            {/* <HomeBackgroundSix /> */}
            <div className="row ml-0 mr-0 pb-3" >
                <div className="col-12">
            <Slider style={{maxWidth:'100%', overflowX:'hidden', margin:0, pad:0}} {...settings}>
            {Adventures?Adventures.map((feature)=>{
            return (
                <>
                    <div className="bg-white row m-0 p-0 d-flex align-items-center justify-content-center" style={{borderRadius:'5px'}}>
                        <div className="col-12 m-0 p-0">
                            <img className="m-0 p-0 mb-2" src={`${GURL.SERVER_IMAGES}/adventureImages/${feature.t_img[0]}`} alt="plain" style={{borderRadius:'5px', height:'130px', width:'100%'}} />
                        </div>
                        <div className="col-12 m-0 p-0">
                            <div className="">
                                <div className="card-body" style={{padding:'0.3rem'}}>
                                {/* <a href="#" class="card-link" style={{fontSize:'10px'}}>Featured</a> */}
                                {/* <a href="#" class="card-link sweet" style={{fontSize:'10px',marginLeft:'0.3rem'}}>Top Rated</a> */}
                                <h6 style={{marginBottom:'-3%'}}>Rs.{feature.adventure.adventure_charges}<span className="text-muted" style={{fontSize: '14px'}}>/person</span></h6>
                                <p style={{fontSize: '12px', fontWeight: 'bold', marginBottom:'-0.5%'}} className="text-muted pt-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-warning" /> &nbsp;{feature.adventure.adventure_city}</p>
                                <p className="text-subtitle" style={{fontSize: '10px', fontWeight: '400'}}><FontAwesomeIcon icon={faMapMarkedAlt} className="text-warning" /> &nbsp;Mountain Retreat Room</p>
                                <a href="javascript://" onClick={()=>history.push('../adventure_booking/'+feature.adventure.adventure_id)} class="btn btn-primary btn-sm card-link d-inline-block" style={{width:'45%' ,fontSize:'10px', marginTop:'-5%'}}>Book Now</a>
                                <a href="javascript://" onClick={()=>history.push('../adventure_details/'+feature.adventure.adventure_id)} class="btn btn-info text-white btn-sm card-link d-inline-block" style={{width:'45%' ,fontSize:'10px', marginTop:'-5%'}}>Details</a>
                                </div>
                            </div>
                        </div>                            
                        <Counter date={feature.ending_date}/>
                    </div>
                </>
            )
            }):null}
            </Slider>
            </div>
            </div>
        </div>
        </>
    )
}

export default FeatureAdventures;
