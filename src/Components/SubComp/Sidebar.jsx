import {React, useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.jpeg";
import {NavLink, useHistory} from "react-router-dom";
import GURL from '../../GURL';
import avatar from './../../images/avatar.png';
function Sidebar(props) {
    const history = useHistory();
    const logoutUser = () => {
        localStorage.removeItem('loggedInUser');
        history.push('../login');
    }
    const [UserInfo, SetUserInfo] = useState([]);

    useEffect( async ()=> {

        const userString = localStorage.getItem('loggedInUser');
        const user = JSON.parse(userString);
        SetUserInfo(user);

    }, [])
    const gotoaccount = () =>{
        history.push('./account');
    }
    return (
        <>

        <div className="offcanvas offcanvas-start w-75" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <br />
        <div className="offcanvas-header">
            <div id="offcanvasRightLabel" className="baby_title">
                <div className="row" onClick={()=>gotoaccount()}>
                    <div className="col-4">
                    <img src={UserInfo.app_user_image?`${GURL.SERVER_APP_IMAGES}userImages/${UserInfo.app_user_image}`:avatar} alt="logo" className="logo_control d-inline-block"/>
                    </div>
                    <div className="col-8">
                        <p style={{fontSize:14, marginTop:'0.6rem', marginLeft:'-0.5rem'}}>{UserInfo.app_user_name}</p>
                        <p style={{fontSize:11, marginTop:'-0.8rem', marginLeft:'-0.5rem'}}>{UserInfo.app_user_email}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="offcanvas-body">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                {/* <li><NavLink to="/listings">Hotel Listing</NavLink></li> */}
                {/* <li><NavLink to="/portal">Hotel Details</NavLink></li> */}
                <li><NavLink to="/hotelBookings">Hotel Bookings</NavLink></li>
                {/* <li><NavLink to="/booking_details">Booking Details</NavLink></li> */}
                {/* <li><NavLink to="tour_listings">Tour Listings</NavLink></li> */}
                {/* <li><NavLink to="/tour_details">Tour Details</NavLink></li> */}
                <li><NavLink to="/tourBookings">Tour Bookings</NavLink></li>
                {/* <li><NavLink to="/tour_bookings_details">Tour Booking Details</NavLink></li> */}
                {/* <li><NavLink to="/tour_company_details">Tour Company Details</NavLink></li> */}
                {/* <li><NavLink to="/adventure_listing">Adventure Listing</NavLink></li> */}
                {/* <li><NavLink to="/adventure_details">Adventure Details</NavLink></li> */}
                <li><NavLink to="/adventureBookings">Adventure Bookings</NavLink></li>
                <li><NavLink to="/jobs">Jobs</NavLink></li>
                {/* <li><NavLink to="/adventure_booking_details">Adventure Bookings Details</NavLink></li> */}
                {/* <li><NavLink to="/adventure_company_details">Adventure Company Details</NavLink></li> */}
                <li><NavLink to="/explorePlaces">Explore</NavLink></li>
                <li><NavLink to="/joinUs">Become A Member</NavLink></li>
                {/* <li><NavLink to="/places_details">Places Details</NavLink></li> */}
                {/* <li><NavLink to="/login">Login</NavLink></li> */}
                <li><a href="javascript://" onClick={()=>logoutUser()}>Logout</a></li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Sidebar;
