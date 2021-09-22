import {React, useEffect, useState} from 'react';
import avatar from './../images/avatar.png';
import Header from './SubComp/Header';
import Footer from './SubComp/Hfooter';
import { useHistory } from 'react-router-dom';
import GURL from '../GURL';

function Account() {
    const history = useHistory();
    const logoutUser = () => {
        localStorage.removeItem('loggedInUser');
        history.push('./login');
    }
    setTimeout(function(){
        document.getElementsByClassName('loading-overlay')[0].classList.remove('is-active');
    }, 1000);
    const [UserInfo, SetUserInfo] = useState([]);

    useEffect( async ()=> {

        const userString = localStorage.getItem('loggedInUser');
        const user = JSON.parse(userString);
        SetUserInfo(user);

    }, [])
    return (
        <>
            <Header />
            <div className="loading-overlay is-active">
                <img className="profile_img infinity-loop" src={window?`${GURL.SERVER_IMAGES}logo-n.png`:null} style={{width:'65px'}} alt="profile_img"/>    
            </div>
            <section className="profile">
                <br />
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                        <img className="profile_img" src={UserInfo.app_user_image?`${GURL.SERVER_APP_IMAGES}userImages/${UserInfo.app_user_image}`:avatar} alt="profile_img"/>
                        <h5>{UserInfo.app_user_name}</h5>
                        <h3>{UserInfo.app_user_email}</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <ul>
                                <li onClick={()=>history.push('./EditProfile')}><i style={{color:'#06062B'}} className="fas fa-user"></i>Edit Profile<i className="fas fa-arrow-circle-right text-secondary"></i></li>
                                <li onClick={()=>history.push('./hotelBookings')}><i style={{color:'#06062B'}} className="fas fa-bed"></i>Hotel Bookings<i className="fas fa-arrow-circle-right text-secondary"></i></li>
                                <li onClick={()=>history.push('./adventureBookings')}><i style={{color:'#06062B'}} className="fas fa-swimmer"></i>Adventure Bookings<i className="fas fa-arrow-circle-right text-secondary"></i></li>
                                <li onClick={()=>history.push('./tourBookings')}><i style={{color:'#06062B'}} className="fas fa-paper-plane"></i>Tour Bookings<i className="fas fa-arrow-circle-right text-secondary"></i></li>
                                <li>&nbsp;<a className="text-decoration-none text-dark" href="https://www.privacy.easystay.com.pk/privacy.pdf"><i style={{color:'#06062B'}} className="fas fa-info"></i>&nbsp;Terms, Privacy & Policy<i className="fas fa-arrow-circle-right text-secondary"></i></a></li>
                                <li onClick={()=>logoutUser()}><i style={{color:'#06062B'}} className="fas fa-lock"></i>Logout<i className="fas fa-arrow-circle-right text-secondary"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Account;
