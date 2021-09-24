import {React, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import logo from "../../images/logo.jpeg";
import GURL from '../../GURL'
import { useHistory } from "react-router-dom";
import HomeBackgroundFive from './HomeBackgroundFive'
function Explore() {
    
    const history = useHistory();

    const showMore = () => {
        document.getElementById('hide_ad').style.display = 'block';
        // document.getElementsByClassName('tv')[0].style.height = '25rem';
        document.getElementById('show_more').style.display = 'none';
        document.getElementById('show_less').style.display = 'block';
    }
    
    const showLess = () => {
        document.getElementById('hide_ad').style.display = 'none';
        // document.getElementsByClassName('tv')[0].style.height = '18rem';
        document.getElementById('show_more').style.display = 'block';
        document.getElementById('show_less').style.display = 'none';
    }

    const exploreAdventures = (text) => {
        history.push(`./adventure_listing/${text}`);
    }

    return (
        <>
                <div className="container">
                    <div className="row pb-3">
                        <div className="col-12 third">
                            <div className="left_text">
                                <hr/><span style={{fontWeight:'600', fontSize:'12px', color:'#011a42'}}>Explore Adventures</span>
                            </div>
                        </div>
                    </div>
                    {/* <HomeBackgroundFive /> */}
                    <div className="row bg-custom pt-3">
                        <div className="col-4 p-0" onClick={()=>exploreAdventures('Rafting')}>
                            <div className="card">
                            <div className="card-body text-center">
                                <img className="card-img mb-3" src={`${GURL.SERVER_APP_IMAGES}/places/adventures/rafting.png`} id="round"/>
                                <p style={{fontSize:'12px'}} className="card-subtitle mb-2 font-weight-bold">Rafting</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-4 p-0" onClick={()=>exploreAdventures('Camping')}>
                        <div className="card ">
                            <div className="card-body text-center">
                            <img className="card-img mb-3" src={`${GURL.SERVER_APP_IMAGES}/places/adventures/camping.png`} id="round"/>
                                <p style={{fontSize:'12px'}} className="card-subtitle mb-2 font-weight-bold">Camping</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-4 p-0" onClick={()=>exploreAdventures('Skiing')}>
                        <div className="card">
                            <div className="card-body text-center">
                            <img className="card-img mb-3" src={`${GURL.SERVER_APP_IMAGES}/places/adventures/skiing.png`} id="round"/>
                                <p style={{fontSize:'12px'}} className="card-subtitle mb-2 font-weight-bold">Skiing</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row bg-custom">

                        <div className="col-4 p-0" onClick={()=>exploreAdventures('Hiking')}>
                            <div className="card">
                            <div className="card-body text-center">
                                <img className="card-img mb-3" src={`${GURL.SERVER_APP_IMAGES}/places/adventures/hiking.png`} id="round"/>
                                <p style={{fontSize:'12px'}} className="card-subtitle mb-2 font-weight-bold">Hiking</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-4 p-0" onClick={()=>exploreAdventures('Chairlift')}>
                        <div className="card ">
                            <div className="card-body text-center">
                            <img className="card-img mb-3" src={`${GURL.SERVER_APP_IMAGES}/places/adventures/chairlift.png`} id="round"/>
                                <p style={{fontSize:'12px'}} className="card-subtitle mb-2 font-weight-bold">Chair Lift</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-4 p-0" onClick={()=>exploreAdventures('Rappling')}>
                        <div className="card">
                            <div className="card-body text-center">
                            <img className="card-img mb-3" src={`${GURL.SERVER_APP_IMAGES}/places/adventures/rappling.png`} id="round"/>
                                <p style={{fontSize:'12px'}} className="card-subtitle mb-2 font-weight-bold">Rappling</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'block'}} id="hide_ad">
                    <div className="row bg-custom pb-3">
                        <div className="col-4 p-0" onClick={()=>exploreAdventures('Jet-Skiing')}>
                            <div className="card">
                            <div className="card-body text-center">
                                <img className="card-img mb-3" src={`${GURL.SERVER_APP_IMAGES}/places/adventures/jet-skiing.png`} id="round"/>
                                <p style={{fontSize:'12px'}} className="card-subtitle mb-2 font-weight-bold">Jet Skiing</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-4 p-0" onClick={()=>exploreAdventures('Para-Gliding')}>
                        <div className="card ">
                            <div className="card-body text-center">
                            <img className="card-img mb-3" src={`${GURL.SERVER_APP_IMAGES}/places/adventures/paragliding.png`} id="round"/>
                                <p style={{fontSize:'12px'}} className="card-subtitle mb-2 font-weight-bold">Para Gliding</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-4 p-0" onClick={()=>exploreAdventures('Zip-Line')}>
                        <div className="card">
                            <div className="card-body text-center">
                            <img className="card-img mb-3" src={`${GURL.SERVER_APP_IMAGES}/places/adventures/zipline.png`} id="round"/>
                                <p style={{fontSize:'12px'}} className="card-subtitle mb-2 font-weight-bold">Zip Line</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <center>
                            <FontAwesomeIcon icon={faArrowDown} style={{marginTop: 20,fontSize: '16px',color:'#000',display: 'none'}} onClick={showMore} id="show_more"/> 
                            <FontAwesomeIcon icon={faArrowUp} style={{marginTop: 20,fontSize: '16px',color:'#000',display: 'block'}} onClick={showLess} id="show_less"/> 
                            </center>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Explore;
