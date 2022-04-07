
import {React, useState, useEffect, Suspense, Component, Fragment} from 'react'
import Header from './SubComp/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import GURL from '../GURL'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import HFooter from './SubComp/Hfooter';
import {faMapMarkerAlt, faMapMarkedAlt, faSdCard, faIdCardAlt, faIdCard, faHeading} from "@fortawesome/free-solid-svg-icons";

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


    receivedData() {
        document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active');
        
        const AdventureType = this.props.match.params.id;
        axios.post(`${GURL.BASEURL}adventureByType`, {AdventureType: AdventureType, adventure_id:'0'})
            .then(res => {
                
                console.log(res.data)
                if(res.data.data!=='No Result Found'){
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
                                    {/* <a href="#" className="card-link" style={{fontSize:'10px'}}>Featured</a> */}
                                    {/* <a href="#" className="card-link sweet" style={{fontSize:'10px',marginLeft:'0.3rem'}}>Top Rated</a> */}
                                    <h5>Rs.{adv.adventure_charges}<span className="text-muted" style={{fontSize: '14px'}}>/person</span></h5>
                                    <p className="text-subtitle" style={{fontSize: '14px', fontWeight: '500'}}><FontAwesomeIcon icon={faHeading} className="text-warning" /> &nbsp;{adv.adventure_title}</p>
                                    <p style={{fontSize: '11px', marginTop:'-7%'}} className="text-muted"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-warning" /> &nbsp;{adv.adventure_place_address+', '+adv.adventure_city}</p>
                                    <a href="javascript://" onClick={()=>this.props.history.push('../adventure_booking/'+adv.adventure_id)} className="btn btn-primary btn-sm card-link d-inline-block" style={{width:'45%' ,fontSize:'10px', marginTop:'-5%'}}>Book Now</a>
                                    <a href="javascript://" onClick={()=>this.props.history.push('../adventure_details/'+adv.adventure_id)} className="btn btn-info text-white btn-sm card-link d-inline-block" style={{width:'45%' ,fontSize:'10px', marginTop:'-5%'}}>Details</a>
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
                }else{
                    document.getElementsByClassName('page')[0].classList.add('d-none');
                }  
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
            <Header />
            <div className="loading-overlay">
                {/* <span className="fas fa-spinner fa-3x fa-spin"></span> */}
                <img className="profile_img infinity-loop" src={window?`${GURL.SERVER_IMAGES}logo-n.png`:null} style={{width:'65px'}} alt="profile_img"/>    
            </div>
            <br />
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
                    {this.state.postData?this.state.postData:null}
                        <div className="page" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
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


