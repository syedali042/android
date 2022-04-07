import {React, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown, faArrowUp, faMoneyBillWaveAlt, faUser, faBed, faUserFriends, faCalendarAlt, faArrowsAltH, faMapMarker, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons';
import logo from "../../images/logo.jpeg";
import GURL from '../../GURL'
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
// import { DefaultPlayer as Video } from 'react-html5video';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import axios from 'axios';
import Counter from './Counter';
import HomeBackgroundFour from './HomeBackgroundFour'
function FeatureTours(props) {

    const history = useHistory();
    const [Tours, setTours] = useState([]);
    // const [MinRoomPrice, setMinRoomPrice] = useState([]);
    // const [HotelDetails, setHotelDetails] = useState([]);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        speed: 800,
        autoplay:true,
        autoplaySpeed:2000,
        rtl:true,
    };
    useEffect(async()=>{
        try{
                const res = await axios.post(`${GURL.BASEURL}getFeaturedTours`, {data:'1'});   
                console.log(res.data.data);
                setTours(res.data.data);
                // setTours(res.data.data);
                document.getElementsByClassName('loading-content-spinner')[0].classList.toggle('d-none')
            
        }catch(err){
            console.log(err);
        }
    }, [])

    return (
        <>
        <div className="container ">
            <div className="row pb-2 pt-1">
                <div className="col-12 third">
                    <div className="left_text">
                        <hr/><span style={{fontWeight:'600', fontSize:'12px', color:'#011a42'}}>Featured Tours</span>
                    </div>
                </div>
            </div>
            {/* <HomeBackgroundFour /> */}
            {/* <center>
                <span className="loading-content-spinner fas fa-spinner fa-3x fa-spin mt-3 mb-3"></span>
            </center> */}
            <div className="row bg-secondary ml-0 mr-0 pt-3 pb-3" >
                <div className="col-12">
            <Slider style={{maxWidth:'100%', overflowX:'hidden', margin:0, pad:0}} {...settings}>
            {Tours?Tours.map((feature)=>{
                console.log(feature)
            return (
                <>
                <div className="row">
                    <div className="col">
                        <div className="card" style={{border:'2px solid #e2e2e2'}}>
                            <img className="card-img-top" height="150px" src={`${GURL.SERVER_IMAGES}/tourImages/${feature.t_img[0]}`?`${GURL.SERVER_IMAGES}/tourImages/${feature.t_img[0]}`:'N/A'} alt="plain" />
                            <div className="card-body" style={{padding:'0.3rem'}}>
                            <h6 className="text-primary p-2">{feature.tour.tour_title?feature.tour.tour_title:'N/A'}</h6>
                            <div className="row" style={{fontSize:'15px'}}>
                                <div className="col-5">
                                    <span className="text-default" style={{float:'left', fontSize:'10px'}}><FontAwesomeIcon icon={faCalendarAlt} className="text-success" />&nbsp; {feature.tour.starting_from?feature.tour.starting_from:'N/A'}</span>
                                </div>
                                <div className="col-2 text-warning">
                                    <center>
                                    <FontAwesomeIcon icon={faArrowsAltH} className="text-warning" />
                                    </center>
                                </div>
                                <div className="col-5">
                                    <span className="text-default" style={{float:'right', fontSize:'10px'}}><FontAwesomeIcon icon={faCalendarAlt} className="text-success" />&nbsp; {feature.tour.ending_at?feature.tour.ending_at:'N/A'}</span>
                                </div>
                            </div>
                            <div className="row" style={{fontSize:'15px'}}>
                                <div className="col-5">
                                    <div className="text-default" style={{float:'left', fontSize:'10px'}}><FontAwesomeIcon icon={faUserFriends} className="text-success" /> Couple</div>
                                    <br />
                                    <div className="text-default" style={{textAlign:'left', fontSize:'12px'}}> Rs.<span className="text-success" style={{fontSize:'16px'}}>{feature.tour.charges_per_couple?feature.tour.charges_per_couple:'N/A'}</span>/-</div>
                                </div>
                                <div className="col-2 text-warning">
                                    <center>
                                    <FontAwesomeIcon icon={faMoneyBillWaveAlt} className="text-warning" />
                                    </center>
                                </div>
                                <div className="col-5">
                                    <div className="text-default" style={{float:'left', fontSize:'10px'}}><FontAwesomeIcon icon={faUser} className="text-success" /> Person &nbsp;&nbsp;</div>
                                    <br />
                                    <div className="text-default" style={{textAlign:'left', fontSize:'12px'}}> Rs.<span className="text-success" style={{fontSize:'16px'}}>{feature.tour.charges_per_person?feature.tour.charges_per_person:'N/A'}</span>/-</div>
                                </div>
                            </div>
                                <a href="javascript://" onClick={() => history.push(`../tour_bookings/${feature.tour.tour_id}`)} className="btn btn-primary btn-sm mt-2 d-inline-block" style={{width:'47%',fontSize:'10px'}}>Book Now</a>
                                <a href="javascript://" onClick={() => history.push(`../tour_details/${feature.tour.tour_id}`)} className="btn btn-danger btn-sm mt-2 d-inline-block" style={{width:'47%', float:'right',fontSize:'10px'}}>Get Details</a>
                            </div>
                            <Counter date={feature.ending_date}/>
                        </div>
                    </div>
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

export default FeatureTours;
