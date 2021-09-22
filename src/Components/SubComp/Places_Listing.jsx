import React from 'react';
import plain from "../../images/plain.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons";

function Places_Listing() {
    return (
        <>
            <section className="myCards">
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <div className="card">
                            <img className="card-img-top" src={plain} alt="plain" />
                            <div className="card-body" style={{padding:'0.3rem'}}>
                            {/* <a href="#" class="card-link" style={{fontSize:'10px'}}>Featured</a> */}
                            {/* <a href="#" class="card-link sweet" style={{fontSize:'10px',marginLeft:'0.3rem'}}>Top Rated</a> */}
                            <h6 className="text-muted pt-2">Aparements</h6>
                            <h6 className="text-subtitle" style={{fontSize: '12px', fontWeight: '600'}}>Mountain Retreat Room</h6>
                            <h5>$240<span className="text-muted" style={{fontSize: '14px'}}>/night</span></h5>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <span style={{fontSize: '14px',paddingLeft: '3px'}}>14k reviews</span>
                            <a href="#" class="card-link" style={{fontSize:'10px'}}>Details</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                    <div className="col">
                        <div className="card">
                            <img className="card-img-top" src={plain} alt="plain" />
                            <div className="card-body" style={{padding:'0.3rem'}}>
                            {/* <a href="#" class="card-link" style={{fontSize:'10px'}}>Featured</a> */}
                            {/* <a href="#" class="card-link sweet" style={{fontSize:'10px',marginLeft:'0.3rem'}}>Top Rated</a> */}
                            <h6 className="text-muted pt-2">Aparements</h6>
                            <h6 className="text-subtitle" style={{fontSize: '12px', fontWeight: '600'}}>Mountain Retreat Room</h6>
                            <h5>$240<span className="text-muted" style={{fontSize: '14px'}}>/night</span></h5>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <span style={{fontSize: '14px',paddingLeft: '3px'}}>14k reviews</span>
                            <a href="#" class="card-link" style={{fontSize:'10px'}}>Details</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                        <div className="card">
                            <img className="card-img-top" src={plain} alt="plain" />
                            <div className="card-body" style={{padding:'0.3rem'}}>
                            {/* <a href="#" class="card-link" style={{fontSize:'10px'}}>Featured</a> */}
                            {/* <a href="#" class="card-link sweet" style={{fontSize:'10px',marginLeft:'0.3rem'}}>Top Rated</a> */}
                            <h6 className="text-muted pt-2">Aparements</h6>
                            <h6 className="text-subtitle" style={{fontSize: '12px', fontWeight: '600'}}>Mountain Retreat Room</h6>
                            <h5>$240<span className="text-muted" style={{fontSize: '14px'}}>/night</span></h5>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <span style={{fontSize: '14px',paddingLeft: '3px'}}>14k reviews</span>
                            <a href="#" class="card-link" style={{fontSize:'10px'}}>Details</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Places_Listing;
