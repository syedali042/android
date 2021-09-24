import {React, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown, faArrowUp, faMoneyBillWaveAlt, faUser, faBed, faUserFriends, faCalendarAlt, faArrowsAltH, faMapMarker, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons';
import logo from "../../images/logo.jpeg";
import GURL from '../../GURL'
import { useHistory } from "react-router-dom";
// import { DefaultPlayer as Video } from 'react-html5video';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Slider from "react-slick";
import axios from 'axios';
import Counter from './Counter';
import HomeBackgroundThree from './HomeBackgroundThree';
function Promotions(props) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
    };
    const history = useHistory();
    const [Hotels, setHotels] = useState([]);
    // const [MinRoomPrice, setMinRoomPrice] = useState([]);
    // const [HotelDetails, setHotelDetails] = useState([]);
    useEffect(async()=>{
        try{
                const res = await axios.post(`${GURL.BASEURL}getFeaturedHotels`, {data:'1'});   
                console.log(res.data.data);
                setHotels(res.data.data);
                // setHotels(res.data.data);
                document.getElementsByClassName('loading-content-spinner')[0].classList.toggle('d-none')
            
        }catch(err){
            console.log(err);
        }
    }, [])

    const getFeatureHotel = (id) => {
        history.push(`../portal/${id}`)
    }

    return (
        <>
        <div className="container">
            <div className="row pb-3">
                <div className="col-12 third">
                    <div className="left_text">
                        <hr/><span style={{fontWeight:'600', fontSize:'12px', color:'#011a42'}}>Featured Hotels</span>
                    </div>
                </div>
            </div>
            <center>
                {/* <span className="loading-content-spinner d-none fas fa-spinner fa-3x fa-spin mt-3 mb-3"></span> */}
            </center>
            <div className="row ml-0 mr-0 pt-3 pb-3 bg-secondary" >
                <div className="col-12">
            <Slider style={{maxWidth:'100%', overflowX:'hidden', margin:0, pad:0}} {...settings}>
            {Hotels?Hotels.map((feature)=>{
                // const video = `${GURL.SERVER_APP_IMAGES}/places/tourism/videos/${feature.featured_video}`
                // const image = `${GURL.SERVER_APP_IMAGES}/places/tourism/videos/${feature.featured_image}`
            return (
                <>
            <div className="card" style={{border:'2px solid #e2e2e2'}}>
                <img className="card-img-top" style={{height:'170px'}} src={`${GURL.SERVER_IMAGES}/hotelImages/${feature?feature.hotel.hotel_image:null}`} alt="plain1" />
                <div className="card-body" style={{padding:'0.5rem'}}>
                <h6 className="text-dark" style={{fontSize:'12px'}}><FontAwesomeIcon icon={faBed} className="text-primary" /> {feature?feature.hotel.hotel_name:null}</h6>
                <p className="text-default" style={{fontSize:'11px', marginTop:'-5px'}}><FontAwesomeIcon icon={faMapMarker} className="text-success" /> {feature?feature.hotel.hotel_address:null}</p>
                <div className="row" style={{fontSize:'15px', marginTop:'-15px', marginBottom:5}}>
                    <div className="col-6">
                        <div className="text-default" style={{float:'left', fontSize:'11px'}}><FontAwesomeIcon icon={faMoneyBillWaveAlt} className="text-warning" /> Starting From</div>
                    </div>              
                    <div className="col-6">
                        <div className="text-default" style={{textAlign:'right', fontSize:'12px'}}> Rs.<span className="text-success" style={{fontSize:'12px'}}> {feature?feature.min_room_price.room_price:null}</span>/-</div>
                    </div>      
                </div>
                    <a href="javascript://" onClick={() => getFeatureHotel(feature.hotel.hotel_id)} className="btn btn-info text-white btn-sm w-100" style={{fontSize:'11px'}}>Details</a>
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

export default Promotions;
