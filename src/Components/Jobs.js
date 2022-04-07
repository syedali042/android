import Header from './SubComp/Header';
import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHotel, faMapMarker, faStar} from "@fortawesome/free-solid-svg-icons";
import plain from "../images/plain.jpg";
import { useHistory } from "react-router-dom";
import GURL from '../GURL'
import HFooter from './SubComp/Hfooter';

export default class JobsListing extends Component {
    constructor(props) {

        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 15,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        const id = this.props.match.params.id;
        axios
            .post(`${GURL.BASEURL}getJobs`, {status: 'active'})
            .then(res => {
                const data = res.data.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(jobs => <React.Fragment>
                    <div className="col-12" key={jobs.job_id}>
                        <div className="card">
                            {/* <img className="card-img-top" src={`${GURL.SERVER_APP_IMAGES}/places/places-images/${jobs.places_images[0]}`} alt="plain" /> */}
                            <div className="card-body p-2" style={{padding:'0.3rem'}}>
                                {/* <a href="#" className="card-link" style={{fontSize:'10px'}}>Featured</a> */}
                                {/* <a href="#" className="card-link sweet" style={{fontSize:'10px',marginLeft:'0.3rem'}}>Top Rated</a> */}
                                <h6 className="text-muted pt-2">{jobs.job_type}<span className='text-uppercase' style={{float:'right'}}>{jobs.city}</span></h6>
                                <h5 className="text-subtitle" style={{fontSize: '18px', fontWeight: '600'}}>{jobs.job_title}</h5>
                                {/* <h5>$240<span className="text-muted" style={{fontSize: '14px'}}>/night</span></h5> */}
                                {/* <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: '#e67e22',paddingRight: '3px'}}/> */}
                                {/* <span style={{fontSize: '14px',paddingLeft: '3px'}}>14k reviews</span> */}
                                <p style={{textAlign:'justify'}}>{jobs.job_description}</p>
                                <div className="text-muted"><span style={{float:'left'}}>{jobs.concerned_person_name}</span><span style={{float:'right'}}>{jobs.concerned_person_contact}</span></div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </React.Fragment>)

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
            <div style={{height:'100vh', overflow:'scroll'}}>
            <Header />
            <div className="loading-overlay is-active">
            <img className="profile_img infinity-loop" src={window?`${GURL.SERVER_IMAGES}logo-n.png`:null} style={{width:'65px'}} alt="profile_img"/>    
            </div>
            <br />
            <section className="psd2_heading" style={{marginTop:"-10%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="left_side">
                                <h5 className="text-muted">{this.state.postData ? this.state.postData.length : '0'}+ matches found for: <p className="text-danger">{this.props.match.params.id}</p></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <br />
            <div className="container">
                {this.state.postData}
                <>
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
                </>
            </div>
            <br /><br />
            <HFooter /> 
            </div>
        )
    }
}