import React from 'react';
import Header from './SubComp/Header';
import logo from '../images/logo.jpeg';

function Notification_Details() {
    return (
        <>
        <Header />
            <section className="notification_details">
                <div className="container">
                    <div className="row">
                        <div className="col mt-4">
                            <h3>Bookings</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-3">
                            <div className="notification_card">
                                <div className="notification_card_left">
                                    <img src={logo} alt="logo" />
                                </div>
                                <div className="notification_card_right">
                                    <h4>Emilio Mcdonnell</h4>
                                    <p>Crown Elite Room 27, USA</p>
                                    <span>Jun 27 - Jul 05, 2019</span>
                                </div>
                            </div>
                            <div className="notification_card_details">
                                <ul>
                                    <li>Adult: 02</li>
                                    <li>Children: 01</li>
                                    <li>Infant: 01</li>
                                </ul>
                                <a href="#">View Full Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-3">
                            <div className="notification_card">
                                <div className="notification_card_left">
                                    <img src={logo} alt="logo" />
                                </div>
                                <div className="notification_card_right">
                                    <h4>Emilio Mcdonnell</h4>
                                    <p>Crown Elite Room 27, USA</p>
                                    <span>Jun 27 - Jul 05, 2019</span>
                                </div>
                            </div>
                            <div className="notification_card_details">
                                <ul>
                                    <li>Adult: 02</li>
                                    <li>Children: 01</li>
                                    <li>Infant: 01</li>
                                </ul>
                                <a href="#">View Full Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-3">
                            <div className="notification_card">
                                <div className="notification_card_left">
                                    <img src={logo} alt="logo" />
                                </div>
                                <div className="notification_card_right">
                                    <h4>Emilio Mcdonnell</h4>
                                    <p>Crown Elite Room 27, USA</p>
                                    <span>Jun 27 - Jul 05, 2019</span>
                                </div>
                            </div>
                            <div className="notification_card_details">
                                <ul>
                                    <li>Adult: 02</li>
                                    <li>Children: 01</li>
                                    <li>Infant: 01</li>
                                </ul>
                                <a href="#">View Full Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-3">
                            <div className="notification_card">
                                <div className="notification_card_left">
                                    <img src={logo} alt="logo" />
                                </div>
                                <div className="notification_card_right">
                                    <h4>Emilio Mcdonnell</h4>
                                    <p>Crown Elite Room 27, USA</p>
                                    <span>Jun 27 - Jul 05, 2019</span>
                                </div>
                            </div>
                            <div className="notification_card_details">
                                <ul>
                                    <li>Adult: 02</li>
                                    <li>Children: 01</li>
                                    <li>Infant: 01</li>
                                </ul>
                                <a href="#">View Full Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Notification_Details;
