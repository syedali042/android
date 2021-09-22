
import {React, useState, useEffect, Suspense, Component, Fragment} from 'react'
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import GURL from '../../GURL'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import HFooter from './Hfooter';
import {faMapMarkerAlt, faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";

export default class Ad_Listing extends Component {
    constructor(props) {

        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 5,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    bookAdventure =(id) => {
        this.props.history.push('../adventure_booking/'+id);
    }
    receivedData() {
        document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active');
        
        const AdventureType = this.props.adventureType;
        axios.post(`${GURL.BASEURL}adventureByType`, {AdventureType: AdventureType, adventure_id:'0'})
            .then(res => {
                const data = res.data.data.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(adv => {

                return (
                    <>
                     <div className="row m-0 p-0 d-flex align-items-center justify-content-center">
                            <div className="col-4 m-0 p-0">
                                <img className="m-0 p-0" src={`${GURL.SERVER_IMAGES}/adventureImages/${adv.adv_images[0]}`} alt="plain" style={{borderRadius:'50%', height:'100px', width:'100px'}} />
                            </div>
                            <div className="col-8 m-0 p-0">
                                <div className="">
                                    <div className="card-body" style={{padding:'0.3rem'}}>
                                    {/* <a href="#" class="card-link" style={{fontSize:'10px'}}>Featured</a> */}
                                    {/* <a href="#" class="card-link sweet" style={{fontSize:'10px',marginLeft:'0.3rem'}}>Top Rated</a> */}
                                    <h6 style={{marginBottom:'-3%'}}>Rs.{adv.adventure_charges}<span className="text-muted" style={{fontSize: '14px'}}>/person</span></h6>
                                    <p style={{fontSize: '12px', fontWeight: 'bold', marginBottom:'-0.5%'}} className="text-muted pt-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-warning" /> &nbsp;{adv.adventure_city}</p>
                                    <p className="text-subtitle" style={{fontSize: '10px', fontWeight: '400'}}><FontAwesomeIcon icon={faMapMarkedAlt} className="text-warning" /> &nbsp;Mountain Retreat Room</p>
                                    <a href="javascript://" onClick={this.bookAdventure(adv.adventure_id)} class="btn btn-primary btn-sm w-100 card-link" style={{fontSize:'10px', marginTop:'-5%'}}>Book Now</a>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        <hr />
                    </>
                )})
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                })
                document.getElementsByClassName('loading-overlay')[0].classList.remove('is-active');
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <>
            <div className="loading-overlay">
            <img className="profile_img infinity-loop" src={window?`${GURL.SERVER_IMAGES}logo-n.png`:null} style={{width:'65px'}} alt="profile_img"/>    
            </div>
            <section className="psd2_heading" style={{marginTop:"-10%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="left_side">
                                <h5 className="text-muted">{this.state.postData ? this.state.postData.length : '0'} matches found for:</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section className="notification">
                    <div className="container">
                        {this.state.postData}
                        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <ReactPaginate
                                previousLabel={"prev"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}/>
                        </div>                
                    </div>
                </section>
            <HFooter /> 
            </>
        )
    }
}


