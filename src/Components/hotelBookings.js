
import logo from '../images/logo.jpeg';
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


export default class HotelBookings extends Component {
    constructor(props) {

        super(props);
        this.state = {
            offset: 0,
            postData: [],
            perPage: 15,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    
    receivedData() {
        // document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active');
        const id = this.props.match.params.id;
        const userString = localStorage.getItem('loggedInUser');
        const user = JSON.parse(userString);
        axios
            .post(`${GURL.BASEURL}getHotelBookings`, {id:user.app_user_id})
            .then(res => {

                if(res.data.status!==false){
                const data = res.data.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(nd => {
                    console.log(nd);
                return (
                <React.Fragment>
                    <div className="row" onClick={()=>this.props.history.push(`booking_details/${nd.request_id}`)}>
                        <div className="col mt-3">
                            <div className="notification_card">
                                <div className="notification_card_left">
                                    <img src={`${GURL.SERVER_IMAGES}roomImages/${nd.room.room_title_img}`} alt="logo" />
                                </div>
                                <div className="notification_card_right">
                                    <h6>{nd.hotel.hotel_name}</h6>
                                    <p>{nd.hotel.hotel_address} <span className="badge d-inline-block" style={{float:'right'}}>{nd.request_status=="Received"? "In Progress" : nd.request_status}</span></p>
                                    <span>{nd.check_in_date} - {nd.check_out_date}</span>
                                </div>
                            </div>
                            <div className="notification_card_details">
                                <ul>
                                    <li>Adult: 0{nd.request_adults}</li>
                                    <li>Children: 0{nd.request_children}</li>
                                </ul>
                                <a className="text-white">View Full Details</a>
                            </div>
                        </div>
                    </div>
                </React.Fragment>)})
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                })
                }else{
                    document.getElementsByClassName('page')[0].classList.add('d-none');
                }
                document.getElementsByClassName('data-overlay')[0].classList.toggle('d-none');
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
                <div className="data-overlay" style={{display: 'flex',background: '#fff',position: 'absolute',bottom: 0,left: 0,right: 0,top: 0,zIndex: 9998,alignItems: 'center',justifyContent: 'center'}}>
                <img className="profile_img infinity-loop" src={window?`${GURL.SERVER_IMAGES}logo-n.png`:null} style={{width:'65px'}} alt="profile_img"/>    
                </div>
                <section className="notification">
                    <div className="container">
                        <div className="row">
                            <div className="col mt-4">
                                <h2>Hotel Bookings</h2>
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


