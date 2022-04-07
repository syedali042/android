import {React, useEffect, useState} from 'react';
import plain from "../../images/plain.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import GURL from '../../GURL'
import { useHistory } from "react-router-dom";

const Psd2card = (params) => {

    return (
        <>
            <section className="myCards">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <div className="card">
                            <img className="card-img-top" src={plain} alt="plain" />
                            <div className="card-body" style={{padding:'0.3rem'}}>
                            <h6 className="text-muted pt-2">Aparements</h6>
                            <h6 className="text-subtitle" style={{fontSize: '12px', fontWeight: '600'}}>Mountain Retreat Room</h6>
                            <h5>$240<span className="text-muted" style={{fontSize: '14px'}}>/night</span></h5>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <span style={{fontSize: '14px',paddingLeft: '3px'}}>14k reviews</span>
                            <a href="#" className="card-link" style={{fontSize:'10px'}}>Details</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="card">
                            <img className="card-img-top" src={plain} alt="plain1" />
                            <div className="card-body" style={{padding:'0.3rem'}}>
                            {/* <a href="#" className="card-link" style={{fontSize:'10px'}}>Featured</a> */}
                            {/* <a href="#" className="card-link sweet" style={{fontSize:'10px',marginLeft:'0.3rem'}}>Top Rated</a> */}
                            <h6 className="text-muted pt-2">Aparements</h6>
                            <h6 className="text-subtitle" style={{fontSize: '12px', fontWeight: '600'}}>Mountain Retreat Room</h6>
                            <h5>$240<span className="text-muted" style={{fontSize: '14px'}}>/night</span></h5>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <span style={{fontSize: '14px',paddingLeft: '3px'}}>14k reviews</span>
                            <a href="#" className="card-link" style={{fontSize:'10px'}}>Details</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                        <div className="card">
                            <img className="card-img-top" src={plain} alt="plain" />
                            <div className="card-body" style={{padding:'0.3rem'}}>
                            {/* <a href="#" className="card-link" style={{fontSize:'10px'}}>Featured</a> */}
                            {/* <a href="#" className="card-link sweet" style={{fontSize:'10px',marginLeft:'0.3rem'}}>Top Rated</a> */}
                            <h6 className="text-muted pt-2">Aparements</h6>
                            <h6 className="text-subtitle" style={{fontSize: '12px', fontWeight: '600'}}>Mountain Retreat Room</h6>
                            <h5>$240<span className="text-muted" style={{fontSize: '14px'}}>/night</span></h5>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <span style={{fontSize: '14px',paddingLeft: '3px'}}>14k reviews</span>
                            <a href="#" className="card-link" style={{fontSize:'10px'}}>Details</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="card">
                            <img className="card-img-top" src={plain} alt="plain1" />
                            <div className="card-body" style={{padding:'0.3rem'}}>
                            {/* <a href="#" className="card-link" style={{fontSize:'10px'}}>Featured</a> */}
                            {/* <a href="#" className="card-link sweet" style={{fontSize:'10px',marginLeft:'0.3rem'}}>Top Rated</a> */}
                            <h6 className="text-muted pt-2">Aparements</h6>
                            <h6 className="text-subtitle" style={{fontSize: '12px', fontWeight: '600'}}>Mountain Retreat Room</h6>
                            <h5>$240<span className="text-muted" style={{fontSize: '14px'}}>/night</span></h5>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <span style={{fontSize: '14px',paddingLeft: '3px'}}>14k reviews</span>
                            <a href="#" className="card-link" style={{fontSize:'10px'}}>Details</a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                        <div className="card">
                            <img className="card-img-top" src={plain} alt="plain" />
                            <div className="card-body" style={{padding:'0.3rem'}}>
                            {/* <a href="#" className="card-link" style={{fontSize:'10px'}}>Featured</a> */}
                            {/* <a href="#" className="card-link sweet" style={{fontSize:'10px',marginLeft:'0.3rem'}}>Top Rated</a> */}
                            <h6 className="text-muted pt-2">Aparements</h6>
                            <h6 className="text-subtitle" style={{fontSize: '12px', fontWeight: '600'}}>Mountain Retreat Room</h6>
                            <h5>$240<span className="text-muted" style={{fontSize: '14px'}}>/night</span></h5>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <span style={{fontSize: '14px',paddingLeft: '3px'}}>14k reviews</span>
                            <a href="#" className="card-link" style={{fontSize:'10px'}}>Details</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="card" style={{marginBottom: '40px'}}>
                            <img className="card-img-top" src={plain} alt="plain1" />
                            <div className="card-body" style={{padding:'0.3rem'}}>
                            {/* <a href="#" className="card-link" style={{fontSize:'10px'}}>Featured</a> */}
                            {/* <a href="#" className="card-link sweet" style={{fontSize:'10px',marginLeft:'0.3rem'}}>Top Rated</a> */}
                            <h6 className="text-muted pt-2">Aparements</h6>
                            <h6 className="text-subtitle" style={{fontSize: '12px', fontWeight: '600'}}>Mountain Retreat Room</h6>
                            <h5>$240<span className="text-muted" style={{fontSize: '14px'}}>/night</span></h5>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                            <span style={{fontSize: '14px',paddingLeft: '3px'}}>14k reviews</span>
                            <a href="#" className="card-link" style={{fontSize:'10px'}}>Details</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Psd2card;
