import {React, useState, useEffect} from 'react';
import Header from './Header';
import HFooter from './Hfooter';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowsAltH, faUserFriends, faUser, faCalendarAlt, faMoneyBillWaveAlt, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Hotelicon from "./Hotelicon";
import Rooms from './Rooms';
import GURL from '../../GURL';
import axios from 'axios';
import Slider from "react-slick";


function JoinUs(props) {
    const history = useHistory()
    const handleSubmit = async (event) => {
        
        // document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active')
        event.preventDefault()
        const data = event.target;
        let req = {
            name: data.name.value,
            email: data.email.value,
            contact: data.contact.value,
            join_as: data.join_as.value,
        }
        // console.log(req)
        
        const res = await axios.post(`${GURL.BASEURL}joinUs`, req);
        if(res){
            const resp = res.data;
            alert('Your Request Is Sent Company will contact you soon !');
            history.push('./')
        }
    }

    return (
        <>
            <Header />
            <br /><br />
            <form action="javascript://" className="create-booking-form" onSubmit={handleSubmit}>
                <div className="container">     
                    {/* <h2>&nbsp;&nbsp;Fill the Form </h2> */}
                    <div className="row pt-1">
                        <div className="col-md-12 pb-3 col-12 form-group" style={{overflowY:'scroll'}} tabindex="-1">
                            <label for="adult"> Join as a</label>
                            <select className="form-control" name="join_as">
                                <option value="">Select Your Domain</option>
                                <option value="Hotelier">Hotelier</option>
                                <option value="Tour Operator">Tour Operator</option>
                                <option value="Adventure Company">Adventure Company</option>
                            </select>
                        </div>
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="children">Name</label>
                            <input autoComplete="off" type="text" required="" id="name" name="name" className="form-control" placeholder="Enter Your Name" />
                        </div>
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="children">Email</label>
                            <input autoComplete="off" type="text" required="" id="email" name="email" className="form-control" placeholder="Enter Your Email" />
                        </div>
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="children">Contact #</label>
                            <input autoComplete="off" type="text" required="" id="contact" name="contact" className="form-control" placeholder="Enter Your Contact No." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <button onClick={()=>document.getElementById('cbSubmit').style.backgroundColor = '#03b6fc'} type="submit" id="cbSubmit" className="btn btn-success w-100 btn-sm"><i className="fa fa-arrow-right"></i> Submit</button>
                        </div>
                    </div>
                    <div className="response mt-2 mb-3">
                        
                    </div>
                </div>
            </form>
            <HFooter />
        </>
    );
   
}

export default JoinUs;
