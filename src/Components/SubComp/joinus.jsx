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
    const handleHotelSubmit = async (event) => {
        // console.log(event.target);
        console.log(document.getElementById('hotel-joining-form').elements);
        const elements = document.getElementById('hotel-joining-form').elements;
        var data = {};
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            console.log(element.name)
            if(element.name!==''){
                data[element.name]=element.value;
            }
        }
        const res = await axios.post(`${GURL.BASEURL}joinHotelier`, data);

        if(res.data.status==true){
            alert('Your Request Is Received You\'ll Get Touched By Authorities Soon !');
            history.push('/')
        }else{
            alert('Account is already exist with this email, Try with another email !');
        }
    }




    const handleTourSubmit = async (event) => {
        // console.log(event.target);
        console.log(document.getElementById('tour-joining-form').elements);
        const elements = document.getElementById('tour-joining-form').elements;
        var data = {};
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            console.log(element.name)
            if(element.name!==''){
                data[element.name]=element.value;
            }
        }
        console.log(data);
        const res = await axios.post(`${GURL.BASEURL}joinTourCompany`, data);

        if(res.data.status==true){
            alert('Your Request Is Received You\'ll Get Touched By Authorities Soon !');
            history.push('/')
        }else{
            alert('Account is already exist with this email, Try with another email !');
        }
    }


    const handleAdventureSubmit = async (event) => {
        // console.log(event.target);
        console.log(document.getElementById('adventure-joining-form').elements);
        const elements = document.getElementById('adventure-joining-form').elements;
        var data = {};
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            console.log(element.name)
            if(element.name!==''){
                data[element.name]=element.value;
            }
        }
        console.log(data);
        const res = await axios.post(`${GURL.BASEURL}joinAdventureCompany`, data);

        if(res.data.status==true){
            alert('Your Request Is Received You\'ll Get Touched By Authorities Soon !');
            history.push('/');
        }else{
            alert('Account is already exist with this email, Try with another email !');
        }
    }

    const handleChange = (event) =>{
        if(event.target.value=='Hotelier'){
            document.getElementById('hotel-joining-form').style.display='block';
            document.getElementById('tour-joining-form').style.display='none';
            document.getElementById('adventure-joining-form').style.display='none';
        }else if(event.target.value=='Tour Operator'){
            document.getElementById('hotel-joining-form').style.display='none';
            document.getElementById('tour-joining-form').style.display='block';
            document.getElementById('adventure-joining-form').style.display='none';
        }else if(event.target.value=='Adventure Company'){
            document.getElementById('hotel-joining-form').style.display='none';
            document.getElementById('tour-joining-form').style.display='none';
            document.getElementById('adventure-joining-form').style.display='block';
        }else{
            document.getElementById('hotel-joining-form').style.display='none';
            document.getElementById('tour-joining-form').style.display='none';
            document.getElementById('adventure-joining-form').style.display='none';
        }
    }

    return (
        <>
            <Header />
            <br /><br />
            <div>
            <div className="container position-relative" style={{overflowY:'scroll'}}>
                <div className="col-md-12 pb-3 col-12 form-group" >
                    <label for="adult"> Join as a</label>
                    <select className="form-control" name="join_as" onChange={handleChange}>
                        <option value="">Select Your Domain</option>
                        <option value="Hotelier">Hotelier</option>
                        <option value="Tour Operator">Tour Operator</option>
                        <option value="Adventure Company">Adventure Company</option>
                    </select>
                </div>
            <form action="javascript://" id="hotel-joining-form" style={{display:'none'}}  onSubmit={handleHotelSubmit}>
                <div >     
                    {/* <h2>&nbsp;&nbsp;Fill the Form </h2> */}
                    <div className="row pt-1">
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="children">Name</label>
                            <input autoComplete="off" type="text" required="" id="name" name="owner_username" className="form-control" placeholder="Enter Your Name" />
                        </div>
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="children">Email</label>
                            <input autoComplete="off" type="text" required="" id="email" name="owner_email" className="form-control" placeholder="Enter Your Email" />
                        </div>
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="children">Contact #</label>
                            <input autoComplete="off" type="text" required="" id="contact" name="owner_contact" className="form-control" placeholder="Enter Your Contact No." />
                        </div>
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="children">Address</label>
                            <textarea name="owner_address" id="" className="form-control"></textarea>
                        </div>
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="children">Choose a Strong Password</label>
                            <input name="owner_password" id="" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <button onClick={()=>document.getElementById('cbSubmit').style.backgroundColor = '#03b6fc'} type="submit" id="cbSubmit" className="btn btn-success w-100 btn-sm"><i className="fa fa-arrow-right"></i> Submit</button>
                        </div>
                    </div>
                </div>
            </form>
            <form action="javascript://" id="tour-joining-form" style={{display:'none'}}  onSubmit={handleTourSubmit}>
                <div >
                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Company Name</label>
                            <input type="text" name="company_name" className="company_name form-control"/>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Company Contact 1</label>
                            <input type="text" name="company_contact_one" className="company_contact_one form-control"/>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Company Contact 2</label>
                            <input type="text" name="company_contact_two" className="company_contact_two form-control"/>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Company Email</label>
                            <input type="text" name="company_email" className="company_email form-control"/>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Company Address</label>
                            <input type="text" name="company_address" className="company_address form-control"/>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Company Operates In</label>
                            <input type="text" name="company_operates_in" className="company_operates_in form-control"/>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Operate National</label>
                            <select name="operate_national" id="operate_national" className="operate_national form-control">
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Operate International</label>
                            <select name="operate_international" id="operate_international" className="operate_international form-control">
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Office Location</label>
                            <input type="text" name="office_location" className="office_location form-control"/>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Working Since</label>
                            <input type="text" name="working_since" className="working_since form-control"/>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <button onClick={()=>document.getElementById('cbSubmit').style.backgroundColor = '#03b6fc'} type="submit" id="cbSubmit" className="btn btn-success w-100 btn-sm"><i className="fa fa-arrow-right"></i> Submit</button>
                        </div>
                    </div>

                </div>
            </form>
            <form action="javascript://" id="adventure-joining-form" style={{display:'none'}}  onSubmit={handleAdventureSubmit}>
                <div >
                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Company Name</label>
                            <input type="text" name="company_name" className="company_name form-control" />
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Company Contact </label>
                            <input type="text" name="company_contact" className="company_contact form-control" />
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Company Email</label>
                            <input type="email" name="company_email" className="company_email form-control" />
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Company City</label>
                            <input type="text" name="company_city" className="company_city form-control" />
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Company Address</label>
                            <input type="text" name="company_address" className="company_address form-control" />
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Office Location</label>
                            <input type="text" name="company_location" className="company_location form-control" />
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Dealing Adventures</label>
                            <textarea name="dealing_adventures" className="dealing_adventures form-control"></textarea>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <label>Company Description</label>
                            <textarea name="company_desc" className="company_desc form-control"></textarea>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-md-12">
                            <button onClick={()=>document.getElementById('cbSubmit').style.backgroundColor = '#03b6fc'} type="submit" id="cbSubmit" className="btn btn-success w-100 btn-sm"><i className="fa fa-arrow-right"></i> Submit</button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            </div>
            <HFooter />
        </>
    );
}
export default JoinUs;
