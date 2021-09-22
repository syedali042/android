import {React, useState, useEffect} from 'react'
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowsAltH, faUserFriends, faUser, faCalendarAlt, faMoneyBillWaveAlt} from "@fortawesome/free-solid-svg-icons";
import Tour_Heading from './Tour_Heading';
import GURL from '../../GURL'


const DynamicTours = (props) => {

    const tours = props.NewTours;  
    // console.log(props.tours);
    
    return (
        <>
            {tours.map((tour)=>(
                <>
            <div className="row">
                <div className="col">
                    <div className="card" style={{border:'2px solid #e2e2e2'}}>
                        <img className="card-img-top" height="200px" src={`${GURL.SERVER_IMAGES}/tourImages/${tour.t_img[0]}`} alt="plain" />
                        <div className="card-body" style={{padding:'0.3rem'}}>
                        <h6 className="text-primary p-2">{tour.tour_title}</h6>
                        <div className="row" style={{fontSize:'15px'}}>
                            <div className="col-5">
                                <span className="text-default" style={{float:'left', fontSize:'12px'}}><FontAwesomeIcon icon={faCalendarAlt} className="text-success" />&nbsp; {tour.starting_from}</span>
                            </div>
                            <div className="col-2 text-warning">
                                <center>
                                <FontAwesomeIcon icon={faArrowsAltH} className="text-warning" />
                                </center>
                            </div>
                            <div className="col-5">
                                <span className="text-default" style={{float:'', fontSize:'12px'}}><FontAwesomeIcon icon={faCalendarAlt} className="text-success" />&nbsp; {tour.ending_at}</span>
                            </div>
                        </div>
                        <div className="row" style={{fontSize:'15px'}}>
                            <div className="col-5">
                                <div className="text-default" style={{float:'left', fontSize:'10px'}}><FontAwesomeIcon icon={faUserFriends} className="text-success" /> Couple Charges</div>
                                <div className="text-default" style={{textAlign:'left', fontSize:'12px'}}> Rs.<span className="text-success" style={{fontSize:'16px'}}>{tour.charges_per_couple}</span>/-</div>
                            </div>
                            <div className="col-2 text-warning">
                                <center>
                                <FontAwesomeIcon icon={faMoneyBillWaveAlt} className="text-warning" />
                                </center>
                            </div>
                            <div className="col-5">
                                <div className="text-default" style={{float:'left', fontSize:'10px'}}><FontAwesomeIcon icon={faUser} className="text-success" /> Person Charges &nbsp;&nbsp;</div>
                                <div className="text-default" style={{textAlign:'left', fontSize:'12px'}}> Rs.<span className="text-success" style={{fontSize:'16px'}}>{tour.charges_per_person}</span>/-</div>
                            </div>
                        </div>
                        <a href="#" className="card-link mt-2" style={{fontSize:'10px'}}>Details</a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            </>
            ))}
        </>
    );

}

export default DynamicTours;