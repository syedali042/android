import {React, useState, useEffect, Suspense, Component, Fragment} from 'react'
import Header from './SubComp/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowsAltH, faUserFriends, faUser, faCalendarAlt, faMoneyBillWaveAlt} from "@fortawesome/free-solid-svg-icons";
import Tour_Heading from './SubComp/Tour_Heading';
import GURL from '../GURL'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import HFooter from './SubComp/Hfooter';


export default class Tour_Listing extends Component {
    constructor(props) {

        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 5,
            currentPage: 0,
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    
    receivedData() {
        document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active');
        
        const TourType = this.props.match.params.id;
        axios.post(`${GURL.BASEURL}tourListing`, {TourType: TourType, tour_id:'0'})
            .then(res => {
                const data = res.data.data.data;
                if(res.data.data!=='No Data Found'){
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(tour => {
                return (
                    <>
                     <div className="row">
                        <div className="col">
                            <div className="card" style={{border:'2px solid #e2e2e2'}}>
                                <img className="card-img-top" height="200px" src={`${GURL.SERVER_IMAGES}/tourImages/${tour.t_img[0]}`} alt="plain" />
                                <div className="card-body" style={{padding:'0.3rem'}}>
                                <h6 className="text-primary p-2">{tour.tour_title}</h6>
                                <div className="row" style={{fontSize:'15px'}}>
                                    <div className="col-5">
                                        <span className="text-default" style={{float:'left', fontSize:'12px'}}><FontAwesomeIcon icon={faCalendarAlt} className="text-success" />&nbsp; {tour.starting_from}</span>
                                    </div>
                                    <div className="col-2 text-warning">
                                        <center>
                                        <FontAwesomeIcon icon={faArrowsAltH} className="text-warning" />
                                        </center>
                                    </div>
                                    <div className="col-5">
                                        <span className="text-default" style={{float:'', fontSize:'12px'}}><FontAwesomeIcon icon={faCalendarAlt} className="text-success" />&nbsp; {tour.ending_at}</span>
                                    </div>
                                </div>
                                <div className="row" style={{fontSize:'15px'}}>
                                    <div className="col-5">
                                        <div className="text-default" style={{float:'left', fontSize:'10px'}}><FontAwesomeIcon icon={faUserFriends} className="text-success" /> Couple Charges</div>
                                        <br />
                                        <div className="text-default" style={{textAlign:'left', fontSize:'12px'}}> Rs.<span className="text-success" style={{fontSize:'16px'}}>{tour.charges_per_couple}</span>/-</div>
                                    </div>
                                    <div className="col-2 text-warning">
                                        <center>
                                        <FontAwesomeIcon icon={faMoneyBillWaveAlt} className="text-warning" />
                                        </center>
                                    </div>
                                    <div className="col-5">
                                        <div className="text-default" style={{float:'left', fontSize:'10px'}}><FontAwesomeIcon icon={faUser} className="text-success" /> Person Charges &nbsp;&nbsp;</div>
                                        <br />
                                        <div className="text-default" style={{textAlign:'left', fontSize:'12px'}}> Rs.<span className="text-success" style={{fontSize:'16px'}}>{tour.charges_per_person}</span>/-</div>
                                    </div>
                                </div>
                                    <a href="javascript://" onClick={() => this.props.history.push(`../tour_bookings/${tour.tour_id}`)} className="btn btn-primary btn-sm mt-2 d-inline-block" style={{width:'47%',fontSize:'10px'}}>Book Now</a>
                                    <a href="javascript://" onClick={() => this.props.history.push(`../tour_details/${tour.tour_id}`)} className="btn btn-danger btn-sm mt-2 d-inline-block" style={{width:'47%', float:'right',fontSize:'10px'}}>Get Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
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
            <div className="loading-overlay">
            <img className="profile_img infinity-loop" src={window?`${GURL.SERVER_IMAGES}logo-n.png`:null} style={{width:'65px'}} alt="profile_img"/>    
            </div>
            <Header />
            <br />
            <Tour_Heading matched={this.state.postData ? this.state.postData.length : 'No Match Found'}/>
                <section className="notification">
                    <div className="container">
                        <div className="row">
                            <div className="col mt-4">
                                {/* <h2>Notifications</h2> */}
                                <div className="border-top"></div>
                            </div>
                        </div>
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


