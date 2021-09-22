import React from 'react';
import Psd3caro from "./Psd3caro";
import Hotelicon from "./Hotelicon";
import FirstPartTabs from './FirstPartTabs';
import Rooms from './Rooms';

function Tabs() {
    return (
        <>
            <section className="myTabs">
            <div className="container p-0">
            <div className="row">
                <div className="col-12">
                    <Psd3caro />
                    <FirstPartTabs />
                </div>
            </div>
                    <div className="row">
                        <div className="col">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <Hotelicon />
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
                            <div className="tab-pane fade" id="avail" role="tabpanel" aria-labelledby="avail-tab"></div>
                            <div className="tab-pane fade" id="rooms" role="tabpanel" aria-labelledby="avail-rooms">
                            <Rooms />
                            </div>
                        </div>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Ameneties</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Nearby</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="avail-tab" data-bs-toggle="tab" data-bs-target="#avail" type="button" role="tab" aria-controls="contact" aria-selected="false">Avail</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="avail-rooms" data-bs-toggle="tab" data-bs-target="#rooms" type="button" role="tab" aria-controls="contact" aria-selected="false">Rooms Listings</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Tabs;
